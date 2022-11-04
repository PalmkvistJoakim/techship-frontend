import { ChangeEvent, FormEvent, useState } from "react";
import Joi from "joi";
import styled from "styled-components";

export function useForm<FormData>(
  formData: FormData,
  schema: Joi.ObjectSchema<FormData>
) {
  type Errors = {
    [Property in keyof FormData]?: string;
  };

  const [data, setData] = useState<FormData>(formData);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(doSubmit: () => void) {
    return function (e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const errors = validate();
      setErrors(errors || {});

      if (errors) return;

      doSubmit();
    };
  }

  function handleChange({ target: input }: ChangeEvent<HTMLInputElement>) {
    const inputName = input.name as keyof FormData;

    const errorMessage = validateProperty(input);

    if (errorMessage) errors[inputName] = errorMessage;
    else delete errors[inputName];

    setErrors({ ...errors });

    data[inputName] = input.value as FormData[keyof FormData];

    setData({ ...data });
    console.log(data);
  }

  function validateProperty({ name, value }: HTMLInputElement) {
    const subSchema = schema.extract(name);
    const { error } = subSchema.validate(value);

    if (!error) return null;

    return error.message;
  }

  function validate() {
    const options: Joi.ValidationOptions = { abortEarly: false };
    const { error } = schema.validate(data, options);

    if (!error) return null;

    const errors: Errors = {};
    for (const detail of error.details)
      errors[detail.path[0] as keyof Errors] = detail.message;

    return errors;
  }

  function renderInput(
    name: keyof FormData,
    label: string,
    placeholder: string,
    type: string
  ): JSX.Element {
    return (
      <>
        <Label>{label}</Label>
        <Input
          placeholder={placeholder.toUpperCase()}
          type={type}
          name={name as string}
          value={data[name] as string}
          onChange={handleChange}
        />
        {errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
      </>
    );
  }

  function renderButton(label: string): JSX.Element {
    return <Button disabled={!!validate()}>{label}</Button>;
  }

  return {
    data,
    errors,
    handleSubmit,
    renderButton,
    renderInput,
  };
}

const ErrorMsg = styled.p`
  opacity: 0.8;
  color: red;
  border: none;
  padding: 9px;
  font-size: 14px;
`;

const Label = styled.label`
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #58eac1;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  width: 8rem;
  border: none;
  padding: 10px;
  color: black;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  :hover {
    background-color: #7f96ff;
    transform: scale(0.9);
  }
  :active {
    transform: rotate(1);
  }
`;

const Input = styled.input`
  border: none;
  width: 30rem;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
`;
