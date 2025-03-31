// /src/components/Fadein/Fadein.tsx

"use client";

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props{
  children: ReactNode;
}

export default function FadeIn({ children }: Props) {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-full ${inView ? "opacity-100 flex justify-center items-center" : "opacity-0 translate-y-[50%]"} duration-[1s]`}
    >
      {children}
    </div>
  )
}
