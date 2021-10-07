import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import './App.css';


function App() {
  const [list, setList] = useState([]); 

	const handleAddItem = addItem => {
		setList([...list, addItem]); 
	};

  return (
          <div>
              <h1>TODO LIST FROM REACT !</h1>
              <h2>So you never forget your earrings Again</h2>
            <div className="contenedor">
                <div className="header">
			             <FormTodo handleAddItem={handleAddItem} />
			         </div>
		    	     <br></br>
		        	 <div className="bodyHeader">
		               <TaskList list={list} setList={setList} />
			         </div>
          </div>
        </div>
  );
};

export default App;
