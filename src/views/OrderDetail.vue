<template>
  <div>
    <el-button icon="el-icon-back" @click="back()" circle type="info" style="float: right ; margin-right: 15px"></el-button><br>
    <div style="width: 350px; margin: auto">
      <H3 align="center">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="el-icon-sunrise"></i>&nbsp;待处理订单详情</H3>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="订单编号" prop="ordernum">
          <el-input v-model="ruleForm.ordernum"></el-input>
        </el-form-item>

        <el-form-item label="用户ID" prop="userid">
          <el-input v-model="ruleForm.userid"></el-input>
        </el-form-item>

        <el-form-item label="寄件重量(KG)" prop="weight">
          <el-input v-model="ruleForm.weight"></el-input>
        </el-form-item>

        <el-form-item label="始发地" prop="origin">
          <el-input v-model="ruleForm.origin"></el-input>
        </el-form-item>

        <el-form-item label="目的地" prop="destination">
          <el-input v-model="ruleForm.destination"></el-input>
        </el-form-item>

        <el-form-item label="运输方式" prop="transportmode">
          <el-input v-model="ruleForm.transportmode"></el-input>
        </el-form-item>

        <el-form-item label="寄件运费(元)" prop="shippingprice">
          <el-input v-model="ruleForm.shippingprice"></el-input>
        </el-form-item>

        <el-form-item label="寄件成本(元)" prop="costprice">
          <el-input v-model="ruleForm.costprice"></el-input>
        </el-form-item>

        <br>
        <el-form-item>
          <el-button  type="danger" round @click="refuse()">拒接</el-button>
          <el-button  type="success" round @click="agree()">接收</el-button>
        </el-form-item>
      </el-form>
      <br>

    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        ordernum:this.$route.query.ordernum,
        userid:this.$route.query. userid,
        weight:this.$route.query.weight,
        origin:this.$route.query.origin,
        destination:this.$route.query.destination,
        transportmode:this.$route.query.transportmode,
        shippingprice:this.$route.query.shippingprice,
        costprice:this.$route.query.costprice,
      },
      rules: {
      }
    };
  },
  methods: {
    refuse(){

    },

    agree(){

    },
    back() {
      this.$router.push({
        path: '/adminehome',})
    }

  }
}
</script>