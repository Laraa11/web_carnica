import styled from 'styled-components'
import {Table} from 'antd';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 100px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DefaultTable = styled(Table)` 
  width: 100% !important;
  border: 1px solid #ddd !important;
  border-radius: 8px !important;
  th {
    font-size: 16px; 
    font-weight: bold;
    color: #1d1d1d; 
    padding: 10px;
    background-color: #f1f1f1 !important;
  }
`