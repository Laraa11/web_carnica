import styled from 'styled-components'
import { Checkbox, Modal, Select, Table, Input, DatePicker } from 'antd';
import { StyledButton } from './main/main-styled';

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
  border-radius: 8px !important;
  justify-content: center;
  align-items: center;
  display: flex;

  .ant-table-container {
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  border-top: none;
  }
  
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

export const ContainerHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

export const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const SearchInput = styled(Search)`
  width: 250px;
  padding: 8px 10px !important;

  .ant-input-search-button {
    background-color: ${grisOscuro} !important;
    border: none !important;
    padding: 17px 15px !important;

    .anticon-search {
      color: white !important;
    }
  }
  .ant-input {
    padding: 5px 15px !important;
    &:focus,
    &:focus-within {
      box-shadow: none !important;
    }
  }
`;

export const CrudInput = styled(Input)`
  padding: 8px 10px !important;
  width: 100%;
  &:focus,
    &:focus-within {
      box-shadow: none !important;
    }
`;

export const CrudSelect = styled(Select)`
  &.ant-select-focused .ant-select-selector {
    box-shadow: none !important;
  }
`;

export const CustomModal = styled(Modal)`
  width: fit-content !important;
  .ant-modal-content {
    padding: 30px !important;
  }
  .ant-btn-variant-solid {
    box-shadow: none !important;
  }
`;

export const CrudCheckBox = styled(Checkbox)`

`;

export const CrudSelectDate = styled(DatePicker)`
  padding: 8px 10px !important;
  &:focus,
  &:focus-within {
    box-shadow: none !important;
  }
`;