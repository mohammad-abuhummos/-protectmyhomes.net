import { data, Form, useNavigation } from "react-router";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "Questions about quotes, partners, or your information? Contact the ProtectMyHomes.net team by phone, email, or our contact form.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const values = {
    name: String(form.get("name") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    subject: String(form.get("subject") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
  };

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.message) errors.message = "Please enter a message.";

  if (Object.keys(errors).length > 0) {
    return data({ errors, values, sent: false }, { status: 400 });
  }

  console.log("Contact form submission:", values);
  return { errors: {} as Record<string, string>, values: null, sent: true };
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none";

export default function Contact({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-brand-600 uppercase">
            Contact us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-950">
            We're here to help
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Questions about your quote request, our partners, or your personal
            information? Reach out any way you like.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[360px_1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-navy-950">Call us</h2>
              <a
                href="tel:+18885550123"
                className="mt-2 block text-2xl font-extrabold text-brand-600"
              >
                (888) 555-0123
              </a>
              <p className="mt-1 text-sm text-slate-500">
                Mon–Sat, 8am–8pm CT
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-navy-950">Email us</h2>
              <a
                href="mailto:support@protectmyhomes.net"
                className="mt-2 block font-semibold text-brand-600"
              >
                support@protectmyhomes.net
              </a>
              <p className="mt-1 text-sm text-slate-500">
                We reply within one business day.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-navy-950">Privacy requests</h2>
              <a
                href="mailto:privacy@protectmyhomes.net"
                className="mt-2 block font-semibold text-brand-600"
              >
                privacy@protectmyhomes.net
              </a>
              <p className="mt-1 text-sm text-slate-500">
                For data access, deletion, or opt-out requests.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            {actionData?.sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
                    <path
                      d="m5 12.5 5 5L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="mt-6 text-2xl font-extrabold text-navy-950">
                  Message sent!
                </h2>
                <p className="mt-2 max-w-sm text-slate-600">
                  Thanks for reaching out. Our team will get back to you within
                  one business day.
                </p>
              </div>
            ) : (
              <Form method="post" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                      Your name
                    </span>
                    <input
                      name="name"
                      defaultValue={actionData?.values?.name}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                    {actionData?.errors?.name && (
                      <span className="mt-1.5 block text-sm text-red-600">
                        {actionData.errors.name}
                      </span>
                    )}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                      Email address
                    </span>
                    <input
                      type="email"
                      name="email"
                      defaultValue={actionData?.values?.email}
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                    {actionData?.errors?.email && (
                      <span className="mt-1.5 block text-sm text-red-600">
                        {actionData.errors.email}
                      </span>
                    )}
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Subject
                  </span>
                  <select
                    name="subject"
                    defaultValue={actionData?.values?.subject ?? "General question"}
                    className={inputClass}
                  >
                    <option>General question</option>
                    <option>About my quote request</option>
                    <option>Partnership inquiry</option>
                    <option>Privacy / data request</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="mt-5 block">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    defaultValue={actionData?.values?.message}
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                  {actionData?.errors?.message && (
                    <span className="mt-1.5 block text-sm text-red-600">
                      {actionData.errors.message}
                    </span>
                  )}
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-7 rounded-lg bg-accent-500 px-8 py-3.5 font-bold text-navy-950 shadow-md transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
