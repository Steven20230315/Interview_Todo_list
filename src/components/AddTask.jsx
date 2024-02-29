import { useState, useRef, useId } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './css/AddTask.module.css';
export default function AddTask({ onAddTask }) {


	const inputRef = useRef(null);

	const handleFormSubmit = () => {
		const task = {
			title: inputRef.current.value,
			id: uuidv4(),
		};
		// If input value is empty, do nothing
		if (!task.title) {
			return;
		} else {
			onAddTask(task);
		}
		inputRef.current.value = '';
	};

	// Keyboard event. Press enter to add task (input value is not empty) or press escape to clear input
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleFormSubmit();
		} else if (event.key === 'Escape') {
			inputRef.current.value = '';
		} else {
			return;
		}
	};

	return (
		<div className={style.add_task_container}>
			<p>Add to list</p>
			<div className={style.task_input_form}>
				<input type='text' ref={inputRef} onKeyDown={handleKeyDown} />
				<button className='add_task_btn' onClick={handleFormSubmit}>
					+
				</button>
			</div>
		</div>
	);
}
