/**
 * Shared consent vocabulary for browser and server-side code.
 *
 * Consent lives in a cookie so both server and browser see the same value.
 */

export const ANALYTICS_CONSENT_COOKIE = 'analytics-consent';

/** One year, the usual ceiling for a consent record before re-prompting. */
export const ANALYTICS_CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type ConsentValue = 'granted' | 'denied';

/**
 * `null` means the visitor has not chosen yet — distinct from 'denied'.
 * A banner shows on `null`, not on 'denied'.
 */
export type ConsentState = ConsentValue | 'not-required' | null;

/**
 * Vite inlines `import.meta.env.*` at build time.
 * `PUBLIC_` prefix is required for Astro to expose the variable to client code.
 */
export function isAnalyticsConsentRequired(): boolean {
  return import.meta.env.PUBLIC_ANALYTICS_REQUIRE_CONSENT === '1';
}

export function parseConsentValue(
  raw: string | null | undefined,
): ConsentValue | null {
  return raw === 'granted' || raw === 'denied' ? raw : null;
}
