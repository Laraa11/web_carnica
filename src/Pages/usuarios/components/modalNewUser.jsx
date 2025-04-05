import { Option } from 'antd/es/mentions';
import { CrudInput, CrudSelect, CustomModal, CrudCheckBox, ContainerVertical, ContainerHorizontal } from '../../general-styles';

const ModalNewUser = ({ modalNewUserVisible, setModalNewUserVisible }) => {

  return (
    <CustomModal
      title="Alta nuevo usuario"
      open={modalNewUserVisible}
      onOk={() => setModalNewUserVisible(false)}
      onCancel={() => setModalNewUserVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
      <ContainerVertical>
        <CrudInput placeholder="Nombre y Apellidos" />
        <CrudInput placeholder="DNI" />
        <ContainerHorizontal>
          <CrudSelect defaultValue="ADMIN">
            <Option value="ADMIN">Administrador</Option>
            <Option value="JEFE_SALA">Jefe de sala</Option>
            <Option value="OPERARIO">Operario</Option>
          </CrudSelect>
          <CrudCheckBox>Acceso Web</CrudCheckBox>
        </ContainerHorizontal>
      </ContainerVertical>

    </CustomModal>
      );
};
export default ModalNewUser;