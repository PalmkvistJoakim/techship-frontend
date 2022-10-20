import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";
import styled from "styled-components";
import { Sendmail } from "../services/emailService";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { http } from "../services/httpService";
import { IVideoask } from "../types/VideoAsk";

function Table(): JSX.Element {
  const [checkEmail, setCheck] = useState<string | string[]>("");
  const [data, setData] = useState<IVideoask[]>([]);

  const onSubmit = () => {
    Sendmail(checkEmail);
    console.log(checkEmail);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await http.get("http://localhost:5000/api/videoask");
      setData(data.results);
    };
    getData();
  }, []);

  console.log(data);
  return (
    <Container>
      <Warrper>
        <button type="submit" onClick={() => onSubmit()}>
          Send Email
        </button>
        <SearchBar />
      </Warrper>
      <TableCSS>
        <TableHeader />
        <TableBody setCheck={setCheck} checkEmail={checkEmail} data={data} />
      </TableCSS>
    </Container>
  );
}

export default Table;

const Container = styled.div`
  margin-top: 5%;
`;

const TableCSS = styled.table`
  background-color: white;
  color: black;
  border-collapse: collapse;
  border: 1px solid white;
  margin-left: 10%;

  @media (max-width: 600px) {
    width: auto;
    margin-right: 30px;
  }
`;

const Warrper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 58%;
  margin-left: 10%;

  @media (max-width: 600px) {
    width: auto;
    position: absolute;
    right: 0;
    top: 20%;
  }

  button {
    width: auto;
    padding: 12px;
    background-color: #58eac1;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
      background-color: #b9e7db;
    }

    @media (width < 600px) {
      width: auto;
      margin-right: 30px;
    }
  }
`;
