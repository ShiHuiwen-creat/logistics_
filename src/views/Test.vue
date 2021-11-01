<template>
  <div>

    <el-table
        :data="tableData"
        border
        style="width: 100% ">
      <el-table-column
          fixed
          prop="id"
          label="ID"
          width="150">
      </el-table-column>

      <el-table-column
          prop="name"
          label="Name"
          width="160">
      </el-table-column>

      <el-table-column
          prop="age"
          label="Age"
          width="160">
      </el-table-column>
    </el-table>


  </div>

</template>

<script>
export default {
  methods: {

  },
  data() {
    return {
      tableData: [{
        id: 111,
        name: 111,
        age: 20
      }],
    }
  },
  created() {
    alert(111)
    const _this = this
    axios.get('http://192.168.3.33:8088/Student/students').then(function (resp) {
      console.log(resp)
      _this.tableData = (resp.data.data)
      console.log(_this.tableData)
    })

  },
}
</script>