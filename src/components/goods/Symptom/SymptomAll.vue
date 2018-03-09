<template>    
    <section>
        <section class="vu_goback">
            <i class="el-icon-arrow-left" @click="$router.back(-1)"></i>
            一键找药
            <router-link class="vu_presearch" to="/preSearch"><i class="el-icon-search"></i></router-link>
        </section>
        <el-row class="vu_show_type">
                <el-col :span="6"  v-for="(item) in symptom" :key="item.id" >
                     <router-link :to="{path:'/symptomSearch',query:{ searchVal:item.name}}">
                        <img class="icon" v-bind:src="item.image"/>
                        <div class="icon_desc">{{item.name}}</div>
                    </router-link>
                </el-col>
        </el-row>
    </section>
</template>
<script>
export default{
    data(){
        return {
            symptom:this.$store.state.symptom
        }
    }
}
</script>
<style  scoped lang="scss">
@import "../../../assets/css/common.scss";
.vu_goback{
    border-bottom:1px solid $bordercolor;
}
.vu_presearch{
    position:absolute;
    right:20rem/$base;
}
.vu_show_type{
    margin-top:60rem/$base;
}
.icon{
    margin-left:16rem/$base;
    width:60rem/$base;
    height:60rem/$base;  
}
.icon_desc{
    text-align:center;
    font-size:14rem/$base;
    line-height:20rem/$base;  
}
</style>