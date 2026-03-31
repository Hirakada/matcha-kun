"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useScrollDirection from "./useScrollDirection";

type Props = {
    children: (isVisible: boolean) => React.ReactNode;
    className?: string;
};

export default function RevealOnScroll({
    children,
    className = "",
}: Props) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        amount: 0.3, 
    });

    const direction = useScrollDirection();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (direction === "down" && isInView) {
            setVisible(true);
        }

        if (direction === "up" && !isInView) {
            const timeout = setTimeout(() => {
            setVisible(false);
            }, 120); 
            return () => clearTimeout(timeout);
        }
    }, [isInView, direction]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 60 }}
            animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : 60,
            }}
            transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children(visible)}
        </motion.div>
    );
}