import React, {useState} from 'react';
import { PageContainer, DefaultTable, PageTitle, CrudButton, StyledLabel, ContainerInLine, SearchInput } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { columns } from './utils/columns';
import { usersList } from './utils/data';
import { Checkbox, Input, Modal, Select } from "antd";
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
      <Modal
      title="Crear operario"
      open={modalVisible} 
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
        <Input placeholder="Nombre" />
        <Input placeholder="DNI" />
        <Select defaultValue="administrador">
          <Option value="administrador">Administrador</Option>
          <Option value="operario">Jefe de sala</Option>
          <Option value="operario">Operario</Option>
        </Select>
        <Checkbox>Acceso Web</Checkbox>
    </Modal>
    </PageContainer>
  );
};

export default OperariosPage;