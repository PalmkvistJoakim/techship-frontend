import DataContext from "../context/DataContext";
import EmailContext from "../context/EmailContext";
import { IEmail } from "../types/IEmail";
import { IVideoask } from "../types/IVideoAsk";
import { Link } from "react-router-dom";
import { useContext, FormEvent } from "react";
import styled from "styled-components";
import TableBody from "./common/TableBody";
import TableHeader from "./common/TableHeader";

export interface IColumns {
  label: string | JSX.Element;
  path: string;
  content?: (data: IVideoask) => void;
}

function ApplicantsTable() {
  const data = useContext(DataContext) as IVideoask[];
  const { onChange } = useContext(EmailContext) as IEmail;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const columns = [
    {
      label: <i className="fa-solid fa-envelope" />,
      path: "email",
      content: (data: IVideoask) => (
        <form onSubmit={handleSubmit}>
          <input
            type="checkbox"
            onChange={onChange}
            value={data.email}
            name={data.email}
          />
        </form>
      ),
    },
    {
      label: <i className="fa-solid fa-comments" />,
      path: "comment",
      content: () => <i className="fa-regular fa-comment" />,
    },
    {
      label: "Namn",
      path: "name",
      content: (data: IVideoask) => (
        <LinkStyle to={`/dashboard/${data.contact_id}`}>{data.name}</LinkStyle>
      ),
    },
    { label: "Steg", path: "stage.name" },
    { label: "Skapad", path: "created_at" },
    { label: "Status", path: "status" },
  ];

  return (
    <>
      <TableHeader columns={columns} /> <TableBody />
    </>
  );
}

export default ApplicantsTable;

const Container = styled.div`
  display: grid;
  grid-template-areas: "getapplications" "batches" "searchbar" "sendemailsort" "table";
  grid-template-rows: 10% 10% 10% 10% 60%;
`;

const LinkStyle = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #58eac1;
`;
