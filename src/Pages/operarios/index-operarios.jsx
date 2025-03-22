import React, {useState} from 'react';
import { PageContainer, DefaultTable, PageTitle, CrudButton, StyledLabel, ContainerInLine, SearchInput, StyledInput, CrudInput, CrudSelect, CustomModal, CrudCheckBox } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { columns } from './utils/columns';
import { usersList } from './utils/data';
import { Checkbox, Modal } from "antd";
import { Option } from 'antd/es/mentions';

const OperariosPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <PageContainer>
      <ContainerInLine>
      <PageTitle>Alta operarios</PageTitle>
      <SearchInput placeholder="Búsqueda operarios"/>
      <CrudButton
        onClick={() => setModalVisible(true)}>
        <StyledLabel>
          <IoMdPersonAdd style={{ fontSize: "25px" }} />
          Crear Operario
        </StyledLabel>
      </CrudButton>
      </ContainerInLine>
      <DefaultTable columns={columns} dataSource={usersList} />
      <CustomModal
      title="Crear operario"
      open={modalVisible} 
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
        <CrudInput placeholder="Nombre y Apellidos" />
        <CrudInput placeholder="DNI" />
        <ContainerInLine>
        <CrudSelect defaultValue="administrador">
          <Option value="administrador">Administrador</Option>
          <Option value="operario">Jefe de sala</Option>
          <Option value="operario">Operario</Option>
        </CrudSelect>
        <CrudCheckBox>Usuario con acceso personal</CrudCheckBox>
        </ContainerInLine>
    </CustomModal>
    </PageContainer>
  );
};

export default OperariosPage;