import { CrudInput, CustomModal, ContainerVertical } from '../../general-styles';

const ModalNewProduct = ({ modalNewProductVisible, setModalNewProductVisible }) => {

  return (
    <CustomModal
      title="Crear de producto"
      open={modalNewProductVisible}
      onOk={() => setModalNewProductVisible(false)}
      onCancel={() => setModalNewProductVisible(false)}
      okText="Crear"
      cancelText="Cancelar"
    >
      <ContainerVertical>
        <CrudInput placeholder="Nombre" />
        <CrudInput placeholder="Kilogramos mínimos" />
        <CrudInput placeholder="Precio" />
      </ContainerVertical>

    </CustomModal>
      );
};
export default ModalNewProduct;