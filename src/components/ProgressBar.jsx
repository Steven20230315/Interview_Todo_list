import style from './css/ProgressBar.module.css';

export default function ProgressBar({ progress }) {
	return (
		<div className={style.progress_container}>
			<span>{progress}%</span>
			<div
				className={style.progress_bar}
				style={{ '--width': `${progress}` }}
			></div>
		</div>
	);
}
