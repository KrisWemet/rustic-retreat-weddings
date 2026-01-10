import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 600,
  once = true,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: once });

  const directionClasses = {
    up: 'translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        !isVisible && 'opacity-0',
        !isVisible && directionClasses[direction],
        isVisible && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
