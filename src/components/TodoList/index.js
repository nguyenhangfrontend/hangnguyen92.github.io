import React, {useState, memo} from "react";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { Main } from "./styled";
import { Card } from "components/Cores";

const TodoListComp = ({}) => {
  
  const [listLocal, setList] = useState([]);


 const changeList = (list) => {
  setList(list)
 }
  return (
    <Main className="main">
      <div className="col40">
        <Card title="Create New Task">
          <NewTask visible={true} changeList={changeList}/>
        </Card>
      </div>
      <div className="col60">
        <Card title="List to do">
          <TodoList listTodo={listLocal} changeList={changeList}/>
        </Card>
      </div>
    </Main>
  );
};

export default memo(TodoListComp);
