export const motionDuration = {
  instant: 0.12,
  fast: 0.25,
  normal: 0.5,
  slow: 0.8,
  scene: 0.8,
  cinematic: 1.2,
};

export const motionEasing = {
  // A much softer, more fluid easing curve to reduce stiffness
  smooth: [0.16, 1, 0.3, 1] as const, 
  bounce: [0.34, 1.56, 0.64, 1] as const,
};

export const sceneVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: motionDuration.scene, 
      ease: motionEasing.smooth 
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.98, // Scaling down slightly feels softer than scaling up
    transition: {
      duration: motionDuration.normal, // Faster exit so it doesn't hang
      ease: motionEasing.smooth
    }
  },
};

export const fadeUpVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionDuration.slow,
      ease: motionEasing.smooth
    }
  },
  exit: {
    opacity: 0,
    y: 5, // A smaller movement on exit feels less rigid
    transition: {
      duration: motionDuration.fast,
      ease: motionEasing.smooth
    }
  }
};

export const staggerContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};
