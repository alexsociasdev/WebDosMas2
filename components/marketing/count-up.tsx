"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  suffix?: string;
};

export function CountUp({ to, duration = 1200, suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target || started) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) {
      return;
    }

    const startTime = performance.now();
    let raf = 0;

    const animate = (current: number) => {
      const progress = Math.min((current - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [to, duration, started]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
