import {
  CustomModal,
  ContainerVertical,
} from '../../general-styles';
import { useEffect, useState } from 'react';

const ModalDeleteUser = ({ modalDeleteUserVisible, setModalDeleteUserVisible, selectedUser }) => {
  const [profile, setProfile] = useState('');

  useEffect(() => {
    if (selectedUser && selectedUser.profile && selectedUser.profile.length > 0) {
      if (selectedUser.profile[0] === 'JEFE_SALA') {
        setProfile('Jefe de sala');
      }
      if (selectedUser.profile[0] === 'ADMIN') {
        setProfile('Administrador');
      }
      if (selectedUser.profile[0] === 'OPERARIO') {
        setProfile('Operario');
      }
    }
  }, [selectedUser]);


  return (
    <CustomModal
      title="Borrar usuario"
      open={modalDeleteUserVisible}
      onOk={() => setModalDeleteUserVisible(false)}
      onCancel={() => setModalDeleteUserVisible(false)}
      okText="Borrar"
      cancelText="Cancelar"
    >
      <ContainerVertical>
        {selectedUser.name}
        <br></br>
        {selectedUser.dni}
        <br></br>
        {profile}
        <br></br>
        {selectedUser?.webAccess?.includes('Con acceso') && (
          <>Acceso Web: Sí</>
        )}
      </ContainerVertical>
    </CustomModal>
  );
};

export default ModalDeleteUser;
