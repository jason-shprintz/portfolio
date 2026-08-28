import {
  ANALYTICS_CONSENT_COOKIE,
  ANALYTICS_CONSENT_MAX_AGE_SECONDS,
  isAnalyticsConsentRequired,
  parseConsentValue,
  type ConsentState,
  type ConsentValue,
} from './analytics-consent';

declare global {
  interface Window {
    zaraz?: {
      track?: (eventName: string, params?: Record<string, unknown>) => void;
      consent?: {
        APIReady?: boolean;
        setAll?: (value: boolean) => void;
        getAll?: () => Record<string, boolean>;
        // Delivers Pageview events Zaraz withheld while consent was absent.
        // Called by ConsentBanner.astro immediately after a visitor accepts,
        // otherwise the first pageview of the session is lost.
        sendQueuedEvents?: () => void;
      };
      set?: (key: string, value: unknown) => void;
    };
  }
}

// The consent cookie is deliberately NOT HttpOnly: the banner must read it to
// know whether to show, and write it when clicked.

function readConsentCookie(): ConsentValue | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const prefix = `${ANALYTICS_CONSENT_COOKIE}=`;
  const entry = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));

  if (!entry) {
    return null;
  }

  try {
    return parseConsentValue(decodeURIComponent(entry.slice(prefix.length)));
  } catch {
    return null;
  }
}

function writeConsentCookie(value: ConsentValue) {
  // Secure is conditional so the cookie still sets on http://localhost during
  // `astro dev`; production is HTTPS-only and always gets it.
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie =
    `${ANALYTICS_CONSENT_COOKIE}=${value}; Path=/; ` +
    `Max-Age=${ANALYTICS_CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export function getAnalyticsConsentRequirement(): boolean {
  return isAnalyticsConsentRequired();
}

/**
 * The visitor's recorded choice, for the consent banner to decide whether to
 * show. `null` means unanswered, which is distinct from 'denied'.
 */
export function readAnalyticsConsent(): ConsentState {
  if (!isAnalyticsConsentRequired() || typeof window === 'undefined') {
    return 'not-required';
  }
  return readConsentCookie();
}

export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    writeConsentCookie(granted ? 'granted' : 'denied');
  } catch {
    // no-op
  }

  // Zaraz maintains its own consent state for the tools it loads. Without
  // this it would keep sending to GA4 regardless of the cookie above.
  try {
    window.zaraz?.consent?.setAll?.(granted);
    window.zaraz?.set?.('consent', { analytics: granted });
  } catch {
    // no-op
  }
}
