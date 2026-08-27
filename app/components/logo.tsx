export function ShieldMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 4 5.5v5.6c0 5 3.4 9.2 8 10.9 4.6-1.7 8-5.9 8-10.9V5.5L12 2Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M12 2 4 5.5v5.6c0 5 3.4 9.2 8 10.9 4.6-1.7 8-5.9 8-10.9V5.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2.3 2.3 4.2-4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <ShieldMark className="h-8 w-8 text-accent-500" />
      <span
        className={`text-lg font-extrabold tracking-tight ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        ProtectMy<span className="text-accent-500">Homes</span>
        <span className={dark ? "text-slate-400" : "text-slate-400"}>.net</span>
      </span>
    </span>
  );
}
