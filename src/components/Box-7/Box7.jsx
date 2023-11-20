import { motion, useAnimationControls } from "framer-motion";

function Box7() {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        // height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        whileHover={{ scale: 1.125 }}
        whileTap={{
          scale: 0.9,
          rotate: "2.5deg",
        }}
        onClick={handleClick}
      >
        Flip It!
      </motion.button>
      <motion.div
        className="box"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        animate={controls}
      ></motion.div>
    </div>
  );
}

export default Box7;
