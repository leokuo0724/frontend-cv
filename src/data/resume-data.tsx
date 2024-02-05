import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import AvatarImage from "../images/others/avatar.jpeg";
import {
  BehanceIcon,
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Chia-Ming Kuo",
  initials: "CMK",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taipei",
  about: "Front-end Engineer", // TODO: complete this
  // TODO: add more about me
  summary:
    "Goal-oriented Front-end engineer with 3+ years experience working with HTML/CSS, JavaScript, TypeScript, React and Phaser. Adept at optimizing performance and collaborating cross-functional teams to deliver high-quality products.",
  avatarUrl: AvatarImage,
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "p900372012@gmail.com", // TODO: display email on the page
    tel: "+886-935-980-912", // TODO: display phone number on the page
    social: [
      {
        name: "GitHub",
        url: "https://github.com/leokuo0724",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chia-ming-kuo-588a191b9/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://leokuo0724.medium.com/",
        icon: MediumIcon,
      },
      {
        name: "Behance",
        url: "https://www.behance.net/leokuo",
        icon: BehanceIcon,
      },
    ],
  },
  education: [
    {
      school: "National Cheng Kung University",
      degree: "Master's Degree in Industrial Design",
      start: "2017",
      end: "2020",
    },
    {
      school: "National Cheng Kung University",
      degree: "Bachelor's Degree in Photonics",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Cooby",
      link: "https://cooby.co",
      badges: ["Full-time"],
      title: "Front-end Engineer",
      logo: ParabolLogo, // TODO: add Cooby logo
      start: "Jun 2021",
      end: "Present",
      description:
        "Cooby is a startup backed by Sequoia, focusing on providing powerful WhatsApp experience to users. In my role, I focused on developing and optimizing chrome extension and playing a role as a scrum master.",
      achievements: [
        {
          title: "Performance Optimization",
          content:
            "Significantly optimized messages sync performance by 90%. Put the product to a leading position in the market.",
        },
        {
          title: "Bug Resolution Rate Improvement",
          content:
            "Managed bug resolution workflow to achieve a 90% resolution rate within SLA for the entire team, marking a 22% improvement compared to the previous state.",
        },
        {
          title: "Extension Development",
          content:
            "Led the development of extension on WhatsApp web, fulfilled 15+ innovative features to engage users.",
        },
        {
          title: "E2E Testing Improvement",
          content:
            "Improved E2E testing by updating Chrome profile in GitHub CI. Resulted in a 60% reduction in update time.",
        },
        {
          title: "Team Productivity Management",
          content:
            "As a scrum master, facilitated sprint process and enhanced team productivity by 13%. Also, mentored an intern to improve his skills and increase team's productivity.",
        },
      ],
    },
    {
      company: "Cooby",
      link: "https://cooby.co",
      badges: ["Internship"],
      title: "iOS Software Engineer",
      logo: ClevertechLogo, // TODO: add Cooby logo
      start: "May 2021",
      end: "Apr 2021",
      description: "",
      achievements: [],
    },
    {
      company: "CityChaser Studio",
      link: undefined,
      badges: ["Self-employed"],
      title: "Co-cunder & Front-end Engineer",
      logo: JojoMobileLogo, // TODO: add CityChaser logo
      start: "May 2019",
      end: "Feb 2021",
      description: "",
      achievements: [],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Mongol March",
      techStack: [
        "Self-initiated",
        "JS13kGames",
        "TypeScript",
        "vite",
        "Kontra.js",
        "Bundle Optimization",
      ],
      description:
        "An entry for js13kGames 2023 with limited size of 13kb. The game achieved 38th place overall and 4th place in the innovation category.",
      logo: ConsultlyLogo,
      link: {
        // TODO: with the link to the game
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Baseball against the wind",
      techStack: [
        "Self-initiated",
        "TypeScript",
        "Phaser.js",
        "React",
        "Redux",
        "Chakra UI",
        "Socket.IO",
      ],
      description:
        "Individually designed and developed the game, showcasing end-to-end project expertise with React and Socket.IO for multi-player functionality.",
      logo: ConsultlyLogo,
      link: {
        // TODO: with the link to the game
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Love Lighter",
      techStack: ["TypeScript", "Phaser.js", "React", "Redux"],
      description: "The entry for game jam 2023. (台灣自製遊戲公會)",
      logo: ConsultlyLogo,
      link: {
        // TODO: with the link to the game
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
