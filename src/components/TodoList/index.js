import React from "react";
import NewTask from './components/NewTask';
import TodoList from './components/TodoList';
import {Main} from "./styled";

const TodoListComp = () => {
  return (
    <Main className="main">
      <div className="col40">
        <NewTask/>
      </div>
      <div className="col60">
      <TodoList/>
      </div>
      
    </Main>
  );
};

export default TodoListComp;
