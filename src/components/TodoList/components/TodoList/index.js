import React, { memo, useState, useEffect } from "react";
import { Main } from "./styled";
import { Card, Input, Checkbox, Button } from "components/Cores";
import { levels } from "../../constants";
import FormItem from "components/FormItem";
import NewTask from "../NewTask";
const TodoList = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(false);
  const toggle = (item) => {
    setIsOpen(!isOpen);
    setData(item)
  }

  // const formToBody = (form, todoItem) => {
  //   const keys = Object.keys(form).filter(item => item !== 'birthday');
  //   return keys.reduce((result, key) => ({
  //     ...result,
  //     [key]: todoItem[key] || form[key],
  //   }), {});
    
  // };
  return (
    <Main>
      <FormItem inputComponent={Input} placeholder="Search" />
      <div className="list-todo">
        <div className="todo-item">
          <div className="item-child">
            <Checkbox
              children={"Do home work"}
              disabled={true}
              checked={true}
            />
            <div className="action">
              <Button
                children={"Detail"}
                type={"darkBlue"}
                onClick={toggle}
              />
              <Button children={"Remove"} type={"danger"} />
            </div>
          </div>
          {isOpen && (
            <NewTask
              showForm={toggle}
              visible={isOpen}
              data={data}
            />
          )}
        </div>
      </div>
    </Main>
  );
};

export default TodoList;
