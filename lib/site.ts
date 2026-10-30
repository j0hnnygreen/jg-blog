// Central site configuration shared by metadata, sitemap and robots.
// Override NEXT_PUBLIC_SITE_URL in .env / hosting config when a custom
// domain is used.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://johnnygreen.vercel.app";

export const siteName = "johnnygreen";

export const siteDescription =
  "Personal blog with cybersecurity tools, resources, cheatsheets and notes.";

export const siteTagline =
  "Notes on Cybersecurity, Full-Stack Development and Computer Science Mathematics.";
