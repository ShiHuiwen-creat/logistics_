<template>
  
 <div style="width: 350px; margin: auto">
   <H3 align="center">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp管理员，欢迎您的登录</H3><br>

   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item label="账户ID" prop="ID">
       <el-input v-model="ruleForm.ID"></el-input>
     </el-form-item>

     <el-form-item label="密码" prop="password">
       <el-input type="password" v-model="ruleForm.password" auto-complete="new-password"></el-input>
     </el-form-item>


     <br>
     <el-form-item>
       <el-button icon="el-icon-check" type="primary" round @click="submitForm('ruleForm')">提交</el-button>
       <el-button icon="el-icon-refresh" type="primary" round @click="resetForm('ruleForm')">重置</el-button>
     </el-form-item>
   </el-form>
   <br><br><br><br><br><br>

 </div>

</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        ID :'',
        password :'',
      },
      rules: {
        ID: [
          { required: true, message: '请输入账户ID', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({
            path: '/adminehome',
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>