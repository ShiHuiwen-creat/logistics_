<template>
  <div>

    <div style="width: 350px; margin: auto">
      <H3 align="center">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp请输入新密码</H3>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="ruleForm.newPassword"></el-input>
        </el-form-item>

        <br>
        <el-form-item>
          <el-button icon="el-icon-s-promotion" type="primary" round @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>


      <br><br><br>
    </div>
  </div>


</template>

<script>
export default {

  data() {
    return {
      ruleForm: {
        email :this.$route.query.email,
        newPassword : '',
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

              this.$router.push({
                path: '/customerlogin',
              })

          // const _this = this;
          // axios({
          //   method: "POST",
          //   url: 'http://192.168.3.33:8088/Login/updateByEmail',
          //   data: {
          //     pwd : _this.ruleForm.newPassword,
          //     email: _this.ruleForm.email
          //   }
          // }).then(function (resp) {
          //   if (resp.data.status === 0) {
          //     alert("修改成功")
          //     this.$router.push({
          //       path: '/customerlogin',
          //     })
          //   } else {
          //     alert("修改失败")
          //   }
          // })

        } else {
          alert("修改失败")
          return false;
        }
      });
    },

  }
}
</script>