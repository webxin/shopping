<template>
   <section>
        <section class="vu_goback">
            <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
            <div class="vu_search_wrap">
                <input class="vu_search"  type="text" v-model="searchVal" v-on:blur="searchDrug(searchVal)"  v-on:focus="searchFocus=true"  placeholder="输入药名或症状"/>
                <router-link to="/" ><span v-if="searchFocus">取消</span></router-link>
            </div>
        </section>
        <section class="vu_hot_search">
            <h4>热门搜索</h4>
            <div class="vu_hot_search_result"><span v-for="item in searchHot" @click="searchDrug(item)">{{item}}</span></div>
        </section>
        <section class="vu_search_history" v-show="hassearchHis">
            <h4>搜索历史   <i @click="searchHistory=[];hassearchHis=false;" class="el-icon-delete"></i></h4>
            <div class="vu_hot_search_result"><span v-for="val in searchHistory" @click="searchDrug(val)">{{val}}</span></div>
        </section>
   </section>
</template>

<script>
export default{
    data(){
        return {
            searchVal:"",
            searchFocus:false,
            hassearchHis:true,
            searchHistory:["lisi"],
            searchHot:["感冒","发烧","咳嗽","胃疼"]
        }
    },
    methods:{
        searchDrug:function(val){
            this.searchHistory.unshift(val);
            this.$router.push({path:'/symptomSearch',query: { searchVal: val }});
        }
    }
}
</script>
<style  scoped lang="scss">
@import "../../../assets/css/common.scss";
.vu_search_wrap{
    font-size:12rem/$base;
    border-bottom:1px solid  $bordercolor;
}
.vu_search{
    width:60%;
    height:24rem/$base;
    padding-left:20rem/$base;
    background-color:$bordercolor;
    border:none;
    border-radius:20px;
}
.vu_hot_search{
    margin-top:40rem/$base;
    padding:16rem/$base 0 16rem/$base 10rem/$base;
}
.vu_hot_search h4,.vu_search_history h4{
    margin-bottom:10rem/$base;
}
.vu_hot_search_result>span{
    display:inline-block;
    margin-right:10rem/$base;
    padding:4rem/$base 10rem/$base;
    background-color:$bordercolor;
    border-radius:2px;
}
.vu_search_history{
    position:relative;
    padding-left:10rem/$base;
}
.vu_search_history .el-icon-delete{
    font-size:16rem/$base;
    position:absolute;
    right:20rem/$base;
    top:center;
}
</style>