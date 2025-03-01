// src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // New state

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasBeenVisible(true); // Update state to stop observing
      } else if (!hasBeenVisible) {
        setIsVisible(false);
      }
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options, hasBeenVisible]); // Add hasBeenVisible to dependency array

  return [ref, isVisible];
};

export default useIntersectionObserver;
