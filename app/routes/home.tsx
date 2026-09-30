import { Form, Link } from "react-router";
import type { Route } from "./+types/home";
import { ShieldMark } from "~/components/logo";
import { partners } from "~/lib/partners";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "ProtectMyHomes.net | Compare Top Home Security Systems & Get Free Quotes",
    },
    {
      name: "description",
      content:
        "Compare America's top home security providers in minutes. Get free, no-obligation quotes from trusted partners like ADT, Vivint, SimpliSafe, and Ring. Protect your home today.",
    },
  ];
}

const stats = [
  { value: "1M+", label: "Homeowners helped" },
  { value: "8+", label: "Trusted security partners" },
  { value: "50", label: "States covered" },
  { value: "100%", label: "Free — no obligation" },
];

const steps = [
  {
    title: "Tell us about your home",
    text: "Answer a few quick questions about your property and what you want to protect. It takes under 2 minutes.",
  },
  {
    title: "We match you with top providers",
    text: "Our system compares trusted, licensed security companies serving your ZIP code and finds your best options.",
  },
  {
    title: "Compare free quotes & save",
    text: "Providers reach out with personalized quotes and current promotions. You choose the deal that fits — or walk away.",
  },
];

const benefits = [
  {
    title: "24/7 Professional Monitoring",
    text: "Trained agents respond to alarms around the clock and dispatch police, fire, or medical help when seconds matter.",
    icon: (
      <path
        d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Smart Cameras & Doorbells",
    text: "See who's at your door from anywhere. HD video, night vision, and instant motion alerts on your phone.",
    icon: (
      <path
        d="M15 10.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5l4.5 3v-9l-4.5 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Smart Home Automation",
    text: "Control locks, lights, thermostats, and garage doors from one app — and let them react automatically to alarms.",
    icon: (
      <path
        d="M3 11 12 4l9 7M5 9.5V20h5v-6h4v6h5V9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Fire, CO & Flood Protection",
    text: "Monitored smoke, carbon monoxide, and water leak sensors protect your family and home even when you're away.",
    icon: (
      <path
        d="M12 3s5.5 4.5 5.5 9.5a5.5 5.5 0 1 1-11 0C6.5 7.5 12 3 12 3Zm0 15a2.5 2.5 0 0 0 2.5-2.5c0-1.7-2.5-3.5-2.5-3.5s-2.5 1.8-2.5 3.5A2.5 2.5 0 0 0 12 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Insurance Discounts",
    text: "Most insurers offer up to 20% off homeowners insurance when you install a monitored security system.",
    icon: (
      <path
        d="M12 3v18M17 6.5c0-1.4-2.2-2.5-5-2.5S7 5.1 7 6.5 9.2 9 12 9s5 1.1 5 2.5-2.2 2.5-5 2.5-5-1.1-5-2.5M17 17.5c0 1.4-2.2 2.5-5 2.5s-5-1.1-5-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Deter Break-Ins",
    text: "Homes without security systems are up to 3x more likely to be burglarized. Visible cameras and signs stop crime before it starts.",
    icon: (
      <path
        d="M12 2 4 5.5v5.6c0 5 3.4 9.2 8 10.9 4.6-1.7 8-5.9 8-10.9V5.5L12 2Zm-3.2 10 2.3 2.3 4.2-4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const testimonials = [
  {
    quote:
      "I filled out the form on my lunch break and had three quotes by dinner. Saved over $400 compared to the first company I called on my own.",
    name: "Melissa R.",
    location: "Austin, TX",
  },
  {
    quote:
      "As a first-time homeowner I had no idea where to start. The comparison made it easy to see what I actually needed — no pushy upselling.",
    name: "James T.",
    location: "Columbus, OH",
  },
  {
    quote:
      "We rent, so I thought security systems weren't an option. ProtectMyHomes matched us with a no-contract DIY system that we love.",
    name: "Priya K.",
    location: "Phoenix, AZ",
  },
];

const faqs = [
  {
    q: "Is this service really free?",
    a: "Yes — 100% free with no obligation. We're paid by our partner providers when we connect them with interested homeowners, so you never pay us anything.",
  },
  {
    q: "Which security companies will I hear from?",
    a: "We work with trusted national brands including ADT, Vivint, SimpliSafe, Ring, Brinks Home, Frontpoint, Cove, and Abode. You'll be matched with up to four providers that serve your area and fit your needs.",
  },
  {
    q: "Do I need to be a homeowner?",
    a: "No. Renters can get matched too — several of our partners offer contract-free, DIY systems that move with you and don't require drilling or permanent installation.",
  },
  {
    q: "How fast will I get quotes?",
    a: "Most people hear from matched providers within minutes to a few hours during business hours. Quotes are personalized to your home and current promotions.",
  },
  {
    q: "Am I obligated to buy anything?",
    a: "Never. Compare the quotes, ask questions, and only move forward if you find a deal you love. There's no commitment at any point.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold tracking-widest text-brand-600 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-slate-600">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(37,99,235,0.35), transparent), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(245,158,11,0.15), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900 px-4 py-1.5 text-xs font-semibold text-accent-400">
                <ShieldMark className="h-4 w-4" />
                Trusted by 1M+ U.S. homeowners
              </p>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Protect What Matters Most —{" "}
                <span className="text-accent-400">For Less</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Compare America's top-rated home security systems in under 2
                minutes. Get free, personalized quotes from trusted providers
                in your area — and save up to 40% on protection for your home
                and family.
              </p>

              <Form
                method="get"
                action="/quote"
                className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="text"
                  name="zip"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  required
                  placeholder="Enter your ZIP code"
                  aria-label="ZIP code"
                  className="w-full rounded-lg border border-navy-700 bg-white px-4 py-3.5 text-navy-950 placeholder:text-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-accent-500 px-6 py-3.5 font-bold text-navy-950 shadow-lg transition hover:bg-accent-400"
                >
                  Get Free Quotes
                </button>
              </Form>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckIcon /> 100% free
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckIcon /> No obligation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckIcon /> Takes under 2 minutes
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-navy-800 bg-navy-900/70 p-8 shadow-2xl backdrop-blur">
                <h2 className="text-lg font-bold text-white">
                  Why homeowners choose us
                </h2>
                <ul className="mt-6 space-y-5">
                  {[
                    "Compare up to 4 personalized quotes side by side",
                    "Only licensed, vetted security providers",
                    "Exclusive promotions not available elsewhere",
                    "Options for every budget — DIY to full-service",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-navy-800 pt-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-extrabold text-accent-400">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner strip */}
      <section className="border-b border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase">
            We compare quotes from America's top providers
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span
                key={p.name}
                className="text-xl font-extrabold tracking-tight text-slate-500 transition hover:text-navy-950"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps to a safer home"
            text="No phone tag, no showroom visits, no pressure. Just fast, free comparisons."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-xl font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/quote"
              className="inline-block rounded-lg bg-accent-500 px-8 py-4 text-lg font-bold text-navy-950 shadow-lg transition hover:bg-accent-400"
            >
              Start My Free Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why home security"
            title="More than an alarm — total peace of mind"
            text="Modern systems protect against break-ins, fire, floods, and package theft, while making everyday life more convenient."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-100 p-7 transition hover:border-brand-500/30 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    {benefit.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-widest text-accent-400 uppercase">
              Real results
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Join over a million protected households
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-navy-800 bg-navy-900 p-8"
              >
                <div className="flex gap-1 text-accent-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M10 1.5 12.6 7l6 .7-4.5 4.1 1.2 5.9L10 14.8l-5.3 2.9 1.2-5.9L1.4 7.7l6-.7L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 leading-relaxed text-slate-300">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-white">
                  {t.name}{" "}
                  <span className="font-normal text-slate-400">
                    — {t.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
          />
          <div className="mt-12 divide-y divide-slate-100 rounded-2xl border border-slate-100">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy-950">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-brand-600 to-navy-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to protect your home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Get matched with top security providers in your area and compare
            free quotes today. It takes less than 2 minutes.
          </p>
          <Link
            to="/quote"
            className="mt-8 inline-block rounded-lg bg-accent-500 px-10 py-4 text-lg font-bold text-navy-950 shadow-xl transition hover:bg-accent-400"
          >
            Get My Free Quotes Now
          </Link>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="m4 10.5 4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
