import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import TableBody from "./common/TableBody";
import { GetallFormVideoask } from "../services/videoaskService";
import { useSelector, useDispatch } from "react-redux";
import { loadForm } from "../store/formvideoask";
import { Link } from "react-router-dom";
import { getEmails } from "../store/contacts";
import {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useRemoveCategoryMutation,
} from "../store/Api";
import { useForm } from "../hooks/useForm";
import Joi from "joi";
import { toast } from "react-toastify";

interface Category {
  name: string;
}

function Main() {
  const schema = Joi.object({
    name: Joi.string().label("name"),
  });
  const {
    data: body,
    renderInput,
    handleSubmit,
    renderButton,
  } = useForm<Category>(
    {
      name: "",
    },
    schema
  );
  const dispatch = useDispatch();
  const forms = useSelector((state: any) => state.entities.forms);
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [selectedForm, setSelctedForm] = useState<string>("");
  const [selectedStage, setStage] = useState<string>("");
  const { data: Category } = useGetCategoriesQuery("category");
  const [addCategory] = useAddCategoryMutation();
  const [RemoveStage] = useRemoveCategoryMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      // @ts-ignore
      setCheck([...checkEmail, value]);
    } else {
      setCheck(value);
    }
  };

  useEffect(() => {
    async function getLoadForm() {
      const form = await GetallFormVideoask();
      dispatch(loadForm(form));
    }
    getLoadForm();
  }, [selectedForm, selectedStage, Category]);

  async function handleSubmitSelect(e: React.FormEvent<HTMLFormElement>) {
    localStorage.setItem("form", selectedForm);
  }

  async function doSubmit() {}

  async function handleRemoveStage() {
    try {
      await RemoveStage(selectedStage);
      toast.success("🦄 Stage borttagen", { theme: "dark" });
    } catch (error) {}
  }
  async function handleAddStage() {
    try {
      await addCategory(body);
      toast.success("🦄 Stage har lagts till", { theme: "dark" });
    } catch (error) {}
  }

  console.log("selctedStagecategory", selectedStage);
  return (
    <Container>
      <HeadCss>
        <SearchBar />
      </HeadCss>
      <Wrapper>
        <form onChange={handleSubmit(doSubmit)}>
          {renderInput("name", "Lägg till ny stage", "text")}
        </form>
        <i
          className="fa-solid fa-circle-plus"
          onClick={handleAddStage}
          style={{ color: "blue", cursor: "pointer", fontSize: "15px" }}
        ></i>
        <i
          className="fa-regular fa-trash-can"
          onClick={handleRemoveStage}
          style={{ color: "red", cursor: "pointer", fontSize: "14px" }}
        ></i>
      </Wrapper>
      <form onSubmit={handleSubmitSelect}>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelctedForm(e.target.value)
          }
          value={selectedForm}
        >
          <option value="" disabled={true}>
            {" "}
            Batch{" "}
          </option>
          {forms.map((f: any) => (
            <option key={f.form_id} value={f.form_id}>
              {f.title}
            </option>
          ))}
        </select>
        <button type="submit"> ^ </button>

        <select
          onChange={(e) => setStage(e.target.value)}
          value={selectedStage}
        >
          <option value="" disabled={true}>
            {" "}
            Stage{" "}
          </option>
          {Category?.map((s: any) => (
            <option key={s._id} value={s._id}>
              {s.name}{" "}
            </option>
          ))}
        </select>
      </form>

      <TableBody onChange={handleChange} />
      {checkEmail ? (
        <Email to="/mail" onClick={() => dispatch(getEmails(checkEmail))}>
          Send
          <i
            className="fa-solid fa-paper-plane"
            style={{
              fontSize: "16px",
              backgroundColor: "black",
              marginLeft: "10px",
            }}
          ></i>
        </Email>
      ) : (
        <Text>
          {" "}
          <i
            className="fa-solid fa-arrow-up"
            style={{
              fontSize: "12px",
              marginRight: "10px",
            }}
          ></i>
          VÄLJ MEJL
        </Text>
      )}
    </Container>
  );
}

export default Main;

const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 8rem;
    border: none;
    padding: 5px;
    color: black;
    font-weight: bold;
    border-radius: 0.3rem;
    cursor: pointer;
    :hover {
      background-color: #a8f5df;
      transform: scale(0.9);
    }
    :active {
      transform: rotate(1);
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  gap: 10px;

  form {
    display: flex;
    justify-content: center;
    gap: 2px;
    select {
      justify-content: center;
      text-align: center;

      border: none;
      border-radius: 2rem;
      align-items: center;
      font-weight: 700;

      option {
        border-radius: 1rem;
        font-weight: bold;
        font-size: 14px;
      }
    }

    button {
      cursor: pointer;
      border: none;
      font-weight: bold;
      padding: 0.8rem;
      border-radius: 2rem;
      transition: width 2s;

      :hover {
        opacity: 0.8;
      }
      :active {
        transform: scale(0.8);
      }
    }
  }
`;

const HeadCss = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.8rem;
`;

const Email = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  align-items: center;
  display: flex;
  opacity: 0.6;
  margin-left: 10px;
  margin-top: 5%;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

const Text = styled.div`
  margin-left: 10px;
  margin-top: 5%;
`;
