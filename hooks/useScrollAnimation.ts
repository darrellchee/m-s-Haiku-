import { useEffect, useRef, useState } from "react";

/**
 * Hook that triggers animations when an element scrolls into view.
 * Returns [ref, isVisible] where isVisible becomes true when element enters viewport.
 * Fires only once per element lifecycle.
 */
export function useScrollAnimation(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [isVisible]);

  return [ref, isVisible];
}
