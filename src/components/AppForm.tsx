import React from "react";
import { useForm } from "react-hook-form";
import { AppInput } from "./AppInput";

type FormType = {
  text: string;
};

function AppForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AppInput<FormType>
        control={control}
        name="text"
        label="Text Input Label"
        helperText="Enter your text area"
        errors={errors}
      />
    </form>
  );
}

export default AppForm;
