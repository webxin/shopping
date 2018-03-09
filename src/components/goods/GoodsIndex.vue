<template>
    <section>
        <header>
            <div class="adress">送至：<span>请选择地址</span></div>
            <div class="search_icon">
                <i class="el-icon-delete"></i>
                <router-link to="/preSearch"><input class="search" placeholder="请药名或症状" type="text" /></router-link>
            </div>
        </header>
        <section class="wrap">
            <SymptomZone></SymptomZone>
            <BrandZone></BrandZone>
            <el-row class="section_title">主题用药 <i class="el-icon-arrow-right"></i></el-row>
            <TopicDrug></TopicDrug>
        </section>
        <Foot></Foot>
   </section>
</template>
<script>
import Foot from "../common/Foot.vue";
import TopicDrug from "./Topic/TopicDrug.vue";
import BrandZone from "./Brand/BrandZone.vue";
import SymptomZone from "./Symptom/SymptomZone.vue";
export default{
    data(){
        return {
            seen:false
        }
    },
    components:{
        SymptomZone,
        TopicDrug,
        Foot,
        BrandZone
    }
}
</script>
<style  scoped lang="scss">
@import "../../assets/css/common.scss";
header{
    position:fixed;
    top:0;
    left:0;
    z-index:1;
    width:100%;
    height:60rem/$base;
    font-size:14rem/$base;
    text-align:center;
    background-color:#de4035;
}
.adress{
    line-height:20rem/$base;
    color:white;
}
.search{
    width:80%;
    font-size:14rem/$base;
    height:24rem/$base;
    text-align:center;
    border-radius:20px;
    border:none;
}
.section_title{
    padding:0 20rem/$base;
    font-size:14rem/$base;
    line-height:40rem/$base;
}
.section_title i{
    float:right;
    line-height:40rem/$base;
}
.search_icon{
    position:relative;
}
.search_icon i{
    position:absolute;
    left:32%;
    top:24%;
    color:#ccc;
}
.wrap{
    margin-top:70rem/$base;
    margin-bottom:50rem/$base;
    overflow:hidden;
}
</style>