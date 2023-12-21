interface MotionFadeIn {
  duration: number;
  delay?: number;
}

export function fadeIn({ duration, delay }: MotionFadeIn) {
  return {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay: delay ? delay : 0,
      },
    },
  };
}
