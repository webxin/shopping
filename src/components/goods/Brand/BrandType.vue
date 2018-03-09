<template>
<section>
    <section class="vu_goback">
        <i class="el-icon-arrow-left"></i>
        品牌专区
    </section>
    <section v-for="(item) in object" :key="item.lid" class="vue_wrap">
        <img v-bind:src="item.topic_image"  class="vue_big_image"/>
        <el-row>
          <el-col :span="12" v-for="(key) in item.pr" :key="key.smid" class="vu_topic_info"> 
            <img v-bind:src="key.Topic_sm_image" class="vu_topic_image" />  
            <div class="vu_topic_name">{{key.name}}</div>
            <div class="vu_topic_size">{{key.size}}</div>
            <div class="vu_topic_price">￥{{key.price}} 
                <i class="el-icon-circle-plus-outline" style="float:right;"></i>
            </div>
          </el-col>
        </el-row>
    </section>
</section>
</template>
<script>
export default{
    data(){
        return{
            object:[
                {
                    lid:"1",
                    topic_image:"https://diycode.b0.upaiyun.com/photo/2017/fc7727985fd40e43f6b5bd6192dc23b7.jpeg",
                    pr:[
                        {smid:"11",Topic_sm_image:"https://diycode.b0.upaiyun.com/photo/2017/fc7727985fd40e43f6b5bd6192dc23b7.jpeg",name:"[三九]感冒灵感冒灵感冒灵感冒灵",size:"10g*9袋/盒",price:"25"},
                        {smid:"12",Topic_sm_image:"",name:"",size:"",price:""},
                        {smid:"13",Topic_sm_image:"",name:"",size:"",price:""},
                        {smid:"14",Topic_sm_image:"",name:"",size:"",price:""}
                    ]
                }
            ]
        }
    }
}
</script>
<style  scoped lang="scss">
@import "../../../assets/css/common.scss";
.vue_wrap{
    margin-top:40rem/$base;
    font-size:14rem/$base;
}
.vue_big_image{
    width:100%;
    height:90rem/$base;
    margin-bottom:20rem/$base;
}
.vu_topic_info{
    width:186rem/$base;
    height:230rem/$base;
    border-bottom:1px solid $bordercolor;
}
.vu_topic_info:nth-child(1),
.vu_topic_info:nth-child(2){
    border-top:1px solid $bordercolor;   
}
.vu_topic_info:nth-child(odd){
    border-right:2px solid $bordercolor;   
}
.vu_topic_image{
    margin:30rem/$base 0 20rem/$base 40rem/$base;
    width:100rem/$base;
    height:100rem/$base;
}
.vu_topic_name{
    color:#111111;
    line-height:20rem/$base;
    @include padding;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis; 
}
.vu_topic_size{
    font-size:12rem/$base;
    line-height:20rem/$base;
    color:#ccc;
    @include padding;
}
.vu_topic_price{
    @include padding;
    color:red;
}
</style>