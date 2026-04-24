import { useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl lg:text-4xl font-display font-bold text-slate-950 mb-1 flex items-center justify-center">
        <span>{displayValue}</span>
        <span className="text-brand-blue">{suffix}</span>
      </div>
      <p className="text-slate-400 font-medium uppercase tracking-[1px] text-[10px]">
        {label}
      </p>
    </div>
  );
}
