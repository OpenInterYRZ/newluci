import Link from 'next/link';

export default function CareerNotFound() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-grey-9 mb-4">
          Position not found
        </h1>
        <Link
          href="/careers"
          className="text-[var(--primary)] hover:underline"
        >
          Back to careers
        </Link>
      </div>
    </div>
  );
}
