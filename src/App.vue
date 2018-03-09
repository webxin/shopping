<template>
    <section>
        <router-view></router-view>
   </section>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    created:function(){
        this.$store.dispatch("searchshopid","name=zhangsna").then((obj)=>{
            this.$store.commit("shopidhistory",obj.bodyText);
            this.$store.dispatch("shopcarinfo","goodId="+this.shopGoodId).then((objone)=>{
                this.$store.commit("shopcarinfo",objone.bodyText);
            });

        });
    },
    computed:{
        shopGoodId:function(){
            return this.$store.state.shopGoodId;
        }
    }
}

</script>
<style>
</style>
