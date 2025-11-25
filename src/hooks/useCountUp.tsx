import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  threshold?: number;
  delay?: number;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  threshold = 0.2,
  delay = 0
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const delayTimeout = setTimeout(() => {
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (ease-out-cubic - mais suave)
        const easeOutCubic = 1 - Math.pow(1 - progress, 2);
        
        setCount(Math.floor(easeOutCubic * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [isVisible, end, duration, delay]);

  return { count, suffix, ref };
};
