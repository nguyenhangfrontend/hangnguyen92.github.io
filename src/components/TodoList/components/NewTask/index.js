import React, { memo, useEffect, useState } from "react";
import { Main } from "./styled";
import { initialForm } from './constants'
import {
  Input,
  TextArea,
  DatePicker,
  SelectCustom,
  Button,
} from "components/Cores";
import { levels } from "../../constants";
import FormItem from "components/FormItem";
const NewTask = ({ visible, data, changeList, setVisible }) => {

  const [form, setForm] = useState(initialForm)
  const [funcObj, setFuncObj] = useState(initialForm);
  const [idItem, setId] = useState(0);
  const [oldItemsLocal, setOldItems] = useState(JSON.parse(localStorage.getItem("LIST_TODO")) || []);


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

  }, [form]);

  useEffect(()=>{
    if(data){
      setForm(data)
    }
    
  }, [data])

  useEffect(()=> {
    if(changeList)
      changeList(oldItemsLocal)
  }, [oldItemsLocal])

  const setFormKey = (key) => (value) => {
  
    let newForm = { ...form };
    newForm[key] = value;
    if(key === 'dueDate'){
      newForm[key] = new Date(value);
    }

    setForm(newForm);
  };


  const onSubmit = () => {
    if(data && data.id){
      let newArr = oldItemsLocal;
      newArr[data.index] = {...form, id: data.id}
       setOldItems([...newArr]);
       window.localStorage.setItem("LIST_TODO", JSON.stringify(newArr));
       setVisible(false)
    }else {
      setId(idItem + 1)
      let formData = form
       formData["id"] = idItem + 1;
      setOldItems([...oldItemsLocal, formData]);
      window.localStorage.setItem("LIST_TODO", JSON.stringify([...oldItemsLocal, formData]));
       setForm(initialForm)
    }
   
  };


  return (
    <Main visible={visible} className="form-new">
      <FormItem inputComponent={Input} value={form.taskName} onChange={funcObj.taskName} placeholder="Add new task" />
      <FormItem inputComponent={TextArea}  value={form.taskDescription} label="Discription" onChange={funcObj.taskDescription} />
      <div className="container-divider">
        <div className="col col50">
          <FormItem inputComponent={DatePicker} value={form.dueDate ? new Date(form.dueDate): ''} label="Due date" onChange={funcObj.dueDate} />
        </div>
        <div className="col col50">
          <FormItem
            inputComponent={SelectCustom}
            label="Priority"
            options={levels}
            onChange={funcObj.priority}
            value={form.priority}
          />
        </div>
      </div>
      <div className="action">
        <Button children={data ? "Update" : "Add new"} type={"primary"} onClick={onSubmit} />
      </div>
    </Main>
  );
};

export default memo(NewTask);
