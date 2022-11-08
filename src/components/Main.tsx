import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState } from "react";
import { ChangeEvent } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";
import { GetDataFromVideoask } from "../services/videoaskService";
import { useSelector } from "react-redux";

function Main() {
  const forms = useSelector((state: any) => state.entities.forms);
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [selectedForm, setSelctedForm] = useState<string>("");

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("form", selectedForm);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelctedForm(e.target.value)
          }
          value={selectedForm}
        >
          <option value=""> Välj Batch </option>
          {forms.map((f: any) => (
            <option key={f.form_id} value={f.form_id}>
              {f.title}
            </option>
          ))}
        </select>
        <button type="submit"> Hämta </button>
      </form>
      <HeadCss>
        <SendMail href={`mailto:?bcc=${checkEmail}`}>Sänd mejl</SendMail>
        <SearchBar />
        <TableHeader />
      </HeadCss>
      <TableBody onChange={handleChange} />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    select {
      justify-content: center;
      text-align: center;

      border: none;
      padding: 10px;
      border-radius: 2rem;
      align-items: center;
      font-weight: 700;
      background-color: #58eac1;

      option {
        border-radius: 2rem;
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
      background-color: #58eac1;
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

const SendMail = styled.a`
  grid-template-columns: 1fr;
  background-color: #58eac1;
  border-radius: 1rem;
  width: 6rem;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: black;
  text-decoration: none;
  justify-content: center;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.8);
  }
  @media (width < 600px) {
    width: auto;
    margin-right: 30px;
  }
`;

const HeadCss = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;
