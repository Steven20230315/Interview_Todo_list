import style from '../components/css/Header.module.css';
export default function Header({
	children,
	title = 'Todo List',
	description = 'Add things to do',
}) {
	return (
		<div className={style.header}>
			<div className={style.title}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
}
