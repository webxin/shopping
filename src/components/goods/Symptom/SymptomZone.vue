<template>
<section>
    <el-row class="show_type">
        <el-col :span="6"  v-for="(item,key) in symptomv"  :key="item.id">
           <router-link :to="{path:'/symptomSearch',query:{ searchVal:item.name}}">
             <img class="icon" v-bind:src="item.image"/>
             <div class="icon_desc">{{item.name}}</div>
          </router-link>
        </el-col>
        <el-col :span="6" >
           <router-link to="/symptomAll">
             <img class="icon"/>
             <div class="icon_desc">全部</div>
          </router-link>
        </el-col>
    </el-row>
</section>
</template>
<script>
export default{
    data(){
        return {
            
        }
    },
    computed:{
      symptomv:function(){
        return  this.$store.state.symptom.slice(0,11);
      }
    }
}
</script>
<style scoped lang="scss">
@import "../../../assets/css/common.scss";
$base:20;
@mixin  border6{
  border-bottom:6px solid #f6f6f6;
}
.show_type{
  @include border6;
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