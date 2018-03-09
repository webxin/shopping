import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store =new Vuex.Store({
    state:{
        symptom:[
        {image:"https://diycode.b0.upaiyun.com/photo/2017/fc7727985fd40e43f6b5bd6192dc23b7.jpeg",name:"感冒"},
        {image:"",name:"咳嗽"},
        {image:"",name:"口罩"},
        {image:"https://diycode.b0.upaiyun.com/photo/2017/fc7727985fd40e43f6b5bd6192dc23b7.jpeg",name:"嗓子疼"},
        {image:"",name:"滴眼夜"},
        {image:"",name:"清热解毒"},
        {image:"",name:"儿童用药"},
        {image:"",name:"消毒"},
        {image:"",name:"维生素"},
        {image:"",name:"膏药"},
        {image:"",name:"口腔溃疡"},
        {image:"",name:"发烧"},
        {image:"",name:"胃疼"},
        {image:"",name:"牙疼"},
        {image:"",name:"鼻炎"},
        {image:"",name:"拉肚子"},
        {image:"",name:"过敏"},
        {image:"",name:"晕车"}
        ],
        shopGoodId:[],
        buyquantiy:[],
        shopGood:[]
    },
    mutations:{
        addshop(state,id){
            state.shopGoodId.unshift(id);
        },
        //加入购物车的商品id
        shopidhistory(state,goodidHis){
            var goodidArr=JSON.parse(goodidHis);
            state.buyquantiy=goodidArr;
            for(var i=0;i<goodidArr.length;i++){
                state.shopGoodId.unshift(goodidArr[i].goodid); 
            }
        },
        //加入购物车商品信息
        shopcarinfo(state,obj){
            state.shopGood=JSON.parse(obj);
        }
    },
    actions:{
        addshop(context,idobj){
            return new Promise((resolve, reject)=>{
                Vue.http.post("/api/one",idobj).then((response) => {
                    resolve(response);
                })
            })
        },
        searchshopid(context,nameobj){
            return new Promise((resolve, reject)=>{
                Vue.http.get("/api/searchshopid?"+nameobj).then((response) => {
                    resolve(response);
                })
            })
        },
        shopcarinfo(context,nameobj){
            return new Promise((resolve, reject)=>{
                Vue.http.get("/api/shopcarinfo?"+nameobj).then((response) => {
                    resolve(response);
                })
            })
        }
           
    }
})
export default store;

