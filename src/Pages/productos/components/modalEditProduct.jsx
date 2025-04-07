import {
  CrudInput,
  CustomModal,
  ContainerVertical,
} from '../../general-styles';

const ModalEditProduct = ({ modalEditProductVisible, setModalEditProductVisible, selectedProduct }) => {

  return (
    <CustomModal
      title="Edición de producto"
      open={modalEditProductVisible}
      onOk={() => setModalEditProductVisible(false)}
      onCancel={() => setModalEditProductVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
      <ContainerVertical>
        <CrudInput value={selectedProduct.name} />
        <CrudInput label="Kilogramos mínimos" value={selectedProduct.minkg}/>
        <CrudInput label="Precio" value={selectedProduct.prize}/>
      </ContainerVertical>
    </CustomModal>
  );
};

export default ModalEditProduct;
