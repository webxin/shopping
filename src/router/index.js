import Vue from 'vue'
import Router from 'vue-router'
import GoodsIndex from '../components/goods/GoodsIndex.vue'
import GoodsDetail from '../components/goods/GoodsDetail.vue'
import BrandType from '../components/goods/Brand/BrandType.vue'
import SymptomSearch from '../components/goods/Symptom/SymptomSearch.vue'
import SymptomAll from '../components/goods/Symptom/SymptomAll.vue'
import PreSearch from '../components/goods/Symptom/PreSearch.vue'
import ShopcarIndex from '../components/shopcar/ShopcarIndex.vue'
import PersoninfoIndex from '../components/personinfo/PersoninfoIndex.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: GoodsIndex
    },
    {
      path: '/brandType',
      component: BrandType
    },
    {
      path: '/symptomSearch',
      component: SymptomSearch
    },
    {
      path: '/symptomAll',
      component: SymptomAll
    },
     {
      path: '/preSearch',
      component: PreSearch
    },
    {
      path: '/goodsDetail',
      component: GoodsDetail
    },
    {
      path: '/shopcarIndex',
      component: ShopcarIndex
    },

    {
      path: '/personinfoIndex',
      component: PersoninfoIndex
    }
  ]
})

