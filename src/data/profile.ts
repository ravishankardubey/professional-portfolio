/**
 * All site content lives here. Edit this file to update the portfolio —
 * both designs (Editorial at `/` and Console at `/console`) read from it.
 */

export interface Role {
  title: string;
  period: string;
  note?: string;
}

export interface Experience {
  company: string;
  location?: string;
  period: string;
  roles: Role[];
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights?: string[];
  stack: string[];
  url?: string;
  featured?: boolean;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface PageSeo {
  title: string;
  description: string;
  image: string;
}

/** First month of full-time work, used to compute "N+ years". */
const careerStart = new Date('2017-11-01');

export const yearsOfExperience = Math.floor(
  (Date.now() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);

export const profile = {
  name: 'Ravi Shankar Dubey',
  shortName: 'Ravi',
  initials: 'RSD',
  handle: 'rsdubey',
  role: 'Software Engineer',
  location: 'Bangalore, India',
  headline: 'I build calm, well-architected interfaces for complex cloud products.',
  intro: `${yearsOfExperience}+ years shipping web and SaaS applications and microservices with Angular, TypeScript and Node.js — currently on the VMware Cloud Foundation team at Broadcom.`,
  currently: 'R&D Engineer Software 3 · VCF @ VMware by Broadcom',

  about: [
    'I’m a front-end-leaning full-stack engineer who enjoys turning sprawling enterprise workflows into interfaces that feel simple. At VMware by Broadcom I own and build the UIs that size, deploy and operate VMware Cloud Foundation, lead projects, and look after our CI/CD and end-to-end test pipelines.',
    'Before that I co-founded Perceived, where I built the architecture, authentication, data services and infrastructure behind Perceiv.io and METAcademy — and grew METAcademy from 1K to 10K users across web and Android.',
    'Outside work I read, travel, and tinker with immersive tech. I’m drawn to entrepreneurship — I was a founding member of the Entrepreneurship Cell at GLA University.',
  ],

  facts: [
    { label: 'Based in', value: 'Bangalore, India' },
    { label: 'Experience', value: `${yearsOfExperience}+ years (since 2017)` },
    { label: 'Education', value: 'B.Tech CSE, GLA University' },
    { label: 'Languages', value: 'English, Hindi' },
  ],

  interests: ['Reading', 'Traveling', 'Immersive tech', 'Entrepreneurship'],

  contact: {
    email: 'ravishankar.rsd@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rsdubey',
    github: 'https://github.com/ravishankardubey',
    pitch: 'Have a product that needs a thoughtful, well-engineered front end? I’d love to hear about it.',
  },

  experience: [
    {
      company: 'VMware by Broadcom',
      location: 'Bengaluru',
      period: 'Sep 2022 — Present',
      roles: [
        { title: 'R&D Engineer Software 3', period: 'Nov 2023 — Present', note: 'VCF team; title changed after the Broadcom acquisition' },
        { title: 'Member of Technical Staff III', period: 'Jun 2023 — Nov 2023' },
        { title: 'Member of Technical Staff II', period: 'Sep 2022 — Jun 2023', note: 'Professional Services, Cloud Automation Developer' },
      ],
      summary: 'Building the UIs behind VMware Cloud Foundation in a team of ~10 engineers; leading projects and managing CI/CD pipelines.',
      highlights: [
        'Owned the Sizer UI for VMC on AWS and led its refactor to a loosely coupled architecture.',
        'Redesigned an SDDC Manager UI workflow into a pluggable module.',
        'Contributed to VCF Ops Console, vCenter UI and VMCA.',
        'Maintain the UI end-to-end test pipeline.',
      ],
      stack: ['Angular', 'TypeScript', 'Nx', 'CI/CD'],
    },
    {
      company: 'Perceived',
      period: 'Jun 2021 — Sep 2022',
      roles: [{ title: 'Co-Founder & Head of Engineering', period: 'Jun 2021 — Sep 2022', note: 'Working on the MVP since Dec 2019' }],
      summary: 'Built the engineering foundation of an immersive-learning startup from scratch.',
      highlights: [
        'Designed the architecture, authentication, data services, storage and infrastructure.',
        'Built Perceiv.io and the METAcademy web and Android apps from scratch; grew METAcademy from 1K to 10K users.',
        'Led POCs in simulation, 3D graphing, VR journeys, virtual land and media skins.',
      ],
      stack: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Three.js'],
    },
    {
      company: 'Infrrd',
      period: 'May 2020 — Jun 2021',
      roles: [{ title: 'Software Engineer – UI', period: 'May 2020 — Jun 2021' }],
      summary: 'Front-end engineer across the OCR product team and the real-estate services team.',
      highlights: [
        'Estimated and delivered features; delegated tasks within the team.',
        'Reviewed code and interviewed candidates.',
      ],
      stack: ['Angular', 'TypeScript'],
    },
    {
      company: 'Mindtree',
      period: 'Nov 2017 — Apr 2020',
      roles: [
        { title: 'Senior Software Engineer', period: 'Jan 2020 — Apr 2020' },
        { title: 'Software Engineer', period: 'Nov 2017 — Jan 2020', note: 'Joined as a Campus Mind; trained on the MEAN stack' },
      ],
      summary: '2.5 years in the airline (TTH) domain building an order-management SaaS application.',
      highlights: [
        'Migrated JSP screens to Angular, including an Excel-like data grid.',
        'Automated Angular builds for multi-product delivery; built Node.js APIs.',
        'Wrote unit tests with Karma and Jasmine.',
        'Outstanding Performer Award, 2018–19.',
      ],
      stack: ['Angular', 'Node.js', 'Karma', 'Jasmine'],
    },
  ] satisfies Experience[],

  projects: [
    {
      title: 'Sizer UI for VMC on AWS',
      org: 'VMware by Broadcom',
      period: '2022 — Present',
      summary: 'Owned the sizing tool for VMware Cloud on AWS and led its refactor from a tightly coupled codebase to a loosely coupled architecture.',
      stack: ['Angular', 'TypeScript'],
      featured: true,
    },
    {
      title: 'SDDC Manager pluggable workflows',
      org: 'VMware by Broadcom',
      period: '2023 — Present',
      summary: 'Redesigned a multi-step SDDC Manager UI workflow into a pluggable module — making the workflow easier to extend.',
      stack: ['Angular', 'Nx'],
      featured: true,
    },
    {
      title: 'METAcademy',
      org: 'Perceived',
      period: '2021 — 2022',
      summary: 'Learning platform built from scratch for web and Android, grown from 1K to 10K users.',
      highlights: ['Web + Android apps', '1K → 10K users'],
      stack: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
      featured: true,
    },
    {
      title: 'Perceiv.io',
      org: 'Perceived',
      period: '2019 — 2022',
      summary: 'The Perceived portal, built from scratch — architecture, authentication, data services, storage and infrastructure.',
      stack: ['Angular', 'Node.js', 'Express', 'AWS'],
      url: 'https://portal.perceiv.io',
    },
    {
      title: 'Immersive-tech POCs',
      org: 'Perceived',
      period: '2020 — 2022',
      summary: 'Proofs of concept in simulation, 3D graphing, VR journeys, virtual land and media skins.',
      stack: ['Three.js', 'JavaScript'],
    },
    {
      title: 'Airline order-management SaaS',
      org: 'Mindtree',
      period: '2017 — 2020',
      summary: 'Migrated a JSP application to Angular — including an Excel-like data grid — and built Node.js APIs for the airline (TTH) domain.',
      highlights: ['JSP → Angular migration', 'Outstanding Performer 2018–19'],
      stack: ['Angular', 'Node.js', 'Karma', 'Jasmine'],
    },
  ] satisfies Project[],

  skills: [
    { name: 'Front end', items: ['Angular', 'TypeScript', 'JavaScript', 'React', 'Three.js', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Chart.js', 'PWA'] },
    { name: 'Back end & cloud', items: ['Node.js', 'Express', 'MongoDB', 'AWS'] },
    { name: 'Tooling & quality', items: ['Nx', 'npm', 'Git', 'CI/CD', 'Karma', 'Jasmine', 'Postman', 'JIRA'] },
    { name: 'Platforms', items: ['Shopify', 'WordPress'] },
  ] satisfies SkillGroup[],

  education: [
    { school: 'GLA University', degree: 'B.Tech, Computer Science & Engineering', period: '2013 — 2017', note: 'Founding member, Entrepreneurship Cell' },
    { school: 'Varanasi Public School', degree: 'HSC & SSC (PCM)', period: '2009 — 2013' },
  ],

  recognition: ['Outstanding Performer Award — Mindtree, 2018–19', 'NPAT certification'],

  seo: {
    home: {
      title: 'Ravi Shankar Dubey — Software Engineer',
      description: `Software engineer in Bangalore with ${yearsOfExperience}+ years building web/SaaS apps and microservices with Angular, TypeScript and Node.js. Currently at VMware by Broadcom.`,
      image: '/og/editorial.png',
    },
    console: {
      title: 'Ravi Shankar Dubey — Console edition',
      description: `The developer’s cut of Ravi Shankar Dubey’s portfolio: ${yearsOfExperience}+ years of Angular, TypeScript and Node.js across VMware, a startup and enterprise SaaS.`,
      image: '/og/console.png',
    },
    notFound: {
      title: 'Page not found — Ravi Shankar Dubey',
      description: 'This page doesn’t exist. Head back to the portfolio of Ravi Shankar Dubey.',
      image: '/og/editorial.png',
    },
  } satisfies Record<string, PageSeo>,
};

export type Profile = typeof profile;
