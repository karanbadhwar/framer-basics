import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useEffect } from "react";

function ScrollBasedAnimations() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(86,1,245)", "rgb(255,255,204)", "rgb(1,245,13)"]
  );

  //   useEffect(() => {
  //     console.log(scaleX);
  //   }, [scaleX]);
  return (
    <div>
      <motion.div
        style={{
          //   scaleX: scrollYProgress,
          scaleX: scaleX,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "20px",
          background,
        }}
      />
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          //   marginTop: "100vh",
          padding: "1.25rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          corrupti reprehenderit consequatur necessitatibus nemo placeat
          consectetur in hic itaque vel veniam quam dolorum aliquid cum, nobis
          commodi culpa ad! Itaque dolore provident architecto consectetur
          laboriosam ducimus eaque quas repellat rerum, totam odio natus animi
          officia debitis. Consequuntur beatae aut inventore!
        </p>
      </div>
    </div>
  );
}
export default ScrollBasedAnimations;
