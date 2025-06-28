export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Project',
    href: '#project',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with husam was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Abdul Rahman',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Husam\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John bradin',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Husam. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Husam was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Hospital Management',
    desc: 'Built a MERN stack web application using React.js, Node.js, Express, and MongoDB with Stripe and Razorpay integration for secure online medicine booking and payments. ',
    subdesc:
      'Implemented features like doctor appointment scheduling, lab report retrieval, FAQ chatbot, Google Maps, and hospital news updates to enhance healthcare accessibility and user engagement.',
    href: 'https://miniproject-hosponline-frontend1final-1wsbar5kt.vercel.app/',
    texture: '/textures/project/hospital.PNG',
    logo: '/assets/logo_1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/nodejs.png',
      },
     
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'gsap',
        path: '/assets/express.png',
      },
    ],
  },
  {
    title: 'Automatic Invigilation and Evaluation of Answer Scripts Using NLP',
    desc: 'Developed a Python Django web platform for staff and a Flutter mobile app for students to automate descriptive answer evaluation. Applied NLP techniques like keyword extraction, semantic analysis, and sentiment analysis to enable accurate, context-aware scoring.',
    subdesc:
      'Integrated a standard answer repository and scalable scoring model to reduce manual grading and enhance exam efficiency.',
    href: 'https://github.com/Jobin567/answer_evaluation/',
    texture: '/textures/project/answer.JPG',
    logo: '/assets/five.jpeg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/django_logo.webp',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/flutter_logo.png',
      },
      
    ],
  }
  ,
  {
    title: 'Loan Approval Prediction System – Python & Machine Learning',
    desc: 'Developed a loan approval prediction model using Python, scikit-learn, XGBoost, and Flask, featuring data preprocessing, feature engineering, and multiple classification algorithms like logistic regression and decision trees.',
    subdesc:
      'Optimized performance through cross-validation, hyperparameter tuning, and deployed a user-friendly interface for real-time predictions in financial applications.',
    href: 'https://github.com/Jobin567/loan-approval',
    texture: '/textures/project/loan.jpeg',
    logo: '/assets/ml_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'python',
        path: '/assets/python_logo.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/sckit_logo.png',
      },
      
    ],
  },
  {
    title: 'React OLX Clone Using Firebase',
    desc: 'Built a full-featured OLX clone using React for the frontend and Firebase (Firestore, Authentication, Storage) as the backend. Implemented CRUD operations, secure user authentication, and responsive design for seamless cross-device experience. ',
    subdesc:
      'Utilized React Router, Material-UI, and Axios for dynamic routing and modern UI. Showcased proficiency in building scalable, real-time web apps using the React + Firebase stack.',
    href: 'https://olx-reactfirebase.vercel.app/',
    texture: '/textures/project/react.jpeg',
    logo: '/assets/olx_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'express.js',
        path: '/assets/express.png',
      },
      {
        id: 5,
        name: 'mongodb.png',
        path: '/assets/mongodb.png',
      },
    ],
  },
 
{
    title: 'NASA International Space Apps Challenge – Water Pollution Project',
    desc: 'Participated in NASA’s global hackathon, leading a team project focused on water pollution awareness. Developed a website, video, and interactive quiz to educate users on water conservation using engaging, tech-driven tools.',
    subdesc:
      'The project combined our passion for technology and sustainability, addressing a real-world environmental issue.',
    href: 'https://stevetanex.github.io/aqua/',
    texture: '/textures/project/nasa.PNG',
    logo: '/assets/logo_2.PNG',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'express.js',
        path: '/assets/express.png',
      },
      
    ],
  },
 

  {
    title: 'Movie Recommendation System Using Python & Machine Learning',
    desc: 'Built a movie suggestion system using Python, Flask, and ML techniques like collaborative, content-based, and hybrid filtering. Collected and engineered data from movie metadata and user ratings to improve recommendation accuracy. ',
    subdesc:
      'Evaluated models using precision, recall, and F1-score, and deployed a real-time web app for personalized movie suggestions. Demonstrated strong skills in data science, model optimization, and user-focused ML applications.',
    href: 'https://github.com/Jobin567/moviesuggestion/blob/main/movie%20suggestion.ipynb',
    texture: '/textures/project/movie.jpeg',
    logo: '/assets/ml_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python_logo.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/sckit_logo.png',
      },
      
    ],
  },
 
  {
    title: 'Personality Prediction System Using Python & Machine Learning',
    desc: 'Developed a personality prediction system using Python, scikit-learn, and TensorFlow to analyze behavioral data and predict personality traits. Engineered features from text and numeric data, and applied models like logistic regression, decision trees, and neural networks.  ',
    subdesc:
      'Evaluated performance using accuracy, precision, and recall, and deployed a user-friendly profiling interface for individuals and organizations.',
    href: 'https://github.com/Jobin567/personalityprediction/blob/main/Personality%20prediction.ipynb',
    texture: '/textures/project/personality.jpeg',
    logo: '/assets/ml_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python_logo.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/sckit_logo.png',
      },
      
    ],
  },

  {
    title: 'Disney+ Clone Using HTML, CSS & JavaScript',
    desc: 'Developed a responsive Disney+ clone featuring an engaging UI with carousels, cards, and modals for a real-world streaming experience. Implemented video playback, dynamic content loading, and interactive navigation using JavaScript.  ',
    subdesc:
      'Focused on front-end development, recreating a polished and immersive user interface. Showcased proficiency in modern HTML/CSS techniques and interactive UI design.',
    href: 'https://disneyplus-1-1nby.onrender.com/',
    texture: '/textures/project/disney.jpeg',
    logo: '/assets/disney_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      
    ],
  },
{
    title: 'Netflix Clone Using React & Firebase',
    desc: 'Built a responsive Netflix clone using React, integrating TMDB API for real-time movie data and Firebase for secure user authentication. Utilized React hooks, context API, and React Router for state management and dynamic routing. ',
    subdesc:
      'Styled the interface using CSS modules and styled-components, showcasing strong front-end skills and modern React practices.',
    href: 'https://netflixclone-1-nio4.onrender.com/',
    texture: '/textures/project/netflix.jpeg',
    logo: '/assets/netflix_logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      
    ],
  },


 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Cognifyz Technology',
    pos: 'Fullstack Development Intern',
    duration: 'July 2024 - August 2024',
    title: "Built responsive frontend interfaces using React.js, HTML, and CSS, improving UI load time by 30%. Developed and integrated RESTful APIs using Node.js and Express.js reducing data retrieval time by 25%.Collaborated in Agile sprints, using Git and deploying almost 95% full stack features. ",
    icon: '/assets/cognifyz_logo.jpeg',
    animation: 'victory',
  },
  {
    id: 1,
    name: 'Camino InfoTech',
    pos: 'Python Machine Learning Intern',
    duration: 'October 2022 - October 2022',
    title: "Built ML models in Python with NumPy, pandas, and scikit-learn, improving accuracy by 20%.Applied supervised learning and NLP (tokenization, TF-IDF), achieving 85%+ classification accuracy.",
    icon: '/assets/camino_logo.jpeg',
    animation: 'victory',
  },{
    id: 1,
    name: 'Pacelab Kochi',
    pos: 'Ethical Hacking Intern',
    duration: 'May 2023 - May 2023',
    title: "One week internship on Ethical Hacking from Pacelab Kochi.Learned to identify and fix security gaps before malicious hackers exploit them. Gained awareness of maintaining ethical standards and raising awareness on cybersecurity.",
    icon: '/assets/pacelab_logo.png',
    animation: 'victory',
  },

 
];
