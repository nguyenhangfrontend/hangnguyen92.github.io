import React, { memo, useState, useEffect } from "react";
import { Main } from "./styled";
import { Card, Input, Checkbox, Button } from "components/Cores";
import { levels } from "../../constants";
import FormItem from "components/FormItem";
import NewTask from "../NewTask";
const TodoList = ({ listTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(false);
  const [listLocal , setListLocal] = useState([])
  const toggle = (item) => {
    console.log('item', item)
    setIsOpen(!isOpen);
    setData(item)
  }

  useEffect(()=> {
    setListLocal(listTodo)
  }, [listTodo, ])

  const removeItem =  (id)=> {
    console.log(id)
    let newArr = []
    listLocal.forEach(element => {
      if(element.id !== id){
        console.log(element)
        newArr.push(element)
      }
     
     return newArr
    });
    setListLocal(newArr)
    window.localStorage.setItem('LIST_TODO',JSON.stringify(newArr) || []);
  }
  return (
    <Main>
      <FormItem inputComponent={Input} placeholder="Search" />
      <div className="list-todo">
        {listLocal && listLocal.length >0 && listLocal.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <div className="item-child">
                <Checkbox
                  children={item && item.taskName}
                  disabled={true}
                  checked={true}
                />
                <div className="action">
                  <Button
                    children={"Detail"}
                    type={"darkBlue"}
                    onClick={() => toggle(item)}
                  />
                  <Button children={"Remove"} onClick={() => removeItem(item && item.id)} type={"danger"} />
                </div>
              </div>
              {item.id === data.id && (
                <NewTask
                  showForm={toggle}
                  visible={isOpen}
                  data={data}
                />
              )}
            </div>
          )
        })

        }

      </div>
    </Main>
  );
};

export default TodoList;
