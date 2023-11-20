import { motion, useAnimation } from "framer-motion";

const Box3 = () => {
  const control = useAnimation();

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1500,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "0%",
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div
        className="box"
        animate={control}
        transition={{}}
        initial={{}}
      ></motion.div>
    </div>
  );
};

export default Box3;
