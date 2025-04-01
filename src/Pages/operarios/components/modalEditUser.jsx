import { Option } from 'antd/es/mentions';
import { CrudInput, CrudSelect, CustomModal, CrudCheckBox, ContainerVertical, ContainerHorizontal } from '../../general-styles';

const ModalEditUser = ({ modalEditUserVisible, setModalEditUserVisible, selectedUser }) => {

  return (
    <CustomModal
      title="Edición de operario"
      open={modalEditUserVisible}
      onOk={() => setModalEditUserVisible(false)}
      onCancel={() => setModalEditUserVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
      <ContainerVertical>
        <CrudInput placeholder="Nombre y Apellidos" value={selectedUser.name}/>
        <CrudInput placeholder="DNI"value={selectedUser.dni}  />
        <ContainerHorizontal>
          <CrudSelect defaultValue={selectedUser.profile?.[0]}>
            <Option value="administrador">Administrador</Option>
            <Option value="jefeSala">Jefe de sala</Option>
            <Option value="operario">Operario</Option>
          </CrudSelect>
          <CrudCheckBox checked={selectedUser?.webAccess?.includes('Con acceso')}>Acceso Web</CrudCheckBox>
        </ContainerHorizontal>
      </ContainerVertical>

    </CustomModal>
      );
};
export default ModalEditUser;