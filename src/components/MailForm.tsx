import Joi from "joi";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SendEmail } from "../services/mejlService";
import { useForm } from "../hooks/useForm";
import { useGetCategoriesQuery } from "../store/Api";
import { toast } from "react-toastify";

interface IMail {
  subject: string;
  text: string;
}

const schema = Joi.object({
  subject: Joi.string().label("subject"),
  text: Joi.string(),
});

const MailForm = () => {
  const allMail = useSelector((state: any) => state.entities.contacts);
  console.log("allMail", allMail);
  const { data: category } = useGetCategoriesQuery("category");

  const stage = useSelector((state: any) => state.entities.stage);
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
        email: allMail,
        subject: data.subject,
        message: data.text,
      });
      toast.success("✅ Skickat.", { theme: "dark" });
    } catch (error) {
      console.log(error);
    }
  }

  const filteradCategory = category?.filter((c: any) => c._id === stage);
  const CategoryName = filteradCategory?.map((c: any) => c.name);

  return (
    <div>
      <StyledForm>
        <form onSubmit={handleSubmit(doSubmit)}>
          <h1> {CategoryName}</h1>
          {renderInput("subject", "Subject...", "subject")}
          <Dropdown>
            <select>
              <option disabled={true}> All mejl du valde... </option>
              {allMail.map((mail: any, i: number) => (
                <option key={i} value={mail}>
                  {mail}
                </option>
              ))}
            </select>
          </Dropdown>
          {renderTextArea("text", "", "message...")}
          {renderButton("Send")}
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
    height: 380px;
    border-radius: 20px;
    border: 1px solid white;
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;

    input {
      color: black;
    }

    h1 {
      margin-bottom: 10px;
      font-weight: bold;
    }

    textarea {
      width: 100%;
      height: 200px;
      padding: 10px;
      border-radius: 1rem;
      margin-top: 5px;
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 22rem;
  padding: 8px;
  border-radius: 1rem;

  select {
    padding: 8px;
    font-weight: bold;
    border-radius: 1rem;
  }
  option {
    font-weight: bold;
  }
`;
