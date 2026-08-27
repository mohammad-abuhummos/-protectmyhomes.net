import { Link } from "react-router";
import type { Route } from "./+types/thank-you";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thank You | ProtectMyHomes.net" },
    {
      name: "description",
      content: "Your quote request has been received. Here's what happens next.",
    },
  ];
}

const nextSteps = [
  {
    title: "We match you with providers",
    text: "Our system is already comparing licensed security companies that serve your ZIP code.",
  },
  {
    title: "Providers reach out",
    text: "Up to four matched providers will contact you shortly — usually within minutes during business hours — with personalized quotes.",
  },
  {
    title: "You compare and choose",
    text: "Review each offer, ask questions, and pick the best deal. There's no obligation to buy anything.",
  },
];

export default function ThankYou() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" aria-hidden="true">
            <path
              d="m5 12.5 5 5L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-navy-950">
          You're all set!
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Your free quote request has been received. Keep your phone nearby —
          matched providers typically reach out quickly with your personalized
          offers.
        </p>

        <div className="mt-12 space-y-4 text-left">
          {nextSteps.map((step, i) => (
            <div
              key={step.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="font-bold text-navy-950">{step.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Questions in the meantime? Call us at{" "}
          <a href="tel:+18885550123" className="font-semibold text-brand-600">
            (888) 555-0123
          </a>{" "}
          or{" "}
          <Link to="/contact" className="font-semibold text-brand-600 underline">
            contact our team
          </Link>
          .
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-sm font-semibold text-slate-500 underline hover:text-navy-950"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
