import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './css/AddTask.module.css';
import { PiQuestionFill } from 'react-icons/pi';
export default function AddTask({ onAddTask }) {
	const inputRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	const handleFormSubmit = () => {
		const task = {
			title: inputRef.current.value,
			id: uuidv4(),
			checked: false,
		};
		if (!task.title) {
			return;
		} else {
			onAddTask(task);
		}
		inputRef.current.value = '';
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

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
			<p>
				Add to list
				<PiQuestionFill
					title='Press Enter to add task, Press Escape to clear'
					className={style.hint}
				/>
			</p>

			<div className={style.task_input_form}>
				<input
					type='text'
					ref={inputRef}
					onKeyDown={handleKeyDown}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
				<button className={style.add_task_btn} onClick={handleFormSubmit}>
					+
				</button>
			</div>
		</div>
	);
}
