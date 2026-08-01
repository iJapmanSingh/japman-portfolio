import { useEffect, useRef, useState } from 'react';

const GRAVITY = 0.55;
const MOVE_SPEED = 3;
const JUMP_FORCE = -10.5;
const PLAYER_SIZE = 20;

// Positions are in percentages of the canvas width/height so the layout
// adapts to whatever container size you drop this into.
const PLATFORMS = [
	{ x: 0.04, y: 0.86, w: 0.14, h: 0.006 },
	{ x: 0.02, y: 0.62, w: 0.1, h: 0.006 },
	{ x: 0.06, y: 0.42, w: 0.09, h: 0.006 },
	{ x: 0.18, y: 0.74, w: 0.09, h: 0.006 },
	{ x: 0.24, y: 0.5, w: 0.08, h: 0.006 },
	{ x: 0.13, y: 0.9, w: 0.07, h: 0.006 },
	{ x: 0.02, y: 0.96, w: 0.16, h: 0.006 },
];

const COLLECTIBLES = [
	{ x: 0.11, y: 0.6 },
	{ x: 0.1, y: 0.4 },
	{ x: 0.22, y: 0.72 },
	{ x: 0.28, y: 0.48 },
	{ x: 0.17, y: 0.88 },
];

export default function PlatformerGame({ onScoreChange, onWin }) {
	const canvasRef = useRef(null);
	const containerRef = useRef(null);
	const stateRef = useRef({
		x: 0.05,
		y: 0.2,
		vx: 0,
		vy: 0,
		onGround: false,
		keys: {},
		collected: new Set(),
	});
	const [score, setScore] = useState(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		const ctx = canvas.getContext('2d');
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		let width = container.clientWidth;
		let height = container.clientHeight;

		function resize() {
			width = container.clientWidth;
			height = container.clientHeight;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
		resize();
		window.addEventListener('resize', resize);

		const handleKeyDown = (e) => {
			stateRef.current.keys[e.key.toLowerCase()] = true;
			if ([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
				e.preventDefault();
			}
		};
		const handleKeyUp = (e) => {
			stateRef.current.keys[e.key.toLowerCase()] = false;
		};
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		let raf;
		let bobTime = 0;

		function px(p) {
			return {
				x: p.x * width,
				y: p.y * height,
				w: (p.w ?? 0) * width,
				h: Math.max((p.h ?? 0) * height, 2),
			};
		}

		function loop() {
			const s = stateRef.current;
			bobTime += 0.08;

			const left = s.keys['arrowleft'] || s.keys['a'];
			const right = s.keys['arrowright'] || s.keys['d'];
			const jump = s.keys[' '] || s.keys['arrowup'] || s.keys['w'];

			if (left) s.vx = -MOVE_SPEED;
			else if (right) s.vx = MOVE_SPEED;
			else s.vx = 0;

			if (jump && s.onGround) {
				s.vy = JUMP_FORCE / height;
				s.onGround = false;
			}

			s.vy += GRAVITY / height;
			s.x += s.vx / width;
			s.y += s.vy;

			const sizeX = PLAYER_SIZE / width;
			const sizeY = PLAYER_SIZE / height;

			s.x = Math.max(0, Math.min(1 - sizeX, s.x));

			if (s.y > 1.1) {
				s.x = 0.05;
				s.y = 0.2;
				s.vy = 0;
			}

			s.onGround = false;
			for (const plat of PLATFORMS) {
				const p = px(plat);
				const px1 = s.x * width;
				const py1 = s.y * height;
				const feetNext = py1 + PLAYER_SIZE + s.vy * height;
				const withinX = px1 + PLAYER_SIZE > p.x && px1 < p.x + p.w;
				const landing =
					s.vy >= 0 &&
					feetNext >= p.y &&
					py1 + PLAYER_SIZE <= p.y + Math.max(p.h, 10) + 2;
				if (withinX && landing) {
					s.y = (p.y - PLAYER_SIZE) / height;
					s.vy = 0;
					s.onGround = true;
				}
			}

			COLLECTIBLES.forEach((c, i) => {
				if (s.collected.has(i)) return;
				const cx = c.x * width;
				const cy = c.y * height;
				const px1 = s.x * width + PLAYER_SIZE / 2;
				const py1 = s.y * height + PLAYER_SIZE / 2;
				const dist = Math.hypot(px1 - cx, py1 - cy);
				if (dist < 16) {
					s.collected.add(i);
					const next = s.collected.size;
					setScore(next);
					if (next === COLLECTIBLES.length) onWin?.();
				}
			});

			ctx.clearRect(0, 0, width, height);

			ctx.strokeStyle = 'rgba(94, 234, 212, 0.55)';
			ctx.lineWidth = 2;
			PLATFORMS.forEach((plat) => {
				const p = px(plat);
				ctx.beginPath();
				ctx.moveTo(p.x, p.y);
				ctx.lineTo(p.x + p.w, p.y);
				ctx.stroke();
			});

			COLLECTIBLES.forEach((c, i) => {
				if (stateRef.current.collected.has(i)) return;
				const cx = c.x * width;
				const cy = c.y * height + Math.sin(bobTime + i) * 3;
				ctx.save();
				ctx.translate(cx, cy);
				ctx.rotate(bobTime * 0.6 + i);
				ctx.fillStyle = '#5eead4';
				ctx.shadowColor = '#5eead4';
				ctx.shadowBlur = 8;
				drawStar(ctx, 5, 4);
				ctx.restore();
			});

			drawPlayer(ctx, s.x * width, s.y * height, s.vx);

			raf = requestAnimationFrame(loop);
		}
		raf = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
			window.removeEventListener('resize', resize);
		};
	}, [onWin]);

	useEffect(() => {
		onScoreChange?.(score);
	}, [score, onScoreChange]);

	return (
		<div ref={containerRef} className="w-full h-full">
			<canvas ref={canvasRef} className="block" />
		</div>
	);
}

function drawStar(ctx, outerR, innerR) {
	ctx.beginPath();
	for (let i = 0; i < 10; i++) {
		const r = i % 2 === 0 ? outerR : innerR;
		const angle = (Math.PI / 5) * i;
		const x = Math.cos(angle) * r;
		const y = Math.sin(angle) * r;
		i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
	}
	ctx.closePath();
	ctx.fill();
}

function drawPlayer(ctx, x, y, vx) {
	const s = PLAYER_SIZE;
	ctx.save();
	ctx.translate(x + s / 2, y + s / 2);
	if (vx < 0) ctx.scale(-1, 1);
	ctx.translate(-s / 2, -s / 2);

	// body
	ctx.fillStyle = '#f5f5f5';
	ctx.fillRect(2, 4, s - 4, s - 8);
	// head bump
	ctx.fillRect(4, 0, s - 8, 5);
	// eyes
	ctx.fillStyle = '#1a1a1a';
	ctx.fillRect(s - 9, 8, 3, 3);
	ctx.fillRect(s - 15, 8, 3, 3);
	// feet
	ctx.fillStyle = '#5eead4';
	ctx.fillRect(3, s - 5, 5, 4);
	ctx.fillRect(s - 8, s - 5, 5, 4);

	ctx.restore();
}
