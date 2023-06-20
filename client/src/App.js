import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getallToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState(""); //for adding ToDo
  const [isUpdate, setIsUpdate] = useState(false); //for updating
  const [toDoId, settoDoId] = useState();
  useEffect(() => {
    getallToDo(setToDo); //imported from handleapi
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    settoDoId(_id);
  };
  const handleDelete = (_id) => {
    deleteToDo(_id, setToDo);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDOs...."
            value={text}
            onChange={(e) => setText(e.target.value)} //target value assigned to setText and then text
          />

          <div
            className="add"
            onClick={
              isUpdate
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdate)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdate ? "Update" : "Add"}
            {/* in the above if it's updatng it should show update and then it should show add */}
          </div>
          {/* call addToDo from Handleapi */}
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => handleDelete(item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
