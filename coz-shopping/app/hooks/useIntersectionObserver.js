import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (callback) => {
  const [observationTarget, setObservationTarget] = useState(null);
  console.log("ob target = ", observationTarget);

  const observer = useRef();
  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback();
      },
      { threshold: 0 }
    );
  });

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;

    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};
