import { Link } from "react-router";
import type { Route } from "./+types/partners";
import { partners } from "~/lib/partners";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Home Security Partners | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "Meet the trusted home security providers we work with — ADT, Vivint, SimpliSafe, Ring, Brinks Home, Frontpoint, Cove, and Abode.",
    },
  ];
}

export default function Partners() {
  return (
    <>
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold tracking-widest text-accent-400 uppercase">
            Our partners
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            America's most trusted security brands
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            We only work with licensed, vetted providers with proven track
            records. When you request a quote, we match you with up to four of
            these partners based on your location, budget, and needs.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-extrabold tracking-tight text-navy-950">
                    {partner.name}
                  </h2>
                  <span className="rounded-full bg-brand-600/10 px-3 py-1 text-xs font-bold text-brand-600">
                    Verified Partner
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-accent-600">
                  {partner.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {partner.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {partner.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-600"
                        aria-hidden="true"
                      >
                        <path
                          d="m4 10.5 4 4 8-9"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <span className="font-semibold text-navy-950">Best for:</span>{" "}
                  {partner.bestFor}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-600 to-navy-800 p-10 text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Not sure which provider is right for you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-blue-100">
              That's exactly what we're here for. Tell us about your home and
              we'll match you with the partners that fit best — free.
            </p>
            <Link
              to="/quote"
              className="mt-6 inline-block rounded-lg bg-accent-500 px-8 py-3.5 font-bold text-navy-950 shadow-lg transition hover:bg-accent-400"
            >
              Compare My Options
            </Link>
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">
            All trademarks and brand names are the property of their respective
            owners and are used for identification purposes only. Listing does
            not imply endorsement of ProtectMyHomes.net by these companies.
          </p>
        </div>
      </section>
    </>
  );
}
