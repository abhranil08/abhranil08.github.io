/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhranil's Portfolio",
  description:
    "",
  og: {
    title: "Abhranil Bhattacharjee Portfolio",
    type: "website",
    url: "https://abhranil08.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Abhranil Bhattacharjee",
  logo_name: "AbhranilBhattacharjee",
  //nickname: "layman_brother",
  subTitle:
    "Senior Software Engineer · 6+ years designing and scaling distributed systems across e‑commerce, fintech and risk—where uptime isn’t optional.",
  resumeLink:
    "https://drive.google.com/file/d/1BdnTrPQwVg7-FAnY-Fxvw-pynsqqDQpq/view?usp=sharing",
  portfolio_repository: "https://github.com/abhranil08",
  githubProfile: "https://github.com/abhranil08",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/abhranil08",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhranil-bhattacharjee-244280131/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/abhranil/",
    logoImage: "leetcode_logo.svg",
    backgroundColor: "#FFA116",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/abhranil08",
    fontAwesomeIcon: "fa-kaggle",
    backgroundColor: "#20BEFF",
  },
  {
    name: "Gmail",
    link: "mailto:abhra.tb@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      primary: true,
      skills: [
        "⚡ Java backends and data pipelines that scale, built to perform, not just run.",
        "⚡ Node & Express for APIs and services that need to ship without the big-framework tax, right tool, less ceremony.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          logoImage: "java_logo.svg",
          style: { color: "#ED8B00" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: { color: "#339933" },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#94a3b8" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: { color: "#4053D6" },
        },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: { color: "#005571" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "S3",
          fontAwesomeClassname: "simple-icons:amazons3",
          style: { color: "#569A31" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { color: "#94A3B8" },
        },
        {
          skillName: "Debezium (CDC)",
          fontAwesomeClassname: "simple-icons:apache",
          style: { color: "#D22128" },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      primary: false,
      skills: [
        "⚡ Earlier experience in Machine Learning and Deep Learning through research and internships, mainly in Computer Vision and NLP.",
        "⚡ Comfortable applying ML and data analysis techniques when they add value to large-scale backend systems.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/abhranil/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/abhranil08",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jadavpur University",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "JadavpurUniversity_Logo.png",
      //alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture and Artificial Intelligence.",
        "⚡ Additional coursework in Deep Learning, Data Science and Full Stack Development.",
        ],
      website_link: "http://www.jaduniv.edu.in/",
    },
  ],
};

const awardsAndAchivements = {
  awardsAndAchivements: [
    {
      title: "Former Professional Cricketer",
      subtitle: "",
      //logo_path: "JadavpurUniversity_Logo.png",
      //alt_name: "IIITDM Kurnool",
      //duration: "2016 - 2020",
      descriptions: [
        "⚡ University Blue - Captain of JU cricket team in the Inter University East Zone Cricket Tournament organized by the Association of Indian Universities for four years of undergrad.",
        "⚡ National level cricketer - Part of the West Bengal Under 19 cricket team, 2019.",
        ],
      website_link: "http://www.jaduniv.edu.in/",
      accentColor: "#C62828",
    },
    {
      title: "Former National Athlete",
      subtitle: "",
      //logo_path: "JadavpurUniversity_Logo.png",
      //alt_name: "IIITDM Kurnool",
      //duration: "2016 - 2020",
      descriptions: [
        "⚡ National level athlete - Represented West Bengal School team in the School National organized by ASISC twice, held in Odisha (2011) and Kerala (2013)",
        "⚡ Named Best Athlete in the West Bengal School Regional Sports Meet twice, 2011 and 2013.",
        ],
      website_link: "http://www.jaduniv.edu.in/",
      accentColor: "#C62828",
    },
    {
      title: "Academics",
      subtitle: "",
      //logo_path: "JadavpurUniversity_Logo.png",
      //alt_name: "IIITDM Kurnool",
      //duration: "2016 - 2020",
      descriptions: [
        "⚡ Finalist, Business plan Contest held at Kshitij 2017, organized by I.I.T, Kharagpur.",
        "⚡ Third best team in the Jadavpur University Chapter of the Hult Prize Business plan contest, 2016.",
        "⚡ Got selected as Research Summer Intern, 2019 at DESE, IISC Bangalore in Machine Learning/Deep Learning domains.",
        "⚡ Summer research intern at IIM, Lucknow and IIT Kharagpur in Data Analytics and Text Analytics respectively.",
        ],
      website_link: "http://www.jaduniv.edu.in/",
      accentColor: "#C62828",
    },
  ],
};

const certificationsAwards = {
  certifications: [
  ]
}

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      /*certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",*/
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      /*certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",*/
      color_code: "#00000099",
    },
    {
      title: "Design and Analysis of Algorithm",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1DXXZodnuzyiNrjk-0Jf_D-BY35jrO4cr/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Machine Learning",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1Dxvipc55GoERNsxRG1bmZFMCuP7BGcQ1/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Game Theory",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1NGxjVKQ7FP4xdrZSyPGD_ww27Hxw4i0c/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research and Volunteering",
  description:
    "Senior Software Engineer with 6+ years of experience building highly scalable, distributed backend systems across e‑commerce, fintech and risk. I have led and contributed to platforms at Myntra, Paytm and Goldman Sachs, and previously worked in ML and data science during internships and academic research.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Myntra",
          company_url: "https://www.myntra.com",
          logo_path: "myntra_logo.svg",
          duration: "June 2024 - Present",
          location: "Bengaluru, IN",
          description: [
            "Scaling and evolving logistics and warehousing platforms powering Myntra's MNOW 30–60 minute delivery service.",
            "Designing and operating distributed backend services that connect order promise, inventory, fulfillment and last‑mile delivery.",
          ],
          color: "#F43397",
        },
        {
          title: "Senior Software Engineer",
          company: "Paytm",
          company_url: "https://paytm.com/",
          logo_path: "paytm_logo.svg",
          duration: "April 2023 - April 2024",
          location: "Bengaluru, IN",
          description: [
            "Owned services in the Devices onboarding team, enabling large‑scale deployment and management of merchant devices in the Paytm ecosystem.",
            "Worked on high‑throughput, fault‑tolerant backend systems for payments and merchant experiences.",
          ],
          color: "#0ea5e9",
        },
        {
          title: "SDE I – Analyst → SDE II – Associate",
          company: "Goldman Sachs",
          company_url: "https://www.goldmansachs.com",
          logo_path: "goldmansachs_logo.svg",
          duration: "June 2020 - March 2023",
          location: "Bengaluru, IN",
          description: [
            "Part of the risk engineering team.",
            "Built and maintained risk monitoring and analytics systems used across the firm for real‑time and batch risk management.",
          ],
          color: "#001E4D",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "R & D Intern, Natural Language Processing, Deep Learning.",
          company: "Research and Innovation Labs, TCS",
          company_url: "https://www.tcs.com/what-we-do/research",
          logo_path: "tcs_logo.svg",
          duration: "May. 2019 - July. 2019",
          location: "Gurgaon, IN",
          description: [
            "Part of the Web Intelligence team. Built new features for the backend recommendation system, including ad ranking algorithms that reached hundreds of millions of users globally.",
            "Improved online and offline content ranking by running hard sample data replays in the training pipeline.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineering Intern",
          company: "Crio.Do",
          company_url: "https://www.crio.do/",
          logo_path: "crioDo_logo.webp",
          duration: "May. 2019 - June. 2019",
          location: "Remote",
          description: [
            "Developed a distributed, highly available Java backend for a food-ordering platform using RESTful APIs.",
          ],
          color: "#ee3c26",
        },
        {
          title: "Software Engineering Intern",
          company: "IBM",
          company_url: "https://www.ibm.com/in-en",
          logo_path: "ibm_logo.svg",
          duration: "Jan. 2018 - Feb. 2018",
          location: "Remote",
          description: [
            "Developed Cognitive search-based travel Chatbot whose engine was powered by Watson Assistant in Android Studio and included web scrapping techniques by using JSoup for gathering dynamic data.",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Computer vision, Deep learning & NLP Researcher.",
          company: "Jadavpur University",
          company_url: "https://www.tcs.com/what-we-do/research",
          logo_path: "JadavpurUniversity_Logo.png",
          duration: "2017 - 2019",
          location: "Kolkata, West Bengal, IN.",
          description: [
            "Worked with Dr. Nibaran Das on Image Caption Generation, an automatic process of generating textual description from an image - based on the objects and actions in the image.",
            "Worked with Dr. Sudip Kumar Naskar on Neural Machine Translation. Implemented state-of-the-art Transformer model which outperformed various Machine translation baseline models like RNNs, LSTMs, and Attention models involving two major languages English and German at \textbf{WMT, 2019}.",
            ],
          color: "#C62828",
        },
        {
          title: "Computer vision, Deep learning Researcher",
          company: "Indian Statistical Institute ( ISI )",
          company_url: "https://www.isical.ac.in/",
          logo_path: "isi_logo.png",
          duration: "May. 2017 - July. 2017",
          location: "Kolkata, West Bengal, IN.",
          description: [
            "Eye blink detection using Facial Landmarks : Worked with Dr.Umapada Pal on Facial Component Analysis.",
            "Document Scanner, which scans documents by perspective transform."
          ],
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "JU Sports Board Member",
          company: "",
          company_url: "http://www.jaduniv.edu.in/",
          logo_path: "JadavpurUniversity_Logo.png",
          duration: "June 2019 - April 2020",
          location: "Kolkata, West Bengal, IN",
          description: [
          "Only three students were chosen from among all university students.",
          ],
          color: "#C62828",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I specialize in creating efficient full-stack and backend services for web applications, from concept to deployment.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*{
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abhranilbhattacharjee.png",
    description:
      "I am available on almost every social media. You can message me and I will try to reply within 24 hours. I can help you with backend architecture, distributed systems design and building reliable platforms at scale.",
  },
  blogSection: {
    //title: "Blogs",
    /*subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    //link: "",*/
    //avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bengaluru, IN",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/t8a2R2zeuBBx3adq8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  awardsAndAchivements,
  certificationsAwards,
};
