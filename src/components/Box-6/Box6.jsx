import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Box3 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.div layout>
        <motion.button
          className="example-button"
          onClick={() => setIsVisible(!isVisible)}
        >
          Show/Hide
        </motion.button>
      </motion.div>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="box"
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Box3;
