"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type VariantType = "fadeUp" | "fadeLeft" | "fadeRight" | "zoom";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
  once?: boolean;
  disabled?: boolean; // for loader sync
};

const variantsMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
};

export default function RevealOnScroll({
  children,
  className = "",
  variant = "fadeUp",
  once = false,
  disabled = false,
}: Props) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-120px",
    once,
  });

  const shouldAnimate = isInView && !disabled;

  const selected = variantsMap[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      variants={{
        hidden: selected.hidden,
        show: {
          ...selected.show,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}