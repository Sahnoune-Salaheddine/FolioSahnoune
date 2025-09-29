/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Salaheddine SAHNOUNE",
  title: "Welcome To My Digital Portfolio!",
  subTitle: emoji(
    "I'm Salaheddine SAHNOUNE, a passionate Full Stack Software Developer with experience in building web and mobile applications using Python, Django, Flask, React.js, Node.js, Java, and ASP.NET, and a variety of other modern libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qfOJw6cD8IFTgiHNNQOplNVhkvMTUIhA/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sahnoune-Salaheddine",
  linkedin: "https://www.linkedin.com/in/salaheddine-sahnoune/",
  gmail: "salaheddine.sahnoune.7@gmail.com",
  gitlab: "https://gitlab.com/sallah_shn",
  medium: "https://medium.com/@salah.sahnoune.7",
  stackoverflow: "https://stackoverflow.com/users/31584622/salaheddine-sahnoune",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm not just a developer; I'm a passionate problem solver who bridges backend engineering, frontend design, and emerging technologies to build impactful and reliable software.",
  skills: [
    emoji(
      " ⚡ Backend Development"  
    ),
    emoji(
      "Designing and building robust, scalable, and secure backend systems primarily with Java. I focus on creating clean architectures and efficient logic that power real-world applications."
    ),
    emoji(""),
    emoji(
      " ⚡ Full-Stack & Frontend Development"  
    ),
    emoji("Experienced in frontend development using modern frameworks, enabling me to build intuitive user interfaces and seamless user experiences."),
    emoji(""),
    emoji(
      " ⚡ AI & Ethical Technology"  
    ),
    emoji(
      "Passionate about integrating AI responsibly and promoting ethical digital practices that prioritize user trust, data privacy, and sustainability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
   
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "École marocaine des sciences de l'ingénieur",
      logo: require("./assets/images/EmsiLogo1.png"),
      subHeader: "Cycle Ingénieur en Informatique - Option MIAGE",
      duration: "Septembre 2026",
      desc: "Spécialisation en développement web, systèmes d’information, bases de données et data science.",
      descBullets: [
        // module et projet
      ]
    },
    {
      schoolName: "FSSM - Cadi Ayyad University",
      logo: require("./assets/images/FssmLogo1.png"),
      subHeader: "Licence d'études fondamentales Sciences de la matière physique option Automatique",
      duration: "Septembre 2022",
      desc: "L'objectif de cette formation est d'acquérir une base solide en Physique, Mathématiques et Chimie, avec une spécialisation en Physique orientée vers l'Automatique et les systèmes intelligents.",
      descBullets: [
        // module et projet
        
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer - Stagiaire",
      company: "OCP GROUP",
      companylogo: require("./assets/images/OcpLogo1.png"),
      date: "Juillet 2025 – Septembre 2025",
      desc: "solution digitale intégrée pour la commercialisation des produits des coopératives dans le cadre du programme Act for Community",
      descBullets: [
        "Analyse des besoins des parties prenantes (agents OCP et coopératives)",
        "",
        "Conception et développement fullstack d'une marketplace inerne (Backend : Python/Django | Frontend : JS/HTML/CSS | Base de données : SQLite | Paiement en ligne : Stripe)",
        "",
        "Mise en place d'un outil digital fiable centralisant la traçabilité des transactions, intégrant un système de paiement sécurisé et simplifiant la relation client–fournisseur"
      ]
    },
    {
      role: "Full Stack Developer - Stagiaire",
      company: "RentaCar Marrakech",
      companylogo: require("./assets/images/rentCar.jpg"),
      date: "Juillet 2024 – Octobre 2024",
      desc: "Application Desktop de Gestion de Location de Voitures",
      descBullets: [
        "Conception et développement d'une application desktop en Python (PyQt5)",
        "",
        "Intégration d'une base de données MySQL pour la gestion centralisée des données",
        "",
        "Optimisation de la gestion d'une flotte automobile et du suivi des locations",
        "",
        "Intégration de fonctionnalités clés : recherche de véhicules, réservations et calcul automatisé des coûts"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME ACADEMIC & PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/AppFilmLogo.png"),
      projectName: "Dontflix - Movie Recommender App Web",
      projectDesc: "Application web Flask recommandant des films selon préférences utilisateurs et historique",
      footerLink: [
        {
          name: "Visit GitHub Repository",
          url: "https://github.com/Sahnoune-Salaheddine/RcmdMoviesAML-Filtrage-collaborative"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu - Application Desktop de Gestion de Pharmacie",
      projectDesc: "Application desktop Java pour la gestion complète d’une pharmacie avec synchronisation des données via Microsoft SQL Server",
      footerLink: [
        {
          name: "Visit GitHub Repository",
          url: "https://github.com/tonusername/gestionpharapp"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python for Everybody",
      subtitle:
        "Certification en Python — notions fondamentales à l'utilisation pratique pour l'analyse de données.",
      image: require("./assets/images/py.jpeg"),
      imageAlt: "Python for Everybody Certificate Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/WC69TKNRMJDB"
        }
      ]
    },
    {
      title: "React Basics (Meta)",
      subtitle:
        "Bases de React — composants, props, state et cycle de vie (certification Meta).",
      image: require("./assets/images/Rt.jpeg"),
      imageAlt: "React Basics by Meta Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/VEUW5G83IREK"
        }
      ]
    },

    {
      title: "Introduction to Java (POO)",
      subtitle: "Introduction à la Programmation Orientée Objet en Java — classes, objets, héritage, encapsulation.",
      image: require("./assets/images/java.jpeg"),
      imageAlt: "Java Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.coursera.org/account/accomplishments/verify/LOCGQA8P0RRI"}
      ]
    },

    {
      title: "Introduction to Data Analytics - IBM",
      subtitle: "Introduction à l'analyse de données (IBM) — nettoyage, exploration et visualisation des données.",
      image: require("./assets/images/DA.jpeg"),
      imageAlt: "IBM Data Analytics Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.coursera.org/account/accomplishments/verify/QZRZPGNKQMPQ"}
      ]
    },

    {
      title: "Modeling Software Systems using UML",
      subtitle: "Modélisation de systèmes logiciels avec UML — diagrammes de cas d'utilisation, classes, séquences.",
      image: require("./assets/images/uml.jpeg"),
      imageAlt: "UML Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.coursera.org/account/accomplishments/verify/6EK9PKKLLX58"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Ready to start? Don’t hesitate to contact me via email or LinkedIn, and let’s embark on a journey of innovation and success."
  ),

  talks: [
    {
      title: "Contact Me",
      subtitle: "Discuss a project or just want to say hi? My Inbox is open for all",
      slides_url: "mailto:salaheddine.sahnoune.7@gmail.com",
      event_url: "https://www.linkedin.com/in/salaheddine-sahnoune/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212-664-503-865",
  email_address: "salah.sahnoune.7@gmail.com",

};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
