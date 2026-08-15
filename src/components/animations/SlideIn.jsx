"use client"

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SlideIn = (props) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div ref={containerRef}>
      <motion.div
        initial={{ x: "-100vw" }} // Start completely off-screen to the left
        animate={isVisible ? { x: 0 } : {}} // Animate to its natural position
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default SlideIn;
