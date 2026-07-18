export const EMAIL = "hadi@optystic.com";

export type Project = {
  name: string;
  domain: string;
  blurb: string;
  tags: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Xplore Drilling",
    domain: "xploredrilling.com.au",
    blurb:
      "Exploration drilling contractor in Western Australia. Site and brand, with live digital reporting for their clients.",
    tags: ["Website", "Brand", "Client reporting"],
    url: "https://xploredrilling.com.au/",
    image: "/projects/xploredrilling.jpg",
  },
  {
    name: "6GC",
    domain: "6gc.com.au",
    blurb:
      "An Australian satire brand. Store, blog and an interactive picker, built around a book people argue over.",
    tags: ["E-commerce", "Brand", "Interactive"],
    url: "https://6gc.com.au/",
    image: "/projects/6gc.jpg",
  },
];

export const services = [
  {
    title: "Websites",
    blurb:
      "Company sites and pages that load fast, read well and hold up on any screen.",
  },
  {
    title: "Web apps",
    blurb:
      "Bookings, dashboards, portals and payments. The tools a business actually runs on.",
  },
  {
    title: "Automation",
    blurb:
      "Phone and chat assistants, plus the quiet plumbing that saves hours every week.",
  },
];

export const processSteps = [
  {
    title: "We talk",
    blurb:
      "A short call or a few messages. You say what you need, we say honestly if we can do it.",
  },
  {
    title: "You get a price",
    blurb: "One fixed price and a real date, in writing, before any work starts.",
  },
  {
    title: "We build",
    blurb:
      "You get links to click while it takes shape. No big reveal at the end.",
  },
  {
    title: "We polish",
    blurb: "Tested on real phones and laptops until nothing wobbles.",
  },
  {
    title: "It goes live",
    blurb:
      "On your domain, keys handed over. We stay reachable after launch.",
  },
];
