import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("quote", "routes/quote.tsx"),
  route("thank-you", "routes/thank-you.tsx"),
  route("partners", "routes/partners.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-of-service", "routes/terms-of-service.tsx"),
  route("do-not-sell", "routes/do-not-sell.tsx"),
] satisfies RouteConfig;
