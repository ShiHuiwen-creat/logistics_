<template>
  <div>

    <div style="width: 350px; margin: auto">

      <H3 align="center">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="el-icon-edit"></i>&nbsp&nbsp用户注册</H3>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="账户ID" prop="userid">
          <el-input v-model="ruleForm.userid" placeholder="请输入由数字组成的账户ID"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" auto-complete="new-password"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword"></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="male" value="male"></el-option>
            <el-option label="female" value="female"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="联系方式" prop="tel">
          <el-input v-model="ruleForm.tel" placeholder="使用邮箱地址方便密码找回" ></el-input>
        </el-form-item>

        <el-form-item label="地址" prop="addr">
          <el-input v-model="ruleForm.addr"></el-input>
        </el-form-item>

        <br>
        <el-form-item>
          <el-button icon="el-icon-check" type="primary" round @click="submitForm('ruleForm')">提交</el-button>
          <el-button icon="el-icon-refresh" type="primary" round @click="resetForm('ruleForm')">重置</el-button>
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
        userid:null,
        name:null,
        age:null,
        sex:null,
        tel:null,
        addr:null,
        pwd:null,
        rePassword: null
      },
      rules: {
        userid: [
          { required: true, message: '请输入账户ID', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
        ],
        sex: [
          { required: true, message: '请输入性别', trigger: 'blur' },
        ],
        tel: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
        ],
        addr: [
          { required: true, message: '请输入地址', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        rePassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
         if(_this.ruleForm.pwd !== _this.ruleForm.rePassword) {
            alert('密码不一致，请再次输入');
           _this.ruleForm.rePassword = '';
          }else{
            // alert('注册成功');
            console.log(_this.ruleForm)

            axios({
              method: "POST",
              url: 'http://192.168.3.33:8088/Login/register',
              data: {
                userid:parseInt(_this.ruleForm.userid) ,
                name: _this.ruleForm.name,
                age:parseInt(_this.ruleForm.age) ,
                sex: _this.ruleForm.sex,
                tel: _this.ruleForm.tel,
                addr: _this.ruleForm.addr,
                pwd: _this.ruleForm.pwd,
              }
            }).then(function (resp){
              console.log(resp)
              if(resp.data.status === 0){
                alert(resp.data.msg)
              }else{
                console.log(resp.data.msg)
                alert(resp.data.msg)
              }
            })

          }
        } else {
          alert('注册失败，请再次注册');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },


  }
}
</script>