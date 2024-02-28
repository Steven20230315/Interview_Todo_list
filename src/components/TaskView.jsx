import { useRef, useEffect } from 'react';
import Task from './Task';
import usePrevious from '../customHooks/usePrevious';

export default function ListContainer({
	tasks,
	onHandleDeleteTask,
	onHandleToggleTaskChecked,
	completedTasksEnd,
}) {
	const scrollBottomRef = useRef();

	const previousTasksLength = usePrevious(tasks.length);

	//
	const renderTasks = () => {
		if (completedTasksEnd) {
			const completedTask = tasks.filter((task) => task.checked);
			const unfinishedTask = tasks.filter((task) => !task.checked);
			return [...unfinishedTask, ...completedTask];
		} else {
			return tasks;
		}
	};
	// Keep the scroll at the bottom of the list when new tasks are added \
	useEffect(() => {
		if (tasks.length > previousTasksLength) {
			if (scrollBottomRef.current) {
				scrollBottomRef.current.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [tasks.length, previousTasksLength]);

	return (
		<main className='task_list'>
			{renderTasks().map((task) => (
				<Task
					key={task.id}
					data={task}
					onHandleDeleteTask={onHandleDeleteTask}
					onHandleToggleTaskChecked={onHandleToggleTaskChecked}
				/>
			))}
			<div ref={scrollBottomRef}></div>
		</main>
	);
}
