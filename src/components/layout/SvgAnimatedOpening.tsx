"use client";
import { useEffect, useState } from "react";

function SvgAnimatedOpening(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
	const [open, setOpen] = useState(true);

	useEffect(() => {
		const paths = document.querySelectorAll(".path");
		// biome-ignore lint/complexity/noForEach: <explanation>
		paths.forEach((path: any) => {
			const svgPath = path as SVGPathElement;
			const length = svgPath.getTotalLength();
			svgPath.style.strokeDasharray = `${length}`;
			svgPath.style.strokeDashoffset = `${length}`;
			svgPath.getBoundingClientRect(); // Force reflow to make the path invisible before the animation starts
			setTimeout(() => {
				svgPath.style.transition = "stroke-dashoffset 4s ease-in-out";
				svgPath.style.strokeDashoffset = "0";
				setTimeout(() => setOpen(false), 5000); // Fecha o componente após 5 segundos de animação
			}, 500); // Começa a animação após 0.5 segundos
		});
	}, []);

	if (!open) return null; // Se open for falso, não renderiza o componente

	return (
		<div className="absolute bg bg-slate-100 flex w-screen h-screen items-center justify-center z-50">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={384}
				height={421}
				{...props}
			>
				<title>The Barback</title>
				<path className="path" d="M0 0v421h384V0H0z" fill="#fff" />
				<path
					className="path"
					d="M186 41c5.959 2.5 14.564 1 21 1-5.959-2.5-14.564-1-21-1z"
					fill="#b4b3b1"
				/>
				<path
					className="path"
					d="M178 42c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#bcbab9"
				/>
				<path
					className="path"
					d="M181 42c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#a09e9d"
				/>
				<path
					className="path"
					d="M179 43c3.611 1.512 7.229.7 11 0-3.494-1.364-7.293-.16-11 0z"
					fill="#393836"
				/>
				<path
					className="path"
					d="M190 42c4.724 1.982 10.91 1 16 1-4.724-1.982-10.91-1-16-1z"
					fill="#262420"
				/>
				<path
					className="path"
					d="M206 42v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#4c4847"
				/>
				<path
					className="path"
					d="M208 42c2.052.874 3.747.953 6 1-2.052-.874-3.747-.953-6-1z"
					fill="#a3a3a1"
				/>
				<path
					className="path"
					d="M173.667 43.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#aaa8a6"
				/>
				<path
					className="path"
					d="M175 43c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#8d8b89"
				/>
				<path
					className="path"
					d="M177 45h3l-1-2c-1.635.545-1.455.365-2 2z"
					fill="#484441"
				/>
				<path
					className="path"
					d="M187 43c5.469 2.295 13.099 1 19 1-5.469-2.295-13.099-1-19-1z"
					fill="#91908e"
				/>
				<path
					className="path"
					d="M207 43c2.613 1.098 5.165.993 8 1-2.613-1.098-5.165-.993-8-1z"
					fill="#2b2b27"
				/>
				<path
					className="path"
					d="M215 43c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#848381"
				/>
				<path
					className="path"
					d="M218.667 43.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#b0afac"
				/>
				<path
					className="path"
					d="M169.667 44.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#989694"
				/>
				<path
					className="path"
					d="M171.667 44.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#6d6b69"
				/>
				<path
					className="path"
					d="M163 47c4.371 1.327 9.592-1.09 14-2-4.376-1.566-9.65.775-14 2z"
					fill="#272320"
				/>
				<path
					className="path"
					d="M180 44c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#a4a2a2"
				/>
				<path
					className="path"
					d="M183 44c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#bbbbba"
				/>
				<path
					className="path"
					d="M206 44c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#c6c4c4"
				/>
				<path
					className="path"
					d="M209 44c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#aeadac"
				/>
				<path
					className="path"
					d="M213.667 44.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#5c5c58"
				/>
				<path
					className="path"
					d="M215 44c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#2a2823"
				/>
				<path
					className="path"
					d="M220.333 44.667c-.055.055-.111 1.11.334.666.055-.055.111-1.11-.334-.666z"
					fill="#4e4d4b"
				/>
				<path
					className="path"
					d="M221 44c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#868685"
				/>
				<path
					className="path"
					d="M166 45c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#7d7978"
				/>
				<path className="path" d="M174 45l1 1-1-1z" fill="#827e7e" />
				<path
					className="path"
					d="M175 45c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#bdbcbb"
				/>
				<path
					className="path"
					d="M214 45c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#cacac8"
				/>
				<path
					className="path"
					d="M217.667 45.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#b2b1b0"
				/>
				<path className="path" d="M219 45l1 1-1-1z" fill="#878785" />
				<path
					className="path"
					d="M221 45c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#2a2927"
				/>
				<path
					className="path"
					d="M225 45c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#7c7a78"
				/>
				<path
					className="path"
					d="M163.667 46.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#6a6865"
				/>
				<path
					className="path"
					d="M170 46c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#c2c2c1"
				/>
				<path
					className="path"
					d="M220 46c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#d1d0d0"
				/>
				<path
					className="path"
					d="M224.667 46.333c-.445.445.611.389.666.334.445-.445-.611-.39-.666-.334z"
					fill="#44423e"
				/>
				<path
					className="path"
					d="M226.667 46.333c-.445.445.611.389.666.334.445-.445-.611-.39-.666-.334z"
					fill="#2a2924"
				/>
				<path
					className="path"
					d="M228 46v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#504f4b"
				/>
				<path className="path" d="M230 46l1 1-1-1z" fill="#7e7c79" />
				<path className="path" d="M231 46l1 1-1-1z" fill="#c0bdbc" />
				<path className="path" d="M160 47l1 1-1-1z" fill="#918e8b" />
				<path
					className="path"
					d="M161 47c.545 1.635.365 1.455 2 2v-2h-2z"
					fill="#43403c"
				/>
				<path className="path" d="M166 47l1 1-1-1z" fill="#676261" />
				<path
					className="path"
					d="M167 47c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#dadad9"
				/>
				<path
					className="path"
					d="M224 47c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#dededd"
				/>
				<path className="path" d="M227 47l1 1-1-1z" fill="#a5a5a3" />
				<path
					className="path"
					d="M229 47c7.184 4.542 17.827 8.646 26 11-5.975-6.038-17.604-10.262-26-11z"
					fill="#353231"
				/>
				<path className="path" d="M233 47l1 1-1-1z" fill="#7a7773" />
				<path className="path" d="M157 48l1 1-1-1z" fill="#c0bdbd" />
				<path className="path" d="M158 48l1 1-1-1z" fill="#756e6f" />
				<path
					className="path"
					d="M144 55c5.257.88 13.122-3.827 18-6-5.58-1.646-13.236 3.23-18 6z"
					fill="#2d2926"
				/>
				<path className="path" d="M163 48l1 1-1-1z" fill="#767471" />
				<path
					className="path"
					d="M164 48c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#e5e4e4"
				/>
				<path
					className="path"
					d="M228 48c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#e5e5e4"
				/>
				<path className="path" d="M231 48l1 1-1-1z" fill="#706f6c" />
				<path className="path" d="M236 48l1 1-1-1z" fill="#908d8c" />
				<path className="path" d="M155 49l1 1-1-1z" fill="#a7a5a6" />
				<path className="path" d="M233 49l1 1-1-1z" fill="#bfbdbc" />
				<path className="path" d="M234 49l1 1-1-1z" fill="#666261" />
				<path className="path" d="M238 49l1 1-1-1z" fill="#6b6a67" />
				<path className="path" d="M152 50l1 1-1-1z" fill="#d5d4d3" />
				<path className="path" d="M153 50l1 1-1-1z" fill="#85827f" />
				<path className="path" d="M158 50l1 1-1-1z" fill="#9d9a98" />
				<path className="path" d="M236 50l1 1-1-1z" fill="#aaaaa7" />
				<path className="path" d="M241 50l1 1-1-1z" fill="#8e8c8a" />
				<path className="path" d="M150 51l1 1-1-1z" fill="#bfbebd" />
				<path className="path" d="M155 51l1 1-1-1z" fill="#615e5d" />
				<path className="path" d="M156 51l1 1-1-1z" fill="#cac9c8" />
				<path className="path" d="M239 51l1 1-1-1z" fill="#6a6866" />
				<path className="path" d="M244 51l1 1-1-1z" fill="#b7b6b4" />
				<path
					className="path"
					d="M147.667 52.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#afadab"
				/>
				<path className="path" d="M153 52l1 1-1-1z" fill="#75716f" />
				<path className="path" d="M154 52l1 1-1-1z" fill="#c8c7c6" />
				<path className="path" d="M240 52l1 1-1-1z" fill="#d5d5d4" />
				<path className="path" d="M241 52l1 1-1-1z" fill="#817f7d" />
				<path className="path" d="M242 52l1 1-1-1z" fill="#565250" />
				<path
					className="path"
					d="M246.667 52.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#d7d7d6"
				/>
				<path className="path" d="M145 53l1 1-1-1z" fill="#d6d5d4" />
				<path className="path" d="M146 53l1 1-1-1z" fill="#989693" />
				<path className="path" d="M150 53l1 1-1-1z" fill="#676361" />
				<path className="path" d="M151 53l1 1-1-1z" fill="#918e8c" />
				<path className="path" d="M243 53l1 1-1-1z" fill="#afadac" />
				<path className="path" d="M244 53l1 1-1-1z" fill="#6d6a68" />
				<path
					className="path"
					d="M248.667 53.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#d2d1d1"
				/>
				<path className="path" d="M144 54l1 1-1-1z" fill="#a3a19f" />
				<path className="path" d="M148 54l1 1-1-1z" fill="#747270" />
				<path className="path" d="M149 54l1 1-1-1z" fill="#a5a4a1" />
				<path className="path" d="M245 54l1 1-1-1z" fill="#b8b7b6" />
				<path className="path" d="M246 54l1 1-1-1z" fill="#7f7e7c" />
				<path className="path" d="M250 54l1 1-1-1z" fill="#a9a7a6" />
				<path className="path" d="M251 54l1 1-1-1z" fill="#d6d5d4" />
				<path className="path" d="M142 55l1 1-1-1z" fill="#a6a6a4" />
				<path className="path" d="M143 55l1 1-1-1z" fill="#5a5653" />
				<path className="path" d="M146 55l1 1-1-1z" fill="#7c7977" />
				<path className="path" d="M147 55l1 1-1-1z" fill="#aaa8a6" />
				<path className="path" d="M247 55l1 1-1-1z" fill="#bbb9b9" />
				<path className="path" d="M248 55l1 1-1-1z" fill="#878584" />
				<path className="path" d="M252 55l1 1-1-1z" fill="#a5a3a0" />
				<path className="path" d="M140 56l1 1-1-1z" fill="#b0aeac" />
				<path className="path" d="M141 56l1 1-1-1z" fill="#656360" />
				<path
					className="path"
					d="M142.667 56.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#282522"
				/>
				<path className="path" d="M144 56l1 1-1-1z" fill="#777573" />
				<path className="path" d="M145 56l1 1-1-1z" fill="#b2afaf" />
				<path className="path" d="M249 56l1 1-1-1z" fill="#c5c3c2" />
				<path className="path" d="M250 56l1 1-1-1z" fill="#8c8987" />
				<path className="path" d="M254 56l1 1-1-1z" fill="#b6b5b3" />
				<path className="path" d="M139 57l1 1-1-1z" fill="#73716e" />
				<path
					className="path"
					d="M137 59c2.14.41 2.962-.032 5-1-2.14-.41-2.962.032-5 1z"
					fill="#2a2622"
				/>
				<path className="path" d="M142 57l1 1-1-1z" fill="#6d6c69" />
				<path className="path" d="M143 57l1 1-1-1z" fill="#bbbab9" />
				<path className="path" d="M251 57l1 1-1-1z" fill="#cac8c6" />
				<path className="path" d="M252 57l1 1-1-1z" fill="#888683" />
				<path className="path" d="M255 57l1 1-1-1z" fill="#6b6765" />
				<path className="path" d="M256 57l1 1-1-1z" fill="#cccbca" />
				<path className="path" d="M137 58l1 1-1-1z" fill="#94918f" />
				<path className="path" d="M141 58l1 1-1-1z" fill="#a8a5a4" />
				<path className="path" d="M253 58l1 1-1-1z" fill="#cfcecd" />
				<path className="path" d="M254 58l1 1-1-1z" fill="#7b7976" />
				<path
					className="path"
					d="M255 58c3.303 3.604 7.432 6.269 12 8-3.194-3.865-7.222-6.477-12-8z"
					fill="#3f3b38"
				/>
				<path className="path" d="M257 58l1 1-1-1z" fill="#7a7775" />
				<path className="path" d="M135 59l1 1-1-1z" fill="#b6b4b3" />
				<path className="path" d="M136 59l1 1-1-1z" fill="#615d5d" />
				<path className="path" d="M139 59l1 1-1-1z" fill="#73706e" />
				<path className="path" d="M255 59l1 1-1-1z" fill="#d0cfce" />
				<path className="path" d="M259 59l1 1-1-1z" fill="#b5b5b3" />
				<path className="path" d="M134 60l1 1-1-1z" fill="#797674" />
				<path
					className="path"
					d="M135 62l3-1c-1.778-.956-2.021-.766-3 1z"
					fill="#3a3635"
				/>
				<path className="path" d="M257 60l1 1-1-1z" fill="#93928f" />
				<path className="path" d="M260 60l1 1-1-1z" fill="#6f706c" />
				<path className="path" d="M132 61l1 1-1-1z" fill="#9e9c9a" />
				<path
					className="path"
					d="M119 73c5.819-2.463 11.98-7.132 16-12-6.167 2.338-12 6.774-16 12z"
					fill="#2d2829"
				/>
				<path className="path" d="M136 61l1 1-1-1z" fill="#8e8b8a" />
				<path className="path" d="M262 61l1 1-1-1z" fill="#aaa8a7" />
				<path className="path" d="M131 62l1 1-1-1z" fill="#878583" />
				<path className="path" d="M134 62l1 1-1-1z" fill="#5d5a58" />
				<path className="path" d="M260 62l1 1-1-1z" fill="#7c7976" />
				<path className="path" d="M263 62l1 1-1-1z" fill="#7b7875" />
				<path className="path" d="M129 63l1 1-1-1z" fill="#a5a3a2" />
				<path className="path" d="M133 63l1 1-1-1z" fill="#a9a7a5" />
				<path className="path" d="M265 63l1 1-1-1z" fill="#c1bfbd" />
				<path className="path" d="M128 64l1 1-1-1z" fill="#878585" />
				<path className="path" d="M131 64l1 1-1-1z" fill="#716d6d" />
				<path className="path" d="M263 64l1 1-1-1z" fill="#7f7a78" />
				<path className="path" d="M266 64l1 1-1-1z" fill="#959290" />
				<path className="path" d="M126 65l1 1-1-1z" fill="#b4b4b3" />
				<path className="path" d="M130 65l1 1-1-1z" fill="#bcbaba" />
				<path className="path" d="M264 65l1 1-1-1z" fill="#c7c6c5" />
				<path className="path" d="M267 65l1 1-1-1z" fill="#827f7d" />
				<path className="path" d="M125 66l1 1-1-1z" fill="#a7a6a6" />
				<path className="path" d="M128 66l1 1-1-1z" fill="#5e5b5a" />
				<path className="path" d="M129 66l1 1-1-1z" fill="#c8c7c7" />
				<path className="path" d="M265 66l1 1-1-1z" fill="#d5d4d3" />
				<path className="path" d="M266 66l1 1-1-1z" fill="#6f6b67" />
				<path
					className="path"
					d="M267 66c2.089 2.651 3.801 3.914 7 5-2.122-2.37-4.072-3.758-7-5z"
					fill="#575350"
				/>
				<path className="path" d="M269 66l1 1-1-1z" fill="#b3b1b0" />
				<path className="path" d="M124 67l1 1-1-1z" fill="#918f8e" />
				<path className="path" d="M127 67l1 1-1-1z" fill="#959393" />
				<path className="path" d="M128 67l1 1-1-1z" fill="#d3d2d2" />
				<path className="path" d="M267 67l1 1-1-1z" fill="#a9a7a5" />
				<path className="path" d="M270 67l1 1-1-1z" fill="#9b9897" />
				<path className="path" d="M122 68l1 1-1-1z" fill="#c2c0c0" />
				<path className="path" d="M123 68l1 1-1-1z" fill="#6a6868" />
				<path className="path" d="M126 68l1 1-1-1z" fill="#b6b5b5" />
				<path className="path" d="M268 68l1 1-1-1z" fill="#c8c7c5" />
				<path className="path" d="M271 68l1 1-1-1z" fill="#8d8a89" />
				<path className="path" d="M121 69l1 1-1-1z" fill="#b1b0af" />
				<path className="path" d="M125 69l1 1-1-1z" fill="#c2c0c1" />
				<path className="path" d="M269 69l1 1-1-1z" fill="#d4d3d1" />
				<path className="path" d="M120 70l1 1-1-1z" fill="#acaaa9" />
				<path className="path" d="M123 70l1 1-1-1z" fill="#7c7779" />
				<path className="path" d="M124 70l1 1-1-1z" fill="#d0cece" />
				<path className="path" d="M271 70l1 1-1-1z" fill="#aaa7a5" />
				<path className="path" d="M274 70l1 1-1-1z" fill="#c5c3c3" />
				<path className="path" d="M119 71l1 1-1-1z" fill="#9b9898" />
				<path className="path" d="M122 71l1 1-1-1z" fill="#b4b2b3" />
				<path className="path" d="M272 71l1 1-1-1z" fill="#c5c2c2" />
				<path
					className="path"
					d="M273 71c1.836 2.447 3.237 3.7 6 5-1.836-2.447-3.237-3.7-6-5z"
					fill="#494543"
				/>
				<path className="path" d="M275 71l1 1-1-1z" fill="#b2afaf" />
				<path className="path" d="M118 72l1 1-1-1z" fill="#807c7c" />
				<path className="path" d="M121 72l1 1-1-1z" fill="#bab8b9" />
				<path
					className="path"
					d="M186.667 72.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#b3b3b0"
				/>
				<path
					className="path"
					d="M188 72c3.432 1.44 7.3 1 11 1-3.432-1.44-7.3-1-11-1z"
					fill="#888784"
				/>
				<path
					className="path"
					d="M199.667 72.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#c5c5c2"
				/>
				<path className="path" d="M273 72l1 1-1-1z" fill="#cccaca" />
				<path className="path" d="M276 72l1 1-1-1z" fill="#a9a6a6" />
				<path className="path" d="M116 73l1 1-1-1z" fill="#c8c6c5" />
				<path
					className="path"
					d="M117 73l1 2c1.635-.545 1.455-.365 2-2h-3z"
					fill="#433d3d"
				/>
				<path className="path" d="M120 73l1 1-1-1z" fill="#c2c0c0" />
				<path className="path" d="M179 73l1 1-1-1z" fill="#a8a6a3" />
				<path
					className="path"
					d="M180.667 73.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#5b5553"
				/>
				<path
					className="path"
					d="M182 73c2.613 1.098 5.164.993 8 1-8.16 2.649-18.226 6.367-24 13 4.176-.542 7.998-1.74 12-3l-4 3c2.274.409 3.781-.212 6-1-.545 1.635-.365 1.455-2 2 3.7 1.03 8.361-.84 12-2-1.248-.685-1.548-.749-3-1 3.282-1.453 6.447-2.476 10-3l-4 3c2.221.39 3.754.335 6 0l-4 2c5.396 1.867 11.628-3.117 16-6-2.797-.64-5.237.228-8 1l4-3c-2.164-.676-3.732-.387-6 0l6-3c-4.767-1.709-10.912.895-16 1 3.009-1.364 5.711-2.58 9-3-5.222-2.191-12.368-1-18-1z"
					fill="#1e1c1c"
				/>
				<path
					className="path"
					d="M200 73c2.332.984 4.457.981 7 1-2.332-.984-4.457-.981-7-1z"
					fill="#383531"
				/>
				<path
					className="path"
					d="M207 73c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#6c6967"
				/>
				<path className="path" d="M233 73l1 1-1-1z" fill="#b4b3b1" />
				<path
					className="path"
					d="M234 73c3.959 1.661 8.737 1 13 1-3.959-1.661-8.737-1-13-1z"
					fill="#595953"
				/>
				<path className="path" d="M247 73l1 1-1-1z" fill="#9b9b96" />
				<path className="path" d="M274 73l1 1-1-1z" fill="#d2cfcf" />
				<path className="path" d="M277 73l1 1-1-1z" fill="#a8a5a5" />
				<path className="path" d="M115 74l1 1-1-1z" fill="#c5c4c3" />
				<path
					className="path"
					d="M104 88c5.339-3.761 10.239-8.66 14-14-5.802 2.706-11.294 8.198-14 14z"
					fill="#2f2929"
				/>
				<path className="path" d="M119 74l1 1-1-1z" fill="#c5c4c3" />
				<path
					className="path"
					d="M175.667 74.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#4b4646"
				/>
				<path
					className="path"
					d="M120 132c4.027-6.706 1.391-17.06 11-20 1.103-1.457 1.543-1.897 3-3-3.92 5.156-6.299 10.768-8 17 6.775-4.968 5.696-16.263 15-19-2.542 3.201-4.827 6.417-8 9 .21 4.703-.8 8.499-2 13l-2-1c-.842 2.994-1.584 5.917-2 9 5.997-2.633 5.83-9.205 11-13-.559 5.58-3.441 10.42-4 16 3.709-2.591 4.844-7.351 7.49-11 3.361-4.634 7.174-8.698 11.51-12.421 3.6-3.09 7.778-5.59 8-10.579 1.92-1.297 2.316-1.791 3-4-4.429-.523-7.727-.343-12 1 11.835-10.339 30.851.398 44 1-3.192-3.366-7.652-4.531-12-6v-2l5-1c-3.805-1.617-6.628-1.133-9-5-5.364-.076-10.734-2.112-16-1 5.293-6.384 17.651-13.464 26-14-11.779-4.943-26.944 3.42-34.695 11.914-2.617 2.868-3.684 7.75-6.622 10-3.036 2.326-7.376 2.742-10.683 4.698-11.469 6.783-20.04 16.086-18 30.388z"
					fill="#151412"
				/>
				<path
					className="path"
					d="M191 76c4.993 2.076 10.827-.332 16-1l-6 3c3.555 1.09 7.386-.3 11-1l1 5c4.034-1.05 7.227-3.353 11-5-1.627 1.767-2.331 2.728-3 5 7.168-2.672 15.155-6.475 23-4.21 4.792 1.383 10.849 9.747 15 8.21 1.984 8.678 1.918 12.943-2 21 .113-5.268 1.259-9.71 0-15-2.566 6.114-.55 10.877-6 16v-4c-1.783 2.68-2.834 5.595-5 8 2.449-6.73 1.574-9.816-6-10 .501 3.785 1.887 7.12 2 11 5.937 2.265 13.51 7.648 20 6.221 19.516-4.291 13.423-29.115 1.91-38.692-12.805-10.65-29.17-4.85-43.91-4.868-10.427-.013-18.582-1.983-29 .339z"
					fill="#151411"
				/>
				<path
					className="path"
					d="M211 74c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#32312e"
				/>
				<path className="path" d="M214 74l1 1-1-1z" fill="#696967" />
				<path className="path" d="M215 74l1 1-1-1z" fill="#abaaa9" />
				<path
					className="path"
					d="M223 74c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#ececec"
				/>
				<path className="path" d="M227 74l1 1-1-1z" fill="#888784" />
				<path
					className="path"
					d="M228.667 74.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#484743"
				/>
				<path
					className="path"
					d="M248 74c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#302f2a"
				/>
				<path className="path" d="M252 74l1 1-1-1z" fill="#9e9e9b" />
				<path className="path" d="M275 74l1 1-1-1z" fill="#d5d4d3" />
				<path className="path" d="M278 74l1 1-1-1z" fill="#a3a0a0" />
				<path className="path" d="M114 75l1 1-1-1z" fill="#c3c2c1" />
				<path className="path" d="M117 75l1 1-1-1z" fill="#767270" />
				<path className="path" d="M171 75l1 1-1-1z" fill="#b9b7b6" />
				<path className="path" d="M172 75l1 1-1-1z" fill="#605c5a" />
				<path
					className="path"
					d="M217 75c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#434241"
				/>
				<path
					className="path"
					d="M220.667 75.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#b4b3b1"
				/>
				<path className="path" d="M222 75l1 1-1-1z" fill="#888683" />
				<path className="path" d="M255 75l1 1-1-1z" fill="#797573" />
				<path
					className="path"
					d="M256.667 75.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#e7e7e6"
				/>
				<path className="path" d="M279 75l1 1-1-1z" fill="#a3a09f" />
				<path className="path" d="M113 76l1 1-1-1z" fill="#bebdbd" />
				<path className="path" d="M116 76l1 1-1-1z" fill="#928f8d" />
				<path className="path" d="M169 76l1 1-1-1z" fill="#7e7a78" />
				<path className="path" d="M257 76l1 1-1-1z" fill="#443f3c" />
				<path
					className="path"
					d="M258.667 76.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#e2e1e0"
				/>
				<path className="path" d="M278 76l1 1-1-1z" fill="#888481" />
				<path className="path" d="M279 76l1 1-1-1z" fill="#373330" />
				<path className="path" d="M280 76l1 1-1-1z" fill="#a09e9d" />
				<path className="path" d="M112 77l1 1-1-1z" fill="#bab8b8" />
				<path className="path" d="M115 77l1 1-1-1z" fill="#9f9c9c" />
				<path className="path" d="M166 77l1 1-1-1z" fill="#cfcecd" />
				<path className="path" d="M167 77l1 1-1-1z" fill="#7f7d7b" />
				<path
					className="path"
					d="M203 82l8-2c-4.822 3.677-9.965 6.924-16 8l4-2c-6.639-2.446-14.495 1.278-21 3 1.036-1.186 1.339-1.604 2-3l-6 2 4-3c-3.745-.923-11.753.814-14 4 5.438-.498 10.547 1.743 16 1 1.722 4.284 4.774 3.985 9 4l-5 2v2c3.858 1.797 9.559 2.646 11 7l7-1c-1.248-.685-1.548-.749-3-1 9.387-4.182 15.599-8.752 23-15.985 2.976-2.91 6.113-5.288 8-9.015-3.491.806-6.429 2.888-10 2-5.758 7.052-13.658 12.986-23 14 5.971-3.183 11.511-5.947 17-10l-2-7c-3.904.707-6.41 1.988-9 5z"
					fill="#161513"
				/>
				<path
					className="path"
					d="M197 93c9.914 3.822 20.352-9.828 27-15-4.258-.875-8.183 3.181-11.285 5.84-4.861 4.164-9.654 7.096-15.715 9.16z"
					fill="#242321"
				/>
				<path
					className="path"
					d="M228 82c4.05-1.358 7.766-3.269 12-4-4.708-1.916-8.88.373-12 4z"
					fill="#514d4e"
				/>
				<path
					className="path"
					d="M240 77c2.701 2.224 6.086 2.877 8.985 4.854 6.467 4.411 8.856 11.659 9.015 19.146 5.031-11.995-6.858-23.021-18-24z"
					fill="#373634"
				/>
				<path className="path" d="M259 77l1 1-1-1z" fill="#4b4844" />
				<path className="path" d="M260 77l1 1-1-1z" fill="#bfbfbd" />
				<path className="path" d="M279 77l1 1-1-1z" fill="#8c8a87" />
				<path className="path" d="M280 77l1 1-1-1z" fill="#423e3b" />
				<path className="path" d="M281 77l1 1-1-1z" fill="#a2a09f" />
				<path className="path" d="M111 78l1 1-1-1z" fill="#b7b5b5" />
				<path className="path" d="M114 78l1 1-1-1z" fill="#a09e9e" />
				<path className="path" d="M164 78l1 1-1-1z" fill="#c9c7c6" />
				<path className="path" d="M165 78l1 1-1-1z" fill="#8a8786" />
				<path
					className="path"
					d="M235 79c9.854 4.862 17.74 9.836 18 22h-2c-.022-7.542-1.696-13.563-9-17 2.562 3.685 5.538 6.698 7 11-5.73-9.014-11.509-11.993-22-12 3.012 5.311 9.248 7.115 12 13-3.691-4.436-7.192-7.876-13-9 0 1.797.014 1.521 1 3l-4-1c2.351 3.38 5.099 6.331 7 10l-2-1c1.666 4.803-.089 7.527-2 12 5.528.016 10.549 1.721 16 2-.106-3.586-1.232-6.553-2-10 7.376.405 7.671 3.605 6 10 2.754-2.027 3.426-4.687 4-8l1 4c4.303-2.871 4.813-6.013 5.032-11 .509-11.632-8.733-21.38-21.032-18z"
					fill="#151412"
				/>
				<path className="path" d="M261 78l1 1-1-1z" fill="#8e8f8b" />
				<path className="path" d="M262 78l1 1-1-1z" fill="#d0d0cf" />
				<path className="path" d="M280 78l1 1-1-1z" fill="#93908e" />
				<path className="path" d="M281 78l1 1-1-1z" fill="#3f3b39" />
				<path className="path" d="M282 78l1 1-1-1z" fill="#a2a1a0" />
				<path className="path" d="M110 79l1 1-1-1z" fill="#b0aeae" />
				<path className="path" d="M113 79l1 1-1-1z" fill="#a3a1a2" />
				<path className="path" d="M163 79l1 1-1-1z" fill="#979391" />
				<path
					className="path"
					d="M180 84c4.345.9 9.196-1.974 13-4-4.284-1.175-9.225 1.987-13 4z"
					fill="#424242"
				/>
				<path
					className="path"
					d="M228 82c4.203 1.748 9.436.887 14 2-4.47-4.51-8.436-4.547-14-2z"
					fill="#232221"
				/>
				<path className="path" d="M262 79l1 1-1-1z" fill="#4d4c48" />
				<path className="path" d="M263 79l1 1-1-1z" fill="#c4c4c2" />
				<path className="path" d="M281 79l1 1-1-1z" fill="#959391" />
				<path className="path" d="M282 79l1 1-1-1z" fill="#45433f" />
				<path className="path" d="M283 79l1 1-1-1z" fill="#a3a19f" />
				<path className="path" d="M109 80l1 1-1-1z" fill="#aaa8a7" />
				<path className="path" d="M112 80l1 1-1-1z" fill="#aaa7a7" />
				<path className="path" d="M161 80l1 1-1-1z" fill="#b0adab" />
				<path className="path" d="M162 80l1 1-1-1z" fill="#6f6a67" />
				<path
					className="path"
					d="M237 80c4.047 3.532 8.588 6.929 13 10-2.584-5.525-7.003-8.914-13-10z"
					fill="#32302d"
				/>
				<path className="path" d="M264 80l1 1-1-1z" fill="#bdbcbb" />
				<path className="path" d="M282 80l1 1-1-1z" fill="#8e8c89" />
				<path className="path" d="M283 80l1 1-1-1z" fill="#43403d" />
				<path className="path" d="M284 80l1 1-1-1z" fill="#a4a2a2" />
				<path className="path" d="M108 81l1 1-1-1z" fill="#b0aeae" />
				<path className="path" d="M111 81l1 1-1-1z" fill="#afacac" />
				<path className="path" d="M160 81l1 1-1-1z" fill="#94908e" />
				<path className="path" d="M265 81l1 1-1-1z" fill="#bcbcb9" />
				<path className="path" d="M283 81l1 1-1-1z" fill="#8b8886" />
				<path className="path" d="M284 81l1 1-1-1z" fill="#484342" />
				<path className="path" d="M285 81l1 1-1-1z" fill="#a3a0a0" />
				<path className="path" d="M107 82l1 1-1-1z" fill="#b3b1af" />
				<path className="path" d="M110 82l1 1-1-1z" fill="#b0aeae" />
				<path className="path" d="M159 82l1 1-1-1z" fill="#85807f" />
				<path
					className="path"
					d="M187 84c3.532 1.437 6.528.265 10-1-3.371-1.196-6.587.22-10 1z"
					fill="#333"
				/>
				<path
					className="path"
					d="M219 90c3.946-1.84 6.497-4.458 9-8-3.946 1.84-6.497 4.458-9 8z"
					fill="#535351"
				/>
				<path
					className="path"
					d="M235 82c4.788 4.385 9.858 6.944 13 13 1.789-6.84-7.322-11.972-13-13z"
					fill="#2c2d28"
				/>
				<path className="path" d="M266 82l1 1-1-1z" fill="#bebebc" />
				<path className="path" d="M284 82l1 1-1-1z" fill="#7b7876" />
				<path className="path" d="M285 82l1 1-1-1z" fill="#454141" />
				<path className="path" d="M286 82l1 1-1-1z" fill="#a8a6a5" />
				<path className="path" d="M106 83l1 1-1-1z" fill="#b6b4b3" />
				<path className="path" d="M109 83l1 1-1-1z" fill="#b1aeae" />
				<path className="path" d="M158 83l1 1-1-1z" fill="#76716f" />
				<path className="path" d="M267 83l1 1-1-1z" fill="#c5c5c3" />
				<path className="path" d="M285 83l1 1-1-1z" fill="#7a7675" />
				<path
					className="path"
					d="M286 83c1.104 2.357 1.956 3.376 4 5-1.104-2.357-1.956-3.376-4-5z"
					fill="#53524e"
				/>
				<path className="path" d="M287 83l1 1-1-1z" fill="#a8a6a4" />
				<path className="path" d="M105 84l1 1-1-1z" fill="#bcbab9" />
				<path className="path" d="M108 84l1 1-1-1z" fill="#b1adad" />
				<path className="path" d="M157 84l1 1-1-1z" fill="#787372" />
				<path
					className="path"
					d="M226 84c-6.001 6.57-2.142 10.105 4 15-1.415-4.164-3.952-6.877-7-10l4 1-1-3c5.211 1.664 8.672 4.725 12 9 1.228-6.12-7.506-9.632-12-12z"
					fill="#1f1d1e"
				/>
				<path className="path" d="M267 84l1 1-1-1z" fill="#474843" />
				<path className="path" d="M268 84l1 1-1-1z" fill="#d0d0cf" />
				<path className="path" d="M288 84l1 1-1-1z" fill="#bcbbba" />
				<path className="path" d="M104 85l1 1-1-1z" fill="#c3c0c0" />
				<path className="path" d="M107 85l1 1-1-1z" fill="#ada9aa" />
				<path className="path" d="M156 85l1 1-1-1z" fill="#868180" />
				<path className="path" d="M268 85l1 1-1-1z" fill="#686864" />
				<path className="path" d="M286 85l1 1-1-1z" fill="#d4d3d2" />
				<path className="path" d="M103 86l1 1-1-1z" fill="#cac8c8" />
				<path className="path" d="M106 86l1 1-1-1z" fill="#a6a2a3" />
				<path className="path" d="M155 86l1 1-1-1z" fill="#918c8c" />
				<path
					className="path"
					d="M258 86c-.344 3.775 1.088 7.261.83 11-.236 3.427-2.004 6.684-2.83 10 5.924-5.337 6.83-14.51 2-21z"
					fill="#1f1e1c"
				/>
				<path className="path" d="M269 86l1 1-1-1z" fill="#babab9" />
				<path className="path" d="M287 86l1 1-1-1z" fill="#cfcecd" />
				<path className="path" d="M103 87l1 1-1-1z" fill="#605b5b" />
				<path className="path" d="M105 87l1 1-1-1z" fill="#9d999b" />
				<path className="path" d="M154 87l1 1-1-1z" fill="#a09c9c" />
				<path className="path" d="M270 87l1 1-1-1z" fill="#cdcdcc" />
				<path className="path" d="M288 87l1 1-1-1z" fill="#c7c6c5" />
				<path className="path" d="M290 87l1 1-1-1z" fill="#929290" />
				<path className="path" d="M102 88l1 1-1-1z" fill="#878383" />
				<path className="path" d="M103 88l1 1-1-1z" fill="#2d2727" />
				<path className="path" d="M104 88l1 1-1-1z" fill="#7f7c7c" />
				<path className="path" d="M153 88l1 1-1-1z" fill="#b9b6b4" />
				<path className="path" d="M270 88l1 1-1-1z" fill="#5d5c59" />
				<path className="path" d="M289 88l1 1-1-1z" fill="#b7b6b5" />
				<path className="path" d="M290 88l1 1-1-1z" fill="#494844" />
				<path className="path" d="M291 88l1 1-1-1z" fill="#aeaeac" />
				<path className="path" d="M101 89l1 1-1-1z" fill="#b1afaf" />
				<path
					className="path"
					d="M95 100c3.672-3.033 6.383-7.028 9-11-4.642 2.269-7.194 6.237-9 11z"
					fill="#3a3436"
				/>
				<path className="path" d="M104 89l1 1-1-1z" fill="#d0cfcf" />
				<path className="path" d="M152 89l1 1-1-1z" fill="#c4c2c0" />
				<path className="path" d="M153 89l1 1-1-1z" fill="#5b5752" />
				<path className="path" d="M271 89l1 1-1-1z" fill="#c0c0bf" />
				<path
					className="path"
					d="M290 89c1.455 2.486 2.782 4.173 5 6-1.174-2.966-2.204-4.465-5-6z"
					fill="#71706d"
				/>
				<path className="path" d="M100 90l1 1-1-1z" fill="#b8b5b4" />
				<path className="path" d="M103 90l1 1-1-1z" fill="#bebdbd" />
				<path className="path" d="M151 90l1 1-1-1z" fill="#b3b0ae" />
				<path
					className="path"
					d="M209 98c4.829.643 8.453-4.394 11-8-4.171 1.942-7.347 5.22-11 8z"
					fill="#41403f"
				/>
				<path
					className="path"
					d="M220 90c-6.471 6.454-13.509 13.028-23 14 4.214 3.002 9.949 3.358 15 4-8.27 2.376-17.084-1.85-25-4.091-9.064-2.566-17.654-2.909-27-2.909 1.506.683 2.315.826 4 1l-3 6c3.238-1.041 5.944-3.697 9.17-4.463 6.445-1.529 15.38 1.12 20.83 4.463-1.296 1.594-1.535 2.018-2 4 4.862-1.709 7.324-2.729 12 0-2.217 1.163-3.394 2.086-5 4 2.172-.464 3.958-1.105 6-2-7.967 8.969-22.117 13.469-33 18 2.349-1.919 4.478-3.396 6-6-11.459 4.337-27.852 13.555-28 27 3.897.208 4.109 3.548 7 4-.231 2.126-.246 3.879 0 6-2.681-1.378-4.069-1.713-7-1 1.377.911 2.44 1.404 4 2-.957 1.517-1.387 2.339-2 4l4 1c5.542-10.677 11.907-8.028 22-8l-1-3h8c1.431-3.999 2.461-7.768 3-12 1.635.545 1.455.365 2 2 2.262.219 2.026.004 3 2l4-6-1 6c1.773-2.486 2.374-5.013 3-8 1.023 1.534.805 1.402 2 2 1.385-2.976 2.443-5.764 3-9l4 2 1-3c.913 1.846 1.401 2.795 3 4-.877 3.027-.877 4.973 0 8h2c5.378-9.602-2.314-17.889.318-27.981 2.228-8.546 23.236-6.541 17.159-19.3-.755-1.585-1.713-3.112-2.887-4.419-1.618-1.799-3.57-3.025-5.59-4.3z"
					fill="#131210"
				/>
				<path
					className="path"
					d="M249 90c1.365 3.745 1.964 7.016 2 11h2c-.037-4.455.079-8.504-4-11z"
					fill="#242321"
				/>
				<path className="path" d="M271 90l1 1-1-1z" fill="#494a45" />
				<path className="path" d="M290 90l1 1-1-1z" fill="#d2d2d1" />
				<path className="path" d="M99 91l1 1-1-1z" fill="#bfbcbb" />
				<path className="path" d="M102 91l1 1-1-1z" fill="#b4b1b1" />
				<path className="path" d="M150 91l1 1-1-1z" fill="#cfcdcb" />
				<path className="path" d="M272 91l1 1-1-1z" fill="#b4b3b2" />
				<path className="path" d="M291 91l1 1-1-1z" fill="#c3c2c1" />
				<path className="path" d="M293 91l1 1-1-1z" fill="#b9b7b7" />
				<path className="path" d="M101 92l1 1-1-1z" fill="#aeabab" />
				<path
					className="path"
					d="M149.333 92.667c-.055.055-.111 1.11.334.666.055-.055.111-1.11-.334-.666z"
					fill="#e3e3e3"
				/>
				<path className="path" d="M150 92l1 1-1-1z" fill="#787672" />
				<path className="path" d="M98 93l1 1-1-1z" fill="#827e7e" />
				<path className="path" d="M100 93l1 1-1-1z" fill="#7e7778" />
				<path
					className="path"
					d="M150 93v4c.71-1.76.71-2.24 0-4z"
					fill="#2b2925"
				/>
				<path
					className="path"
					d="M268 93c0 6.57 1.67 12.552 2 19 3.064-6.826.996-12.627-2-19z"
					fill="#252422"
				/>
				<path className="path" d="M273 93l1 1-1-1z" fill="#b2b1af" />
				<path className="path" d="M97 94l1 1-1-1z" fill="#a7a4a5" />
				<path className="path" d="M149 94l1 1-1-1z" fill="#b2b1af" />
				<path
					className="path"
					d="M265 94v14c2.819-4.127 2.538-9.763 0-14z"
					fill="#252522"
				/>
				<path
					className="path"
					d="M273.333 94.667c-.055.055-.111 1.11.334.666.055-.055.111-1.11-.334-.666z"
					fill="#383733"
				/>
				<path className="path" d="M293 94l1 1-1-1z" fill="#c4c3c2" />
				<path className="path" d="M96 95l1 1-1-1z" fill="#b4b1b1" />
				<path className="path" d="M99 95l1 1-1-1z" fill="#cac8c9" />
				<path
					className="path"
					d="M147.667 95.333c-.445.445.611.39.666.334.445-.445-.611-.39-.666-.334z"
					fill="#7b7976"
				/>
				<path
					className="path"
					d="M149.333 95.667c-.055.055-.111 1.11.334.666.055-.055.111-1.11-.334-.666z"
					fill="#625e5a"
				/>
				<path className="path" d="M96 96l1 1-1-1z" fill="#6c6665" />
				<path className="path" d="M98 96l1 1-1-1z" fill="#c1c0c0" />
				<path
					className="path"
					d="M143 96c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#74706e"
				/>
				<path
					className="path"
					d="M140 97c2.553 3.363 6.671 2.097 9-1l-9 1z"
					fill="#494542"
				/>
				<path className="path" d="M274 96l1 1-1-1z" fill="#908e8c" />
				<path className="path" d="M95 97l1 1-1-1z" fill="#96918f" />
				<path className="path" d="M139 97l1 1-1-1z" fill="#c8c7c6" />
				<path
					className="path"
					d="M274.333 97.667c-.055.055-.111 1.11.334.666.055-.055.111-1.11-.334-.666z"
					fill="#494845"
				/>
				<path className="path" d="M94 98l1 1-1-1z" fill="#a9a4a5" />
				<path className="path" d="M137 98l1 1-1-1z" fill="#cac9c8" />
				<path
					className="path"
					d="M137 100c1.58-.684 1.777-.805 3-2-1.58.684-1.777.805-3 2z"
					fill="#322e2d"
				/>
				<path
					className="path"
					d="M94 99v3c.696-1.554.696-1.446 0-3z"
					fill="#574f4f"
				/>
				<path className="path" d="M136 99l1 1-1-1z" fill="#666562" />
				<path
					className="path"
					d="M136 101c2.274.409 3.781-.212 6-1-2.462-.697-3.665-.11-6 1z"
					fill="#5c5a59"
				/>
				<path
					className="path"
					d="M154 101c4.787 1.472 13.179.425 18-1-5.434-2.28-12.63-1.011-18 1z"
					fill="#3f3e3c"
				/>
				<path
					className="path"
					d="M199 102c3.91 1.51 7.309-.496 11-2-3.644-1.01-7.372 1.141-11 2z"
					fill="#343334"
				/>
				<path className="path" d="M275 99l1 1-1-1z" fill="#c7c6c3" />
				<path className="path" d="M93 100l1 1-1-1z" fill="#908a8b" />
				<path className="path" d="M95 100l1 1-1-1z" fill="#898283" />
				<path
					className="path"
					d="M135 100v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#242321"
				/>
				<path
					className="path"
					d="M171 100c2.332.985 4.457.981 7 1-2.332-.985-4.457-.981-7-1z"
					fill="#676664"
				/>
				<path
					className="path"
					d="M178.667 100.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#3d3c3a"
				/>
				<path
					className="path"
					d="M275 100v11c1.431-3.41 1.431-7.59 0-11z"
					fill="#6c6b67"
				/>
				<path className="path" d="M92 101l1 1-1-1z" fill="#aca8a8" />
				<path
					className="path"
					d="M93 101c-.89 1.745-1.453 3.125-2 5 1.693-1.782 2.375-2.581 2-5z"
					fill="#3f3735"
				/>
				<path className="path" d="M133 101l1 1-1-1z" fill="#cbcbc9" />
				<path
					className="path"
					d="M129 107c3.112-.798 5.352-2.174 8-4-3.726-1.732-5.823 1.033-8 4z"
					fill="#3e3d39"
				/>
				<path className="path" d="M152 101v2h2v-2h-2z" fill="#282725" />
				<path
					className="path"
					d="M176.667 101.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#444341"
				/>
				<path
					className="path"
					d="M178 101c2.862 1.376 5.838 1.749 9 2-2.889-1.731-5.661-1.929-9-2z"
					fill="#706e6f"
				/>
				<path
					className="path"
					d="M184.667 101.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#2c2a2a"
				/>
				<path className="path" d="M94 102l1 1-1-1z" fill="#c7c5c4" />
				<path className="path" d="M132 102l1 1-1-1z" fill="#a3a2a0" />
				<path
					className="path"
					d="M149 122c2.943-.721 5.569-1.209 8-3 3.602 1.96 8.382.685 12-1l-2 5c4.488-2.254 7.908-6.111 12-9-4.208 4.753-8.713 8.427-4 14l8-3c-.598-1.195-.466-.977-2-2 5.086-2.118 9.41-5.005 14-8l-4 5c2.489-.777 4.672-1.817 7-3-.598-1.195-.466-.977-2-2l5-3c-3.404-2.922-6.022-2.87-10-1-1.271 6.756-11.27 11.29-17 14 4.075-3.132 9.257-5.508 12.817-9.209 1.898-1.973 2.677-4.593 4.183-6.791-2.233-3.283-5.199-3.991-9-4.866-3.395-.781-8.378-1.927-11.83-1.187-4.886 1.047-8.457 6.228-11.625 9.629-3.091 3.317-6.781 5.81-9.545 9.424z"
					fill="#1a1818"
				/>
				<path
					className="path"
					d="M181.667 102.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#42413f"
				/>
				<path
					className="path"
					d="M187 102c2.343 3.357 6.089 3.68 10 4-2.967-2.117-6.532-2.891-10-4z"
					fill="#5e5a59"
				/>
				<path className="path" d="M91 103l1 1-1-1z" fill="#8b8684" />
				<path className="path" d="M93 103l1 1-1-1z" fill="#979291" />
				<path className="path" d="M131 103l1 1-1-1z" fill="#807f7d" />
				<path
					className="path"
					d="M185.667 103.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#4c4b49"
				/>
				<path className="path" d="M90 104l1 1-1-1z" fill="#bdbab8" />
				<path className="path" d="M130 104l1 1-1-1z" fill="#7a7775" />
				<path
					className="path"
					d="M268 104l-1 7c1.827-2.412 2.15-4.169 1-7z"
					fill="#3d3c38"
				/>
				<path
					className="path"
					d="M90 105v3l2-1c-.545-1.635-.365-1.455-2-2z"
					fill="#554e4d"
				/>
				<path className="path" d="M92 105l1 1-1-1z" fill="#a7a2a1" />
				<path className="path" d="M129 105l1 1-1-1z" fill="#81807d" />
				<path
					className="path"
					d="M191.667 105.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#403c3b"
				/>
				<path
					className="path"
					d="M195 106c1.809.574 2.069.465 4 0-1.659-.406-2.242-.309-4 0z"
					fill="#3d3c3a"
				/>
				<path className="path" d="M89 106l1 1-1-1z" fill="#8f8888" />
				<path className="path" d="M128 106l1 1-1-1z" fill="#999995" />
				<path
					className="path"
					d="M198 106c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#5d5858"
				/>
				<path
					className="path"
					d="M202 106l-4 1c1.553.89 5.08 1.616 4-1z"
					fill="#41403c"
				/>
				<path
					className="path"
					d="M89 107l-2 5c1.848-1.78 2.566-2.491 2-5z"
					fill="#36312e"
				/>
				<path className="path" d="M127 107l1 1-1-1z" fill="#cbccca" />
				<path
					className="path"
					d="M126 126c2.308-5.982 4.898-11.4 8-17-7.977 4.299-11.096 14.696-13 23-.986-1.479-1-1.203-1-3-2.774 4.061-2 9.239-2 14 0 12.605 1.844 28.222 9 39 3.99-4.78 10.25-8.43 13-14h-4c1.534-1.023 1.402-.805 2-2-2.029-2.303 1.994-3.117 4-4 .055-2.411.579-4.626 1-7l-9 3c3.197-4.677 4.724-8.597-2-10 1.204-8.187 5.579-15.79 6-24-5.944 2.914-5.425 9.47-11 13 1.324-6.334 3.088-13.165 6.29-18.83 2.229-3.944 5.453-7.211 7.71-11.17-9.258 1.497-9.614 13.034-15 19z"
					fill="#13120e"
				/>
				<path
					className="path"
					d="M161 118c5.541-2.147 9.61-6.191 13-11-5.047 2.353-9.516 6.679-13 11z"
					fill="#2b2a28"
				/>
				<path
					className="path"
					d="M203 107c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#50504e"
				/>
				<path
					className="path"
					d="M204 108c2.613 1.098 5.165.993 8 1-2.739-1.562-4.905-1.435-8-1z"
					fill="#3a3839"
				/>
				<path
					className="path"
					d="M274 107a31.269 31.269 0 000 7c1.059-2.534 1.059-4.466 0-7z"
					fill="#5d5b56"
				/>
				<path className="path" d="M88 108l1 1-1-1z" fill="#777272" />
				<path className="path" d="M90 108l1 1-1-1z" fill="#908a89" />
				<path className="path" d="M127 108l1 1-1-1z" fill="#4c4d48" />
				<path
					className="path"
					d="M293.333 108.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#e2e1e0"
				/>
				<path
					className="path"
					d="M294 108c.48 1.96.938 3.307 2 5-.033-2.536-.277-3.128-2-5z"
					fill="#595550"
				/>
				<path className="path" d="M87 109l1 1-1-1z" fill="#bebcba" />
				<path className="path" d="M126 109l1 1-1-1z" fill="#565451" />
				<path className="path" d="M89 110l1 1-1-1z" fill="#bdbab9" />
				<path className="path" d="M125 110l1 1-1-1z" fill="#6c6a69" />
				<path
					className="path"
					d="M221 112c4.655-1.108 9.239-1 14-1-3.766-1.58-11.152-2.259-14 1z"
					fill="#302f2c"
				/>
				<path className="path" d="M294 110l1 1-1-1z" fill="#8b8783" />
				<path className="path" d="M296 110l1 1-1-1z" fill="#c4c2c0" />
				<path className="path" d="M86 111l1 1-1-1z" fill="#8c8584" />
				<path className="path" d="M88 111l1 1-1-1z" fill="#716d6b" />
				<path
					className="path"
					d="M129 111c-4.836 5.767-6.989 10.491-8 18 2.789-3.892 8.397-13.394 8-18z"
					fill="#332f2e"
				/>
				<path
					className="path"
					d="M137 137c4.293-4.127 7.136-9.574 11.174-13.985 3.81-4.163 8.994-7.086 11.826-12.015-9.743 4.517-19.948 15.628-23 26z"
					fill="#2d2b29"
				/>
				<path
					className="path"
					d="M222 111c3.697 1.552 8.017 1 12 1-3.697-1.552-8.017-1-12-1z"
					fill="#636260"
				/>
				<path
					className="path"
					d="M234 111c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#42413f"
				/>
				<path
					className="path"
					d="M273 111l-4 6c2.75-1.437 4.44-2.779 4-6z"
					fill="#716d6c"
				/>
				<path className="path" d="M275 111l1 1-1-1z" fill="#c9c8c6" />
				<path
					className="path"
					d="M86 112l-2 5c2.165-1.401 2.906-2.643 4-5h-2z"
					fill="#483f3e"
				/>
				<path
					className="path"
					d="M174 124c6.256.908 14.867-7.023 18-12-6.302 2.921-12.179 8.077-18 12z"
					fill="#353330"
				/>
				<path
					className="path"
					d="M216.667 112.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#434240"
				/>
				<path
					className="path"
					d="M216 113c5.859 3.831 17.117.005 24 0-6.352-2.665-17.375-1.577-24 0z"
					fill="#827f7e"
				/>
				<path
					className="path"
					d="M240.667 112.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#373633"
				/>
				<path
					className="path"
					d="M296 112c1.234 4.513 3.229 8.682 5 13 1.253-4.518-1.838-9.844-5-13z"
					fill="#3e3a36"
				/>
				<path className="path" d="M297 112l1 1-1-1z" fill="#b3b0af" />
				<path className="path" d="M85 113l1 1-1-1z" fill="#736b6c" />
				<path className="path" d="M87 113l1 1-1-1z" fill="#837d7c" />
				<path className="path" d="M123 113l1 1-1-1z" fill="#93918e" />
				<path
					className="path"
					d="M213 113c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#4d4c4a"
				/>
				<path
					className="path"
					d="M230 113c4.63 2.078 9.986 1.997 15 2-4.662-2.241-9.919-1.999-15-2z"
					fill="#989793"
				/>
				<path
					className="path"
					d="M240 113c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#73716e"
				/>
				<path
					className="path"
					d="M243.667 113.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#403f3d"
				/>
				<path
					className="path"
					d="M273 113l-3 5c2.444-1.325 3.611-2.184 3-5z"
					fill="#3f3e3a"
				/>
				<path
					className="path"
					d="M167 123l2-5c-3.823 1.15-8.115 2.117-12 1-2.929 1.208-6.236 1.861-8.826 3.772-7.528 5.551-12.643 16.501-15.174 25.228 4.916 2.856 3.111 5.554 1 10 3.262-.517 5.942-1.835 9-3-.668 2.47-1.084 4.451-1 7-.822.274-4.362.522-5 1v1c-.982 2.945 1.719 2.32-1 3 1.506.683 2.315.826 4 1-3.181 4.383-10.556 7.878-12.158 13.129-1.141 3.74 1.811 8.493 3.158 11.871 3.052 7.655 6.324 15.729 7 24 11.176-7.091 15.824-23.313 14.972-36-.246-3.668-.586-12.271-3.972-13l2-4-4-2c2.718-.332 4.435.078 7 1v-6c-3.859 0-1.115-6.013-7-4 .394-13.573 14.991-20.377 25-27 .455-4.624 4.521-8.164 7-12-4.533 2.157-7.963 6.029-12 9z"
					fill="#12110f"
				/>
				<path
					className="path"
					d="M198 118c1.951-1.26 2.84-2.019 4-4-2.249 1.154-2.846 1.751-4 4z"
					fill="#272624"
				/>
				<path
					className="path"
					d="M212 114l1 8c5.018-3.414 8.769-6.452 15-7-4.525-1.882-11.055-.912-16-1z"
					fill="#8f8f8d"
				/>
				<path
					className="path"
					d="M228 114c5.466 2.358 12.125 2 18 2-5.122-2.15-12.433-1.985-18-2z"
					fill="#aca8a5"
				/>
				<path className="path" d="M274 114l1 1-1-1z" fill="#a7a7a4" />
				<path className="path" d="M296 114l1 1-1-1z" fill="#817b7a" />
				<path className="path" d="M298 114l1 1-1-1z" fill="#a29e9d" />
				<path className="path" d="M84 115l1 1-1-1z" fill="#706968" />
				<path className="path" d="M86 115l1 1-1-1z" fill="#928c8b" />
				<path className="path" d="M122 115l1 1-1-1z" fill="#767271" />
				<path
					className="path"
					d="M181 123c5.963 2.115 11.304-3.092 14-8-4.833 2.14-9.41 5.318-14 8z"
					fill="#373332"
				/>
				<path
					className="path"
					d="M211 115v5c.83-2.03.83-2.97 0-5z"
					fill="#6a686b"
				/>
				<path
					className="path"
					d="M215 126c3.782-5.834 6.691-7.203 13-10-7.304-2.844-12.39 3.276-13 10z"
					fill="#abaaa7"
				/>
				<path
					className="path"
					d="M228 115c2.332.985 4.457.981 7 1-2.332-.985-4.457-.981-7-1z"
					fill="#bfc0bb"
				/>
				<path
					className="path"
					d="M246.667 115.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#4c4a4b"
				/>
				<path className="path" d="M83 116l1 1-1-1z" fill="#cfcdcd" />
				<path
					className="path"
					d="M227 154c-2.874 1.045-5.382 2.414-8 4 6.287 1.029 13.393-5.848 20-6.709 9.601-1.251 17.156 3.322 26 5.709-.854-6.582-2.689-11.993-9-15v2l-6-3c2.145-4.125 1.98-8.694 4-13-1.797 0-1.521.014-3 1 1.226-2.035 1.703-2.326 4-3-5.248-8.124-17.696-11.244-27-9.674-4.453.751-9.836 3.008-11.356 7.679-.959 2.943.453 6.164 1.202 8.994 1.929 7.289 5.275 14.518 9.154 21.001z"
					fill="#dcdbd7"
				/>
				<path
					className="path"
					d="M240 116c4.583 4.348 10.446 4.953 15 10-2.739.211-3.422.303-4 3l3-1c-2.739 4.198-2.331 8.425-4 13l6 3v-2c5.528 3.98 7.711 8.45 9 15-2.106-.644-3.795-.906-6-1 1.276 3.61 2.245 5.819 6 7 1.59-2.991 2.957-4.513 6-6-.17-7.993-3.515-16.394-5.979-23.985-1.08-3.326-2.308-7.917-4.896-10.419-1.651-1.597-4.054-1.779-6.129-2.51-5.031-1.774-8.505-4.022-13.996-4.086z"
					fill="#d4d3cf"
				/>
				<path
					className="path"
					d="M247.667 116.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#6f6e6e"
				/>
				<path
					className="path"
					d="M249.667 116.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#40403f"
				/>
				<path className="path" d="M273 116l1 1-1-1z" fill="#b0b0ad" />
				<path className="path" d="M297 116l1 1-1-1z" fill="#6f6a67" />
				<path className="path" d="M299 116l1 1-1-1z" fill="#b7b5b3" />
				<path className="path" d="M83 117l1 1-1-1z" fill="#7a7473" />
				<path
					className="path"
					d="M84 117c-1.504 2.673-2.465 4.981-3 8 2.013-2.441 3.53-4.82 3-8z"
					fill="#34312c"
				/>
				<path className="path" d="M85 117l1 1-1-1z" fill="#989392" />
				<path className="path" d="M121 117l1 1-1-1z" fill="#a2a09f" />
				<path
					className="path"
					d="M188 122c4.129 1.129 7.878-1.531 10-5-3.537 1.295-6.678 3.233-10 5z"
					fill="#43423f"
				/>
				<path
					className="path"
					d="M248 117c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#8d8d8b"
				/>
				<path
					className="path"
					d="M251 117c1.751 1.255 2.857 1.614 5 2-1.75-1.255-2.857-1.614-5-2z"
					fill="#4f4e4c"
				/>
				<path
					className="path"
					d="M265 118c1.943.622 2.949.436 5 0-1.943-.622-2.949-.436-5 0z"
					fill="#5d5957"
				/>
				<path className="path" d="M272 117l1 1-1-1z" fill="#a7a7a4" />
				<path className="path" d="M297 117l1 1-1-1z" fill="#c5c3c1" />
				<path className="path" d="M82 118l1 1-1-1z" fill="#cac7c6" />
				<path className="path" d="M121 118l1 1-1-1z" fill="#5c5958" />
				<path
					className="path"
					d="M212 118c0 5.054-1.736 12.983 4 15l1 8c2.577-6.317-1.981-14.123-1-21-1.416.472-1.814.814-3 2-.174-1.685-.317-2.494-1-4z"
					fill="#9c9b98"
				/>
				<path
					className="path"
					d="M249.667 118.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#aba8a6"
				/>
				<path
					className="path"
					d="M251.667 118.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#757372"
				/>
				<path
					className="path"
					d="M262 121l6-1c-2.628-1.397-4.181-1.415-6 1z"
					fill="#444341"
				/>
				<path
					className="path"
					d="M268.667 118.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#3c3a36"
				/>
				<path className="path" d="M270 118l1 1-1-1z" fill="#959391" />
				<path className="path" d="M271 118l1 1-1-1z" fill="#c1c1bf" />
				<path className="path" d="M300 118l1 1-1-1z" fill="#bcbab8" />
				<path className="path" d="M82 119l1 1-1-1z" fill="#898482" />
				<path className="path" d="M84 119l1 1-1-1z" fill="#918c8a" />
				<path className="path" d="M120 119l1 1-1-1z" fill="#b9b7b7" />
				<path
					className="path"
					d="M133 119c-2.217 3.358-2.904 5.995-3 10 2.309-2.89 3.838-6.315 3-10z"
					fill="#2b292c"
				/>
				<path
					className="path"
					d="M217 122c1.457-1.103 1.897-1.543 3-3-2.124.899-2.101.876-3 3z"
					fill="#bdbdbb"
				/>
				<path
					className="path"
					d="M252.667 119.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#8c8b88"
				/>
				<path
					className="path"
					d="M254 119c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#6a6967"
				/>
				<path
					className="path"
					d="M261 119c-.139 2.453-.071 2.676 2 4-.564-1.752-.919-2.542-2-4z"
					fill="#2c2a29"
				/>
				<path className="path" d="M268 119l1 1-1-1z" fill="#91908f" />
				<path className="path" d="M269 119l1 1-1-1z" fill="#c2c2c0" />
				<path className="path" d="M298 119l1 1-1-1z" fill="#bdbbba" />
				<path className="path" d="M300 119l1 1-1-1z" fill="#726f6c" />
				<path className="path" d="M81 120l1 1-1-1z" fill="#c8c4c4" />
				<path
					className="path"
					d="M120.333 120.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#535050"
				/>
				<path
					className="path"
					d="M211 120v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#858681"
				/>
				<path
					className="path"
					d="M254 120c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#8a8587"
				/>
				<path
					className="path"
					d="M258.667 120.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#545152"
				/>
				<path className="path" d="M263 120l1 1-1-1z" fill="#828282" />
				<path
					className="path"
					d="M264 120c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#bcbcbb"
				/>
				<path className="path" d="M301 120l1 1-1-1z" fill="#bdbcba" />
				<path className="path" d="M81 121l1 1-1-1z" fill="#969190" />
				<path className="path" d="M83 121l1 1-1-1z" fill="#969390" />
				<path className="path" d="M263 121l1 1-1-1z" fill="#b5b4b4" />
				<path
					className="path"
					d="M299.333 121.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#dddbdb"
				/>
				<path className="path" d="M301 121l1 1-1-1z" fill="#83807e" />
				<path className="path" d="M80 122l1 1-1-1z" fill="#cdcbca" />
				<path
					className="path"
					d="M119 122v3c.696-1.554.696-1.446 0-3z"
					fill="#838180"
				/>
				<path className="path" d="M260 122l1 1-1-1z" fill="#979694" />
				<path
					className="path"
					d="M261 123c1.624 2.435 2.725 5.206 5 7-.41-2.774-1.149-5.327-2-8l-3 1z"
					fill="#6d6c6b"
				/>
				<path className="path" d="M302 122l1 1-1-1z" fill="#d5d2d2" />
				<path className="path" d="M80 123l1 1-1-1z" fill="#a3a29f" />
				<path className="path" d="M82 123l1 1-1-1z" fill="#83817d" />
				<path
					className="path"
					d="M169 132c6.553-1.888 12.684-5.409 19-8-5.486-1.505-15.336 3.989-19 8z"
					fill="#464141"
				/>
				<path className="path" d="M300 123l1 1-1-1z" fill="#969192" />
				<path
					className="path"
					d="M302.333 123.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#787372"
				/>
				<path className="path" d="M80 124l1 1-1-1z" fill="#6d6a67" />
				<path className="path" d="M82 124l1 1-1-1z" fill="#bfbebc" />
				<path
					className="path"
					d="M262.333 124.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#969291"
				/>
				<path
					className="path"
					d="M300.333 124.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#e2e0e0"
				/>
				<path className="path" d="M79 125l1 1-1-1z" fill="#b7b4b3" />
				<path
					className="path"
					d="M80 125l-1 4c1.303-1.668 1.553-1.992 1-4z"
					fill="#34302c"
				/>
				<path className="path" d="M81 125l1 1-1-1z" fill="#72716c" />
				<path
					className="path"
					d="M119.333 125.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#2c2a2a"
				/>
				<path className="path" d="M301 125l1 1-1-1z" fill="#665f5d" />
				<path
					className="path"
					d="M302 125c.426 2.469 1.132 4.645 2 7 .797-2.889-.164-4.692-2-7z"
					fill="#473f3d"
				/>
				<path
					className="path"
					d="M303.333 125.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#85807f"
				/>
				<path className="path" d="M79 126l1 1-1-1z" fill="#8c8a87" />
				<path className="path" d="M81 126l1 1-1-1z" fill="#afaeac" />
				<path
					className="path"
					d="M118.333 126.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#939191"
				/>
				<path
					className="path"
					d="M155 138c6.323-2.66 12.264-7.205 18-11-6.011-.877-14.53 6.503-18 11z"
					fill="#272324"
				/>
				<path
					className="path"
					d="M262.333 126.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b7b3b2"
				/>
				<path
					className="path"
					d="M263.333 126.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#94908f"
				/>
				<path
					className="path"
					d="M301.333 126.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#dad8d7"
				/>
				<path className="path" d="M78 127l1 1-1-1z" fill="#c8c6c5" />
				<path
					className="path"
					d="M304.333 127.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a3a09e"
				/>
				<path className="path" d="M78 128l1 1-1-1z" fill="#999594" />
				<path className="path" d="M80 128l1 1-1-1z" fill="#9d9b99" />
				<path
					className="path"
					d="M118 128v3c.696-1.554.696-1.446 0-3z"
					fill="#7c7a79"
				/>
				<path
					className="path"
					d="M211.333 128.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#34302f"
				/>
				<path
					className="path"
					d="M216 128v3c.696-1.554.696-1.446 0-3z"
					fill="#b4b3af"
				/>
				<path
					className="path"
					d="M302.333 128.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#c7c4c3"
				/>
				<path
					className="path"
					d="M77.333 129.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#c2c0bf"
				/>
				<path
					className="path"
					d="M78.667 129.333c-.445.445.61.389.666.334.445-.445-.61-.389-.666-.334z"
					fill="#4b4744"
				/>
				<path className="path" d="M80 129l1 1-1-1z" fill="#cdcccb" />
				<path
					className="path"
					d="M78.333 130.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#312d2a"
				/>
				<path
					className="path"
					d="M79.333 130.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#a29f9f"
				/>
				<path
					className="path"
					d="M264.333 130.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b0aeac"
				/>
				<path
					className="path"
					d="M265 130l1 6c.889-2.508.495-3.815-1-6z"
					fill="#504f4c"
				/>
				<path
					className="path"
					d="M266.333 130.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#969695"
				/>
				<path className="path" d="M303 130l1 1-1-1z" fill="#857f7e" />
				<path className="path" d="M305 130l1 1-1-1z" fill="#bbbab9" />
				<path
					className="path"
					d="M76.333 131.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#d8d8d7"
				/>
				<path className="path" d="M77 131l1 1-1-1z" fill="#6f6c68" />
				<path
					className="path"
					d="M117 131v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#9e9c9d"
				/>
				<path
					className="path"
					d="M212 131v3c.696-1.554.696-1.446 0-3z"
					fill="#332f2e"
				/>
				<path
					className="path"
					d="M217 131v4c.71-1.76.71-2.24 0-4z"
					fill="#aeada9"
				/>
				<path className="path" d="M303 131l1 1-1-1z" fill="#b7b4b2" />
				<path className="path" d="M305 131l1 1-1-1z" fill="#74706e" />
				<path
					className="path"
					d="M77 132c-1.688 5.001-3.32 9.739-4 15 2.832-3.786 5.413-10.346 4-15z"
					fill="#383733"
				/>
				<path
					className="path"
					d="M78.333 132.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#868683"
				/>
				<path
					className="path"
					d="M304.333 132.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#9c9796"
				/>
				<path
					className="path"
					d="M305 132c.757 4.454 2.213 8.852 4 13 1.287-4.353-1.251-9.594-4-13z"
					fill="#3d3737"
				/>
				<path className="path" d="M306 132l1 1-1-1z" fill="#cccac9" />
				<path className="path" d="M76 133l1 1-1-1z" fill="#969491" />
				<path
					className="path"
					d="M213 133c.759 2.603 1.426 4.805 3 7 .422-2.47.269-4.496 0-7h-3z"
					fill="#8b8a86"
				/>
				<path
					className="path"
					d="M265.333 133.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a5a4a1"
				/>
				<path
					className="path"
					d="M267 133v3c.696-1.554.696-1.446 0-3z"
					fill="#a2a2a1"
				/>
				<path className="path" d="M306 133l1 1-1-1z" fill="#9c9897" />
				<path
					className="path"
					d="M75.333 134.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#dad9d8"
				/>
				<path className="path" d="M78 134l1 1-1-1z" fill="#c0bfbd" />
				<path
					className="path"
					d="M206 134c-.986 1.479-1 1.203-1 3-1.594-1.297-2.018-1.535-4-2-.562 2.671-1.722 9.295-5 7l-2 8c-.39-2.221-.335-3.754 0-6-2.221 1.675-2.562 3.257-3 6-.986-1.478-1-1.203-1-3-2.223.196-3.024-.365-5-1l-3 12h-8c2.171 3.349 5.213 2.992 9 3h18c.804-5.755 5.45-9.629 9-14-1.374-3.305-1.735-5.488-1-9l-3-4z"
					fill="#221d1a"
				/>
				<path
					className="path"
					d="M213.333 134.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#514e4b"
				/>
				<path
					className="path"
					d="M307.333 134.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#cbcac9"
				/>
				<path
					className="path"
					d="M77.333 135.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#8d8d89"
				/>
				<path
					className="path"
					d="M218 135c-.449 8.208-6.224 10.132-10.629 16.09-1.819 2.46-1.133 5.346-2.371 7.91 6.675 2.801 17.698 1.999 25 2-3.573-1.503-7.388-1.262-11-3l8-4a231.657 231.657 0 00-9-19z"
					fill="#c8c7c2"
				/>
				<path
					className="path"
					d="M305.333 135.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#aba6a5"
				/>
				<path className="path" d="M75 136l1 1-1-1z" fill="#6b6964" />
				<path
					className="path"
					d="M266.333 136.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#8d8a88"
				/>
				<path
					className="path"
					d="M267 136v3c.696-1.554.696-1.446 0-3z"
					fill="#343131"
				/>
				<path
					className="path"
					d="M268 136v3c.696-1.554.696-1.446 0-3z"
					fill="#b7b6b6"
				/>
				<path
					className="path"
					d="M308.333 136.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#dddcdc"
				/>
				<path className="path" d="M77 137l1 1-1-1z" fill="#d2d2d0" />
				<path
					className="path"
					d="M306.333 137.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#95908e"
				/>
				<path
					className="path"
					d="M117.333 138.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#585555"
				/>
				<path
					className="path"
					d="M214 138c.094 2.205.356 3.894 1 6 .736-2.433.305-3.819-1-6z"
					fill="#676262"
				/>
				<path className="path" d="M308 138l1 1-1-1z" fill="#a7a4a3" />
				<path className="path" d="M76 139l1 1-1-1z" fill="#989794" />
				<path
					className="path"
					d="M116 139v12c1.512-3.604 1.512-8.396 0-12z"
					fill="#bbbcba"
				/>
				<path
					className="path"
					d="M135 139c-1.845 3.009-2.684 5.485-3 9 2.151-2.591 3.601-5.629 3-9z"
					fill="#2c2827"
				/>
				<path
					className="path"
					d="M216 139c-.224 1.684-.218 2.314 0 4 .71-1.76.71-2.241 0-4z"
					fill="#787470"
				/>
				<path
					className="path"
					d="M267 139v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#575755"
				/>
				<path
					className="path"
					d="M269 139v3c.696-1.554.696-1.446 0-3z"
					fill="#cbcbca"
				/>
				<path className="path" d="M306 139l1 1-1-1z" fill="#d6d4d3" />
				<path
					className="path"
					d="M309.333 139.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#e5e4e4"
				/>
				<path
					className="path"
					d="M117 140v11c1.431-3.41 1.431-7.59 0-11z"
					fill="#30302d"
				/>
				<path
					className="path"
					d="M268 140v3c.696-1.554.696-1.446 0-3z"
					fill="#32312f"
				/>
				<path className="path" d="M73 141l1 1-1-1z" fill="#cbcac8" />
				<path
					className="path"
					d="M213 141l-5 9 7-5c-.564-1.752-.919-2.542-2-4z"
					fill="#504c4b"
				/>
				<path
					className="path"
					d="M267.333 141.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#adadab"
				/>
				<path className="path" d="M307 141l1 1-1-1z" fill="#9d9999" />
				<path className="path" d="M309 141l1 1-1-1z" fill="#9e9a9a" />
				<path
					className="path"
					d="M73.333 142.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#4d4b46"
				/>
				<path className="path" d="M75 142l1 1-1-1z" fill="#aaa9a5" />
				<path className="path" d="M269 142l1 1-1-1z" fill="#999897" />
				<path
					className="path"
					d="M268.667 143.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#53524f"
				/>
				<path
					className="path"
					d="M270 143v3c.696-1.554.696-1.446 0-3z"
					fill="#d7d6d6"
				/>
				<path className="path" d="M310 143l1 1-1-1z" fill="#c8c5c5" />
				<path
					className="path"
					d="M268.333 144.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#9f9b9a"
				/>
				<path
					className="path"
					d="M269 144v3c.696-1.554.696-1.446 0-3z"
					fill="#383432"
				/>
				<path className="path" d="M308 144l1 1-1-1z" fill="#8e8a8a" />
				<path
					className="path"
					d="M310 144c-.986 1.478-1 1.203-1 3 1.289-1.443 1.401-1.234 1-3z"
					fill="#4d4749"
				/>
				<path className="path" d="M72 145l1 1-1-1z" fill="#979593" />
				<path className="path" d="M74 145l1 1-1-1z" fill="#8f8d8b" />
				<path
					className="path"
					d="M72 146c.684 1.58.805 1.777 2 3-.684-1.58-.805-1.777-2-3z"
					fill="#51504c"
				/>
				<path className="path" d="M212 146l1 1-1-1z" fill="#85827f" />
				<path className="path" d="M270 146l1 1-1-1z" fill="#9c9a98" />
				<path
					className="path"
					d="M310 146l1 6c.994-2.575.654-3.823-1-6z"
					fill="#3b3535"
				/>
				<path className="path" d="M311 146l1 1-1-1z" fill="#a9a6a7" />
				<path className="path" d="M211 147l1 1-1-1z" fill="#9c9996" />
				<path
					className="path"
					d="M269 147l1 4c.751-2.046.656-2.596-1-4z"
					fill="#484643"
				/>
				<path
					className="path"
					d="M271 147v3c.696-1.554.696-1.446 0-3z"
					fill="#e2e2e2"
				/>
				<path className="path" d="M309 147l1 1-1-1z" fill="#7c7777" />
				<path
					className="path"
					d="M72 148c-.905 6.722-2.859 13.165-3 20 2.37-4.93 5.021-14.821 3-20z"
					fill="#2e2925"
				/>
				<path
					className="path"
					d="M71 149v3c.696-1.554.696-1.446 0-3z"
					fill="#6e6e6b"
				/>
				<path className="path" d="M73 149l1 1-1-1z" fill="#a2a09e" />
				<path className="path" d="M312 149l1 1-1-1z" fill="#b7b5b4" />
				<path
					className="path"
					d="M73 150v3c.696-1.554.696-1.446 0-3z"
					fill="#e6e6e5"
				/>
				<path className="path" d="M207 150l1 1-1-1z" fill="#8e8b89" />
				<path className="path" d="M271 150l1 1-1-1z" fill="#8c8a87" />
				<path className="path" d="M310 150l1 1-1-1z" fill="#7b7877" />
				<path
					className="path"
					d="M312 150l-1 3c1.766-.979 1.955-1.222 1-3z"
					fill="#4e4b4b"
				/>
				<path
					className="path"
					d="M117 151v3c.696-1.554.696-1.446 0-3z"
					fill="#8a8988"
				/>
				<path className="path" d="M206 151l1 1-1-1z" fill="#969591" />
				<path
					className="path"
					d="M237 151c3.163 1.327 6.586 1 10 1-3.163-1.327-6.586-1-10-1z"
					fill="#b1b0af"
				/>
				<path
					className="path"
					d="M271 151v3c.696-1.554.696-1.446 0-3z"
					fill="#4d4a47"
				/>
				<path className="path" d="M70 152l1 1-1-1z" fill="#cecccc" />
				<path className="path" d="M205 152l1 1-1-1z" fill="#9b9895" />
				<path
					className="path"
					d="M232 152c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#c1bdba"
				/>
				<path
					className="path"
					d="M235 152c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#878481"
				/>
				<path
					className="path"
					d="M238 152c3.163 1.327 6.586 1 10 1-3.163-1.327-6.586-1-10-1z"
					fill="#454343"
				/>
				<path
					className="path"
					d="M248.667 152.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#7a7879"
				/>
				<path
					className="path"
					d="M250 152c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#a4a2a3"
				/>
				<path
					className="path"
					d="M70 153v3c.696-1.554.696-1.446 0-3z"
					fill="#7e7b7a"
				/>
				<path className="path" d="M72 153l1 1-1-1z" fill="#8b8c88" />
				<path className="path" d="M204 153l1 1-1-1z" fill="#979490" />
				<path className="path" d="M231 153l1 1-1-1z" fill="#9d9a98" />
				<path
					className="path"
					d="M232 153c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#484442"
				/>
				<path
					className="path"
					d="M232 154l3 3-12 1c4.216 1.769 9.464.998 14 1 6.625.003 13.545.462 20 2 .644-2.106.906-3.795 1-6-9.084-.792-16.755-2.716-26-1z"
					fill="#100f0e"
				/>
				<path
					className="path"
					d="M250 153c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#464344"
				/>
				<path
					className="path"
					d="M253 153c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#686466"
				/>
				<path className="path" d="M256 153l1 1-1-1z" fill="#989695" />
				<path className="path" d="M272 153l1 1-1-1z" fill="#bcbcba" />
				<path className="path" d="M311 153l1 1-1-1z" fill="#807b7b" />
				<path
					className="path"
					d="M312 153c.306 3.752 1.241 7.32 2 11 1.316-3.679-.006-7.735-2-11z"
					fill="#3f3a37"
				/>
				<path
					className="path"
					d="M313 153v3c.696-1.554.696-1.446 0-3z"
					fill="#757270"
				/>
				<path
					className="path"
					d="M72 154v4c.71-1.759.71-2.241 0-4z"
					fill="#d9d8d7"
				/>
				<path
					className="path"
					d="M117 154v3c.696-1.554.696-1.446 0-3z"
					fill="#a6a6a5"
				/>
				<path className="path" d="M203 154l1 1-1-1z" fill="#807f7b" />
				<path
					className="path"
					d="M204 154c-.644 2.106-.906 3.795-1 6l4-1c-.651-2.434-1.16-3.283-3-5z"
					fill="#b8b8b1"
				/>
				<path className="path" d="M229 154l1 1-1-1z" fill="#837f7c" />
				<path
					className="path"
					d="M224 157c3.556 1.451 7.246.296 11 0-3.021-3.91-7.109-1.574-11 0z"
					fill="#211e1f"
				/>
				<path
					className="path"
					d="M253 154c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#292529"
				/>
				<path className="path" d="M257 154l1 1-1-1z" fill="#807f7d" />
				<path
					className="path"
					d="M271 154c-.899 2.124-.876 2.101-3 3 1.506.683 2.315.826 4 1-.174-1.685-.317-2.494-1-4z"
					fill="#918e8b"
				/>
				<path
					className="path"
					d="M272 154v3c.696-1.554.696-1.446 0-3z"
					fill="#474642"
				/>
				<path
					className="path"
					d="M311 154v3c.696-1.554.696-1.446 0-3z"
					fill="#dddcdc"
				/>
				<path
					className="path"
					d="M118 155v3c.696-1.554.696-1.446 0-3z"
					fill="#2f2e2c"
				/>
				<path className="path" d="M226 155l1 1-1-1z" fill="#a8a5a3" />
				<path className="path" d="M227 155l1 1-1-1z" fill="#716e6d" />
				<path className="path" d="M258 155l1 1-1-1z" fill="#a2a2a1" />
				<path
					className="path"
					d="M201 156v5h-6c2.332.985 4.457.981 7 1-.047-2.253-.126-3.948-1-6z"
					fill="#49474a"
				/>
				<path
					className="path"
					d="M202 156v5h18c-4.974-2.087-11.638-1-17-1-.174-1.685-.317-2.494-1-4z"
					fill="#a4a09d"
				/>
				<path className="path" d="M225 156l1 1-1-1z" fill="#797474" />
				<path
					className="path"
					d="M258 156v4c.71-1.76.71-2.24 0-4z"
					fill="#484847"
				/>
				<path className="path" d="M273 156l1 1-1-1z" fill="#b5b5b3" />
				<path
					className="path"
					d="M314.333 156.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#908e8c"
				/>
				<path
					className="path"
					d="M69 157v3c.696-1.554.696-1.446 0-3z"
					fill="#9b9895"
				/>
				<path className="path" d="M117 157l1 1-1-1z" fill="#d3d3d1" />
				<path className="path" d="M223 157l1 1-1-1z" fill="#9d9d9a" />
				<path
					className="path"
					d="M259 157c-.119 3.227.19 4.384 3 6-.858-2.16-1.707-4.077-3-6z"
					fill="#b5b5b5"
				/>
				<path
					className="path"
					d="M272 157c-3.394 3.253-7.286 6.298-12 7-.353 8.188-3.33 17.504-8.532 23.96-1.692 2.099-5.022 5.841-8.074 4.158C237.792 189.03 240 176.236 240 171c-4.211 6.163-4.392 27.995 7.985 23.396 7.668-2.849 12.048-16.205 14.015-23.396 2.36 1.313 4.391 2.341 7 3a35.81 35.81 0 011-7l-6 2c2.871-2.913 6.495-4.889 10-7-.386-2.143-.745-3.25-2-5z"
					fill="#100f0d"
				/>
				<path
					className="path"
					d="M273.333 157.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#393834"
				/>
				<path
					className="path"
					d="M312 157v4c.71-1.76.71-2.241 0-4z"
					fill="#cfcecd"
				/>
				<path
					className="path"
					d="M71 158v5c.83-2.03.83-2.97 0-5z"
					fill="#d5d4d3"
				/>
				<path
					className="path"
					d="M118 158v3c.696-1.554.696-1.446 0-3z"
					fill="#8b8b88"
				/>
				<path
					className="path"
					d="M221.333 158.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#8c8b87"
				/>
				<path
					className="path"
					d="M222 158c2.579 2.951 7.294 2 11 2-3.404-1.429-7.364-1.134-11-2z"
					fill="#5d5b5c"
				/>
				<path className="path" d="M267 158l1 1-1-1z" fill="#9f9d9c" />
				<path
					className="path"
					d="M268.667 158.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#4f4b49"
				/>
				<path
					className="path"
					d="M270.667 158.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#363330"
				/>
				<path
					className="path"
					d="M314.333 158.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#72706d"
				/>
				<path
					className="path"
					d="M161 159c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#3e3e3d"
				/>
				<path
					className="path"
					d="M233 159c2.052.874 3.747.953 6 1-2.052-.874-3.747-.953-6-1z"
					fill="#3c3a3c"
				/>
				<path
					className="path"
					d="M239 159c2.815 1.215 5.967 1.435 9 2-2.804-2.125-5.534-1.988-9-2z"
					fill="#292523"
				/>
				<path className="path" d="M266 159l1 1-1-1z" fill="#9d9b9c" />
				<path
					className="path"
					d="M267 159v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#363533"
				/>
				<path
					className="path"
					d="M274.333 159.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5a5957"
				/>
				<path
					className="path"
					d="M69.333 160.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#534e4d"
				/>
				<path className="path" d="M159 160l1 1-1-1z" fill="#52514f" />
				<path
					className="path"
					d="M158 163l7-1v-2c-3.17.173-5.136.356-7 3z"
					fill="#b9b9bb"
				/>
				<path className="path" d="M165 160l1 1-1-1z" fill="#8f8f8f" />
				<path className="path" d="M166 160l1 1-1-1z" fill="#5f5e5e" />
				<path
					className="path"
					d="M230 160c2.613 1.098 5.164.993 8 1-2.613-1.098-5.165-.993-8-1z"
					fill="#a8a8aa"
				/>
				<path
					className="path"
					d="M225 161c4.963 2.083 11.849 1.226 17 0-4.738-1.699-11.835 0-17 0z"
					fill="#828282"
				/>
				<path
					className="path"
					d="M242 160c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#3b3735"
				/>
				<path
					className="path"
					d="M243 165c2.686.501 5.27.883 8 1v4c-4.172.139-6.072.747-7 5 7.911-1.261 9.352-5.688 8-13l-5 1c2.096-1.043 3.699-1.603 6-2-4.302-1.658-7.342.646-10 4z"
					fill="#5a5954"
				/>
				<path
					className="path"
					d="M247 162c3.137.965 6.818.536 9-2-3.083.416-6.006 1.158-9 2z"
					fill="#433f3c"
				/>
				<path
					className="path"
					d="M257 160c.398 2.674.89 3.237 3 5l1-1c-1.255-1.573-2.424-2.749-4-4z"
					fill="#2d2d2b"
				/>
				<path className="path" d="M266 160l1 1-1-1z" fill="#666465" />
				<path
					className="path"
					d="M315.333 160.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a3a0a0"
				/>
				<path
					className="path"
					d="M119.333 161.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#7e7a7a"
				/>
				<path
					className="path"
					d="M165.667 161.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#d4d3d4"
				/>
				<path
					className="path"
					d="M167 161c2.764 4.951 5.512 8.079 6 14 4.061-5.577-.883-11.314-6-14z"
					fill="#bdbbbd"
				/>
				<path className="path" d="M168 161l1 1-1-1z" fill="#7e7d81" />
				<path
					className="path"
					d="M169.667 161.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#4b4b4d"
				/>
				<path
					className="path"
					d="M171 161c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#818181"
				/>
				<path
					className="path"
					d="M176 161c3.445 2.607 6.932 1.755 11 1-3.432-1.44-7.3-1-11-1z"
					fill="#918f92"
				/>
				<path
					className="path"
					d="M187 161c2.613 1.098 5.165.993 8 1-2.613-1.098-5.165-.993-8-1z"
					fill="#6f6d6e"
				/>
				<path
					className="path"
					d="M202 161c6.088 2.733 13.457 2 20 2-6.088-2.733-13.457-2-20-2z"
					fill="#716c6b"
				/>
				<path
					className="path"
					d="M216 161c3.121 1.401 6.589 1.73 10 2-3.04-2.303-6.268-1.997-10-2z"
					fill="#605d5e"
				/>
				<path
					className="path"
					d="M240.667 161.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#484747"
				/>
				<path
					className="path"
					d="M239 169c-3.409-.838-6.507-1.374-10-1 2.931 2.403 6.708 3.079 10 5 .726-2.179.439-1.78 2-1 .494-4.442 2.609-7.319 5-11-4.775.76-6.641 3.269-7 8z"
					fill="#171615"
				/>
				<path className="path" d="M258 161l1 1-1-1z" fill="#6b6b69" />
				<path className="path" d="M265 161l1 1-1-1z" fill="#989798" />
				<path className="path" d="M274 161l1 1-1-1z" fill="#8f8e8d" />
				<path
					className="path"
					d="M313 161v4c.71-1.76.71-2.24 0-4z"
					fill="#c0bebd"
				/>
				<path
					className="path"
					d="M68 162v4c.71-1.759.71-2.241 0-4z"
					fill="#a6a2a1"
				/>
				<path
					className="path"
					d="M157 162c-.986 1.479-1 1.203-1 3 1.289-1.443 1.401-1.234 1-3z"
					fill="#8c8b89"
				/>
				<path
					className="path"
					d="M160 162c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#6c6b70"
				/>
				<path
					className="path"
					d="M165.667 162.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#a4a2a5"
				/>
				<path className="path" d="M170 162l1 1-1-1z" fill="#777779" />
				<path
					className="path"
					d="M171 164l6-1c-2.529-1.039-4.176-1.093-6 1z"
					fill="#515050"
				/>
				<path
					className="path"
					d="M184 162c5.469 2.295 13.099 1 19 1-5.469-2.295-13.099-1-19-1z"
					fill="#aaa8a8"
				/>
				<path
					className="path"
					d="M202 163c2.332.985 4.457.981 7 1-2.508-1.886-3.982-1.817-7-1z"
					fill="#9a989b"
				/>
				<path
					className="path"
					d="M226 162c2.603 1.561 4.978 1.862 8 2v-2h-8z"
					fill="#4f4c4d"
				/>
				<path
					className="path"
					d="M234 162v2h4l-1 5 5-6c-2.613-1.098-5.165-.993-8-1z"
					fill="#2b2a2c"
				/>
				<path className="path" d="M252 162l1 8 4-8h-5z" fill="#696767" />
				<path className="path" d="M265 162l1 1-1-1z" fill="#6d6c6c" />
				<path className="path" d="M272 162v2h2v-2h-2z" fill="#3d3d3b" />
				<path
					className="path"
					d="M274 162c2.89 1.213 5.874.998 9 1-2.89-1.213-5.874-.998-9-1z"
					fill="#e1e0e0"
				/>
				<path
					className="path"
					d="M315.333 162.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#878483"
				/>
				<path
					className="path"
					d="M70 163v6c.951-2.285.951-3.715 0-6z"
					fill="#c7c6c5"
				/>
				<path className="path" d="M119 163l1 1-1-1z" fill="#aaa7a7" />
				<path
					className="path"
					d="M157 166c5.71-1.73 7.893-.581 13 2-2.506-4.968-9.542-7.334-13-2z"
					fill="#47464c"
				/>
				<path
					className="path"
					d="M167 163c1.45 1.608 2.051 2.064 4 3-1.45-1.608-2.051-2.064-4-3z"
					fill="#908f92"
				/>
				<path
					className="path"
					d="M172 163c3.878 4.459 8.778 6.006 10.981 12 4.101 11.159 1.772 23.972-1.726 35-2.326 7.331-6.622 17.279-4.466 25 2.783 9.964 11.995 18.06 19.211 24.961 2.77 2.649 8.318 5.747 9.415 9.618 1.034 3.649-3.728 9.57-4.415 13.421 2.331-2.299 4.706-8.817 8.096-9.369 2.736-.445 5.3 3.706 6.943 5.33 4.998 4.941 11.358 8.825 16.961 13.039-.006-8.383-1.701-16.605-1-25-1.195.598-.977.466-2 2-.37-3.154-.165-4.647 2-7-4.626-.709-4.612 2.052-4 6-1.6-.97-2.663-1.72-4-3 4.355-.712 1.663-11.058-1-13l4-1c-.497-3.066-1.036-4.032-4-5v-5c-3.005 4.829.555 10.737-1.603 15.922-2.881 6.926-5.525-1.782-5.397-4.922l4 2c-.001-4.884.729-9.393-4-12-1.156 3.862-1.135 6.966-4 10l1-6c-1.797 0-1.521.014-3 1 .883-5.13 2.663-9.732 3-15-5.096 0-1.821-12.655-5-14l3-2c-1.684-1.602-2.859-2.975-4-5-4.615 1.517-5.565 6.689-7 11-.389-6.629 4.267-12.24 3.906-19-.339-6.341-3.077-11.922-4.447-18-1.481-6.572-1.109-14.56.541-21l-28-1z"
					fill="#141311"
				/>
				<path
					className="path"
					d="M182 163c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#232327"
				/>
				<path
					className="path"
					d="M187 163c3.959 1.661 8.737 1 13 1-3.959-1.661-8.737-1-13-1z"
					fill="#373536"
				/>
				<path
					className="path"
					d="M200.667 163.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#777576"
				/>
				<path
					className="path"
					d="M209 163v2c6.722-.531 13.234-1 20-1-5.715-2.398-13.831-1-20-1z"
					fill="#8b8787"
				/>
				<path
					className="path"
					d="M256 163a68.374 68.374 0 00-5 12c3.549-3.128 4.871-7.81 7-12h-2z"
					fill="#838381"
				/>
				<path
					className="path"
					d="M261 163c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#626160"
				/>
				<path
					className="path"
					d="M264 169l6-2-1 4c4.014-3.423 7.65-6.387 12-2 1.231-1.355 1.851-3.838 3-2 1.262-3.346-3.382-3.444-6-3.727-5.179-.559-11.307 1.055-14 5.727z"
					fill="#191917"
				/>
				<path
					className="path"
					d="M279 163c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#393333"
				/>
				<path
					className="path"
					d="M283.667 163.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#dddddc"
				/>
				<path
					className="path"
					d="M120.333 164.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#777374"
				/>
				<path className="path" d="M155 164l1 1-1-1z" fill="#545351" />
				<path
					className="path"
					d="M161 189c-.877-3.397-1.154-5.673 0-9-1.675-3.011-1.962-5.58-2-9 1.186 1.186 1.584 1.528 3 2-1.036 1.186-1.339 1.604-2 3 4.074.129 6.268-.883 7-5 1.388-.691 1.861-.985 3-2-4.536-1.338-7.658-.551-12 1 2.403-2.888 4.259-3.72 8-4-3.978-2.948-8.234-.773-9.566 4.005-1.693 6.071-1.385 15.792 4.566 18.995z"
					fill="#9a99a1"
				/>
				<path className="path" d="M172 164l1 1-1-1z" fill="#5e5c5f" />
				<path
					className="path"
					d="M200 164c2.561 1.232 5.178 1.635 8 2-2.585-1.768-4.884-1.928-8-2z"
					fill="#464344"
				/>
				<path
					className="path"
					d="M206 164c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#656368"
				/>
				<path
					className="path"
					d="M213 164c5.728 2.404 13.801 1.999 20 2-5.622-3.368-13.643-2-20-2z"
					fill="#aba7a5"
				/>
				<path
					className="path"
					d="M230 164c1.248.685 1.548.749 3 1-1.479.986-1.203 1-3 1 2.332.985 4.457.981 7 1-2.244-2.116-3.931-2.668-7-3z"
					fill="#959595"
				/>
				<path
					className="path"
					d="M234 164c1.03 1.425 1.601 2.32 2 4 1.618-1.314 1.693-1.877 2-4h-4z"
					fill="#6d6d6e"
				/>
				<path
					className="path"
					d="M257 164c-1.347 2.534-2.091 5.526-3.723 7.875-2.114 3.042-4.817 4.596-6.277 8.125 2.908-1.004 4.95-1.424 8-1 .726-2.179.439-1.78 2-1 .976-4.718 2.997-9.216 2-14h-2z"
					fill="#9d9d9c"
				/>
				<path
					className="path"
					d="M314.667 164.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#65615e"
				/>
				<path className="path" d="M154 165l1 1-1-1z" fill="#3f3d3c" />
				<path
					className="path"
					d="M155 165c-1.56 2.974-2.503 5.677-3 9 2.693-2.147 3.926-5.67 3-9z"
					fill="#898888"
				/>
				<path
					className="path"
					d="M156 165l-2 6c2.55-1.706 3.423-3.211 2-6z"
					fill="#5d5c61"
				/>
				<path
					className="path"
					d="M158 170c3.446-.81 6.401-1.895 10-2 0-1.797-.014-1.522-1-3-3.962.991-6.936 1.254-9 5z"
					fill="#8a898d"
				/>
				<path className="path" d="M173 165l1 1-1-1z" fill="#534e52" />
				<path
					className="path"
					d="M200 165c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#656160"
				/>
				<path
					className="path"
					d="M208 165c3.267 1.464 6.483 1.559 10 1-3.163-1.327-6.586-1-10-1z"
					fill="#393532"
				/>
				<path
					className="path"
					d="M218 165c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#605c5b"
				/>
				<path
					className="path"
					d="M221.667 165.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#868280"
				/>
				<path
					className="path"
					d="M242 165v2h5c-1.788-1.422-2.706-1.697-5-2z"
					fill="#676462"
				/>
				<path
					className="path"
					d="M283 165c-3.273 7.607-5.995 17.8-7 26 5.573-5.519 10.184-18.41 7-26z"
					fill="#0b0b08"
				/>
				<path
					className="path"
					d="M314 165v4c.71-1.76.71-2.24 0-4z"
					fill="#b0aead"
				/>
				<path
					className="path"
					d="M315 165c.289 6.735 1.981 13.223 2 20 2.324-5.538.771-14.789-2-20z"
					fill="#34312c"
				/>
				<path
					className="path"
					d="M316 165v3c.696-1.554.696-1.446 0-3z"
					fill="#a9a7a5"
				/>
				<path
					className="path"
					d="M67 166v6c.951-2.285.951-3.715 0-6z"
					fill="#b2b0af"
				/>
				<path
					className="path"
					d="M68 166l1 4c.393-1.924.146-2.36-1-4z"
					fill="#463e3d"
				/>
				<path className="path" d="M120 166l1 1-1-1z" fill="#a4a1a1" />
				<path
					className="path"
					d="M170 166c-.133 2.622-.1 3.446 2 5v-5h-2z"
					fill="#7f7d82"
				/>
				<path
					className="path"
					d="M174.667 166.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#504c4b"
				/>
				<path
					className="path"
					d="M199 166v9c1.256-2.994 1.256-6.006 0-9z"
					fill="#5b5c57"
				/>
				<path
					className="path"
					d="M200 166v4c.71-1.76.71-2.241 0-4z"
					fill="#979691"
				/>
				<path
					className="path"
					d="M201 166v4c5.857-.73 8.892 2.232 14.09 4.126 3.711 1.352 8.027.874 11.91.874-8.942-4.17-15.689-8.915-26-9z"
					fill="#c8c6c3"
				/>
				<path
					className="path"
					d="M208.667 166.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#8c898d"
				/>
				<path
					className="path"
					d="M210.667 166.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#6d6c6a"
				/>
				<path
					className="path"
					d="M212.667 166.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#504e4b"
				/>
				<path
					className="path"
					d="M216 166c2.332.985 4.457.981 7 1-2.332-.985-4.457-.981-7-1z"
					fill="#120e0d"
				/>
				<path
					className="path"
					d="M223 166c.98 1.783.908 1.594 3 2-1.223-1.195-1.42-1.316-3-2z"
					fill="#262423"
				/>
				<path
					className="path"
					d="M225.667 166.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#484545"
				/>
				<path
					className="path"
					d="M227 166c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#6b6a69"
				/>
				<path
					className="path"
					d="M242 167c-.229 4.532-3.038 14.706 3 16-.768-1.314-.686-1.232-2-2 .79-4.05.084-7.904 0-12 3.363 0 6.204.716 7-3l-8 1z"
					fill="#848382"
				/>
				<path
					className="path"
					d="M250 166c-1.823 2.818-3.715 2.895-7 3v7l5 2c1.486-1.966 2.836-3.834 4-6-2.685 1.098-5.176 2.281-8 3 1.384-3.768 3.044-4.695 7-5-.174-1.685-.317-2.494-1-4z"
					fill="#65615e"
				/>
				<path
					className="path"
					d="M274 166c2.052.874 3.747.953 6 1-2.052-.874-3.747-.953-6-1z"
					fill="#5a5756"
				/>
				<path
					className="path"
					d="M121 167v3c.696-1.554.696-1.446 0-3z"
					fill="#62625d"
				/>
				<path className="path" d="M153 167l1 1-1-1z" fill="#464644" />
				<path
					className="path"
					d="M174 167l1 6c2.183-1.47 3.378-1.968 6-2-1.744-3.168-3.435-3.731-7-4z"
					fill="#858585"
				/>
				<path
					className="path"
					d="M213 167c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#938f8e"
				/>
				<path
					className="path"
					d="M218.667 167.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#6b6766"
				/>
				<path
					className="path"
					d="M220 167c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#524d50"
				/>
				<path
					className="path"
					d="M226 167c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#060504"
				/>
				<path
					className="path"
					d="M231 167c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#333"
				/>
				<path
					className="path"
					d="M234.667 167.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#565657"
				/>
				<path
					className="path"
					d="M241 167v3c.696-1.554.696-1.446 0-3z"
					fill="#413f3e"
				/>
				<path
					className="path"
					d="M272 167c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#7c7c7a"
				/>
				<path
					className="path"
					d="M271 169c3.056.722 5.969-.217 9-1-3.248-1.266-5.859-.325-9 1z"
					fill="#abadaa"
				/>
				<path
					className="path"
					d="M280.333 167.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#666564"
				/>
				<path
					className="path"
					d="M284 167v4c.71-1.76.71-2.24 0-4z"
					fill="#343333"
				/>
				<path
					className="path"
					d="M198 168v4c.71-1.76.71-2.24 0-4z"
					fill="#40413b"
				/>
				<path
					className="path"
					d="M216 168c3.384 6.462 9.521 6 16 6-4.876-2.052-9.905-.804-13-6h-3z"
					fill="#b5b4b0"
				/>
				<path
					className="path"
					d="M219 168c1.111 3.11 2.937 3.912 6 5l1-4-7-1z"
					fill="#a4a09e"
				/>
				<path
					className="path"
					d="M223 168c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#827f7e"
				/>
				<path
					className="path"
					d="M226 168c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#504f4c"
				/>
				<path
					className="path"
					d="M259.333 168.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#51514f"
				/>
				<path className="path" d="M271 168l1 1-1-1z" fill="#666663" />
				<path
					className="path"
					d="M276 188c1.521-6.65 3.854-13.134 4-20-6.906 3.507-11.874 14.777-4 20z"
					fill="#b9b9b8"
				/>
				<path className="path" d="M316 168l1 1-1-1z" fill="#807d7a" />
				<path
					className="path"
					d="M68 169c-.792 10.04-1 19.905-1 30 2.256-5.376.695-12.236 1.09-18 .284-4.147 1.565-8.047-.09-12z"
					fill="#2f2c29"
				/>
				<path
					className="path"
					d="M152.333 169.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5f5e61"
				/>
				<path
					className="path"
					d="M202 181l4-2c1.174 10.336 16.273 20.966 26 21-.003-5.061-.771-9.964-.99-14.999-.083-1.904.182-4.666-1.613-5.93-2.363-1.663-6.839.496-9.397.929 3.221-3.076 6.634-3.652 11-4v-2c-4.949.391-10.099 1.85-14.961.126-2.984-1.059-9.211-6.443-12.475-4.044C200.905 172.035 202 178.136 202 181z"
					fill="#d8d9d4"
				/>
				<path
					className="path"
					d="M225 173c1.783-.98 1.594-.908 2-3l3 1c-2.372-2.617-4.065-.842-5 2z"
					fill="#989491"
				/>
				<path className="path" d="M270 169l1 1-1-1z" fill="#575755" />
				<path
					className="path"
					d="M270 174c2.948-.968 3.816-2.141 5-5-2.997 1.088-4.052 1.95-5 5z"
					fill="#bcbebb"
				/>
				<path
					className="path"
					d="M275 169l-2 5c1.914-1.606 2.837-2.783 4-5h-2z"
					fill="#878987"
				/>
				<path
					className="path"
					d="M280 169v4c.71-1.759.71-2.241 0-4z"
					fill="#373735"
				/>
				<path
					className="path"
					d="M317 169v6c.951-2.285.951-3.715 0-6z"
					fill="#aeadac"
				/>
				<path
					className="path"
					d="M69 170v7c1.06-2.534 1.06-4.466 0-7z"
					fill="#bcbbba"
				/>
				<path
					className="path"
					d="M122 170v3c.696-1.554.696-1.446 0-3z"
					fill="#4f4e4b"
				/>
				<path
					className="path"
					d="M167 172c2.092-.406 2.02-.217 3-2-1.58.684-1.777.805-3 2z"
					fill="#b3b0b7"
				/>
				<path
					className="path"
					d="M172 170c.107 3.301.277 5.039 3 7l1-4c-1.416.472-1.814.814-3 2-.088-1.964-.221-3.231-1-5z"
					fill="#939290"
				/>
				<path
					className="path"
					d="M176 173l4-2c-2.308-.558-2.756.004-4 2z"
					fill="#a4a2a3"
				/>
				<path
					className="path"
					d="M181.333 170.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#686461"
				/>
				<path
					className="path"
					d="M200 170c.017 6.311.368 13.931 5.479 18.451 2.388 2.111 5.653 2.926 8.196 4.849 6.126 4.634 10.258 8.347 18.325 8.7v-2c-9.399-.11-24.044-11.472-26-21-2.092.406-2.02.217-3 2-1.081-3.657-1-7.199-1-11h-2z"
					fill="#c0bfbb"
				/>
				<path
					className="path"
					d="M227 170c.778 3.631 4.736 3.78 8 5-1.552-3.953-4.002-4.479-8-5z"
					fill="#777572"
				/>
				<path
					className="path"
					d="M231 170c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#464341"
				/>
				<path
					className="path"
					d="M241.333 170.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#6f6c6a"
				/>
				<path className="path" d="M270 170l1 1-1-1z" fill="#898987" />
				<path
					className="path"
					d="M315 170v3c.696-1.554.696-1.446 0-3z"
					fill="#9d9b99"
				/>
				<path
					className="path"
					d="M151 171v5c.83-2.031.83-2.97 0-5z"
					fill="#313131"
				/>
				<path
					className="path"
					d="M154 171v10a12.887 12.887 0 000-10z"
					fill="#3c3c42"
				/>
				<path
					className="path"
					d="M155 171v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#84858a"
				/>
				<path
					className="path"
					d="M159 171v8c2.209-.684 2.703-1.08 4-3h-3l2-3c-1.186-1.186-1.584-1.528-3-2z"
					fill="#afb0b1"
				/>
				<path
					className="path"
					d="M170 171v6c1.582-2.057 1.826-3.388 2-6h-2z"
					fill="#605d61"
				/>
				<path
					className="path"
					d="M177 179c.779-1.769.912-3.036 1-5h4c-3.771-5.598-5.343 1.363-5 5z"
					fill="#c3c0be"
				/>
				<path
					className="path"
					d="M234 171l1 5c1.661-.208 1.54-.495 2 1 .874-2.052.953-3.747 1-6h-4z"
					fill="#5f5b58"
				/>
				<path
					className="path"
					d="M258.333 171.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#6f6f6e"
				/>
				<path className="path" d="M262 171l1 1-1-1z" fill="#606060" />
				<path className="path" d="M263 171l1 1-1-1z" fill="#949393" />
				<path
					className="path"
					d="M269 171v4c.71-1.76.71-2.24 0-4z"
					fill="#565754"
				/>
				<path className="path" d="M284 171l1 1-1-1z" fill="#8d8b8c" />
				<path
					className="path"
					d="M67.333 172.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#716e6c"
				/>
				<path
					className="path"
					d="M165 182c3.246-2.924 4.683-5.633 5-10-4.459 2.249-4.944 5.249-5 10z"
					fill="#757170"
				/>
				<path
					className="path"
					d="M240 172v5c.83-2.031.83-2.97 0-5z"
					fill="#413f3e"
				/>
				<path
					className="path"
					d="M262 172c-.851 2.673-1.59 5.226-2 8l3-1c-.684 1.58-.805 1.777-2 3 .442 5.652 2.386 9.412 6.184 13.722 1.783 2.023 5.82 3.189 7.169-.04 1.005-2.405-.479-5.472-1.368-7.682-2.31-5.74-5.54-10.889-8.985-16h-2z"
					fill="#cbcbc7"
				/>
				<path className="path" d="M264 172l1 1-1-1z" fill="#676764" />
				<path
					className="path"
					d="M284 172v4c.71-1.76.71-2.241 0-4z"
					fill="#e7e7e7"
				/>
				<path
					className="path"
					d="M182.333 173.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#726e6d"
				/>
				<path
					className="path"
					d="M258.333 173.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#2f2e2d"
				/>
				<path className="path" d="M261 173l1 1-1-1z" fill="#5e5e5c" />
				<path className="path" d="M265 173l1 1-1-1z" fill="#3f3f3a" />
				<path
					className="path"
					d="M315 173v3c.696-1.554.696-1.446 0-3z"
					fill="#b9b9b7"
				/>
				<path
					className="path"
					d="M66 174v28c2.604-6.207 2.604-21.793 0-28z"
					fill="#b9b7b6"
				/>
				<path className="path" d="M123 174l1 1-1-1z" fill="#4f4b4a" />
				<path
					className="path"
					d="M152 174c.425 5.382 1 10.579 1 16 1.098-2.613.993-5.164 1-8l3 7c.74-3.508-.833-7.35-1-11-.685 1.248-.749 1.548-1 3-.722-2.418-.948-4.472-1-7h-2z"
					fill="#535154"
				/>
				<path
					className="path"
					d="M178 174v5l-1-4c-8.433 7.024.973 19.749 1 29 9.693-4.28 5.865-21.843 4-30h-4z"
					fill="#ccc9c6"
				/>
				<path
					className="path"
					d="M231 174c-3.557 2.799-8.255 2.151-11 6 2.459-.243 6.373-1.876 8.682-.763 2.143 1.033 2.189 3.728 2.303 5.764.26 4.685.976 9.301 1.015 13.999 3.969-2.65 2.372-13.108 3-18-2.788-1.803-2.731-4.104-4-7z"
					fill="#cccdc8"
				/>
				<path
					className="path"
					d="M232 174c0 3.363-.716 6.204 3 7-1.035 5.341.47 14.166-3 18 2.793.607 4.337-1.072 4.682-4.019.622-5.317-.682-11.535-.682-16.981-1.797 0-1.521.014-3 1l1-5h-2z"
					fill="#c4c6bb"
				/>
				<path className="path" d="M265 174l1 1-1-1z" fill="#8e8e89" />
				<path
					className="path"
					d="M266 174l3 5c1.485-3.044-.018-4.083-3-5z"
					fill="#292826"
				/>
				<path
					className="path"
					d="M270 174c1.139 1.015 1.612 1.309 3 2-.98-1.783-.908-1.594-3-2z"
					fill="#959593"
				/>
				<path
					className="path"
					d="M279.333 174.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#646464"
				/>
				<path className="path" d="M283 174l1 1-1-1z" fill="#383735" />
				<path className="path" d="M123 175l1 1-1-1z" fill="#8b8887" />
				<path
					className="path"
					d="M182.333 175.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b1adac"
				/>
				<path
					className="path"
					d="M199 175c0 5.342-.115 10.008 2 15 1.464-3.868-.397-11.191-2-15z"
					fill="#716e6d"
				/>
				<path
					className="path"
					d="M234 175l-1 4 3-1v7c1.327-3.163 1-6.586 1-10h-3z"
					fill="#a2a19e"
				/>
				<path className="path" d="M257 175l1 1-1-1z" fill="#747373" />
				<path className="path" d="M260 175l1 1-1-1z" fill="#464743" />
				<path className="path" d="M266 175l1 1-1-1z" fill="#73726e" />
				<path
					className="path"
					d="M270 175c.545 1.635.365 1.455 2 2v-2h-2z"
					fill="#787876"
				/>
				<path className="path" d="M283 175l1 1-1-1z" fill="#6a6968" />
				<path
					className="path"
					d="M318 175v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#c2c1c0"
				/>
				<path
					className="path"
					d="M164 176c-.269 2.504-.422 4.53 0 7 1.059-2.534 1.059-4.466 0-7z"
					fill="#827e7d"
				/>
				<path
					className="path"
					d="M171 176c-.238 2.095-.184 3.889 0 6 1.063-1.969 1.532-3.798 2-6h-2z"
					fill="#403b3d"
				/>
				<path
					className="path"
					d="M173.333 176.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#717170"
				/>
				<path
					className="path"
					d="M183.333 176.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#686463"
				/>
				<path
					className="path"
					d="M244 176l-1 5 4-1c-.777-2.132-1.13-2.771-3-4z"
					fill="#757374"
				/>
				<path className="path" d="M260 176l1 1-1-1z" fill="#7a7978" />
				<path className="path" d="M267 176l1 1-1-1z" fill="#595856" />
				<path
					className="path"
					d="M279.333 176.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#393836"
				/>
				<path
					className="path"
					d="M283 176v3c.696-1.554.696-1.446 0-3z"
					fill="#dedddd"
				/>
				<path
					className="path"
					d="M316 176v6c.951-2.285.951-3.715 0-6z"
					fill="#93908e"
				/>
				<path
					className="path"
					d="M68.333 177.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#777573"
				/>
				<path className="path" d="M124 177l1 1-1-1z" fill="#6b6a69" />
				<path
					className="path"
					d="M162 177l-2 5c2.853-.987 3.373-2.064 4-5h-2z"
					fill="#8c8b8b"
				/>
				<path
					className="path"
					d="M169 177c-2.351 2.936-4.444 5.278-5 9 2.309-1.917 4.105-3.201 7-4-.303-2.294-.578-3.212-2-5z"
					fill="#645b59"
				/>
				<path
					className="path"
					d="M237 177v11c1.431-3.41 1.431-7.59 0-11z"
					fill="#211d1b"
				/>
				<path
					className="path"
					d="M240 177v10a12.887 12.887 0 000-10z"
					fill="#6b6b6a"
				/>
				<path
					className="path"
					d="M241 177v5c.83-2.031.83-2.97 0-5z"
					fill="#999897"
				/>
				<path
					className="path"
					d="M255 177c-4.977 3.425-9.035 2.417-12 9l-1-4c-.985 2.332-.981 4.457-1 7 5.355-3.373 5.932-7.92 13-5 1.078-2.568 1.799-4.328 1-7z"
					fill="#adadad"
				/>
				<path className="path" d="M267 177l1 1-1-1z" fill="#9f9f9c" />
				<path
					className="path"
					d="M270 177c-.623 4.595 1.27 7.836 3 12 1.03-3.755-1.301-8.555-3-12z"
					fill="#6e6e6c"
				/>
				<path
					className="path"
					d="M271 177v5c.83-2.03.83-2.97 0-5z"
					fill="#9d9e99"
				/>
				<path
					className="path"
					d="M278 177v3c.696-1.554.696-1.446 0-3z"
					fill="#8d8c8a"
				/>
				<path
					className="path"
					d="M172 178c-.752 4.221-2.819 7.898-4 12 4.061-2.458 5.811-7.548 4-12z"
					fill="#635e64"
				/>
				<path
					className="path"
					d="M183.333 178.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#95918f"
				/>
				<path
					className="path"
					d="M200 178v4c.71-1.76.71-2.241 0-4z"
					fill="#aaa9a6"
				/>
				<path
					className="path"
					d="M256.333 178.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#393837"
				/>
				<path className="path" d="M259 178l1 1-1-1z" fill="#646462" />
				<path className="path" d="M268 178l1 1-1-1z" fill="#6c6d68" />
				<path className="path" d="M282 178l1 1-1-1z" fill="#62615e" />
				<path
					className="path"
					d="M68 179v17c1.883-4.486 1.883-12.514 0-17z"
					fill="#959391"
				/>
				<path className="path" d="M125 179l1 1-1-1z" fill="#43423d" />
				<path
					className="path"
					d="M184 179v3c.696-1.554.696-1.446 0-3z"
					fill="#393534"
				/>
				<path
					className="path"
					d="M259 179c-2.616 6.285-6.201 11.42-10 17 5.473-1.708 10.289-2 16-2v2c-3.458.283-6.664 1.062-10 2 4.117 1.711 8.647.187 13 0-2.088-5.895-5.945-9.656-7-16 1.783-.98 1.594-.908 2-3h-4z"
					fill="#bfc0bb"
				/>
				<path
					className="path"
					d="M282.333 179.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#d4d3d2"
				/>
				<path className="path" d="M125 180l1 1-1-1z" fill="#a0a09e" />
				<path
					className="path"
					d="M213 180c.083 9.159 7.648 16.697 17 17 0-5.717.331-11.408-1-17-4.164.995-9.656 3.02-13 0h-3z"
					fill="#e3e3e1"
				/>
				<path className="path" d="M255 180l1 1-1-1z" fill="#787678" />
				<path className="path" d="M258 180l1 1-1-1z" fill="#51504e" />
				<path
					className="path"
					d="M278.333 180.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#383735"
				/>
				<path className="path" d="M281 181l1 1-1-1z" fill="#6f6f6b" />
				<path className="path" d="M126 182l1 1-1-1z" fill="#70706e" />
				<path
					className="path"
					d="M154 182v4c.71-1.76.71-2.24 0-4z"
					fill="#7d7d7e"
				/>
				<path
					className="path"
					d="M159 182c.833 3.984 2.001 7.449 4 11h2l3-4c-2.012-1.758-3.581-2.916-6-4 .545-1.635.365-1.455 2-2-1.769-.779-3.036-.912-5-1z"
					fill="#b8b8bb"
				/>
				<path
					className="path"
					d="M166 183c1.006 1.731 1.546 3.053 2 5 1.573-1.949 2.291-3.588 3-6-1.878.176-3.199.438-5 1z"
					fill="#746f70"
				/>
				<path
					className="path"
					d="M184 182v10a12.887 12.887 0 000-10z"
					fill="#706868"
				/>
				<path
					className="path"
					d="M200.333 182.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#8c8b86"
				/>
				<path
					className="path"
					d="M201 182v3c.696-1.554.696-1.446 0-3z"
					fill="#a3a39c"
				/>
				<path
					className="path"
					d="M243 193c1.832-.371 3.353-.636 4.931-1.742 9.553-6.7-1.561-13.329-5.026-2.858-.551 1.666-.204 2.931.095 4.6z"
					fill="#c3c3c3"
				/>
				<path className="path" d="M257 182l1 1-1-1z" fill="#51514f" />
				<path
					className="path"
					d="M277.333 182.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#6f6e6c"
				/>
				<path
					className="path"
					d="M281.333 182.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#cbcbca"
				/>
				<path
					className="path"
					d="M316 182v3c.696-1.554.696-1.446 0-3z"
					fill="#afafad"
				/>
				<path
					className="path"
					d="M318.333 182.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#7e7b78"
				/>
				<path
					className="path"
					d="M126.333 183.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#dbdbda"
				/>
				<path
					className="path"
					d="M162 183v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#7b7977"
				/>
				<path
					className="path"
					d="M242 183v3c1.195-1.223 1.316-1.42 2-3h-2z"
					fill="#9f9f9d"
				/>
				<path className="path" d="M254 183l1 1-1-1z" fill="#575554" />
				<path
					className="path"
					d="M319 183v16c1.812-4.319 1.812-11.681 0-16z"
					fill="#d7d6d5"
				/>
				<path className="path" d="M127 184l1 1-1-1z" fill="#454440" />
				<path
					className="path"
					d="M165 184c.651 2.434 1.16 3.283 3 5v-5h-3z"
					fill="#8d8c91"
				/>
				<path
					className="path"
					d="M172 184l-2 7c1.801.562 3.122.824 5 1l-3-8z"
					fill="#423b3b"
				/>
				<path className="path" d="M253 184l1 1-1-1z" fill="#888785" />
				<path className="path" d="M256 184l1 1-1-1z" fill="#4e4e4c" />
				<path
					className="path"
					d="M277.333 184.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#2a2927"
				/>
				<path
					className="path"
					d="M280.333 184.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b6b6b5"
				/>
				<path
					className="path"
					d="M318 184c-.986 1.479-1 1.203-1 3 1.766-.979 1.955-1.222 1-3z"
					fill="#504d48"
				/>
				<path
					className="path"
					d="M127.333 185.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#d2d2d1"
				/>
				<path
					className="path"
					d="M173.333 185.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a9a0a3"
				/>
				<path
					className="path"
					d="M202 185c2.626 9.349 18.526 16.453 27 20-3.399 4.242-6.812 6.416-12 8 6.196 2.216 16.934-4.64 21.502-8.764 3.825-3.452 2.32-6.938-1.502-9.236-6.595 12.088-15.625 3.151-23.325-2.323-3.839-2.729-7.901-4.771-11.675-7.677z"
					fill="#afafaa"
				/>
				<path
					className="path"
					d="M236 185v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#928e8a"
				/>
				<path className="path" d="M253 185l1 1-1-1z" fill="#474644" />
				<path
					className="path"
					d="M276.333 185.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#807f7d"
				/>
				<path
					className="path"
					d="M316.333 185.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#e1e1e0"
				/>
				<path className="path" d="M128 186l1 1-1-1z" fill="#403e3c" />
				<path
					className="path"
					d="M154 186l-1 7c3.716-.796 3-3.637 3-7h-2z"
					fill="#6d6a6b"
				/>
				<path className="path" d="M252 186l1 1-1-1z" fill="#71706f" />
				<path className="path" d="M255 186l1 1-1-1z" fill="#60605c" />
				<path className="path" d="M279 186l1 1-1-1z" fill="#565553" />
				<path
					className="path"
					d="M128.333 187.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#bebdbc"
				/>
				<path
					className="path"
					d="M173 187c.378 2.265.704 3.813 0 6 1.608 1.45 2.064 2.051 3 4 1.374-3.839-.11-7.288-3-10z"
					fill="#787475"
				/>
				<path
					className="path"
					d="M240.333 187.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#2f2f2f"
				/>
				<path className="path" d="M251 187l1 1-1-1z" fill="#969495" />
				<path className="path" d="M279 187l1 1-1-1z" fill="#9f9f9e" />
				<path
					className="path"
					d="M317 187v6c.951-2.285.951-3.715 0-6z"
					fill="#6a6765"
				/>
				<path
					className="path"
					d="M318 187c-.174 4.126-.679 7.887 0 12 1.512-3.604 1.512-8.396 0-12z"
					fill="#3d3936"
				/>
				<path
					className="path"
					d="M156 188v5h-4c-.311 3.124-1.198 5.972-2 9 4.298-.716 6.272-6.272 9-9l1 1v-2c1.186 1.186 1.584 1.528 3 2-1.348-3.747-3.13-5.158-7-6z"
					fill="#848589"
				/>
				<path
					className="path"
					d="M202 188c2.401 6.649 7.793 7.713 12.856 11.698 2.902 2.284 4.374 6.152 6.144 9.302-2.996.225-4.249.552-6 3 6.133 1.308 11.017-1.657 14-7-9.238-5.448-18.204-10.906-27-17z"
					fill="#a2a19c"
				/>
				<path
					className="path"
					d="M237.333 188.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#383532"
				/>
				<path className="path" d="M251 188l1 1-1-1z" fill="#3b393a" />
				<path className="path" d="M254 188l1 1-1-1z" fill="#71716d" />
				<path
					className="path"
					d="M274.667 188.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#a1a09e"
				/>
				<path className="path" d="M278 188l1 1-1-1z" fill="#3f3f3c" />
				<path className="path" d="M279 188l1 1-1-1z" fill="#cacac8" />
				<path className="path" d="M129 189l1 1-1-1z" fill="#63605f" />
				<path className="path" d="M241 189l1 1-1-1z" fill="#828281" />
				<path className="path" d="M250 189l1 1-1-1z" fill="#4c4c4a" />
				<path className="path" d="M253 189l1 1-1-1z" fill="#454441" />
				<path className="path" d="M273 189l1 1-1-1z" fill="#949391" />
				<path
					className="path"
					d="M274 189v3c1.015-1.139 1.309-1.612 2-3h-2z"
					fill="#61615f"
				/>
				<path className="path" d="M278 189l1 1-1-1z" fill="#90908f" />
				<path className="path" d="M129 190l1 1-1-1z" fill="#a3a1a2" />
				<path
					className="path"
					d="M152 190v3c.696-1.554.696-1.446 0-3z"
					fill="#323132"
				/>
				<path
					className="path"
					d="M165 195c-3.622.792-2.464 3.559.083 5.694C168.136 203.253 172.277 203 176 203c-.218-3.43-1.23-6.549-1-10-4.259-1.886-9.356-4.477-10 2z"
					fill="#aaa9af"
				/>
				<path
					className="path"
					d="M201.333 190.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3d3c37"
				/>
				<path
					className="path"
					d="M202 190v3c.696-1.554.696-1.446 0-3z"
					fill="#81817b"
				/>
				<path
					className="path"
					d="M237 190c.406 2.092.217 2.02 2 3-.691-1.388-.985-1.861-2-3z"
					fill="#696965"
				/>
				<path className="path" d="M241 190l1 1-1-1z" fill="#565655" />
				<path className="path" d="M249 190l1 1-1-1z" fill="#4e4e4c" />
				<path className="path" d="M253 190l1 1-1-1z" fill="#868681" />
				<path
					className="path"
					d="M275 190l1 5c.791-2.307.475-3.065-1-5z"
					fill="#21201e"
				/>
				<path className="path" d="M277 190l1 1-1-1z" fill="#464542" />
				<path className="path" d="M278 190l1 1-1-1z" fill="#cccccb" />
				<path className="path" d="M129 191l1 1-1-1z" fill="#d3d2d2" />
				<path className="path" d="M130 191l1 1-1-1z" fill="#4a4848" />
				<path className="path" d="M242 191l1 1-1-1z" fill="#91918f" />
				<path className="path" d="M248 191l1 1-1-1z" fill="#494845" />
				<path className="path" d="M252 191l1 1-1-1z" fill="#63635e" />
				<path
					className="path"
					d="M277 191v4c.71-1.759.71-2.241 0-4z"
					fill="#82817f"
				/>
				<path
					className="path"
					d="M130.333 192.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a8a7a5"
				/>
				<path
					className="path"
					d="M160 192c-.726 2.179-.439 1.78-2 1-3.078 4.143-7.507 8.051-9 13 5.401-2.362 8.841-6.373 15-6-.894-2.892-1.068-3.796 1-6l-5-2z"
					fill="#969696"
				/>
				<path
					className="path"
					d="M184 192v5c.83-2.031.83-2.97 0-5z"
					fill="#302a2b"
				/>
				<path
					className="path"
					d="M203 192c1.013 7.523 3.056 15.905 9 21l-2-7 5 5c2.075-1.17 3.637-1.692 6-2-1.248-3.163-2.647-7.025-5.299-9.302-3.473-2.983-7.522-4.153-10.701-7.698h-2z"
					fill="#999790"
				/>
				<path className="path" d="M242 192l1 1-1-1z" fill="#484846" />
				<path className="path" d="M246 192l1 1-1-1z" fill="#817e7e" />
				<path className="path" d="M251 192l1 1-1-1z" fill="#44443f" />
				<path
					className="path"
					d="M202.333 193.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#44423f"
				/>
				<path
					className="path"
					d="M237 193l4 7c2.567-.739 4.673-1.682 7-3l-11-4z"
					fill="#959484"
				/>
				<path className="path" d="M239 193l1 1-1-1z" fill="#4c4d47" />
				<path
					className="path"
					d="M243 193c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#5d5b5e"
				/>
				<path className="path" d="M250 193l1 1-1-1z" fill="#3c3b37" />
				<path
					className="path"
					d="M275 193l1 5c.651-2.234.318-3.074-1-5z"
					fill="#767673"
				/>
				<path
					className="path"
					d="M316 193v3c.696-1.554.696-1.446 0-3z"
					fill="#e3e3e1"
				/>
				<path className="path" d="M131 194l1 1-1-1z" fill="#605f5c" />
				<path
					className="path"
					d="M175 194c-.717 3.804.998 7.279 2 11 1.327-3.163 1-6.586 1-10-1.3.65-1 .147-1 2l-2-3z"
					fill="#9a9a98"
				/>
				<path
					className="path"
					d="M183 194v3c.696-1.554.696-1.446 0-3z"
					fill="#9e9a99"
				/>
				<path className="path" d="M240 194l1 1-1-1z" fill="#53534d" />
				<path className="path" d="M249 194l1 1-1-1z" fill="#53504f" />
				<path
					className="path"
					d="M250 200l4-2c-.598-1.195-.466-.977-2-2 4.408-.959 8.539-.092 13 0v-2c-6.155 0-13.777-1.672-15 6z"
					fill="#a9a59f"
				/>
				<path className="path" d="M131 195l1 1-1-1z" fill="#8a8a87" />
				<path
					className="path"
					d="M203 195v3c.696-1.554.696-1.446 0-3z"
					fill="#646060"
				/>
				<path
					className="path"
					d="M242 195c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#24241d"
				/>
				<path className="path" d="M247 195l1 1-1-1z" fill="#585754" />
				<path className="path" d="M248 195l1 1-1-1z" fill="#8b8986" />
				<path
					className="path"
					d="M252 196c2.46.888 4.415.467 7 0-2.587-1.065-4.321-.782-7 0z"
					fill="#9e9a91"
				/>
				<path
					className="path"
					d="M68 196v3c.696-1.554.696-1.446 0-3z"
					fill="#73706f"
				/>
				<path
					className="path"
					d="M132 196v3c.696-1.554.696-1.446 0-3z"
					fill="#6b6a67"
				/>
				<path
					className="path"
					d="M151.333 196.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#615d5f"
				/>
				<path
					className="path"
					d="M239 205c2.042-.895 3.828-1.536 6-2 .674 2.297.965 2.774 3 4-.719-4.447.25-6.978 2-11-4.884 1.791-8.722 4.229-11 9z"
					fill="#d3cfc7"
				/>
				<path
					className="path"
					d="M250 198c-.683 1.506-.826 2.315-1 4 7.833-.162 15.191-2.934 23-3-5.274-2.213-11.44-.115-17 0 2.095-1.043 3.699-1.603 6-2-4.046-1.563-7.617 2.236-11 1z"
					fill="#b6b3ae"
				/>
				<path
					className="path"
					d="M275.333 196.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3a3a35"
				/>
				<path
					className="path"
					d="M316 196v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#a9a7a6"
				/>
				<path
					className="path"
					d="M317 196v9c1.256-2.994 1.256-6.006 0-9z"
					fill="#2e2b27"
				/>
				<path
					className="path"
					d="M69.333 197.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#e6e6e5"
				/>
				<path
					className="path"
					d="M183 197v3c.696-1.554.696-1.446 0-3z"
					fill="#6b6866"
				/>
				<path className="path" d="M274 197l1 1-1-1z" fill="#7f807b" />
				<path
					className="path"
					d="M150.333 198.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#4c4b4a"
				/>
				<path
					className="path"
					d="M203.333 198.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#2c2a28"
				/>
				<path
					className="path"
					d="M248 198c-.751 3.269-.751 5.731 0 9-5.362 2.345-11.373 5.628-14 11 6.117-3.481 11.616-7.98 18-11-.978-3.174-2.282-6.158-4-9z"
					fill="#c8c8c0"
				/>
				<path
					className="path"
					d="M264 199c3.349 1.405 6.564 1.015 10 0-3.171-.762-6.694-.027-10 0z"
					fill="#9c9996"
				/>
				<path
					className="path"
					d="M274.667 198.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#555652"
				/>
				<path
					className="path"
					d="M67 199v4c1.081-1.458 1.436-2.248 2-4h-2z"
					fill="#423e3d"
				/>
				<path
					className="path"
					d="M69 199v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#adadac"
				/>
				<path
					className="path"
					d="M133.333 199.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#6a6b66"
				/>
				<path
					className="path"
					d="M140 218c5.051-2.185 6.078-5.803 9.684-9.441 3.198-3.228 8.938-5.767 13.316-6.559-2.812-3.984-5.716-1.482-9.035.799-5.717 3.929-11.537 8.457-13.965 15.201z"
					fill="#b4b5b0"
				/>
				<path
					className="path"
					d="M204.333 199.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5e5d59"
				/>
				<path className="path" d="M273 199l1 1-1-1z" fill="#605f5b" />
				<path className="path" d="M274 199l1 1-1-1z" fill="#292925" />
				<path className="path" d="M275 199l1 1-1-1z" fill="#969693" />
				<path
					className="path"
					d="M318 199v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#bbbab9"
				/>
				<path
					className="path"
					d="M163 200c.691 1.388.985 1.861 2 3 .048-2.33.203-2.006-2-3z"
					fill="#656064"
				/>
				<path
					className="path"
					d="M183.333 200.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#373633"
				/>
				<path
					className="path"
					d="M261 200c3.697 1.552 8.017 1 12 1-3.698-1.552-8.017-1-12-1z"
					fill="#646361"
				/>
				<path className="path" d="M273 200l1 1-1-1z" fill="#302f2b" />
				<path className="path" d="M274 200l1 1-1-1z" fill="#72716f" />
				<path
					className="path"
					d="M68 201v7c1.06-2.534 1.06-4.466 0-7z"
					fill="#2f2e2c"
				/>
				<path className="path" d="M133 201l1 1-1-1z" fill="#aaaba7" />
				<path
					className="path"
					d="M149.333 201.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5b555b"
				/>
				<path
					className="path"
					d="M163 201c1.746 6.165 5.955 7.976 12 7-4.754-2.075-8.009-3.372-12-7z"
					fill="#979692"
				/>
				<path
					className="path"
					d="M182 201v3c.696-1.554.696-1.446 0-3z"
					fill="#8e8d89"
				/>
				<path
					className="path"
					d="M204.333 201.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3b3b36"
				/>
				<path
					className="path"
					d="M255 201c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#96918f"
				/>
				<path
					className="path"
					d="M258.667 201.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#55534f"
				/>
				<path
					className="path"
					d="M260 201c3.955 1.675 8.804 1.819 13 1-3.959-1.661-8.737-1-13-1z"
					fill="#272624"
				/>
				<path className="path" d="M273 201l1 1-1-1z" fill="#6f6f6c" />
				<path
					className="path"
					d="M134.333 202.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#70706a"
				/>
				<path
					className="path"
					d="M142 218c7.301-2.549 10.653-10.531 19-10l2-3 1 3c1.063-4.548-2.869-6.445-6.834-4.583-7.002 3.29-10.638 8.571-15.166 14.583z"
					fill="#cbc6bf"
				/>
				<path
					className="path"
					d="M165 202c1.725 4.381 10.79 6.646 12 1-4.451 1.02-7.671.145-12-1z"
					fill="#423b3c"
				/>
				<path
					className="path"
					d="M167.667 202.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#887f84"
				/>
				<path
					className="path"
					d="M250 202c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#888580"
				/>
				<path
					className="path"
					d="M251 203c2.633 1.901 5.083 1.068 8 2 1.66-4.403-5.564-2.289-8-2z"
					fill="#35322e"
				/>
				<path
					className="path"
					d="M260 202c-3.408 5.726-10.953 5.199-15.502 9.765-5.145 5.164-4.067 13.446-9.498 18.235 2.86-4.328 3.595-8.878 4-14-3.783 1.845-6.233 7.23-10.174 8.184-2.592.627-5.698-1.275-7.826-2.537-4.649-2.755-8.654-6.936-11.717-11.362-1.829-2.642-2.618-5.444-5.283-7.285-.424 6.655-4.018 12.441-5 19 3.233-3.624 3.597-8.596 8-11 .953 2.506 1.806 3.445 4 5-1.479.986-1.203 1-3 1 1.562 3.624.393 14.243 5 15l-3 15 3-1-1 6c3.398-2.45 3.072-6.117 4-10 4.076 3.395 3.996 6.955 4 12l-4-2c-.538 3.243 2.369 12.758 5.397 5.847 2.061-4.702.303-11.792.603-16.847.562 1.801.824 3.122 1 5 2.547 1.373 3.188 2.218 4 5h-4c2 2.667 1.726 6.589 4 10h-1c0 3.438.475 4.619-2 4 1.222 1.733 2.009 2.151 4 3-.195-3.748-.088-5.808 4-6-1.479.986-1.203 1-3 1l1 6c1.3-.65 1-.147 1-2 .914 6.998-.857 26.547 9 27 2.162 6.135 3.47 8.203-3 12 4.278 1 7.713-2.562 11-5l-1 6c2.719-.886 3.197-1.097 5 1 .562-1.801.824-3.122 1-5 2.199.233 2.983-.013 5-1v5c4.624-3.745 8.197-10.343 10-16-.035 2.948-1.025 5.206-2 8 4.568-3.632 4.526-7.511 5-13-1.081 1.458-1.436 2.248-2 4-6.117-1.791-10.07 1.598-16 2 2.4-1.601 4.176-2.454 7-3v-2c-3.183.212-5.919 1.313-9 2 .178 2.597.499 3.887 2 6l-4 2v-10c-2.486-1.319-3.805-3.36-6-5 .755-3.998-.738-7.784 0-12l-4-2-1 4 3 1c-1.549 6.507-.135 12.454 0 19h-2c-.004-5.708-1.285-11.409 0-17-3.334-2.161-2.872-5.364-3.876-9-2.204-7.988-2.623-15.913-4.124-24 1.4 1.13 2.416 2.218 4 3 .1-8.488 4.952-9.466 11-4 1.392-3.31.852-6.95 3.318-9.892 4.506-5.376 9.331-5.314 10.682-13.108.39 2.221.335 3.754 0 6l6-6c-.655 2.537-1.276 4.047-3 6 .399 5.357-1.764 7.934-7 9 .353 8.19 5.2 14.232 6 22h4v-4l2 4h2c1.269-2.311 2.383-4.266 2.074-7.002-.615-5.447-6.921-14.121 1.926-14.998 2.739-6.49 3.715-16.276-1.228-21.956-2.979-3.422-7.233-5.305-10.772-8.044h6c-2.613-1.098-5.164-.993-8-1z"
					fill="#151412"
				/>
				<path className="path" d="M271 202l1 1-1-1z" fill="#686865" />
				<path className="path" d="M272 202l1 1-1-1z" fill="#999a97" />
				<path
					className="path"
					d="M67 203v7c1.06-2.534 1.06-4.466 0-7z"
					fill="#b1afae"
				/>
				<path
					className="path"
					d="M169 203c2.332.985 4.457.981 7 1-2.332-.985-4.457-.981-7-1z"
					fill="#817a7c"
				/>
				<path
					className="path"
					d="M177 207l5-3c-2.816-.611-3.675.556-5 3z"
					fill="#b9b5b4"
				/>
				<path
					className="path"
					d="M228 213c1.073 6.434 5.145 4.358 9.09 1.281 4.561-3.558 8.621-4.852 7.91-11.281-4.82 0-9.42 3.397-13 6-1.98 1.44-1.916 3.193-3 5l-1-1z"
					fill="#dcdbd9"
				/>
				<path
					className="path"
					d="M257 203c.545 1.635.365 1.455 2 2v-2h-2z"
					fill="#504c4a"
				/>
				<path
					className="path"
					d="M262 203c1.45 1.608 2.051 2.064 4 3 0-2.085-.138-1.724 2-2-2.052-.874-3.747-.953-6-1z"
					fill="#272425"
				/>
				<path
					className="path"
					d="M268 203c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#8b8a88"
				/>
				<path className="path" d="M134 204l1 1-1-1z" fill="#c3c3bf" />
				<path
					className="path"
					d="M148.333 204.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#787176"
				/>
				<path
					className="path"
					d="M180 204l-1 3-4-1c-1.953 1.724-3.463 2.345-6 3 1.691 6.39 2.982 12.351 3 19 2.263-5.236 2.661-11.441 4-17l2 1c1.223-1.195 1.42-1.316 3-2l1-6h-2z"
					fill="#a4a4a4"
				/>
				<path
					className="path"
					d="M182.333 204.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#494442"
				/>
				<path className="path" d="M251 204l1 1-1-1z" fill="#898581" />
				<path
					className="path"
					d="M253 207c2.434-.651 3.283-1.16 5-3-2.394.648-3.536 1.032-5 3z"
					fill="#5c5a56"
				/>
				<path
					className="path"
					d="M265 204l1 2c1.635-.545 1.455-.365 2-2h-3z"
					fill="#929091"
				/>
				<path
					className="path"
					d="M316 204v3c.696-1.554.696-1.446 0-3z"
					fill="#84817f"
				/>
				<path
					className="path"
					d="M135.333 205.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#6f6e69"
				/>
				<path
					className="path"
					d="M162 205l-1 3c-7.316-1.844-9.112 4.013-14.222 7.472-2.887 1.954-6.004 1.895-6.778 5.528 7.177-2.697 13.147-7.352 21-8l-2-3h6c-.749-2.254-1.344-3.314-3-5z"
					fill="#d0cec8"
				/>
				<path
					className="path"
					d="M214 211c1.906 7.937 14.313 16.296 20 7-3.582-.568-4.943-1.508-6-5 3.639-.856 7.559-5.119 10-8-8.661 2.977-14.709 10.918-24 6z"
					fill="#bcbcb4"
				/>
				<path
					className="path"
					d="M252.333 205.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#94918d"
				/>
				<path className="path" d="M267 205l1 1-1-1z" fill="#d4d3d3" />
				<path
					className="path"
					d="M317.333 205.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#4b4643"
				/>
				<path
					className="path"
					d="M147.333 206.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#858082"
				/>
				<path
					className="path"
					d="M165 206c1.707 4.12 4.193 7.544 5 12 1.885-4.877-.946-9.304-5-12z"
					fill="#b5b6b9"
				/>
				<path
					className="path"
					d="M168 206c2.332.985 4.457.981 7 1-2.332-.985-4.457-.981-7-1z"
					fill="#615c5a"
				/>
				<path
					className="path"
					d="M181.333 206.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#787472"
				/>
				<path
					className="path"
					d="M210 206c.668 3.861 1.568 6.923 5 9-.202-1.85-.202-3.15 0-5-1.673-1.446-3.1-2.935-5-4z"
					fill="#adaaa3"
				/>
				<path className="path" d="M267 206l1 1-1-1z" fill="#4b4a48" />
				<path className="path" d="M268 206l1 1-1-1z" fill="#b5b4b3" />
				<path
					className="path"
					d="M69 207c-.986 1.479-1 1.203-1 3 1.29-1.443 1.4-1.234 1-3z"
					fill="#464541"
				/>
				<path
					className="path"
					d="M70 207v6c.951-2.285.951-3.715 0-6z"
					fill="#c1c0bf"
				/>
				<path
					className="path"
					d="M207.333 207.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#35322d"
				/>
				<path className="path" d="M250 207l1 1-1-1z" fill="#8e8b87" />
				<path
					className="path"
					d="M251.667 207.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#3e3b39"
				/>
				<path className="path" d="M269 207l1 1-1-1z" fill="#7b7977" />
				<path
					className="path"
					d="M315 207v3c.696-1.554.696-1.446 0-3z"
					fill="#b7b5b2"
				/>
				<path
					className="path"
					d="M316 207v5c.83-2.03.83-2.97 0-5z"
					fill="#35322d"
				/>
				<path className="path" d="M317 207l1 1-1-1z" fill="#7b7875" />
				<path
					className="path"
					d="M136 208v3c.696-1.554.696-1.446 0-3z"
					fill="#4e4a48"
				/>
				<path className="path" d="M146 208l1 1-1-1z" fill="#666263" />
				<path
					className="path"
					d="M165 208c1.248 4.864 4.21 9.042 5.402 14 1.082 4.499.598 9.404.598 14 3.489-8.315.821-22.133-6-28z"
					fill="#c2c3c4"
				/>
				<path
					className="path"
					d="M181.333 208.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3e3a39"
				/>
				<path className="path" d="M248 208l1 1-1-1z" fill="#95918e" />
				<path className="path" d="M270 208l1 1-1-1z" fill="#5e5b5a" />
				<path
					className="path"
					d="M317 208v4c.71-1.759.71-2.241 0-4z"
					fill="#adacaa"
				/>
				<path
					className="path"
					d="M69 209v5c.83-2.031.83-2.97 0-5z"
					fill="#2c2b29"
				/>
				<path className="path" d="M145 209l1 1-1-1z" fill="#494745" />
				<path className="path" d="M247 209l1 1-1-1z" fill="#676362" />
				<path className="path" d="M271 209l1 1-1-1z" fill="#555552" />
				<path
					className="path"
					d="M68 210v4c.71-1.759.71-2.241 0-4z"
					fill="#8e8e8d"
				/>
				<path
					className="path"
					d="M159 210c.768 1.314.686 1.232 2 2-6.498 2.205-18.014 4.076-21.106 11.184-1.294 2.973-.892 6.653-.894 9.816 3.208-.115 5.01 3 9 3l-9 4v2c8.785 5.421 17.494 11.163 26 17.025 5.177 3.568 10.083 7.732 16 9.975.241-2.66 1.121-5.322.567-8.004-1.766-8.55-7.625-16.313-9.807-24.996-1.693-6.735-.203-13.379-2.985-19.995-1.957-4.657-5.009-5.85-9.775-6.005z"
					fill="#dbdad5"
				/>
				<path
					className="path"
					d="M178 212l-2-1c-.986 1.479-1 1.203-1 3h4l2-4c-2.092.406-2.02.217-3 2z"
					fill="#979793"
				/>
				<path className="path" d="M245 210l1 1-1-1z" fill="#7e7a79" />
				<path className="path" d="M272 210l1 1-1-1z" fill="#585754" />
				<path
					className="path"
					d="M315.333 210.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#8e8b89"
				/>
				<path className="path" d="M136 211l1 1-1-1z" fill="#bbb9b9" />
				<path
					className="path"
					d="M180.333 211.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3a3834"
				/>
				<path className="path" d="M244 211l1 1-1-1z" fill="#504c4b" />
				<path className="path" d="M273 211l1 1-1-1z" fill="#61605d" />
				<path
					className="path"
					d="M137 212v3c.696-1.554.696-1.446 0-3z"
					fill="#292728"
				/>
				<path className="path" d="M143 212l1 1-1-1z" fill="#7f7b7c" />
				<path className="path" d="M210 212l1 1-1-1z" fill="#5c5754" />
				<path className="path" d="M242 212l1 1-1-1z" fill="#757273" />
				<path className="path" d="M274 212l1 1-1-1z" fill="#898885" />
				<path
					className="path"
					d="M314.333 212.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#c5c3c1"
				/>
				<path
					className="path"
					d="M315 212l-1 6c1.603-1.924 2.247-3.591 3-6h-2z"
					fill="#4d4946"
				/>
				<path
					className="path"
					d="M70 213l-1 2h2c0-1.853.3-1.35-1-2z"
					fill="#494546"
				/>
				<path
					className="path"
					d="M71 213v5c.83-2.031.83-2.97 0-5z"
					fill="#cccbcb"
				/>
				<path className="path" d="M142 213l1 1-1-1z" fill="#888486" />
				<path
					className="path"
					d="M176 213c-2.28 6.736-2.995 13.918-3 21 2.735-6.039 4.888-13.435 6-20l-3-1z"
					fill="#767470"
				/>
				<path
					className="path"
					d="M179.333 213.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#51504c"
				/>
				<path className="path" d="M211 213l1 1-1-1z" fill="#68655e" />
				<path className="path" d="M240 213l1 1-1-1z" fill="#939290" />
				<path
					className="path"
					d="M235 230c4.825-2.817 6.496-11.74 8-17-5.537 3.043-5.268 11.566-8 17z"
					fill="#232321"
				/>
				<path
					className="path"
					d="M316 213v3c.696-1.554.696-1.446 0-3z"
					fill="#9f9e9c"
				/>
				<path className="path" d="M68 214l1 1-1-1z" fill="#bdbdbd" />
				<path className="path" d="M212 214l1 1-1-1z" fill="#716c66" />
				<path className="path" d="M239 214l1 1-1-1z" fill="#757470" />
				<path className="path" d="M275 214l1 1-1-1z" fill="#73736f" />
				<path
					className="path"
					d="M314.333 214.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a8a6a4"
				/>
				<path
					className="path"
					d="M69 215v4c.71-1.759.71-2.241 0-4z"
					fill="#828181"
				/>
				<path
					className="path"
					d="M70 215c.167 3.827.966 7.32 2 11 1.293-3.646-.196-7.681-2-11z"
					fill="#302e2f"
				/>
				<path
					className="path"
					d="M137.333 215.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5f5d5f"
				/>
				<path className="path" d="M140 215l1 1-1-1z" fill="#8a8a87" />
				<path
					className="path"
					d="M213 215c1.139 1.015 1.612 1.309 3 2-.98-1.783-.908-1.594-3-2z"
					fill="#99948d"
				/>
				<path className="path" d="M238 215l1 1-1-1z" fill="#4e4f4a" />
				<path
					className="path"
					d="M139 216v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#a7a6a6"
				/>
				<path className="path" d="M214 216l1 1-1-1z" fill="#68625d" />
				<path className="path" d="M236 216l1 1-1-1z" fill="#868583" />
				<path
					className="path"
					d="M276.333 216.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#555552"
				/>
				<path className="path" d="M137 217l1 1-1-1z" fill="#abaaab" />
				<path
					className="path"
					d="M138 217v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#303031"
				/>
				<path
					className="path"
					d="M178.333 217.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3a3633"
				/>
				<path
					className="path"
					d="M215 217c1.223 1.195 1.42 1.316 3 2-.98-1.783-.908-1.594-3-2z"
					fill="#797671"
				/>
				<path className="path" d="M235 217l1 1-1-1z" fill="#777575" />
				<path
					className="path"
					d="M313 217v3c.696-1.554.696-1.446 0-3z"
					fill="#bfbebc"
				/>
				<path
					className="path"
					d="M315 217v3c.696-1.554.696-1.446 0-3z"
					fill="#928f8d"
				/>
				<path className="path" d="M71 218l1 1-1-1z" fill="#6a6a68" />
				<path
					className="path"
					d="M72 218v3c.696-1.554.696-1.446 0-3z"
					fill="#dedede"
				/>
				<path
					className="path"
					d="M137 218v5c.83-2.031.83-2.97 0-5z"
					fill="#dadada"
				/>
				<path className="path" d="M234 218l1 1-1-1z" fill="#858384" />
				<path
					className="path"
					d="M260 218l-2 8h5c-1.139-2.055-.818-2.049-3-2 .529-2.353.811-3.761 0-6z"
					fill="#312f31"
				/>
				<path
					className="path"
					d="M264 218l1 3c.685-1.248.749-1.548 1-3h-2z"
					fill="#3c3c3c"
				/>
				<path
					className="path"
					d="M276 218v9c1.256-2.994 1.256-6.006 0-9z"
					fill="#252422"
				/>
				<path
					className="path"
					d="M277 218v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#919190"
				/>
				<path
					className="path"
					d="M314.333 218.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#35302c"
				/>
				<path
					className="path"
					d="M177.333 219.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#575351"
				/>
				<path className="path" d="M217 219l1 1-1-1z" fill="#423f3a" />
				<path
					className="path"
					d="M218 219c1.543 1.267 2.048 1.489 4 2-1.543-1.267-2.048-1.489-4-2z"
					fill="#77746f"
				/>
				<path
					className="path"
					d="M264 219l-2 5c2.276-1.453 2.873-2.388 2-5z"
					fill="#a3a3a3"
				/>
				<path
					className="path"
					d="M70 220v3c.696-1.554.696-1.446 0-3z"
					fill="#828181"
				/>
				<path className="path" d="M218 220l1 1-1-1z" fill="#433f3c" />
				<path className="path" d="M233 220l1 1-1-1z" fill="#4f4c4a" />
				<path className="path" d="M263 220l1 1-1-1z" fill="#5e5e5e" />
				<path
					className="path"
					d="M312 220v3c.696-1.554.696-1.446 0-3z"
					fill="#d3d1d1"
				/>
				<path
					className="path"
					d="M313.667 220.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#524e4b"
				/>
				<path className="path" d="M72 221l1 1-1-1z" fill="#a8a8a7" />
				<path
					className="path"
					d="M173 221v4c.71-1.76.71-2.241 0-4z"
					fill="#8c8887"
				/>
				<path
					className="path"
					d="M177 221v3c.696-1.554.696-1.446 0-3z"
					fill="#3c3837"
				/>
				<path
					className="path"
					d="M220.667 221.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#4e4945"
				/>
				<path
					className="path"
					d="M225 222c2.734 1.14 4.997 1.293 7-1l-7 1z"
					fill="#9a9791"
				/>
				<path className="path" d="M232 221l1 1-1-1z" fill="#6c6965" />
				<path
					className="path"
					d="M249 221l-1 5c1.879-1.623 1.916-2.7 1-5z"
					fill="#272726"
				/>
				<path
					className="path"
					d="M313 221v3c.696-1.554.696-1.446 0-3z"
					fill="#302c27"
				/>
				<path
					className="path"
					d="M314 221v3c.696-1.554.696-1.446 0-3z"
					fill="#928f8d"
				/>
				<path
					className="path"
					d="M73 222v3c.696-1.554.696-1.446 0-3z"
					fill="#e5e5e5"
				/>
				<path
					className="path"
					d="M222 222c1.458 1.081 2.248 1.436 4 2-1.543-1.267-2.048-1.489-4-2z"
					fill="#585550"
				/>
				<path className="path" d="M262 222l1 1-1-1z" fill="#535353" />
				<path
					className="path"
					d="M136 223v10a12.887 12.887 0 000-10z"
					fill="#e9e9ea"
				/>
				<path
					className="path"
					d="M137 223l1 4c.553-2.008.303-2.332-1-4z"
					fill="#524f58"
				/>
				<path
					className="path"
					d="M226 223c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#757570"
				/>
				<path className="path" d="M264 223l1 1-1-1z" fill="#4a4a4c" />
				<path className="path" d="M312 223l1 1-1-1z" fill="#7d7a76" />
				<path className="path" d="M71 224l1 1-1-1z" fill="#6d6d6b" />
				<path
					className="path"
					d="M176 224c-2.473 6.787-1.15 12.26 1 19h3c-2.081-7.279-4.402-11.406-2-19h-2z"
					fill="#6c6865"
				/>
				<path
					className="path"
					d="M226 224c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#494844"
				/>
				<path className="path" d="M262 224l1 1-1-1z" fill="#717173" />
				<path
					className="path"
					d="M311.333 224.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#c5c3c2"
				/>
				<path
					className="path"
					d="M312 224v3c.696-1.554.696-1.446 0-3z"
					fill="#2f2b26"
				/>
				<path
					className="path"
					d="M313.333 224.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#817f7b"
				/>
				<path className="path" d="M71 225l1 1-1-1z" fill="#979796" />
				<path className="path" d="M73 225l1 1-1-1z" fill="#8b8b88" />
				<path
					className="path"
					d="M137 225v6c.951-2.285.951-3.715 0-6z"
					fill="#3e4045"
				/>
				<path
					className="path"
					d="M72 226v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#4e4d49"
				/>
				<path
					className="path"
					d="M256.667 226.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#5a5a5a"
				/>
				<path
					className="path"
					d="M258 226c1.769.779 3.036.912 5 1-1.769-.779-3.036-.912-5-1z"
					fill="#8e8e8e"
				/>
				<path
					className="path"
					d="M263 226v3c.696-1.554.696-1.446 0-3z"
					fill="#747373"
				/>
				<path className="path" d="M277 226l1 1-1-1z" fill="#bfbfbf" />
				<path
					className="path"
					d="M310.333 226.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#e7e6e6"
				/>
				<path className="path" d="M311 226l1 1-1-1z" fill="#6d6965" />
				<path className="path" d="M313 226l1 1-1-1z" fill="#b9b7b5" />
				<path
					className="path"
					d="M73.333 227.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#34332f"
				/>
				<path
					className="path"
					d="M138.333 227.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#82858c"
				/>
				<path className="path" d="M253 227l1 1-1-1z" fill="#4e4e4c" />
				<path
					className="path"
					d="M254.667 227.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#9b9a9a"
				/>
				<path
					className="path"
					d="M252 229c3.508.74 7.35-.833 11-1-3.802-1.58-7.315-.555-11 1z"
					fill="#c5c5c5"
				/>
				<path
					className="path"
					d="M276.333 227.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#818181"
				/>
				<path
					className="path"
					d="M311 227c-1.245 3.688-2.61 7.107-3 11 2.533-3.139 4.403-7.044 3-11z"
					fill="#3d3a36"
				/>
				<path
					className="path"
					d="M312.333 227.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#7e7c78"
				/>
				<path className="path" d="M72 228l1 1-1-1z" fill="#979796" />
				<path className="path" d="M74 228l1 1-1-1z" fill="#a6a5a3" />
				<path
					className="path"
					d="M172 228c.081 9.818 3.104 17.582 8 26 1.001-3.649-1.242-6.594-2.532-10-2.008-5.296-3.056-10.837-5.468-16z"
					fill="#93928e"
				/>
				<path className="path" d="M251 228l1 1-1-1z" fill="#474744" />
				<path className="path" d="M252 228l1 1-1-1z" fill="#888885" />
				<path
					className="path"
					d="M250 230c.84 1.861 1.798 3.334 3 5 3.165-2.475 7.647-3.863 10-7-4.445.094-8.701.895-13 2z"
					fill="#aeaeb2"
				/>
				<path className="path" d="M310 228l1 1-1-1z" fill="#aeadab" />
				<path
					className="path"
					d="M73 229v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#52514e"
				/>
				<path
					className="path"
					d="M138.333 229.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#a5a4ab"
				/>
				<path className="path" d="M250 229l1 1-1-1z" fill="#5d5d5e" />
				<path className="path" d="M275 229l1 1-1-1z" fill="#3e3e3e" />
				<path className="path" d="M276 229l1 1-1-1z" fill="#cecece" />
				<path className="path" d="M312 229l1 1-1-1z" fill="#cecdcb" />
				<path
					className="path"
					d="M74.333 230.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#2c2b28"
				/>
				<path className="path" d="M75 230l1 1-1-1z" fill="#c8c9c7" />
				<path className="path" d="M249 230l1 1-1-1z" fill="#656567" />
				<path
					className="path"
					d="M260.667 230.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#8e8b8c"
				/>
				<path className="path" d="M262 230l1 1-1-1z" fill="#4c494a" />
				<path className="path" d="M275 230l1 1-1-1z" fill="#747474" />
				<path className="path" d="M73 231l1 1-1-1z" fill="#aaa9a7" />
				<path className="path" d="M75 231l1 1-1-1z" fill="#747470" />
				<path
					className="path"
					d="M137 231l-1 4c1.656-1.404 1.751-1.954 1-4z"
					fill="#636166"
				/>
				<path
					className="path"
					d="M138 231c-.147 3.457-.734 6.612 0 10 3.281-1.659 6.47-2.969 10-4l-10-6z"
					fill="#d1d0ce"
				/>
				<path className="path" d="M248 231l1 1-1-1z" fill="#5a5859" />
				<path
					className="path"
					d="M249 231c-1.102 4.412.192 7.914 2 12 1.393-2.311 1.765-4.309 2-7l2 1v-4c-1.196.598-.977.466-2 2-1.215-2.001-1.999-2.785-4-4z"
					fill="#939394"
				/>
				<path
					className="path"
					d="M257 231c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#949394"
				/>
				<path
					className="path"
					d="M260.667 231.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#302f2e"
				/>
				<path className="path" d="M275 231l1 1-1-1z" fill="#c4c4c4" />
				<path className="path" d="M309 231l1 1-1-1z" fill="#8c8a86" />
				<path className="path" d="M311 231l1 1-1-1z" fill="#9d9b99" />
				<path
					className="path"
					d="M74 232v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#494845"
				/>
				<path
					className="path"
					d="M247 232v8h2c-.239-2.92-.622-5.412-2-8z"
					fill="#4b494c"
				/>
				<path className="path" d="M255 232l1 1-1-1z" fill="#717173" />
				<path
					className="path"
					d="M256 232c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#2f2d2e"
				/>
				<path className="path" d="M270 232l1 1-1-1z" fill="#575355" />
				<path className="path" d="M271 232l1 1-1-1z" fill="#999898" />
				<path className="path" d="M274 232l1 1-1-1z" fill="#676566" />
				<path
					className="path"
					d="M75.333 233.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#22211d"
				/>
				<path className="path" d="M76 233l1 1-1-1z" fill="#9f9e9b" />
				<path
					className="path"
					d="M135 233c-1.223 1.195-1.42 1.316-3 2 2.139.952 3.976.577 3-2z"
					fill="#eee"
				/>
				<path
					className="path"
					d="M255 233v3c.696-1.554.696-1.446 0-3z"
					fill="#313034"
				/>
				<path className="path" d="M269 233l1 1-1-1z" fill="#acaaaa" />
				<path className="path" d="M272 233l1 1-1-1z" fill="#bdbcbc" />
				<path className="path" d="M273 233l1 1-1-1z" fill="#5d5b5c" />
				<path className="path" d="M308 233l1 1-1-1z" fill="#b5b1ae" />
				<path className="path" d="M74 234l1 1-1-1z" fill="#a3a3a2" />
				<path
					className="path"
					d="M76 234c-.986 1.479-1 1.203-1 3 1.29-1.443 1.4-1.234 1-3z"
					fill="#464642"
				/>
				<path
					className="path"
					d="M268 234v3c.696-1.554.696-1.446 0-3z"
					fill="#5c5a58"
				/>
				<path
					className="path"
					d="M269 234v3c.696-1.554.696-1.446 0-3z"
					fill="#e4e3e3"
				/>
				<path
					className="path"
					d="M136 235c.031 1.832-.079 1.559 1 3-.251-1.452-.315-1.752-1-3z"
					fill="#423f45"
				/>
				<path
					className="path"
					d="M137.333 235.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b3b0b6"
				/>
				<path
					className="path"
					d="M172 235v4c.71-1.759.71-2.241 0-4z"
					fill="#afaeaa"
				/>
				<path
					className="path"
					d="M76.333 236.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#282624"
				/>
				<path
					className="path"
					d="M77.333 236.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#6e6c69"
				/>
				<path className="path" d="M132 236l1 1-1-1z" fill="#918d8b" />
				<path
					className="path"
					d="M133.667 236.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#59575b"
				/>
				<path
					className="path"
					d="M235 245c-1.4-1.13-2.416-2.218-4-3 .938 8.934 2.216 17.317 4.528 26 .888 3.338-.43 6.164 3.472 7-1.621 5.536-.016 11.285 0 17h2c-.054-6.555-1.214-12.46 0-19-1.479-.986-1.203-1-3-1l2-7 6-1 3 7c2.755-1.234 4.982-2.55 8-3v-14h2v6c1.314-.768 1.232-.686 2-2 1.689 4.502 1.605 11.875 7 13-1.223 1.195-1.42 1.316-3 2 .936 1.949 1.392 2.55 3 4 0-1.797-.014-1.521-1-3 1.797 0 1.521-.014 3-1 .776 2.132 1.13 2.771 3 4v-10c1.396 4.711 1.789 10.077 2 15 4.316-10.189 1.117-21.745-1-32-2.165 1.401-2.906 2.643-4 5h-2l-1-4c-.683 1.506-.826 2.315-1 4-1.687-.218-2.316-.224-4 0-.201-3.854-.672-6.792-4-9l1 7c-1.23-2.635-2.234-5.196-3-8-1.468 4.094-.003 9.58 0 14-3.343-5.88-5.82-12.596-8-19-4.824.172-12.818-8.831-13 1v4z"
					fill="#161513"
				/>
				<path
					className="path"
					d="M253 236c-.446 3.086-1.209 5.891-1 9 1.631-3.006 2.683-5.934 1-9z"
					fill="#777779"
				/>
				<path
					className="path"
					d="M255 236l-1 4c1.656-1.404 1.751-1.954 1-4z"
					fill="#555554"
				/>
				<path
					className="path"
					d="M307.333 236.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5c5855"
				/>
				<path className="path" d="M309 236l1 1-1-1z" fill="#817d7a" />
				<path className="path" d="M75 237l1 1-1-1z" fill="#b0b0af" />
				<path className="path" d="M131 237l1 1-1-1z" fill="#a09d99" />
				<path
					className="path"
					d="M130 247c2.102-3.092 4.862-6.483 6-10-5.294.916-5.781 5.209-6 10z"
					fill="#24201d"
				/>
				<path
					className="path"
					d="M269.333 237.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#cbcbca"
				/>
				<path
					className="path"
					d="M76 238l1 3c.685-1.248.749-1.548 1-3h-2z"
					fill="#3f3939"
				/>
				<path className="path" d="M131 238l1 1-1-1z" fill="#736e6b" />
				<path
					className="path"
					d="M136 238c.674 2.297.965 2.774 3 4-.959-1.597-1.726-2.659-3-4z"
					fill="#63625e"
				/>
				<path
					className="path"
					d="M256 238c-2.628 4.464-5.132 7.681-4 13 .685-1.248.749-1.548 1-3l1 2c.779-1.769.912-3.036 1-5 1.23 2.635 2.234 5.196 3 8 1.535-4.279-.053-10.949-2-15z"
					fill="#323231"
				/>
				<path className="path" d="M306 238l1 1-1-1z" fill="#c0bebc" />
				<path
					className="path"
					d="M307.333 238.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#26211d"
				/>
				<path className="path" d="M308 238l1 1-1-1z" fill="#5e5a57" />
				<path className="path" d="M76 239l1 1-1-1z" fill="#8a8685" />
				<path
					className="path"
					d="M78.333 239.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#716d6d"
				/>
				<path
					className="path"
					d="M130 239v3c.696-1.554.696-1.446 0-3z"
					fill="#a29d9c"
				/>
				<path
					className="path"
					d="M249 239c-.446 2.996.098 5.1 1 8 1.615-2.981.803-5.219-1-8z"
					fill="#5e5d5c"
				/>
				<path className="path" d="M269 239l1 1-1-1z" fill="#9f9e9e" />
				<path className="path" d="M306 239l1 1-1-1z" fill="#716d6a" />
				<path className="path" d="M308 239l1 1-1-1z" fill="#b5b4b2" />
				<path className="path" d="M133 240l1 1-1-1z" fill="#7d7775" />
				<path
					className="path"
					d="M134 240c-4.291 8.916.664 15.015 6.211 21.999 2.992 3.769 5.971 8.173 10.789 5.001 2.177 3.967 4.507 5.498 9 6-1.534 1.023-1.402.805-2 2 2.306 1.524 4.133 2.966 6 5 4.07-1.453 11.876-6.27 9.748-11.79-1.381-3.582-7.706-6.202-10.748-8.207-9.837-6.482-19.303-13.374-29-20.003z"
					fill="#d9d8d4"
				/>
				<path className="path" d="M135 240l1 1-1-1z" fill="#8f8e89" />
				<path className="path" d="M305 240l1 1-1-1z" fill="#d1cfce" />
				<path
					className="path"
					d="M306 240c-3.052 7.33-8.217 13.657-11 21 6.262-5.175 9.923-13.61 13-21h-2z"
					fill="#3b3432"
				/>
				<path className="path" d="M77 241l1 1-1-1z" fill="#757170" />
				<path
					className="path"
					d="M78 241c.787 4.413 2.752 8.148 5 12 .696-4.18-2.377-8.835-5-12z"
					fill="#4b4747"
				/>
				<path className="path" d="M79 241l1 1-1-1z" fill="#c6c5c3" />
				<path className="path" d="M136 241l1 1-1-1z" fill="#9c9d98" />
				<path
					className="path"
					d="M253.333 241.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#555354"
				/>
				<path className="path" d="M270 241l1 1-1-1z" fill="#8d8c8b" />
				<path className="path" d="M305 241l1 1-1-1z" fill="#83807d" />
				<path className="path" d="M307 241l1 1-1-1z" fill="#979593" />
				<path
					className="path"
					d="M77.333 242.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#e1e1e0"
				/>
				<path className="path" d="M79 242l1 1-1-1z" fill="#8c8987" />
				<path
					className="path"
					d="M129.333 242.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b3b1ae"
				/>
				<path className="path" d="M132 242l1 1-1-1z" fill="#797776" />
				<path className="path" d="M137 242l1 1-1-1z" fill="#9f9f9a" />
				<path
					className="path"
					d="M138 242c1.906 2.323 3.108 3.194 6 4-1.896-2.02-3.415-2.995-6-4z"
					fill="#4b4945"
				/>
				<path className="path" d="M140 242l1 1-1-1z" fill="#a4a19d" />
				<path
					className="path"
					d="M178 242c-.553 4.71 2.003 8.786 4 13 8.243-.261 12.605 11.492 19 16v-2l4 4c1.962-3.984-.395-6.248-4-8-3.895 1.869-5.469-2.981-6.924-6.004-3.088-6.411-9.774-13.7-16.076-16.996z"
					fill="#736e6e"
				/>
				<path className="path" d="M304 242l1 1-1-1z" fill="#cdcbca" />
				<path className="path" d="M80 243l1 1-1-1z" fill="#cdcccb" />
				<path className="path" d="M138 243l1 1-1-1z" fill="#a1a09c" />
				<path className="path" d="M141 243l1 1-1-1z" fill="#87837f" />
				<path
					className="path"
					d="M174 243c.813 5.215 2.968 9.567 7 13-1.634-4.491-3.795-9.45-7-13z"
					fill="#a1a09a"
				/>
				<path className="path" d="M271 243l1 1-1-1z" fill="#8f8d8e" />
				<path className="path" d="M304 243l1 1-1-1z" fill="#8f8c8a" />
				<path className="path" d="M306 243l1 1-1-1z" fill="#999795" />
				<path
					className="path"
					d="M78.333 244.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#d3d2d2"
				/>
				<path className="path" d="M80 244l1 1-1-1z" fill="#9d9b9a" />
				<path
					className="path"
					d="M129 244c-.545 1.635-.365 1.455-2 2 2.033.785 2.785.033 2-2z"
					fill="#4d4546"
				/>
				<path
					className="path"
					d="M131.333 244.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#898783"
				/>
				<path className="path" d="M139 244l1 1-1-1z" fill="#a9a8a4" />
				<path
					className="path"
					d="M271 244l1 4c.393-1.924.146-2.36-1-4z"
					fill="#494846"
				/>
				<path className="path" d="M303 244l1 1-1-1z" fill="#cac9c8" />
				<path className="path" d="M306 244l1 1-1-1z" fill="#cfcdcc" />
				<path className="path" d="M81 245l1 1-1-1z" fill="#cccbca" />
				<path className="path" d="M128 245l1 1-1-1z" fill="#ada8a7" />
				<path className="path" d="M144 245l1 1-1-1z" fill="#9c9b97" />
				<path className="path" d="M272 245l1 1-1-1z" fill="#918e8d" />
				<path className="path" d="M303 245l1 1-1-1z" fill="#9c9998" />
				<path className="path" d="M305 245l1 1-1-1z" fill="#999796" />
				<path className="path" d="M79 246l1 1-1-1z" fill="#a3a1a0" />
				<path className="path" d="M81 246l1 1-1-1z" fill="#a2a0a0" />
				<path
					className="path"
					d="M131 246v4c.71-1.76.71-2.241 0-4z"
					fill="#bfbebc"
				/>
				<path className="path" d="M142 246l1 1-1-1z" fill="#7b7a75" />
				<path
					className="path"
					d="M143 246c3.303 3.604 7.432 6.269 12 8-2.569-4.203-7.39-6.541-12-8z"
					fill="#2f2a26"
				/>
				<path className="path" d="M145 246l1 1-1-1z" fill="#74716d" />
				<path
					className="path"
					d="M302.333 246.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#9f9e9c"
				/>
				<path className="path" d="M305 246l1 1-1-1z" fill="#c7c6c5" />
				<path className="path" d="M79 247l1 1-1-1z" fill="#cecdcc" />
				<path
					className="path"
					d="M82.333 247.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#a6a4a3"
				/>
				<path className="path" d="M126 247l1 1-1-1z" fill="#494347" />
				<path
					className="path"
					d="M125 250c6 .644 9.704 7.534 11 13 5.12 1.595 8.833 9.033 10 14 4.455 1.246 6.954 5.743 11 8-6.436-14.053-20.347-23.936-27-38-2.543.526-3.535.878-5 3z"
					fill="#21211f"
				/>
				<path
					className="path"
					d="M130.333 247.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#535250"
				/>
				<path className="path" d="M143 247l1 1-1-1z" fill="#9d9b96" />
				<path className="path" d="M147 247l1 1-1-1z" fill="#9e9b96" />
				<path
					className="path"
					d="M241 247c.079 3.398.522 5.932 2 9 1.352-3.472.385-6.257-2-9z"
					fill="#363334"
				/>
				<path
					className="path"
					d="M273.333 247.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#838280"
				/>
				<path className="path" d="M304 247l1 1-1-1z" fill="#999795" />
				<path className="path" d="M80 248l1 1-1-1z" fill="#a19f9d" />
				<path className="path" d="M145 248l1 1-1-1z" fill="#6a6762" />
				<path className="path" d="M148 248l1 1-1-1z" fill="#6a6661" />
				<path
					className="path"
					d="M253 248c-.404 4.128.534 7.166 2 11 1.327-3.163 1-6.586 1-10-1.737.062-1.64.02-3-1z"
					fill="#252425"
				/>
				<path className="path" d="M301 248l1 1-1-1z" fill="#cccbca" />
				<path className="path" d="M304 248l1 1-1-1z" fill="#c3c1c0" />
				<path className="path" d="M83 249l1 1-1-1z" fill="#d0cfce" />
				<path
					className="path"
					d="M123 250c2.441 1.544 4.144 1.464 7 1-2.455-1.641-4.151-1.749-7-1z"
					fill="#484647"
				/>
				<path className="path" d="M146 249l1 1-1-1z" fill="#9a9692" />
				<path className="path" d="M150 249l1 1-1-1z" fill="#85827d" />
				<path className="path" d="M273 249l1 1-1-1z" fill="#565552" />
				<path className="path" d="M301 249l1 1-1-1z" fill="#a09e9d" />
				<path className="path" d="M303 249l1 1-1-1z" fill="#969493" />
				<path className="path" d="M81 250l1 1-1-1z" fill="#a6a4a3" />
				<path className="path" d="M83 250l1 1-1-1z" fill="#a2a09f" />
				<path className="path" d="M131 250l1 1-1-1z" fill="#696866" />
				<path className="path" d="M148 250l1 1-1-1z" fill="#797670" />
				<path className="path" d="M152 250l1 1-1-1z" fill="#a4a09b" />
				<path className="path" d="M300 250l1 1-1-1z" fill="#cecccc" />
				<path className="path" d="M303 250l1 1-1-1z" fill="#cac8c8" />
				<path className="path" d="M122 251l1 1-1-1z" fill="#716c6b" />
				<path
					className="path"
					d="M123 251l-3 5c2.343-1.347 3.401-2.259 3-5z"
					fill="#1e1a19"
				/>
				<path
					className="path"
					d="M125 251c-.957 1.517-1.387 2.338-2 4 1.63-1.515 2.163-1.855 2-4z"
					fill="#6e6b6a"
				/>
				<path
					className="path"
					d="M126 251c-1.77 3.111-4.879 6.374-5.386 10-.551 3.94 1.97 8.45 3.386 12 3.682 9.232 6.728 21.542 14.553 28.19 7.94 6.744 20.35 9.059 29.446 14.122 8.826 4.914 16.372 13.446 22.001 21.688 2.412-6.973-7.268-16.963-11.436-22-11.518-13.92-23.676-27.455-34.408-42-5.216-7.069-10.147-17.933-18.156-22z"
					fill="#1b1a18"
				/>
				<path
					className="path"
					d="M129 251c.776 2.132 1.13 2.771 3 4-.955-1.767-1.566-2.607-3-4z"
					fill="#585959"
				/>
				<path className="path" d="M132 251l1 1-1-1z" fill="#9b9a97" />
				<path className="path" d="M149 251l1 1-1-1z" fill="#a49f9a" />
				<path className="path" d="M153 251l1 1-1-1z" fill="#74726d" />
				<path
					className="path"
					d="M274.333 251.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#50504e"
				/>
				<path className="path" d="M300 251l1 1-1-1z" fill="#8c8887" />
				<path className="path" d="M302 251l1 1-1-1z" fill="#a19f9f" />
				<path className="path" d="M82 252l1 1-1-1z" fill="#aca9a9" />
				<path className="path" d="M84 252l1 1-1-1z" fill="#979494" />
				<path className="path" d="M121 252l1 1-1-1z" fill="#bcbaba" />
				<path className="path" d="M151 252l1 1-1-1z" fill="#867f7c" />
				<path className="path" d="M155 252l1 1-1-1z" fill="#a6a29e" />
				<path className="path" d="M299 252l1 1-1-1z" fill="#bcb9b9" />
				<path className="path" d="M83 253l1 1-1-1z" fill="#6e6a69" />
				<path
					className="path"
					d="M84.333 253.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#44403d"
				/>
				<path className="path" d="M120 253l1 1-1-1z" fill="#cac8c8" />
				<path className="path" d="M121 253l1 1-1-1z" fill="#3f393b" />
				<path className="path" d="M133 253l1 1-1-1z" fill="#6f6e6d" />
				<path className="path" d="M152 253l1 1-1-1z" fill="#a39f9a" />
				<path
					className="path"
					d="M155 253c3.528 5.816 11.481 9.215 17 13.025 8.83 6.097 16.318 13.859 25 19.975l1-1c-10.887-12.587-27.947-24.879-43-32z"
					fill="#3b3633"
				/>
				<path className="path" d="M156 253l1 1-1-1z" fill="#837c7a" />
				<path className="path" d="M275 253l1 1-1-1z" fill="#c6c6c4" />
				<path className="path" d="M301 253l1 1-1-1z" fill="#c4c3c1" />
				<path className="path" d="M83 254l1 1-1-1z" fill="#cac8c7" />
				<path className="path" d="M85 254l1 1-1-1z" fill="#7a7775" />
				<path className="path" d="M120 254l1 1-1-1z" fill="#565151" />
				<path className="path" d="M134 254l1 1-1-1z" fill="#949491" />
				<path className="path" d="M154 254l1 1-1-1z" fill="#6e6967" />
				<path className="path" d="M158 254l1 1-1-1z" fill="#aba3a1" />
				<path
					className="path"
					d="M181 254l1 4c.553-2.008.303-2.332-1-4z"
					fill="#8b8987"
				/>
				<path
					className="path"
					d="M201 272l4 2c-.838-2.613-1.71-3.464-4-5v2c-2.326-2.326-4.778-4.576-7-7-1.669-1.82-1.925-3.156-3-5-.775-1.328-2.618-4.246-4-5-2.841-1.55-4.609 1.565-4 4 .713 2.85 2.876 5.302 4 8 1.07 2.568.93 5.209 4 7 3.783 2.207 5.349 1.825 9 0l1 1v-2z"
					fill="#807c79"
				/>
				<path
					className="path"
					d="M257 254v14c-3.27.246-5.244 1.263-8 3-.683-2.525-1.929-4.618-3-7l-6 1c.064 2.993-.054 4.346 3 5-1.013 4.305.151 7.759 0 12 2.035 2.248 3.049 4.045 6 5v10l4-2c-1.17-2.075-1.692-3.637-2-6l9-2v2c-2.687.27-4.57.818-7 2 5.17 2.113 10.224-2.323 16-1l1-4c.238 2.095.184 3.889 0 6 6.291-8.092 4.026-15.585 4-25-1.327 3.163-1 6.586-1 10-1.434-1.393-2.045-2.233-3-4l-3 1 1 3c-2.007-2.874-1.33-3.098 0-6-5.016-1.163-5.474-8.593-6-13l-3 2v-6h-2z"
					fill="#141311"
				/>
				<path
					className="path"
					d="M275 254v3c.696-1.554.696-1.446 0-3z"
					fill="#696966"
				/>
				<path className="path" d="M298 254l1 1-1-1z" fill="#959191" />
				<path className="path" d="M300 254l1 1-1-1z" fill="#7f7a79" />
				<path className="path" d="M84 255l1 1-1-1z" fill="#787471" />
				<path
					className="path"
					d="M85 255c1.025 3.449 2.27 5.654 5 8-1.178-3.207-2.549-5.617-5-8z"
					fill="#484542"
				/>
				<path className="path" d="M86 255l1 1-1-1z" fill="#c2c1bf" />
				<path className="path" d="M119 255l1 1-1-1z" fill="#898686" />
				<path
					className="path"
					d="M120 260c1.627-1.588 2.774-3.078 4-5-2.547 1.373-3.188 2.218-4 5z"
					fill="#545153"
				/>
				<path
					className="path"
					d="M131 255c1.455 2.486 2.782 4.173 5 6-1.174-2.966-2.204-4.465-5-6z"
					fill="#3e3f3e"
				/>
				<path className="path" d="M135 255l1 1-1-1z" fill="#b1b2ad" />
				<path className="path" d="M155 255l1 1-1-1z" fill="#b1a9a8" />
				<path className="path" d="M156 255l1 1-1-1z" fill="#6d6665" />
				<path className="path" d="M159 255l1 1-1-1z" fill="#827d7a" />
				<path
					className="path"
					d="M179 255c1.72 5.531 4.716 10.834 7.361 15.972 1.323 2.57.824 3.905 3.639 5.028-.475-7.162-4.553-17.365-11-21z"
					fill="#b0b0ae"
				/>
				<path className="path" d="M297 255l1 1-1-1z" fill="#b5b2b2" />
				<path className="path" d="M118 256l1 1-1-1z" fill="#bbb9b9" />
				<path
					className="path"
					d="M119 256c-5.164 7.331-14.544 11.655-19 19 8.834-3.349 16.94-10.468 21-19h-2z"
					fill="#100c0b"
				/>
				<path className="path" d="M135 256l1 1-1-1z" fill="#50504c" />
				<path className="path" d="M157 256l1 1-1-1z" fill="#9b9693" />
				<path className="path" d="M161 256l1 1-1-1z" fill="#a6a39c" />
				<path className="path" d="M299 256l1 1-1-1z" fill="#c4c1c2" />
				<path className="path" d="M85 257l1 1-1-1z" fill="#85827f" />
				<path className="path" d="M87 257l1 1-1-1z" fill="#93908e" />
				<path className="path" d="M117 257l1 1-1-1z" fill="#cbcbca" />
				<path className="path" d="M118 257l1 1-1-1z" fill="#4a4948" />
				<path className="path" d="M136 257l1 1-1-1z" fill="#686562" />
				<path className="path" d="M159 257l1 1-1-1z" fill="#777370" />
				<path className="path" d="M162 257l1 1-1-1z" fill="#807b75" />
				<path className="path" d="M276 257l1 1-1-1z" fill="#c3c3c1" />
				<path className="path" d="M296 257l1 1-1-1z" fill="#7a7575" />
				<path className="path" d="M298 257l1 1-1-1z" fill="#6c6869" />
				<path className="path" d="M117 258l1 1-1-1z" fill="#777576" />
				<path className="path" d="M137 258l1 1-1-1z" fill="#817e7c" />
				<path className="path" d="M160 258l1 1-1-1z" fill="#9f9a96" />
				<path className="path" d="M164 258l1 1-1-1z" fill="#b0a9a6" />
				<path
					className="path"
					d="M194 258c.724 3.979 3.985 11.566 8 6l-8-6z"
					fill="#666463"
				/>
				<path
					className="path"
					d="M276 258v3c.696-1.554.696-1.446 0-3z"
					fill="#676664"
				/>
				<path className="path" d="M295 258l1 1-1-1z" fill="#989495" />
				<path className="path" d="M86 259l1 1-1-1z" fill="#a7a5a3" />
				<path className="path" d="M88 259l1 1-1-1z" fill="#74716e" />
				<path className="path" d="M116 259l1 1-1-1z" fill="#a5a4a4" />
				<path
					className="path"
					d="M119 259l-3 5c2.722-1.086 4.003-2.053 3-5z"
					fill="#6a6a6b"
				/>
				<path className="path" d="M138 259l1 1-1-1z" fill="#9b9a96" />
				<path className="path" d="M162 259l1 1-1-1z" fill="#7c7470" />
				<path className="path" d="M165 259l1 1-1-1z" fill="#898481" />
				<path className="path" d="M89 260l1 1-1-1z" fill="#969391" />
				<path className="path" d="M115 260l1 1-1-1z" fill="#afaeae" />
				<path className="path" d="M163 260l1 1-1-1z" fill="#a49c9a" />
				<path className="path" d="M167 260l1 1-1-1z" fill="#b0ada8" />
				<path className="path" d="M294 260l1 1-1-1z" fill="#777175" />
				<path className="path" d="M296 260l1 1-1-1z" fill="#737070" />
				<path className="path" d="M114 261l1 1-1-1z" fill="#b2b2b2" />
				<path className="path" d="M165 261l1 1-1-1z" fill="#7e7975" />
				<path className="path" d="M168 261l1 1-1-1z" fill="#908b86" />
				<path
					className="path"
					d="M277 261v3c.696-1.554.696-1.446 0-3z"
					fill="#7a7877"
				/>
				<path className="path" d="M293 261l1 1-1-1z" fill="#979095" />
				<path
					className="path"
					d="M293 264c1.457-1.103 1.897-1.543 3-3-2.124.899-2.101.876-3 3z"
					fill="#483e45"
				/>
				<path className="path" d="M88 262l1 1-1-1z" fill="#a6a3a1" />
				<path
					className="path"
					d="M90 262c.472 3.703 2.124 5.645 5 8-1.193-3.144-2.678-5.566-5-8z"
					fill="#686462"
				/>
				<path className="path" d="M113 262l1 1-1-1z" fill="#b1b1b0" />
				<path
					className="path"
					d="M137 262c.684 1.58.805 1.777 2 3-.684-1.58-.805-1.777-2-3z"
					fill="#3e3d3b"
				/>
				<path className="path" d="M140 262l1 1-1-1z" fill="#757571" />
				<path className="path" d="M166 262l1 1-1-1z" fill="#a5a09c" />
				<path
					className="path"
					d="M182 262c-.715 3.947-1.799 6.697 2 9-.142-3.252-.465-6.114-2-9z"
					fill="#cbccc6"
				/>
				<path className="path" d="M292 262l1 1-1-1z" fill="#d4d0d3" />
				<path className="path" d="M91 263l1 1-1-1z" fill="#a7a5a3" />
				<path className="path" d="M112 263l1 1-1-1z" fill="#aeaead" />
				<path
					className="path"
					d="M118 263c-4.654 5.808-11.223 11.5-19 11 3.833 6.044 11.358 11.177 17 15.576 13.584 10.589 27.229 16.901 43 23.288 5.403 2.188 10.472 5.387 16 7.136-7.329-7.933-19.507-10.608-29-15.156-5.44-2.606-8.25-6.715-13-9.844v4h-2c-.534-11.697-6.792-26.196-13-36z"
					fill="#191816"
				/>
				<path
					className="path"
					d="M119 263l1 4c.683-1.506.826-2.315 1-4h-2z"
					fill="#3f3f3f"
				/>
				<path className="path" d="M141 263l1 1-1-1z" fill="#888884" />
				<path className="path" d="M168 263l1 1-1-1z" fill="#85807a" />
				<path className="path" d="M171 263l1 1-1-1z" fill="#8a8781" />
				<path className="path" d="M292 263l1 1-1-1z" fill="#71696f" />
				<path className="path" d="M294 263l1 1-1-1z" fill="#b0aaae" />
				<path className="path" d="M111 264l1 1-1-1z" fill="#a9a8a8" />
				<path
					className="path"
					d="M108 270c4.132.55 6.741-2.87 9-6-3.353 1.534-6.05 3.785-9 6z"
					fill="#7c7a7a"
				/>
				<path className="path" d="M142 264l1 1-1-1z" fill="#a5a5a1" />
				<path className="path" d="M169 264l1 1-1-1z" fill="#b0aea7" />
				<path
					className="path"
					d="M277 264v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#3c3331"
				/>
				<path
					className="path"
					d="M278 264v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#b4b1b1"
				/>
				<path className="path" d="M291 264l1 1-1-1z" fill="#827d7f" />
				<path className="path" d="M292 264l1 1-1-1z" fill="#352d31" />
				<path className="path" d="M293 264l1 1-1-1z" fill="#7b7377" />
				<path className="path" d="M90 265l1 1-1-1z" fill="#cbc9c8" />
				<path className="path" d="M110 265l1 1-1-1z" fill="#908e8d" />
				<path className="path" d="M116 265l1 1-1-1z" fill="#434241" />
				<path
					className="path"
					d="M139 265c1.539 4.06 3.651 7.232 7 10-1.539-4.06-3.651-7.232-7-10z"
					fill="#41403e"
				/>
				<path className="path" d="M142 265l1 1-1-1z" fill="#5c5b58" />
				<path className="path" d="M171 265l1 1-1-1z" fill="#8f8b86" />
				<path className="path" d="M174 265l1 1-1-1z" fill="#8c8783" />
				<path className="path" d="M290 265l1 1-1-1z" fill="#aca9a9" />
				<path
					className="path"
					d="M290 268c1.457-1.103 1.897-1.543 3-3-2.124.899-2.101.876-3 3z"
					fill="#514c4f"
				/>
				<path className="path" d="M91 266l1 1-1-1z" fill="#9d9b98" />
				<path className="path" d="M93 266l1 1-1-1z" fill="#b4b3b1" />
				<path className="path" d="M108 266l1 1-1-1z" fill="#c6c5c4" />
				<path className="path" d="M109 266l1 1-1-1z" fill="#625f5f" />
				<path
					className="path"
					d="M121 266c-.493 4.695 2.295 8.673 4 13 1.17-4.218-1.653-9.466-4-13z"
					fill="#312d2c"
				/>
				<path className="path" d="M143 266l1 1-1-1z" fill="#6f6d6b" />
				<path className="path" d="M292 266l1 1-1-1z" fill="#d5d4d4" />
				<path className="path" d="M107 267l1 1-1-1z" fill="#bfbdbd" />
				<path className="path" d="M108 267l1 1-1-1z" fill="#4d4948" />
				<path className="path" d="M114 267l1 1-1-1z" fill="#4a4947" />
				<path className="path" d="M144 267l1 1-1-1z" fill="#898584" />
				<path
					className="path"
					d="M150 267c-1.543 1.267-2.048 1.489-4 2 6.75 10.215 15.156 19.333 22.65 29 4.544 5.86 9.653 13.609 16.35 17 3.677-6.908 12.024-14.996 12.562-23 .25-3.721-2.213-6.459-4.606-8.999-5.047-5.358-11.198-10.99-17.956-14.001-3.232 4.786-5.77 8.342-11 11-1.013-1.998-5.089-4.74-4-6-3.663-2.118-6.737-4.275-10-7z"
					fill="#d7d6d2"
				/>
				<path className="path" d="M174 267l1 1-1-1z" fill="#888282" />
				<path className="path" d="M177 267l1 1-1-1z" fill="#96918e" />
				<path className="path" d="M289 267l1 1-1-1z" fill="#6b6268" />
				<path className="path" d="M291 267l1 1-1-1z" fill="#aca8ab" />
				<path className="path" d="M106 268l1 1-1-1z" fill="#b3b2b1" />
				<path className="path" d="M107 268l1 1-1-1z" fill="#403c3b" />
				<path className="path" d="M110 268l1 1-1-1z" fill="#454141" />
				<path className="path" d="M145 268l1 1-1-1z" fill="#9d9b99" />
				<path className="path" d="M175 268l1 1-1-1z" fill="#9c9898" />
				<path className="path" d="M178 268l1 1-1-1z" fill="#736f6a" />
				<path
					className="path"
					d="M184 268l-1 4 5 2c-1.029-2.612-1.93-4.119-4-6z"
					fill="#c1bdba"
				/>
				<path className="path" d="M288 268l1 1-1-1z" fill="#756d73" />
				<path className="path" d="M289 268l1 1-1-1z" fill="#3a2f38" />
				<path className="path" d="M290 268l1 1-1-1z" fill="#877f86" />
				<path className="path" d="M95 269l1 1-1-1z" fill="#c9c8c7" />
				<path className="path" d="M105 269l1 1-1-1z" fill="#8f8f8d" />
				<path className="path" d="M180 269l1 1-1-1z" fill="#9f9d99" />
				<path className="path" d="M287 269l1 1-1-1z" fill="#7a7678" />
				<path className="path" d="M288 269l1 1-1-1z" fill="#342b33" />
				<path className="path" d="M289 269l1 1-1-1z" fill="#777077" />
				<path className="path" d="M94 270l1 1-1-1z" fill="#bbbab8" />
				<path
					className="path"
					d="M95 270c.936 1.949 1.392 2.55 3 4-.936-1.949-1.392-2.55-3-4z"
					fill="#8c8a87"
				/>
				<path className="path" d="M103 270l1 1-1-1z" fill="#cacaca" />
				<path className="path" d="M104 270l1 1-1-1z" fill="#514f50" />
				<path className="path" d="M146 270l1 1-1-1z" fill="#595a55" />
				<path className="path" d="M178 270l1 1-1-1z" fill="#797672" />
				<path className="path" d="M181 270l1 1-1-1z" fill="#81807c" />
				<path className="path" d="M286 270l1 1-1-1z" fill="#838080" />
				<path className="path" d="M287 270l1 1-1-1z" fill="#2f2a2d" />
				<path className="path" d="M288 270l1 1-1-1z" fill="#696468" />
				<path className="path" d="M102 271l1 1-1-1z" fill="#929290" />
				<path
					className="path"
					d="M104 274c1.875-.547 3.255-1.11 5-2-2.509-.566-3.22.152-5 2z"
					fill="#656565"
				/>
				<path className="path" d="M147 271l1 1-1-1z" fill="#696864" />
				<path className="path" d="M179 271l1 1-1-1z" fill="#93908d" />
				<path className="path" d="M182 271l1 1-1-1z" fill="#65625f" />
				<path className="path" d="M285 271l1 1-1-1z" fill="#a8a5a7" />
				<path
					className="path"
					d="M282 277c2.507-1.795 4.205-3.493 6-6-3.104 1.482-4.518 2.896-6 6z"
					fill="#443f43"
				/>
				<path className="path" d="M101 272l1 1-1-1z" fill="#464644" />
				<path className="path" d="M148 272l1 1-1-1z" fill="#7f7e7c" />
				<path className="path" d="M180 272l1 1-1-1z" fill="#a8a7a3" />
				<path className="path" d="M184 272l1 1-1-1z" fill="#928e8b" />
				<path
					className="path"
					d="M190 272c.684 2.209 1.08 2.703 3 4l-2 3c2.546 2.325 5.014 4.279 8 6 2.448-4.196 4.951-8.076 4-13-1.314.768-1.232.686-2 2-3.908-.372-7.237-.733-11-2z"
					fill="#898987"
				/>
				<path className="path" d="M208 272l1 1-1-1z" fill="#757471" />
				<path
					className="path"
					d="M209 272c-2.279 3.211-5.518 6.857-5.654 11-.113 3.464 2.171 6.891 3.45 10 3.265 7.933 6.844 15.607 11.204 23 8.351-4.154 17.192-8.851 25-14v-2c-12.508-7.979-22.875-18.377-34-28z"
					fill="#d4d5d1"
				/>
				<path className="path" d="M210 272l1 1-1-1z" fill="#64635f" />
				<path
					className="path"
					d="M277.333 272.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#8f8a8b"
				/>
				<path className="path" d="M284 272l1 1-1-1z" fill="#c9c7c8" />
				<path className="path" d="M287 272l1 1-1-1z" fill="#d1cfd1" />
				<path className="path" d="M99 273l1 1-1-1z" fill="#908e8c" />
				<path
					className="path"
					d="M103 273v2h2c-.545-1.635-.365-1.455-2-2z"
					fill="#4c4c4a"
				/>
				<path className="path" d="M149 273l1 1-1-1z" fill="#9c9b99" />
				<path className="path" d="M182 273l1 1-1-1z" fill="#77726f" />
				<path className="path" d="M185 273l1 1-1-1z" fill="#7a7675" />
				<path className="path" d="M207 273l1 1-1-1z" fill="#555354" />
				<path className="path" d="M211 273l1 1-1-1z" fill="#464541" />
				<path className="path" d="M286 273l1 1-1-1z" fill="#c4c2c4" />
				<path
					className="path"
					d="M98 274c.482 2.364.636 2.518 3 3-.973-1.27-1.73-2.027-3-3z"
					fill="#848280"
				/>
				<path className="path" d="M183 274l1 1-1-1z" fill="#948f8c" />
				<path className="path" d="M186 274l1 1-1-1z" fill="#656362" />
				<path className="path" d="M207 274l1 1-1-1z" fill="#a7a5a6" />
				<path className="path" d="M211 274l1 1-1-1z" fill="#9d9c9a" />
				<path
					className="path"
					d="M276 274v3c.696-1.554.696-1.446 0-3z"
					fill="#656161"
				/>
				<path className="path" d="M285 274l1 1-1-1z" fill="#a09da0" />
				<path className="path" d="M150 275l1 1-1-1z" fill="#646462" />
				<path className="path" d="M184 275l1 1-1-1z" fill="#a29d9f" />
				<path
					className="path"
					d="M189 276c1.543 1.267 2.048 1.489 4 2 0-1.797-.014-1.522-1-3-1.797 0-1.521.014-3 1z"
					fill="#9c9e98"
				/>
				<path className="path" d="M206 275l1 1-1-1z" fill="#838280" />
				<path className="path" d="M212 275l1 1-1-1z" fill="#827f7c" />
				<path className="path" d="M284 275l1 1-1-1z" fill="#a9a7a8" />
				<path
					className="path"
					d="M97 276l-1 2h2c0-1.853.3-1.35-1-2z"
					fill="#a2a09d"
				/>
				<path
					className="path"
					d="M147 276c1.299 2.763 2.553 4.164 5 6-1.299-2.763-2.553-4.164-5-6z"
					fill="#3d3c3b"
				/>
				<path className="path" d="M151 276l1 1-1-1z" fill="#868684" />
				<path className="path" d="M186 276l1 1-1-1z" fill="#676364" />
				<path className="path" d="M205 276l1 1-1-1z" fill="#5c5b57" />
				<path className="path" d="M213 276l1 1-1-1z" fill="#73726f" />
				<path
					className="path"
					d="M281 276l-3 4c2.143-1.131 3.099-1.568 3-4z"
					fill="#69696a"
				/>
				<path className="path" d="M283 276l1 1-1-1z" fill="#a9a7a9" />
				<path
					className="path"
					d="M95.333 277.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#d1d0ce"
				/>
				<path className="path" d="M101 277l1 1-1-1z" fill="#9b9a98" />
				<path className="path" d="M102 277l1 1-1-1z" fill="#5c5c5a" />
				<path className="path" d="M152 277l1 1-1-1z" fill="#9e9e9b" />
				<path className="path" d="M187 277l1 1-1-1z" fill="#7d7977" />
				<path className="path" d="M214 277l1 1-1-1z" fill="#5b5958" />
				<path
					className="path"
					d="M276 277v3c.696-1.554.696-1.446 0-3z"
					fill="#8f8c8c"
				/>
				<path className="path" d="M279 277l1 1-1-1z" fill="#d1d1d1" />
				<path className="path" d="M282 277l1 1-1-1z" fill="#c7c7c8" />
				<path className="path" d="M103 278l1 1-1-1z" fill="#696967" />
				<path className="path" d="M152 278l1 1-1-1z" fill="#484846" />
				<path className="path" d="M188 278l1 1-1-1z" fill="#888480" />
				<path className="path" d="M204 278l1 1-1-1z" fill="#6c6c69" />
				<path className="path" d="M215 278l1 1-1-1z" fill="#63605e" />
				<path className="path" d="M278 278l1 1-1-1z" fill="#cfcfcf" />
				<path className="path" d="M104 279l1 1-1-1z" fill="#71716f" />
				<path
					className="path"
					d="M126 279c1.012 6.855 4.395 13.066 5 20h2c-.56-6.859-2.564-14.626-7-20z"
					fill="#272525"
				/>
				<path className="path" d="M153 279l1 1-1-1z" fill="#636362" />
				<path className="path" d="M189 279l1 1-1-1z" fill="#908e8a" />
				<path className="path" d="M216 279l1 1-1-1z" fill="#686764" />
				<path className="path" d="M277 279l1 1-1-1z" fill="#d1d1d1" />
				<path className="path" d="M105 280l1 1-1-1z" fill="#787875" />
				<path className="path" d="M154 280l1 1-1-1z" fill="#7e7d7c" />
				<path className="path" d="M190 280l1 1-1-1z" fill="#969591" />
				<path className="path" d="M203 280l1 1-1-1z" fill="#7d7c78" />
				<path className="path" d="M217 280l1 1-1-1z" fill="#676664" />
				<path className="path" d="M276 280l1 1-1-1z" fill="#545255" />
				<path
					className="path"
					d="M277.667 280.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#b4b4b5"
				/>
				<path className="path" d="M106 281l1 1-1-1z" fill="#7b7b78" />
				<path className="path" d="M155 281l1 1-1-1z" fill="#949293" />
				<path className="path" d="M191 281l1 1-1-1z" fill="#9f9d99" />
				<path className="path" d="M218 281l1 1-1-1z" fill="#686765" />
				<path className="path" d="M276 281l1 1-1-1z" fill="#99989a" />
				<path className="path" d="M107 282l1 1-1-1z" fill="#81807d" />
				<path
					className="path"
					d="M152 282c1.432 3.378 3.159 5.681 6 8-1.013-3.838-2.39-6.218-6-8z"
					fill="#333132"
				/>
				<path className="path" d="M156 282l1 1-1-1z" fill="#a7a7a6" />
				<path className="path" d="M192 282l1 1-1-1z" fill="#a5a09f" />
				<path
					className="path"
					d="M200 282v4c1.073-1.883 1.084-2.137 0-4z"
					fill="#2b2b29"
				/>
				<path className="path" d="M202 282l1 1-1-1z" fill="#747371" />
				<path className="path" d="M219 282l1 1-1-1z" fill="#858482" />
				<path
					className="path"
					d="M275.333 282.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#8a898b"
				/>
				<path className="path" d="M108 283l1 1-1-1z" fill="#81817e" />
				<path className="path" d="M193 283l1 1-1-1z" fill="#a09c9a" />
				<path
					className="path"
					d="M202.333 283.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b6b6b4"
				/>
				<path className="path" d="M220 283l1 1-1-1z" fill="#a2a19f" />
				<path className="path" d="M221 283l1 1-1-1z" fill="#6e6e6c" />
				<path className="path" d="M109 284l1 1-1-1z" fill="#b8b7b5" />
				<path className="path" d="M157 284l1 1-1-1z" fill="#5c5b5a" />
				<path className="path" d="M194 284l1 1-1-1z" fill="#9b9796" />
				<path
					className="path"
					d="M199 284l-1 2h2c0-1.853.3-1.35-1-2z"
					fill="#5b5a58"
				/>
				<path
					className="path"
					d="M201 284c-.648 2.709-.942 5.216-1 8 1.545-2.774 2.48-5.137 1-8z"
					fill="#747472"
				/>
				<path className="path" d="M222 284l1 1-1-1z" fill="#5c5b59" />
				<path
					className="path"
					d="M274 284v3c.696-1.554.696-1.446 0-3z"
					fill="#5b5b59"
				/>
				<path className="path" d="M110 285l1 1-1-1z" fill="#babab9" />
				<path
					className="path"
					d="M157 285c1.567 7.535 10.136 16.269 16 21-2.06-7.411-9.937-16.36-16-21z"
					fill="#171715"
				/>
				<path className="path" d="M158 285l1 1-1-1z" fill="#6e6c6d" />
				<path className="path" d="M195 285l1 1-1-1z" fill="#8a8685" />
				<path
					className="path"
					d="M197 285l1 4c.553-2.008.303-2.332-1-4z"
					fill="#272422"
				/>
				<path className="path" d="M223 285l1 1-1-1z" fill="#605f5d" />
				<path className="path" d="M112 286l1 1-1-1z" fill="#484749" />
				<path className="path" d="M159 286l1 1-1-1z" fill="#888687" />
				<path className="path" d="M196 286l1 1-1-1z" fill="#6a6664" />
				<path
					className="path"
					d="M199 286c-.194 1.857-.21 3.153 0 5 .83-2.031.83-2.969 0-5z"
					fill="#3e3c3a"
				/>
				<path
					className="path"
					d="M202 286c.849 2.807 1.548 4.388 4 6-1.029-2.612-1.93-4.119-4-6z"
					fill="#3e3e3d"
				/>
				<path className="path" d="M203 286l1 1-1-1z" fill="#757574" />
				<path className="path" d="M224 286l1 1-1-1z" fill="#969592" />
				<path
					className="path"
					d="M225 286c1.248.685 1.548.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#52504d"
				/>
				<path
					className="path"
					d="M273 286c-1.012 2.373-1.622 4.449-2 7 1.836-2.308 2.797-4.111 2-7z"
					fill="#252626"
				/>
				<path className="path" d="M113 287l1 1-1-1z" fill="#555454" />
				<path className="path" d="M160 287l1 1-1-1z" fill="#9f9e9c" />
				<path className="path" d="M204 287l1 1-1-1z" fill="#a4a5a4" />
				<path
					className="path"
					d="M226.667 287.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#95908d"
				/>
				<path className="path" d="M228 287l1 1-1-1z" fill="#464341" />
				<path className="path" d="M274 287l1 1-1-1z" fill="#d0d1d0" />
				<path className="path" d="M114 288l1 1-1-1z" fill="#666362" />
				<path className="path" d="M197 288l1 1-1-1z" fill="#7f7a77" />
				<path
					className="path"
					d="M201 288c.225 2.996.552 4.249 3 6-.421-2.843-.939-4.012-3-6z"
					fill="#a8a8a8"
				/>
				<path className="path" d="M202 288l1 1-1-1z" fill="#737372" />
				<path className="path" d="M228 288l1 1-1-1z" fill="#7b7976" />
				<path
					className="path"
					d="M233 288c.406 2.092.217 2.02 2 3-.684-1.58-.805-1.777-2-3z"
					fill="#3c3b39"
				/>
				<path className="path" d="M115 289l1 1-1-1z" fill="#7b7a78" />
				<path className="path" d="M161 289l1 1-1-1z" fill="#4c4c4a" />
				<path className="path" d="M205 289l1 1-1-1z" fill="#a8a8a6" />
				<path className="path" d="M229 289l1 1-1-1z" fill="#4a4645" />
				<path className="path" d="M273 289l1 1-1-1z" fill="#9c9c9c" />
				<path className="path" d="M116 290l1 1-1-1z" fill="#aeadac" />
				<path className="path" d="M117 290l1 1-1-1z" fill="#525150" />
				<path
					className="path"
					d="M158 290c1.85 4.039 4.549 7.215 8 10-1.477-4.381-3.897-7.803-8-10z"
					fill="#323031"
				/>
				<path className="path" d="M162 290l1 1-1-1z" fill="#5f5f5e" />
				<path
					className="path"
					d="M198.333 290.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#635f5c"
				/>
				<path
					className="path"
					d="M202.333 290.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#c3c3c2"
				/>
				<path className="path" d="M205 290l1 1-1-1z" fill="#6f6f6e" />
				<path className="path" d="M229 290l1 1-1-1z" fill="#a3a09d" />
				<path className="path" d="M230 290l1 1-1-1z" fill="#42403e" />
				<path className="path" d="M117 291l1 1-1-1z" fill="#d4d4d4" />
				<path className="path" d="M118 291l1 1-1-1z" fill="#616161" />
				<path className="path" d="M163 291l1 1-1-1z" fill="#727474" />
				<path
					className="path"
					d="M199 291c-3.131 6.578-9.669 14.54-10.064 22-.138 2.613 1.552 4.632 2.342 7 .869 2.607.476 5.246.855 7.91.598 4.197 8.078 15.621 13.078 11.467 5.003-4.157 2.046-9.416.716-14.377-1.467-5.474-1.395-15.422 2.073-20-1.711-5.941-4.779-9.666-9-14z"
					fill="#151311"
				/>
				<path className="path" d="M230 291l1 1-1-1z" fill="#a2a19e" />
				<path className="path" d="M231 291l1 1-1-1z" fill="#52514f" />
				<path
					className="path"
					d="M233.667 291.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#757472"
				/>
				<path
					className="path"
					d="M268 291c-1.934 4.089-4.62 7.669-6 12 4.156-2.118 7.275-7.284 6-12z"
					fill="#403f3b"
				/>
				<path className="path" d="M272 291l1 1-1-1z" fill="#939191" />
				<path className="path" d="M119 292l1 1-1-1z" fill="#787777" />
				<path className="path" d="M164 292l1 1-1-1z" fill="#878988" />
				<path
					className="path"
					d="M200.333 292.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#343130"
				/>
				<path
					className="path"
					d="M204 292v4c.71-1.759.71-2.241 0-4z"
					fill="#868686"
				/>
				<path
					className="path"
					d="M205 292c1.061 5.969 3.965 11.781 7 17 .933-5.329-3.659-12.967-7-17z"
					fill="#282727"
				/>
				<path className="path" d="M206 292l1 1-1-1z" fill="#8d8d8d" />
				<path
					className="path"
					d="M232 292c1.248.685 1.549.749 3 1-1.248-.685-1.548-.749-3-1z"
					fill="#a4a3a0"
				/>
				<path className="path" d="M120 293l1 1-1-1z" fill="#c2c2c2" />
				<path className="path" d="M121 293l1 1-1-1z" fill="#4b4748" />
				<path className="path" d="M165 293l1 1-1-1z" fill="#a2a2a1" />
				<path
					className="path"
					d="M197.333 293.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#776f6f"
				/>
				<path
					className="path"
					d="M201.667 293.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#71716f"
				/>
				<path className="path" d="M206 293l1 1-1-1z" fill="#5c5d5c" />
				<path className="path" d="M235 293l1 1-1-1z" fill="#6b6a66" />
				<path className="path" d="M271 293l1 1-1-1z" fill="#b1afb0" />
				<path className="path" d="M122 294l1 1-1-1z" fill="#635f60" />
				<path className="path" d="M165 294l1 1-1-1z" fill="#414140" />
				<path className="path" d="M203 294l1 1-1-1z" fill="#676665" />
				<path className="path" d="M207 294l1 1-1-1z" fill="#acacac" />
				<path className="path" d="M236 294l1 1-1-1z" fill="#4a4947" />
				<path
					className="path"
					d="M238 297c1.015-1.139 1.309-1.612 2-3-2.203.994-2.048.67-2 3z"
					fill="#434240"
				/>
				<path className="path" d="M270 294l1 1-1-1z" fill="#5e5d5b" />
				<path className="path" d="M123 295l1 1-1-1z" fill="#b5b5b4" />
				<path className="path" d="M166 295l1 1-1-1z" fill="#5c5b5c" />
				<path
					className="path"
					d="M205 295c-.036 4.797 2.614 8.912 5 13 .712-4.255-2.344-9.712-5-13z"
					fill="#626060"
				/>
				<path className="path" d="M207 295l1 1-1-1z" fill="#767676" />
				<path
					className="path"
					d="M239 295v3c.696-1.554.696-1.446 0-3z"
					fill="#706f6c"
				/>
				<path className="path" d="M270 295l1 1-1-1z" fill="#cbcbca" />
				<path className="path" d="M125 296l1 1-1-1z" fill="#515150" />
				<path className="path" d="M167 296l1 1-1-1z" fill="#7b7a7a" />
				<path className="path" d="M196 296l1 1-1-1z" fill="#7c7676" />
				<path className="path" d="M237 296l1 1-1-1z" fill="#9e9d9b" />
				<path
					className="path"
					d="M240 296c.482 2.364.636 2.518 3 3-.973-1.27-1.73-2.027-3-3z"
					fill="#484443"
				/>
				<path className="path" d="M269 296l1 1-1-1z" fill="#babab9" />
				<path className="path" d="M126 297l1 1-1-1z" fill="#b3b3b2" />
				<path className="path" d="M168 297l1 1-1-1z" fill="#9a9a99" />
				<path className="path" d="M208 297l1 1-1-1z" fill="#898989" />
				<path className="path" d="M268 297l1 1-1-1z" fill="#aeadae" />
				<path className="path" d="M127 298l1 1-1-1z" fill="#d0d1cf" />
				<path className="path" d="M128 298l1 1-1-1z" fill="#5b5d57" />
				<path className="path" d="M168 298l1 1-1-1z" fill="#444" />
				<path className="path" d="M195 298l1 1-1-1z" fill="#605c5d" />
				<path className="path" d="M267 298l1 1-1-1z" fill="#737170" />
				<path className="path" d="M129 299l1 1-1-1z" fill="#aeaeae" />
				<path
					className="path"
					d="M166 299c1.383 4.068 3.533 6.498 7 9-1.613-3.809-3.721-6.484-7-9z"
					fill="#424242"
				/>
				<path className="path" d="M169 299l1 1-1-1z" fill="#616161" />
				<path className="path" d="M194 299l1 1-1-1z" fill="#908e8f" />
				<path className="path" d="M209 299l1 1-1-1z" fill="#929290" />
				<path
					className="path"
					d="M241.667 299.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#a4a09f"
				/>
				<path
					className="path"
					d="M243 299v3c.696-1.554.696-1.446 0-3z"
					fill="#636260"
				/>
				<path className="path" d="M267 299l1 1-1-1z" fill="#d1d1d0" />
				<path className="path" d="M130 300l1 1-1-1z" fill="#c1c0c1" />
				<path className="path" d="M131 300l1 1-1-1z" fill="#696766" />
				<path className="path" d="M170 300l1 1-1-1z" fill="#797979" />
				<path className="path" d="M266 300l1 1-1-1z" fill="#cac9c8" />
				<path className="path" d="M132 301l1 1-1-1z" fill="#a5a5a4" />
				<path className="path" d="M171 301l1 1-1-1z" fill="#8f8e8d" />
				<path className="path" d="M193 301l1 1-1-1z" fill="#6e6c6b" />
				<path className="path" d="M210 301l1 1-1-1z" fill="#939392" />
				<path className="path" d="M246 301l1 1-1-1z" fill="#706e6f" />
				<path
					className="path"
					d="M247 301v3c.696-1.554.696-1.446 0-3z"
					fill="#353334"
				/>
				<path className="path" d="M265 301l1 1-1-1z" fill="#c3c3c2" />
				<path className="path" d="M133 302l1 1-1-1z" fill="#cacac9" />
				<path className="path" d="M134 302l1 1-1-1z" fill="#8a8787" />
				<path className="path" d="M172 302l1 1-1-1z" fill="#a9a7a8" />
				<path className="path" d="M192 302l1 1-1-1z" fill="#9f9a97" />
				<path className="path" d="M242 302l1 1-1-1z" fill="#696966" />
				<path
					className="path"
					d="M246.333 302.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#e8e8e8"
				/>
				<path
					className="path"
					d="M256 302l1 5c.916-2.3.879-3.377-1-5z"
					fill="#393836"
				/>
				<path className="path" d="M264 302l1 1-1-1z" fill="#b9b9b8" />
				<path className="path" d="M135 303l1 1-1-1z" fill="#bcbbbb" />
				<path className="path" d="M136 303l1 1-1-1z" fill="#888688" />
				<path className="path" d="M192 303l1 1-1-1z" fill="#504c49" />
				<path className="path" d="M211 303l1 1-1-1z" fill="#9b9b99" />
				<path className="path" d="M240 303l1 1-1-1z" fill="#9e9d9b" />
				<path className="path" d="M241 303l1 1-1-1z" fill="#4e4d4b" />
				<path className="path" d="M245 303l1 1-1-1z" fill="#848382" />
				<path
					className="path"
					d="M253 303v3l2-1c-.545-1.635-.365-1.455-2-2z"
					fill="#2f302b"
				/>
				<path className="path" d="M256 303l1 1-1-1z" fill="#747371" />
				<path
					className="path"
					d="M262.667 303.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#bebebd"
				/>
				<path className="path" d="M137 304l1 1-1-1z" fill="#b8b5b7" />
				<path className="path" d="M138 304l1 1-1-1z" fill="#888687" />
				<path className="path" d="M173 304l1 1-1-1z" fill="#5c5b59" />
				<path className="path" d="M191 304l1 1-1-1z" fill="#74706d" />
				<path className="path" d="M211 304l1 1-1-1z" fill="#5d5d5b" />
				<path className="path" d="M239 304l1 1-1-1z" fill="#71706e" />
				<path className="path" d="M243 304l1 1-1-1z" fill="#656362" />
				<path className="path" d="M244 304l1 1-1-1z" fill="#a3a2a1" />
				<path className="path" d="M246 304l1 1-1-1z" fill="#b4b5b2" />
				<path
					className="path"
					d="M255 304c.545 1.635.365 1.455 2 2v-2h-2z"
					fill="#b8b7b6"
				/>
				<path className="path" d="M261 304l1 1-1-1z" fill="#9e9c9a" />
				<path className="path" d="M139 305l1 1-1-1z" fill="#bcbbbc" />
				<path className="path" d="M140 305l1 1-1-1z" fill="#7e7c7d" />
				<path
					className="path"
					d="M173 305v5c4.575 1.283 10.014 11.906 14 6-5.872-1.683-9.095-7.536-14-11z"
					fill="#2e2d2b"
				/>
				<path className="path" d="M174 305l1 1-1-1z" fill="#696865" />
				<path className="path" d="M190 305l1 1-1-1z" fill="#9a9692" />
				<path
					className="path"
					d="M206 305c2.416 3.75 4.437 7.242 8 10-1.573-4.297-3.463-8.502-8-10z"
					fill="#1f1e1b"
				/>
				<path className="path" d="M237 305l1 1-1-1z" fill="#878684" />
				<path className="path" d="M238 305l1 1-1-1z" fill="#424240" />
				<path className="path" d="M241 305l1 1-1-1z" fill="#4b4a47" />
				<path className="path" d="M242 305l1 1-1-1z" fill="#a09e9d" />
				<path
					className="path"
					d="M246 305l-1 5c1.808-1.964 2.204-2.598 1-5z"
					fill="#3f3f3b"
				/>
				<path className="path" d="M250 305l1 1-1-1z" fill="#626160" />
				<path className="path" d="M254 305l1 1-1-1z" fill="#81807d" />
				<path className="path" d="M260 305l1 1-1-1z" fill="#93908e" />
				<path className="path" d="M141 306l1 1-1-1z" fill="silver" />
				<path className="path" d="M142 306l1 1-1-1z" fill="#6d6d6c" />
				<path className="path" d="M175 306l1 1-1-1z" fill="#81817f" />
				<path
					className="path"
					d="M190 306l-5 10c3.854-1.123 6.375-6.224 5-10z"
					fill="#363536"
				/>
				<path
					className="path"
					d="M206 306v9c2.017-3.112 3.213-6.457 0-9z"
					fill="#5b5652"
				/>
				<path className="path" d="M212 306l1 1-1-1z" fill="#696967" />
				<path className="path" d="M235 306l1 1-1-1z" fill="#8c8c8a" />
				<path className="path" d="M236 306l1 1-1-1z" fill="#4b4a48" />
				<path className="path" d="M240 306l1 1-1-1z" fill="#949491" />
				<path className="path" d="M248 306l1 1-1-1z" fill="#4b4a46" />
				<path
					className="path"
					d="M249 306c.031 1.832-.079 1.559 1 3-.251-1.452-.315-1.752-1-3z"
					fill="#ebebeb"
				/>
				<path className="path" d="M250 306l1 1-1-1z" fill="#b7b6b6" />
				<path className="path" d="M253 306l1 1-1-1z" fill="#7a7876" />
				<path className="path" d="M259 306l1 1-1-1z" fill="#8c8987" />
				<path className="path" d="M144 307l1 1-1-1z" fill="#747472" />
				<path className="path" d="M176 307l1 1-1-1z" fill="#7b7a79" />
				<path className="path" d="M189 307l1 1-1-1z" fill="#7c7775" />
				<path className="path" d="M233 307l1 1-1-1z" fill="#878686" />
				<path
					className="path"
					d="M217 316v5c7.115-5.007 12.831-9.604 21-13-7.784-2.693-13.938 6.815-21 8z"
					fill="#272726"
				/>
				<path className="path" d="M238 307l1 1-1-1z" fill="#a2a19f" />
				<path className="path" d="M245 307l1 1-1-1z" fill="#8e8d8a" />
				<path
					className="path"
					d="M250 307v2h2c-.545-1.635-.365-1.455-2-2z"
					fill="#5b5a58"
				/>
				<path className="path" d="M252 307l1 1-1-1z" fill="#696967" />
				<path
					className="path"
					d="M257.667 307.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#d2d1d1"
				/>
				<path
					className="path"
					d="M144.667 308.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#e1e0e0"
				/>
				<path className="path" d="M146 308l1 1-1-1z" fill="#878481" />
				<path className="path" d="M177 308l1 1-1-1z" fill="#81817f" />
				<path className="path" d="M188 308l1 1-1-1z" fill="#afaaa7" />
				<path
					className="path"
					d="M211 308c.547 1.875 1.11 3.255 2 5 .375-2.419-.307-3.218-2-5z"
					fill="#6a6967"
				/>
				<path className="path" d="M213 308l1 1-1-1z" fill="#6a6a68" />
				<path className="path" d="M231 308l1 1-1-1z" fill="#7d7d7b" />
				<path className="path" d="M236 308l1 1-1-1z" fill="#afafae" />
				<path className="path" d="M149 309l1 1-1-1z" fill="#6e6969" />
				<path
					className="path"
					d="M174 309c.936 1.949 1.392 2.55 3 4-.936-1.949-1.392-2.55-3-4z"
					fill="#403f3b"
				/>
				<path className="path" d="M178 309l1 1-1-1z" fill="#7b7b78" />
				<path className="path" d="M188 309l1 1-1-1z" fill="#5f5957" />
				<path
					className="path"
					d="M213 309c.547 1.875 1.11 3.255 2 5 .375-2.419-.307-3.218-2-5z"
					fill="#323230"
				/>
				<path className="path" d="M214 309l1 1-1-1z" fill="#9f9f9d" />
				<path className="path" d="M229 309l1 1-1-1z" fill="#7e7d7a" />
				<path className="path" d="M244 309l1 1-1-1z" fill="#bfbebc" />
				<path className="path" d="M151 310l1 1-1-1z" fill="#afadad" />
				<path className="path" d="M179 310l1 1-1-1z" fill="#929290" />
				<path className="path" d="M187 310l1 1-1-1z" fill="#8d8986" />
				<path
					className="path"
					d="M208.333 310.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#dededc"
				/>
				<path className="path" d="M209 310l1 1-1-1z" fill="#757572" />
				<path className="path" d="M226 310l1 1-1-1z" fill="#a5a2a1" />
				<path className="path" d="M153 311l1 1-1-1z" fill="#cccbcc" />
				<path
					className="path"
					d="M154.667 311.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#4b494a"
				/>
				<path className="path" d="M180 311l1 1-1-1z" fill="#9c9b99" />
				<path className="path" d="M215 311l1 1-1-1z" fill="#8d8d8b" />
				<path className="path" d="M225 311l1 1-1-1z" fill="#706c6b" />
				<path className="path" d="M230 311l1 1-1-1z" fill="#c4c2c1" />
				<path className="path" d="M156 312l1 1-1-1z" fill="#a8a7a5" />
				<path
					className="path"
					d="M157.667 312.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#323132"
				/>
				<path
					className="path"
					d="M177 312c1.185 3.057 2.482 4.904 5 7-1.086-3.199-2.348-4.911-5-7z"
					fill="#5b5855"
				/>
				<path className="path" d="M186 312l1 1-1-1z" fill="#706d6b" />
				<path className="path" d="M207 312l1 1-1-1z" fill="#8a8780" />
				<path className="path" d="M210 312l1 1-1-1z" fill="#969593" />
				<path className="path" d="M223 312l1 1-1-1z" fill="#989795" />
				<path className="path" d="M227 312l1 1-1-1z" fill="#605f5e" />
				<path className="path" d="M228 312l1 1-1-1z" fill="#bebdbc" />
				<path className="path" d="M158 313l1 1-1-1z" fill="#c8c7c8" />
				<path
					className="path"
					d="M159.667 313.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#5a5a5a"
				/>
				<path className="path" d="M181 313l1 1-1-1z" fill="#656462" />
				<path className="path" d="M185 313l1 1-1-1z" fill="#9e9d99" />
				<path
					className="path"
					d="M207 313v3c.696-1.554.696-1.446 0-3z"
					fill="#bbb8b5"
				/>
				<path className="path" d="M211 313l1 1-1-1z" fill="#c5c4c4" />
				<path
					className="path"
					d="M214 313c.427 2.645.821 3.461 3 5-.749-2.254-1.344-3.314-3-5z"
					fill="#63635e"
				/>
				<path className="path" d="M216 313l1 1-1-1z" fill="#7c7b79" />
				<path className="path" d="M222 313l1 1-1-1z" fill="#777674" />
				<path className="path" d="M225 313l1 1-1-1z" fill="#494846" />
				<path className="path" d="M226 313l1 1-1-1z" fill="#a4a3a2" />
				<path className="path" d="M161 314l1 1-1-1z" fill="#9c9c9c" />
				<path className="path" d="M162 314l1 1-1-1z" fill="#6e6d6d" />
				<path className="path" d="M182 314l1 1-1-1z" fill="#82827e" />
				<path className="path" d="M212 314l1 1-1-1z" fill="#888886" />
				<path
					className="path"
					d="M216.333 314.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3b3b36"
				/>
				<path className="path" d="M221 314l1 1-1-1z" fill="#5f5e5c" />
				<path className="path" d="M224 314l1 1-1-1z" fill="#868584" />
				<path className="path" d="M225 314l1 1-1-1z" fill="#d2d2d1" />
				<path
					className="path"
					d="M163.667 315.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#8c8a8a"
				/>
				<path className="path" d="M165 315l1 1-1-1z" fill="#504d4d" />
				<path
					className="path"
					d="M183.667 315.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#666664"
				/>
				<path className="path" d="M188 315l1 1-1-1z" fill="#80807e" />
				<path
					className="path"
					d="M205 315v9c1.256-2.994 1.256-6.006 0-9z"
					fill="#4f4847"
				/>
				<path
					className="path"
					d="M206.333 315.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#736d6b"
				/>
				<path className="path" d="M213 315l1 1-1-1z" fill="#8e8d8a" />
				<path className="path" d="M217 315l1 1-1-1z" fill="#7b7a76" />
				<path className="path" d="M219 315l1 1-1-1z" fill="#a6a5a3" />
				<path className="path" d="M223 315l1 1-1-1z" fill="#9b9a99" />
				<path className="path" d="M166 316l1 1-1-1z" fill="#9d9b9b" />
				<path className="path" d="M167 316l1 1-1-1z" fill="#5a5859" />
				<path className="path" d="M187 316l1 1-1-1z" fill="#666" />
				<path
					className="path"
					d="M188 316c-3.933 6.503-1.465 8.909 2 15 2.003-4.773 1.571-11.189-2-15z"
					fill="#fff"
				/>
				<path className="path" d="M189 316l1 1-1-1z" fill="#8c8c8b" />
				<path className="path" d="M218 316l1 1-1-1z" fill="#94928f" />
				<path className="path" d="M219 316l1 1-1-1z" fill="#4a4947" />
				<path className="path" d="M222 316l1 1-1-1z" fill="#a5a4a3" />
				<path className="path" d="M168 317l1 1-1-1z" fill="#a6a6a6" />
				<path className="path" d="M169 317l1 1-1-1z" fill="#4b4b49" />
				<path className="path" d="M187 317l1 1-1-1z" fill="#cfcfcf" />
				<path className="path" d="M190 317l1 1-1-1z" fill="#403e3f" />
				<path
					className="path"
					d="M206 317v5c.83-2.031.83-2.97 0-5z"
					fill="#aaa4a1"
				/>
				<path className="path" d="M215 317l1 1-1-1z" fill="#9c9b97" />
				<path className="path" d="M221 317l1 1-1-1z" fill="#acacab" />
				<path className="path" d="M170 318l1 1-1-1z" fill="#919090" />
				<path
					className="path"
					d="M182.333 318.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#858280"
				/>
				<path className="path" d="M186 318l1 1-1-1z" fill="#cdcdcc" />
				<path className="path" d="M190 318l1 1-1-1z" fill="#9a999a" />
				<path
					className="path"
					d="M216 318v3c.696-1.554.696-1.446 0-3z"
					fill="#9e9c9a"
				/>
				<path className="path" d="M220 318l1 1-1-1z" fill="#acabaa" />
				<path className="path" d="M171 319l1 1-1-1z" fill="#d3d3d2" />
				<path className="path" d="M172 319l1 1-1-1z" fill="#6f6e6b" />
				<path
					className="path"
					d="M183 319v3l2-1c-.545-1.635-.365-1.455-2-2z"
					fill="#dbdbdb"
				/>
				<path className="path" d="M184 319l1 1-1-1z" fill="#525051" />
				<path className="path" d="M185 319l1 1-1-1z" fill="#c8c7c7" />
				<path className="path" d="M191 319l1 1-1-1z" fill="#6c6b6c" />
				<path className="path" d="M219 319l1 1-1-1z" fill="#a6a4a4" />
				<path className="path" d="M173 320l1 1-1-1z" fill="#cececd" />
				<path className="path" d="M174 320l1 1-1-1z" fill="#454642" />
				<path
					className="path"
					d="M191 320v11c1.431-3.41 1.431-7.59 0-11z"
					fill="#a5a5a6"
				/>
				<path className="path" d="M218 320l1 1-1-1z" fill="#979594" />
				<path className="path" d="M175 321l1 1-1-1z" fill="#7f807c" />
				<path
					className="path"
					d="M216 321v2c1.635-.545 1.455-.365 2-2h-2z"
					fill="#45423d"
				/>
				<path className="path" d="M218 321l1 1-1-1z" fill="#cbcac9" />
				<path className="path" d="M176 322l1 1-1-1z" fill="#cac9c8" />
				<path className="path" d="M177 322l1 1-1-1z" fill="#444241" />
				<path className="path" d="M184 322l1 1-1-1z" fill="#d3d3d3" />
				<path
					className="path"
					d="M206.333 322.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#7d7970"
				/>
				<path
					className="path"
					d="M215 322l-1 4c1.627-1.717 1.954-1.899 1-4z"
					fill="#999895"
				/>
				<path className="path" d="M217 322l1 1-1-1z" fill="#b3b2b0" />
				<path className="path" d="M178 323l1 1-1-1z" fill="#7a7778" />
				<path className="path" d="M184 323l1 1-1-1z" fill="#565555" />
				<path
					className="path"
					d="M207 323v3c.696-1.554.696-1.446 0-3z"
					fill="#dbd9d7"
				/>
				<path className="path" d="M179 324l1 1-1-1z" fill="#afafaf" />
				<path className="path" d="M185 324l1 1-1-1z" fill="#9a9a9a" />
				<path
					className="path"
					d="M206.333 324.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5d5a52"
				/>
				<path className="path" d="M180 325l1 1-1-1z" fill="#b5b3b2" />
				<path className="path" d="M186 325l1 1-1-1z" fill="#c6c6c5" />
				<path
					className="path"
					d="M213 325v3l2-1c-.545-1.635-.365-1.455-2-2z"
					fill="#b6b6b3"
				/>
				<path className="path" d="M181 326l1 1-1-1z" fill="#b7b7b5" />
				<path className="path" d="M187 326l1 1-1-1z" fill="#d2d2d2" />
				<path
					className="path"
					d="M206.333 326.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#2d2b26"
				/>
				<path
					className="path"
					d="M207.333 326.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#5e5a55"
				/>
				<path
					className="path"
					d="M208 326v3c.696-1.554.696-1.446 0-3z"
					fill="#e2e1e0"
				/>
				<path className="path" d="M182 327l1 1-1-1z" fill="#b5b5b4" />
				<path className="path" d="M187 327l1 1-1-1z" fill="#6a6a6a" />
				<path
					className="path"
					d="M212 327v3l2-1c-.545-1.635-.365-1.455-2-2z"
					fill="#d6d6d3"
				/>
				<path className="path" d="M183 328l1 1-1-1z" fill="#b4b4b3" />
				<path className="path" d="M188 328l1 1-1-1z" fill="#b6b5b7" />
				<path
					className="path"
					d="M207.333 328.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#39362f"
				/>
				<path className="path" d="M184 329l1 1-1-1z" fill="#b4b3b3" />
				<path className="path" d="M189 329l1 1-1-1z" fill="#cbcbcd" />
				<path className="path" d="M208 329l1 1-1-1z" fill="#96938e" />
				<path
					className="path"
					d="M209 329v6c.951-2.285.951-3.715 0-6z"
					fill="#dfdede"
				/>
				<path className="path" d="M185 330l1 1-1-1z" fill="#989797" />
				<path className="path" d="M189 330l1 1-1-1z" fill="#7f7f81" />
				<path
					className="path"
					d="M208.333 330.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#443f3c"
				/>
				<path className="path" d="M186 331l1 1-1-1z" fill="#4a4a49" />
				<path
					className="path"
					d="M190.667 331.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#d4d4d5"
				/>
				<path className="path" d="M192 331l1 1-1-1z" fill="#949496" />
				<path className="path" d="M193 331l1 1-1-1z" fill="#545555" />
				<path className="path" d="M186 332l1 1-1-1z" fill="#cececd" />
				<path className="path" d="M190 332l1 1-1-1z" fill="#7b7c7d" />
				<path className="path" d="M193 332l1 1-1-1z" fill="#c3c3c3" />
				<path
					className="path"
					d="M191 333l-1 6c2.093-1.824 2.039-3.471 1-6z"
					fill="#7a7a79"
				/>
				<path className="path" d="M194 333l1 1-1-1z" fill="#888986" />
				<path className="path" d="M188 334l1 1-1-1z" fill="#6c6c6a" />
				<path className="path" d="M195 334l1 1-1-1z" fill="#70726e" />
				<path className="path" d="M208 334l1 1-1-1z" fill="#5e5a59" />
				<path className="path" d="M188 335l1 1-1-1z" fill="#d5d5d4" />
				<path className="path" d="M196 335l1 1-1-1z" fill="#696966" />
				<path
					className="path"
					d="M189.333 336.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#dcdcdb"
				/>
				<path className="path" d="M197 336l1 1-1-1z" fill="#595957" />
				<path className="path" d="M207 336l1 1-1-1z" fill="#797573" />
				<path className="path" d="M198 338l1 1-1-1z" fill="#9c9c9b" />
				<path className="path" d="M206 338l1 1-1-1z" fill="#959592" />
				<path
					className="path"
					d="M190.667 339.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#c8c8c7"
				/>
				<path className="path" d="M199 339l1 1-1-1z" fill="#949491" />
				<path className="path" d="M205 339l1 1-1-1z" fill="#5a5957" />
				<path className="path" d="M200 340l1 1-1-1z" fill="#858482" />
				<path className="path" d="M205 340l1 1-1-1z" fill="#b5b4b3" />
				<path
					className="path"
					d="M201 341c1.506.683 2.315.826 4 1-1.506-.683-2.315-.826-4-1z"
					fill="#989896"
				/>
				<path className="path" d="M100 342l1 1-1-1z" fill="#dbb6b6" />
				<path className="path" d="M101 342l1 1-1-1z" fill="#909066" />
				<path className="path" d="M102 342l1 1-1-1z" fill="#3a3a00" />
				<path
					className="path"
					d="M103 342v16c1.812-4.319 1.812-11.681 0-16z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M104 342v15c1.74-4.148 1.74-10.852 0-15z"
					fill="#dbffff"
				/>
				<path className="path" d="M231 342l1 1-1-1z" fill="#dbb6b6" />
				<path className="path" d="M232 342l1 1-1-1z" fill="#906666" />
				<path
					className="path"
					d="M233 342c-2.418.722-4.472.948-7 1 1.248.685 1.548.749 3 1v20c-.008 3.787.348 6.829-3 9 2.613 1.098 5.165.993 8 1 .765-7.167.266-14.792.035-22-.109-3.437.304-6.808-1.035-10z"
				/>
				<path
					className="path"
					d="M234 342v14c1.667-3.972 1.667-10.028 0-14z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M235 342v13c1.591-3.791 1.591-9.209 0-13z"
					fill="#dbffff"
				/>
				<path
					className="path"
					d="M297.667 342.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#b6b690"
				/>
				<path className="path" d="M299 342l1 1-1-1z" fill="#666" />
				<path className="path" d="M300 342l1 1-1-1z" fill="#3a3a00" />
				<path
					className="path"
					d="M301 342c-2.418.722-4.472.948-7 1 1.248.685 1.548.749 3 1v20c-.008 3.787.349 6.829-3 9 3.163 1.327 6.586 1 10 1-5.365-9.647 1.136-22.144-3-32z"
				/>
				<path
					className="path"
					d="M302 342v31c1.328-3.166 1-6.581 1-10 0-6.42 1.497-15.049-1-21z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M303 342v21c2.153-5.131 2.153-15.869 0-21z"
					fill="#dbffff"
				/>
				<path
					className="path"
					d="M66 343v4c.71-1.759.71-2.241 0-4z"
					fill="#b66600"
				/>
				<path
					className="path"
					d="M67 343v8c2.716-3.541 4.445-6.061 9-7v29h-4c4.724 1.982 10.91 1 16 1-1.769-.779-3.036-.912-5-1v-29c4.406.897 6.52 2.754 8 7 1.098-2.613.993-5.165 1-8H67z"
				/>
				<path
					className="path"
					d="M92.333 343.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#0066b6"
				/>
				<path className="path" d="M94 343l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M95 343c1.248.685 1.548.749 3 1v20c-.008 3.787.349 6.829-3 9 3.432 1.44 7.3 1 11 1-1.248-.685-1.548-.749-3-1v-30h-8z"
				/>
				<path className="path" d="M152 343l1 1-1-1z" fill="#ffdb90" />
				<path
					className="path"
					d="M153 343c1.769.779 3.036.912 5 1v29h-5c5.771 2.422 18.433 2.202 23.891-1.14 8.116-4.968 1.917-12.623-4.891-13.86 5.518-2.77 12.026-10.168 2.956-13.736C168.415 341.691 159.897 343 153 343z"
				/>
				<path className="path" d="M172 343l1 1-1-1z" fill="#003a3a" />
				<path className="path" d="M173 343l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M174 343l1 1-1-1z" fill="#9090b6" />
				<path
					className="path"
					d="M225 343l1 1-1-1m68 0l1 1-1-1z"
					fill="#ffdb90"
				/>
				<path className="path" d="M72 344l1 1-1-1z" fill="#6690b6" />
				<path
					className="path"
					d="M75 344v29c2.292-5.462 1-13.113 1-19 0-3.419.328-6.834-1-10z"
					fill="#ffb666"
				/>
				<path
					className="path"
					d="M83 344v29c2.292-5.462 1-13.113 1-19 0-3.419.328-6.834-1-10z"
					fill="#66b6ff"
				/>
				<path className="path" d="M86 344l1 1-1-1z" fill="#b69066" />
				<path
					className="path"
					d="M97 344v29c2.292-5.462 1-13.113 1-19 0-3.419.328-6.834-1-10z"
					fill="#db903a"
				/>
				<path
					className="path"
					d="M156 344v29c2.292-5.462 1-13.113 1-19 0-3.419.328-6.834-1-10z"
					fill="#ffdb90"
				/>
				<path
					className="path"
					d="M157 344v29c1.328-3.166 1-6.581 1-10 0-5.887 1.292-13.538-1-19z"
					fill="#3a0000"
				/>
				<path
					className="path"
					d="M164 344v13c1.591-3.791 1.591-9.209 0-13z"
					fill="#3a90db"
				/>
				<path
					className="path"
					d="M165 344v13a6.51 6.51 0 000-13z"
					fill="#fff"
				/>
				<path className="path" d="M169 344l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M170 344l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M176 344l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M177 344l1 1-1-1z" fill="#b6dbff" />
				<path
					className="path"
					d="M228 344v29c1.328-3.166 1-6.581 1-10 0-5.887 1.292-13.538-1-19z"
					fill="#b66600"
				/>
				<path
					className="path"
					d="M296 344v29c2.292-5.462 1-13.113 1-19 0-3.419.328-6.834-1-10z"
					fill="#db903a"
				/>
				<path className="path" d="M70 345l1 1-1-1z" fill="#006" />
				<path className="path" d="M71 345l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M87 345l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M88 345l1 1-1-1z" fill="#663a00" />
				<path
					className="path"
					d="M92 345v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M93 345v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#dbffff"
				/>
				<path className="path" d="M171 345l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M178 345l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M70 346l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M88 346l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M89 346l1 1-1-1z" fill="#600" />
				<path
					className="path"
					d="M171 346v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#ffffdb"
				/>
				<path
					className="path"
					d="M172.333 346.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#600"
				/>
				<path className="path" d="M179 346l1 1-1-1z" fill="#90dbff" />
				<path
					className="path"
					d="M65 347v6c.951-2.285.951-3.715 0-6z"
					fill="#ffffdb"
				/>
				<path
					className="path"
					d="M66 347v6c.951-2.285.951-3.715 0-6z"
					fill="#903a00"
				/>
				<path className="path" d="M69 347l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M89 347l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M179 347l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M68 348l1 1-1-1z" fill="#006" />
				<path className="path" d="M69 348l1 1-1-1z" fill="#b6ffff" />
				<path
					className="path"
					d="M90 348l1 1-1-1m82 0v5c.83-2.031.83-2.97 0-5z"
					fill="#903a00"
				/>
				<path
					className="path"
					d="M180 348v4c.71-1.759.71-2.241 0-4z"
					fill="#66b6ff"
				/>
				<path className="path" d="M68 349l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M90 349l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M68 350l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M90 350l1 1-1-1z" fill="#ffdb90" />
				<path
					className="path"
					d="M67.333 351.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#0066b6"
				/>
				<path
					className="path"
					d="M91.333 351.667c-.055.055-.11 1.111.334.666.055-.055.11-1.111-.334-.666z"
					fill="#b66600"
				/>
				<path className="path" d="M179 352l1 1-1-1z" fill="#006" />
				<path className="path" d="M180 352l1 1-1-1z" fill="#b6ffff" />
				<path
					className="path"
					d="M172.333 353.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3a0000"
				/>
				<path className="path" d="M179 353l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M107 354l1 1-1-1z" fill="#dbb690" />
				<path className="path" d="M108 354l1 1-1-1z" fill="#663a3a" />
				<path
					className="path"
					d="M107 355c4.379 4.012 6.771 14.259 1 18 3.432 1.44 7.3 1 11 1-1.248-.685-1.548-.749-3-1 0-7.557 2.257-20.065-9-18z"
				/>
				<path className="path" d="M112 354l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M113 354l1 1-1-1z" fill="#90b6db" />
				<path className="path" d="M127 354l1 1-1-1z" fill="#b69066" />
				<path className="path" d="M128 354l1 1-1-1z" fill="#3a3a00" />
				<path
					className="path"
					d="M133 374c-4.364-2.919-5.571-5.796-6-11h12c-1.031-3.937-2.324-6.163-6-8l1 7h-7c.726-3.573 1.758-5.302 5-7-7.283-2.118-11.697 6.816-9.258 12.981 1.762 4.454 5.939 5.627 10.258 6.019z"
				/>
				<path className="path" d="M132 354l1 1-1-1z" fill="#3a3a3a" />
				<path className="path" d="M133 354l1 1-1-1z" fill="#6690b6" />
				<path className="path" d="M171 354l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M178 354l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M189 354l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M190 354l1 1-1-1z" fill="#909066" />
				<path className="path" d="M191 354l1 1-1-1z" fill="#3a3a3a" />
				<path
					className="path"
					d="M192 354c3.676 2.461 6.016 4.934 3 9 4.049 7.482-5.94 9.339-3 1-3.905.797-10.5 6.533-3.772 9.215 2.632 1.048 5.155-.617 7.772-.72 3.189-.126 5.74 1.056 9 .505v-2c-4.453-4.361-.763-10.026-4.028-14.436-1.895-2.559-6.14-2.44-8.972-2.564z"
				/>
				<path className="path" d="M197 354l1 1-1-1z" fill="#003a3a" />
				<path className="path" d="M198 354l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M199 354l1 1-1-1z" fill="#6690b6" />
				<path className="path" d="M200 354l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M214 354l1 1-1-1z" fill="#b69066" />
				<path
					className="path"
					d="M215 354v5c.83-2.031.83-2.97 0-5z"
					fill="#00003a"
				/>
				<path
					className="path"
					d="M216 354v3c.696-1.554.696-1.446 0-3z"
					fill="#90dbff"
				/>
				<path className="path" d="M219 354l1 1-1-1z" fill="#90663a" />
				<path
					className="path"
					d="M219 355c1.233 1.972 1.126 3.843 2 6h2c.849-3.804.156-6.068-4-6z"
				/>
				<path className="path" d="M222 354l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M237 354l1 1-1-1z" fill="#b6663a" />
				<path
					className="path"
					d="M238 354c3.785 5.243 4.901 14.2 0 19 6.071 1.589 9.584-5.711 8.757-10.999-.753-4.808-4.355-7.11-8.757-8.001z"
				/>
				<path className="path" d="M241 354l1 1-1-1z" fill="#003a3a" />
				<path className="path" d="M242 354l1 1-1-1z" fill="#66b6db" />
				<path className="path" d="M255 354l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M256 354l1 1-1-1z" fill="#909066" />
				<path className="path" d="M257 354l1 1-1-1z" fill="#3a3a3a" />
				<path
					className="path"
					d="M258 354c3.676 2.461 6.016 4.934 3 9 4.049 7.482-5.94 9.339-3 1-3.905.797-10.5 6.533-3.772 9.215 2.632 1.048 5.155-.617 7.772-.72 3.189-.126 5.739 1.056 9 .505v-2c-4.453-4.361-.763-10.026-4.028-14.436-1.894-2.559-6.14-2.44-8.972-2.564z"
				/>
				<path className="path" d="M263 354l1 1-1-1z" fill="#003a3a" />
				<path className="path" d="M264 354l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M265 354l1 1-1-1z" fill="#6690b6" />
				<path className="path" d="M266 354l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M281 354l1 1-1-1z" fill="#b69066" />
				<path className="path" d="M282 354l1 1-1-1z" fill="#3a3a3a" />
				<path
					className="path"
					d="M286 374c-5.81-4.983-8.225-16.324 1-19-7.462-2.646-14.104 5.86-11.257 12.956 1.715 4.274 6.152 5.426 10.257 6.044z"
				/>
				<path className="path" d="M287 354l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M288 354l1 1-1-1z" fill="#90b6db" />
				<path
					className="path"
					d="M106 355l-1 2c1.263-.971 1.392-.694 1-2z"
					fill="#903a00"
				/>
				<path className="path" d="M114 355l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M125 355l1 1-1-1z" fill="#db9066" />
				<path className="path" d="M129 355l1 1-1-1z" fill="#90dbff" />
				<path
					className="path"
					d="M130 355c-.722 2.418-.948 4.472-1 7h3c-.083-2.908-.241-4.692-2-7z"
					fill="#fff"
				/>
				<path className="path" d="M131 355l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M132 355l1 1-1-1z" fill="#600" />
				<path className="path" d="M135 355l1 1-1-1z" fill="#6690b6" />
				<path className="path" d="M171 355l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M177 355l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M187 355l1 1-1-1z" fill="#dbb690" />
				<path className="path" d="M188 355l1 1-1-1z" fill="#663a00" />
				<path
					className="path"
					d="M186 357c1.154 2.249 1.751 2.846 4 4 .644-2.106.906-3.795 1-6-1.875.547-3.255 1.11-5 2z"
				/>
				<path className="path" d="M191 355l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M195 355l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M201 355l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M207 355l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M208 355c1.248.685 1.548.749 3 1 0 5.231 1.86 13.849-3 17 3.432 1.44 7.3 1 11 1-1.248-.685-1.548-.749-3-1 0-6.106-.235-11.946-1-18h-7z"
				/>
				<path className="path" d="M217 355l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M218 355l1 1-1-1z" fill="#600" />
				<path className="path" d="M223 355l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M235 355l1 1-1-1z" fill="#dbdb90" />
				<path className="path" d="M236 355l1 1-1-1z" fill="#3a3a3a" />
				<path
					className="path"
					d="M237 355l-1 2c1.263-.971 1.392-.694 1-2z"
					fill="#90dbff"
				/>
				<path
					className="path"
					d="M238 355c-2.601 4.874-4.011 14.386 1 18 1.533-5.187 2.385-13.531-1-18z"
					fill="#fff"
				/>
				<path className="path" d="M239 355l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M243 355l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M244 355l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M253 355l1 1-1-1z" fill="#dbb690" />
				<path className="path" d="M254 355l1 1-1-1z" fill="#663a00" />
				<path
					className="path"
					d="M252 357c1.154 2.249 1.751 2.846 4 4 .644-2.106.906-3.795 1-6-1.875.547-3.255 1.11-5 2z"
				/>
				<path className="path" d="M257 355l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M261 355l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M267 355l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M279 355l1 1-1-1z" fill="#b6663a" />
				<path className="path" d="M283 355l1 1-1-1z" fill="#90b6db" />
				<path
					className="path"
					d="M286.333 355.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#ffdbb6"
				/>
				<path
					className="path"
					d="M287.333 355.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#903a00"
				/>
				<path
					className="path"
					d="M288 355c-.592 2.688-.675 4.341 0 7h2c.903-3.337.859-4.935-2-7z"
				/>
				<path className="path" d="M289 355l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M290 355l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M306 355l1 1-1-1z" fill="#903a00" />
				<path
					className="path"
					d="M307 355c3.001 1.71 5.629 1.355 9 1-2.89-1.213-5.874-.998-9-1z"
				/>
				<path className="path" d="M316 355l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M106 356l1 1-1-1z" fill="#3a66b6" />
				<path
					className="path"
					d="M107 356c-2.595 5.392-2 11.132-2 17h4v-17h-2z"
					fill="#fff"
				/>
				<path className="path" d="M109 356l1 1-1-1z" fill="#dbb666" />
				<path className="path" d="M115 356l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M124 356l1 1-1-1z" fill="#903a00" />
				<path
					className="path"
					d="M128.333 356.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#66b6ff"
				/>
				<path
					className="path"
					d="M132.333 356.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#ffdb90"
				/>
				<path className="path" d="M136 356l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M169 356l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M170 356l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M175 356l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M186 356l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M191 356l1 3c.401-1.766.289-1.557-1-3z"
					fill="#90dbff"
				/>
				<path className="path" d="M196 356l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M202 356l1 1-1-1z" fill="#3a90db" />
				<path
					className="path"
					d="M209 356v17c1.883-4.486 1.883-12.514 0-17z"
					fill="#ffffdb"
				/>
				<path
					className="path"
					d="M210 356v17c1.883-4.486 1.883-12.514 0-17z"
					fill="#903a00"
				/>
				<path className="path" d="M217 356l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M218 356l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M219 356l1 1-1-1z" fill="#dbffdb" />
				<path className="path" d="M220 356l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M224 356l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M234 356l1 1-1-1z" fill="#003a3a" />
				<path className="path" d="M235 356l1 1-1-1z" fill="#3a003a" />
				<path
					className="path"
					d="M240.333 356.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#903a00"
				/>
				<path className="path" d="M244 356l1 1-1-1z" fill="#006" />
				<path className="path" d="M245 356l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M252 356l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M257 356l1 3c.401-1.766.289-1.557-1-3z"
					fill="#90dbff"
				/>
				<path className="path" d="M262 356l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M268 356l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M277 356l1 1-1-1z" fill="#ffdb90" />
				<path
					className="path"
					d="M282 356l1 1-1-1m9 0l1 1-1-1z"
					fill="#66b6ff"
				/>
				<path
					className="path"
					d="M308.333 356.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#ffdb90"
				/>
				<path className="path" d="M309 356l1 1-1-1z" fill="#663a00" />
				<path className="path" d="M312 356l1 1-1-1z" fill="#66b6db" />
				<path className="path" d="M104 357l1 1-1-1z" fill="#b6903a" />
				<path className="path" d="M105 357l1 1-1-1z" fill="#3a90db" />
				<path
					className="path"
					d="M109 357v16c1.812-4.319 1.812-11.681 0-16z"
					fill="#ffffdb"
				/>
				<path
					className="path"
					d="M110 357v16c1.812-4.319 1.812-11.681 0-16z"
					fill="#903a00"
				/>
				<path className="path" d="M116 357l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M123 357l1 1-1-1z" fill="#b66600" />
				<path
					className="path"
					d="M133 357v5c.83-2.03.83-2.97 0-5z"
					fill="#600"
				/>
				<path className="path" d="M137 357l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M172 357l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M173 357l1 1-1-1z" fill="#b6dbdb" />
				<path
					className="path"
					d="M185.333 357.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#ffb666"
				/>
				<path
					className="path"
					d="M191.333 357.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#00003a"
				/>
				<path
					className="path"
					d="M196 357v6c.951-2.285.951-3.715 0-6z"
					fill="#db903a"
				/>
				<path
					className="path"
					d="M202 357v13c1.591-3.791 1.591-9.209 0-13z"
					fill="#006"
				/>
				<path className="path" d="M216 357l1 1-1-1z" fill="#90b690" />
				<path className="path" d="M217 357l1 1-1-1z" fill="#3a003a" />
				<path className="path" d="M218 357l1 1-1-1z" fill="#90dbff" />
				<path
					className="path"
					d="M219 357v3c.696-1.554.696-1.446 0-3z"
					fill="#db903a"
				/>
				<path
					className="path"
					d="M224 357v3c.696-1.554.696-1.446 0-3z"
					fill="#66b6ff"
				/>
				<path className="path" d="M235 357l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M245 357l1 1-1-1z" fill="#003a90" />
				<path
					className="path"
					d="M251.333 357.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#ffb666"
				/>
				<path
					className="path"
					d="M257.333 357.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#00003a"
				/>
				<path
					className="path"
					d="M262 357v6c.951-2.285.951-3.715 0-6z"
					fill="#db903a"
				/>
				<path
					className="path"
					d="M268 357v13c1.591-3.791 1.591-9.209 0-13z"
					fill="#006"
				/>
				<path className="path" d="M276 357l1 1-1-1z" fill="#ffdb90" />
				<path
					className="path"
					d="M281 357v3c.696-1.554.696-1.446 0-3z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M285 357v3c.696-1.554.696-1.446 0-3z"
					fill="#ffdb90"
				/>
				<path
					className="path"
					d="M286 357v3c.696-1.554.696-1.446 0-3z"
					fill="#3a0000"
				/>
				<path
					className="path"
					d="M291 357v3c.696-1.554.696-1.446 0-3z"
					fill="#00003a"
				/>
				<path
					className="path"
					d="M292 357v3c.696-1.554.696-1.446 0-3z"
					fill="#90dbff"
				/>
				<path className="path" d="M309 357l1 1-1-1z" fill="#3a0000" />
				<path className="path" d="M310 357l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M311 357l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M104 358l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M105 358l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M116 358l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M122 358l1 1-1-1z" fill="#ffb666" />
				<path
					className="path"
					d="M127 358v4c.71-1.759.71-2.241 0-4z"
					fill="#00003a"
				/>
				<path
					className="path"
					d="M128 358v4c.71-1.759.71-2.241 0-4z"
					fill="#90dbff"
				/>
				<path
					className="path"
					d="M132 358v4c.71-1.759.71-2.241 0-4z"
					fill="#ffffb6"
				/>
				<path className="path" d="M138 358l1 1-1-1z" fill="#66b6ff" />
				<path
					className="path"
					d="M164 358v15c1.74-4.148 1.74-10.852 0-15z"
					fill="#3a90db"
				/>
				<path
					className="path"
					d="M165 358v15a7.51 7.51 0 000-15z"
					fill="#fff"
				/>
				<path className="path" d="M169 358l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M170 358l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M175 358l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M176 358l1 1-1-1z" fill="#90b6db" />
				<path
					className="path"
					d="M203 358v12c1.512-3.604 1.512-8.396 0-12z"
					fill="#b6ffff"
				/>
				<path className="path" d="M216 358l1 1-1-1z" fill="#66663a" />
				<path className="path" d="M217 358l1 1-1-1z" fill="#0066b6" />
				<path
					className="path"
					d="M234.333 358.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#006"
				/>
				<path
					className="path"
					d="M235 358v12c1.512-3.604 1.512-8.396 0-12z"
					fill="#dbffff"
				/>
				<path
					className="path"
					d="M240 358v11c1.431-3.41 1.431-7.59 0-11z"
					fill="#b66600"
				/>
				<path className="path" d="M246 358l1 1-1-1z" fill="#3a90db" />
				<path
					className="path"
					d="M269 358v12c1.512-3.604 1.512-8.396 0-12z"
					fill="#b6ffff"
				/>
				<path className="path" d="M275 358l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M276 358l1 1-1-1z" fill="#600" />
				<path className="path" d="M307 358l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M308 358l1 1-1-1z" fill="#600" />
				<path className="path" d="M309 358l1 1-1-1z" fill="#006" />
				<path className="path" d="M310 358l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M104 359l1 1-1-1z" fill="#66b6ff" />
				<path
					className="path"
					d="M116 359v14c1.667-3.972 1.667-10.028 0-14z"
					fill="#0066b6"
				/>
				<path className="path" d="M121 359l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M122 359l1 1-1-1z" fill="#600" />
				<path className="path" d="M138 359l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M171 359l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M177 359l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M178 359l1 1-1-1z" fill="#90b6db" />
				<path className="path" d="M185 359l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M186 359l1 1-1-1z" fill="#600" />
				<path className="path" d="M191 359l1 1-1-1z" fill="#003a90" />
				<path
					className="path"
					d="M216.333 359.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#006"
				/>
				<path
					className="path"
					d="M217.333 359.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#b6ffff"
				/>
				<path className="path" d="M246 359l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M251 359l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M252 359l1 1-1-1z" fill="#600" />
				<path className="path" d="M257 359l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M275 359l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M307 359l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M308 359l1 1-1-1z" fill="#00003a" />
				<path className="path" d="M309 359l1 1-1-1z" fill="#90dbff" />
				<path
					className="path"
					d="M103 360v13c1.591-3.791 1.591-9.209 0-13z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M104 360v13c1.591-3.791 1.591-9.209 0-13z"
					fill="#dbffff"
				/>
				<path className="path" d="M121 360l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M138 360l1 1-1-1z" fill="#006" />
				<path className="path" d="M139 360l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M172 360l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M179 360l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M186 360l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M187 360l1 1-1-1z" fill="#663a00" />
				<path className="path" d="M190 360l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M220 360l1 1-1-1z" fill="#db9066" />
				<path className="path" d="M223 360l1 1-1-1z" fill="#66b6ff" />
				<path
					className="path"
					d="M234 360v10a12.887 12.887 0 000-10z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M247.333 360.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#66b6ff"
				/>
				<path className="path" d="M252 360l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M253 360l1 1-1-1z" fill="#663a00" />
				<path className="path" d="M256 360l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M274 360l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M275 360l1 1-1-1z" fill="#600" />
				<path
					className="path"
					d="M281 360v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#3a90db"
				/>
				<path className="path" d="M286 360l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M291 360l1 1-1-1z" fill="#003a90" />
				<path
					className="path"
					d="M306 360l-1 2c1.263-.971 1.392-.694 1-2z"
					fill="#b66600"
				/>
				<path
					className="path"
					d="M307 360c-1.377 1.996-2.624 3.428-2.015 6.004.609 2.57 3.156 4.522 2.015 6.996 3.432 1.44 7.3 1 11 1-4.447-4.152-7.054-9.475-11-14z"
				/>
				<path className="path" d="M308 360l1 1-1-1z" fill="#90dbff" />
				<path
					className="path"
					d="M121 361v6c.951-2.285.951-3.715 0-6z"
					fill="#903a00"
				/>
				<path
					className="path"
					d="M139.333 361.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3a90db"
				/>
				<path
					className="path"
					d="M172.333 361.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#ffdb90"
				/>
				<path className="path" d="M180 361l1 1-1-1z" fill="#3a90db" />
				<path
					className="path"
					d="M216 361v4c.71-1.759.71-2.241 0-4z"
					fill="#0066b6"
				/>
				<path className="path" d="M274 361l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M287 361l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M290 361l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M308 361l1 1-1-1z" fill="#3a90db" />
				<path
					className="path"
					d="M173 362v5c.83-2.03.83-2.97 0-5z"
					fill="#600"
				/>
				<path className="path" d="M180 362l1 1-1-1z" fill="#006" />
				<path className="path" d="M181 362l1 1-1-1z" fill="#b6ffff" />
				<path
					className="path"
					d="M247 362v5c.83-2.03.83-2.97 0-5z"
					fill="#3a90db"
				/>
				<path
					className="path"
					d="M274 362v4c.71-1.76.71-2.241 0-4z"
					fill="#b66600"
				/>
				<path className="path" d="M304 362l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M309 362l1 1-1-1z" fill="#90dbff" />
				<path
					className="path"
					d="M127 363v5c.83-2.03.83-2.97 0-5z"
					fill="#00003a"
				/>
				<path
					className="path"
					d="M128 363v5c.83-2.03.83-2.97 0-5z"
					fill="#90dbff"
				/>
				<path
					className="path"
					d="M172 363v4c.71-1.759.71-2.241 0-4z"
					fill="#ffffb6"
				/>
				<path
					className="path"
					d="M181 363v5c.83-2.03.83-2.97 0-5z"
					fill="#3a90db"
				/>
				<path className="path" d="M190 363l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M191 363l1 1-1-1z" fill="#b69090" />
				<path
					className="path"
					d="M192 365l3-1c-1.778-.955-2.021-.766-3 1z"
					fill="#3a3a3a"
				/>
				<path className="path" d="M256 363l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M257 363l1 1-1-1z" fill="#b69090" />
				<path
					className="path"
					d="M258 365l3-1c-1.778-.955-2.021-.766-3 1z"
					fill="#3a3a3a"
				/>
				<path className="path" d="M303 363l1 1-1-1z" fill="#b6903a" />
				<path className="path" d="M309 363l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M187 364l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M188 364l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M193 364l1 1-1-1z" fill="#90b6db" />
				<path
					className="path"
					d="M195 371c.722-2.418.948-4.472 1-7-4.388 1.619-5.409 4.55-1 7z"
					fill="#fff"
				/>
				<path
					className="path"
					d="M196 364v4c.71-1.759.71-2.241 0-4z"
					fill="#db903a"
				/>
				<path className="path" d="M253 364l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M254 364l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M259 364l1 1-1-1z" fill="#90b6db" />
				<path
					className="path"
					d="M261 371c.722-2.418.948-4.472 1-7-4.388 1.619-5.409 4.55-1 7z"
					fill="#fff"
				/>
				<path
					className="path"
					d="M262 364v4c.71-1.76.71-2.241 0-4z"
					fill="#db903a"
				/>
				<path className="path" d="M303 364l1 1-1-1z" fill="#663a00" />
				<path className="path" d="M310 364l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M186 365l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M191 365l1 1-1-1z" fill="#66b6db" />
				<path
					className="path"
					d="M216 365v8c1.161-2.77 1.161-5.23 0-8z"
					fill="#3a90db"
				/>
				<path className="path" d="M252 365l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M257 365l1 1-1-1z" fill="#66b6db" />
				<path className="path" d="M303 365l1 1-1-1z" fill="#dbdb90" />
				<path className="path" d="M311 365l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M185 366l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M190 366v3c.696-1.554.696-1.446 0-3z"
					fill="#0066b6"
				/>
				<path className="path" d="M251 366l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M256 366v3c.696-1.554.696-1.446 0-3z"
					fill="#0066b6"
				/>
				<path className="path" d="M274 366l1 1-1-1z" fill="#db903a" />
				<path
					className="path"
					d="M303 366v7c1.059-2.534 1.059-4.466 0-7z"
					fill="#dbffff"
				/>
				<path className="path" d="M304 366l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M311 366l1 1-1-1z" fill="#006" />
				<path className="path" d="M312 366l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M121 367l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M137 367l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M138 367l1 1-1-1z" fill="#600" />
				<path className="path" d="M139 367l1 1-1-1z" fill="#66b6ff" />
				<path
					className="path"
					d="M172 367v3c.696-1.554.696-1.446 0-3z"
					fill="#ffdb90"
				/>
				<path
					className="path"
					d="M173.333 367.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#3a0000"
				/>
				<path className="path" d="M184 367l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M246 367l1 1-1-1z" fill="#006" />
				<path className="path" d="M247 367l1 1-1-1z" fill="#b6ffff" />
				<path
					className="path"
					d="M250 367l1 1-1-1m24 0l1 1-1-1z"
					fill="#ffdb90"
				/>
				<path
					className="path"
					d="M281 367v3c.696-1.554.696-1.446 0-3z"
					fill="#0066b6"
				/>
				<path className="path" d="M291 367l1 1-1-1z" fill="#903a00" />
				<path
					className="path"
					d="M292.333 367.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#66b6ff"
				/>
				<path
					className="path"
					d="M304 367v6h4c-1.122-2.343-2.224-4.111-4-6z"
					fill="#fff"
				/>
				<path className="path" d="M305 367l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M312 367l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M122 368l1 1-1-1z" fill="#903a00" />
				<path
					className="path"
					d="M128 368v3c.696-1.554.696-1.446 0-3z"
					fill="#66b6ff"
				/>
				<path className="path" d="M137 368l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M138 368l1 1-1-1z" fill="#006" />
				<path className="path" d="M139 368l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M180 368l1 1-1-1z" fill="#006" />
				<path className="path" d="M181 368l1 1-1-1z" fill="#b6ffff" />
				<path
					className="path"
					d="M184 368v3c.696-1.554.696-1.446 0-3z"
					fill="#db903a"
				/>
				<path
					className="path"
					d="M196.333 368.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666z"
					fill="#903a00"
				/>
				<path className="path" d="M246 368l1 1-1-1z" fill="#0066b6" />
				<path
					className="path"
					d="M250 368v3c.696-1.554.696-1.446 0-3z"
					fill="#db903a"
				/>
				<path
					className="path"
					d="M262.333 368.667c-.055.055-.111 1.111.334.666.055-.055.111-1.111-.334-.666M275 368l1 1-1-1z"
					fill="#903a00"
				/>
				<path className="path" d="M290 368l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M291 368l1 1-1-1z" fill="#3a0000" />
				<path className="path" d="M305 368l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M313 368l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M122 369l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M137 369l1 1-1-1z" fill="#903a00" />
				<path
					className="path"
					d="M138 369l1 1-1-1m42 0l1 1-1-1z"
					fill="#3a90db"
				/>
				<path className="path" d="M190 369l1 1-1-1z" fill="#006" />
				<path className="path" d="M191 369l1 1-1-1z" fill="#b6ffff" />
				<path
					className="path"
					d="M240 369v3c.696-1.554.696-1.446 0-3z"
					fill="#903a00"
				/>
				<path className="path" d="M246 369l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M256 369l1 1-1-1z" fill="#006" />
				<path className="path" d="M257 369l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M275 369l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M290 369l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M291 369l1 1-1-1z" fill="#006" />
				<path className="path" d="M292 369l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M306 369l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M313 369l1 1-1-1z" fill="#006" />
				<path className="path" d="M314 369l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M123 370l1 1-1-1z" fill="#b66600" />
				<path
					className="path"
					d="M136 370l-1 2c1.263-.971 1.392-.694 1-2z"
					fill="#db903a"
				/>
				<path className="path" d="M137 370l1 1-1-1z" fill="#006" />
				<path className="path" d="M138 370l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M172 370l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M179 370l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M191 370l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M192 370l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M195 370l1 1-1-1z" fill="#b6663a" />
				<path className="path" d="M203 370l1 1-1-1z" fill="#66b6db" />
				<path className="path" d="M235 370l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M245 370l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M257 370l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M258 370l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M261 370l1 1-1-1z" fill="#b6663a" />
				<path className="path" d="M269 370l1 1-1-1z" fill="#66b6db" />
				<path className="path" d="M276 370l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M281 370l1 1-1-1z" fill="#006" />
				<path className="path" d="M282 370l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M289 370l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M290 370l1 1-1-1z" fill="#3a0000" />
				<path className="path" d="M291 370l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M307 370l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M314 370l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M124 371l1 1-1-1z" fill="#b66600" />
				<path className="path" d="M128 371l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M136 371l1 1-1-1z" fill="#00003a" />
				<path className="path" d="M137 371l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M171 371l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M178 371l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M184 371l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M185 371l1 1-1-1z" fill="#600" />
				<path className="path" d="M196 371l1 1-1-1z" fill="#3a90b6" />
				<path className="path" d="M197 371l1 1-1-1z" fill="#903a00" />
				<path
					className="path"
					d="M205 371l1 1-1-1m29 0v3c.696-1.554.696-1.446 0-3z"
					fill="#003a90"
				/>
				<path
					className="path"
					d="M235 371c.545 1.635.365 1.455 2 2-.545-1.635-.365-1.455-2-2z"
					fill="#666690"
				/>
				<path className="path" d="M244 371l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M250 371l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M251 371l1 1-1-1z" fill="#600" />
				<path className="path" d="M262 371l1 1-1-1z" fill="#3a90b6" />
				<path className="path" d="M263 371l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M271 371l1 1-1-1z" fill="#003a90" />
				<path className="path" d="M277 371l1 1-1-1z" fill="#dbb666" />
				<path className="path" d="M282 371l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M288 371l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M289 371l1 1-1-1z" fill="#600" />
				<path className="path" d="M290 371l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M307 371l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M315 371l1 1-1-1z" fill="#66b6ff" />
				<path className="path" d="M125 372l1 1-1-1z" fill="#db9066" />
				<path className="path" d="M129 372l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M133 372l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M134 372l1 1-1-1z" fill="#663a00" />
				<path className="path" d="M135 372l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M136 372l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M169 372l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M170 372l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M176 372l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M177 372l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M185 372l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M194 372l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M195 372l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M197 372l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M198 372l1 1-1-1z" fill="#600" />
				<path className="path" d="M205 372l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M235 372l1 1-1-1z" fill="#dbdbb6" />
				<path className="path" d="M237 372l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M239 372l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M243 372l1 1-1-1z" fill="#3a66b6" />
				<path className="path" d="M251 372l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M260 372l1 1-1-1z" fill="#003a66" />
				<path className="path" d="M261 372l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M263 372l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M264 372l1 1-1-1z" fill="#600" />
				<path className="path" d="M271 372l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M278 372l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M279 372l1 1-1-1z" fill="#663a00" />
				<path className="path" d="M283 372l1 1-1-1z" fill="#90b6db" />
				<path className="path" d="M287 372l1 1-1-1z" fill="#dbb666" />
				<path className="path" d="M288 372l1 1-1-1z" fill="#3a003a" />
				<path className="path" d="M289 372l1 1-1-1z" fill="#66b6db" />
				<path className="path" d="M308 372l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M315 372l1 1-1-1z" fill="#006" />
				<path className="path" d="M316 372l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M70 373l1 1-1-1z" fill="#ffffb6" />
				<path className="path" d="M71 373l1 1-1-1z" fill="#600" />
				<path className="path" d="M88 373l1 1-1-1z" fill="#90dbff" />
				<path className="path" d="M94 373l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M106 373l1 1-1-1z" fill="#0066b6" />
				<path className="path" d="M107 373l1 1-1-1z" fill="#ffb666" />
				<path className="path" d="M119 373l1 1-1-1z" fill="#3a90db" />
				<path className="path" d="M127 373l1 1-1-1z" fill="#b69066" />
				<path className="path" d="M128 373l1 1-1-1z" fill="#3a3a3a" />
				<path className="path" d="M133 373l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M134 373l1 1-1-1z" fill="#b6dbdb" />
				<path className="path" d="M152 373l1 1-1-1z" fill="#ffdb90" />
				<path
					className="path"
					d="M172.667 373.333c-.445.445.611.389.666.334.445-.445-.611-.389-.666-.334z"
					fill="#3a6666"
				/>
				<path className="path" d="M174 373l1 1-1-1z" fill="#90b6db" />
				<path className="path" d="M186 373l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M187 373l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M192 373l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M193 373l1 1-1-1z" fill="#b6dbdb" />
				<path className="path" d="M199 373l1 1-1-1z" fill="#b6663a" />
				<path className="path" d="M203 373l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M204 373l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M207 373l1 1-1-1z" fill="#db903a" />
				<path className="path" d="M219 373l1 1-1-1z" fill="#006" />
				<path className="path" d="M220 373l1 1-1-1z" fill="#b6ffff" />
				<path className="path" d="M225 373l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M237 373l1 1-1-1z" fill="#b6663a" />
				<path className="path" d="M241 373l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M242 373l1 1-1-1z" fill="#90b6db" />
				<path className="path" d="M252 373l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M253 373l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M258 373l1 1-1-1z" fill="#3a6690" />
				<path className="path" d="M259 373l1 1-1-1z" fill="#b6dbdb" />
				<path className="path" d="M265 373l1 1-1-1z" fill="#b6663a" />
				<path className="path" d="M269 373l1 1-1-1z" fill="#3a3a66" />
				<path className="path" d="M270 373l1 1-1-1z" fill="#b6dbff" />
				<path className="path" d="M280 373l1 1-1-1z" fill="#ffdbb6" />
				<path className="path" d="M281 373l1 1-1-1z" fill="#90663a" />
				<path className="path" d="M282 373l1 1-1-1z" fill="#3a3a00" />
				<path className="path" d="M286 373l1 1-1-1z" fill="#3a3a3a" />
				<path className="path" d="M287 373l1 1-1-1z" fill="#6690b6" />
				<path className="path" d="M293 373l1 1-1-1z" fill="#ffdb90" />
				<path className="path" d="M304 373l1 1-1-1z" fill="#006" />
				<path className="path" d="M305 373l1 1-1-1z" fill="#b6ffdb" />
				<path className="path" d="M306 373l1 1-1-1z" fill="#903a00" />
				<path className="path" d="M318 373l1 1-1-1z" fill="#66b6ff" />
			</svg>
		</div>
	);
}

export default SvgAnimatedOpening;
