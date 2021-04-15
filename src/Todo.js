import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inProgress, id }) {
  function toggleInprogress() {
    //GOTO db then update inprogress to opposite of it in db
    db.collection("todos").doc(id).update({ inProgress: !inProgress });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex"}}>
      <ListItem >
        <ListItemText
          primary={todo}
          secondary={inProgress ? "In Progress" : "Completed"}
          style={{backgroundColor:"##C9DAD1",padding:"10px" }}
        />
      </ListItem>
      <Button onClick={toggleInprogress} >
        {inProgress ? "Done" : "Undone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
