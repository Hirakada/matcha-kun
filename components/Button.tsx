"use client";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "cta";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "default",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "px-6 py-2.5 rounded-full text-button font-medium transition-all duration-200";

 const interaction =
    "hover:bg-brand-500 hover:text-white hover:shadow-lg hover:scale-105 active:scale-95";

  const variants = {
    default:
      "bg-neutral-100 text-neutral-black shadow-sm",

    cta:
      "bg-brand-300 text-white shadow-sm",
  };

  const combined = `${base} ${variants[variant]} ${interaction} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
      </a>
    );
  }

  return <button className={combined}>{children}</button>;
}