import { Popconfirm, Space } from 'antd';
import dayjs from 'dayjs';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const columns = ({ handleEdit, handleDelete, productsListFormatted}) => [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Kg mínimos',
    dataIndex: 'minkg',
    key: 'minkg',
    render: (text) => <p>{text} {"kg"}</p>,
  },
  {
    title: 'Precio/Kg',
    key: 'prize',
    dataIndex: 'prize',
    render:(text) => <p>{text} {"€"}</p>,
  },
  {
    title: 'Rango de fechas',
    key: 'rangeDate',
    dataIndex: 'rangeDate',
    render:(text) => <p>{text}</p>,
  },
  {
    title: 'Acción',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <FaRegEdit
          style={{ fontSize: '20px' }}
          onClick={() => handleEdit(record)} />
        <Popconfirm
          okText={"Sí"}
          cancelText={"No"}
          title={"¿Seguro que quiere borrar el producto?"}
          onConfirm={() => handleDelete(record)}>
          <MdDelete
            style={{ fontSize: '20px' }}
          />
        </Popconfirm>
      </Space>
    ),
  },
];