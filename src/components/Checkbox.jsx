import style from './css/Checkbox.module.css';
export default function Checkbox({ data, onHandleToggleTaskChecked }) {
	return (
		<div className={style.checkbox_container}>
			<input
				type='checkbox'
				name={data.id}
				id={data.id}
				checked={data.checked}
				onChange={() => onHandleToggleTaskChecked(data.id)}
			/>
			<label
				className={data.checked ? 'checked' : ''}
				htmlFor={data.id}
				data-title={data.title}
			>
				<span>{data.title}</span>
			</label>
		</div>
	);
}
