import { Popconfirm, Space, Tag } from 'antd';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PROFILES, PROFILES_COLORS } from '../../../Constants/profiles';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export const columns = ({ handleEdit, handleDelete }) => [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'DNI',
    dataIndex: 'dni',
    key: 'dni',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Perfil',
    key: 'profile',
    dataIndex: 'profile',
    render: (_, { profile }) => (
      <>
        {profile.map((tag) => {
          return (
            <Tag color={PROFILES_COLORS[tag]} key={tag}>
              {PROFILES[tag]}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Acceso Web',
    key: 'webAccess',
    dataIndex: 'webAccess',
    render: (_, { webAccess }) => (
      <>
        {webAccess.map((tag) => {
          let Icon;
          let color = 'green';
          let size = '20px';
          if (tag === 'Sin acceso') {
            Icon = MdCancel;
            color = '#c0392b ';
            size = '24px';
          } else {
            Icon = FaCheckCircle;
          }
          return (
            <div
              key={tag}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }}
            >
              <Icon key={tag} style={{ color: color, fontSize: size, alignItems: 'center', justifyContent: 'center' }} />
            </div>
          );
        })}
      </>
    ),
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
          title={"¿Seguro que quiere borrar el usuario?"}
          onConfirm={() => handleDelete(record)}>
          <MdDelete
            style={{ fontSize: '20px' }}
          />
        </Popconfirm>
      </Space>
    ),
  },
];