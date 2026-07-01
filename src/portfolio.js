/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Alfin",
  logo_name: "alfin.w()",
  full_name: "Alfin Wijaya",
  subTitle: "Backend Developer, Web Tech Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1I4Wg3DCNx74Kcq1NyPnn5zMvYNwGc8g8/view?usp=sharing",
  mail: "mailto:wijayaalfin@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/alfinwijaya",
  linkedin: "https://www.linkedin.com/in/alfinwijaya/",
  gmail: "wijayaalfin@gmail.com",
  instagram: "https://www.instagram.com/alfinw__/",
};

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Creating backend applications using .NET and FastAPI",
        "⚡ Developing RESTful APIs for integration with front-end applications",
        "⚡ Implementing database solutions with MongoDB and PostgreSQL",
        "⚡ Building decoupled architecture for enhanced application performance",
        "⚡ Integration of third-party services such as Firebase, AWS, and Google Cloud Platform",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#9179E4",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience using services from multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Development & Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bunda Mulia University",
      subtitle: "Bachelor in Information Technology",
      logo_path: "ubm.png",
      alt_name: "UBM",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Best Graduate of the Information Technology Class of 2016.",
        "⚡ Studied core subjects like Data Structures, Algorithm, DBMS, Networking, Security, etc.",
        "⚡ Completed various workshops for Web , Mobile App Development, etc.",
        "⚡ Secured 3.95/4.00 GPA.",
      ],
      website_link: "https://www.ubm.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Belajar Machine Learning untuk Pemula",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/MEPJOGEVLZ3V",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/ERZRLY732ZYV",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/98XW0L5NLXM3",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Spec-Driven Development dengan Kiro",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/1OP8RN7JLZQK",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Belajar Fundamental Aplikasi Back-End",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/EYX40J96WPDL",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/NVP78LWKOXR0",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Cloud Practitioner Essentials",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/JMZV15MQ3XN9",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      subtitle: "Dicoding Indonesia",
      logo_path: "dicoding.png",
      certificate_link:
        "https://www.dicoding.com/certificates/N9ZO5J7M0PG5",
      alt_name: "Dicoding Indonesia",
      color_code: "#2E3F51",
    },
    {
      title: "MongoDB for .NET Developers",
      subtitle: "MongoDB University",
      logo_path: "mongodb.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/2cb5359a-ceeb-4d6a-a3d3-c21d0dbcbfdb",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
    {
      title: "MongoDB - Developer's Guide",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-fde77ad8-8d36-4191-b053-64f5c4bd1eb5/",
      alt_name: "Udemy",
      color_code: "#E8E9F4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Experience",
  description:
    "Backend Developer with 5 years of experience building scalable APIs and internal systems using Python, C#, and cloud technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Agung Sedayu Group",
          company: "",
          company_url: "https://www.agungsedayu.com/",
          logo_path: "asg.png",
          duration: "Nov 2022 - Present · 3 yrs 7 mos",
          location: "Jakarta, Indonesia",
          color: "#0071C5",
          positions: [
            {
              title: "Senior Backend Developer",
              type: "Full-time",
              duration: "Nov 2025 - Present · 7 mos",
              description: [
                "Developed and maintained microservices and RESTful APIs using Python (FastAPI) and C# .NET.",
                "Deployed and maintained applications using Cloud Run and Cloud Functions.",
                "Refactored legacy code and improved system maintainability.",
                "Wrote technical documentation and system workflows.",
                "Contributed to data migration from Microsoft Dynamics AX to PostgreSQL.",
                "Leveraged Generative AI for code generation, refactoring, and documentation.",
              ],
            },
            {
              title: "Backend Developer",
              type: "Contract",
              duration: "Nov 2022 - Oct 2025 · 3 yrs",
              description: [
                "Developed and maintained RESTful APIs and internal applications using Python and C#.",
                "Implemented cloud-based solutions using Google Cloud Platform services.",
                "Collaborated with business analysts and users to troubleshoot issues and deliver enhancements.",
                "Supported system maintenance and continuous improvement initiatives.",
              ],
            },
          ],
        },
        {
          title: "Pro Int Dinamika",
          company: "",
          company_url: "https://pro-int.co.id/",
          logo_path: "proint.png",
          duration: "Mar 2021 - Oct 2022 · 1 yr 8 mos",
          location: "Jakarta, Indonesia",
          color: "#0071C5",
          positions: [
            {
              title: "Fullstack Developer",
              type: "Full-time",
              duration: "Mar 2021 - Oct 2022 · 1 yr 8 mos",
              description: [
                "Developed and maintained a Human Resource Management System (HRIS) using C# .NET and JavaScript.",
                "Built and integrated SOAP APIs for communication with external systems.",
                "Designed reports using Perpetuum based on client requirements.",
                "Performed code reviews, debugging, and troubleshooting.",
                "Applied OOP principles and software development best practices.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Python Projects, Java Scripts, and C# Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "alfin.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
  //   link: "https://twitter.com/Harikrushn9",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Load Balancer",
      url: "https://github.com/alfinwijaya/load_balancer",
      description:
        "A lightweight, asynchronous load balancer implementation using aiohttp. This project demonstrates round-robin load balancing with health checking capabilities.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/alfinwijaya/load_balancer",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Compression Tool",
      url: "https://github.com/alfinwijaya/compression-tool",
      description:
        "This project showcases a Huffman coding tool built in Python. It's designed to compress and decompress text files, significantly reducing their size.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/alfinwijaya/compression-tool",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Clinic Management API",
      url: "https://github.com/alfinwijaya/clinic-management-api",
      description:
        "This repository contains a REST API for clinic management. The API is designed to manage drug information, patient medical records, and integration with Satu Sehat.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "SpringBoot",
          iconifyClass: "logos-spring-icon",
        },
        {
          name: "Docker",
          iconifyClass: "logos-docker-icon",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/alfinwijaya/clinic-management-api",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "JSON Parser",
      url: "https://github.com/alfinwijaya/json-parser",
      description:
        "This parser converts a json file into a Python dictionary. It takes both valid and invalid json files as input and analyzes them through lexical and syntactic analysis.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/alfinwijaya/json-parser",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "7",
      name: "WC Tool",
      url: "https://github.com/alfinwijaya/wc-tool",
      description:
        "A command-line word count tool. It can count lines, words, characters, and bytes in a given text file. This tool is simple to use and helps in analyzing the basic structure of text files.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/alfinwijaya/wc-tool",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Open Music API",
      url: "https://github.com/alfinwijaya/OpenMusicAPI",
      description:
        "OpenMusic API is a back-end RESTful API project for the music player platform. This API empowers users to manage music, playlists, and album images with ease.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs-icon",
        },
        {
          name: "Hapi",
          iconifyClass: "logos-hapi",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql",
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/alfinwijaya/OpenMusicAPI",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
