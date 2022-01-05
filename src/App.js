import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  return (
    <div>
      <h1 className="tittle">
        TODO-LIST FROM REACT JS !
      </h1>
      <div className="bodyCard">
      <h2 className="subTittle">Aquí puedes anotar tus pendientes ✍</h2>
      <div className="contenedor">
        <div className="header">
          <FormTodo handleAddItem={handleAddItem} />
        </div>
        <br></br>
        <div className="bodyHeader">
          <TaskList list={list} setList={setList} />
        </div>
      </div>
      <h3 className="footerEnd">(◔◡◔)</h3>
      </div>
    </div>
  );
}

export default App;
