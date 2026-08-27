import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us & Our Team | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "Learn about ProtectMyHomes.net — our mission to help every American family find the right home security system, and the team behind it.",
    },
  ];
}

const values = [
  {
    title: "Transparency first",
    text: "We're upfront about how we work: our service is free to you because our partners pay us for introductions. That never affects our matching — we recommend what fits your home, not what pays most.",
  },
  {
    title: "Only vetted partners",
    text: "Every provider in our network is licensed, insured, and held to strict service standards. If a partner doesn't treat our users well, they're out.",
  },
  {
    title: "Your data, respected",
    text: "We only share your information with the providers you're matched with — never data brokers. You can opt out at any time.",
  },
  {
    title: "No pressure, ever",
    text: "Compare quotes on your schedule. We win when you find the right system, whether that takes two hours or two months.",
  },
];

const team = [
  {
    name: "Michael Torres",
    role: "Founder & CEO",
    bio: "Former regional director at a national security integrator with 15 years in the industry. Michael started ProtectMyHomes after watching too many families overpay for systems they didn't need.",
    initials: "MT",
  },
  {
    name: "Sarah Chen",
    role: "Head of Partnerships",
    bio: "Sarah manages our provider network and negotiates the exclusive promotions our users get. She personally vets every partner before they join.",
    initials: "SC",
  },
  {
    name: "David Okafor",
    role: "Lead Security Advisor",
    bio: "A 12-year veteran alarm technician and CPI-certified consultant, David trains our advisor team and writes our buying guides.",
    initials: "DO",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Experience Manager",
    bio: "Emily leads the support team that helps thousands of homeowners each month navigate quotes, promotions, and installations.",
    initials: "ER",
  },
  {
    name: "James Whitfield",
    role: "Head of Compliance",
    bio: "James ensures every lead we handle meets TCPA, CCPA, and state privacy requirements — protecting both consumers and partners.",
    initials: "JW",
  },
  {
    name: "Aisha Patel",
    role: "Marketing Director",
    bio: "Aisha makes sure homeowners across all 50 states can find us when they need honest, side-by-side security comparisons.",
    initials: "AP",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold tracking-widest text-accent-400 uppercase">
            About us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Helping American families feel safe at home
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            ProtectMyHomes.net was founded on a simple idea: choosing a home
            security system shouldn't require a dozen phone calls, pushy sales
            visits, or guesswork. We bring the industry's best providers to
            you, side by side, so you can decide with confidence.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy-950">
                Our mission
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Every 25 seconds, a burglary happens somewhere in the United
                States — yet fewer than 1 in 4 homes has a security system.
                The biggest barriers? Confusing options and fear of overpaying.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                We remove both. Our free comparison service matches you with
                licensed providers competing for your business, which means
                better prices, clearer options, and a decision you can feel
                good about. Since our founding, we've helped over a million
                households find the right protection.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                >
                  <h3 className="font-bold text-navy-950">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-brand-600 uppercase">
              Our team
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              The people behind ProtectMyHomes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Security industry veterans, consumer advocates, and support
              specialists — all working to make home protection simple.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-navy-800 text-2xl font-extrabold text-white">
                  {member.initials}
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accent-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950">
            Ready to find your perfect security match?
          </h2>
          <Link
            to="/quote"
            className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-4 text-lg font-bold text-navy-950 shadow-lg transition hover:bg-accent-400"
          >
            Get My Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
