import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form classname="Todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="Todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="Todo-button edit"> Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a Todo"
            value={input}
            name="text"
            className="Todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="Todo-button"> Add Todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;