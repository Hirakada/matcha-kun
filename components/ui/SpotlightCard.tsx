"use client";

import { useState, type FC, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const SpotlightCard: FC<Props> = ({ children, className = "", ...props }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      {...props}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className={`relative group rounded-3xl ${className}`}
    >
      {/* spotlight */}
      <div
        className="
          pointer-events-none absolute inset-0 
          opacity-0 group-hover:opacity-100 
          transition duration-300
          hidden lg:block
        "
        style={{
          background: `radial-gradient(
            220px circle at ${pos.x}px ${pos.y}px,
            rgba(141,190,79,0.08),
            transparent 70%
          )`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;