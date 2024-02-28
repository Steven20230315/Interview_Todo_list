import Checkbox from './Checkbox';
import { CgClose } from 'react-icons/cg';

export default function Task({
	data,
	onHandleDeleteTask,
	onHandleToggleTaskChecked,
}) {
	return (
		<section className='task'>
			<Checkbox
				data={data}
				onHandleToggleTaskChecked={onHandleToggleTaskChecked}
			/>

			<button
				className='delete_btn'
				onClick={() => onHandleDeleteTask(data.id)}
			>
				<CgClose style={{ strokeWidth: '2px' }} />
			</button>
		</section>
	);
}
