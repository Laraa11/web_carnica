import styled from 'styled-components'
import {Table} from 'antd';
import { StyledButton } from './main/main-styled';
import { Input } from 'antd';  
const { Search } = Input;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1d1d1d;
  margin-bottom: 20px;
  justify-content: left;
  align-items: left;
  display: flex;
`;

export const DefaultTable = styled(Table)` 
  width: 100% !important;
  border: 1px solid #ddd !important;
  border-radius: 8px !important;
  justify-content: center;
  align-items: center;
  display: flex;
  th {
    font-size: 16px; 
    font-weight: bold;
    color: #1d1d1d; 
    padding: 10px;
    background-color: #f1f1f1 !important;
  }
`

export const CrudButton = styled(StyledButton)`
  background-color: #1d1d1d !important;
  color: white !important;
  text-transform: none;
  border-radius: 5px ;
  padding: 8px 10px !important;
  width: 200px;
  &:hover {
    background-color: #353535 !important;
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
  width: 250px;
  padding: 8px 10px !important;
`;