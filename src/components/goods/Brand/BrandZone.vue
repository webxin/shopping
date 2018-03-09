<template>
    <el-row class="show_type">
        <el-col :span="6"  v-for="(item) in symptom" :key="item.id" >
            <router-link :to="{path:'/brandType',query:{ id:item.id}}">
                 <img class="icon" v-bind:src="item.image"/>
                 <div class="icon_desc">{{item.name}}</div>
            </router-link>
        </el-col>
    </el-row>
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