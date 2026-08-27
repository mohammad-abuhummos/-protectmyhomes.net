import { data, Form, useNavigation } from "react-router";
import type { Route } from "./+types/do-not-sell";
import { LegalPage, LegalSection } from "~/components/legal-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Do Not Sell My Information | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "Exercise your right to opt out of the sale or sharing of your personal information under CCPA and other state privacy laws.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const values = {
    name: String(form.get("name") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    requestType: String(form.get("requestType") ?? "").trim(),
  };

  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";

  if (Object.keys(errors).length > 0) {
    return data({ errors, values, sent: false }, { status: 400 });
  }

  console.log("Privacy opt-out request:", values);
  return { errors: {} as Record<string, string>, values: null, sent: true };
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-950 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus:outline-none";

export default function DoNotSell({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  return (
    <LegalPage title="Do Not Sell or Share My Personal Information" updated="August 27, 2026">
      <LegalSection heading="Your right to opt out">
        <p>
          Under the California Consumer Privacy Act (CCPA/CPRA) and similar
          state privacy laws, you have the right to direct us not to sell or
          share your personal information. Because our referral service works
          by sharing quote-request details with matched security providers,
          some of that sharing may qualify as a "sale" under these laws.
        </p>
        <p>
          Submitting the form below opts you out of future sale or sharing of
          your personal information. It does not affect information already
          shared with providers you were previously matched with — contact
          those providers directly to opt out of their communications.
        </p>
      </LegalSection>

      <LegalSection heading="Submit your opt-out request">
        {actionData?.sent ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-bold text-green-800">Request received</h3>
            <p className="mt-2 text-green-700">
              We've recorded your opt-out request and will process it within 15
              business days as required by law. You'll receive a confirmation
              email once complete.
            </p>
          </div>
        ) : (
          <Form
            method="post"
            noValidate
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                  Full name
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
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                  Phone number{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={actionData?.values?.phone}
                  placeholder="(555) 123-4567"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-navy-950">
                  Request type
                </span>
                <select
                  name="requestType"
                  defaultValue={actionData?.values?.requestType ?? "Opt out of sale/sharing"}
                  className={inputClass}
                >
                  <option>Opt out of sale/sharing</option>
                  <option>Delete my personal information</option>
                  <option>Access a copy of my information</option>
                  <option>Correct my information</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 rounded-lg bg-navy-950 px-8 py-3.5 font-bold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Request"}
            </button>
          </Form>
        )}
      </LegalSection>

      <LegalSection heading="Other ways to reach us">
        <p>
          You can also submit privacy requests by emailing{" "}
          <a
            href="mailto:privacy@protectmyhomes.net"
            className="text-brand-600 underline"
          >
            privacy@protectmyhomes.net
          </a>{" "}
          or calling (888) 555-0123. Authorized agents may submit requests on
          your behalf with proof of authorization.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
