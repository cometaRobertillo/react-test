import React from 'react';
import { Layout } from 'antd';

import './index.scss';

const { Header } = Layout;

const Toolbar = (props: any) => {

    const {collapsed, MenuUnfoldOutlined, MenuFoldOutlined, toggle} = props;

    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {
                React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })
            }
        </Header>
    );
}

export default Toolbar;