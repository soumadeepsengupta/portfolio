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
            initial={{ scale: 0.8, y: 0 }}
            animate={{ scale: 3.8, y: '-100%' }}
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            className="flex items-center justify-center "
          >
            <img
              src="/logo_dd.svg"
              alt="deepdesigns logo"
              className="h-24 w-auto invert z-10"
              draggable={false}
            />
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
