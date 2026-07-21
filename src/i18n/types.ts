export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    vibe: string;
    manufactory: string;
    process: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitleLine1: string;
    subtitleLine2: string;
    ctaTiles: string;
    ctaWrite: string;
    imageAlt: string;
  };
  about: {
    label: string;
    title: string;
    greeting: string;
    body: string;
    link: string;
  };
  offer: {
    label: string;
    title: string;
    body: string;
    imageAlt: string;
    imageAlts: string[];
    more: string;
    less: string;
    geometryLabel: string;
    geometryBody: string;
  };
  gallery: {
    label: string;
    title: string;
    body: string;
    photoAlts: string[];
    prev: string;
    next: string;
  };
  process: {
    label: string;
    title: string;
    body: string;
    steps: Array<{
      num: string;
      keyword: string;
      desc: string;
    }>;
    footnote: string;
  };
  contact: {
    label: string;
    title: string;
    body: string;
  };
  footer: {
    copyright: string;
  };
};
