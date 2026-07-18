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
      "A site people trust the moment it loads. Built to win you work, not to tick a box.",
  },
  {
    title: "Web apps",
    blurb:
      "Bookings, payments, dashboards, portals. The stuff you still do by hand, turned into something that runs itself.",
  },
  {
    title: "AI and automation",
    blurb:
      "AI built into your daily work. The repetitive parts get handled for you, with solutions shaped around your business.",
  },
];

export const processSteps = [
  {
    title: "We have a chat",
    blurb: "You tell us what you need. A short call or a few messages is enough.",
  },
  {
    title: "We scope it",
    blurb: "A clear project scope, with examples of how yours will look.",
  },
  {
    title: "You get a price",
    blurb: "One price on that scope, agreed before any work starts.",
  },
  {
    title: "We build and polish",
    blurb:
      "You watch it take shape, and we polish as many rounds as it takes to make it perfect.",
  },
  {
    title: "It goes live",
    blurb:
      "On your domain and your servers. We can manage it for you after, if you want.",
  },
];
