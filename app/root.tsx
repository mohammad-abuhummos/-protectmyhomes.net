import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Site is designed light-only; stops browser/extension auto-dark from repainting colors */}
        <meta name="color-scheme" content="light" />
        <meta name="darkreader-lock" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Page not found" : `Error ${error.status}`;
    message =
      error.status === 404
        ? "The page you're looking for doesn't exist or has been moved."
        : error.statusText || message;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-6 text-center">
      <p className="text-sm font-semibold tracking-widest text-accent-400 uppercase">
        ProtectMyHomes.net
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-white">{title}</h1>
      <p className="mt-3 max-w-md text-slate-300">{message}</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-navy-950 transition hover:bg-accent-400"
      >
        Back to homepage
      </Link>
    </div>
  );
}
