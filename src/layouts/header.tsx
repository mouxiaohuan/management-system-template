import React, { useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Popover, Button, Avatar } from 'antd';
const { Header } = Layout;
import { useSelector } from 'react-redux';
import styles from './index.module.less';
import useAuthority from '@/hooks/useAuthority';
// import { divide } from 'lodash';

const AppHeader: React.FC = () => {
  const { userInfo } = useSelector((mode: any) => mode.user);
  const [, , gotoLogin, gotoLogout] = useAuthority();

  // const navigate = useNavigate();
  // const changeMenu: MenuProps['onClick'] = (e) => {
  //   navigate(e.key);
  // };
  // const menuLogout = (
  //   <Menu
  //     items={[
  //       {
  //         key: '1',
  //         label: <span onClick={handleLogout}>退出</span>,
  //       },
  //     ]}
  //   />
  // );
  return useMemo(() => {
    return (
      <Header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logoContent}>
            <div className={styles.logo}>项</div>
            <span className={styles.font}>项目名称</span>
          </div>
          {/* <AppMenu /> */}
          {/* <div className={styles.headerContent}> */}
          {/* <Menu onClick={changeMenu} mode="horizontal" items={menu} className={styles.meun} /> */}
          {/* <Dropdown overlay={menuLogout}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {userInfo.operatorName}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown> */}
          {!userInfo.operatorName ? (
            <Button type="primary" className={styles.loginButton} onClick={gotoLogin}>
              用户登录
            </Button>
          ) : (
            <Popover
              placement="bottom"
              content={
                <div>
                  <p className={styles.userInfo}>
                    <UserOutlined className={styles.icon} />
                    {userInfo.operatorName}
                  </p>
                  <p className={styles.userInfo}>
                    <AppstoreOutlined className={styles.icon} />
                    <span>{userInfo.orgName ? userInfo.orgName : '--'}</span>
                  </p>
                  <p className={styles.userInfo}>
                    <MailOutlined className={styles.icon} />
                    <span>{userInfo.email ? userInfo.email : '--'}</span>
                  </p>
                  <Button type="link" onClick={gotoLogout}>
                    退出
                  </Button>
                </div>
              }
              trigger="click"
            >
              <Button type="link">
                <Avatar style={{ backgroundColor: 'rgb(156 156 156)', marginRight: '5px' }}>
                  {userInfo.operatorName.charAt(userInfo.operatorName.length - 1)}
                </Avatar>
                <Space>
                  <span style={{ fontSize: '14px' }}>{userInfo.operatorName}</span>
                  {/* <DownOutlined /> */}
                </Space>
              </Button>
            </Popover>
          )}
        </nav>
        {/* </div> */}
      </Header>
    );
  }, [userInfo.operatorName]);
};

export default AppHeader;
