import {reqBaseCategoryList,reqCarouselList,reqRecommendList} from '@/api'

const state = {
  msg: "Index",
  baseCategoryList: [],
  carouselList:[],
  recommendList:[]
}

const mutations = {
  RECEIVE_BASE_CATEGORY_LIST(state, list) {
    state.baseCategoryList = list.slice(0, 15)
  },
  RECEIVE_CAROUSEL_LIST(state, carouselList) {
    state.carouselList = carouselList
  },
  RECEIVE_RECOMMEND_LIST(state, recommendList) {
    state.recommendList = recommendList
  }
}

const actions = {
  //获取首页三级分类
  async getBaseCategoryList({ commit }) {
    const result = await reqBaseCategoryList();
    if (result.code === 200) {
      commit('RECEIVE_BASE_CATEGORY_LIST', result.data)
    }
  },
  async getCarouselList({ commit }){
    let result = await reqCarouselList();
    result=result.data;
    if (result.code === 200) {
      commit('RECEIVE_CAROUSEL_LIST', result.data)
    }
  },
  async getRecommendList({ commit }){
    let result = await reqRecommendList();
    result=result.data;
    if (result.code === 200) {
      commit('RECEIVE_RECOMMEND_LIST', result.data)
    }
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}