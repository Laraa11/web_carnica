import React, { useState } from 'react';
import { ContainerHorizontal, CrudButton, DefaultTable, PageContainer, PageTitle, SearchInput, StyledLabel, CrudSelectDate } from '../general-styles';
import { IoMdPersonAdd } from 'react-icons/io';
import { productsList } from './utils/data';
import { columns } from './utils/columns';
import ModalNewProduct from './components/modalNewProduct';
import ModalEditProduct from './components/modalEditProduct';
import { DateTime } from 'luxon';

const ProductosPage = () => {
  const [modalNewProductVisible, setModalNewProductVisible] = useState(false);
  const [modalEditProductVisible, setModalEditProductVisible] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [searchDate, setSearchDate] = useState([]);

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

const filteredProducts = productsList
.filter(product => {
  const nameMatch = !searchProduct || product.name?.toLowerCase().includes(searchProduct.toLowerCase());

  // const dateMatch = !searchDate || (
  //   product.initialDate &&
  //   product.endDate &&
  //   DateTime.fromISO(searchDate).startOf('day') >= DateTime.fromISO(product.initialDate).startOf('day') &&
  //   DateTime.fromISO(searchDate).startOf('day') <= DateTime.fromISO(product.endDate).startOf('day')
  // );

  return nameMatch ;
})
  .map(product => ({
    ...product,
    rangeDate: product.initialDate && product.endDate
      ? `${DateTime.fromISO(product.initialDate).toFormat('dd LLL yyyy')} - ${DateTime.fromISO(product.endDate).toFormat('dd LLL yyyy')}`
      : '',
  }));

  
  const handleSelectDate = (date) => {
    setSearchDate(DateTime.fromJSDate(date).toISODate());
  };
  
  return (
    <PageContainer>
      <ContainerHorizontal>
        <PageTitle>Gestión Productos</PageTitle>
        <SearchInput
          placeholder="Búsqueda usuarios"
          value={searchProduct}
          onChange={handleSearch}
        />
        <CrudSelectDate 
          placeholder='Fecha' 
          value={searchDate}
          onChange={handleSelectDate} />
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