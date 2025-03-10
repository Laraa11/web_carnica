import { Space, Tag } from 'antd';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PROFILES, PROFILES_COLORS } from '../../../Constants/profiles';

export const columns = [
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
          let color = 'green';
          if (tag === 'Sin acceso') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
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
        <p><FaRegEdit style={{ fontSize: '20px' }} /></p>
        <p><MdDelete style={{ fontSize: '20px' }} /></p>
      </Space>
    ),
  },
];