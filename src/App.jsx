import ProjectCard from './components/ProjectCard';
import blogScreenshot from './assets/blog.png';
import githubLogo from './assets/github-mark-white.svg';
import jap from './assets/jap.JPG';
import linkedInLogo from './assets/icons8-linkedin.svg';
import memoryCardScreenshot from './assets/memory-card.png';
import cvScreenshot from './assets/odin-cv-application.png';
import tabletalk from './assets/tabletalk.png';
import devboard from './assets/devboard.png';
import iitroparLogo from './assets/iitropar-logo.png'; // move logo into assets like your other images
import annamLogo from './assets/annam.png'
import { useState } from "react";
import './Experience.css'; // new file, styles below
import { FaChartLine, FaLeaf } from "react-icons/fa6";

import {
	SiNodedotjs,
	SiMongodb,
	SiExpress,
	SiReact,
	SiTailwindcss,
	SiPython,
	SiNextdotjs,
	SiScikitlearn,
	SiRedux,
  } from "react-icons/si";

  import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaEnvelope,
	FaFileAlt,
	FaJava,        // add this
  } from "react-icons/fa";

const experiences = [
  {
    logo: iitroparLogo,
    company: "iHub-AWaDH @ IIT Ropar",
    role: "AI/ML Intern · 2026",
    tags: [
		{
		  icon: <SiPython />,
		  text: "Python",
		},
		{
		  icon: <FaChartLine />,
		  text: "Regression",
		},
		{
		  icon: <FaLeaf />,
		  text: "Hyperspectral Imaging",
		},
		{
		  icon: <SiScikitlearn />,
		  text: "Scikit-learn",
		},
	  ],
	  points: [
		"- Preprocessed a 19,000+ sample hyperspectral soil reflectance dataset (1,000 spectral bands, 400–940 nm) using Python, NumPy and pandas by handling missing values, removing duplicates, treating outliers and scaling spectral features.",
	  
		"- Optimized spectral interpolation step sizes and data preprocessing pipelines to improve regression model performance, achieving an R² score of 0.803 for Organic Carbon (OC) prediction and 0.690 for Nitrogen (N).",
	  
		"- Evaluated multiple machine learning regression models to predict soil nutrients including Organic Carbon, Nitrogen, Phosphorus and Potassium using hyperspectral reflectance data, comparing models with RMSE and R² metrics.",
	  
		"- Collaborated with a cross-functional AI/ML and Android development team to build an IoT-based precision agriculture system integrated with BLE-enabled optical soil sensors."
	  ],
  },
//   {
//     logo: annamLogo,
//     company: "iHub-AWaDH @ IIT Ropar",
//     role: "Embedded Firmware Intern · 2026",
//     tags: ["🔧 MSP430", "📡 RS-485", "✅ CRC16 MODBUS"],
//     points: [
//       "Built firmware for an ultrasonic anemometer, implementing circular-mean wind direction averaging using sin/cos accumulation and atan2f.",
//       "Implemented a 40-sample sliding-window filter for wind speed averaging and channel-swap bias cancellation.",
//       "Added CRC16 MODBUS error checking and RS-485 UART output for reliable data transmission.",
//     ],
//   },
];



function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`exp-card ${open ? "open" : ""}`}>
      <button className="exp-header" onClick={() => setOpen(!open)}>
        <div className="exp-title-row">
          <img src={exp.logo} className="exp-logo" alt="logo" />
          <div>
            <h3>{exp.company}</h3>
            <p className="exp-role">{exp.role}</p>
          </div>
        </div>
        <span className="chevron">▾</span>
      </button>

      <div className="exp-content">
        <div className="exp-content-inner">
		<div className="tags">
		{exp.tags.map((tag) => (
			<span className="tag" key={tag.text}>
			{tag.icon}
			<span>{tag.text}</span>
			</span>
		))}
		</div>
          <ul className="exp-points">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}




const techStack = [
	{
		icon: <FaJava className="text-[#f89820]" />,
		name: "Java",
	  },
	{
	  icon: <SiNodedotjs className="text-[#339933]" />,
	  name: "Node.js",
	},
	{
	  icon: <SiMongodb className="text-[#47A248]" />,
	  name: "MongoDB",
	},
	{
	  icon: <SiExpress className="text-gray-300" />,
	  name: "Express.js",
	},
	{
	  icon: <SiReact className="text-[#61DAFB]" />,
	  name: "React",
	},
	{
	  icon: <SiTailwindcss className="text-[#06B6D4]" />,
	  name: "Tailwind CSS",
	},
	{
	  icon: <SiPython className="text-[#3776AB]" />,
	  name: "Python",
	},
	{
	  icon: <SiNextdotjs className="text-white" />,
	  name: "Next.js",
	},
	{
	  icon: <SiRedux className="text-[#764ABC]" />,
	  name: "Redux",
	},
  ];



function App() {

	return (
		<>
			<header className='text-muted-foreground fixed top-5 right-[50%] translate-x-[50%] z-1000 flex justify-center rounded-4xl border border-black/7 bg-white/10 px-8 sm:px-[20%] py-5 shadow-2xs backdrop-blur-md'>
				<nav className='flex gap-5 justify-center'>
					<a href='#about'>About</a>
					{/* <a href='#skills'>Tech Stack</a> */}
					<a href="#experience">Experience</a>
					<a href='#projects'>Projects</a>
					<a href='#contact'>Contact</a>
				</nav>
			</header>
			<main className='flex flex-col items-center mt-28 gap-20 overflow-hidden'>
				<section id='about'>
					<div className='relative'>
						<div className='grid grid-cols-5 grid-rows-5 w-screen h-100 mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%'>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
							<div className='border border-white/15'></div>
						</div>
						<div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex gap-5 flex-wrap items-center justify-center'>
							<img
								className="w-48 h-48 rounded-full object-cover object-center"
								alt='Sherwin Distor Headshot'
								src={jap}
							/>
							<div>
								<p className='text-center sm:text-right'>Hello World👋 I'm</p>
								<h1 className='text-3xl font-bold text-center sm:text-right'>
									Japman Singh
								</h1>
								<p className='text-center sm:text-right'>Software Developer</p>
							</div>
						</div>
					</div>
					<div className='w-screen text-center flex justify-center'>
						<p className='w-[80%] sm:w-[60%] text-lg'>
						I'm a Final year B.Tech Computer Science student with a strong interest 
						in software engineering and problem solving. I primarily code in Java and 
						actively practice Data Structures and Algorithms to strengthen my understanding
						 of efficient algorithms and system design. Alongside DSA, I'm building 
						 full-stack web applications using the MERN stack and continuously learning 
						 modern technologies to become a well-rounded software engineer. I'm always 
						 looking for opportunities to build impactful projects, improve my skills, and grow as a developer.
						</p>
					</div>

					<div className="flex justify-center gap-5 mt-10 flex-wrap">

						<a
							href="https://www.linkedin.com/in/japman-singh11/"
							target="_blank"
							rel="noreferrer"
							className="group"
						>
							<div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
											flex items-center justify-center
											hover:bg-white hover:text-black hover:scale-110
											transition duration-300">
							<FaLinkedin size={28} />
							</div>
						</a>

						<a
							href="https://github.com/iJapmanSingh"
							target="_blank"
							rel="noreferrer"
							className="group"
						>
							<div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
											flex items-center justify-center
											hover:bg-white hover:text-black hover:scale-110
											transition duration-300">
							<FaGithub size={28} />
							</div>
						</a>

						<a
							href="https://leetcode.com/u/im_japmansingh/"
							target="_blank"
							rel="noopener noreferrer"
							className="social-icon"
							>
							<img
								src="/leetcode.png"
								alt="LeetCode"
								className="leetcode-logo"
							/>
							</a>

						<a
							href="mailto:japman006@gmail.com"
							className="group"
						>
							<div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
											flex items-center justify-center
											hover:bg-white hover:text-black hover:scale-110
											transition duration-300">
							<FaEnvelope size={28} />
							</div>
						</a>

						<a
							href="https://instagram.com/japmansingh._"
							target="_blank"
							rel="noreferrer"
							className="group"
						>
							<div className="w-12 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
											flex items-center justify-center
											hover:bg-white hover:text-black hover:scale-110
											transition duration-300">
							<FaInstagram size={28} />
							</div>
						</a>

						<a
							href="/resume.pdf"
							target="_blank"
							className="group"
						>
							<div className="px-8 h-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md
											flex items-center gap-3
											hover:bg-white hover:text-black hover:scale-110
											transition duration-300">
							<FaFileAlt size={25} />
							<span className="font-semibold text-lg">
								Resume
							</span>
							</div>
						</a>

						</div>
				</section>


				<section id="skills" className="skills">
				<h2>TECH STACK</h2>

				<div className="skills-grid">
					{techStack.map((tech) => (
						<div className="skill-pill" key={tech.name}>
							<span className="text-2xl">{tech.icon}</span>
							<span>{tech.name}</span>
						</div>
					))}
				</div>
			</section>
												
				
				<section id="experience" className="experience">
				<h2>EXPERIENCE</h2>
				{experiences.map((exp) => (
					<ExperienceCard exp={exp} key={exp.company + exp.role} />
				))}
				</section>

				<section id='projects' className='flex flex-col items-center'>
					<h2 className='text-4xl font-extrabold mb-5'>Projects</h2>
					<div className='w-[80%] max-w-[700px] flex flex-col gap-15'>
						<ProjectCard
							title='DevBoard — Developer Productivity Dashboard'
							description='DevBoard is a full-stack developer productivity dashboard that aggregates coding statistics from platforms like LeetCode, Codeforces, and GitHub while providing integrated task management, note-taking, and analytics. Built with React, Node.js, Express, and MongoDB, it helps developers track progress and stay organized through a clean, responsive interface.'
							imgSrc={devboard}
							// github='https://github.com/SherwinDistor/restaurant_review_platform'
							// demo='https://tabletalkreview.netlify.app/'
						/>

						{/* <ProjectCard
							title='Blog'
							description='A full stack blog application build with Java (Spring Boot Framework) for implementing the REST API and React to design and add functionality to the front end. The database is Postgresql and uses the Java Persistence API for data access. Spring Security is used for single user sign-in to create categories, tags and posts which can either be saved as a draft or published. React Router is used to create protected routes and the user interface is styled with Tailwind CSS.'
							imgSrc={blogScreenshot}
							github='https://github.com/SherwinDistor/java_blog'
							demo='https://sherwins-blog.netlify.app/'
						/> */}

						{/* <ProjectCard
							title='Resume Creator'
							description='The Resume Creator is a web application designed to help users generate
					professional resumes effortlessly. Built with React and styled using
					Tailwind CSS, this project provides an intuitive interface and
					seamless user experience. Vite is used as the build tool for quick
					development and optimized performance.'
							imgSrc={cvScreenshot}
							github='https://github.com/SherwinDistor/odin-cv-application'
							demo='https://odin-cv-application-sherwin.netlify.app/'
						/>

						<ProjectCard
							title='Memory Card Game'
							description='The Pokémon Card App is a dynamic React-based application that leverages the Pokémon API to provide users with an interactive card matching game. Built using React for the front-end, styled with Tailwind CSS, and deployed on Netlify.'
							imgSrc={memoryCardScreenshot}
							github='https://github.com/SherwinDistor/odin-memory-card'
							demo='https://odin-memory-card-pokemon-sherwin.netlify.app/'
						/> */}

					</div>
				</section>
				<section id='contact' className='mb-10 flex flex-col items-center'>
					<h2 className='text-4xl font-extrabold'>Contact</h2>
					<h3 className='text-xl mb-5'>Let's get in touch!</h3>
					<div>
						<a href='mailto:japman006@gmail.com'>japman006@gmail.com</a>
						<div className='flex justify-center gap-3 mt-3'>
							<a
								href='https://github.com/iJapmanSingh'
								target='_blank'
								alt='GitHub'
								className=''
							>
								<img
									src={githubLogo}
									alt='GitHub'
									className='w-10 border rounded-md border-black/7 bg-white/10 p-1 shadow-2xs backdrop-blur-md'
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/japman-singh11/'
								target='_blank'
								alt='LinkedIn'
							>
								<img
									src={linkedInLogo}
									alt='LinkedIn'
									className='w-10 border rounded-md border-black/7 bg-white/10 p-1 shadow-2xs backdrop-blur-md'
								/>
							</a>
						</div>
					</div>
				</section>
			</main>
			<footer className='text-center bg-white/10 py-2'>Made by Japman</footer>
			
		</>
		
	);
}

export default App;
