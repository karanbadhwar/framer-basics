import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    console.log("Is in view ->", isInView);
  }, [isInView]);
  return (
    <>
      <div
        style={{
          height: "150vh",
          marginTop: "20rem",
          padding: "2rem",
        }}
      >
        <motion.div
          style={{
            height: "100vh",
            background: "chocolate",
          }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        ></motion.div>
        <div
          ref={ref}
          style={{
            height: "100vh",
            background: isInView ? "green" : "blue",
            transition: "1s background",
          }}
        />
      </div>
    </>
  );
}
export default ViewBasedAnimations;
