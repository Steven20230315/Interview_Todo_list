import { useState, useRef, useId } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './css/AddTask.module.css';
export default function AddTask({ onAddTask }) {
	//component state
	const [count, setCount] = useState(0);
	const inputRef = useRef(null);
	//component handler

	const handleFormSubmit = () => {
		setCount((prevCount) => prevCount + 1);
		console.log(`count is ${count}`);
		const task = {
			title: inputRef.current.value,
			id: uuidv4(),
		};
		if (!task.title) {
			return;
		} else {
			onAddTask(task);
		}
		inputRef.current.value = '';
	};

	return (
		<div className={style.add_task_container}>
			<p>Add to list</p>
			<div className={style.task_input_form}>
				<input type='text' ref={inputRef} />
				<button className='add_task_btn' onClick={handleFormSubmit}>
					+
				</button>
			</div>
		</div>
	);
}
