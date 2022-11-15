import Joi from "joi";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SendEmail } from "../services/mejlService";
import { ICategory } from "../store/stage";
import { useForm } from "./hooks/useForm";
import { useParams } from "react-router-dom";

interface IMail {
  subject: string;
  text: string;
}

const schema = Joi.object({
  subject: Joi.string().label("subject"),
  text: Joi.string(),
});

const MailForm = () => {
  const params = useParams();
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const { data, renderInput, renderButton, handleSubmit, renderTextArea } =
    useForm<IMail>(
      {
        subject: "",
        text: "",
      },
      schema
    );

  async function doSubmit() {
    try {
      const res = await SendEmail({
        email: "",
        subject: data.subject,
        message: data.text,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value + ",";
    const checked = e.target.checked;
    if (checked) {
      // @ts-ignore
      setCheck([...checkEmail, value]);
    } else {
      setCheck(value);
    }
  };
  return (
    <div>
      <StyledForm>
        <form onSubmit={handleSubmit(doSubmit)}>
          <h1> Send Email </h1>
          {renderInput("subject", "", "Subject", "text")}
          {renderTextArea("text", "", "message")}
          {renderButton("Send")}
          <input
            type="checkbox"
            onChange={handleChange}
            value={checkEmail}
            name="email"
          />
        </form>
      </StyledForm>
    </div>
  );
};

export default MailForm;

const StyledForm = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  form {
    padding: 3rem;
    height: 320px;
    border-radius: 20px;
    border: 1px solid white;
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;

    textarea {
      width: 100%;
      height: 200px;
      padding: 10px;
      border-radius: 1rem;
      margin-top: 5px;
    }
  }
`;
