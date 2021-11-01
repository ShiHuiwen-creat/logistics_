<template>
  <div class="home">
<!--    <img style="width: 70px;" alt="Vue logo" src="../assets/logo.png">-->
      <el-carousel :interval="2500" type="card" height="380px" >
        <el-carousel-item v-for="item in pictures" :key="item.index">
          <br>
            <H4>{{item.h}}</H4>
<!--            <el-image-->
<!--                style="width: 400px; height: 300px"-->
<!--                src= '../resources/3.png'-->
<!--                fit=cover></el-image>-->
          <img src ='../resources/3.png' alt="" width="450px" height="250" align="center"></img>

        </el-carousel-item>
      </el-carousel>

    <br><br><br>
    <el-button type="primary" @click="AdmineLog()" round>配送端登录</el-button>
    <el-button type="primary" @click="CustomerLog()" round>客户端登录</el-button>


  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      pictures :[{
         index : 1,
         src: '../resources/1.png',
         h: '物流平台',
        },
        {
          index : 2,
          src: "../resources/12.png",
          h: '创未来',
        },
        {
          index : 3,
          src: "../resources/13.png",
          h: '探新境',
        },
        {
          index : 4,
          src: "../resources/14.png",
          h: '知未解',
        },
        // {
        //   index : 5,
        //   src: "../resources/5.png",
        //   h: 'hello5',
        // },
        // {
        //   index : 6,
        //   src: "../resources/6.png",
        //   h: 'hello6',
        // },
      ]
    }
  },
  methods: {
    AdmineLog() {
    this.$router.push({
      path: '/adminelogin',
    })
   },
    CustomerLog() {
      this.$router.push({
        path: '/customerlogin',
      })
    }
 },


}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>