import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Box, Typography } from '@mui/material';

export function Operarios() {
  const [operarios, setOperarios] = useState([
    { id: 1, nombre: 'Juan', apellidos: 'Pérez García', accesoWeb: true, tipoAcceso: 'Administrador' },
    { id: 2, nombre: 'María', apellidos: 'García López', accesoWeb: true, tipoAcceso: 'Jefe de Sala' },
    { id: 3, nombre: 'Carlos', apellidos: 'Rodríguez Sánchez', accesoWeb: false, tipoAcceso: null },
  ]);

  const [editingOperario, setEditingOperario] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleEditOperario = (operario) => {
    setEditingOperario({ ...operario });
    setOpenDialog(true);
  };

  const handleSaveOperario = () => {
    if (editingOperario) {
      setOperarios(operarios.map(op => op.id === editingOperario.id ? editingOperario : op));
      setEditingOperario(null);
    }
    setOpenDialog(false);
  };

  const handleCreateOperario = () => {
    setIsCreating(true);
    setEditingOperario({
      id: Date.now(),
      nombre: '',
      apellidos: '',
      accesoWeb: false,
      tipoAcceso: null
    });
    setOpenDialog(true);
  };

  const handleSaveNewOperario = () => {
    if (editingOperario) {
      setOperarios([...operarios, editingOperario]);
      setEditingOperario(null);
      setIsCreating(false);
    }
    setOpenDialog(false);
  };

  const handleDeleteOperario = (id) => {
    setOperarios(operarios.filter(operario => operario.id !== id));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h5" component="h2">Alta Operario</Typography>
        <Button variant="contained" color="primary" onClick={handleCreateOperario} startIcon={<>icon</>} >Crear Operario</Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombres y Apellidos</TableCell>
            <TableCell>Acceso Web</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operarios.map((operario) => (
            <TableRow key={operario.id}>
              <TableCell>{`${operario.nombre} ${operario.apellidos}`}</TableCell>
              <TableCell>
                {operario.accesoWeb ? (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <>check</>
                    <Typography>{operario.tipoAcceso}</Typography>
                  </Box>
                ) : (
                  <>x</>
                )}
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" size="small" onClick={() => handleEditOperario(operario)} startIcon={<>icon</>}>Editar</Button>
                  <Button variant="outlined" color="error" size="small" onClick={() => handleDeleteOperario(operario.id)} startIcon={<>icon</>}>Eliminar</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{isCreating ? 'Crear Nuevo Operario' : 'Editar Operario'}</DialogTitle>
        <DialogContent>
          {editingOperario && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Nombre"
                value={editingOperario.nombre}
                onChange={(e) => setEditingOperario({ ...editingOperario, nombre: e.target.value })}
                fullWidth
              />
              <TextField
                label="Apellidos"
                value={editingOperario.apellidos}
                onChange={(e) => setEditingOperario({ ...editingOperario, apellidos: e.target.value })}
                fullWidth
              />
              <FormControlLabel
                control={<Checkbox
                  checked={editingOperario.accesoWeb}
                  onChange={(e) => setEditingOperario({
                    ...editingOperario,
                    accesoWeb: e.target.checked,
                    tipoAcceso: e.target.checked ? 'Jefe de Sala' : null,
                  })}
                />}
                label="Acceso Web"
              />
              {editingOperario.accesoWeb && (
                <Select
                  value={editingOperario.tipoAcceso || ''}
                  onChange={(e) => setEditingOperario({ ...editingOperario, tipoAcceso: e.target.value })}
                  fullWidth
                >
                  <MenuItem value="Administrador">Administrador</MenuItem>
                  <MenuItem value="Jefe de Sala">Jefe de Sala</MenuItem>
                </Select>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">Cancelar</Button>
          <Button
            onClick={isCreating ? handleSaveNewOperario : handleSaveOperario}
            color="primary"
          >
            {isCreating ? 'Guardar Nuevo Operario' : 'Guardar Cambios'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
