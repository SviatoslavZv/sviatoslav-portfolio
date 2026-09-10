"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay, ease: "easeOut" }
            }
        >
            {children}
        </motion.div>
    );
}