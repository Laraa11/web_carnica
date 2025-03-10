import React from 'react';
import { PageContainer, DefaultTable, PageTitle, CrudButton, StyledLabel, ContainerInLine, SearchInput } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { columns } from './utils/columns';
import { usersList } from './utils/data';

const OperariosPage = () => {

  return (
    <PageContainer>
      <ContainerInLine>
      <PageTitle>Alta operarios</PageTitle>
      <SearchInput placeholder="Búsqueda operarios"/>
      <CrudButton>
        <StyledLabel>
          <IoMdPersonAdd style={{ fontSize: "25px" }} />
          Crear Operario
        </StyledLabel>
      </CrudButton>
      </ContainerInLine>
      <DefaultTable columns={columns} dataSource={usersList} />
    </PageContainer>
  );
};

export default OperariosPage;