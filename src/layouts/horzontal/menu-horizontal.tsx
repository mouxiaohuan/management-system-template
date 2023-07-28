import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import styles from './index.module.less';
import classNames from 'classnames';
import useAuthority from '@/hooks/useAuthority';
import { useSelector } from 'react-redux';
import menuConfig from '../menuConfig';

const AppMenu: React.FC = () => {
  const navigate = useNavigate();
  const [loginFlag, , gotoLogin] = useAuthority();
  const { pathname } = useLocation();
  const { config } = useSelector((mode: any) => mode.user);
  // 也可以从用户中心读取菜单栏
  const appMenu = config?.menus || menuConfig;

  const changeMenu = (link: string, openType?: 'router' | 'newOpen', iframeSrc?: string) => {
    if (!link) return;
    if (openType && openType === 'router') {
      link && navigate(link, { state: { iframeSrc } });
    } else {
      window.open(link);
    }
  };
  const getFirstMenu = (items: Record<string, any>[]) => {
    return (
      <>
        {items
          // .filter((item: Record<string, any>) => {
          //   return !token ? whiteRouter.includes(item.link) : true;
          // })
          .map((item: Record<string, any>) => {
            return (
              <div key={item.link || item.label} className={styles.firstMenuItem}>
                <span
                  onClick={() => {
                    !item.children &&
                      (!loginFlag && !appMenu?.whiteRouter?.includes(item.link)
                        ? gotoLogin()
                        : changeMenu(item.link, item.openType, item.iframeSrc));
                  }}
                  className={pathname == item.link ? styles.active : ''}
                >
                  {item.label}
                </span>
                {item.children &&
                  getSecondMenu(
                    item.children,
                    !loginFlag && !appMenu?.whiteRouter?.includes(item.link),
                  )}
              </div>
            );
          })}
      </>
    );
  };
  const getSecondMenu = (items: Record<string, any>[], needLogin: boolean) => {
    return (
      <div className={classnames(styles.secondMenu, styles.hoverMenus)}>
        <div className={classnames(styles.menuContent, styles.hoverMenu)}>
          {items.map((item: Record<string, any>) => {
            return (
              <div key={item.link || item.label} className={styles.menuContentItem}>
                <div className={classnames(styles.menuTitle, styles.active)}>{item.label}</div>
                {item.children && getThireMenu(item.children, needLogin)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const getThireMenu = (items: Record<string, any>[], needLogin: boolean) => {
    return (
      <div className={styles.menuTitleItem}>
        {items.map((item: Record<string, any>) => {
          return (
            <div
              key={item.link || item.label}
              className={classNames({ [styles.disable]: !item.link })}
              onClick={() =>
                item.link &&
                (needLogin ? gotoLogin() : changeMenu(item.link, item.openType, item.iframeSrc))
              }
            >
              {item.label}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.appMenu}>
      <div className={styles.firstMenu}>
        {getFirstMenu((appMenu?.children as Record<string, any>[]) || [])}
        {/* <div className={styles.firstMenuItem}>
          <span className={styles.active}>场景推荐</span>
          <div className={classnames(styles.secondMenu, styles.hoverMenu)}>
            <div className={styles.menuContent}>
              <div className={styles.menuContentItem}>
                <div className={classnames(styles.menuTitle, styles.active)}>数据分析产品</div>
                <div className={styles.menuTitleItem}>
                  <div>数据大屏</div>
                  <div>用户画像分析</div>
                  <div>数据大屏</div>
                  <div>用户画像分析</div>
                  <div>数据大屏</div>
                  <div>用户画像分析</div>
                  <div>数据大屏</div>
                  <div>用户画像分析</div>
                </div>
              </div>
              <div className={styles.menuContentItem}>
                <div className={styles.menuTitle}>数据分析产品</div>
                <div className={styles.menuTitleItem}>
                  <div>数据大屏</div>
                  <div>用户画像分析</div>
                  <div>数据大屏</div>
                  <div>用户画像分析</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default AppMenu;
