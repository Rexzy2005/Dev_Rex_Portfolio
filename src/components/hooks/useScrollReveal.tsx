import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible] as const;
};

export const useStaggeredReveal = (itemCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [ref, isVisible] = useScrollReveal();

  useEffect(() => {
    if (isVisible) {
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => new Set(prev).add(i));
        }, i * delay);
      }
    }
  }, [isVisible, itemCount, delay]);

  return [ref, visibleItems] as const;
};