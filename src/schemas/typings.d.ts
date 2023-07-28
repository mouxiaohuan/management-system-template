declare namespace CommonAPI {
  type PageParams = {
    current: number;
    size: number;
    pageSize?: number;
  };

  type BizServiceResponse = {
    total?: number;
    current?: number;
  };
}
