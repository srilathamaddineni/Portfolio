export const portfolioData = {
  personal: {
    name: "Srilatha Maddineni",
    title: "Full Stack Developer",
    intro:
      "Software Engineer with 3+ years of experience building scalable apps and exploring the future of cloud and AI",
    bio: "I’m a software engineer with 3+ years of experience building scalable applications across front-end, back-end, and cloud technologies. I enjoy working with React, Spring Boot, Node.js, and PostgreSQL, and have hands-on expertise with AWS, Azure, Docker, and Kubernetes. Recently, I’ve been expanding my skills in cloud-native architectures and AI-driven solutions, always striving to learn and grow with evolving technologies.",
    email: "srilathamaddineni78@gmail.com",
    phone: "+1 (703) 474-5155",
    location: "Fairfax, Virginia",
    resume: "/Srilatha_Maddineni.pdf",
    image: "/profile.jpg" // Add your profile image to public folder
  },

  experience: [
    {
      id: 1,
      company: "Arthrex",
      position: "Software Engineer",
      duration: "Feb 2025 - Present",
      responsibilities: [
        "Develop secure, scalable UI features using React integrated with Spring Boot microservices, supporting fast data exchange for 100,000+ concurrent users.",
        "Build and maintain distributed microservices using Spring Boot, Spring Cloud, and API-first design; implement resilience patterns such as Circuit Breaker (Resilience4j) to ensure fault-tolerance and stable service communication.",
        "Optimize high-volume workflows by tuning PostgreSQL queries and applying Spring Data JPA pagination, increasing retrieval speed by 25–30%.",
        "Implement asynchronous event workflows using Kafka producers and consumers, reducing API load and enabling real-time communication across services.",
        "Collaborate with product managers, UX designers, and engineers in Agile processes to refine developer-ready user stories and deliver features meeting quality and change control standards."
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Microservices", "Agile"]
    },
    {
      id: 2,
      company: "George Mason University",
      position: "Research Assistant",
      duration: "Feb 2023 - Dec 2024",
      responsibilities: [
        "Built and maintained backend modules and REST APIs using Java, Spring Boot, Spring MVC, and JPA, improving workflow automation and system reliability.",
        "Enhanced performance by applying Java debugging, profiling, functional programming patterns (Streams), and optimized database queries for high-volume processing.",
        "Developed automated JUnit and Mockito test suites and integrated them into CI/CD workflows, ensuring consistent, high-quality deployments."
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "JUnit",
        "Mockito",
        "CI/CD"
      ]
    },
    {
      id: 3,
      company: "United Health Group",
      position: "Associate Software Engineer",
      duration: "Jun 2021 - Dec 2022",
      responsibilities: [
        "Built premium claims-history features using Spring Boot REST APIs, service layers, and JPA pagination, improving data retrieval speed by 30% for provider workflows.",
        "Developed secure, high-performance UIs with React (custom hooks, React Query, controlled forms, routing), reducing navigation friction across claims and payment modules.",
        "Strengthened platform security by implementing MFA with Spring Security, OAuth2/JWT, and React-based OTP flows, ensuring compliant access to financial data.",
        "Ensured reliable releases by implementing JUnit and Mockito unit testing and automating deployments through Jenkins CI/CD, reducing defects and improving delivery consistency.",
        "Served as a key contributor in the migration of internal jobs, online portal, and microservices from on-premise to Microsoft Azure Cloud, including lift-and-shift of DB2 to PostgreSQL and Unix to Linux servers."
      ],
      technologies: [
        "Selenium",
        "Cucumber",
        "Java",
        "Postman",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "REST APIs",
        "Microsoft Azure",
        "PostgreSQL"
      ]
    },
    {
      id: 4,
      company: "Sahakar Solutions",
      position: "Software Engineer Intern",
      duration: "Jun 2020 - May 2021",
      responsibilities: [
        "Built a healthcare web application using React and Node.js to store visited patient data, enabling 24/7 access to patient information.",
        "Implemented RESTful API integration and applied SEO optimization techniques for improved visibility.",
        "Collaborated with QA teams to write unit and integration tests, ensuring data accuracy and system reliability."
      ],
      technologies: ["React Native", "PHP", "MySQL", "REST APIs", "Mobile Development"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Cloud Mart",
      description:
        "Built cloud-native e-commerce platform with React, Node.js, Terraform, EKS, Lambda, Code Pipeline, DynamoDB, Amazon Bedrock, serving 1000+ users.",
      technologies: [
        "React",
        "Node.js",
        "Terraform",
        "AWS EKS",
        "AWS Lambda",
        "DynamoDB",
        "Code Pipeline",
        "Amazon Bedrock"
      ],
      githubUrl: "https://github.com/srilathamaddineni/CloudMart",
      image: "/CloudMart.png"
    },
    {
      id: 2,
      title: "Blog Platform with Security",
      description:
        "Developed full-stack blog platform using React, JavaScript, Spring Boot, Hibernate, Spring Security, JWT, PostgreSQL, Docker and REST APIs, improving secure content management by 30%.",
      technologies: [
        "React",
        "JavaScript",
        "Spring Boot",
        "Hibernate",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Docker",
        "REST APIs"
      ],
      githubUrl: "https://github.com/srilathamaddineni/Blog-Platform-with-Spring-Security",
      image: "/BlogImage.png"
    },
    {
      id: 3,
      title: "Student Survey Application",
      description:
        "Built a full-stack survey management system using Angular, TypeScript, Spring Boot, MySQL (RDS), Tailwind, and AWS, handling 500+ survey responses with responsive UI, REST APIs, and cloud deployment.",
      technologies: [
        "Angular",
        "TypeScript",
        "Spring Boot",
        "MySQL",
        "AWS RDS",
        "Tailwind CSS",
        "REST APIs"
      ],
      githubUrl: "https://github.com/srilathamaddineni/survey-app",
      image: "/Survey.jpg"
    },
    {
      id: 4,
      title: "Human Activity Recognition",
      description:
        "Implemented a smartwatch-based Human Activity Recognition system using accelerometer data, GPS, SVM, Random Forest, and ANN, achieving 95% classification accuracy for daily physical activities.",
      technologies: ["Python", "Machine Learning", "SVM", "Random Forest", "ANN", "Data Analytics"],
      githubUrl: "https://github.com/srilathamaddineni/Human-activity-Recognition",
      image: "/HumanActivityRecognition.jpg"
    },
    {
      id: 5,
      title: "Twitter Sentiment Analysis",
      description:
        "Developed an NLP-based sentiment analysis model using Python, scikit-learn, and NLTK to classify tweets as racist/sexist vs. neutral, achieving 94% accuracy and enhancing social media text analytics.",
      technologies: [
        "Python",
        "NLP",
        "NLTK",
        "Scikit-learn",
        "Sentiment Analysis",
        "Machine Learning"
      ],
      githubUrl: "https://github.com/srilathamaddineni/twitter-sentiment",
      image: "/SentimentAnalysis.jpg"
    }
  ],

  skills: {
    frontend: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Redux"],
    backend: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Java",
      "Python",
      "C/C++",
      "REST APIs",
      "SOAP",
      "GraphQL"
    ],
    database: ["MongoDB", "MySQL", "PostgreSQL", "AWS RDS"],
    cloud: ["AWS (S3, EC2, Lambda, RDS)", "Microsoft Azure", "Docker", "Kubernetes"],
    testing: ["Selenium", "Cucumber", "JUnit", "Mockito"],
    tools: ["Git", "GitLab", "VS Code", "IntelliJ", "Eclipse", "Postman", "Jupyter Notebook"],
    dataScience: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "NLTK"],
    machineLearning: ["KNN", "Random Forest", "Naïve Bayes", "BERT", "Sentence Transformer", "Word2Vec"]
  },

  education: [
    {
      id: 1,
      degree: "Masters in Computer Science",
      school: "George Mason University",
      location: "Fairfax, Virginia",
      duration: "Jan 2023 - Dec 2024",
      description:
        "Focused on software engineering, data structures, algorithms, and cloud computing. Worked as Research Assistant on GeoWeaver project."
    },
    {
      id: 2,
      degree: "Bachelors in Information Communication and Technology",
      school: "SASTRA University",
      location: "India",
      duration: "Jun 2017 - May 2021",
      description:
        "Studied computer science fundamentals, software development, and completed projects in machine learning and NLP."
    }
  ],

  certifications: [
    {
      id: 1,
      name: "AWS CLOUD PRACTITIONER",
      issuer: "AWS",
      date: "2024",
      credentialUrl:
        "https://www.credly.com/badges/af16098e-b161-4350-bab8-d19d89fa0148/linked_in_profile"
    },
    {
      id: 2,
      name: "JPMorgan Chase & Co - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2025",
      credentialUrl:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_5P6fRhs9sgoemXHsr_1743020038169_completion_certificate.pdf"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credentialUrl:
        "https://www.credly.com/badges/2789812e-3722-44d6-a056-8a4b8d648359?source=linked_in_profile"
    }
  ],

  social: {
    github: "https://github.com/srilathamaddineni",
    linkedin: "https://www.linkedin.com/in/srilatha-maddineni-776363169/",
    email: "srilathamaddineni78@gmail.com"
  }
};
