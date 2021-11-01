<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <br><br>
    <el-row>
      <el-button type="primary"  round @click="xcx()">我要货运</el-button>>
      <el-button type="primary" round @click="mail()">我要寄件</el-button>
      <el-button type="success" round @click="myorders()">我的订单</el-button>
      <el-button type="warning" round @click="afterService()">售后详情</el-button>
      <el-button type="danger" round  @click="persion()">个人中心</el-button>
      <el-button type="info" round @click="transcenter()">转运中心</el-button>
      <el-button type="primary"  round @click="map()">中国铁路地图</el-button>
      
    </el-row>

  </div>
</template>

<script>
import { regionData } from 'element-china-area-data'

export default {
  components: {
  },
  data() {
    return {
    }
  },

  mounted() {
  },
  // 事件处理
  methods: {

    mail() {
      this.$router.push({
        path: '/mail',
      })
    },

    myorders() {
      this.$router.push({
        path: '/doing',
      })
    },

    afterService() {
      this.$router.push({
        path: '/done',
      })
    },

    persion() {
      this.$router.push({
        path: '/sum',
      })
    },
    transcenter(){
      this.$router.push({
        path: '/map',
      })
    },
    map(){
      // this.$router.push({
      //   path: 'https://map.qq.com/'
      window.location.href = 'http://cnrail.geogv.org/zhcn/'
    },
    xcx(){
      this.$router.push({
        path: '/xcx',
      })
    }

    }

  }

</script>
