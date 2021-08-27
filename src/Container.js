import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";


const Container = () => {
	const [list, setList] = useState([]); 


	const handleAddItem = addItem => {
		setList([...list, addItem]); 
	};
	return (
		<div>
			<div className="header">
			<FormTodo handleAddItem={handleAddItem} />
			</div>
			<br></br>
			<div className="bodyHeader">
			<TaskList list={list} setList={setList} />
			</div>
		</div>
	);
};

export default Container;