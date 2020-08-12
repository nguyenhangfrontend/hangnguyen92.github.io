import React from "react";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { Main } from "./styled";
import { Card } from "components/Cores";

const TodoListComp = () => {
  return (
    <Main className="main">
      <div className="col40">
        <Card title="Create New Task">
          <NewTask visible={true}/>
        </Card>
      </div>
      <div className="col60">
        <Card title="List to do">
          <TodoList />
        </Card>
      </div>
    </Main>
  );
};

export default TodoListComp;
