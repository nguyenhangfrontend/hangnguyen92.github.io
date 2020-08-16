import React, { memo, useState, useEffect } from "react";
import { Main } from "./styled";
import { Input, Checkbox, Button } from "components/Cores";
import FormItem from "components/FormItem";
import NewTask from "../NewTask";
const TodoList = ({ listTodo, changeList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idChecked, setIdChecked] = useState();
  const [idRemove, setIdRemove] = useState();
  const [data, setData] = useState({});
  const [listLocal, setListLocal] = useState([])
  const toggle = (item, index) => {
    setIsOpen(!isOpen);
    setData({ ...item, index })
  }


  useEffect(() => {
    const newList = listTodo.sort((a, b) => a.dueDate < b.dueDate ? -1 : 0);
    setListLocal(newList)
  }, [listTodo])

  const removeAllAction = () => {
    setIdRemove(idChecked)
  }
  const removeItem = (id) => {
    let newArr = []
    listLocal.forEach(element => {
      if (element.id !== id) {
        newArr.push(element)
      }

      return newArr
    });
    setListLocal(newArr)
    window.localStorage.setItem('LIST_TODO', JSON.stringify(newArr) || []);
  }

  const handleChange = (value) => {
    const event = value.toLocaleLowerCase()
    let list = listTodo.sort((a, b) => a.dueDate < b.dueDate ? -1 : 0);
    if (event) {
      list = (listLocal || []).filter(item => {
        return (
          item.taskName.toLocaleLowerCase().includes(event)
        );
      });
    }
    setListLocal(list)

  }

  const changePriority = (e, item) => {
   
    if (e) {
      setIdChecked(item.id)
    } else {
      setIdChecked(undefined)
    }

  }
  return (
    <Main>
      <FormItem inputComponent={Input} onChange={handleChange} placeholder="Search" />
      <div className="list-todo">
        {listLocal && listLocal.length > 0 && listLocal.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <div className="item-child">
                <Checkbox
                  children={item && item.taskName}
                  checked={idChecked === item.id}
                  onChange={(e) => changePriority(e, item)}
                />
                {idRemove !== item.id &&
                  <div className="action">
                    <Button
                      children={"Detail"}
                      type={"darkBlue"}
                      onClick={() => toggle(item, index)}
                    />
                    <Button children={"Remove"} onClick={() => removeItem(item && item.id)} type={"danger"} />
                  </div>
                }

              </div>

              {item.id === data.id && (
                <NewTask
                  showForm={toggle}
                  visible={isOpen}
                  setVisible={toggle}
                  data={data}
                  changeList={changeList}
                />
              )}

            </div>
          )
        })
        }
        {idChecked &&
          <div className="todo-item bulk-action">
            <div className="item-child">
              <span>Bulk actions: </span>
              <div className="action">
                <Button
                  children={"Done"}
                  type={"darkBlue"}
                />
                <Button children={"Remove"} onClick={removeAllAction} type={"danger"} />
              </div>
            </div>
          </div>
        }


      </div>
    </Main>
  );
};

export default memo(TodoList);
