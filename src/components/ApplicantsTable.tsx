import DataContext from "../context/DataContext";
import EmailContext from "../context/EmailContext";
import { IEmail } from "../types/IEmail";
import { IVideoask } from "../types/IVideoAsk";
import Table from "./common/Table";
import { Link } from "react-router-dom";
import { useContext, FormEvent } from "react";

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
        <Link to={"/application/:id"}>{data.name}</Link>
      ),
    },
    { label: "Steg", path: "stage.name" },
    { label: "Skapad", path: "created_at" },
    { label: "Status", path: "status" },
  ];

  console.log("columns i AT", columns);

  return <Table columns={columns} />;
}

export default ApplicantsTable;
