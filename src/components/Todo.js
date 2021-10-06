import React from 'react';
import '../css/Todo.css';

function Todo() {
  return (
    <div className="list-item">
      Tarea
      <button className="delete is-pulled-right" />
    </div>
  )
};

export default Todo;