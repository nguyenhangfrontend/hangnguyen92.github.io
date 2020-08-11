import React from "react";
import {
  Input,
  TextArea,
  DatePicker,
  Checkbox,
  SelectCustom,
  Card,
  Button,
  formChange,
  form,
} from "components/Cores";
import FormItem from "components/FormItem";
import { levels } from "./constants";
const TodoListComp = () => {
  return (
    <Card>
      <Button children={"Add new"} type={"primary"} />
      <Button children={"Remove"} type="danger" />
      <FormItem inputComponent={DatePicker} placeholder="Add new task"/>
      <FormItem inputComponent={Input} label="Description"/>
      <FormItem inputComponent={TextArea} />
      <Checkbox />
      <FormItem inputComponent={SelectCustom} options={levels} label="Priority" />
    </Card>
  );
};

export default TodoListComp;
