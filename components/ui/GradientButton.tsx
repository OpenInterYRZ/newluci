import Link from "next/link";

interface GradientButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function GradientButton({
  href,
  text,
  className = "",
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-text-0 rounded-lg py-2.5 px-6 hover:opacity-90 transition-all inline-block ${className}`}
    >
      <span className="text-bg-0 text-sm font-semibold">{text}</span>
    </Link>
  );
}
