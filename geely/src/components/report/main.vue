<template>
  <div class="main">
    <div class="left_part">
      <div class="left_part_panal" :class="{active:nowActive==1}" v-on:click="regNumber()">
        <el-card :body-style="{ padding: '20px', borderRadius: '5px'}">
          <img src="../../assets/car.png" class="image">
          <div style="padding: 14px;">
            <span>当前装车数量:</span>
            <span>{{regnumbers}}</span>
          </div>
        </el-card>
      </div>
      <div class="left_part_panal" :class="{active:nowActive==2}" v-on:click="onlineNumber()">
        <el-card :body-style="{ padding: '20px', borderRadius: '5px'}">
          <img src="../../assets/car.png" class="image">
          <div style="padding: 14px;">
            <span>当前在线车辆:</span>
            <span>{{onlinenumbers}}</span>
          </div>
        </el-card>
      </div>
      <div class="left_part_panal" :class="{active:nowActive==3}" v-on:click="activeNumber()">
        <el-card :body-style="{ padding: '20px', borderRadius: '5px'}">
          <img src="../../assets/car.png" class="image">
          <div style="padding: 14px;">
            <span>当前活跃车辆:</span>
            <span>{{activenumbers}}</span>
          </div>
        </el-card>
      </div>
    </div>
    <div class="right_part">
      <div class="now_panel">{{nowpanel}}</div>
      <div style="padding: 20px" v-if="showsearch">
        <el-form ref="form" label-width="80px">
          <el-form-item label="查询时间">
            <el-col :span="11">
              <el-date-picker type="datetime" placeholder="选择日期时间" v-model="searchDate" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <div style="padding: 20px;overflow: auto">
        <div v-if="showregpanel">
          <el-button type="defalt" style="margin-bottom: 10px;float: right" v-on:click="exportTest()">导出</el-button>
          <el-table
            :data="tableData"
            ref="table"
            border
            style="width: 100%"
            max-height="100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="TERMINAL_ID"
              label="IMSI号"
            >
            </el-table-column>
            <el-table-column
              prop="VIN"
              label="车架号"
            >
            </el-table-column>
            <el-table-column
              prop="MOBILE_PHONE"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              prop="ENGINE_NO"
              label="引擎号"
            >
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="totalelement>0"
            small
            @current-change="handleCurrentChange"
            :current-page.sync="currentpage"
            :page-size="10"
            layout="prev, pager, next ,total"
            :total="totalelement"
            style="overflow: auto"
          >
          </el-pagination>
        </div>
        <div v-if="showactivepanel">
          <el-table
            :data="activetableData"
            border
            style="width: 100%"
            max-height="100%"
          >
            <el-table-column
              prop="TERMINAL_ID"
              label="IMSI号"
            >
            </el-table-column>
            <el-table-column
              prop="VIN"
              label="车架号"
            >
            </el-table-column>
            <el-table-column
              prop="MOBILE_PHONE"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              prop="ENGINE_NO"
              label="引擎号"
            >
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="totalelement>0"
            small
            @current-change="handleACurrentChange"
            :current-page.sync="currentpage"
            :page-size="10"
            layout="prev, pager, next ,total"
            :total="totalelement"
            style="overflow: auto"
          >
          </el-pagination>
        </div>
        <div v-if="showonlinepanel">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            max-height="100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="TERMINAL_ID"
              label="IMSI号"
            >
            </el-table-column>
            <el-table-column
              prop="VIN"
              label="车架号"
            >
            </el-table-column>
            <el-table-column
              prop="MOBILE_PHONE"
              label="手机号"
            >
            </el-table-column>
            <el-table-column
              prop="ENGINE_NO"
              label="引擎号"
            >
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="totalelement>0"
            small
            @current-change="handleCurrentChange"
            :current-page.sync="currentpage"
            :page-size="10"
            layout="prev, pager, next ,total"
            :total="totalelement"
            style="overflow: auto"
          >
          </el-pagination>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../api/index'
  import Csvexport from '../../utils/CsvExport'
  export default {
    name: 'main',
    data () {
      return {
        onlinenumbers:'获取中...',
        regnumbers:'获取中...',
        activenumbers:'获取中...',
        showregpanel:true,
        nowActive:1,
        showactivepanel:false,
        showonlinepanel:false,
        showsearch:false,
        searchDate:new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+"00:00:00",
        nowpanel:'装车查询',
        totalelement: 0,
        currentpage: 1,
        pageSize: 10,
        pageIndex: 0,
        tableDatas:[],
        tableData: [],
        activetableData: []
      }
    },
    mounted: function() {
      this.searchInfo();
      this.regNumber();
      this.timer = setInterval(() => {
        this.searchInfo();
      }, 300000);
    },
    methods: {
      timer:function () {},
      regNumber:function () {
        document.getElementsByClassName('active').removeclass
        this.nowpanel = '装车查询';
        this.showactivepanel = false;
        this.showonlinepanel = false;
        this.showregpanel = true;
        this.showsearch = false;
        this.tableDatas = [];
        this.currentpage = 1;
        this.totalelement = 0;
        this.nowActive = 1;
        let searchobj = {};
        try {
          this.$http.post(api.getRegNumber(),JSON.stringify(searchobj)).then(
            function (res) {
              if (res.data.status) {
                this.pageIndex = 0;
                this.tableDatas = res.data.loadVehicles[0];
                this.tableData = this.tableDatas.slice(this.pageIndex*this.pageSize,(this.pageIndex+1)*this.pageSize);
                this.totalelement = res.data.loadVehicles[0].length;
              } else {
                console.log("信息获取失败，原因:", res);
                this.errhandle(res.data.err);
              }
            },
            function (res) {
              console.log("error:",res)
              this.errhandle("网络连接失败!");
            }
          );
        } catch (e) {
          this.errhandle("网络连接失败!");
        }
      },
      handleCurrentChange (page) {
        this.tableData = this.tableDatas.slice((page-1)*this.pageSize,page*this.pageSize);
      },
      handleACurrentChange(page){
        this.activetableData = this.tableDatas.slice((page-1)*this.pageSize,page*this.pageSize);
      },
      exportTest(){
        let columns = this.$refs.table.$children.filter(t => t.prop != null);
        const fields = columns.map(t => t.prop);
        const fieldNames =  columns.map(t => t.label);
        Csvexport(this.tableDatas, fields, fieldNames, '报表');
      },
      onlineNumber:function () {
        this.nowpanel = '在线查询';
        this.showsearch = false;
        this.showactivepanel = false;
        this.showonlinepanel = true;
        this.showregpanel = false;
        this.nowActive = 2;
      },
      activeNumber:function () {
        this.nowpanel = '活跃查询';
        this.showsearch = true;
        this.showactivepanel = true;
        this.showonlinepanel = false;
        this.showregpanel = false;
  
        this.currentpage = 1;
        this.totalelement = 0;
        this.nowActive = 3;
        let searchobj = {
          dataTime:new Date(this.searchDate).getTime()
        };
        try {
          this.$http.post(api.getActiveNumber(),JSON.stringify(searchobj)).then(
            function (res) {
              if (res.data.status) {
                this.pageIndex = 0;
                this.tableDatas = res.data.activeVehicles[0];
                this.activetableData = this.tableDatas.slice(this.pageIndex*this.pageSize,(this.pageIndex+1)*this.pageSize);
                this.totalelement = res.data.activeVehicles[0].length;
              } else {
                console.log("信息获取失败，原因:", res);
                this.errhandle(res.data.err);
              }
            },
            function (res) {
              console.log("error:",res)
              this.errhandle("网络连接失败!");
            }
          );
        } catch (e) {
          this.errhandle("网络连接失败!");
        }
      
      },
      searchInfo:function () {
        let searchobj = {};
        try {
          this.$http.post(api.getStatus(),JSON.stringify(searchobj)).then(
            function (res) {
              if (res.data.status) {
                this.regnumbers = res.data.basicInfo[0].loadQuantity;
                this.onlinenumbers = res.data.basicInfo[1].onlineVehicle;
                this.activenumbers = res.data.basicInfo[2].activeVehicle;
              } else {
                console.log("信息获取失败，原因:", res);
                this.regnumbers = '获取失败';
                this.onlinenumbers = '获取失败';
                this.activenumbers = '获取失败';
                this.errhandle(res.data.err);
              }
            },
            function (res) {
              console.log("error:",res);
              this.regnumbers = '获取失败';
              this.onlinenumbers = '获取失败';
              this.activenumbers = '获取失败';
              this.errhandle("网络连接失败!");
            }
          );
        } catch (e) {
          this.regnumbers = '获取失败';
          this.onlinenumbers = '获取失败';
          this.activenumbers = '获取失败';
          this.errhandle("网络连接失败!");
        }
      },
      onSubmit:function () {
          this.activeNumber();
      },
      errhandle (msg) {
        this.$message({
          message: msg,
          type: 'error',
          duration: "1000",
          showClose: true
        });
      }
    }
  }
</script>
<style scoped>
  .main{
    width: 100%;
  }
  .left_part{
    position: absolute;
    top: 5%;
    bottom: 5%;;
    left: 5%;
    width: 25%;
  }
  .left_part_panal{
    margin-top: 3%;
    height: 30%;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    transition: .3s
  }
  .now_panel{
    height: 24px;
    line-height: 24px;
    background-color: rgb(16,61,94);
    color: white;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
    padding: 10px;
  }
  .right_part{
    position: absolute;
    top: 5%;
    bottom: 5%;
    left: 35%;
    right: 5%;
    width: 60%;
    /*padding: 20px;*/
    border: 1px solid #505d6b;
    border-radius: 5px;
  }
  .el-card{
    height: 100%;
  }
  .active{
    box-shadow: 10px 10px 5px #888888;
  }
  .left_part_panal:hover{
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
  }
</style>
