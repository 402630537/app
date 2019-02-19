<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="2000">
      <mt-swipe-item><img src="../image/4.jpg"/></mt-swipe-item>
      <mt-swipe-item><img src="../image/6.jpg"/></mt-swipe-item>
      <mt-swipe-item><img src="../image/7.jpg"/></mt-swipe-item>

      <mt-swipe-item v-for="item in LunBo" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!--六宫格-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/app1.jpg"/>
          <div class="mui-media-body">主页</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">

          <img src="../image/app2.jpg"/>
          <div class="mui-media-body">信息</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">

          <img src="../image/app5.jpg"/>
          <div class="mui-media-body">微信</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../image/app4.jpg"/>
          <div class="mui-media-body">定位</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">


          <img src="../image/app3.jpg"/>
          <div class="mui-media-body">搜索</div>
        </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">

          <img src="../image/app6.jpg"/>
          <div class="mui-media-body">拨号</div>
        </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        LunBo: []
      }
    },
    created() {
      this.getLunBo();
    },
    methods: {
      getLunBo() {
        this.$http.get("#   ", {
          emulateJSON: true
        })
          .then(result => {
            if (result.body.status === 0) {
              this.LunBo = result.body.message;
              Toast('页面在这呢');
            } else {
              // Toast('页面丢了');
              console.log(result.body.message + '--------')
            }
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: lawngreen;
      }
      &:nth-child(2) {
        background-color: deepskyblue;
      }
      &:nth-child(3) {
        background-color: lawngreen;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .mui-grid-view.mui-grid-9 {
    border: 0;
    background-color: #fff;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-col-xs-4 {
      width: 33.33333333%;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;

  }
</style>