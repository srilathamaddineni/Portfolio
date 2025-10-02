export const portfolioData = {
  personal: {
    name: "Srilatha Maddineni",
    title: "Full Stack Developer",
    bio: "Passionate Full Stack Developer with expertise in modern web technologies. I love building scalable applications and learning new technologies.",
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
        "Developing secure, reliable, and scalable front-end features using React and microservices with Spring Boot, enabling secure and efficient data exchange for applications handling 1,000+ concurrent users",
        "Optimizing PostgreSQL queries with Spring Data JPA, improving data retrieval speed by 25-30% in high-volume workflows",
        "Collaborating with product managers, UX designers, and engineers in Agile processes to refine developer-ready user stories and deliver features meeting quality and change control standards"
      ],      technologies: ["React", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Microservices", "Agile"]
    },
    {
      id: 2,
      company: "George Mason University",
      position: "Research Assistant",
      duration: "Feb 2023 - Dec 2024",
responsibilities: [
        "Developed backend services with Java Spring Boot and Hibernate, integrating with MongoDB and PostgreSQL to support secure, large-scale data workflows",
        "Built and documented REST APIs, reducing manual workload for researchers by automating recurring data tasks",
        "Applied JUnit and Mockito for unit testing, and integrated CI/CD pipelines, improving code quality and reducing release cycle times by 20%"
      ],
            technologies: ["Java", "Spring Boot", "Hibernate", "MongoDB", "PostgreSQL", "REST APIs", "JUnit", "Mockito", "CI/CD"]
    },
    {
      id: 3,
      company: "United Health Group",
      position: "Associate Software Engineer",
      duration: "Jun 2021 - Dec 2022",
responsibilities: [
        "Developed an end-to-end automation testing framework for a web application using Selenium, Cucumber, Java, and Postman for API validation, which reduced 80% of manual testing effort and improved overall test coverage and reliability",
        "Involved in the complete software development life cycle, from gathering user requirements and development to testing and deployment, following Agile methodology",
        "Utilized Spring Data JPA to integrate with MySQL database, reducing data retrieval times by 30%. Developed RESTful APIs using Java Spring Boot, enabling seamless communication between front-end and back-end systems with an MVC architecture",
        "Key Contributor in the migration of Internal Jobs, Online Portal & Microservices from On Premise to Microsoft Azure Cloud. It was a lift and shift of DB2 to PostgreSQL, Unix to Linux server"
      ],
            technologies: ["Selenium", "Cucumber", "Java", "Postman", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs", "Microsoft Azure", "PostgreSQL"]
    },
    {
      id: 4,
      company: "Sahakar Solutions",
      position: "Software Engineer Intern",
      duration: "Jun 2020 - May 2021",
responsibilities: [
        "Developed a cross-platform mobile application using React Native and PHP to store and manage patient records, providing healthcare staff with 24/7 mobile access",
        "Integrated MySQL database with PHP backend, handling 500+ test records with secure storage and improving retrieval speed by 25% during testing",
        "Implemented RESTful APIs and authentication mechanisms, ensuring seamless communication between front end and backend while maintaining data integrity for all users"
      ],
      technologies: ["React Native", "PHP", "MySQL", "REST APIs", "Mobile Development"]
    }
  ],
  
 projects: [
    {
      id: 1,
      title: "Cloud Mart",
      description: "Built cloud-native e-commerce platform with React, Node.js, Terraform, EKS, Lambda, Code Pipeline, DynamoDB, Amazon Bedrock, serving 1000+ users.",
      technologies: ["React", "Node.js", "Terraform", "AWS EKS", "AWS Lambda", "DynamoDB", "Code Pipeline", "Amazon Bedrock"],
      githubUrl: "https://github.com/srilathamaddineni/CloudMart",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Blog Platform with Security",
      description: "Developed full-stack blog platform using React, JavaScript, Spring Boot, Hibernate, Spring Security, JWT, PostgreSQL, Docker and REST APIs, improving secure content management by 30%.",
      technologies: ["React", "JavaScript", "Spring Boot", "Hibernate", "Spring Security", "JWT", "PostgreSQL", "Docker", "REST APIs"],
      githubUrl: "https://github.com/srilathamaddineni/Blog-Platform-with-Spring-Security",
      image: "/project2.jpg"
    },
    {
      id: 3,
      title: "Student Survey Application",
      description: "Built a full-stack survey management system using Angular, TypeScript, Spring Boot, MySQL (RDS), Tailwind, and AWS, handling 500+ survey responses with responsive UI, REST APIs, and cloud deployment.",
      technologies: ["Angular", "TypeScript", "Spring Boot", "MySQL", "AWS RDS", "Tailwind CSS", "REST APIs"],
      githubUrl: "https://github.com/srilathamaddineni/survey-app",
      image: "/Survey.jpg"
    },
    {
      id: 4,
      title: "Human Activity Recognition",
      description: "Implemented a smartwatch-based Human Activity Recognition system using accelerometer data, GPS, SVM, Random Forest, and ANN, achieving 95% classification accuracy for daily physical activities.",
      technologies: ["Python", "Machine Learning", "SVM", "Random Forest", "ANN", "Data Analytics"],
      githubUrl: "https://github.com/srilathamaddineni/Human-activity-Recognition",
      image: "/HumanActivityRecognition.jpg"
    },
    {
      id: 5,
      title: "Twitter Sentiment Analysis",
      description: "Developed an NLP-based sentiment analysis model using Python, scikit-learn, and NLTK to classify tweets as racist/sexist vs. neutral, achieving 94% accuracy and enhancing social media text analytics.",
      technologies: ["Python", "NLP", "NLTK", "Scikit-learn", "Sentiment Analysis", "Machine Learning"],
      githubUrl: "https://github.com/srilathamaddineni/twitter-sentiment",
      image: "/SentimentAnalysis.jpg"
    }
  ],
  
  skills: {
    frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Redux"
    ],
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
    database: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "AWS RDS"
    ],
    cloud: [
      "AWS (S3, EC2, Lambda, RDS)",
      "Microsoft Azure",
      "Docker",
      "Kubernetes"
    ],
    testing: [
      "Selenium",
      "Cucumber",
      "JUnit",
      "Mockito"
    ],
    tools: [
      "Git",
      "GitLab",
      "VS Code",
      "IntelliJ",
      "Eclipse",
      "Postman",
      "Jupyter Notebook"
    ],
    dataScience: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "NLTK"
    ],
    machineLearning: [
      "KNN",
      "Random Forest",
      "Naïve Bayes",
      "BERT",
      "Sentence Transformer",
      "Word2Vec"
    ]
  },
  education: [
    {
      id: 1,
      degree: "Masters in Computer Science",
      school: "George Mason University",
      location: "Fairfax, Virginia",
      duration: "Jan 2023 - Dec 2024",
      description: "Focused on software engineering, data structures, algorithms, and cloud computing. Worked as Research Assistant on GeoWeaver project."
    },
    {
      id: 2,
      degree: "Bachelors in Information Communication and Technology",
      school: "SASTRA University",
      location: "India",
      duration: "Jun 2017 - May 2021",
      description: "Studied computer science fundamentals, software development, and completed projects in machine learning and NLP."
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "AWS CLOUD PRACTITIONER",
      issuer: "AWS",
      date: "2024",
      credentialUrl: "https://www.credly.com/badges/af16098e-b161-4350-bab8-d19d89fa0148/linked_in_profile"
    },
    {
      id: 2,
      name: "JPMorgan Chase & Co - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2025",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_5P6fRhs9sgoemXHsr_1743020038169_completion_certificate.pdf"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credentialUrl: "https://www.credly.com/badges/2789812e-3722-44d6-a056-8a4b8d648359?source=linked_in_profile"
    }
  ],

  social: {
    github: "https://github.com/srilathamaddineni",
    linkedin: "https://www.linkedin.com/in/srilatha-maddineni-776363169/",
    email: "srilathamaddineni78@gmail.com"
  }
};