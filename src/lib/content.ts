import { ContentData } from "@/types";

export const contentData: ContentData = {
  navigation: {
    logo: "/icons/ICON..svg",
    links: [
      { id: 1, title: "Works", href: "#work" },
      { id: 2, title: "About", href: "#about" },
      { id: 3, title: "Services", href: "#services" },
      { id: 4, title: "Process", href: "#process" },
      { id: 5, title: "Contact", href: "#contact" },
    ],
    ctaButton: {
      text: "Let's Talk",
      href: "#contact",
    },
  },
  hero: {
    title: "Design. Prototype.",
    titleHighlight: "Collaborate.",
    description:
      "Create beautiful designs for websites, apps, and more, directly in your browser.",
    cta: "View My Work",
    image: "/images/hero-image.png",
  },
  work: [
    {
      id: "1",
      title: "Fintech Dello Banking App",
      description:
        "An AI-powered car monitoring system with real-time diagnostics and maintenance tracking.",
      image: "/images/image framer.svg",
      additionalImages: [
        "/images/image 10.svg",
        "/images/image 11.svg",
        "/images/image 13.svg",
        "/images/image 15.svg",
      ],
      category: "Product Design",
      industry: "Fintech",
      headquarters: "San Francisco, USA",
      founded: "2018",
      companySize: "201-500 employees",
      tags: ["Branding", "Product Design", "UI/UX", "Banking"],
      link: "/case-studies/dello-banking",
      challenges: `Building a seamless and secure digital banking experience required overcoming several key challenges. The first was ensuring robust security measures while maintaining a frictionless user experience. Traditional banking applications often have complex authentication flows, which can deter users. We needed to integrate a secure, AI-driven verification system that could streamline onboarding without compromising security. Another major challenge was designing an intuitive interface for complex financial transactions. Users needed a clear, user-friendly dashboard that provided real-time insights without overwhelming them with data.`,
      results: `By implementing an AI-powered identity verification system, we reduced the average onboarding time by 50%, making it significantly easier for users to get started. The newly designed dashboard led to a 35% increase in user retention, as customers found it easier to navigate and perform transactions. Additionally, our optimization of the backend transaction process improved transaction speeds by 50%, ensuring users had a seamless banking experience.`,
      improvedOnboardingProcess: `To enhance onboarding, we introduced AI-driven tutorials that guide users through their first transactions. We also simplified the Know Your Customer (KYC) process by incorporating automated identity verification, reducing manual intervention and improving approval times.`,
    },
    {
      id: "2",
      title: "Dazzle © Branding",
      description:
        "A comprehensive financial management dashboard with intuitive data visualization.",
      image: "/images/image framer 2.svg",
      additionalImages: [
        "/images/image 11.svg",
        "/images/image 10.svg",
        "/images/image 15.svg",
        "/images/image 15.svg",
      ],
      category: "Product Design",
      industry: "Finance & Investment",
      headquarters: "London, UK",
      founded: "2020",
      companySize: "51-200 employees",
      tags: ["Branding", "Product Design", "UI/UX", "Finance"],
      link: "/case-studies/dazzle-finance",
      challenges: `The biggest challenge in developing the Dazzle financial management dashboard was unifying various financial tools into a single, intuitive platform. Users needed a centralized system that could track investments, generate reports, and provide real-time financial insights. The complexity of integrating diverse financial APIs while maintaining an elegant and user-friendly interface required extensive research and design iteration. Additionally, security was a major concern, as the platform had to ensure end-to-end encryption while allowing seamless data synchronization across multiple banking institutions.`,
      results: `By adopting a modular design approach, we created a scalable dashboard that catered to both novice and experienced users. This led to a 40% reduction in financial data processing time, making it easier for users to manage their portfolios efficiently. Our enhanced security measures, including biometric authentication and real-time fraud detection, resulted in a 90% user satisfaction rate, with users praising the platform’s reliability and ease of use.`,
      improvedOnboardingProcess: `We introduced a step-by-step interactive guide that helps users set up their financial profiles effortlessly. Additionally, automated account linking was implemented, allowing users to securely connect their bank accounts with minimal manual intervention.`,
    },
    {
      id: "3",
      title: "Plant Scan Application",
      description:
        "Smart plant identification and care management system with real-time monitoring.",
      image: "/images/image frame 3.svg",
      additionalImages: [
        "/images/image 13.svg",
        "/images/image 11.svg",
        "/images/image 15.svg",
        "/images/image 10.svg",
      ],
      category: "Product Design",
      industry: "Agriculture & IoT",
      headquarters: "Berlin, Germany",
      founded: "2021",
      companySize: "11-50 employees",
      tags: ["Branding", "Product Design", "Mobile App", "IoT"],
      link: "/case-studies/plant-scan",
      challenges: `The development of the Plant Scan Application required overcoming several technological hurdles. The most significant was ensuring accurate plant identification using AI and machine learning models. Since plant species exhibit variations in color, shape, and size, achieving a high detection accuracy demanded a large dataset and extensive training. Another challenge was integrating IoT-based real-time monitoring, which involved syncing sensor data with the mobile app to provide timely alerts on plant health. Connectivity issues and sensor calibration posed additional challenges, requiring a robust infrastructure to handle continuous data flow.`,
      results: `Through iterative AI model training and dataset expansion, we achieved an 85% accuracy rate in plant disease detection. The IoT integration enabled real-time monitoring, allowing users to receive instant care recommendations, leading to a 60% reduction in plant mortality. User engagement also increased significantly, as the app offered a more interactive and informative plant care experience.`,
      improvedOnboardingProcess: `To simplify onboarding, we introduced a gamified experience where users earn badges for learning plant care basics. We also implemented a quick setup guide for connecting IoT sensors, reducing setup time by 40%.`,
    },
    {
      id: "4",
      title: "Solar Panel Solutions",
      description:
        "Modern solar panel configuration and monitoring system for sustainable energy.",
      image: "/images/image frame 4.svg",
      additionalImages: [
        "/images/image 15.svg",
        "/images/image 11.svg",
        "/images/image 13.svg",
        "/images/image 10.svg",
      ],
      category: "Product Design",
      industry: "Renewable Energy",
      headquarters: "Amsterdam, Netherlands",
      founded: "2019",
      companySize: "101-250 employees",
      tags: ["Branding", "Product Design", "Clean Energy", "IoT"],
      link: "/case-studies/solar-panel",
      challenges: `Developing a comprehensive solar panel monitoring system required tackling multiple technical and user experience challenges. Users needed a platform that could visualize energy production, consumption, and cost savings in real time. However, the biggest obstacle was ensuring seamless IoT connectivity between solar panels and the monitoring dashboard. Many users lacked technical expertise, making it crucial to design an intuitive setup process. Additionally, the system needed predictive maintenance capabilities to alert users about potential issues before they escalated.`,
      results: `By leveraging AI-driven analytics, we improved energy efficiency tracking by 30%, helping users make more informed decisions about energy consumption. Predictive maintenance alerts reduced downtime by 20%, as issues were detected before they caused significant problems. The intuitive dashboard interface also led to a 50% improvement in user engagement, as customers found it easier to monitor and optimize their solar energy usage.`,
      improvedOnboardingProcess: `To streamline the onboarding experience, we developed a one-click setup feature for integrating solar panel devices. Additionally, we implemented live chat support to assist first-time users, ensuring they could troubleshoot any issues in real time.`,
    },
  ],
  about: [
    {
      text: "Software engineer",
      color: "text-[#1E1E1E]",
      weight: "font-normal",
    },
    { text: "and Expert", color: "text-[#647197]" },
    { text: "UI/UX Design", color: "text-[#1E1E1E]", weight: "font-normal" },
    { text: "with over", color: "text-[#647197]" },
    { text: "5 Years", color: "text-[#1E1E1E]", weight: "font-normal" },
    { text: "of industry Experience.", color: "text-[#647197]" },
    { text: "Expertise extends to", color: "text-[#647197]" },
    {
      text: "Project Management",
      color: "text-[#1E1E1E]",
      weight: "font-normal",
    },
    {
      text: "enabling us to create both aesthetically pleasing and easily implementable.",
      color: "text-[#647197]",
    },
  ],

  services: [
    {
      id: 1,
      number: "01",
      title: {
        start: "UI/UX",
        highlight: "and Software",
        end: "Engineer",
      },
      description:
        "Our service enhances your websites content and structure, optimizing elements like title tags and meta descriptions to improve rankings and user engagement.",
      icon: "/icons/service-ux.svg",
    },
    {
      id: 2,
      number: "02",
      title: {
        start: "Link",
        highlight: "Building",
        end: "& SEO Audits",
      },
      description:
        "We develop a customized link building strategy to acquire high-quality backlinks, boosting your website's authority and credibility for better search engine visibility.",
      icon: "/icons/service-seo.svg",
    },
    {
      id: 3,
      number: "03",
      title: {
        start: "Keyword",
        highlight: "& Content",
        end: "Research",
      },
      description:
        "we credre a tailoreg conTenr rign rOot resonates wit your audience, progucing SEO-friendly content that drives organic traffic and establishes your brand authority.",
      icon: "/icons/service-research.svg",
    },
  ],
  process: [
    {
      id: 1,
      title: "Discovery Phase",
      description:
        "In this initial stage, we conduct a comprehensive analysis of your business, target audience, and industry landscape to understand your unique needs and objectives.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "completed",
    },
    {
      id: 2,
      title: "Strategy Development",
      description:
        "Based on the insights gathered during the discovery phase, we develop a tailored SEO strategy that outlines the specific tactics and approaches to be implemented to achieve your goals.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "active",
    },
    {
      id: 3,
      title: "Realization",
      description:
        "With the strategy in place, we execute the planned SEO activities, including keyword optimization, content creation, link building, and technical enhancements. Throughout this stage, we continuously monitor performance metrics.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "pending",
    },
    {
      id: 4,
      title: "Reporting and Analysis",
      description:
        "Finally, we provide regular reports and analysis that highlight the progress of your SEO campaign, including key performance indicators, traffic trends, and ranking improvements.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "pending",
    },
  ],
  tools: [
    { name: "Figma", icon: "/icons/devicon--figma.svg" },
    { name: "Angular", icon: "/icons/devicon--angular.svg" },
    { name: "firebase", icon: "/icons/devicon--firebase.svg" },
    { name: "Git", icon: "/icons/devicon--git.svg" },
    { name: "Github", icon: "/icons/mdi--github.svg" },
    { name: "HTML", icon: "/icons/devicon--html5-wordmark.svg" },
    {
      name: "Next.js",
      icon: "/icons/nextjs-icon-light-background.svg",
    },
    {
      name: "Node.js",
      icon: "/icons/devicon--nodejs-wordmark.svg",
    },
    { name: "React", icon: "/icons/devicon--react.svg" },
    { name: "Slack", icon: "/icons/devicon--slack.svg" },
    { name: "Tailwind", icon: "/icons/devicon--tailwindcss.svg" },
    { name: "JAVA", icon: "/icons/skill-icons--java-light.svg" },
    { name: "Vite", icon: "/icons/logos--vitejs.svg" },
    { name: "GraphQl", icon: "/icons/logos--graphql.svg" },
    { name: "CSS", icon: "/icons/skill-icons--css.svg" },
    { name: "Mongo DB", icon: "/icons/skill-icons--mongodb.svg" },
    { name: "Redux", icon: "/icons/skill-icons--redux.svg" },
    { name: "Vercel", icon: "/icons/vercel-icon-dark.svg" },
    { name: "Jira", icon: "/icons/devicon--jira.svg" },
    { name: "AWS", icon: "/icons/logos--aws.svg" },
    { name: "Framer", icon: "/icons/logos--framer.svg" },
  ],
  contact: {
    title: "Let's Talk",
    description:
      "Have a project in mind? Looking to partner or work together? Reach out through the form below.",
    email: "hello@yourdomain.com",
    phone: "+(250) 000-0000",
    location: "Kigali, RW",
    form: {
      name: {
        label: "Name",
        placeholder: "Enter your name",
      },
      email: {
        label: "Email",
        placeholder: "Enter your email",
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project",
      },
      button: "Send Message",
    },
  },
  footer: {
    copyright: {
      year: "2025",
      text: "Copyright passionated crafted by",
      brand: "ICON",
    },
    navigation: {
      internal: [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Work", href: "#work" },
        { id: 3, label: "About", href: "#about" },
        { id: 4, label: "Contact", href: "#contact" },
      ],
      social: [
        {
          id: 1,
          label: "Twitter",
          href: "https://twitter.com",
          isExternal: true,
        },
        {
          id: 2,
          label: "Dribbble",
          href: "https://dribbble.com",
          isExternal: true,
        },
        {
          id: 3,
          label: "Instagram",
          href: "https://instagram.com",
          isExternal: true,
        },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Let's start creating together",
      cta: {
        text: "Let's talk",
        href: "#contact",
      },
    },
  },
};

export default contentData;
