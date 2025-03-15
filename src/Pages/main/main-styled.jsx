import styled from 'styled-components'
import { Button } from '@mui/material'

const grisOscuro = '#1d1d1d';
const grisMedio = '#353535';
const blancoAzul = '#f1f1f1';

export const MainContainer = styled.div`
  background-color: ${blancoAzul};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  gap: 30px;
`;

export const NavButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-grow: 1;
  justify-content: center;
`;

export const LogoutButton = styled(Button)`
  color: white !important;
  text-transform: none !important;
  border-radius: 5px !important;
  padding: 5px 10px !important;
  background-color: ${grisOscuro} !important;

  &:hover {
    color: white !important;
    background-color: ${grisMedio} !important;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => (props.active ? `${grisOscuro}` : "transparent")} !important;
  color: ${(props) => (props.active ? "white" : "black" )} !important;
  text-transform: none !important;
  border-radius: 5px !important;
  padding: 3px 10px !important;
  &:hover {
    background-color: ${(props) => (props.active ? `${grisMedio}` : `${blancoAzul}`)} !important;
  }
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 40px;eeee
`;