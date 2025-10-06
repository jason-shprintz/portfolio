import { useEffect, useState } from "react";

type Orientation = "portrait" | "landscape";

/**
 * Custom React hook that returns the current screen orientation ("landscape" or "portrait").
 *
 * The hook listens for window resize events and updates the orientation value accordingly.
 *
 * @returns {"landscape" | "portrait"} The current orientation of the window.
 *
 * @example
 * const orientation = useOrientation();
 * console.log(orientation); // "landscape" or "portrait"
 */
const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>("portrait");

  useEffect(() => {
    const getOrientation = () =>
      window.innerWidth > window.innerHeight ? "landscape" : "portrait";

    const handleResize = () => {
      setOrientation(getOrientation());
    };

    if (typeof window !== "undefined") {
      setOrientation(getOrientation());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return orientation;
};

export default useOrientation;
