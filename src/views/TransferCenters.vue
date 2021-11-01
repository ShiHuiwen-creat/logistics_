<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <h2><i class="el-icon-map-location"></i>&nbsp;LOGISTICS &nbsp; 全国网点图</h2>
    <baidu-map class="bm-view" ak="N7YmCegdP5yeKl1IWukifknWQGvQ0pv2" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="handler">
      <!--缩放控件-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!--定位-->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <!--点-->
      <div v-for="(point,index) in resultData">
        <bm-marker :position="{lng:point.lng,lat:point.lat}" :dragging="true">
          <bm-label :content="point.locale" :labelStyle="{color: 'red', fontSize : '10px'}" :offset="{width: -35, height: 30}"/>
        </bm-marker>
      </div>

    </baidu-map>

  </div>
</template>

<script>
import { regionData } from 'element-china-area-data'

export default {
  components: {
  },
  data() {
    return {

      resultData:[
        {
          locale: "长沙转运中心",
          address: "长沙市",
          lng: "112.59",
          lat: "28.11",
          source: "北京日报",
          show:true
        },
        {
          locale: "武汉转运中心",
          address: "武汉市",
          lng: "114.00",
          lat: "31.00",
          source: "北京日报",
          show:true
        },
        {
          locale: "南昌转运中心",
          address: "南昌市",
          lng: "115.50",
          lat: "28.50",
          source: "北京日报",
          show:true
        },
        {
          locale: "郑州转运中心",
          address: "郑州市",
          lng: "113.00",
          lat: "34.30",
          source: "北京日报",
          show:true
        },
        {
          locale: "广州转运中心",
          address: "广州市",
          lng: "113.00",
          lat: "22.20",
          source: "北京日报",
          show:true
        },
        {
          locale: "成都转运中心",
          address: "成都市",
          lng: "104.00",
          lat: "30.67",
          source: "北京日报",
          show:true
        },
        {
          locale: "上海转运中心",
          address: "上海市",
          lng: "121.00",
          lat: "30.70",
          source: "北京日报",
          show:true
        },
        {
          locale: "北京转运中心",
          address: "北京市",
          lng: "116.50",
          lat: "40.00",
          source: "北京日报",
          show:true
        },
      ],
      center: {lng: 0, lat: 0},
      zoom: 10,
      points: [],
    }
  },

  mounted() {
  },
  // 事件处理
  methods: {
    handler({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 112.00
      this.center.lat = 34.80
      this.zoom = 5
    },


  }
}
</script>
<style scoped>
.bm-view {
  margin-top:0px;
  width: 100%;
  height: 480px;
}
.label {
  padding-left: 20px;
}

.role {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.seek {
  width: 98%;
  height: auto;
  margin: 10px auto;
  border: 1px solid #e6e6e6;
  background-color: #fff;
}

.roleList {
  width: 98%;
  height: auto;
  border: 1px solid #e6e6e6;
  margin: 10px auto;
  background-color: #fff;
  padding-bottom: 100px;
}

.formContent {
  width: 50%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
}

.roleTop {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #e6e6e6;
}

.addRole {
  padding-left: 30px;
  padding-top: 10px;
}

.tableForm {
  width: 100%;
  height: 100%;
}

.iconSize {
  font-size: 16px;
}

.paginationCon {
  float: right;
  margin-top: 12px;
  margin-right: 30px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
#box_center{
  margin:0 auto;
  margin-top: 30px;
}
.font{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.cen_h{
  text-align: center;
  margin-bottom: 30px;
}
.breadcrumb{
  padding:20px;
}
.demonstration {
  display: inline-block;
  color: #606266;
  font-size: 14px;
  line-height: 40px;
  padding: 0 12px 0 0;
}
</style>

