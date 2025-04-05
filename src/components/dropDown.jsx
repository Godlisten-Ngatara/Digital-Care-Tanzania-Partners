import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const DropdownMenu = ({ items, desc }) => {
  const navigate = useNavigate()
  const onClick = ({ key }) => {
    const selected = items.find(item => item.key === key);
    if (selected) navigate(selected.path);
  };
  

  return (
    <Dropdown menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()} className='block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer'>
        <Space>
          {desc}
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
