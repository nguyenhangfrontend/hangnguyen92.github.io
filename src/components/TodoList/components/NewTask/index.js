import React, { memo, useEffect, useState } from "react";
import { Main } from "./styled";
import { initialForm } from './constants'
import {
  Card,
  Input,
  TextArea,
  DatePicker,
  SelectCustom,
  Button,
} from "components/Cores";
import { levels } from "../../constants";
import FormItem from "components/FormItem";
const NewTask = ({ visible, data }) => {
  const [form, setForm] = useState(initialForm)
  const [funcObj, setFuncObj] = useState(initialForm);
  const [idItem, setId] = useState(0);
  useEffect(() => {
    const formChangeKeys = Object.keys(initialForm);
    const obj = formChangeKeys.reduce(
      (res, key) => ({
        ...res,
        [key]: setFormKey(key),
      }),
      {}
    );
    setFuncObj(obj)
     localStorage.setItem('LIST_TODO', []);
  }, [form]);

  const setFormKey = (key) => (value) => {
    console.log(value)
    let newForm = { ...form };
    newForm[key] = value;
    setForm(newForm);
  };
 
  
  const onSubmit =  async () => {
    console.log(form)
    let id = idItem;
    id = id + 1
    setId(id)
    // form["id"] = id;
    let oldItems = await localStorage.getItem('LIST_TODO') || [];
    oldItems.push(form);
    console.log('oldItems', oldItems)
    localStorage.setItem("LIST_TODO", JSON.stringify(oldItems));
  };

  return (
    <Main visible={visible} className="form-new">
      <FormItem inputComponent={Input} onChange={funcObj.taskName} placeholder="Add new task"  />
      <FormItem inputComponent={TextArea} label="Discription" onChange={funcObj.taskDescription}/>
      <div className="container-divider">
        <div className="col col50">
          <FormItem inputComponent={DatePicker} label="Due date" onChange={funcObj.dueDate}/>
        </div>
        <div className="col col50">
          <FormItem
            inputComponent={SelectCustom}
            label="Priority"
            options={levels}
            onChange={funcObj.priority}
          />
        </div>
      </div>
      <div className="action">
        <Button children={data ? "Update" : "Add new"} type={"primary"} onClick={onSubmit}/>
      </div>
    </Main>
  );
};

export default memo(NewTask);
