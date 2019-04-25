<template>
  <div class="header">
    <h1 class="logo">内部人脸管理端</h1>
    <!--登录用户-->
    <el-dropdown @command="handleCommand" class="admin">
      <span class="el-dropdown-link">
        {{userName}}
        <em></em>
      </span>
      <el-dropdown-menu class="admin_drop" slot="dropdown">
        <el-dropdown-item command="quit">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				userName: localStorage.getItem('userName'),
			}
		},
		methods:{
			handleCommand(command){
				if(command === 'quit'){
					location.href = '/internal-api/loginAuth/logout'
				}
			},
		}
	}
</script>
