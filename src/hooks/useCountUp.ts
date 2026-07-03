import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * useCountUp — animates a number from 0 to `target` over `duration` ms once
 * the returned ref scrolls into view. Used for small stat callouts (e.g.
 * "8.98 CGPA", "6 Projects") where a count-up reads as more alive than a
 * static number just appearing.
 */
export function useCountUp(target: number, duration = 1200, decimals = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    let frameId: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — fast start, gentle settle, matches the rest of
      // the site's motion language rather than a linear count.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * target).toFixed(decimals)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration, decimals]);

  return { ref, value };
}
