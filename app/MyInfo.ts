const INFO = {
  main: {
    title: "Portfolio site",
    name: "Bibek Koirala",
    email: "kbibek371@gmail.com",
    logo: "../logo.png",
    phone: '(647) 719 - 3270',
    website: "https://BibekKoirala.github.io/myportfolio"
  },

  socials: {
    facebook: "https://www.facebook.com/bibek.koirala.583?mibextid=LQQJ4d",
    github: "https://github.com/BibekKoirala",
    instagram:
      "https://www.instagram.com/kbibek371?igsh=MWJhdjRrbzRleHE1Yw%3D%3D&utm_source=qr",
    twitter: "https://x.com/bibek_koi?s=21",
    leetcode: "https://leetcode.com/u/bibekkoirala/",
    linkedin:
      "https://www.linkedin.com/in/bibek-koirala-b4b1b9243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },

  homepage: {
    title: ` Hi <span>,</span> I am <br /> Bibek <br /> Koirala{" "} <span>.</span>{" "}`,
    description:
      "Software Engineer",
  },

  about: {
    title: "I am a Software Engineer,",
    description: `
          I'm a passionate and driven software engineer with a solid foundation in full-stack development. Skilled in modern frontend technologies, including ReactJS, NextJS, and Redux, I build dynamic and responsive web applications with a focus on user experience. My backend expertise lies in NodeJS, particularly with the Express framework, where I create RESTful APIs and implement real-time communication using WebSocket.
      
          I have hands-on experience with OAuth and have integrated it across multiple projects for secure user authentication. My enthusiasm for AI/ML has led me to work on diverse projects, including sentiment analysis and recommender systems, applying my understanding of machine learning to solve real-world problems.
      
          Experienced in both relational (MySQL) and non-relational (MongoDB) databases, I work comfortably with structured and unstructured data. As a technology enthusiast, I'm always eager to embrace new challenges and contribute to the team in meaningful ways.`
  },

  articles: {
    title:
      "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
    description:
      "Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
  },
  education: [
    {
      period: "2018 - 2022",
      degree: "Bachelor of Technology in Computer Science",
      institution: "BML Munjal University",
      location: "Gurugram, India",
      description: "During my time at BML Munjal University, I completed my Bachelor's of Technology in Computer Engineering, graduating with a 7.52 CGPA. I immersed myself in extracurricular activities, actively contributing to the robotics club, where I collaborated on innovative projects and developed hands-on technical skills. Beyond academics, I proudly represented the university on the football field, balancing my passion for sports with a commitment to teamwork and leadership. These experiences enriched my university journey, combining both technical growth and personal development."
    },
    {
      period: "2023 - 2024",
      degree: "Applied A.I. Solutions Development (PostGraduate)",
      institution: "George Brown College",
      location: "Toronto, Canada",
      description: "During my tenure at George Brown College, I engaged in a diverse array of projects, including sentiment analysis, chatbot development, object detection, and working with large language models (LLMs). Each project offered unique challenges and learning opportunities, allowing me to gain hands-on experience with advanced technologies. From designing algorithms to fine-tuning models, I developed a deep understanding of both the technical and practical aspects of these fields. This experience not only sharpened my skills but also strengthened my ability to tackle real-world applications with innovative solutions."
    },
    {
      period: "2024 - 2025",
      degree: "Cloud Computing Technologies (PostGraduate)",
      institution: "George Brown College",
      location: "Toronto, Canada",
      description: "In my ongoing Cloud Computing course at George Brown College, I'm exploring key cloud platforms such as Microsoft Azure and Amazon Web Services (AWS). Through hands-on projects, I am learning to deploy, manage, and scale applications, gaining a deeper understanding of cloud architecture, virtualization, and resource management. Working with Azure and AWS is providing me with a solid foundation in cloud storage, networking, and security practices. This course is equipping me with practical skills that are essential in today’s tech-driven landscape, enhancing my ability to apply cloud solutions to real-world challenges."
    }
  ],
  projects: [
    {
      title: "Chess App",
      description:
        "An online chess app offering multiplayer matches with other players or single-player games powered by the Stockfish5 engine for a challenging AI opponent.",
      logo: "https://bibekkoirala.github.io/graph_search_algorithm_visualization/GSA_Viz.png",
      pinned: true,
      link: "https://github.com/BibekKoirala/chess_backend",
      demo: "https://drive.google.com/file/d/1qyOlG0a16RFQ_g_f0R1OW_PMpmsYxwiB/view?usp=sharing",
      maintainance: true,
      badges: ['ReactJS', 'ExpressJS', 'Node.js', 'WebSockets', 'REST', 'Redux', 'JWT', 'MongoDB'],
      poster: "/images/Che_Poster.png"
    },
    {
      title: "MirrorStyle",
      description:
        "Experience fashion like never before with our Virtual Try-On app, designed to help you visualize how clothing items will look on you before making a purchase. Using advanced AR technology, the app overlays garments onto your live image, giving a realistic preview of fit, style, and color. Discover the perfect look with confidence, all from the comfort of your own space!",
      logo: "https://bibekkoirala.github.io/graph_search_algorithm_visualization/GSA_Viz.png",
      pinned: true,
      link: "https://github.com/sageradh1/virtual-try-on",
      maintainance: true,
      badges: ['Flask', 'Torch', 'Transformers'],
      poster: "/images/Mir_Poster.png"
    },
    {
      title: "Graph Search Algorithm Visualization",
      description:
        "This React application visualizes various graph search algorithms. Users can configure the algorithm type, grid type, animation times, and grid size before starting the search. The visualization helps in understanding how different algorithms explore the graph.",
      logo: "https://bibekkoirala.github.io/graph_search_algorithm_visualization/GSA_Viz.png",
      pinned: true,
      link: "https://github.com/BibekKoirala/graph_search_algorithm_visualization",
      demo: "https://bibekkoirala.github.io/graph_search_algorithm_visualization/",
      maintainance: true,
      badges: ['ReactJS', 'CSS', 'DSA', 'HTML'],
      poster: "/images/GSA_Poster.png"
    },
    {
      title: "Genetic Algorithms VS Gradient-Based Algorithms for Neural Network ",
      description:
        "This project explores advanced neural network training using genetic algorithms and gradient descent. It features custom implementations of neural networks and its training using python.",
      logo: "https://raw.githubusercontent.com/BibekKoirala/GeneticNeuralNet/main/project_img.webp",
      pinned: true,
      link: "https://github.com/BibekKoirala/GeneticNeuralNet",
      maintainance: false,
      badges: ['Python', 'NeuralNetwork', 'AI'],
      poster: "/images/Gen_Poster.png"
    },
    {
      title: "News Recommender System",
      description:
        "Discover news that interests you. Our recommender suggests articles based on your preferences, using advanced algorithms and natural language processing.",
      logo: "https://raw.githubusercontent.com/BibekKoirala/NewsRecommenderSystem/main/project_img.jpg",
      pinned: true,
      link: "https://github.com/BibekKoirala/NewsRecommenderSystem",
      demo: "https://colab.research.google.com/drive/1_yvJ9w2fZE6sxmTSjig7LhQhWl0HOG8p",
      maintainance: true,
      badges: ['Python', 'NLP', 'SKLearn', "RecommenderSystems"],
      poster: "/images/Rec_Poster.png"
    },
    {
      title: "Attendance management system",
      description:
        "An efficient attendance management system that uses RFID tags to automate attendance tracking, ensuring accurate and real-time updates with minimal manual input",
      logo: "https://bibekkoirala.github.io/graph_search_algorithm_visualization/GSA_Viz.png",
      pinned: true,
      link: "https://github.com/BibekKoirala/attendance_managment_cloudproject",
      maintainance: true,
      badges: ['ReactJS', 'C++', 'Hardware', 'Redux', 'MUI', 'JWT', 'MongoDB'],
      poster: "/images/Att_Poster.png"
    },

    {
      title: "ActiveSphere",
      description:
        "A dynamic blog app where sports enthusiasts can share their recent experiences, posting stories and insights for others to read and enjoy. Users can document their memorable moments, discuss highlights, and connect with a like-minded community.",
      logo: "https://bibekkoirala.github.io/graph_search_algorithm_visualization/GSA_Viz.png",
      pinned: true,
      link: "https://github.com/BibekKoirala/ActiveSphere",
      demo: "https://active-sphere.vercel.app/",
      maintainance: true,
      badges: ['NextJS', 'ReactJS', 'OAuth', 'Firebase', 'Tailwind'],
      poster: "/images/Act_Poster.png"
    },


  ],
};

export default INFO;