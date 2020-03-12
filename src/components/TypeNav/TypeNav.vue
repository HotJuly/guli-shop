<template>
    <div id="typeNav">
        <div class="py-container">
            <div class="yui3-g NavList">
                <div class="all-sorts-list" @mouseenter="isShow=true" @mouseleave="checkShow">
                    <div class="yui3-u Left all-sort">
                        <h4>全部商品分类</h4>
                    </div>
                    <div class="sort"  v-show="isShow&&baseCategoryList.length">
                        <div class="all-sort-list2">
                            <div class="item" @mouseenter="hover(index)" v-for="(item,index) in baseCategoryList" :key="item.categoryId">
                                <h3>
                                    <router-link :to="{path:'/search',query:{category1Id:item.categoryId,categoryName:item.categoryName}}">{{item.categoryName}}</router-link>
                                </h3>
                                <div class="item-list clearfix" v-show="index===currentIndex">
                                    <div class="subitem">
                                        <dl class="fore" v-for="category in item.categoryChild" :key="`${item.categoryId}+${category.categoryId}`">
                                            <dt>
                                                <router-link :to="{path:'/search',query:{category2Id:category.categoryId,categoryName:category.categoryName}}">{{category.categoryName}}</router-link>
                                            </dt>
                                            <dd>
                                                <em v-for="categoryItem in category.categoryChild" :key="`${item.categoryId}+${category.categoryId}+${categoryItem.categoryId}`">
                                                    <router-link :to="{path:'/search',query:{category3Id:categoryItem.categoryId,categoryName:categoryItem.categoryName}}">{{categoryItem.categoryName}}</router-link>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="yui3-u Center navArea">
                    <ul class="nav">
                        <li class="f-item">服装城</li>
                        <li class="f-item">美妆馆</li>
                        <li class="f-item">尚品汇超市</li>
                        <li class="f-item">全球购</li>
                        <li class="f-item">闪购</li>
                        <li class="f-item">团购</li>
                        <li class="f-item">有趣</li>
                        <li class="f-item">
                            <a href="seckill-index.html" target="_blank">秒杀</a>
                        </li>
                    </ul>
                </div>
                <div class="yui3-u Right"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import showList from './showList.js' 
export default {
    name:'TypeNav',
    data(){
        return {
            isShow:false,
            currentIndex:-1
            // baseCategoryList:[]
        }
    },
    mounted(){
        //通过showList文件控制侧边导航栏是否显示
        this.isShow=showList.includes(this.$route.path);
        this.$store.dispatch('getBaseCategoryList')
    },
    computed:{
        ...mapState({
            baseCategoryList:state=>state.Index.baseCategoryList
        })
    },
    methods:{
        hover(index){
            this.currentIndex=index;
        },
        checkShow(){
            this.currentIndex=-1;
            if(!showList.includes(this.$route.path)){
                this.isShow=false
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
#typeNav
    border-bottom: 2px solid #e1251b;
    .sort 
        display block
        float left
        .item-list
            display block
</style>