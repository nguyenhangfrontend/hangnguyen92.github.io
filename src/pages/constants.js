import React, { Suspense } from "react";

const TodoList = React.lazy(() => import("./todoList"));




export function todoList(props) {
  return (
    <Suspense fallback={<div>{"loading..."}</div>}>
      <TodoList {...props} />
    </Suspense>
  );
}
