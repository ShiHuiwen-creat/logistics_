<template>
  <div>

   <div style="width: 600px; margin: auto">
      <el-steps :active="steps" finish-status="success" id="step">
        <el-step title="填写订单"></el-step>
        <el-step title="确认订单"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps><br>
      <div v-if="steps===0" id="formStyle">
        <el-form label-position="right" ref="form" :model="form" :rules="rules">
          <el-form-item label="车型" prop="name">
            <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
          </el-form-item>
<!--          <el-radio-group v-model="form.sex">-->
<!--            <el-radio label="先生"></el-radio>-->
<!--            <el-radio label="女士"></el-radio>-->
<!--          </el-radio-group>-->
          <el-form-item label="货运量" prop="contact">
            <el-input v-model="form.contact"></el-input>
          </el-form-item>
          <el-form-item label="当前位置" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="收件人姓名" prop="conName">
            <el-input v-model="form.conName"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="conContact">
            <el-input v-model="form.conContact"></el-input>
          </el-form-item>
          <el-form-item label="送达位置" prop="conAddress">
            <el-input v-model="form.conAddress"></el-input>
          </el-form-item>
          <el-form-item label="预计重量(单位:KG)" prop="weight">
            <el-input v-model.number="form.weight"></el-input>
          </el-form-item>
          <el-form-item label="预计体积(单位:dm3)">
            <el-input v-model="form.volume"></el-input>
          </el-form-item>
          <el-form-item label="发货时间" required>
            <el-col>
              <el-form-item prop="dateDay">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.dateDay"></el-date-picker>
              </el-form-item>
            </el-col>
<!--            <el-col>-->
<!--              <el-form-item prop="dateTime">-->
<!--                <el-time-picker placeholder="选择时间" v-model="form.dateTime"></el-time-picker>-->
<!--              </el-form-item>-->
<!--            </el-col>-->
          </el-form-item>
          <el-form-item label="寄件服务">
            <el-radio-group v-model="form.type">
              <el-radio-button label="标准快递" name="type"></el-radio-button>
              <el-radio-button label="特准快件" name="type"></el-radio-button>
              <el-radio-button label="大件快递" name="type"></el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-button @click="confirmForm('form')" type="primary" round icon="el-icon-right">下一步</el-button>
      </div>
      <div v-if="steps===1">
        <el-page-header @back="goBack" content="确认订单"></el-page-header>
        <div style="position: center">
          <table border="1" height="100" width="650" cellpadding="0" cellspacing="0">
            <tr>
              <td>车型</td>
              <td>{{this.value}}</td>
            </tr>
            <tr>
              <td>货运量</td>
              <td>{{form.contact}}</td>
            </tr>
            <tr>
              <td>当前位置：</td>
              <td>{{form.address}}</td>
            </tr>
            <tr>
              <td>收件人姓名：</td>
              <td>{{form.conName}}</td>
            </tr>
            <tr>
              <td>联系方式：</td>
              <td>{{form.conContact}}</td>
            </tr>
            <tr>
              <td>送达位置：</td>
              <td>{{form.conAddress}}</td>
            </tr>
            <tr>
              <td>预计重量：</td>
              <td>{{form.weight}}</td>
            </tr>
            <tr>
              <td>发货时间：</td>
              <td>{{form.dateDay}}</td>
            </tr>
            <tr>
              <td>运输方式：</td>
              <td>{{form.type}}</td>
            </tr>
            <tr>
              <td>运费：</td>
              <td>100</td>
            </tr>
          </table>
        </div>

<!--        <label @click="agree()">我已阅读服务协议<input type="checkbox"></label><br><br>-->
        <br><br>
        <el-button type="primary" @click="submitForm('form')"  round>提交订单</el-button>
      </div>
      <div v-if="steps===2">
        <span>提交成功！</span><br><br>
        <el-button @click="goUser">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'mail',
  data () {
    var validatorPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!/^1\d{10}$/.test(value)) {
        callback(new Error('手机号格式错误'))
      } else {
        callback()
      }
    }
    return {
         options: [{
          value: '选项1',
          label: '厢式货车'
        }, {
          value: '选项2',
          label: '罐式'
        }, {
          value: '选项3',
          label: '平板式'
        }, {
          value: '选项4',
          label: '栏板式'
        }, {
          value: '选项5',
          label: '起重举升'
        }],
        value: '',
      steps: 0,
      isProtocol: false,
      form: { // 表单信息
        name: '',
        sex: '1',
        address: '',
        contact: '',
        conName: '',
        conAddress: '',
        conContact: '',
        weight: '',
        volume: '',
        dateDay: '',
        type: ''
      },
      rules: {
        // name: [{required: true, message: '请输入姓名', trigger: 'blur'},
        //   {max: 10, message: '请输入正确名字', trigger: 'blur'}],
        // address: [{required: true, message: '请输入寄件地址', trigger: 'blur'}],
        // contact: [{required: true, validator: validatorPhone, trigger: 'blur'}],
        // conName: [{required: true, message: '请输入收件人姓名', trigger: 'blur'}],
        // conAddress: [{required: true, message: '请输入收件地址', trigger: 'blur'}],
        // conContact: [{required: true, validator: validatorPhone, trigger: 'blur'}],
        // weight: [{required: true, message: '请输入预计重量', trigger: 'blur'},
        //   {type: 'number', message: '请输入数字', trigger: 'blur'}],
        // dateDay: [{required: true, type: 'date', message: '请选择日期', trigger: 'change'}],
        // dateTime: [{required: true, type: 'date', message: '请选择时间', trigger: 'change'}]
      }
    }
  },
  methods: {
    next () {
      if (this.steps++ > 2) this.steps = 0
    },
    agree () {
      this.isProtocol = !this.isProtocol
      this.$refs.nextStep.style.disabled = !this.isProtocol
    },
    goBack () {
      this.steps--
    },
    goUser () {
      this.$router.push('/customerhome')
    },
    confirmForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.steps++
          console.log(this.value)
        } else {
          console.log('还有未填信息')
          return false
        }
      })
    },
    submitForm (formName) {
      this.steps++

      // const _this=this;
      // axios({
      //   method: "POST",
      //   url: 'http://192.168.3.166:8088/order/confirm',
      //   data: {
      //     userId:parseInt('20210712') ,
      //     weight:parseFloat(_this.form.weight),
      //     origin:_this.form.address,
      //     destination: _this.form.conAddress,
      //     transportMode: _this.form.type,
      //     orderStatus: '未处理',
      //     senderTel: parseInt(_this.form.contact),
      //     recipientsTel:parseInt(_this.form.conContact),
      //     senderName:_this.form.name,
      //     recipientsName:_this.form.conName,
      //     shippingPrice:parseInt('100'),
      //     costPrice:parseInt('80'),
      //
      //   }
      // }).then(function (resp){
      //   console.log(resp)
      //   if(resp.data.status === 0){
      //     this.steps++
      //     alert('提交订单成功')
      //   }else{
      //     alert('提交订单失败')
      //   }
      // })



    }
  }
}

</script>
<style scoped>
.header{
  width: 100%;
  height: 20%;
  top: 0px;
  background-color: aqua;
}
#step {
  text-align: left;
  width: 80%;
  margin: 0 auto;
}

#formStyle {
  width: 60%;
  margin: 0 auto;
}

</style>
