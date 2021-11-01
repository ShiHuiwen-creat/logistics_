<template>
  <div>
      <H3 align="center"><i class="el-icon-edit"></i>请按步骤找回密码</H3><br>

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="邮箱地址">
          <el-input v-model="formInline.email" placeholder="请输入注册时的邮箱地址"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button  type="primary" round @click="submitForm()" icon="el-icon-s-promotion" >发送</el-button>
        </el-form-item>
      </el-form>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="验 证 码">
        <el-input v-model="formInline.checkcode" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button  type="primary" round @click="check()" icon="el-icon-s-promotion" >提交</el-button>
      </el-form-item>
    </el-form>


      <br><br><br>
    </div>



</template>

<script>
export default {

  data() {
    return {
      formInline: {
        email :'',
      },
    };
  },

  methods: {
    check() {

      this.$router.push({
        path: '/newpassword',
        query: {
          email :this.formInline.email,
        }
      })

      // const _this = this;
      // axios({
      //   method: "POST",
      //   url: 'http://192.168.3.33:8088/Mail/JudgeCode',
      //   data: {
      //     checkcode : _this.formInline.checkcode
      //   }
      // }).then(function (resp) {
      //   if (resp.data.status === 0) {
      //     _this.$router.push({
      //       path: '/newpassword',
      //       query: {
      //         email :_this.formInline.email,
      //       }
      //     })
      //   } else {
      //     alert("验证失败")
      //   }
      // })

    },

    submitForm() {

          // const _this = this;
          // axios({
          //   method: "POST",
          //   url: 'http://192.168.3.33:8088/Mail/CheckCode',
          //   data: {
          //      email : _this.formInline.email
          //   }
          // }).then(function (resp) {
          //   if (resp.data.status === 0) {
          //     alert('已经发送，请注意查收');
          //   } else {
          //     alert("发送失败")
          //   }
          // })

        }
    }
  }
</script>