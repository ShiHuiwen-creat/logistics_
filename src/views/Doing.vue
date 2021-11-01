<template>
  <div>
    <el-button icon="el-icon-back" @click="back()" circle type="info" style="float: right;margin-right: 15px"></el-button><br>
    <h2><i class="el-icon-map-location"></i>&nbsp;物流状态更新</h2>

    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.region1" placeholder="订单编号" style="width: 150px;" filterable>
            <el-option v-for="item in orders "  :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchByID()">查询</el-button>
        </el-form-item>

        <el-form-item>
          <el-select v-model="formInline.region2" placeholder="转运中心" style="width: 150px">
            <el-option v-for="item in transfers "  :label="item.label" :value="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchByTrans()">查询</el-button>
        </el-form-item>

      </el-form>
    </div>

    <div>
      <el-table
          :data="tableData"
          style="width: 800px ; margin-left: 500px"
          :row-class-name="tableRowClassName">
        <el-table-column
            prop="ordernum"
            label="订单编号"
            width="150">
        </el-table-column>

        <el-table-column
            prop="warehouse"
            label="转运节点"
            width="110">
        </el-table-column>

        <el-table-column
            prop="status"
            label="转运节点状态"
            width="140">
          <template slot-scope="scope">
            <el-select v-model="scope.row.status"  placeholder="请选择" filterable allow-create>
              <el-option v-for="item in options "  :label="item.label" :value="item.label">
              </el-option>
            </el-select>
          </template>

        </el-table-column>

        <el-table-column
            label="操作"
            width="120">
          <template slot-scope="scope">
            <el-button @click="update(scope.row)" type="primary" icon="el-icon-upload" size="small">提交</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>

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


    update(row){
       alert(row.ordernum + row.warehouse + row.status)
    },

    back() {
      this.$router.push({
        path: '/adminehome',})
    },

    searchByID(){
       alert(this.formInline.region1)
    },

    searchByTrans(){
      alert(this.formInline.region2)
    }
  },
  data() {
    return {
      tableData: [{
        ordernum: '20210711',
        warehouse: '长沙',
        status:'未到达',
      }, {
        ordernum: '20210712',
        warehouse: '株洲',
        status:'未到达',
      }, {
        ordernum: '20210713',
        warehouse: '湘潭',
        status:'未到达',
      }, {
        ordernum: '20210714',
        warehouse: '长沙',
        status:'未到达',
      }],

      options: [{
        value: '选项1',
        label: '未到达'
      }, {
        value: '选项2',
        label: '已到达'
      }, {
        value: '选项3',
        label: '发往下一站'
      }, {
        value: '选项4',
        label: '派送中'
      }],
      value: '',

      formInline: {
        region1: '',
        region2: ''
      },

      orders: [
        {
          value: '选项1',
          label:'20201'
        },
        {
          value: '选项2',
          label:'20202'
        },
        {
          value: '选项3',
          label:'20203'
        },
        {
          value: '选项4',
          label:'20204'
        }
      ],

      transfers: [
        {
          value: '选项1',
          label:'武汉'
        },
        {
          value: '选项2',
          label:'长沙'
        },
        {
          value: '选项3',
          label:'郑州'
        },
        {
          value: '选项4',
          label:'广东'
        }
      ]
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