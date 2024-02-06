import { ClevertechLogo, ConsultlyLogo, JojoMobileLogo } from "@/images/logos";
import AvatarImage from "../images/others/avatar.jpeg";
import CoobyLogo from "../images/logos/cooby.jpg";
import CityChaserLogo from "../images/logos/citychaser.png";
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
  about:
    "Front-end engineer focused on solving problems to achieve business goals and optimizing performance to provide high-quality products",
  summary:
    "As a Front-end engineer, I have 3+ years experience working with HTML/CSS, TypeScript, React and Phaser. I always focused on how to solve problems to achieve company's goals. Because of my background in industrial design, I can think from different perspectives and provide innovative solutions to teams.",
  avatarUrl: AvatarImage,
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "p900372012@gmail.com",
    tel: "+886-935-980-912",
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
      description:
        'During the graduated study, I focused on human computer interaction field, especially in "Gamification". I am passionate about how to use game design elements in non-game context to engage users.',
      achievements: [
        {
          title: "Gamification Study",
          content:
            "My study focused on exploring how to use gamification strategies to engage elderly to do more exercise. The result of this work was successfully accepted and included in the 2019 HCI International Conference.",
        },
      ],
    },
    {
      school: "National Cheng Kung University",
      degree: "Bachelor's Degree in Photonics",
      start: "2013",
      end: "2017",
      description: "",
      achievements: [
        {
          title: "Caption of Track and Field Team",
          content:
            "Led and managed the team. Organized national track and field championships. Expanded team size by 150% through promotion and hosting of night running events.",
        },
        {
          title: "Public Relations Director of Graduate Student Association",
          content:
            "Coordinated sponsorship agreements with vendors. Organized seminar events to enhance the visibility of the association.",
        },
      ],
    },
  ],
  work: [
    {
      company: "Cooby",
      link: "https://cooby.co",
      badges: ["Full-time"],
      title: "Front-end Engineer",
      logo: CoobyLogo,
      start: "Jun 2021",
      end: "Present",
      description:
        "Cooby is a startup backed by Sequoia, focusing on providing powerful WhatsApp experience to users. In my role, I focused on developing and optimizing chrome extension and playing a role as a scrum master.",
      tags: [
        "Chrome Extension",
        "Reserve Engineering",
        "React",
        "Redux",
        "Next.js",
        "TanStack Query",
        "Chakra UI",
        "Playwright",
        "GitHub CI/CD",
        "Amplitude",
        "Rollbar",
        "i18n",
      ],
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
      logo: CoobyLogo,
      start: "May 2021",
      end: "Apr 2021",
      description: "",
      tags: ["Swift", "GCD", "UIKit", "Auto Layout", "Firebase", "Amplitude"],
      achievements: [
        {
          title: "Fix Critical Issues",
          content:
            "Identified and resolved crash issue caused by unsafely manipulating multi-threads.",
        },
        {
          title: "iOS Development",
          content: "Designed and Implemented in-product onboarding system.",
        },
      ],
    },
    {
      company: "CityChaser Studio",
      link: "https://gnn.gamer.com.tw/detail.php?sn=199702",
      badges: ["Self-employed"],
      title: "Co-cunder & Front-end Engineer",
      logo: CityChaserLogo,
      start: "May 2019",
      end: "Feb 2021",
      description:
        'CityChaser is a group of partners who are interested in Taiwanese architectures and developed a mobile game "Kyronus" (開拓者), aiming to let users understand the beauty of architectures in Taiwan through the game. I took a role as product owner, as well as front-end developer and art designer.',
      tags: [
        "Phaser.js",
        "Vue",
        "SASS",
        "Cordova",
        "PWA",
        "Google Ads",
        "Design System",
      ],
      achievements: [
        {
          title: "Award Winning",
          content:
            "Led the team to develop the game. In the end, the game won the bronze medal of mobile game category in 2020 Vision Get Wild Award.",
        },
        {
          title: "HTML5 Game Development",
          content:
            "Implemented the core part of the game by Phaser.js and used Vue to deal with UI and states.",
        },
        {
          title: "Design Team Management",
          content:
            "Led the design team and setup the UI and visual guideline to make the whole design team to follow. Also, provided the constructive feedbacks to designers.",
        },
        {
          title: "UX Research & Interview",
          content:
            "Conducted user interviews to collect feedback. Developed interview outlines, coded and analyzed interview content.",
        },
      ],
    },
  ],
  skills: [
    {
      category: "Web Development",
      tags: [
        "HTML/CSS",
        "SCSS/SASS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Phaser.js",
        "WebSocket",
        "Web Performance",
        "Jest",
        "Playwright",
        "Webpack",
        "Vite",
        "Git",
        "GitHub CI/CD",
        "Debugging & Monitoring",
      ],
    },
    {
      category: "Soft Skills",
      tags: [
        "Problem Solving",
        "Teamwork",
        "MVP Release Coordination",
        "Leadership",
        "Agile Development",
      ],
    },
    {
      category: "Others",
      tags: [
        "iOS Development",
        "UI/UX Design",
        "2D Graphic Design",
        "2D Animation Design",
      ],
    },
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
    // {
    //   title: "Love Lighter",
    //   techStack: ["TypeScript", "Phaser.js", "React", "Redux"],
    //   description: "The entry for game jam 2023. (台灣自製遊戲公會)",
    //   logo: ConsultlyLogo,
    //   link: {
    //     // TODO: with the link to the game
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
  ],
} as const;
