import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import TableBody from "./common/TableBody";
import { GetallFormVideoask } from "../services/videoaskService";
import { useSelector, useDispatch } from "react-redux";
import { loadForm } from "../store/formvideoask";
import MailForm from "./MailForm";
import { Link } from "react-router-dom";
import { getEmails } from "../store/contacts";
import { listGroupApplicant } from "../store/applicant";

function Main() {
  const dispatch = useDispatch();
  const forms = useSelector((state: any) => state.entities.forms);
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [selectedForm, setSelctedForm] = useState<string>("");

  const stage = useSelector((state: any) => state.entities.stage);
  const applicantsFromDb = useSelector((state: any) => state.entities.comments);
  const applicantsFromVideoAsk = useSelector(
    (state: any) => state.entities.applicants
  );

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

  const handleOnChange = (value: any) => {
    dispatch(
      listGroupApplicant({
        value,
        applicantsFromDb,
        applicantsFromVideoAsk,
      })
    );
  };

  useEffect(() => {
    async function getLoadForm() {
      const form = await GetallFormVideoask();
      dispatch(loadForm(form));
    }
    getLoadForm();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        <select onChange={(e) => handleOnChange(e.target.value)}>
          {stage.map((s: any) => (
            <option key={s._id}>{s.name}</option>
          ))}
        </select>
      </form>
      <HeadCss>
        <SearchBar />
      </HeadCss>
      <TableBody onChange={handleChange} />
      {checkEmail ? (
        <Email to="/mail" onClick={() => dispatch(getEmails(checkEmail))}>
          SÄND
          <i
            className="fa-solid fa-envelope"
            style={{
              fontSize: "18px",
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  form {
    display: flex;
    flex-direction: column;
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

const HeadCss = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

const Email = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.6;
  text-decoration: double underline red;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
  :active {
    transform: scale(1.3);
  }
`;

const Text = styled.div`
  margin-left: 10px;
`;
