import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
const projectSections = [
  {
    title: 'Production Projects',
    description: 'Large-scale full-stack applications developed using modern frameworks for deployment in real-world environments.',
    projects: [
      {
        title: 'HitzChat',
        description: 'A real-time full-stack chat application built with the MERN stack and Socket.io. Features include user authentication, real-time messaging, theme switching (32+ themes), and responsive UI using Tailwind CSS and DaisyUI.',
        image: 'https://images.unsplash.com/photo-1580894908373-0c4e4c8592b3?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/HitzChat',
        demo: 'https://hitzchat.onrender.com/'
      },
      {
        title: 'Online Game Hub',
        description: 'An online platform hosting browser games, built using React.js and Firebase. Includes user registration, authentication, and interactive game play experiences.',
        image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/OnlineGameHub',
        demo: 'https://onlinegamehub.in/'
      },
      {
        title: 'Pragati 2025',
        description: 'Official tech-fest website for college event Pragati 2025. Collaborated on frontend development and responsive layout.',
        image: 'https://images.unsplash.com/photo-1603570417499-3bbda9c8d638?auto=compress&cs=tinysrgb&w=600',
        github: '#',
        demo: 'https://www.pragati2025.site/'
      }
    ]
  },
  {
    title: 'Authentication Projects',
    description: 'Web applications featuring secure sign-up/login systems using JWT, Firebase Auth, or OAuth.',
    projects: [
      {
        title: 'HitzChat',
        description: 'MERN + Socket.io chat app with JWT-based secure login and real-time chat room functionality.',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/HitzChat',
        demo: 'https://hitzchat.onrender.com/'
      },
      {
        title: 'Online Game Hub',
        description: 'Gaming hub that includes Firebase-based authentication and game tracking.',
        image: 'https://images.unsplash.com/photo-1616265854893-9f0a011c410d?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/OnlineGameHub',
        demo: 'https://onlinegamehub.in/'
      },
      {
        title: 'Spotify Clone',
        description: 'Music streaming UI clone using React, Tailwind, and Spotify API. Includes secure login with OAuth.',
        image: 'https://images.unsplash.com/photo-1580894894510-046c90bcb8ac?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/React-Spotify-Clone',
        demo: 'https://react-spotify-clone-eight.vercel.app/'
      },
      {
        title: 'Netflix Clone',
        description: 'Netflix-inspired UI clone built with React, Firebase, and TMDB API. Secure Firebase authentication included.',
        image: 'https://images.unsplash.com/photo-1598899134739-24c46f58d731?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/Netflix-Clone-React-App',
        demo: 'https://netflix-clone-react-app-one.vercel.app/'
      }
    ]
  },
  {
    title: 'My Personal Project',
    description: 'Portfolio websites created to represent my personal and professional web development journey.',
    projects: [
      {
        title: 'Current Portfolio Site',
        description: 'My latest portfolio website built to showcase all my major web and mobile projects.',
        image: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/Rohit-Personal-Portfolio',
        demo: 'https://rohitsaw6207.github.io/Rohit-Personal-Portfolio/'
      },
      {
        title: 'Project Showcase React App',
        description: 'React-based site built specifically for showcasing all my projects in one place.',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4d5c2e3e3?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/Rohit-Project-Showcase-Site',
        demo: 'https://rohit-project-showcase-site.vercel.app/'
      },
      {
        title: 'Old Portfolio Site',
        description: 'Initial version of my portfolio created using HTML, CSS, and JavaScript.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=compress&cs=tinysrgb&w=600',
        github: 'https://github.com/Rohitsaw6207/Rohit-Project-site',
        demo: 'https://rohitsaw6207.github.io/Rohit-Project-site/'
      }
    ]
  },
  {
    title: 'Android Applications',
    description: 'Android apps developed using Java/Kotlin and Android Studio. Focused on usability, local storage, and location-based features.',
    projects: [
      {
        title: 'Task Manager App',
        description: 'A to-do list application with CRUD operations and local database using SQLite.',
        image: 'https://images.unsplash.com/photo-1607083205977-208918f8d6c3?auto=compress&cs=tinysrgb&w=600',
        github: '#',
        demo: '#'
      },
      {
        title: 'Weather Tracker',
        description: 'Weather app with location-based forecast using OpenWeather API and geolocation.',
        image: 'https://images.unsplash.com/photo-1616594039964-765b9ecb380b?auto=compress&cs=tinysrgb&w=600',
        github: '#',
        demo: '#'
      }
    ]
  },
    {
  title: 'API Key Integration Projects',
  description: 'Projects that integrate with third-party APIs such as OpenWeatherMap and PokeAPI to provide real-time, dynamic content.',
  projects: [
    {
      title: 'Weather App',
      description: 'Weather forecast app that uses OpenWeatherMap API to provide real-time weather data based on user’s location or search query. Built with HTML, CSS, and vanilla JavaScript.',
      image: 'https://images.unsplash.com/photo-1561484930-e991f6c24672?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Weather',
      demo: 'https://rohitsaw6207.github.io/Weather/'
    },
    {
      title: 'Pokédex',
      description: 'A responsive web app that fetches and displays Pokémon data from the PokeAPI. Features include live search, image rendering, and type-based styling.',
      image: 'https://images.unsplash.com/photo-1603048403371-7c06cbd5f9fe?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Pokedex-',
      demo: 'https://rohitsaw6207.github.io/Pokedex-/'
    }
  ]
},
    {
  title: 'Small Game Projects',
  description: 'Fun and interactive browser-based games built with HTML, CSS, and JavaScript — ideal for practicing core logic, animation, and UI design.',
  projects: [
    {
      title: 'Snake Game',
      description: 'Classic snake game built using JavaScript and HTML Canvas. Features real-time movement, food pickup, and increasing speed.',
      image: 'https://images.unsplash.com/photo-1611423434985-049f87f4a1da?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Snake-Game',
      demo: 'https://rohitsaw6207.github.io/Snake-Game/'
    },
    {
      title: 'Insect Catch Game',
      description: 'Tap-to-catch style game with insect sprites, built using vanilla JS. Includes timer and difficulty levels.',
      image: 'https://images.unsplash.com/photo-1590608897129-79da91a8225d?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Insect-catch-game',
      demo: 'https://rohitsaw6207.github.io/Insect-catch-game/'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Classic 2-player tic-tac-toe game with a minimal design. Tracks scores and prevents invalid moves.',
      image: 'https://images.unsplash.com/photo-1581090700227-1b1b21c52020?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Tic-Tac-Toe-Game',
      demo: 'https://rohitsaw6207.github.io/Tic-Tac-Toe-Game/'
    },
    {
      title: 'Breakout Game',
      description: 'Brick-breaking arcade game using HTML Canvas. Includes ball bounce physics, scoring, and levels.',
      image: 'https://images.unsplash.com/photo-1614176101201-1e5a5d09e8f4?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Breakout-game',
      demo: 'https://rohitsaw6207.github.io/Breakout-game/'
    },
    {
      title: 'Hangman Game',
      description: 'Word-guessing game with visual feedback for each wrong guess. Includes hints and reset functionality.',
      image: 'https://images.unsplash.com/photo-1614266189175-07e7f43d690f?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Hangman-Game',
      demo: 'https://rohitsaw6207.github.io/Hangman-Game/'
    }
  ]
},
{
  title: 'Basic Projects',
  description: 'Fundamental frontend projects built using HTML, CSS, and JavaScript — covering timers, calculators, quizzes, clocks, and UI experiments.',
  projects: [
    {
      title: 'Calculator',
      description: 'A scientific calculator web app that handles arithmetic, trigonometry, and percentage operations.',
      image: 'https://images.pexels.com/photos/6686448/pexels-photo-6686448.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Calculator',
      demo: 'https://rohitsaw6207.github.io/Calculator/'
    },
    {
      title: 'Solar System Animation',
      description: 'Visual representation of the solar system using pure CSS animations and positioning logic.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Solar-System-Animation',
      demo: 'https://rohitsaw6207.github.io/Solar-System-Animation/'
    },
    {
      title: 'Theme Clock',
      description: 'A modern digital clock with switchable dark/light themes and real-time updating hands.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Theme-Clock',
      demo: 'https://rohitsaw6207.github.io/Theme-Clock/'
    },
    {
      title: 'Simple Timer',
      description: 'A minimal countdown timer with start/pause/reset controls and audio alert on completion.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Simple-Timmer',
      demo: 'https://rohitsaw6207.github.io/Simple-Timmer/'
    },
    {
      title: 'Myntra Clone',
      description: 'A static clone of Myntra’s homepage including banner sliders, product sections, and footer.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Myntra-Clone',
      demo: 'https://rohitsaw6207.github.io/Myntra-Clone/'
    },
    {
      title: 'Memory Cards',
      description: 'Card flipping memory game that tests user’s recall speed and accuracy. Built using JS DOM.',
      image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/memory-cards',
      demo: 'https://rohitsaw6207.github.io/memory-cards/'
    },
    {
      title: 'Bharat Clock',
      description: 'Displays Indian Standard Time with a real-time updating analog and digital clock.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/bharat-clock-self',
      demo: 'https://bharat-clock-self.vercel.app/'
    },
    {
      title: 'To-do App',
      description: 'Simple and clean task manager where you can add, delete, and check off completed tasks.',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/To-Do-App',
      demo: 'https://to-do-app-tau-beige.vercel.app/'
    },
    {
      title: 'Typing Game',
      description: 'A typing speed test game that challenges users with random words and WPM calculation.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Typing-Game',
      demo: 'https://rohitsaw6207.github.io/Typing-Game/'
    },
    {
      title: 'FAQ Collapse',
      description: 'Frequently Asked Questions section with expandable and collapsible answer toggles.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/F-A-Q-collapse',
      demo: 'https://rohitsaw6207.github.io/F-A-Q-collapse/'
    },
    {
      title: 'Quiz App',
      description: 'Multiple-choice quiz app with score counter and feedback after each answer.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Quiz-App',
      demo: 'https://rohitsaw6207.github.io/Quiz-App/'
    }
  ]
},
{
  title: 'Card Slider Projects',
  description: 'Projects demonstrating advanced UI/UX design with animated cards, slider effects, and split layouts for modern web interfaces.',
  projects: [
    {
      title: 'Card Effect Slider',
      description: 'Carousel-style card slider with interactive transitions and hover effects.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Card-Effect-Slider',
      demo: 'https://rohitsaw6207.github.io/Card-Effect-Slider/'
    },
    {
      title: 'Landscape Card',
      description: 'Visually pleasing landscape card layout using Flexbox and responsive design.',
      image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Landscape-Cards',
      demo: 'https://rohitsaw6207.github.io/Landscape-Cards/'
    },
    {
      title: 'Split Landing Page',
      description: 'Two-panel landing page with hover effect to reveal alternate content.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Split-Landing-Page',
      demo: 'https://rohitsaw6207.github.io/Split-Landing-Page/'
    },
    {
      title: 'Expanding Cards',
      description: 'Cards that expand to highlight content with fluid animations.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Expanding-Cards',
      demo: 'https://rohitsaw6207.github.io/Expanding-Cards/'
    },
    {
      title: 'Vertical Slider',
      description: 'A vertically scrollable slider to display content stacks in modern UI style.',
      image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Vertical-Slider',
      demo: 'https://rohitsaw6207.github.io/Vertical-Slider/'
    },
    {
      title: 'Background Slider',
      description: 'Full-screen slider with changing background images and auto transition.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Background-Slider',
      demo: 'https://rohitsaw6207.github.io/Background-Slider/'
    }
  ]
},

    {
  title: 'Minor Web Projects',
  description: 'A collection of creative micro-interaction projects showcasing CSS animations, hover effects, and canvas logic.',
  projects: [
    {
      title: 'Glitch Button',
      description: 'Animated glitchy button using CSS keyframes and hover states.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Glitch-Button',
      demo: 'https://rohitsaw6207.github.io/Glitch-Button/'
    },
    {
      title: 'Hoverboard',
      description: 'JS hover animation with color burst grid interaction on mouse enter.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Hoverboard',
      demo: 'https://rohitsaw6207.github.io/Hoverboard/'
    },
    {
      title: 'Kinetic Loader',
      description: 'CSS-based animated loading spinner with kinetic movement illusion.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Kinetic-Loader',
      demo: 'https://rohitsaw6207.github.io/Kinetic-Loader/'
    },
    {
      title: 'Loading Animation',
      description: 'Creative loading screens using SVG, CSS animations, and pulse effects.',
      image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Loading-Animation',
      demo: 'https://rohitsaw6207.github.io/Loading-Animation/'
    },
    {
      title: 'Double Click Heart',
      description: 'Instagram-like double-tap to heart animation with counter logic.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Double-Click-Heart',
      demo: 'https://rohitsaw6207.github.io/Double-Click-Heart/'
    },
    {
      title: '3D Boxes BG',
      description: 'CSS grid animation of rotating 3D boxes with dynamic effects.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/3D-Boxes-BG',
      demo: 'https://rohitsaw6207.github.io/3D-Boxes-BG/'
    },
    {
      title: 'Dynamic BG',
      description: 'Gradient and particle-based dynamic background using JavaScript.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Dynamic-BG',
      demo: 'https://rohitsaw6207.github.io/Dynamic-BG/'
    },
    {
      title: 'Interactive BG',
      description: 'Canvas-based animated particles reacting to mouse movement.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Interactive-BG',
      demo: 'https://rohitsaw6207.github.io/Interactive-BG/'
    }
  ]
},
{
  title: 'Other Projects (Data Analysis)',
  description: 'Data analysis dashboards created using Excel and Power BI to uncover key business insights from real-world datasets.',
  projects: [
    {
      title: 'Excel Dashboard – Krishna Store Report 2023',
      description: 'Interactive Excel dashboard summarizing Krishna Store’s 2023 performance with insights like monthly trends, top states, gender-wise sales, and platform performance.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Data-Analysis/tree/main/Excel%20Dashboard',
      demo: '#'
    },
    {
      title: 'Swiggy Power BI Dashboard',
      description: 'Interactive Power BI dashboard analyzing Swiggy’s performance across cities with insights on user behavior, sales, ratings, and food trends.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/Rohitsaw6207/Data-Analysis/tree/main/PowerBI%20Dashboard',
      demo: '#'
    }
  ]
}
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Ultra Dynamic Animated Background */}
      <div className="absolute inset-0 opacity-15">
        {/* Large floating elements with gradients */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-br from-secondary via-accent to-primary rounded-full animate-bounce blur-sm"></div>
        <div className="absolute bottom-40 left-10 w-28 h-28 bg-gradient-to-br from-accent via-primary to-secondary rounded-full animate-ping blur-sm"></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-secondary/80 via-accent/80 to-primary/80 rounded-full animate-bounce blur-sm"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-32 left-1/3 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full animate-float"></div>
        <div className="absolute top-60 right-1/3 w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-14 h-14 bg-gradient-to-r from-accent to-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-22 h-22 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Small particles with various shapes */}
        <div className="absolute top-24 left-1/2 w-8 h-8 bg-secondary/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-80 right-1/2 w-6 h-6 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 left-2/3 w-10 h-10 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-80 right-2/3 w-7 h-7 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Orbiting elements with different speeds */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full animate-orbit"></div>
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-gradient-to-r from-secondary to-accent rounded-full animate-orbit-reverse"></div>
        <div className="absolute top-3/4 right-3/4 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full animate-spiral"></div>
        <div className="absolute top-1/3 left-3/4 w-10 h-10 bg-gradient-to-r from-primary/70 to-accent/70 rounded-full animate-orbit" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-secondary/70 to-primary/70 rounded-full animate-orbit-reverse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional dynamic elements */}
        <div className="absolute top-16 left-3/4 w-8 h-8 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-96 right-3/4 w-6 h-6 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-16 left-1/6 w-9 h-9 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-96 right-1/6 w-7 h-7 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '3.8s' }}></div>
        
        {/* Geometric shapes with rotation */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-primary/40 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-2/3 right-1/5 w-10 h-10 bg-secondary/40 rotate-45 animate-rotate-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-4/5 w-14 h-14 bg-accent/40 rotate-45 animate-rotate-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/6 right-2/3 w-8 h-8 bg-primary/30 rotate-12 animate-rotate-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/6 left-2/3 w-6 h-6 bg-secondary/30 rotate-12 animate-rotate-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Extra floating particles for density */}
        <div className="absolute top-12 left-1/8 w-4 h-4 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-72 right-1/8 w-5 h-5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-12 left-7/8 w-3 h-3 bg-secondary/40 rounded-full animate-ping" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute bottom-72 right-7/8 w-6 h-6 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '3.3s' }}></div>
        
        {/* Wave-like elements */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Interactive Mouse Effect - Primary Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--primary-rgb, 59, 130, 246), 0.2), transparent 40%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      ></div>

      {/* Secondary mouse effect layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x2, 30%) var(--mouse-y2, 70%), rgba(var(--secondary-rgb, 236, 72, 153), 0.25), transparent 50%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x2', `${x + 20}%`);
          e.currentTarget.style.setProperty('--mouse-y2', `${y - 20}%`);
        }}
      ></div>

      {/* Tertiary mouse effect layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x3, 70%) var(--mouse-y3, 30%), rgba(var(--accent-rgb, 34, 197, 94), 0.3), transparent 60%)'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x3', `${x - 30}%`);
          e.currentTarget.style.setProperty('--mouse-y3', `${y + 30}%`);
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-base-content/70 mb-4 animate-fade-in">Browse My All</p>
          <h2 className="text-5xl font-bold mb-8 animate-slide-up bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 0.2}s` }}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 animate-slide-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <p className="text-lg text-base-content/70 max-w-3xl mx-auto animate-fade-in leading-relaxed">
                  {section.description}
                </p>
              </div>
              
              {/* PERFECT: 3 cards per row with slightly bigger size */}
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {section.projects.map((project, index) => (
                  <div
                    key={index}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 w-full animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      minWidth: '340px',
                      maxWidth: '360px'
                    }}
                  >
                    <figure className="px-4 pt-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl object-cover w-full h-52 transition-transform duration-300 hover:scale-110"
                      />
                    </figure>
                    <div className="card-body text-center">
                      <h3 className="card-title text-lg justify-center font-bold">{project.title}</h3>
                      <p className="text-sm text-base-content/70 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="card-actions justify-center gap-2">
                        <a
                          href={project.github}
                          className="btn btn-outline btn-sm hover:scale-105 transition-transform duration-300 shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          className="btn btn-primary btn-sm hover:scale-105 transition-transform duration-300 shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;