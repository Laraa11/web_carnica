import styled from 'styled-components'
import {Table} from 'antd';
import { StyledButton } from './main/main-styled';
import { Input } from 'antd';  
const { Search } = Input;

const grisOscuro = '#1d1d1d';
const grisMedio = '#353535';
const blancoAzul = '#f1f1f1';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 80px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${grisOscuro};
  margin-bottom: 20px;
  justify-content: left;
  align-items: left;
  display: flex;
`;

export const DefaultTable = styled(Table)` 
  width: 100% !important;
  border: 1px solid ${blancoAzul} !important;
  border-radius: 8px !important;
  justify-content: center;
  align-items: center;
  display: flex;
  th {
    font-size: 16px; 
    font-weight: bold;
    color: ${grisOscuro}; 
    padding: 10px;
    background-color: ${blancoAzul} !important;
  }
`

export const CrudButton = styled(StyledButton)`
  background-color: ${grisOscuro} !important;
  color: white !important;
  text-transform: none;
  border-radius: 5px ;
  padding: 8px 10px !important;
  width: 200px;
  &:hover {
    background-color: ${grisMedio} !important;
  }
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
`;

export const ContainerInLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;


export const SearchInput = styled(Search)`
  width: 300px;
  padding: 8px 10px !important;
  .ant-input-search-button {
    background-color: ${grisOscuro} !important;
    border: none !important;
  .anticon-search {
    color: white !important; 
  }
`;

