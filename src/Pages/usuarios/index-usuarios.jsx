import React, { useState } from 'react';
import { PageContainer, DefaultTable, PageTitle, CrudButton, StyledLabel, ContainerHorizontal, SearchInput } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { columns } from './utils/columns';
import { usersList } from './utils/data';
import ModalNewUser from './components/modalNewUser';
import ModalEditUser from './components/modalEditUser';
import ModalDeleteUser from './components/modalDeleteUser';

const UsuariosPage = () => {
  const [modalNewUserVisible, setModalNewUserVisible] = useState(false);
  const [modalEditUserVisible, setModalEditUserVisible] = useState(false);
  const [modalDeleteUserVisible, setModalDeleteUserVisible] = useState(false);

  const [selectedUser, setSelectedUser] = useState('');

  const handleEdit = (record) => {
    console.log("Editar:", record);
    setModalEditUserVisible(true);
    setSelectedUser(record);
  };

  const handleDelete = (record) => {
    console.log("Delete:", record);
    setModalDeleteUserVisible(true);
    setSelectedUser(record);
  };

  return (
    <PageContainer>
      <ContainerHorizontal>
        <PageTitle>Alta usuarios</PageTitle>
        <SearchInput placeholder="Búsqueda usuarios" />
        <CrudButton
          onClick={() => setModalNewUserVisible(true)}>
          <StyledLabel>
            <IoMdPersonAdd style={{ fontSize: "25px" }} />
            Crear Usuario
          </StyledLabel>
        </CrudButton>
      </ContainerHorizontal>
      <DefaultTable columns={columns({ handleEdit, handleDelete })} dataSource={usersList} />
      <ModalNewUser modalNewUserVisible={modalNewUserVisible} setModalNewUserVisible={setModalNewUserVisible} />
      <ModalEditUser modalEditUserVisible={modalEditUserVisible} setModalEditUserVisible={setModalEditUserVisible} selectedUser={selectedUser}/>
      <ModalDeleteUser modalDeleteUserVisible={modalDeleteUserVisible} setModalDeleteUserVisible={setModalDeleteUserVisible} selectedUser={selectedUser}/>

    </PageContainer>
  );
};

export default UsuariosPage;

