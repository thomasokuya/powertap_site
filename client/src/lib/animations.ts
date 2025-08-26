export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardHover = {
  whileHover: { 
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  whileTap: { scale: 0.98 }
};

export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  whileTap: { scale: 0.95 }
};
