<template>
  <div>
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
    </el-breadcrumb>
    <Device></Device>
  </div>
</template>

<script>
import Device from '../components/Device';
export default {
  components: {
    Device
  },
  data() {
    return {};
  }
};
</script>
