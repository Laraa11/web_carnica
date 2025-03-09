import styled from 'styled-components'

export const Tabla = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;