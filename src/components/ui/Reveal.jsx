import { motion as Motion } from "motion/react";

export default function Reveal({ children, delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}
