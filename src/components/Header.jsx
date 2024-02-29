import React from 'react';

export default function Header({
	children,
	title = 'Todo List',
	description = 'Add things to do',
}) {
	return (
		<div className='header'>
			<div className='title'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
}
