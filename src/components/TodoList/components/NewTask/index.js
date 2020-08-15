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
const NewTask = ({ visible, data, changeList }) => {

  const [form, setForm] = useState(initialForm)
  const [funcObj, setFuncObj] = useState(initialForm);
  const [idItem, setId] = useState(0);
  const [oldItemsLocal, setOldItems] = useState(JSON.parse(localStorage.getItem("LIST_TODO")) || []);
  

  // useEffect(()=> {
  //   localStorage.setItem("LIST_TODO", []);
  // }, [])
  useEffect(() => {
    const formChangeKeys = Object.keys(initialForm);
    const obj = formChangeKeys.reduce(
      (res, key) => ({
        ...res,
        [key]: setFormKey(key),
      }),
      {}
    );
    console.log(obj.doHomeWork)
    setFuncObj(obj)

  }, [form]);

  useEffect(()=>{
    if(data){
      setForm(data)
    }
    
  }, [data])

  useEffect(()=> {

    window.localStorage.setItem("LIST_TODO", JSON.stringify(oldItemsLocal));
    if(changeList)
      changeList(oldItemsLocal)
      // setId(0)
  }, [oldItemsLocal])


  const setFormKey = (key) => (value) => {
  
    let newForm = { ...form };
    newForm[key] = value;
    if(key === 'dueDate'){
      newForm[key] = new Date(value);
    }

    setForm(newForm);
  };


  const onSubmit = async () => {
    if(data && data.id){
      let newArr = oldItemsLocal;
      newArr[data.id] = form
       setOldItems(newArr);
    }else {
      setId(idItem + 1)
      let formData = form
       formData["id"] = idItem + 1;
       console.log('oldItemsLocal', oldItemsLocal)
       await setOldItems([...oldItemsLocal, formData]);
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
