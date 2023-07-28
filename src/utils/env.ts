const { REACT_APP_ENV} = process.env;

interface ORIGIN_OPS_TYPE {
  dev: string;
  fat: string;
  uat: string;
  prod: string;
}
// 打包路径
const ORIGIN_OPS_LIST = {
  dev: window.location.origin,
  fat: '//frontend-cdn-fat.xjsdtech.com/content-config-manage-mobile/',
  uat: '//frontend-cdn-uat.xjsdtech.com/content-config-manage-mobile/',
  prod: '//frontend-cdn-prod.xjsdtech.com/content-config-manage-mobile/',
};

export default {
  isDev: REACT_APP_ENV === 'dev',
  isFat: REACT_APP_ENV === 'fat',
  isUat: REACT_APP_ENV === 'uat',
  isProd: REACT_APP_ENV === 'prod',
  ORIGIN_OPS: ORIGIN_OPS_LIST[REACT_APP_ENV as keyof ORIGIN_OPS_TYPE],
};
