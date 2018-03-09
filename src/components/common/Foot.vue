<template>
    <footer class="foot">
    <el-row>
         <el-col :span="8"><router-link to="/"><i class="icon el-icon-arrow-up"></i><br />首页</router-link></el-col>
         <el-col :span="8"><div class="vu_pruchase_car"><router-link to="/shopcarIndex"><i class="fa fa-shopping-cart"></i><span class="vu_pruchasenum_circle">{{shopnum}}</span><br />购物车</router-link></div></el-col>
         <el-col :span="8"><router-link to="/personinfoIndex"><i class="fa fa-user-o"></i><br />我的</router-link></el-col>
    </el-row>
    </footer>
</template>
<script>
export default{
  data(){
    return{
    }
  },
  computed:{
    shopnum:function(){
      return this.$store.state.shopGoodId.length;
    }
  }
}
</script>
<style  scoped lang="scss">
@import "../../assets/css/common.scss";
$base:20;
.foot{
    position:fixed;
    left:0px;
    bottom:0px;
    width:100%;
    height:50rem/$base;
    font-size:10rem/$base;
    background-color:#fafafa;
    border-top:1px solid #e8e8e8;
    text-align:center;
}
i{
    display:inline-block;
    width:30rem/$base;
    font-size:24rem/$base;
    line-height:30rem/$base;
}
a{
    color:#7c7b7c;
}
.router-link-exact-active,.router-link-exact-active i{
    color:red;
}
.vu_pruchase_car{
  position:relative;
}
.vu_pruchasenum_circle{
  @include vu_red_cilcle(38rem/$base,0rem/$base);
}
.fa-user-o{
  font-size:20rem/$base;
}
</style>