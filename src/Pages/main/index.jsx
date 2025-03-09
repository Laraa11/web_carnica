import { useState } from 'react'
import { Button, AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import OperariosPage from '../operarios1'
import AsignacionPage from '../asignacion'
import ValidacionPage from '../validacion'
import ProductosPage from '../productos'
import ResumenPage from '../resumen'
import { MainContainer, NavContainer, StyledButton } from './main-styled'

const Main = () => {
  const [currentPage, setCurrentPage] = useState('asignacion')

  const handleLogout = () => {
    console.log('Cerrando sesión...')
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'asignacion':
        return <AsignacionPage />
      case 'validacion':
        return <ValidacionPage />
      case 'operarios':
        return <OperariosPage />
      case 'productos':
        return <ProductosPage />
      case 'resumen':
      default:
        return <ResumenPage />
    }
  }

  return (

    <MainContainer>
      <NavContainer>
        <h2>Panel de Control</h2>
        <NavButton label="Resumen" page="resumen" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <NavButton label="Asignación" page="asignacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <NavButton label="Productos" page="productos" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <NavButton label="Validación" page="validacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <NavButton label="Operarios" page="operarios" currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
      </NavContainer>
      
      {renderContent()}
      </MainContainer>

  )
}

function NavButton({ icon, label, page, currentPage, setCurrentPage }) {
  return (
    <StyledButton
      variant={currentPage === page ? 'contained' : 'outlined'}
      color="white"
      onClick={() => setCurrentPage(page)}
      startIcon={icon}
      sx={{ textTransform: 'none' }}
    >
      {label}
    </StyledButton>
  )
}

export default Main;