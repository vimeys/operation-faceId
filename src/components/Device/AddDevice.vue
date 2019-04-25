<template>
  <div class="add-device">
    <!-- 输入项目名称 -->
    <el-row class="title">
      <el-col :span="3">
        <span>项目名称：</span>
      </el-col>
      <el-col :span="10">
        <el-autocomplete
          :fetch-suggestions="queryProject"
          @select="getTableForm"
          placeholder="请输入项目名称"
          v-model="project"
        >
          <!-- <template slot-scope="{ item }">
            <div class="name">{{ item.name }}</div>
          </template>-->
        </el-autocomplete>
      </el-col>
    </el-row>

    <el-form :model="tableForm" ref="ruleForm">
      <!-- 摄像机 -->
      <el-row>
        <el-col>
          <div class="item">
            <span>摄像机</span>
            <el-button @click="handleAdd(machineType.cameraList)" size="mini" type="primary">添加</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- 摄像机列表 -->
      <el-row>
        <el-table :data="tableForm.cameraList" style="width: 100%">
          <el-table-column label="设备ID" width="180">
            <template slot-scope="scope">
              <el-form-item :prop="`cameraList.${scope.$index}.deviceId`" :rules="rules.deviceId">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.deviceId"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="设备名称" width="180">
            <template slot-scope="scope">
              <el-form-item
                :prop="`cameraList.${scope.$index}.deviceName`"
                :rules="rules.deviceName"
              >
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.deviceName"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="安装地点">
            <template slot-scope="scope">
              <el-form-item :prop="`cameraList.${scope.$index}.address`" :rules="rules.address">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.address"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="IP">
            <template slot-scope="scope">
              <el-form-item :prop="`cameraList.${scope.$index}.ip`" :rules="rules.ip">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.ip"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleSave(scope.$index, scope.row,machineType.cameraList,`cameraList.${scope.$index}`)"
                size="mini"
                type="success"
              >{{!scope.row.canEdit?'修改':'保存'}}</el-button>
              <el-button
                @click="handleDelete(scope.$index, machineType.cameraList, scope.row)"
                size="mini"
                type="danger"
                v-show="scope.row.canEdit"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <!-- 人证一体机 -->
      <el-row>
        <el-col>
          <div class="item">
            <span>人证一体机</span>
            <el-button
              @click="handleAdd(machineType.witnessCardMachineList)"
              size="mini"
              type="primary"
            >添加</el-button>
          </div>
        </el-col>
      </el-row>

      <!-- 人证一体机列表 -->
      <el-row>
        <el-table :data="tableForm.witnessCardMachineList" style="width: 100%">
          <el-table-column label="设备ID" width="180">
            <template slot-scope="scope">
              <el-form-item
                :prop="`witnessCardMachineList.${scope.$index}.deviceId`"
                :rules="rules.deviceId"
              >
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.deviceId"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="设备名称" width="180">
            <template slot-scope="scope">
              <el-form-item
                :prop="`witnessCardMachineList.${scope.$index}.deviceName`"
                :rules="rules.deviceName"
              >
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.deviceName"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="安装地点">
            <template slot-scope="scope">
              <el-form-item
                :prop="`witnessCardMachineList.${scope.$index}.address`"
                :rules="rules.address"
              >
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.address"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="IP">
            <template slot-scope="scope">
              <el-form-item :prop="`witnessCardMachineList.${scope.$index}.ip`" :rules="rules.ip">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.ip"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleSave(scope.$index, scope.row,machineType.witnessCardMachineList,`witnessCardMachineList.${scope.$index}`)"
                size="mini"
                type="success"
              >{{!scope.row.canEdit?'修改':'保存'}}</el-button>
              <el-button
                @click="handleDelete(scope.$index, machineType.witnessCardMachineList, scope.row)"
                size="mini"
                type="danger"
                v-show="scope.row.canEdit"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <!-- 网络录像机（NVR） -->
      <el-row>
        <el-col>
          <div class="item">
            <span>网络录像机（NVR）</span>
            <el-button @click="handleAdd(machineType.nvrList)" size="mini" type="primary">添加</el-button>
          </div>
        </el-col>
      </el-row>

      <!-- 网络录像机（NVR）列表 -->
      <el-row>
        <el-table :data="tableForm.nvrList" style="width: 100%">
          <el-table-column label="设备ID" width="180">
            <template slot-scope="scope">
              <el-form-item :prop="`nvrList.${scope.$index}.deviceId`" :rules="rules.deviceId">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.deviceId"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="设备名称" width="180">
            <template slot-scope="scope">
              <el-form-item :prop="`nvrList.${scope.$index}.deviceName`" :rules="rules.deviceName">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.deviceName"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="安装地点">
            <template slot-scope="scope">
              <el-form-item :prop="`nvrList.${scope.$index}.address`" :rules="rules.address">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.address"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="IP">
            <template slot-scope="scope">
              <el-form-item :prop="`nvrList.${scope.$index}.ip`" :rules="rules.ip">
                <el-input
                  :disabled="!scope.row.canEdit"
                  clearable
                  size="mini"
                  v-model="scope.row.ip"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleSave(scope.$index, scope.row,machineType.nvrList,`nvrList.${scope.$index}`)"
                size="mini"
                type="success"
              >{{!scope.row.canEdit?'修改':'保存'}}</el-button>
              <el-button
                @click="handleDelete(scope.$index, machineType.nvrList, scope.row)"
                size="mini"
                type="danger"
                v-show="scope.row.canEdit"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <!-- 设备报警通知邮件 -->
      <el-row :gutter="20" class="notification">
        <el-col :span="4.5">
          <div>设备异常报警通知邮件:</div>
        </el-col>
        <el-col :span="8">
          <el-form-item :prop="`email`" :rules="rules.email">
            <el-input
              :disabled="canEditEmail"
              placeholder="通知邮箱(多个用;隔开)"
              size="mini"
              v-model="tableForm.email"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button @click="savaEmail" size="mini" type="primary">{{canEditEmail?'修改':'保存'}}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  fetchSearchProject,
  fetchSaveDevice,
  fetchsaveEmail,
  fetchDeletedDevice,
  fetchDeviceInfo
} from '../../api/index.js';
export default {
  data() {
    return {
      // 项目名称
      project: '',
      // 能否修改邮箱
      canEditEmail: false,
      // 需要提交的表单
      tableForm: {
        // 摄像机
        cameraList: [],
        // 人证一体机
        witnessCardMachineList: [],
        // 网络录像机NVR
        nvrList: [],
        serviceList: [],
        // 报警通知邮箱
        email: ''
      },
      // 机器类型
      machineType: {
        cameraList: 'cameraList',
        witnessCardMachineList: 'witnessCardMachineList',
        nvrList: 'nvrList'
      },
      // 发送类型
      sendType: {
        cameraList: 'CAMERA',
        witnessCardMachineList: 'WITNESS_CARD_MACHINE',
        nvrList: 'NVR'
      },
      //项目信息
      projectInfo: [],
      // 表单验证规则
      rules: {
        // 设备ID
        deviceId: [
          {
            required: true,
            message: '请输入设备ID',
            trigger: 'blur'
          }
        ],
        // 设备名称
        deviceName: [
          {
            required: true,
            message: '请输入设备名称',
            trigger: 'blur'
          }
        ],
        // 设备安装地点
        address: [
          {
            required: true,
            message: '请输入设备安装地点',
            trigger: 'blur'
          }
        ],
        // Ip
        ip: [
          {
            required: true,
            message: '请输入设备IP',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (
                /^((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))(\.((\d)|([1-9]\d)|(1\d{2})|((2[0-4]\d)|(25[0-5])))){3}$/.test(
                  value
                )
              ) {
                callback();
              } else {
                callback(new Error('错误的IP地址'));
              }
            },
            trigger: 'blur'
          }
        ],
        // 邮箱验证
        email: [
          {
            required: true,
            message: '请输入报警邮箱地址',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              let allEmail = value.split(';');
              let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
              if (allEmail.every(item => reg.test(item) || item === '')) {
                callback();
              } else {
                callback(new Error('含有错误的邮箱地址'));
              }
            },
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    // 验证是否选择了项目
    validatorSelect() {
      if (!this.project || this.projectInfo.length === 0) {
        this.$message('请先选择项目');
        return false;
      }
      return true;
    },
    // 添加设备
    handleAdd(type) {
      this.tableForm[type].push({ canEdit: true, isEdit: '保存' });
    },
    // autoComplate选中时触发事件
    async getTableForm() {
      let projectId = '';
      this.projectInfo.forEach(item => {
        if (item.projectName == this.project) {
          projectId = item.projectId;
        }
      });
      this.$refs.ruleForm.resetFields();
      let { data } = await fetchDeviceInfo(projectId);
      this.tableForm = data;
      if (this.tableForm.email) {
        this.canEditEmail = true;
      }
    },
    // 删除
    async handleDelete(index, type, row) {
      if (!row.deviceId || !row.id) {
        this.$delete(this.tableForm[type], index);
        return;
      }
      let { code, data } = await fetchDeletedDevice(row.deviceId);
      if (code !== '0') {
        this.$message({
          type: 'error',
          message: data.msg
        });
      } else {
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.$delete(this.tableForm[type], index);
      }
    },
    // 保存
    async handleSave(index, row, type, field) {
      if (!this.validatorSelect()) {
        return;
      }
      // isEdit表示当前是否能够编辑，不能编辑就修改状态
      if (!row.isEdit) {
        this.$set(row, 'canEdit', true);
        this.$set(row, 'isEdit', true);
        return;
      }
      // 验证的结果
      let validateRes = true;
      let validate = [
        field + '.ip',
        field + '.address',
        field + '.deviceId',
        field + '.deviceName'
      ];
      this.$refs.ruleForm.validateField(validate, res => {
        if (res) validateRes = false;
      });
      if (!validateRes) return;
      let projectId = '';
      this.projectInfo.forEach(item => {
        if (item.projectName == this.project) {
          projectId = item.projectId;
        }
      });
      let { code, msg, data } = await fetchSaveDevice({
        address: row.address,
        deviceId: row.deviceId,
        deviceName: row.deviceName,
        id: row.id,
        ip: row.ip,
        projectId,
        type: this.sendType[type]
      });
      if (code != '0') {
        this.$message({
          type: 'error',
          message: data || msg
        });
      } else {
        this.getTableForm();
        this.$set(row, 'canEdit', false);
        this.$set(row, 'isEdit', false);
        this.$message({
          type: 'success',
          message: '保存成功'
        });
      }
    },
    // 获取项目
    async queryProject(queryString, cb) {
      if (!queryString) {
        cb([]);
        return;
      }
      let { data, code } = await fetchSearchProject(queryString, true);
      if (code === '0') {
        this.projectInfo = data;
        let options = data.map(item => ({
          value: item.projectName
          // name: item.projguid
        }));
        cb(options);
      }
    },
    // 保存邮件
    async savaEmail() {
      if (!this.validatorSelect()) {
        return;
      }
      if (this.canEditEmail) {
        this.canEditEmail = false;
        return;
      }
      let validateRes = true;
      this.$refs.ruleForm.validateField('email', res => {
        if (res) validateRes = false;
      });
      if (!this.validatorSelect() || !validateRes) {
        return;
      }
      let projectId = '';
      this.projectInfo.forEach(item => {
        if (item.projectName == this.project) {
          projectId = item.projectId;
        }
      });
      let { data } = await fetchsaveEmail(projectId, this.tableForm.email);
      if (data.code != '0') {
        this.$message({
          type: 'error',
          message: data.msg
        });
      } else {
        this.canEditEmail = true;
        this.$message({
          type: 'success',
          message: '保存成功'
        });
      }
    }
  }
};
</script>

