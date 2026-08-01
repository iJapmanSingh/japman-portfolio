import PlatformerGame from "./components/PlatformerGame";
import ParticlePortrait from "./components/ParticlePortrait";
import profiler from "./assets/profile.png";
import headshot from "./assets/headshot.png";
import devboard from "./assets/devboard.png";
import prsnlportfolio from "./assets/prsnlportfolio.png";
import iitroparLogo from "./assets/iitropar-logo.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaEnvelope,
	FaFileAlt,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

import "./Experience.css";

// ==============================
// Experience Data
// ==============================

const experiences = [
	{
		logo: iitroparLogo,
		company: "iHub-AWaDH @ IIT Ropar",
		role: "AI/ML Intern",
		duration: "May 2026 - Jul 2026",

		points: [
			"Preprocessed a 19,000+ sample hyperspectral soil reflectance dataset (1,000 spectral bands, 400–940 nm) using Python, NumPy and Pandas by handling missing values, removing duplicates, treating outliers and scaling spectral features.",

			"Optimized spectral interpolation step sizes and preprocessing pipelines, achieving an R² score of 0.803 for Organic Carbon prediction and 0.690 for Nitrogen prediction.",

			"Evaluated multiple regression models to predict Organic Carbon, Nitrogen, Phosphorus and Potassium using RMSE and R² metrics.",

			"Collaborated with an AI/ML and Android team to develop an IoT-based precision agriculture system using BLE-enabled optical soil sensors.",
		],
	},
];

// ==============================
// Project Data
// ==============================

const projects = [
	{
		title: "DevBoard",
		subtitle: "Developer Productivity Dashboard",

		description:
			"A full-stack dashboard that aggregates LeetCode, Codeforces and GitHub statistics while providing task management, notes and analytics.",

		image: devboard,

		tech: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"Tailwind",
		],

		github: "https://github.com/iJapmanSingh/DevBoard",

		demo:
			"https://dev-board-847th1m2u-japman-singh-s-projects.vercel.app/",
	},

	{
		title: "Personal Portfolio",

		subtitle: "Interactive Developer Portfolio",

		description:
			"A modern portfolio featuring particle portraits, animations, interactive sections and responsive design.",

		image: prsnlportfolio,

		tech: [
			"React",
			"Tailwind CSS",
			"JavaScript",
		],

		github: "https://github.com/iJapmanSingh/japman-portfolio",

		demo: "https://japman-portfolio.vercel.app/",
	},
];

// ==============================
// Constants
// ==============================

const TOTAL_ORBS = 5;

function App() {
	const [gameMode, setGameMode] = useState(false);
	const [score, setScore] = useState(0);
	const [won, setWon] = useState(false);

	//for experience 
	const [selectedExperience, setSelectedExperience] = useState(0);

	const [currentProject, setCurrentProject] = useState(0);

	const project = projects[currentProject];

	function handleToggleGameMode() {
		setGameMode((g) => !g);
		setScore(0);
		setWon(false);
	}

	const currentExperience = experiences[selectedExperience];
	return (
		<>
			<header className='text-muted-foreground fixed top-5 right-[50%] translate-x-[50%] z-1000 flex justify-center rounded-4xl border border-black/7 bg-white/10 px-8 sm:px-[20%] py-5 shadow-2xs backdrop-blur-md'>
				<nav className='flex gap-5 justify-center'>
					<a href="#about">Home</a>
					<a href='#abouts'>About</a>
					{/* <a href='#skills'>Tech Stack</a> */}
					<a href="#experience">Experience</a>
					<a href='#projects'>Projects</a>
					{/* <a href='#contact'>Contact</a> */}
				</nav>
			</header>
			<main className='flex flex-col items-center gap-20 overflow-hidden'>
				<section id='about' className="pt-28 scroll-mt-28">
					<div className='w-[90%] max-w-[1100px] mx-auto flex justify-between items-center mb-3'>
						<button
							onClick={handleToggleGameMode}
							className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase transition duration-300 ${gameMode ? 'border-teal-300/60 text-teal-300 bg-teal-300/10' : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'}`}
						>
							<span className={`w-1.5 h-1.5 rounded-full ${gameMode ? 'bg-teal-300 animate-pulse' : 'bg-white/40'}`}></span>
							Game Mode
						</button>
						{gameMode && (
							<div className='rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md'>
								{won ? 'all orbs found ✦' : `${score} / ${TOTAL_ORBS}`}
							</div>
						)}
					</div>

					<div className='relative w-[90%] max-w-[1100px] mx-auto'>
						{gameMode ? (
							<div className='relative h-100 rounded-2xl border border-white/10 overflow-hidden'>
								<PlatformerGame onScoreChange={setScore} onWin={() => setWon(true)} />
								<p className='absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/40 tracking-wide'>
									arrow keys / wasd to move · space to jump
								</p>
							</div>
						) : (
							<>

								<div className='min-h-[60vh] flex gap-16 flex-wrap items-center justify-center'>
									<ParticlePortrait
										src={profiler}
										size={920}
										gap={5}
										focusY={1}
										className="shrink-0"
									/>


									<div className="max-w-xl" >
										<h1 className='font-display text-6xl sm:text-7xl font-bold leading-[1.05] text-left'>
											Hi, Japman<br />here.
										</h1>
										<p className="mt-5 text-lg sm:text-xl text-white/50 text-left leading-relaxed">
											Final year CS student who spends the day deep in Java and DSA, and the night shipping full-stack projects with the MERN stack. Always chasing the next thing worth building.
										</p>
									</div>
								</div>
							</>
						)}
					</div>
					<div className='w-screen text-center flex justify-center'>

					</div>

					<div className="flex justify-center gap-5 mt-0 flex-wrap">
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
				<section id="abouts" className="max-w-6xl mx-auto px-6 py-24">
					{/* Heading */}
					<h2 className="text-5xl font-bold mb-16">
						/ about me
					</h2>

					{/* Content */}
					<div className="grid lg:grid-cols-2 gap-20 items-center">

						{/* Left Side */}
						<div>
							<p className="text-gray-300 text-lg leading-8 mb-10">
								My primary focus is on Java, Data Structures & Algorithms, and the
								MERN stack. I'm currently looking for opportunities where I can learn,
								contribute, and grow as a software engineer.
							</p>
							{/* Tech Stack */}
							<div>
								<h3 className="text-xl text-gray-300 mb-5">
									Here are some technologies i have been working with
								</h3>
								<div className="grid grid-cols-2 gap-y-2 gap-x-5 text-gray-300">

									{[
										"Java",
										"JavaScript (ES6+)",
										"React.js",
										"Tailwind CSS",
										"Node.js",
										"Express.js",
										"MongoDB",
										"Git & GitHub",
									].map((tech) => (
										<div
											key={tech}
											className="flex items-center gap-2"
										>
											<span className="text-cyan-400 text-lg">▸</span>
											<span>{tech}</span>
										</div>
									))}

								</div>
							</div>

						</div>

						{/* Right Side */}
						<div className="flex justify-center lg:justify-end">
							<div className="relative group">
								<img
									src={headshot}
									alt="Japman Singh"
									className="w-80 lg:w-96 rounded-2xl object-cover transition duration-300 group-hover:scale-[1.02]"
								/>
							</div>
						</div>

					</div>
				</section>


				<section
					id="experience"
					className="max-w-6xl mx-auto px-6 py-24"
				>

					<h2 className="text-5xl font-bold mb-16">
						/ experience
					</h2>

					<div className="grid lg:grid-cols-[180px_1fr] gap-16">

						{/* LEFT */}

						<div className="border-l border-white/10">

							{experiences.map((exp, index) => (

								<button
									key={exp.company}
									onClick={() => setSelectedExperience(index)}
									className={`

									w-full
									text-left
									px-6
									py-4
									transition-all

									${selectedExperience === index
											? "border-l-2 border-cyan-400 text-cyan-400 bg-white/5"
											: "border-l-2 border-transparent text-white/60 hover:text-white"
										}

								`}
								>

									{exp.company}

								</button>

							))}

						</div>

						{/* RIGHT */}

						<div>

							<h3 className="text-4xl font-bold">

								{currentExperience.role}

								<span className="text-cyan-400">

									{" "} @ {currentExperience.company}

								</span>

							</h3>

							<p className="uppercase tracking-[3px] text-sm text-white/40 mt-3 mb-8">

								{currentExperience.duration}

							</p>

							<ul className="space-y-6">

								{currentExperience.points.map((point, i) => (

									<li
										key={i}
										className="flex gap-4"
									>

										<span className="text-cyan-400 mt-1">
											▸
										</span>

										<span className="text-white/60 leading-8">

											{point}

										</span>

									</li>

								))}

							</ul>

						</div>

					</div>

				</section>

				<section
					id="projects"
					className="max-w-6xl mx-auto px-6 py-24"
				>

					<h2 className="text-5xl font-bold mb-16 px-6">
						/ projects
					</h2>

					<div className="relative">

						{/* LEFT */}

						<button
							onClick={() =>
								setCurrentProject(
									(currentProject - 1 + projects.length) %
									projects.length
								)
							}
							className="
						absolute
						left-0
						top-1/2
						-translate-y-1/2
						
						text-white/40
						hover:text-cyan-400
						
						transition-all
						duration-300
						
						hover:-translate-x-1
						"
						>
							<FaChevronLeft size={20} />
						</button>

						{/* RIGHT */}

						<button
							onClick={() =>
								setCurrentProject(
									(currentProject + 1) %
									projects.length
								)
							}
							className="
						absolute
						right-0
						top-1/2
						-translate-y-1/2

						text-white/40
						hover:text-cyan-400

						transition-all
						duration-300

						hover:translate-x-1
						"
						>
							<FaChevronRight size={20} />
						</button>

						{/* CARD */}

						<div className="mx-20 min-h-[520px] flex items-center">

							<AnimatePresence mode="wait">

								<motion.div
									key={currentProject}
									className="w-full"
									initial={{
										opacity: 0,
										x: 120,
									}}
									animate={{
										opacity: 1,
										x: 0,
									}}
									exit={{
										opacity: 0,
										x: -120,
									}}
									transition={{
										duration: 0.45,
										ease: [0.22, 1, 0.36, 1],
									}}
								>

									<div className="grid lg:grid-cols-2 gap-20 items-center">

										{/* IMAGE */}

										<motion.img
											src={project.image}
											alt={project.title}
											className="rounded-2xl border border-white/10 shadow-2xl w-full"
											initial={{ scale: 0.95 }}
											animate={{ scale: 1 }}
											transition={{ duration: 0.4 }}
										/>

										{/* CONTENT */}

										<div>

											<p className="uppercase tracking-[4px] text-cyan-400 text-sm">
												{project.subtitle}
											</p>

											<h3 className="text-5xl font-bold mt-4">
												{project.title}
											</h3>

											<p className="mt-7 text-white/60 leading-8 text-lg">
												{project.description}
											</p>

											<div className="flex flex-wrap gap-3 mt-8">

												{project.tech.map((tech) => (

													<span
														key={tech}
														className="
											px-4
											py-2
											rounded-full
											border
											border-white/10
											text-sm
											hover:border-cyan-400
											transition
										"
													>
														{tech}
													</span>

												))}

											</div>

											<div className="flex gap-4 mt-10">

												<a
													href={project.github}
													className="
										px-6
										py-3
										rounded-xl
										border
										border-white/20
										hover:border-cyan-400
										hover:text-cyan-400
										transition
									"
												>
													GitHub
												</a>

												<a
													href={project.demo}
													className="
										px-6
										py-3
										rounded-xl
										bg-cyan-400
										text-black
										hover:scale-105
										transition
									"
												>
													Live Demo
												</a>

											</div>

										</div>

									</div>

								</motion.div>

							</AnimatePresence>

						</div>

					</div>

					{/* INDICATORS */}

					<div className="flex justify-center gap-3 mt-14">

						{projects.map((_, index) => (

							<button
								key={index}
								onClick={() => setCurrentProject(index)}
								className={`

								w-3
								h-3
								rounded-full
								transition-all

								${currentProject === index
										? "bg-cyan-400 scale-125"
										: "bg-white/20"
									}

							`}
							/>

						))}

					</div>

				</section>
				<section id='contact' className='mb-10 flex flex-col items-center'>

					<p className='text-gray-400'>
						Built and designed by Japman Singh
					</p>
				</section>
			</main>
		</>

	);
}

export default App;
