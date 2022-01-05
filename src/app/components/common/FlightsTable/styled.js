import styled from "styled-components";
import { colorPalete } from "../../../theme/colors";

export const WrapperTable = styled.table`
  border-spacing: 0px;
  margin: 1rem;
  padding: 0;
  border: 1px solid #fff;
  tbody {
    background-color: ${colorPalete.h};
    color: #fff;
    margin: 1rem;
    color: wheat;
  }

  td {
    padding: 1rem;
    text-align: center;
    border: 1px solid ${colorPalete.d};
  }
`;
export const DataCell = styled.td`
  color: #fff;
`;
export const HeaderCells = styled.td`
  font-weight: 200;
`;
