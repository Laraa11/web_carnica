import { Popconfirm, Space } from 'antd';
import dayjs from 'dayjs';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const columns = ({ handleEdit, handleDelete}) => [
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
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Precio/Kg',
    key: 'prize',
    dataIndex: 'prize',
    render:(text) => <p>{text}</p>,
  },
  {
    title: 'Rango de fechas',
    key: 'rageDate',
    dataIndex: 'rageDate',
    render:(_, record) => {
      <p>{dayjs(record.initialDate).format('DD MMM YYYY')} - {dayjs(record.endDate).format('DD MMM YYYY')}</p>
    }
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