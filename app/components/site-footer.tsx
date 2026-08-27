import { Link } from "react-router";
import { Logo } from "~/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              ProtectMyHomes.net helps U.S. homeowners and renters compare
              trusted home security providers and find the right system at the
              best price. We connect you with licensed security partners in
              your area — fast and free.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Call us:{" "}
              <a
                href="tel:+18885550123"
                className="font-semibold text-accent-400 hover:text-accent-500"
              >
                (888) 555-0123
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-white">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/do-not-sell" className="hover:text-white">
                  Do Not Sell My Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8 text-xs leading-relaxed text-slate-500">
          <p>
            ProtectMyHomes.net is a free comparison and referral service. We
            are not a home security provider. By submitting a quote request,
            you agree to be contacted by ProtectMyHomes.net and up to four
            home security partners at the phone number and email provided,
            including by automated technology, prerecorded messages, and SMS.
            Consent is not a condition of purchase. Message and data rates may
            apply. See our{" "}
            <Link to="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/terms-of-service"
              className="underline hover:text-white"
            >
              Terms of Service
            </Link>
            .
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} ProtectMyHomes.net. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
