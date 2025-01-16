import { useState } from 'react'
import { Button, AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import { FaUser } from "react-icons/fa"
import Operarios  from './operarios'
import AsignacionPage from './asignacion'
import ValidacionPage from './validacion'
import ProductosPage from './productos'
import ResumenPage from './resumen'

const Main = () => {
  const [currentPage, setCurrentPage] = useState('asinacion')

  const handleLogout = () => {
    console.log('Cerrando sesión...')
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'asignacion':
        return <AsignacionPage/>
      case 'validacion':
        return <ValidacionPage/>
      case 'creacion':
        return <Operarios/>
      case 'productos':
        return <ProductosPage/>
      case 'resumen':
      default:
        return <ResumenPage/>
    }
  }

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography>
            Panel de Control
          </Typography>
          <Box>
            <NavButton icon={<FaUser />} label="Creación" page="creacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavButton label="Resumen" page="resumen" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavButton label="Asignación" page="asignacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavButton label="Productos" page="productos" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavButton label="Validación" page="validacion" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Box>
          <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
        </Toolbar>
      </AppBar>

      <Box>
        <Box>
          {renderContent()}
        </Box>
      </Box>
    </Container>
  )
}

function NavButton({ icon, label, page, currentPage, setCurrentPage }) {
  return (
    <Button
      variant={currentPage === page ? 'contained' : 'outlined'}
      color="white"
      onClick={() => setCurrentPage(page)}
      startIcon={icon}
      sx={{ textTransform: 'none' }}
    >
      {label}
    </Button>
  )
}

export default Main;