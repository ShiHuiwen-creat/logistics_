<template>
  <div>
    <el-button icon="el-icon-back" @click="back()" circle type="info" style="float: right;margin-right: 15px"></el-button><br>
    <h2>售后服务处理订单</h2>
    <el-table
        :data="tableData"
        style="width: 800px ; margin-left: 460px"
        :row-class-name="tableRowClassName">
      <el-table-column
          prop="ordernum"
          label="订单编号"
          width="150">
      </el-table-column>
      <el-table-column
          prop="origin"
          label="始发地"
          width="100">
      </el-table-column>
      <el-table-column
          prop="destination"
          label="终到地"
          width="100">
      </el-table-column>

      <el-table-column
          prop="reasion"
          label="原因"
          width="180">
      </el-table-column>

      <el-table-column
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button @click="accept(scope.row)"  icon="el-icon-check" type="success" circle size="small"></el-button>
          <el-button @click="refuse(scope.row)"  icon="el-icon-close" type="danger" circle size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as row from "element-ui";

export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    accept(row){

    },
    refuse(row){

    },
    back() {
      this.$router.push({
        path: '/adminehome',})
    }
  },
  data() {
    return {
      tableData: [{
        ordernum: '20210711',
        origin: '长沙',
        destination: '武汉',
        reasion:'物流配送太慢'
      }, {
        ordernum: '20210712',
        origin: '长沙',
        destination: '武汉',
        reasion:'物流配送太慢'
      }, {
        ordernum: '20210713',
        origin: '长沙',
        destination: '武汉',
        reasion:'物流配送太慢'
      }, {
        ordernum: '20210714',
        origin: '长沙',
        destination: '武汉',
        reasion:'物流配送太慢'
      }]
    }
  },
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>