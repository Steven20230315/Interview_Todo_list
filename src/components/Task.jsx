import Checkbox from './Checkbox';
import { CgClose } from 'react-icons/cg';
import style from './css/Task.module.css';

export default function Task({
	data,
	onHandleDeleteTask,
	onHandleToggleTaskChecked,
}) {
	return (
		<section className={style.task}>
			<Checkbox
				data={data}
				onHandleToggleTaskChecked={onHandleToggleTaskChecked}
			/>

			<button
				className={style.delete_btn}
				onClick={() => onHandleDeleteTask(data.id)}
			>
				<CgClose className={style.delete_icon} />
			</button>
		</section>
	);
}
