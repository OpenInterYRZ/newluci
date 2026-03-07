import Link from "next/link";

interface GlassButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function GlassButton({
  href,
  text,
  className = "",
}: GlassButtonProps) {
  return (
    <Link
      href={href}
      className={`border border-grey-9/20 dark:border-white/20 rounded-lg py-2.5 px-6 hover:bg-grey-9/5 dark:hover:bg-white/5 transition-all inline-block ${className}`}
    >
      <span className="text-grey-9 dark:text-white font-[Manrope] text-sm font-medium">
        {text}
      </span>
    </Link>
  );
}
