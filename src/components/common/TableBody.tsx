import { useContext } from "react";
import ApplicantsContext from "../../context/ApplicantsContext";
import DataContext from "../../context/DataContext";
import IApplicant from "../../types/IApplicant";
import { IVideoask } from "../../types/IVideoAsk";
import styled from "styled-components";
import { IColumns } from "../ApplicantsTable";
import _ from "lodash";

interface Props {
  columns: IColumns[];
}

function TableBody({ columns }: Props): JSX.Element {
  const applicants = useContext(ApplicantsContext) as IApplicant[];
  const data = useContext(DataContext) as IVideoask[];

  const renderCell = (data: IVideoask, column: IColumns) => {
    if (column.content) return column.content(data);
    return _.get(data, column.path);
  };

  return (
    <>
      <Tbody>
        {data.map((d) => (
          <Tr key={d.answer_id}>
            {columns.map((column) => (
              <Td key={column.path}>{renderCell(d, column)}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </>
  );
}

export default TableBody;

const Tbody = styled.tbody`
  display: grid;
  grid-template-rows: 1fr;
  border-collapse: collapse;
  border: 1px solid;
  padding: 2px;
`;

const Tr = styled.tr`
  display: grid;
  grid-template-columns: 36px 36px 244px 248px 184px 178px;
  border-bottom: 1px solid;
  padding: 8px;
`;

const Td = styled.td`
  text-align: left;
`;
