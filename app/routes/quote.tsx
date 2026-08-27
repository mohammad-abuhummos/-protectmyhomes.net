import { data, Form, Link, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/quote";
import { ShieldMark } from "~/components/logo";
import { saveLead } from "~/lib/leads.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Get Your Free Home Security Quote | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "Answer a few quick questions and get free, no-obligation quotes from top home security providers in your area.",
    },
  ];
}

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
  "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
  "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
  "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
  "WI", "WY", "DC",
];

const INTERESTS = [
  "Burglary & intrusion alarm",
  "Video cameras / doorbell",
  "24/7 professional monitoring",
  "Fire & CO detection",
  "Smart home automation",
  "Medical alert",
];

export function loader({ request }: Route.LoaderArgs) {
  const zip = new URL(request.url).searchParams.get("zip") ?? "";
  return { zip: /^\d{5}$/.test(zip) ? zip : "" };
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  const str = (name: string) => String(form.get(name) ?? "").trim();

  const values = {
    firstName: str("firstName"),
    lastName: str("lastName"),
    email: str("email"),
    phone: str("phone"),
    zip: str("zip"),
    address: str("address"),
    city: str("city"),
    state: str("state"),
    ownership: str("ownership"),
    propertyType: str("propertyType"),
    currentSystem: str("currentSystem"),
    timeframe: str("timeframe"),
    interests: form.getAll("interests").map(String),
    consent: form.get("consent") === "on",
  };

  const errors: Record<string, string> = {};

  if (!values.firstName) errors.firstName = "First name is required.";
  if (!values.lastName) errors.lastName = "Last name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";
  if (!/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(values.phone))
    errors.phone = "Enter a valid 10-digit U.S. phone number.";
  if (!/^\d{5}$/.test(values.zip)) errors.zip = "Enter a valid 5-digit ZIP code.";
  if (!values.address) errors.address = "Street address is required.";
  if (!values.city) errors.city = "City is required.";
  if (!US_STATES.includes(values.state)) errors.state = "Select your state.";
  if (!values.ownership) errors.ownership = "Please select an option.";
  if (!values.propertyType) errors.propertyType = "Please select an option.";
  if (!values.currentSystem) errors.currentSystem = "Please select an option.";
  if (!values.timeframe) errors.timeframe = "Please select an option.";
  if (!values.consent)
    errors.consent = "You must agree to be contacted to receive quotes.";

  if (Object.keys(errors).length > 0) {
    return data({ errors, values }, { status: 400 });
  }

  const { consent: _consent, ...lead } = values;
  await saveLead({ ...lead, source: "protectmyhomes.net/quote" });

  return redirect("/thank-you");
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm font-semibold text-navy-950">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red-600">{error}</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none";

export default function Quote({ loaderData, actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  const errors = actionData?.errors ?? {};
  const values = actionData?.values;

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-widest text-brand-600 uppercase">
                Free quote request
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                Get matched with top security providers
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Takes under 2 minutes. 100% free, no obligation. We'll match
                you with up to 4 licensed providers serving your area.
              </p>
            </div>

            <Form
              method="post"
              noValidate
              className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
            >
              <h2 className="text-lg font-bold text-navy-950">
                1. Your contact information
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="First name" error={errors.firstName}>
                  <input
                    name="firstName"
                    autoComplete="given-name"
                    defaultValue={values?.firstName}
                    placeholder="Jane"
                    className={inputClass}
                  />
                </Field>
                <Field label="Last name" error={errors.lastName}>
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    defaultValue={values?.lastName}
                    placeholder="Smith"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email address" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    defaultValue={values?.email}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone number" error={errors.phone}>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel-national"
                    defaultValue={values?.phone}
                    placeholder="(555) 123-4567"
                    className={inputClass}
                  />
                </Field>
              </div>

              <h2 className="mt-10 text-lg font-bold text-navy-950">
                2. Your home address
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-6">
                <Field
                  label="Street address"
                  error={errors.address}
                  className="sm:col-span-6"
                >
                  <input
                    name="address"
                    autoComplete="street-address"
                    defaultValue={values?.address}
                    placeholder="123 Main St"
                    className={inputClass}
                  />
                </Field>
                <Field label="City" error={errors.city} className="sm:col-span-3">
                  <input
                    name="city"
                    autoComplete="address-level2"
                    defaultValue={values?.city}
                    placeholder="Austin"
                    className={inputClass}
                  />
                </Field>
                <Field label="State" error={errors.state} className="sm:col-span-1">
                  <select
                    name="state"
                    autoComplete="address-level1"
                    defaultValue={values?.state ?? ""}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      --
                    </option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="ZIP code" error={errors.zip} className="sm:col-span-2">
                  <input
                    name="zip"
                    inputMode="numeric"
                    maxLength={5}
                    autoComplete="postal-code"
                    defaultValue={values?.zip ?? loaderData.zip}
                    placeholder="78701"
                    className={inputClass}
                  />
                </Field>
              </div>

              <h2 className="mt-10 text-lg font-bold text-navy-950">
                3. About your home
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Do you own or rent?" error={errors.ownership}>
                  <select
                    name="ownership"
                    defaultValue={values?.ownership ?? ""}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="own">I own my home</option>
                    <option value="rent">I rent</option>
                  </select>
                </Field>
                <Field label="Property type" error={errors.propertyType}>
                  <select
                    name="propertyType"
                    defaultValue={values?.propertyType ?? ""}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="single-family">Single-family house</option>
                    <option value="apartment">Apartment / condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="mobile">Mobile / manufactured home</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field
                  label="Do you currently have a security system?"
                  error={errors.currentSystem}
                >
                  <select
                    name="currentSystem"
                    defaultValue={values?.currentSystem ?? ""}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="none">No system</option>
                    <option value="unmonitored">Yes, but not monitored</option>
                    <option value="monitored">Yes, professionally monitored</option>
                  </select>
                </Field>
                <Field label="When do you want it installed?" error={errors.timeframe}>
                  <select
                    name="timeframe"
                    defaultValue={values?.timeframe ?? ""}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="asap">As soon as possible</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within a month</option>
                    <option value="researching">Just researching</option>
                  </select>
                </Field>
              </div>

              <fieldset className="mt-8">
                <legend className="text-sm font-semibold text-navy-950">
                  What are you interested in?{" "}
                  <span className="font-normal text-slate-500">
                    (select all that apply)
                  </span>
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {INTERESTS.map((interest) => (
                    <label
                      key={interest}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 transition has-checked:border-brand-500 has-checked:bg-brand-500/5"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        defaultChecked={values?.interests.includes(interest)}
                        className="h-4 w-4 accent-brand-600"
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 rounded-lg bg-slate-50 p-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    defaultChecked={false}
                    className="mt-1 h-4 w-4 shrink-0 accent-brand-600"
                  />
                  <span className="text-xs leading-relaxed text-slate-600">
                    By checking this box, I provide my electronic signature and
                    consent to be contacted by ProtectMyHomes.net and up to
                    four home security partners at the phone number and email
                    provided, including via automated dialing systems,
                    prerecorded messages, and SMS/text, regarding home security
                    offers. Consent is not a condition of purchase. Message and
                    data rates may apply. I have read and agree to the{" "}
                    <Link to="/terms-of-service" className="underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-2 text-sm text-red-600">{errors.consent}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full rounded-lg bg-accent-500 px-6 py-4 text-lg font-bold text-navy-950 shadow-lg transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Matching you with providers…" : "Get My Free Quotes"}
              </button>
              <p className="mt-4 text-center text-xs text-slate-400">
                Your information is encrypted and never sold to anyone outside
                our vetted partner network.
              </p>
            </Form>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ShieldMark className="h-10 w-10 text-brand-600" />
                <h2 className="mt-4 font-bold text-navy-950">
                  Why request a quote?
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>Compare up to 4 providers side by side</li>
                  <li>Unlock promos not listed publicly</li>
                  <li>Options for owners and renters</li>
                  <li>No pressure, no obligation — ever</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-navy-950 p-6 text-sm text-slate-300">
                <p className="font-bold text-white">Prefer to talk?</p>
                <p className="mt-2">
                  Call our security advisors — Mon–Sat, 8am–8pm CT.
                </p>
                <a
                  href="tel:+18885550123"
                  className="mt-3 block text-xl font-extrabold text-accent-400"
                >
                  (888) 555-0123
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
