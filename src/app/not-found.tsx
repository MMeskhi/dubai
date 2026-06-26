import Link from "next/link";

const ArrowIcon = () => (
  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5F413D"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  </span>
);

export default function NotFound() {
  return (
    <section className="bg-white flex flex-col items-center justify-center text-center px-5 py-16 min-h-[calc(100dvh-186px)] max-[480px]:min-h-[calc(100dvh-220px)] max-[480px]:py-12">
      <h1 className="font-heading font-extrabold leading-none text-[#E5E2DF] text-[clamp(7rem,22vw,15rem)] select-none m-0">
        404
      </h1>
      <p className="text-base text-muted max-w-[420px] mt-4 mb-10 leading-relaxed max-[480px]:text-[15px] max-[480px]:mb-8">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Link href="/" className="btn-pill">
        <span>Go Back to Homepage</span>
        <ArrowIcon />
      </Link>
    </section>
  );
}
