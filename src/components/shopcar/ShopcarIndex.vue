<template> 
<section> 
    <section class="vu_goback">
        购物车
    </section>
    <section class="vu_car_warp">
        <div class="vu_car_none" v-if="false">
            <i class="fa fa-shopping-cart"></i>
            <h5>购物车是空的</h5>
            <button type="button" class="vu_buygood_btn">选购药品</button>
        </div>
        <img src="../../assets/img/bg.jpg" />
        <div class="vu_car_good" >
            <section class="vu_search_result" >
                <template v-for="val in buyquantiy">
                <div class="vu_search_single"  v-for="(item,key) in searchresult"  v-if="val.goodid==item.id">
                    <span class="vu_search_checked"><input type="checkbox" v-model="selectGood" :value="{id:item.id,price:item.price,oriprice:item.oriprice}" />
                    </span>
                    <router-link to="/goodsDetail">
                        <img :src="JSON.parse(item.image)[0]"  class="vu_result_img"/>
                        <div class="vu_result_desc">
                            <div class="vu_result_title">
                                {{item.title}}
                            </div>
                            <div class="vu_result_size">规格:<span>{{item.size}}</span></div>
                            <div class="vu_result_price">
                                <span>￥{{item.price}}</span>
                                <span class="vu_price_ori" v-if="item.oriprice!=0">Y{{item.oriprice}}</span>
                            </div>
                        </div>
                    </router-link>
                    <span class="vu_result_shopcar"><el-input-number :min="0" size="mini" v-model="val.buyquantiy" ></el-input-number></span>
                </div>
                </template>
            </section>
            <div class="vu_count_wrap">
                <label><input type="checkbox" :checked="searchresult.length==selectGood.length" />全选</label>
                <div class="vu_count_pay">应付金额:<span>￥{{amountPay}}</span><br>
                    <span>总额:￥{{allPay}}</span><span v-if="reducePay!=0">-活动优惠:{{reducePay}}</span>
                </div>
                <div class="vu_go_count">去结算{{countNum}}</div>
            </div>
        </div>
    </section>
    <Foot></Foot>
</section>
</template>
<script>
import Foot from "../common/Foot.vue";
export default{
    data(){
        return {
           selectGood:[]
        }
    }, 
    components:{
        Foot
    },
    computed:{
        searchresult:function(){
            return this.$store.state.shopGood;
        },
        buyquantiy:function(){
            return this.$store.state.buyquantiy;
        },
        countNum:function(){
            var selectGoodarr=this.selectGood;
            var buyquantiyarr=this.buyquantiy;
            var count=0;
            for(var i=0;i<selectGoodarr.length;i++){                
                for(var j=0;j<buyquantiyarr.length;j++){
                    if(selectGoodarr[i].id==buyquantiyarr[j].goodid){
                        count+=buyquantiyarr[j].buyquantiy;
                    }
                }
            }
            return count;
        },
        amountPay:function(){
            var selectGoodarr=this.selectGood;
            var buyquantiyarr=this.buyquantiy;
            var count=0;
            for(var i=0;i<selectGoodarr.length;i++){                
                for(var j=0;j<buyquantiyarr.length;j++){
                    if(selectGoodarr[i].id==buyquantiyarr[j].goodid){
                        count+=selectGoodarr[i].price*buyquantiyarr[j].buyquantiy;
                    }
                }
            }
            return count;
        },
        allPay:function(){
            var selectGoodarr=this.selectGood;
            var buyquantiyarr=this.buyquantiy;
            var count=0;
            for(var i=0;i<selectGoodarr.length;i++){                
                for(var j=0;j<buyquantiyarr.length;j++){
                    if(selectGoodarr[i].id==buyquantiyarr[j].goodid){
                        count+=(selectGoodarr[i].oriprice==0?selectGoodarr[i].price:selectGoodarr[i].oriprice)*buyquantiyarr[j].buyquantiy;
                    }
                }
            }
            return count;
        },
        reducePay:function(){
            return this.allPay-this.amountPay;
        }
    },
    methods:{
    }
}
</script>
<style scoped lang="scss">
@import "../../assets/css/common.scss";
.vu_count_wrap{
    padding-left:20rem/$base;
    height:48rem/$base;
    position:fixed;
    bottom:51rem/$base;
    left:0;
    border-top:1px solid $bordercolor;
}
.vu_count_wrap label{
    float:left;
    padding-top:12rem/$base;
    width:62rem/$base;
}
.vu_count_pay{
    float:left;
    @include vu_wh(206rem/$base,47rem/$base);
}
.vu_count_pay span:nth-child(1){
    line-height:30rem/$base;
    font-weight:700;
    @include red; 
}
.vu_count_pay>span:nth-child(3){
   
    font-size:12rem/$base;
}
.vu_count_pay>span:nth-child(4){
    @include red;
    font-size:12rem/$base;
}


.vu_go_count{ 
    float:left;
    @include vu_wh(87rem/$base,47rem/$base);
    text-align:center;
    line-height:47rem/$base;
    color:#fff;
    background-color:#ff1c1c;
}
.el-input-number--mini{
    width:90rem/$base;
}
.vu_car_warp{
    margin-top:40rem/$base;
}
.fa-shopping-cart:before{
    color:#bdbdbd;
    font-size:100rem/$base;
}
.fa-shopping-cart{
    margin:50rem/$base 0 40rem/$base 0;
}
.vu_car_none{
    color:#bdbdbd;
    text-align:center;
}
.vu_buygood_btn{
    margin-top:32rem/$base;
    @include vu_wh(150rem/$base,40rem/$base);
    background-color:#ff1c1c;
    color:#fff;
    font-weight:700;
}
.vu_search_single{
    position:relative;
    box-sizing:border-box;
    padding:16rem/$base;
    height:120rem/$base;
    border-bottom:2px solid  $bordercolor;
}
.vu_search_checked{
    float:left;
    margin:14rem/$base 12rem/$base 0 0;
}
.vu_result_img{
    float:left;
    vertical-align:middle;
    margin-right:10rem/$base;
    width:80rem/$base;
    height:80rem/$base;
}
.vu_result_desc{
    float:left;
    @include vu_wh(220rem/$base,90rem/$base);
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
}
.vu_result_price span:nth-child(1){
    margin-right:14rem/$base;
    color:#ff0e0e;
}
.vu_price_ori{
    text-decoration:line-through;
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