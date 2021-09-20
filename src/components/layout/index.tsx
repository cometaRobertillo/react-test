import React, { Fragment, useState } from 'react';
// import Toolbar from './toolbar';
// import Sidebar from './sidebar';
// import Footer from './footer';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.scss';
import Toolbar from './toolbar';
import Sidebar from './sidebar';

const { Header, Sider, Content } = Layout;


const LayoutComponent = (props: any) => {
    
    const [ collapsed, setCollapsed ] = useState(false);
    
    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout id="components-layout-demo-custom-trigger">
            <Sidebar
                collapsed={collapsed}
                UserOutlined={UserOutlined}
                VideoCameraOutlined={VideoCameraOutlined}
                UploadOutlined={UploadOutlined}
            >
            </Sidebar>
            <Layout className="site-layout">
                <Toolbar
                    collapsed={collapsed}
                    MenuUnfoldOutlined={MenuUnfoldOutlined}
                    MenuFoldOutlined={MenuFoldOutlined}
                    toggle={toggle}
                ></Toolbar>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    <div>
                        { props.children }
                    </div>
                </Content>
            </Layout>
        </Layout>
    
    );
}

export default LayoutComponent;
{/* 
<Sidebar></Sidebar>

<Footer></Footer> */}