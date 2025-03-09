import { useState } from 'react'
import OperariosPage from '../operarios1'
import AsignacionPage from '../asignacion'
import ValidacionPage from '../validacion'
import ProductosPage from '../productos'
import ResumenPage from '../resumen'
import { LogoutButton, MainContainer, NavButtonContainer, NavContainer, StyledButton, StyledLabel, Title } from './main-styled'
import { FaTable } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { GrTableAdd } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";
import { IoExit } from "react-icons/io5";
const Main = () => {
  const [currentPage, setCurrentPage] = useState("asignacion");
  const handleLogout = () => {
    console.log("Cerrando sesión...");
  };

  const renderContent = () => {
    switch (currentPage) {
      case "asignacion":
        return <AsignacionPage />;
      case "validacion":
        return <ValidacionPage />;
      case "operarios":
        return <OperariosPage />;
      case "productos":
        return <ProductosPage />;
      case "resumen":
      default:
        return <ResumenPage />;
    }
  };

  return (
    <MainContainer>
      <NavContainer>
        <Title>CARNICAZA</Title>
        <NavButtonContainer>
          <NavButton icon={<FaTable style={{fontSize : "20px"}}/>} label="Resumen" page="resumen" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavButton icon= {<IoPeople style={{fontSize : "25px"}}/>} label="Asignación" page="asignacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavButton icon={<GrTableAdd style={{fontSize : "20px"}}/>}label="Productos" page="productos" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavButton icon={<BsPersonCheckFill style={{fontSize : "22px"}}/>} label="Validación" page="validacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <NavButton icon = {<IoMdPersonAdd style={{fontSize : "25px"}}/>} label="Operarios" page="operarios" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </NavButtonContainer>
        <LogoutButton 
          type="default" 
          onClick={handleLogout}>
          <StyledLabel><IoExit style={{fontSize : "20px"}} />Cerrar Sesión</StyledLabel>
        </LogoutButton>
      </NavContainer>

      <div style={{ padding: "20px" }}>
        {renderContent()}
      </div>
    </MainContainer>
  );
};

function NavButton({ label, icon, page, currentPage, setCurrentPage}) {
  return (
    <StyledButton
      active={currentPage === page}
      onClick={() => setCurrentPage(page)}
    >
      <StyledLabel>{icon} {label}</StyledLabel>
    </StyledButton>
  );
}
export default Main;