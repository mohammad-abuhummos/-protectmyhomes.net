import { Link } from "react-router";
import type { Route } from "./+types/terms-of-service";
import { LegalPage, LegalSection } from "~/components/legal-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service | ProtectMyHomes.net" },
    {
      name: "description",
      content:
        "The terms and conditions that govern your use of ProtectMyHomes.net and our free home security comparison service.",
    },
  ];
}

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="August 27, 2026">
      <LegalSection heading="1. Acceptance of these terms">
        <p>
          By accessing or using ProtectMyHomes.net (the "Site") or submitting
          a quote request, you agree to be bound by these Terms of Service and
          our{" "}
          <Link to="/privacy-policy" className="text-brand-600 underline">
            Privacy Policy
          </Link>
          . If you do not agree, please do not use the Site. You must be at
          least 18 years old and a U.S. resident to use our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. What we do (and don't do)">
        <p>
          ProtectMyHomes.net is a free comparison and referral service. We are
          <strong> not</strong> a home security company, installer, alarm
          monitoring provider, or insurance provider. We connect consumers with
          independent third-party security providers ("Partners") who may
          contact you with quotes and offers.
        </p>
        <p>
          All contracts, pricing, installation, monitoring, warranties, and
          service are solely between you and the Partner you choose. We do not
          guarantee the quality, availability, pricing, or performance of any
          Partner's products or services.
        </p>
      </LegalSection>

      <LegalSection heading="3. Your quote request and consent">
        <p>
          When you submit a quote request, you represent that the information
          you provide is accurate and that you are authorized to provide it.
          You consent to us sharing your information with matched Partners and
          to being contacted as described in our Privacy Policy, including by
          phone, email, and SMS. Consent is not a condition of purchase and
          can be revoked at any time.
        </p>
      </LegalSection>

      <LegalSection heading="4. How we're compensated">
        <p>
          Our service is free to consumers. We receive compensation from
          Partners when we refer interested consumers to them. This
          compensation may influence which Partners appear in our network and
          matching, but we do not accept compensation for favorable reviews or
          ratings.
        </p>
      </LegalSection>

      <LegalSection heading="5. Acceptable use">
        <ul className="list-disc space-y-2 pl-6">
          <li>Do not submit false, misleading, or third-party information without authorization.</li>
          <li>Do not use bots, scrapers, or automated tools to access the Site.</li>
          <li>Do not attempt to interfere with the Site's operation or security.</li>
          <li>Do not use the Site for any unlawful purpose.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Intellectual property">
        <p>
          The Site and its content — text, graphics, logos, and software — are
          owned by ProtectMyHomes.net or its licensors and protected by
          intellectual property laws. Third-party brand names and trademarks
          belong to their respective owners and are used for identification
          only.
        </p>
      </LegalSection>

      <LegalSection heading="7. Disclaimers">
        <p>
          THE SITE AND OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE"
          WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT WARRANT THAT ANY PARTNER WILL CONTACT
          YOU, OFFER PARTICULAR PRICING, OR MEET YOUR EXPECTATIONS.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROTECTMYHOMES.NET AND ITS
          OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY
          DAMAGES ARISING FROM YOUR DEALINGS WITH ANY PARTNER. OUR TOTAL
          LIABILITY FOR ANY CLAIM RELATED TO THE SITE WILL NOT EXCEED ONE
          HUNDRED DOLLARS ($100).
        </p>
      </LegalSection>

      <LegalSection heading="9. Indemnification">
        <p>
          You agree to indemnify and hold harmless ProtectMyHomes.net from any
          claims, damages, or expenses (including reasonable attorneys' fees)
          arising from your misuse of the Site or violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="10. Governing law and disputes">
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to conflict-of-law principles. Any dispute will be resolved
          through binding individual arbitration in accordance with the rules
          of the American Arbitration Association; you and we each waive the
          right to a jury trial and to participate in class actions, to the
          extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes and contact">
        <p>
          We may update these Terms at any time by posting a revised version
          on this page. Continued use of the Site after changes constitutes
          acceptance. Questions? Email{" "}
          <a
            href="mailto:support@protectmyhomes.net"
            className="text-brand-600 underline"
          >
            support@protectmyhomes.net
          </a>{" "}
          or call (888) 555-0123.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
