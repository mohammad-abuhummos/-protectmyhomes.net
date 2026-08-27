import { Link } from "react-router";
import type { Route } from "./+types/privacy-policy";
import { LegalPage, LegalSection } from "~/components/legal-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "How ProtectMyHomes.net collects, uses, and shares your personal information, and the choices you have.",
    },
  ];
}

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="August 27, 2026">
      <LegalSection heading="1. Who we are">
        <p>
          ProtectMyHomes.net ("we," "us," or "our") operates a free comparison
          and referral service that connects consumers with home security
          providers in the United States. This Privacy Policy explains what
          information we collect, how we use and share it, and the rights and
          choices available to you.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>When you use our website or submit a quote request, we may collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Contact information:</strong> name, email address, phone
            number, and home address (including ZIP code, city, and state).
          </li>
          <li>
            <strong>Home and preference details:</strong> whether you own or
            rent, property type, existing security equipment, installation
            timeframe, and the products or services you're interested in.
          </li>
          <li>
            <strong>Usage data:</strong> IP address, browser type, device
            information, pages visited, and referral source, collected
            automatically through cookies and similar technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we use your information">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            To match you with up to four home security providers that serve
            your area and fit your stated needs.
          </li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>
            To improve our website, matching technology, and marketing
            performance.
          </li>
          <li>To comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. How we share your information">
        <p>
          When you submit a quote request and provide consent, we share your
          contact and home details with the home security providers you are
          matched with so they can contact you with quotes and offers. These
          providers are independent companies with their own privacy policies.
        </p>
        <p>
          We may also share information with service vendors who help us
          operate the website (hosting, analytics, lead management), with
          authorities when required by law, or in connection with a business
          transfer such as a merger or acquisition. We do not sell your
          personal information to unrelated data brokers.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your consent to be contacted (TCPA)">
        <p>
          By submitting a quote request and checking the consent box, you
          provide your electronic signature and prior express written consent
          to be contacted by ProtectMyHomes.net and its matched partners at
          the phone number and email you provided — including by automatic
          telephone dialing systems, artificial or prerecorded voice, and
          SMS/text messages — even if your number is on a federal, state, or
          internal Do Not Call list. Consent is not a condition of purchasing
          any goods or services. Message and data rates may apply. You may
          revoke consent at any time by contacting us or telling the provider
          who contacts you.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies and analytics">
        <p>
          We use cookies and similar technologies to keep the site working,
          remember your preferences, and measure marketing performance. You
          can control cookies through your browser settings; disabling them
          may limit some site functionality.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your privacy rights">
        <p>
          Depending on your state (including California, Colorado, Connecticut,
          Texas, Utah, and Virginia), you may have the right to access, correct,
          delete, or receive a copy of your personal information, and to opt out
          of the sale or sharing of personal information and targeted
          advertising. To exercise any of these rights, email{" "}
          <a
            href="mailto:privacy@protectmyhomes.net"
            className="text-brand-600 underline"
          >
            privacy@protectmyhomes.net
          </a>{" "}
          or visit our{" "}
          <Link to="/do-not-sell" className="text-brand-600 underline">
            Do Not Sell My Information
          </Link>{" "}
          page. We will not discriminate against you for exercising your
          rights.
        </p>
      </LegalSection>

      <LegalSection heading="8. Data retention and security">
        <p>
          We retain personal information only as long as needed for the
          purposes described above or as required by law, and we use
          commercially reasonable administrative, technical, and physical
          safeguards to protect it. No method of transmission or storage is
          100% secure, so we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="9. Children's privacy">
        <p>
          Our services are intended for adults 18 and older. We do not
          knowingly collect personal information from children under 13. If
          you believe a child has provided us information, contact us and we
          will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes and contact">
        <p>
          We may update this Privacy Policy from time to time; the "Last
          updated" date shows the latest revision. Questions? Contact us at{" "}
          <a
            href="mailto:privacy@protectmyhomes.net"
            className="text-brand-600 underline"
          >
            privacy@protectmyhomes.net
          </a>{" "}
          or (888) 555-0123.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
