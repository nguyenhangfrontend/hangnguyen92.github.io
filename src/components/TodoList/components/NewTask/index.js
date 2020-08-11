import React, { memo } from 'react';
import { Main } from "./styled";
import { Card } from 'component/Cores';
import FormItem from "components/FormItem";
const NewTask = ({Input,
  TextArea,
  DatePicker,
  Checkbox,
  SelectCustom,
  Card,
  Button,}) => {

  return (
    <Main >
      <Card>
      <FormItem inputComponent={Input} placeholder="Add new task"/>
      <FormItem inputComponent={TextArea} label="Discription"/>
      <FormItem inputComponent={DatePicker} label="Due date"/>
      <FormItem inputComponent={SelectCustom} label="Priority"/>
      </Card>
    </Main>
  )
} ;

export default memo(NewTask)