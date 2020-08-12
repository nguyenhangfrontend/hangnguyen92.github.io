import React, { memo } from 'react';
import { Main } from "./styled";
import { Card, Input, TextArea, DatePicker, SelectCustom, Button } from 'components/Cores';
import { levels } from "../../constants";
import FormItem from "components/FormItem";
const NewTask = ({ }) => {

  return (
    <Main >
      <Card>
        <FormItem inputComponent={Input} placeholder="Add new task" />
        <FormItem inputComponent={TextArea} label="Discription" />
        <div className="container-divider">
          <div className="col col50">
            <FormItem inputComponent={DatePicker} label="Due date" />
          </div>
          <div className="col col50">
            <FormItem inputComponent={SelectCustom} label="Priority" options={levels}/>
          </div>
        </div>
        <div className="action">
        <Button children={"Add new"} type={"primary"} />
        </div>
      </Card>
    </Main>
  )
};

export default memo(NewTask)