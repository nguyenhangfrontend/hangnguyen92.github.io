import React, { Suspense } from "react";

const Creation = React.lazy(() => import("./config"));
const PatientList = React.lazy(() => import("./patientList"));


export function creation(props) {
  return (
    <Suspense fallback={<div>{"loading..."}</div>}>
      <Creation {...props} />
    </Suspense>
  );
}


export function patientList(props) {
  return (
    <Suspense fallback={<div>{"loading..."}</div>}>
      <PatientList {...props} />
    </Suspense>
  );
}
