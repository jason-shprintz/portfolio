import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../constants";

type DeviceType = "mobile" | "tablet" | "desktop";

/**
 * Custom React hook that determines the current device type (`mobile`, `tablet`, or `desktop`)
 * based on the window's inner width and predefined breakpoints.
 *
 * The hook listens for window resize events and updates the device type accordingly.
 *
 * @returns {DeviceType} The current device type as a string: `"mobile"`, `"tablet"`, or `"desktop"`.
 *
 * @example
 * const deviceType = useDeviceType();
 * if (deviceType === "mobile") {
 *   // Render mobile-specific UI
 * }
 */
const useDeviceType = (): DeviceType | null => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const determineDeviceType = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setDeviceType("mobile");
      } else if (width <= BREAKPOINTS.tablet) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    determineDeviceType();
    window.addEventListener("resize", determineDeviceType);
    return () => window.removeEventListener("resize", determineDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
