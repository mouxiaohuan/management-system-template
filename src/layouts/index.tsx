import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, Spin } from 'antd';
import AppHeader from './header';
import styles from './index.module.less';
import menu from './menuConfig';
import { WaterMark } from '@ant-design/pro-components';
import { useSelector } from 'react-redux';

const { Content, Sider } = Layout;
const AppLayout: React.FC = () => {
  const { userInfo } = useSelector((mode: any) => mode.user);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  function changeMenu(item: any) {
    navigate(item.item.props?.path);
  }
  return (
    <WaterMark className={styles['wrapper']} content={userInfo.operatorName || ''}>
      <Layout className={styles['layout-home']}>
        <AppHeader />
        <Layout>
          <Sider
            collapsible
            className={styles.sider}
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Menu defaultSelectedKeys={['1']} mode="inline" onClick={changeMenu} items={menu} />
          </Sider>
          <Layout>
            <React.Suspense fallback={<Spin size="large" style={{ margin: '60px 50%' }} />}>
              <Content className={styles.content}>
                <Outlet />
              </Content>
            </React.Suspense>
            {/* <Footer className={styles.foot}>
            <div>Copyright ©2022 湖北元时代科技有限公司 All Rights Reserved</div>
          </Footer> */}
          </Layout>
        </Layout>
      </Layout>
    </WaterMark>
  );
};

export default AppLayout;
