import { motion } from "framer-motion";

const variants = {
  up: {
    hidden:  { opacity: 0, y: 50, scale: 0.96, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0,  scale: 1,    filter: "blur(0px)" },
  },
  down: {
    hidden:  { opacity: 0, y: -50, scale: 0.96, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0,   scale: 1,    filter: "blur(0px)" },
  },
  left: {
    hidden:  { opacity: 0, x: 60, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0,  filter: "blur(0px)" },
  },
  right: {
    hidden:  { opacity: 0, x: -60, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0,   filter: "blur(0px)" },
  },
  fade: {
    hidden:  { opacity: 0, scale: 0.94, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1,    filter: "blur(0px)" },
  },
  pop: {
    hidden:  { opacity: 0, scale: 0.80, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1,    filter: "blur(0px)" },
  },
};

const spring = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.8,
};

export default function Reveal({ children, direction = "up", delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...spring, delay }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
