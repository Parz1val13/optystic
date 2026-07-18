export const EMAIL = "hadi@optystic.com";
export const GITHUB_URL = "https://github.com/Parz1val13";

/*
 * TODO(Hadi): replace these sample projects with your real ones.
 * Each needs: name, what it is (tags), the live URL, and one honest line.
 * The card links straight to the live site in a new tab.
 */
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  url: string;
  hue: number; // 0 to 360, tints the card cover
};

export const projects: Project[] = [
  {
    name: "Sample project one",
    blurb: "Multilingual voice agent answering a hospital's phone line.",
    tags: ["Voice AI", "Booking", "Telephony"],
    url: "#",
    hue: 205,
  },
  {
    name: "Sample project two",
    blurb: "Marketing site with a booking flow that fills the calendar.",
    tags: ["Website", "Booking", "SEO"],
    url: "#",
    hue: 28,
  },
  {
    name: "Sample project three",
    blurb: "WhatsApp assistant that answers, routes and never sleeps.",
    tags: ["WhatsApp", "AI", "Automation"],
    url: "#",
    hue: 152,
  },
  {
    name: "Sample project four",
    blurb: "Storefront with payments, inventory and order tracking.",
    tags: ["E-commerce", "Payments", "Web app"],
    url: "#",
    hue: 262,
  },
  {
    name: "Sample project five",
    blurb: "Internal dashboard replacing a decade of spreadsheets.",
    tags: ["Web app", "Dashboard", "APIs"],
    url: "#",
    hue: 340,
  },
  {
    name: "Sample project six",
    blurb: "Company site rebuilt from scratch, twice as fast to load.",
    tags: ["Website", "Brand", "Performance"],
    url: "#",
    hue: 88,
  },
];

/* TODO(Hadi): confirm these numbers, they are placeholders */
export const stats = [
  { value: 6, suffix: "+", label: "Years building for the web" },
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 12, suffix: "+", label: "Clients who came back" },
  { value: 8, suffix: "", label: "Products live right now" },
];

export const services = [
  {
    title: "Websites",
    blurb:
      "Designed and coded from scratch, not assembled from a template. Fast to load, easy to find on Google, and yours to keep.",
    points: ["Design and build", "SEO and analytics", "Copy that sells"],
  },
  {
    title: "Web apps and platforms",
    blurb:
      "Bookings, dashboards, portals, payments. The software your business runs on, built to be used every day without breaking.",
    points: ["Dashboards and portals", "Payments and bookings", "APIs and integrations"],
  },
  {
    title: "AI agents and automation",
    blurb:
      "Voice agents that answer your phone, WhatsApp assistants that never sleep, and automations that quietly do the boring work.",
    points: ["Voice agents", "WhatsApp assistants", "Workflow automation"],
  },
];

export const expertise = [
  "Next.js and React",
  "TypeScript",
  "Node and Python",
  "Supabase and Postgres",
  "Stripe and payments",
  "Voice AI",
  "WhatsApp automation",
  "Telegram bots",
  "REST APIs and integrations",
  "E-commerce",
  "Hosting and deployment",
  "SEO and analytics",
  "UI design",
  "Brand and identity",
];

export const processSteps = [
  {
    title: "Kickoff call",
    blurb:
      "We talk through what you need, what already exists and what success looks like for you.",
  },
  {
    title: "Scope and quote",
    blurb:
      "You get a clear plan, a fixed price and a timeline in writing. No surprises halfway through.",
  },
  {
    title: "Design and build",
    blurb:
      "We work in the open and send you working previews you can click, not slides about them.",
  },
  {
    title: "Review and polish",
    blurb:
      "We test on real phones and laptops, fix what wobbles and tighten until it feels right.",
  },
  {
    title: "Launch and support",
    blurb:
      "We put it live on your domain, hand over the keys and stay reachable after launch.",
  },
];

export const comparison = {
  columns: ["Optystic", "Typical agency", "Freelancer"],
  rows: [
    { label: "Kickoff", cells: ["Within days", "Weeks of meetings", "Depends on luck"] },
    { label: "Who does the work", cells: ["The person you talk to", "Juniors after handoff", "One person, one skill"] },
    { label: "Scope covered", cells: ["Design, code and AI", "Design or code", "Usually narrow"] },
    { label: "Communication", cells: ["Direct, same day", "Through account managers", "Direct but stretched"] },
    { label: "After launch", cells: ["We stay reachable", "New contract required", "Often gone"] },
  ],
};
