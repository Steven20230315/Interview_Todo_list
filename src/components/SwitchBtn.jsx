import style from './css/SwitchBtn.module.css';

export default function SwitchBtn({ onToggleDoneTasksEnd }) {
	return (
		<div className={style.switch_container}>
			Move done things to end?
			<label htmlFor='switch'>
				<input type='checkbox' id='switch' onClick={onToggleDoneTasksEnd} />
				<span className={style.slider}></span>
			</label>
		</div>
	);
}
