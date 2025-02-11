import { HTMLMotionProps, Variants } from "framer-motion";

export interface Tool {
  name: string;
  icon: string;
}

export interface NavigationLink {
  id: number;
  title: string;
  href: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export interface ExploreButtonProps extends HTMLMotionProps<"button"> {
  text?: string;
  showDot?: boolean;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  tags: string[];
  industry: string;
  headquarters: string;
  challenges: string;
  results: string;
  improvedOnboardingProcess: string;
  founded: string;
  companySize: string;
  additionalImages?: string[];
  image: string;
}

export interface ServiceTitle {
  start: string;
  highlight: string;
  end: string;
}

export interface ServiceItem {
  id: number;
  number: string;
  title: ServiceTitle;
  description: string;
  icon: string;
}

export interface ProcessItem {
  id: number;
  title: string;
  description: string;
  tasks: string[];
  status: "completed" | "active" | "pending";
}

export interface ProcessItemProps {
  item: ProcessItem;
  index: number;
}

export interface WorkCardProps {
  work: WorkItem;
  index: number;
  variants?: Variants;
}

export interface ContactForm {
  name: {
    label: string;
    placeholder: string;
  };
  email: {
    label: string;
    placeholder: string;
  };
  message: {
    label: string;
    placeholder: string;
  };
  button: string;
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  form: ContactForm;
}

export interface FooterLink {
  id: number;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterContent {
  copyright: {
    year: string;
    text: string;
    brand: string;
  };
  navigation: {
    internal: FooterLink[];
    social: FooterLink[];
  };
  contact: {
    title: string;
    heading: string;
    cta: {
      text: string;
      href: string;
    };
  };
}

export interface ContentData {
  navigation: {
    logo: string;
    links: NavigationLink[];
    ctaButton: CTAButton;
  };
  hero: {
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    image: string;
  };
  about: { text: string; color: string; weight?: string }[];
  work: WorkItem[];
  services: ServiceItem[];
  process: ProcessItem[];
  contact: ContactContent;
  tools: Tool[];
  footer: FooterContent;
}
