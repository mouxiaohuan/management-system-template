import request from './request';
import type { UserSchema } from '@/schemas';
import { omit } from 'lodash';

/**
 * 获取用户信息
 * @param params
 * @param options
 */
export const fetchUserInfo = () =>
  request<any>({
    url: '/permission/getUserInfo',
    method: 'get',
  });

export function fetchUserAuthInfo<T = UserSchema.UserAuthAPI['Response']>(
  params: UserSchema.UserAuthAPI['Params'],
) {
  return request<T>({
    url: `/authority/getAuthorityTree`,
    method: 'get',
    params,
  });
}

// 获取当前登录用户信息
export async function currentUser<T = UserSchema.UserAuthAPI['Response']>(
  options?: Record<string, any>,
) {
  return request<T>({
    url: `/internal-admin/ext/user/get-user-info`,
    method: 'get',
    params: options,
  });
}

// 获取用户列表 - 分页
export async function getUserList<T = UserSchema.UserAuthAPI['Response']>(
  params: {
    operatorName?: string;
    email?: string;
    idList?: string[];
    mobile?: string;
  } & CommonAPI.PageParams,
  // options?: Record<string, any>,
) {
  return request<T>({
    url: '/internal-admin/ext/user/page-query',
    method: 'post',
    data: {
      ...omit(params, ['current', 'size']),
      pageNum: params.current,
      pageSize: params.size,
    },
  });
}
