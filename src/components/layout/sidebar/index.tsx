import React from 'react';
import { Layout, Menu } from 'antd';

import './index.scss';

const { Sider } = Layout;

const Sidebar = (props: any) => {

    const {collapsed, UserOutlined, VideoCameraOutlined, UploadOutlined} = props;

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;