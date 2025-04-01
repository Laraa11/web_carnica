import { Option } from 'antd/es/mentions';
import { CrudInput, CrudSelect, CustomModal, CrudCheckBox, ContainerVertical, ContainerHorizontal } from '../../general-styles';

const ModalNewUser = ({ modalNewUserVisible, setModalNewUserVisible }) => {

  return (
    <CustomModal
      title="Alta nuevo operario"
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
          <CrudSelect defaultValue="administrador">
            <Option value="administrador">Administrador</Option>
            <Option value="jefeSala">Jefe de sala</Option>
            <Option value="operario">Operario</Option>
          </CrudSelect>
          <CrudCheckBox>Acceso Web</CrudCheckBox>
        </ContainerHorizontal>
      </ContainerVertical>

    </CustomModal>
      );
};
export default ModalNewUser;