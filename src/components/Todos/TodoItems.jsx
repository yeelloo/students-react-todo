import React from "react";
import { ListGroup } from "react-bootstrap";

export default function TodoItems({ todo, onDelete }) {
  return (
    <>
      <ListGroup.Item
        key={todo.id}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{todo.id + ". " + todo.title}</div>
          {todo.description}
        </div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Delete
        </button>
      </ListGroup.Item>
    </>
  );
}
