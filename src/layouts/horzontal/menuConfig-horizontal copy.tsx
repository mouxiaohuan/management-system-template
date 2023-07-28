const menu = {
  //   whiteRouter: ['/', '/home'],
  children: [
    {
      label: '场景推荐',
      link: '/home',
      openType: 'router',
    },
    {
      label: '数据产品',
      children: [
        {
          label: '数据分析产品',
          children: [
            {
              label: '数据大屏',
            },
            {
              label: '用户画像分析',
            },
            {
              label: '用户声音分析',
            },
            {
              label: '统计分析',
            },
            {
              label: '自助分析',
            },
            {
              label: '统一上报系统',
            },
            {
              label: '产品质量监测',
            },
          ],
        },
        {
          label: '数据开发产品',
          children: [
            {
              label: '集成开发',
              link: 'https://data-platform-fat.xjsdtech.com/#/',
            },
            {
              label: '数据开发',
              link: 'http://10.135.8.103:8999/#/',
            },
            {
              label: '权限中心',
            },
            {
              label: '数据地图',
              link: 'http://10.135.8.106:9002/',
            },
            {
              label: '数据质量',
            },
            {
              label: '运维中心',
              link: 'http://10.135.128.105:12345/dolphinscheduler/ui/home',
            },
            {
              label: '取数中心',
              link: 'http://knox.c-0d66f6985fe46f66.cn-shanghai.emr.aliyuncs.com:8888/hue/editor/?type=hive',
            },
            {
              label: '数据开发服务',
            },
          ],
        },
      ],
    },
    {
      label: '数据报表',
      link: 'http://10.135.8.110:8080/webroot/decision',
    },
    {
      label: '用户支持',
      children: [
        {
          label: '数据产品用户支持',
          children: [
            {
              label: '产品指南',
            },
            {
              label: '技术文档',
            },
            {
              label: '数据产品知识库',
            },
          ],
        },
        {
          label: '数据报表产品用户支持',
          children: [
            {
              label: '数据报表使用手册',
            },
            {
              label: '数据指标体系',
            },
            {
              label: '数据报表知识库',
            },
          ],
        },
      ],
    },
  ],
};
export default menu;
