<template>
    <section>
        <section class="vu_goback">
            <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
            <div class="vu_search_wrap">
                <input class="vu_search"  type="text"  disabled/>
                <span>{{searchVal}}<router-link to="/preSearch" ><i class="el-icon-close"></i></router-link></span>
            </div>
            <el-row class="vu_option">
              <el-col :span="5">综合</el-col>
              <el-col :span="5">销量</el-col>
              <el-col :span="5">价格</el-col>
              <el-col :span="9">
                <router-link to="/shopcarIndex">
                    <i class="fa fa-shopping-cart"></i><span class="vu_car_num">{{ shopGoodId.length}}</span>
                </router-link>
             </el-col>
            </el-row>
        </section>
        <section class="vu_search_result">
            <div class="vu_search_single" v-for="item in searchresult">
                <router-link to="/goodsDetail">
                    <img :src="JSON.parse(item.image)[0]"  class="vu_result_img" />
                    <div class="vu_result_desc">
                        <div class="vu_result_title">
                            {{item.title}}
                        </div>
                        <div class="vu_result_size">规格:<span>{{item.size}}</span></div>
                        <div class="vu_result_price">
                            <span>￥{{item.price}}</span>
                            <span>一小时送达</span> 
                        </div>
                    </div>
                </router-link>
                <span class="vu_result_shopcar" v-on:click="addGood(item.id,item)"><i class="fa fa-shopping-cart"></i></span>
            </div>
            <div v-if="searchresult.length==0">
                抱歉，未找到相关产品
            </div>
        </section>
    </section>
</template>
<script>
import Vue from 'vue';
import "vue-resource";
export default{
    data(){
        return {
            searchresult:[]
        }
    },
    created:function(){
        var searchVal=this.searchVal;
        this.$http.get("/api/searchVal?searchVal="+searchVal).then(function(res){
            this.searchresult=JSON.parse(res.bodyText);
        });
    },
    methods:{
        addGood:function(id,obj){
            if(this.shopGoodId.indexOf(id)==-1){
                this.$store.dispatch("addshop",{"id":id,"obj":JSON.stringify(obj)}).then((obj)=>{
                    this.$store.commit("addshop",id);
                })
            }else{
                return false;
            }
        }
    },
    computed:{
        searchVal:function(){
            return this.$route.query.searchVal;
        },
        shopGoodId:function(){
            return this.$store.state.shopGoodId;
        }
    }
}

</script>
<style  scoped lang="scss">
@import "../../../assets/css/common.scss";
.fa-shopping-cart:before {
  content: "\f07a";
  font-size:20rem/$base;
}
.vu_option .fa-shopping-cart{
    padding:4px;
    background-color:$bordercolor;
    border-radius:16rem/$base;
}

.vu_search_wrap{
    border-bottom:1px solid  $bordercolor;
}
.vu_search{
    width:70%;
    height:24rem/$base;
    padding-left:20rem/$base;
    background-color:$bordercolor;
    border:none;
    border-radius:20px;
}
.vu_search_wrap span{
    position:absolute;
    left:18%;
    top:12rem/$base;
    width:74rem/$base;
    padding-left:10rem/$base;
    font-size:12rem/$base;
    line-height:20rem/$base;
    background-color:#fff;
    border-radius:10px;
}
.el-icon-close{
    padding-left:6px;
}
.vu_option{
    font-size:14rem/$base;
    line-height:49rem/$base;
    border-bottom:1px solid  $bordercolor;
}
.vu_search_result{
    margin-top:92rem/$base;
}
.vu_search_single{
    position:relative;
    box-sizing:border-box;
    padding:10rem/$base 0;
    height:112rem/$base;
    border-bottom:2px solid  $bordercolor;
}
.vu_result_img{
    float:left;
    margin-right:10rem/$base;
    width:100rem/$base;
    height:90rem/$base;
}
.vu_result_desc{
    float:left;
    width:250rem/$base;
    height:90rem/$base;
}
.vu_result_title{
    margin-bottom:6rem/$base;
    height:36rem/$base;
    font-size:14rem/$base;
    color:#292929;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
}
.vu_car_num{
    display:inline-block;
    vertical-align:top;
    width:18rem/$base;
    height:18rem/$base;
    color:#fff;
    font-size:12rem/$base;
    line-height:18rem/$base;
    background-color:#ff1c1c;
    border-radius:9rem/$base;
    margin-left:-10rem/$base;
}
.vu_result_size{
    margin-bottom:20rem/$base;
    height:12rem/$base;
    font-size:12rem/$base;
    color:#7b7b7b;   
}
.vu_result_price{
    font-size:12rem/$base;
    color:#ff0e0e;
}
.vu_result_price span:nth-child(1){
    margin-right:14rem/$base;
}
.vu_result_price span:nth-child(2){
    padding:2px;
    border:1px solid #ff0e0e;
}
.vu_result_shopcar{
    position:absolute;
    right:10rem/$base;
    bottom:10rem/$base;
}
.vu_result_shopcar i{
    @include red;
}
</style>