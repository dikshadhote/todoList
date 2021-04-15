import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";

function App() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []); //[] kept blank to run only for first time other time we will call getTodo()

  function getTodos() {
    //onSnapshot is used to fetch real time data
    db.collection("todos").onSnapshot(function (querySnapshot) {
      //we have to fetch each document available in db.so, we use query
      //map is used to iterate over entries
      //id extracts id of document in db
      //to extract parameter we have to fetch as varible.data().parameter_from_database
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inProgress: doc.data().inProgress,
        }))
      );
    });
  }

  //To add todos in task list
  function addTodo(e) {
    //to prevent reloading of page
    e.preventDefault();
    //pass collection name to db.collection(collectionName) and use add({parameters}) to dynamically create document in collection
    //or you can use doc(docId) to specify certain doc id

    db.collection("todos").add({
      inProgress: true, //once you add todo it will be consider as in progress
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
          width: "100%",
        }}
      >
        <h1>Todo App ✍️</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Add your task here.."
            style={{ maxWidth: "500px", width: "90vw" }}
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}

            // e.target.value: value provided in input field
            //have to use below sentence after
            // console.log(`this is target value ${e.target.value}` );
          />
          <Button
            variant="contained"
            type="submit"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
        <div style={{ marginTop: "20px", maxWidth: "500px", width: "90vw" }}>
          {todos.map((todo) => (
            //todo in map() is a map
            //to fetch todo variable from seTodo fetch query we use this_variable.that_variable
            // <p>{todo.todo}</p>

            
              <TodoListItem
                todo={todo.todo}
                inProgress={todo.inProgress}
                id={todo.id}
              />
              
            //we are calling TodoListItem fn from Todo.js file and passingtext todo from here
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
