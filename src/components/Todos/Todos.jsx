import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TodoItems from "./TodoItems";
import AddTodos from "./AddTodos";

export default function Todos() {
  let _todos = [
    {
      id: 1,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
    {
      id: 2,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
    {
      id: 3,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
    {
      id: 4,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
    {
      id: 5,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
    {
      id: 6,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
    {
      id: 7,
      title: "Go to the marker",
      description: "You need to go to the marker to get the job done.",
    },
  ];

  const [myTodos, setTotos] = useState(_todos);

  const onDeleteAct = (todoId) => {
    setTotos(
      myTodos.filter((todo) => {
        return todo.id !== todoId;
      })
    )
  };

  const onSubmitAct = (todo) => {
    todo.id = myTodos[myTodos.length - 1].id + 1;
    setTotos([...myTodos, todo]);
    return true;
  }

  useEffect(() => {
    console.log("useEffect", myTodos);
  }, [myTodos])

  let isTodo = myTodos.length > 0;

  return (
    <Container fluid="sm" className="todoList" style={{ maxWidth: "650px" }}>
      <AddTodos onAdd={onSubmitAct} />
      <hr />
      <h3>Todos</h3>
      {isTodo
        ? myTodos.map((todo) => {
            return (
              <TodoItems key={todo.id} todo={todo} onDelete={onDeleteAct} />
            );
          })
        : "No todos found. Create one"}
    </Container>
  );
}
