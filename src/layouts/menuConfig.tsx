import React from 'react';
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
const menu = [
  {
    label: 'Option 1',
    key: 'Option 1',
    icon: <PieChartOutlined />,
    children: [
      {
        label: 'Option 5',
        key: 'Option 5',
        path: '/',
      },
    ],
  },
  {
    label: 'Option 2',
    key: 'Option 2',
    icon: <DesktopOutlined />,
    children: [
      {
        label: 'Option 3',
        key: 'Option 3',
        path: '/test',
      },
    ],
  },
  {
    label: 'Option 4',
    key: 'Option 4',
    icon: <UserOutlined />,
  },
];
export default menu;
