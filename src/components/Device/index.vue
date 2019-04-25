<template>
  <div class="device">
    <!-- 搜索项目 -->
    <el-row>
      <el-col :span="24" class="search">
        <span>项目名称：</span>
        <el-input @keyup.13.native="getDeviceList" placeholder="请输入项目名称" v-model="projectName"></el-input>
        <el-button @click="getDeviceList" type="primary">查询</el-button>
        <el-button @click="handleClickAdd" type="primary">添加</el-button>
      </el-col>
    </el-row>

    <!-- 搜索的数据 -->
    <el-row>
      <el-col :span="12">
        <div class="search-num">
          共搜索到
          <span>{{total}}</span> 条数据
        </div>
      </el-col>
    </el-row>

    <!-- 设备列表 -->
    <el-row>
      <el-col :span="24">
        <DeviceList :deviceList="deviceList" @refresh="getDeviceList"></DeviceList>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-pagination
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :total="total"
      @current-change="currentChange"
      background
      class="pagination"
      layout="prev, pager, next"
    ></el-pagination>

    <!-- 设备添加 -->
    <el-dialog :visible.sync="addDeviceVisible" style="margin-top:-10vh" title="配置操作">
      <AddDevice ref="AddDevice" v-if="addDeviceVisible"></AddDevice>
      <span class="dialog-footer" slot="footer">
        <el-button @click="addDeviceVisible = false" type="primary">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 设备列表（配置设备组件在这个组件中）
import DeviceList from './DeviceList';
// 添加设备
import AddDevice from './AddDevice';
import { fetchDeviceList, fetchSearchProject } from '../../api/index.js';
export default {
  components: {
    DeviceList,
    AddDevice
  },
  created() {
    this.getDeviceList();
  },
  data() {
    return {
      // 搜索的项目名
      projectName: '',
      // 每页显示数量
      pageSize: 10,
      // 搜索到的设备数量
      total: 0,
      // 当前页数(1表示第一页)
      currentPage: 1,
      // 当前页数设备数据
      deviceList: [],
      // 显示添加设备
      addDeviceVisible: false
    };
  },
  methods: {
    async getDeviceList() {
      let { code, data } = await fetchDeviceList(this.projectName);
      if (code == '0') {
        this.total = data.length;
        data = data.map(item => {
          return {
            projectName: item.projectName,
            projectId: item.projectId,
            organizeName: item.organizeName,
            deviceEnum: '海康'
          };
        });
        this.device = data;
        this.deviceList = data.slice(
          this.pageSize * (this.currentPage - 1),
          this.pageSize * (this.currentPage - 1) + this.pageSize
        );
      }
    },
    handleClickAdd() {
      this.addDeviceVisible = true;
    },
    currentChange() {
      this.deviceList = this.device.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * (this.currentPage - 1) + this.pageSize
      );
    }
  },
  watch: {
    // 关闭添加窗口重新获取数据
    addDeviceVisible(newValue, oldValue) {
      if (!newValue) {
        this.getDeviceList();
      }
    }
  }
};
</script>

