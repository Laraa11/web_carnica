import React, { useState } from 'react';
import { PageContainer, DefaultTable, PageTitle, CrudButton, StyledLabel, ContainerHorizontal, SearchInput } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { columns } from './utils/columns';
import { usersList } from './utils/data';
import ModalNewUser from './components/modalNewUser';
import ModalEditUser from './components/modalEditUser';

const UsuariosPage = () => {
  const [modalNewUserVisible, setModalNewUserVisible] = useState(false);
  const [modalEditUserVisible, setModalEditUserVisible] = useState(false);
  const [searchUser, setSearchUser] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const handleEdit = (record) => {
    console.log("Editar:", record);
    setModalEditUserVisible(true);
    setSelectedUser(record);
  };

  const handleDelete = (record) => {
    console.log("Delete:", record);
  };

  const handleSearch = (e) => {
    setSearchUser(e.target.value.toLowerCase());
  }

  const filteredUsers = usersList.filter(user =>
    user.name.toLowerCase().includes(searchUser) ||
    user.dni.toString().includes(searchUser)
  );
  

  return (
    <PageContainer>
      <ContainerHorizontal>
        <PageTitle>Gestión usuarios</PageTitle>
        <SearchInput 
          placeholder="Búsqueda usuarios" 
          value={searchUser}
          onChange={handleSearch}
        />
        <CrudButton
          onClick={() => setModalNewUserVisible(true)}>
          <StyledLabel>
            <IoMdPersonAdd style={{ fontSize: "25px" }} />
            Crear Usuario
          </StyledLabel>
        </CrudButton>
      </ContainerHorizontal>
      <DefaultTable columns={columns({ handleEdit, handleDelete })} dataSource={filteredUsers} />
      <ModalNewUser modalNewUserVisible={modalNewUserVisible} setModalNewUserVisible={setModalNewUserVisible} />
      <ModalEditUser modalEditUserVisible={modalEditUserVisible} setModalEditUserVisible={setModalEditUserVisible} selectedUser={selectedUser} />
    </PageContainer>
  );
};

export default UsuariosPage;

