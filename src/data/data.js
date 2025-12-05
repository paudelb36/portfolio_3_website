export const highlights = [
  {
    id: 1,
    title: "Frontend",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tools: [
      {
        name: "HTML",
        description: "Standard markup language for web pages.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        
      },
      {
        name: "CSS",
        description: "Style sheet language for styling web pages.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        description: "The language of the web.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "React",
        description: "JavaScript library for building user interfaces.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        description: "The React framework for production.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    tools: [
      {
        name: "PHP",
        description: "A popular general-purpose scripting language.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Node.js",
        description: "JavaScript runtime environment.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MySQL",
        description: "The world's most popular open source database.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        description: "Platform for building web and mobile applications",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Supabase",
        description: "Platform for building web and mobile applications",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-plain.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    tools: [
      {
        name: "Git",
        description: "Distributed version control system",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        description: "Platform for hosting and collaborating on Git repositories",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        description: "Code editor redefined for building modern web applications",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Wordpress",
        description: "A free and open-source, cross-platform web server solution.",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      },
     
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Recipe Finder",
    description: "A React-based web app where users can search for recipes using ingredient keywords. Integrated with an external API and styled using Tailwind CSS.",
    image: "/recipeFinder.jpg",
    github_url: "https://github.com/paudelb36/recipe-finder",
    url: "https://recipe-finder-site.netlify.app/",
    category: ["React"],
    key_value: ["React", "Tailwind"],
    features: [
      "Real-time recipe search using external API",
      "Responsive design with Tailwind",
      "Clean UI with loading states",
      "React Hooks for state management"
    ],
    type: "Solo Project"
  },
  {
    id: 2,
    name: "Startup Incubator Platform",
    description: "A React-based web app where users can search for recipes using ingredient keywords. Integrated with an external API and styled using Tailwind CSS.",
    image: "/Startup_incubator.png",
    github_url: "https://github.com/paudelb36/startup-incubator-platform",
    url: "https://startup-incubator-platform.netlify.app/",
    category: ["React"],
    key_value: ["Next JS", "Tailwind", "Supabase"],
    features: [
      "User registration and login",
      "Post creation and news feed",
      "Friend request system",
      "Session management",
      "Tailwind CSS for UI" 
    ],
    type: "Solo Project"
  },
  {
    id: 3,
    name: "Readers Network",
    description: "A PHP & MySQL-based social networking site for book lovers to share reviews, add friends, and interact through posts.",
    image: "/readersNetwork.jpg",
    github_url: "https://github.com/paudelb36/readers-network-social",
    category: ["PHP"],
    key_value: ["PHP", "MySQL", "HTML", "CSS", "Tailwind"],
    features: [
      "User registration and login",
      "Post creation and news feed",
      "Friend request system",
      "Session management",
      "Tailwind CSS for UI"
    ],
    type: "College Project"
  },
  {
    id: 4,
    name: "Hostel Finders",
    description: "A PHP web application to help users search and book hostels with location-based filtering and user-friendly design.",
    image: "/hostelFinders.jpg",
    github_url: "https://github.com/paudelb36/hostel-finders-website",
    category: ["PHP"],
    key_value: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Hostel listing and search functionality",
      "Booking form with backend handling",
      "Admin dashboard for listings",
      "Responsive UI"
    ],
    type: "College Project"
  },
  {
    id: 5,
    name: "Task Manager",
    description: "A simple task tracking app using vanilla JavaScript with local storage to manage task state.",
    image: "/taskManager.jpg",
    github_url: "https://github.com/paudelb36/Task-Manager-Application",
    url: "https://task-manager-application-rust.vercel.app/",
    category: ["Javascript"],
    key_value: ["JavaScript", "HTML", "CSS"],
    features: [
      "Add/edit/delete tasks",
      "Mark as completed",
      "Local storage persistence",
      "Clean and responsive UI"
    ],
    type: "Solo Project"
  },
  {
    id: 6,
    name: "Contact App",
    description: "A real-time contact management app using React and Firebase for storing, editing, and deleting contact entries.",
    image: "/firebaseContact.jpg",
    github_url: "https://github.com/paudelb36/firebase-contact-app",
    category: ["React"],
    key_value: ["React", "Tailwind", "Firebase"],
    features: [
      "CRUD operations with Firebase",
      "Real-time sync of data",
      "React Hooks for state management",
      "Modern UI with Tailwind"
    ],
    type: "Solo Project"
  },
  {
    id: 7,
    name: "Nursery Management System",
    description: "A web-based inventory and order management system for a plant nursery, developed using PHP and MySQL.",
    image: "/nursaryWebsite.jpg",
    github_url: "https://github.com/paudelb36/nursarywebsite",
    category: ["PHP"],
    key_value: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Admin login and product management",
      "CRUD operations for plants and orders",
      "Dashboard for managing nursery activities",
      "Simple and functional UI"
    ],
    type: "College Project"
  },
  // {
  //   id: 7,
  //   name: "Portfolio Website",
  //   description: "A personal portfolio site built with React and Tailwind CSS to showcase my projects, skills, and resume.",
  //   image: "/portfolioWebsite.jpg",
  //   github_url: "https://github.com/paudelb36/react-portfolio-website",
  //   category: ["React"],
  //   key_value: ["React", "Tailwind"],
  //   features: [
  //     "Project filtering by tech stack",
  //     "Responsive design for all devices",
  //     "Smooth navigation and animations",
  //     "Contact form integration"
  //   ],
  //   url: "https://bibek-paudel.com.np",
  //   type: "Solo Project"
  // }
]

export const currentStory = {
  id: 1,
  title: "Current Status",
  image: "/myphoto.jpg",
  status: "Available for opportunities",
  currentWork: "Working on portfolio improvements and learning new technologies",
  updates: [
    {
      id: 1,
      date: "2024-01-15",
      title: "Portfolio Update",
      content: "Redesigned portfolio with modern UI and added story features",
      type: "project"
    },
    {
      id: 2,
      date: "2024-01-10",
      title: "Learning Next.js",
      content: "Exploring Next.js 15 features and server-side rendering",
      type: "learning"
    },
    {
      id: 3,
      date: "2024-01-05",
      title: "Open to Work",
      content: "Actively seeking software engineering opportunities",
      type: "status"
    }
  ],
  skills: ["React", "Next.js", "PHP", "MySQL", "Tailwind CSS"],
  location: "Bhaktapur, Nepal",
  timezone: "NPT (UTC+5:45)"
};
