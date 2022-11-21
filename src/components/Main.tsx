import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState, FormEvent } from "react";
import { ChangeEvent } from "react";
import TableBody from "./common/TableBody";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEmails } from "../store/contacts";
import { setStage } from "../store/stage";
import { useGetCategoriesQuery, useGetFormVideaskQuery } from "../store/Api";
import { IStage } from "../types/IStage";
import { IForm, IVideoask } from "../types/IVideoAsk";

const DEFAULT_CATEGORY = { _id: "", name: "ALL APPLICANTS" };

function Main() {
  const form = localStorage.getItem("form");
  const dispatch = useDispatch();
  const { data: forms } = useGetFormVideaskQuery("Form");
  const [selectedForm, setSelctedForm] = useState<string>("");
  const stage = useSelector((state: IStage) => state.entities.stage);
  const filterApplicant = useSelector(
    (state: IVideoask) => state.entities.filterApplicant
  );
  const { data: Category = [] } = useGetCategoriesQuery("category");
  const categories = [DEFAULT_CATEGORY, ...Category];

  // const [addCategory] = useAddCategoryMutation();
  // const [RemoveStage] = useRemoveCategoryMutation();

  const handleSetStage = (value: any) => {
    dispatch(setStage(value));
  };

  let mailList: any = [];
  mailList = filterApplicant?.map((c: IVideoask) => c.email);

  function handleSubmitSelect(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleSelcetForm(e: ChangeEvent<HTMLSelectElement>) {
    const form = e.target.value;
    localStorage.setItem("form", form);
    setSelctedForm(form);
    window.location.reload();
  }

  // async function handleRemoveStage() {
  //   try {
  //     const result = window.confirm(`Är du säkert du vill radera Staget ?`);
  //     if (result === true) {
  //       await RemoveStage(stage);
  //       toast.success("🦄 Stage borttagen", { theme: "dark" });
  //     } else {
  //       return;
  //     }
  //   } catch (error) {}
  // }
  // async function handleAddStage() {
  //   try {
  //     await addCategory(body);
  //     toast.success("🦄 Stage har lagts till", { theme: "dark" });
  //   } catch (error) {
  //     toast.error("👀 Något gick fel!", { theme: "dark" });
  //   }
  // }
  // async function doSubmit() {}
  return (
    <Container>
      <HeadCss>
        <SearchBar />
      </HeadCss>
      {/* <Wrapper>
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
      </Wrapper> */}
      <form onSubmit={handleSubmitSelect}>
        <Dropdown>
          <select
            onChange={handleSelcetForm}
            value={form ? form : selectedForm}
          >
            <option value="" disabled={true}>
              Välj Batch
            </option>
            {forms?.map((f: IForm) => (
              <option key={f.form_id} value={f.form_id}>
                {f.title}
              </option>
            ))}
          </select>
        </Dropdown>
        <Dropdown>
          <select
            onChange={(e) => handleSetStage(e.target.value)}
            value={stage}
          >
            <option value="" disabled={true}>
              Välj Stage
            </option>
            {categories?.map((s: any) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>
        </Dropdown>
      </form>
      <TableBody />
      <Email to="/mail" onClick={() => dispatch(getEmails(mailList))}>
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
    </Container>
  );
}

export default Main;

// const Wrapper = styled.div`
//   margin-left: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 5px;

//   button {
//     margin-top: 10px;
//     margin-bottom: 10px;
//     width: 8rem;
//     border: none;
//     padding: 5px;
//     color: black;
//     font-weight: bold;
//     border-radius: 0.3rem;
//     cursor: pointer;
//     :hover {
//       background-color: #a8f5df;
//       transform: scale(0.9);
//     }
//     :active {
//       transform: rotate(1);
//     }
//   }
// `;

const Dropdown = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  select {
    margin-top: 10px;
    border: none;
    padding: 6px;
    border-radius: 0.3rem;
    font-size: 13px;
    font-weight: 300;
    text-align: center;

    option {
      font-size: 16px;
      font-weight: 500;
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
        :checked {
          background: linear-gradient(#d6d6d6, #d6d6d6);
          background-color: black !important;
          color: white !important;
        }
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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  text-align: center;
`;
