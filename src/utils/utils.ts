// 过滤向后端传递的数据，去掉null，'', undefined
export const paramsFilter = (params: { [p: string]: any }): { [p: string]: any } => {
  const emptyValues = ['', null, undefined];
  Object.keys(params).forEach((key) => {
    if (emptyValues.includes(params[key])) {
      // eslint-disable-next-line no-param-reassign
      delete params[key];
    }
  });

  return params;
};

export const obj2params = (obj: { [p: string]: any }): string => {
  const params = paramsFilter(obj);
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};
