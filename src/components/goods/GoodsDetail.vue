<template>
  <section>
      <section class="vu_goback">
        <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
        商品详细
      </section>
      <div class="block vu_image">
        <el-carousel trigger="click" height="384px">
          <el-carousel-item v-for="item in 5" :key="item">
            {{ item }}
            <img src="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="vu_good_detail">
        <h2>商品是人类社会生产力发展到一定</h2>
        <div class="vu_good_dsize">10g*9袋/盒</div>
        <div class="vu_good_dprice">￥<span>10.50</span><span>Y14.00</span><span>一小时送达</span></div>
      </div>
      <section class="vu_pruchase_wrap">
         <span><i class="el-icon-star-off"></i></span><span><i class="fa fa-shopping-cart"></i><span class="vu_pruchasenum_cilcle">1</span></span><span>立即购买</span><span>加购物车</span> 
      </section>

  </section>
</template>
<script>
export default{
  data(){
    return {
    }
  }
}
</script>
<style  scoped lang="scss">
@import "../../assets/css/common.scss";
.fa-shopping-cart:before {
  content: "\f07a";
  font-size:20rem/$base;
}
.vu_goback{
  border-bottom:1px solid $bordercolor;
}
.vu_image{
  margin:41rem/$base 0 8rem/$base 0;
  border-bottom:1px solid  $bordercolor;
}
.vu_good_detail{
    padding:10rem/$base 24rem/$base 16rem/$base 14rem/$base; 
    border-bottom:10rem/$base solid $bordercolor;
}
.vu_good_detail h2{
  padding:0 0 8rem/$base 0;
  line-height:22rem/$base;
  @include titlecolor;
}
.vu_good_dsize{
  @include sizecolor;
  padding-bottom:20rem/$base;
}
.vu_good_dprice{
  @include red;
}
.vu_good_dprice span:nth-child(1){
  font-size:16rem/$base;
  font-weight:700;
  margin-right:6rem/$base;
}
.vu_good_dprice span:nth-child(2){
  @include sizecolor;
  font-size:12rem/$base;
  text-decoration:line-through;
  margin-right:6rem/$base;
}
.vu_car_num{
  position:absolute;
  left:0;
  top:0;
}
.vu_good_dprice span:nth-child(3){
  font-size:12rem/$base;
  border:1px solid #ff1c1c;
  border-radius:2px;
}
.vu_pruchase_wrap{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  line-height:49rem/$base;
  background-color:#fff;
  border-top:1px solid $bordercolor;
}
.vu_pruchase_wrap>span{
  display:inline-block;
  text-align:center;
}
.vu_pruchase_wrap>span:nth-child(1),
.vu_pruchase_wrap>span:nth-child(2){
  box-sizing:border-box;
  width:50rem/$base;
  border-right:1px solid $bordercolor;
}
.vu_pruchase_wrap>span:nth-child(2){
  position:relative;
}
.vu_pruchase_wrap>span:nth-child(3){
  width:140rem/$base;
}
.vu_pruchase_wrap>span:nth-child(4){
  width:135rem/$base;
  color:#fff;
  background-color:#f01c0a;
}
.vu_pruchasenum_cilcle{
  @include vu_red_cilcle(6rem/$base,6rem/$base);
}
</style>