<template>
  <div>
    <el-button icon="el-icon-back" @click="back()" circle type="info" style="float: right;margin-right: 15px"></el-button><br>
    <div style="width: 350px; margin: auto">

      <H3 align="center">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="el-icon-edit"></i>&nbsp&nbsp转运中心</H3>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

        <el-form-item label="转运中心名称" prop="locale">
          <el-input v-model="ruleForm.locale" placeholder="格式为XX转运中心"></el-input>
        </el-form-item>

        <el-form-item label="经度" prop="lng">
          <el-input v-model="ruleForm.lng" placeholder="例如112.00"></el-input>
        </el-form-item>

        <el-form-item label="维度" prop="lat">
          <el-input v-model="ruleForm.lat" placeholder="例如45.00"></el-input>
        </el-form-item>


        <br>
        <el-form-item>
          <el-button icon="el-icon-check" type="primary" round @click="submitForm('ruleForm')" size="small">提交</el-button>
          <el-button icon="el-icon-refresh" type="primary" round @click="resetForm('ruleForm')" size="small">重置</el-button>
        </el-form-item>
      </el-form>

      <br>  <br>  <br>

    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        locale: null,
        lng: null,
        lat: null
      },
      rules: {
        locale: [
          { required: true, message: '请按格式输入转运中心名称', trigger: 'blur' },
        ],
        lng: [
          { required: true, message: '请输入转运中心经度', trigger: 'blur' },
        ],
        lat: [
          { required: true, message: '请输入转运中心维度', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {

      const _this=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('添加成功');
        } else {
          alert('添加转运中心失败，请再次输入');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    back() {
      this.$router.push({
        path: '/adminehome',})
    }

  }
}
</script>