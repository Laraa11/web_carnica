import React from 'react';
import {PageContainer, DefaultTable} from '../general-styles';
import { Space, Tag } from 'antd';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const OperariosPage = () => {
  const columns = [
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
            let color = 'geekblue';
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
      title: 'Acceso Web',
      key: 'webAccess',
      dataIndex: 'webAccess',
      render: (_, { webAccess }) => (
        <>
          {webAccess.map((tag) => {
            let color = 'green';
            if (tag === 'Sin acceso') {
              color = 'volcano';
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
          <p><FaRegEdit style={{fontSize: '20px'}}/></p>
          <p><MdDelete style={{fontSize: '20px'}}/></p>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Sergio Jimenez Moreno',
      dni: '46274950R',
      address: 'New York No. 1 Lake Park',
      profile: ['Jefe de sala'],
      webAccess: ['Con acceso'],
    },
    {
      key: '2',
      name: 'José Pérez Rodríguez',
      dni: '46274950R',
      address: 'London No. 1 Lake Park',
      profile: ['Operario'],
      webAccess: ['Sin acceso'],
    },
    {
      key: '3',
      name: 'Jesús García López',
      dni: '46274950R',
      address: 'Sydney No. 1 Lake Park',
      profile: ['Administrador'],
      webAccess: ['Con acceso'],
    },
  ];

  return (
    <PageContainer>
      <h1>Gestión de Operarios</h1>
      <DefaultTable columns={columns} dataSource={data} />
    </PageContainer>
  );
};

export default OperariosPage;