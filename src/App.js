import { useState } from 'react';

import ListContainer from './components/TaskView';
import ProgressBar from './components/ProgressBar';
import AddTask from './components/AddTask';
import SwitchBtn from './components/SwitchBtn';
import useTaskManager from './customHooks/useTaskManager';
import Header from './components/Header';

function App() {
	// component state
	const {
		handleAddTask,
		handleDeleteTask,
		handleToggleTaskChecked,
		tasks,
		setTasks,
	} = useTaskManager([
		{ title: 'task1', id: 1, checked: true },
		{ title: 'task2', id: 2, checked: false },
		{ title: 'task3', id: 3, checked: false },
		{ title: 'task4', id: 4, checked: true },
	]);

	const [moveCompletedTasksToBottom, setMoveCompletedTasksToBottom] = useState(false);

	const calculateProgress = () => {
		const completedTaskCount = tasks.filter((task) => task.checked).length;
		const totalTaskCount = tasks.length;
		if (totalTaskCount === 0) return 0;
		return Math.round((completedTaskCount / totalTaskCount) * 100);
	};

	const toggleDoneTasksEnd = () => {
		setMoveCompletedTasksToBottom(!moveCompletedTasksToBottom);
	};

	return (
		<>
			<Header title='Todo List' description='Add things to do'>
				<ProgressBar progress={calculateProgress()} />
			</Header>

			<ListContainer
				tasks={tasks}
				onHandleDeleteTask={handleDeleteTask}
				onHandleToggleTaskChecked={handleToggleTaskChecked}
				moveCompletedTasksToBottom={moveCompletedTasksToBottom}
			/>

			<SwitchBtn onToggleDoneTasksEnd={toggleDoneTasksEnd} />
			<AddTask onAddTask={handleAddTask} />
		</>
	);
}

export default App;
