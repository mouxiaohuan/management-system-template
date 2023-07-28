export type MenuList = {
  menuName: string;
  menuUrl: string;
  menuOrder: number;
};

export type IPagePowerItem = {
  nozzleId: number;
  pagePowerId: number;
  routeName: string;
};

export interface UserAuthAPI {
  Params: {
    opsId: number;
    productCode: string;
  };
  Response: {
    authorityList: {
      hierarchyMenuList: MenuList[];
      menuList: MenuList[];
    };
  };
}
