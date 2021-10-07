import React, { Fragment, useState} from "react";

const TaskList = props => {
	const { list, setList } = props;
	const [description, setDescription] = useState('');
	const [descriptionFetch, setDescriptionFetch] = useState([]);

	const onChangeStatus = e => {
		const { name, checked } = e.target;
		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};

	const Checkbox = props => {
		const {
			onChange,
			data: { id, description, done }
		} = props;
		return (
			<Fragment>
			  <label className="todo new-item">
				<input
				  className="todo__state"
				  name={id}
				  type="checkbox"
				  defaultChecked={done}
				  onChange={onChange}
				/>
				<div className="todo__text">{description}</div>
			  </label>
			</Fragment>
		  );
		};
		
	const chk = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
		));
		
	
		const onClickRemoveItem = e => {
			const updateList = list.filter(item => !item.done);
			setList(updateList);
		};	


    const ListClear = () => {
        setDescriptionFetch([]);
        setDescription('');
        fetch('https://assets.breatheco.de/apis/fake/todos/user/evelyn', {
            method: "DELETE"
        })
			.then(resp => resp.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
    }



	return (
		<div className="todo-list">
			<p className="numeroItem">{list.length > 0 ? list.length : "0"} Item</p>
			<br></br>
			{list.length ? chk : "You don't have any Earring!"} 
			{list.length ? (
				<p>
					<button className="button2" onClick={onClickRemoveItem}>
						Delete item
					</button>
			    </p>
			) : null}
			<div>
				<br></br>
				
				{list.length ? (
				<button className="button3" onClick={ListClear} >
					Clear the whole List
				</button>
				) : null}
			</div>
		</div>
	);
};

export default TaskList;


