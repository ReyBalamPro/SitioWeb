import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const ScrollRevealText = ({ text, className }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const totalChars = characters.length;

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, i) => {
        const start = i / totalChars;
        const end = start + 0.15;
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
};
