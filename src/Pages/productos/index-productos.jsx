import React, { useState } from 'react';
import { ContainerHorizontal, CrudButton, DefaultTable, PageContainer, PageTitle, SearchInput, StyledLabel } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { productsList } from './utils/data';
import { columns } from './utils/columns';
import ModalNewProduct from './components/modalNewProduct';
import ModalEditProduct from './components/modalEditProduct';

const ProductosPage = () => {
  const [modalNewProductVisible, setModalNewProductVisible] = useState(false);
  const [modalEditProductVisible, setModalEditProductVisible] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleEdit = (record) => {
    console.log("Editar:", record);
    setModalEditProductVisible(true);
    setSelectedProduct(record);
  };

  const handleDelete = (record) => {
    console.log("Delete:", record);
  };

  const handleSearch = (e) => {
    setSearchProduct(e.target.value.toLowerCase());
  }

  const filteredProducts = productsList.filter(product =>
    product.name.toLowerCase().includes(searchProduct)
  );


  return (
    <PageContainer>
      <ContainerHorizontal>
        <PageTitle>Gestión Productos</PageTitle>
        <SearchInput
          placeholder="Búsqueda usuarios"
          value={searchProduct}
          onChange={handleSearch}
        />
        <CrudButton
          onClick={() => setModalNewProductVisible(true)}>
          <StyledLabel>
            <IoMdPersonAdd style={{ fontSize: "25px" }} />
            Crear Producto
          </StyledLabel>
        </CrudButton>
      </ContainerHorizontal>
      <DefaultTable columns={columns({ handleEdit, handleDelete })} dataSource={filteredProducts} />
      <ModalNewProduct modalNewProductVisible={modalNewProductVisible} setModalNewProductVisible={setModalNewProductVisible} />
      <ModalEditProduct modalEditProductVisible={modalEditProductVisible} setModalEditProductVisible={setModalEditProductVisible} selectedProduct={selectedProduct} />
    </PageContainer>
  );
}

export default ProductosPage;