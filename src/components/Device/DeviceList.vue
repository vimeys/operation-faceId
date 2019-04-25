<template>
  <div class="device-list">
    <el-table :data="deviceList" stripe style="width: 100%">
      <el-table-column label="所属集团" prop="organizeName"></el-table-column>
      <el-table-column label="项目名称" prop="projectName"></el-table-column>
      <el-table-column label="算法服务商" prop="deviceEnum"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150px">
        <template slot-scope="scope">
          <el-button @click="handleClickConfig(scope.row)" size="small" type="primary">配置操作</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 设备配置 -->
    <el-dialog
      :title="configDeviceName"
      :visible.sync="configDeviceVisible"
      style="margin-top:-10vh"
    >
      <ConfigDevice
        :projectId="configDeviceId"
        :projectInfo="projectInfo"
        :tableForm="configDeviceData"
        ref="ConfigDevice"
      ></ConfigDevice>
      <span class="dialog-footer" slot="footer">
        <el-button @click="configDeviceVisible = false" type="primary">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ConfigDevice from './ConfigDevice';
import { fetchDeviceInfo } from '../../api/index.js';

export default {
  props: {
    // 项目列表
    deviceList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    ConfigDevice
  },
  data() {
    return {
      // 配置窗口显示开关
      configDeviceVisible: false,
      // 配置窗口数据
      configDeviceData: '',
      // 配置窗口项目名
      configDeviceName: '',
      // 配置窗口项目ID
      configDeviceId: '',
      // 项目信息(项目的基本信息，其实就是id与name)
      projectInfo: ''
    };
  },
  methods: {
    // 点击配置时，拉取对应项目的数据传给ConfigDevice组件
    async handleClickConfig(row) {
      this.projectInfo = row;
      this.configDeviceId = row.projectId;
      this.configDeviceName = row.projectName;
      let { data } = await fetchDeviceInfo(row.projectId);
      this.configDeviceData = data;
      this.configDeviceVisible = true;
    }
  },
  watch: {
    // 关闭配置窗口，重新拉取数据并重置表单
    configDeviceVisible(newValue, oldValue) {
      if (!newValue) {
        this.$refs.ConfigDevice.canEditEmail = false;
        // 重置配置窗口表单
        this.$refs.ConfigDevice.$refs.ruleForm.resetFields();
        this.$emit('refresh');
      }
    }
  }
};
</script>
