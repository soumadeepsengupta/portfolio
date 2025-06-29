import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      onFinish(); // notify parent to hide loader
    }, 2800); // total animation time
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black "
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.2, y: 0 }}
            animate={{ scale: 1.0, y: '-25%' }}
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            className="flex items-center justify-center w-full h-full"
            style={{ width: '100vw', height: '100vh' }}
          >
            <img
              src="/logo_dd.svg"
              alt="deepdesigns logo"
              className="w-full h-full object-contain invert z-10"
              draggable={false}
            />
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
