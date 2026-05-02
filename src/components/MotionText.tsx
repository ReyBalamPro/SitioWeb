import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className, showAsterisk, style }: WordsPullUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <span key={i} className="relative inline-block overflow-hidden mr-[0.2em] last:mr-0 px-[0.02em]">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block"
          >
            {word}
            {showAsterisk && i === words.length - 1 && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] pointer-events-none self-start">
                *
              </span>
            )}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

export const WordsPullUpMultiStyle = ({ segments }: { segments: Segment[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  let wordIndex = 0;

  return (
    <div ref={ref} className="inline-flex flex-wrap justify-center text-center">
      {segments.map((segment, sIdx) => {
        const words = segment.text.split(" ");
        return (
          <span key={sIdx} className={segment.className}>
            {words.map((word, wIdx) => {
              const currentIdx = wordIndex++;
              return (
                <span key={wIdx} className="relative inline-block overflow-hidden mr-[0.2em] px-[0.02em]">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{
                      duration: 0.8,
                      delay: currentIdx * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};
