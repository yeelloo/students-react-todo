import axios from 'axios';
import React, { useRef } from 'react'
import { Form, Button } from "react-bootstrap";

export default function AddTotos({ onAdd }) {
  let titleRef = useRef(null);
  let descRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    var _error = false;
    
    if (descRef.current.value === "") {
      descRef.current.focus();
      _error = true;
    }
    if (titleRef.current.value === "") {
      titleRef.current.focus();
      _error = true;
    }
    let todoData = {
      title: titleRef.current.value,
      description: descRef.current.value,
    };
    if (!_error){
      if (onAdd(todoData)) {
        descRef.current.value = "";
        titleRef.current.value = "";
      }
    }
    else{
      console.log("invalid form")
    }
    
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="todoTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" ref={titleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="todoDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} ref={descRef} />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}
