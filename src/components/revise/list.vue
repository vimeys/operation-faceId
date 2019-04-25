/**
*   @author  Created By  YS  on 2019/4/25
*   @describe  列表页面
*/
<template>
    <div>
        <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>客户匹配校正</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <el-form :inline="true">
                <div class="row">
                    <el-form-item class="customer-search" :label-width="labelWidth" label="项目名称">
                        <el-input class="customer-key" placeholder="输入客户姓名，证件号查询" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item class="customer-search" :label-width="labelWidth" label="客户名称">
                        <el-input class="customer-key" placeholder="输入客户姓名，证件号查询" v-model="form.personName"></el-input>
                    </el-form-item>
                    <el-form-item label="刷证时间：" :label-width="labelWidth">
                        <el-date-picker v-model="form.timeRange" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="校正类型：" :label-width="labelWidth">
                        <el-date-picker v-model="form.reportTimeRange" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                    </el-form-item>

                </div>
                <div class="row">
                    <el-radio-group v-model="form.customerType" size="small" @change="search">
                        <el-radio-button label="CHECK">带校正</el-radio-button>
                        <el-radio-button label="CHECKED">已校正</el-radio-button>
                        <el-radio-button label="FAIL">校正失败</el-radio-button>
                        <el-radio-button label="ALL">全部刷证客户</el-radio-button>
                    </el-radio-group>
                    <!--<span class="padding-left">共搜索到 {{this.page.total}} 条数据</span>-->
                </div>
            </el-form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return {
                form:{
                    customerType:'ALL',
                    name:'',
                    timeRange:'',
                    personName:'',
                    type: [{
                        value: 0,
                        label: '全部'
                    }, {
                        value: 1,
                        label: '未匹配'
                    },
                        {
                            value:2,
                            label:'到访晚于刷证'
                        },
                        {
                            value:3,
                            label:'无需校正'
                        }
                    ]
                }
            }
        }
    }
</script>

