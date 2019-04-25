import axios from 'axios';
import request from '../util/request';

// 获取项目列表数据
export const fetchDeviceList = name => {
  return request.get({
    url: '/device/getWebDeviceList',
    params: {
      name
    }
  });
};

// 项目搜索
export const fetchSearchProject = (name, hidden = false) => {
  return request.get({
    url: '/back/searchProByName',
    hideLoading: hidden,
    params: {
      name
    }
  });
};

// 查询详细信息
export const fetchDeviceInfo = merchantId => {
  return request.get({
    url: '/device/getWebDeviceInfo',
    params: {
      merchantId
    }
  });
};

// 保存设备数据
// return request.post({ url: '/device/saveDevice', data: { ...parmas } });
export const fetchSaveDevice = parmas => {
  return request.post({
    url: '/device/saveDevice',
    contentType:'application/json',
    data: {
      ...parmas
    }
  });
};

// 删除设备
export const fetchDeletedDevice = deviceId => {
  return request.get({
    url: '/device/deletedDevice',
    params: {
      deviceId
    }
  });
};

// 保存邮箱
export const fetchsaveEmail = (projectId, mail) => {
  return axios.post('/device/saveEmail', {
    projectId,
    mail
  });
};

/**
 *          globalPram.merchantProjectList='/face/device/getWebDeviceList'//商户列表
            globalPram.merchantSearchList='/face/device/searchProject'//项目搜索
            globalPram.merchantSearchProject='/face/device/getWebDeviceInfo';//查询
            globalPram.saveDevice='/face/device/saveDevice';//保存用户
            globalPram.delDevice='/face/device/deletedDevice';//删除当前设备
            globalPram.saveEmail='/face/device/saveEmail';//保存邮箱
 */
