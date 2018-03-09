<template> 
<section class="wrap"> 
    <section class="vu_info">
        <template v-if="true">
          <button type="button" class="vu_login_btn">登录/注册</button>
        </template>
    </section>
    <section class="vu_order"> 
         <el-row>
            <el-col :span="24">
                <h6>我的订单</h6>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
             <i class="fa fa-file-text-o"></i>
            当前订单
          </el-col>
          <el-col :span="6">
             <i class="fa fa-file-text-o"></i>
            待付款
          </el-col>
          <el-col :span="6">
             <i class="fa fa-file-text-o"></i>
            已完成
          </el-col>
          <el-col :span="6">
            <i class="el-icon-edit"></i>
            待评价
          </el-col>
        </el-row>
    </section>
    <section class="vu_serve"> 
         <el-row>
            <el-col :span="24">
                <h6>我的服务</h6>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
             <i class="el-icon-location-outline"></i>
            收货地址
           </el-col>
          <el-col :span="6">
             <i class="fa fa-spin  fa-spinner"></i>
            我的足迹
           </el-col>
          <el-col :span="6">
            <i class="fa fa-star-o"></i>
            我的关注
           </el-col>
          <el-col :span="6">
             <i class="fa fa-edit"></i>
            服务评价
           </el-col>
          <el-col :span="6">
             <i class="el-icon-news"></i>
             优惠券
           </el-col>
          <el-col :span="6">
             <i class="fa fa-map-o"></i>
            1小时配送范围
           </el-col>
          <el-col :span="6">
            <i class="fa fa-gift"></i>
            推荐有礼
          </el-col>
           <el-col :span="6">
             <i class="fa fa-phone"></i>
            客服电话
          </el-col>
        </el-row>
    </section>
    <Foot></Foot>
</section>
</template>
<script>
import Foot from "../common/Foot.vue";
export default{
    components:{
        Foot
    }
}
</script>
<style scoped lang="scss">
@import "../../assets/css/common.scss";
.vu_info{
    height:110rem/$base;
    background-color:#d0362c;
}
.vu_login_btn{
    @include vu-wh(100rem/$base,40rem/$base);
    font-size:14rem/$base;
    color:#fff;
    background-color:#d0362c;
    border:1px solid #fff;
    border-radius:10px;
}
.vu_order{
    margin-bottom:10rem/$base;
    background-color:#fff;
    font-size:12rem/$base;
}
.vu_order .el-col-6{
    box-sizing:border-box;
    height:84rem/$base;
    text-align:center;
}
.vu_order i{
    display:block;
    margin:20rem/$base 0px 10rem/$base;
    font-size:25rem/$base;
}
.vu_order h6{
    padding-left:20rem/$base;
    font-weight:400;
    font-size:14rem/$base;
    line-height:45rem/$base;
    border-bottom:1px solid $bordercolor;
}
.vu_serve{
    font-size:12rem/$base;
}
.vu_serve .el-col-6{
    box-sizing:border-box;
    height:94rem/$base;   
    text-align:center;
    border-bottom:1px solid $bordercolor;
}
.vu_serve i{
    display:block;
    margin:14rem/$base 0 10rem/$base;
    font-size:30rem/$base;
    @include red;
}
.vu_serve h6{
    padding-left:20rem/$base;
    font-weight:400;
    font-size:14rem/$base;
    line-height:49rem/$base;
    border-bottom:1px solid $bordercolor;
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>


