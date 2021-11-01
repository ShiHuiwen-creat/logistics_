<template>
  <div>
    <div id="app" >

      <div style="background: #C2DDED; width: auto; height: 75px " >
        <br><img src="../src/resources/icon_plus.png" alt="" width="180px" align="left" style="margin-left: 20px">
        <el-button align="right" style="float: right ; margin-right: 10px" >
          <span>{{dateFormat(newDate)}}</span>
        </el-button>
      </div>

      <br>
      <router-view></router-view>
      <br><br>


      <div style="background: #C2DDED ;height: 130px">
        <br><H5 align="center">联系电话：0377-66668888<br>敬请期待您的建议，我们将竭诚为您服务</H5>
        <H5 align="center">Copyright(C)2021-2021 LOGISTICS. All Rights Reserved.</H5>
      </div>

    </div>
<!--      <router-view></router-view>-->
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      newDate: new Date()
    }
  },

  methods: {
    dateFormat () {
      var date = new Date()
      var year = date.getFullYear()

      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      let week = date.getDay() // 星期
      let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
      // 拼接 时间格式处理
      return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds + ' ' + weekArr[week]
     }
},
// 挂载时间
mounted () {
let that = this
this.timer = setInterval(function () {
that.newDate = new Date().toLocaleString()
})
},
beforeDestroy: function () {
if (this.timer) {
clearInterval(this.timer)
}
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style> 
