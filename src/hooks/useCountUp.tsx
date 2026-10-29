import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  threshold?: number;
  delay?: number;
}

// Distância abaixo da tela em que o número é zerado, antes de ficar visível
const PRIME_MARGIN = 300;

export const useCountUp = ({
  end,
  duration = 2000,
  suffix = '',
  threshold = 0.2,
  delay = 0
}: UseCountUpOptions) => {
  // Começa no valor final: quem ainda não rolou até aqui (e o Google) vê o número real
  const [count, setCount] = useState(end);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animates = useRef(true);

  // Zera pouco antes de entrar na tela, para a contagem partir do 0 sem salto visível
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animates.current = false;
      return;
    }

    if (el.getBoundingClientRect().top < window.innerHeight + PRIME_MARGIN) {
      setCount(0);
      return;
    }

    const primer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          primer.disconnect();
        }
      },
      { rootMargin: `0px 0px ${PRIME_MARGIN}px 0px` }
    );
    primer.observe(el);

    return () => primer.disconnect();
  }, []);

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
    if (!isVisible || !animates.current) return;

    let animationFrame = 0;
    const delayTimeout = setTimeout(() => {
      let startTime: number | null = null;

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
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, end, duration, delay]);

  return { count, suffix, ref };
};
