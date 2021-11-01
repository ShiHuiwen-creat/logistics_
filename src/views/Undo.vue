<template>
  <div>

    <el-button icon="el-icon-back" @click="back()" circle type="info" style="float: right;margin-right: 15px"></el-button><br>

    <h2>待处理订单</h2>
    <el-table
        :data="tableData"
        style="width: 800px ; margin-left: 480px"
        :row-class-name="tableRowClassName">
      <el-table-column
          prop="ordernum"
          label="订单编号"
          width="150">
      </el-table-column>
      <el-table-column
          prop="origin"
          label="始发地"
          width="150">
      </el-table-column>
      <el-table-column
          prop="destination"
          label="终到地"
          width="150">
      </el-table-column>
      <el-table-column
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row)" type="primary" icon="el-icon-view" size="small">查看详情</el-button>
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
    detail(row){
      this.$router.push({
        path: '/orderdetail',
        query: {
          ordernum:row.ordernum,
          userid:row.userid,
          weight:row.weight,
          origin:row.origin,
          destination:row.destination,
          transportmode:row.transportmode,
          shippingprice:row.shippingprice,
          costprice:row.costprice,
        }
      })
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
        userid: '20010406',
        weight:'20',
        origin: '长沙',
        destination: '武汉',
        transportmode:'飞机',
        shippingprice: '100',
        costprice:'80',
      }, {
        ordernum: '20210712',
        userid: '20010406',
        weight:'20',
        origin: '长沙',
        destination: '武汉',
        transportmode:'飞机',
        shippingprice: '100',
        costprice:'80',
      }, {
        ordernum: '20210713',
        userid: '20010406',
        weight:'20',
        origin: '长沙',
        destination: '武汉',
        transportmode:'飞机',
        shippingprice: '100',
        costprice:'80',
      }, {
        ordernum: '20210714',
        userid: '20010406',
        weight:'20',
        origin: '长沙',
        destination: '武汉',
        transportmode:'飞机',
        shippingprice: '100',
        costprice:'80',
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