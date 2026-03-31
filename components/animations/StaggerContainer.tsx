"use client";

import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
    isActive?: boolean;
};

export default function StaggerContainer({
    children,
    isActive = false,
}: Props) {
    return (
        <motion.div
            initial="hidden"
            animate={isActive ? "show" : "hidden"}
            variants={{
                hidden: {},
                show: {
                    transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.12,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}