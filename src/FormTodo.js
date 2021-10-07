import React, { useState, useEffect } from "react";


const FormTodo = (props) => {
	const { handleAddItem } = props; 
	const [description, setDescription] = useState(''); 
	const [descriptionFetch, setDescriptionFetch] = useState([]); 

	useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/evelyn")
            .then(resp => resp.json())
            .then((data) => {
                setDescriptionFetch(data);
                if (descriptionFetch) {
                    fetch('https://assets.breatheco.de/apis/fake/todos/user/evelyn', {
                        method: 'POST',
						body:  JSON.stringify({
							"label": description,
							"done": false
						}),
                        headers: { "Content-type": "application/json" },
                    })
                    setDescriptionFetch([]);
                }
            })
            .catch(error => console.log(error));
    }, [])

	// fetch('https://assets.breatheco.de/apis/fake/todos/user/evelyn', {
    //     method: "PUT",
    //     body: JSON.stringify(descriptionFetch),
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    // })

	const handleSubmit = (e) => {
		e.preventDefault(); 
        if (descriptionFetch.length === 0) {
            setDescriptionFetch(descriptionFetch.concat({ "label": description, "done": false }));
            fetch('https://assets.breatheco.de/apis/fake/todos/user/evelyn', {
                method: 'POST',
                body: JSON.stringify({
                    "label": description,
                    "done": false
                }),
                headers: { "Content-type": "application/json" },
            })
        } else {
            setDescriptionFetch(descriptionFetch.concat({'label': description, 'done': false}));
            fetch('https://assets.breatheco.de/apis/fake/todos/user/evelyn', {
				method: "PUT",
                body: JSON.stringify(descriptionFetch),
                headers: { "Content-Type": "application/json" },
            })
			.then(resp => resp.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
		}
        setDescription('');
        
		handleAddItem({
            done: false,
			id: (+new Date()).toString(),
			description
		});
		setDescription(''); 
        console.log(descriptionFetch);
	};


	return (
        <form onSubmit={handleSubmit}>

			<div className="todo-list">
				<div className="file-input">

					<input
						type="text"
						className="text"
						value={description}
						onChange={e => setDescription(e.target.value)}
						placeholder="add new earring..."
					
                        />

					<button
						className="button"
						disabled={description ? "" : "disabled"}
                        > ADD
					</button>

				</div>
			</div>
					
		</form>
	);
};

export default FormTodo;
