// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValues) => {
  console.log("Custom form hook is working... it's working!");
  const [values, setValues] = useState(initialValues);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, handleChanges];
};
