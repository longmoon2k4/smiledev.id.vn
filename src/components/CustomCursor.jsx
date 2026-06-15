import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 50,
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(242, 111, 33, 0.2)', // FPT Orange with low opacity
      border: '1px solid #F26F21',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 50,
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan bg-transparent pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
    />
  );
};

export default CustomCursor;
