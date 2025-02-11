import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Filipe",
  lastName: "Rey",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web3 Fullstack Engineer",
  avatar: "/images/projects/project-01/avatar.jpeg",
  location: "Europe/Lisbon", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Fils7",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/filipe-rey-5bb186250/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Resume CV",
    icon: "document",
    link: "/Resume.pdf",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack Web3 Engineer</>,
  subline: (
    <>
      I'm Filipe, a fullstack engineer dedicated to secure and enhance the web3 space with a special interest in defi protocols.
      <br /> I've contributed to several lending protocols like Clearpool Finance, Ozean Network and Cicero Network.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate about decentralization I'm a fullstack developer that focus on enhancing and securing the web3 space.
        Transforming complex challenges into functional solutions my work spans accross designing and implementing new UI features, building decentralized protocols and cordinating small teams.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Holdex",
        timeframe: "2024 - 2025",
        role: "Fullstack Engineer",
        achievements: [
          "Led smart contract development for Cicero lending protocol",
          "Developed and redesigned key DeFi platforms including Ozean Network and Clearpool Finance",
          "Built modern, responsive DeFi interfaces focusing on user experience and blockchain integration",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Cyfrin Updraft",
        description: <>Smart Contracts Security Reviews</>,
      },
      {
        name: "OpenZeppelin",
        description: <>Ethernaut Challenges / Smart Contracts Security.</>,
      },
      {
        name: "Encode Code",
        description: <>Solidity Bootcamp</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Smart Contracts",
        description: <>Proficient in Solidity, Hardhat, Foundry, Knowledge of defi, proxy contracts, multisignature wallets, ERC-20/ERC-21, account abstraction and more.</>,
        images: [],
      },
      {
        title: "Blockchain Tools",
        description: <>Experience with Web3.js, Ethers.js, GraphQL, and The Graph.</>,
        images: [],
      },
      {
        title: "Development",
        description: <>Skilled in Git version control, with expertise in SDK Development.</>,
        images: [],
      },
      {
        title: "Security",
        description: <>Specialized in smart contract best practices, vulnerability detection and formal verification techniques.</>,
        images: [],
      },
      {
        title: "Layer 2 Solutions",
        description: <>Knowledge of Optimistic and Zero-knowledge rollups, experience working with various Layer 2 scaling solutions.</>,
        images: [],
      },
      {
        title: "Frontend & Design",
        description: <>Experienced with Svelte, Vercel deployment, and Figma for UI/UX design.</>,
        images: [],
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
