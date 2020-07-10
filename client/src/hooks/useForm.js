// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const showMessage = () => {
    setShowSuccessMessage(true);
  };

  return [values, handleChanges, showSuccessMessage, showMessage];
};
