export default function ProjectCard({
	title,
	description,
	imgSrc,
	github,
	demo,
}) {
	return (
		<div className='flex flex-col items-center gap-4'>
			<a href={demo} target='_blank'>
				<img
					className='h-48 rounded-lg hover:shadow-lg shadow-sky-100/20 transition delay-60 duration-300 ease-in-out'
					src={imgSrc}
					alt={title}
				/>
			</a>
			<div>
				<h3 className='text-2xl font-bold'>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='flex gap-4'>
				<a
					href={github}
					target='_blank'
					className='bg-white/10 rounded-full px-3 py-2 hover:shadow-lg shadow-sky-100/20 transition delay-60 duration-300 ease-in-out'
				>
					GitHub
				</a>
				<a
					href={demo}
					target='_blank'
					className='bg-white/10 rounded-full px-3 py-2 hover:shadow-lg shadow-sky-100/20 transition delay-60 duration-300 ease-in-out'
				>
					Live Demo
				</a>
			</div>
		</div>
	);
}
