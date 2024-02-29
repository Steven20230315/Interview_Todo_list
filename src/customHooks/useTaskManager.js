import { useState } from 'react';

// Custom hook to manage tasks
export default function useTaskManager(initialTasks) {
	const [tasks, setTasks] = useState(initialTasks || []);

	const handleAddTask = (task) => {
		setTasks([...tasks, task]);
	};

	const handleDeleteTask = (taskId) => {
		setTasks(tasks.filter((t) => t.id !== taskId));
	};

	const handleToggleTaskChecked = (taskId) => {
		setTasks(
			tasks.map((t) =>
				t.id === taskId ? { ...t, checked: !t.checked } : t
			)
		);
	};

	return {
		tasks,
		handleAddTask,
		handleDeleteTask,
		handleToggleTaskChecked,
	};
}
