<template>
<section>
    <section v-for="(item) in object" :key="item.lid" class="topic_wrap">
        <img v-bind:src="item.topic_image"  class="topic_big_image"/>
        <el-row>
          <el-col :span="12" v-for="(key) in item.pr" :key="key.smid" class="topic_info"> 
            <img v-bind:src="key.Topic_sm_image" class="topic_sm_image" />  
            <div class="topic_sm_name">{{key.name}}</div>
            <div class="topic_sm_size">{{key.size}}</div>
            <div class="topic_sm_price">￥{{key.price}} 
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
<style scoped lang="scss">
$base:20;
@mixin padding {
    padding:0 16rem/$base;
}
.topic_wrap{
    border-bottom:6px solid #f6f6f6;
    font-size:14rem/$base;
}
.topic_big_image{
    width:100%;
    height:180rem/$base;
}
.topic_info{
    width:186rem/$base;
    height:230rem/$base;
    border-bottom:1px solid #f6f6f6;
}
.topic_info:nth-child(odd){
    border-right:1px solid #f6f6f6;   
}
.topic_sm_image{
    margin:30rem/$base 0 20rem/$base 40rem/$base;
    width:100rem/$base;
    height:100rem/$base;
}
.topic_sm_name{
    color:#111111;
    line-height:20rem/$base;
    @include padding;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis; 
}
.topic_sm_size{
    font-size:12rem/$base;
    line-height:20rem/$base;
    color:#ccc;
    @include padding;
}
.topic_sm_price{
    @include padding;
    color:red;
}
</style>

