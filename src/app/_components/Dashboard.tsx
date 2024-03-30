import {
	CSSProperties,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

type DashBoardProps = {
	startHr: number;
	startMin: number;
	startSec: number;
};

export default function Dashboard({
	startHr,
	startMin,
	startSec,
}: DashBoardProps) {
	const [activeTimer, setActiveTimer] = useState(false);
	const [hours, setHours] = useState(startHr);
	const [minutes, setMinutes] = useState(startMin);
	const [seconds, setSeconds] = useState(startSec);
	const [percentage, setPercentage] = useState(100);

	const timeToSecs = (hr: number, min: number, sec: number): number =>
		hr * 3600 + min * 60 + sec;

	const totalStartSec = useMemo(
		() => timeToSecs(startHr, startMin, startSec),
		[startHr, startMin, startSec]
	);

	const timerRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		if (activeTimer) {
			timerRef.current = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						if (hours === 0) {
							setActiveTimer(false);
						} else {
							setHours(hours - 1);
							setMinutes(59);
							setSeconds(59);
						}
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				} else {
					setSeconds(seconds - 1);
				}
			}, 1000);
		} else {
			clearInterval(timerRef.current);
		}
		return () => clearInterval(timerRef.current);
	}, [activeTimer, hours, minutes, seconds]);

	useEffect(() => {
		setPercentage((timeToSecs(hours, minutes, seconds) / totalStartSec) * 100);
	}, [totalStartSec, hours, minutes, seconds]);

	const restart = () => {
		// Clears the interval to stop the timer from updating
		setActiveTimer(false);
		setHours(startHr);
		setMinutes(startMin);
		setSeconds(startSec);
	};

	const pause = () => {
		// Clears the interval to stop the timer from updating
		setActiveTimer(false);
	};

	return (
		<main className="flex min-h-screen flex-col items-center space-y-10 p-24">
			<div
				className="radial-progress bg-primary text-white border-4 border-primary"
				style={
					{
						"--value": percentage,
						"--size": "12rem",
						"--thickness": "2px",
					} as CSSProperties
				}
				role="progressbar"
			>
				<div className="grid grid-flow-col gap-1 text-center auto-cols-max">
          <div className="flex flex-col text-white">
						<span className="countdown font-mono text-2xl">
							<span style={{ "--value": hours } as CSSProperties}></span>:
						</span>
						hours
					</div>
					<div className="flex flex-col text-white">
						<span className="countdown font-mono text-2xl">
							<span style={{ "--value": minutes } as CSSProperties}></span>:
						</span>
						min
					</div>
					<div className="flex flex-col text-white">
						<span className="countdown font-mono text-2xl">
							<span style={{ "--value": seconds } as CSSProperties}></span>
						</span>
						sec
					</div>
				</div>
			</div>
			<div className="flex space-x-5">
				<button
					className="btn rounded-full btn-primary text-white border-2 shadow-md"
					disabled={!!activeTimer}
					onClick={() => setActiveTimer(true)}
				>
					Start
				</button>
				<button
					className="btn rounded-full btn-primary text-white border-2 shadow-md"
					disabled={!activeTimer}
					onClick={() => pause()}
				>
					Pause
				</button>
				<button
					className="btn rounded-full btn-primary text-white border-2 shadow-md"
					onClick={() => restart()}
				>
					Reset
				</button>
			</div>
		</main>
	);
}
