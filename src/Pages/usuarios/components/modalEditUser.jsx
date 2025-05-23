import { Option } from 'antd/es/mentions';
import {
  CrudInput,
  CrudSelect,
  CustomModal,
  CrudCheckBox,
  ContainerVertical,
  ContainerHorizontal
} from '../../general-styles';
import { useEffect, useState } from 'react';

const ModalEditUser = ({ modalEditUserVisible, setModalEditUserVisible, selectedUser }) => {
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
      title="Edición de usuario"
      open={modalEditUserVisible}
      onOk={() => setModalEditUserVisible(false)}
      onCancel={() => setModalEditUserVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
      <ContainerVertical>
        <CrudInput value={selectedUser.name} />
        <CrudInput value={selectedUser.dni} />
        <ContainerHorizontal>
          <CrudSelect value={profile}>
            <Option value="ADMIN">Administrador</Option>
            <Option value="JEFE_SALA">Jefe de sala</Option>
            <Option value="OPERARIO">Operario</Option>
          </CrudSelect>
          <CrudCheckBox checked={selectedUser?.webAccess?.includes('Con acceso')}>
            Acceso Web
          </CrudCheckBox>
        </ContainerHorizontal>
      </ContainerVertical>
    </CustomModal>
  );
};

export default ModalEditUser;
