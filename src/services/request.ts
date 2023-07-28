import type { AxiosRequestConfig, AxiosError } from 'axios';
import axios from 'axios';
import type { Response } from '../schemas';
import { message } from 'antd';
// import { logout4XJ } from '@mz/flyme-auth';

const codeMessage: Record<string, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const errorHandler = (status: number) => {
  if (status === 800002) {
    // data: { code: 800002, msg: 'token验证失败', data: null }
    // message.error('登录信息失效，请重新登录');
    // setTimeout(() => {
    //   logout4XJ();
    // }, 1000);
  }
};

const instance = axios.create({
  headers: {
    // 'admin-access-token': `${getToken()}`,
    'X-Requested-With': 'XMLHttpRequest',
  },
  baseURL: '/api/web',
  // timeout: 5000, // 超时时间 3s
  // withCredentials: true,
  // xsrfCookieName: 'JSESSIONID',
});

// type IPendingRequestItem = {
//   name: string;
//   cancel: Canceler;
//   routeChangeCancel: boolean;
// };

// export const pendingRequest: IPendingRequestItem[] = [];

instance.interceptors.request.use(
  (config) => {
    // const { CancelToken } = axios;
    // const source = CancelToken.source();
    // config.cancelToken = source.token;

    return config;
  },
  (error) => Promise.reject(error),
);

// 增加响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    // code判断
    errorHandler(data.code);

    // 存在业务异常 抛出给业务代码去捕获
    // 此处和后端约定好{code:number;msg:string;data:any的response数据结构}
    if (data.code && [0, 200].indexOf(data.code) === -1) {
      if (data.code === 404) {
        window.location.hash = '/notFound';
      } else {
        (data.msg || codeMessage[data.code]) && message.error(data.msg || codeMessage[data.code]);
      }
      return Promise.reject(data);
    }
    // 业务正常流程返回数据
    return data.data || data;
  },
  (error: AxiosError) => {
    // const { response } = error;
    // if (response) {
    //   const { status } = response;
    //   // 根据不同code 可进行不同操作
    //   errorHandler(status);
    // }
    // 抛出错误 中断流程 减少判空操作
    return Promise.reject(error);
  },
);

function request<T>(config: AxiosRequestConfig): Promise<T> {
  return instance.request<Response<T>>(config) as any as Promise<T>;
}

export default request;
