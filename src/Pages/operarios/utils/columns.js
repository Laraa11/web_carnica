import { Space, Tag } from 'antd';
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
            <Space size="middle">
              <Icon key={tag} style={{ color: color, fontSize: size }} />
            </Space>
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
        <MdDelete
          style={{ fontSize: '20px' }}
          onClick={() => handleDelete(record)}
        />
      </Space>
    ),
  },
];