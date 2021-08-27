import React from "react";
import Checkbox from "./Checkbox.js";

const TaskList = props => {
	
	const { list, setList } = props;

	const onChangeStatus = e => {
		const { name, checked } = e.target;

		
		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};

	
	const onClickRemoveItem = e => {
		const updateList = list.filter(item => !item.done);
		setList(updateList);
	};

	
	const chk = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
	));
	return (
		<div className="todo-list">
			<br></br>
			{list.length ? chk : "You don't have any Earring!"}
			
			{list.length ? (
				<p>
					<button className="button2" onClick={onClickRemoveItem}>
						Delete
					</button>
				</p>
			) : null}
		</div>
	);
};

export default TaskList;