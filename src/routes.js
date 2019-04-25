import Device from './views/Device';
import Login from './views/Login';
import Revise from './views/'
let routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: '登录界面',
    components: { login: Login },
    hidden: true
  },
  // {
  //   path: '/device',
  //   name: '设备管理',
  //   component: Device,
  //   id: 1,
  //   hidden: false,
  //   leaf: true,
  //   iconCls: 'menu-device',
  //   children: [{ path: '/device', component: Device, name: '设备管理' }]
  // },
  {
    path: '/device',
    name: '客户匹配校正',
    component: Device,
    id: 2,
    hidden: false,
    leaf: true,
    iconCls: 'menu-device',
    children: [{ path: '/device', component: Device, name: '客户匹配校正' }]
  },
  {
    path: '/device',
    name: '抓拍匹配校正',
    component: Device,
    id: 3,
    hidden: true,
    leaf: false,
    iconCls: 'menu-device',
    children: [{ path: '/device', component: Device, name: '抓拍匹配校正' }]
  }
];

export default routes;
