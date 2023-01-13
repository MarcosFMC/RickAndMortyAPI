import { CreateForm } from "@/models";
import { useState } from "react";

export const useForm = (initialForm: CreateForm, validateForm: Function) => {
  const [form, setForm] = useState<CreateForm>(initialForm);
  const [errors, setErrors] = useState<CreateForm>(initialForm);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e: any) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = () => {
    setForm(initialForm);
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
