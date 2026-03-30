"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import TypingAnimation from "@/components/ui/Typing";

import { MatchaItem } from "@/data/matchaMenu";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    active: MatchaItem;
    setActive: (item: MatchaItem) => void;
    menu: MatchaItem[];
};

export default function HeroSection({ active, setActive, menu }: Props) {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-brand-300 overflow-hidden"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-125 h-125 bg-white/20 blur-[120px] rounded-full -top-25-[-100px]" />
                <div className="absolute w-100 h-100 bg-lime-200/30 blur-[120px] rounded-full -bottom-25 -right-25" />
            </div>

            <div className="max-w-300 mx-auto px-6 pt-20 flex flex-col lg:px-12 lg:grid lg:grid-cols-3 items-center">
                {/* LEFT */}
                <div className="container-type-inline-size flex flex-col z-10 text-center lg:text-left space-y-12">
                    <div className="[@container]">
                        <h1 className="font-heading text-display text-neutral-black tracking-tight">
                            Matcha
                        </h1>

                        <h3 className="flex gap-2 justify-center lg:justify-start font-heading text-h3 text-neutral-black">
                            <span className="text-neutral-white">For</span>
                            <TypingAnimation
                            strings={[
                                "Everyday Energy",
                                "Lively Focus",
                                "Modern Living",
                            ]}
                            loop
                            />
                        </h3>
                    </div>

                    <Button className="mx-auto lg:mx-0 w-fit font-semibold px-6 py-3 rounded-full bg-neutral-black text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Find Us
                    </Button>
                </div>

                {/* CENTER */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative translate-y-16"
                    >
                        <Image
                        src={active.image}
                        alt={active.name}
                        width={608}
                        height={1080}
                        className="scale-150 translate-y-16 hover:scale-155 transition-transform duration-500"
                        priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* RIGHT */}
                <div className="hidden lg:flex flex-col items-end text-right z-10">
                    <div className="max-w-xs w-full ml-auto flex flex-col space-y-5">
                        <div className="relative flex flex-wrap gap-2 w-full justify-start">

                        {menu.map((item) => {
                            const isActive = active.id === item.id;

                            return (
                            <button 
                                key={item.id}
                                onClick={() => setActive(item)}
                                className="
                                relative px-3 py-1.5 text-xs font-medium rounded-full
                                border border-neutral-black/30
                                transition-colors duration-200 hover:scale-95
                                "
                            >
                                {isActive && (
                                <motion.span
                                    layoutId="selector-pill"
                                    className="absolute inset-0 bg-neutral-black rounded-full shadow-md"
                                    transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                    }}
                                />
                                )}

                                <span
                                className={`relative z-10 ${
                                    isActive ? "text-white" : "text-neutral-black"
                                }`}
                                >
                                {item.name}
                                </span>
                            </button>
                            );
                        })}
                        </div>

                        <AnimatePresence mode="wait">
                        <motion.p
                            key={active.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-body-sm text-left leading-relaxed opacity-70 w-full"
                        >
                            {active.description}
                        </motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={{
                            hidden: {},
                            show: {
                                transition: {
                                staggerChildren: 0.08,
                                },
                            },
                            }}
                            className="flex flex-wrap gap-3 justify-start w-full"
                        >
                            {active.ingredients.map((ing, i) => (
                            <motion.div
                                key={ing}
                                variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0 },
                                }}
                                className="flex items-center gap-2 text-body-sm opacity-70"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-black/60" />
                                <span>{ing}</span>
                            </motion.div>
                            ))}
                        </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}