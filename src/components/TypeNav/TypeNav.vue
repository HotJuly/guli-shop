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
                            <div class="item" @mouseenter="hover(index)" @click="toSearch" v-for="(item,index) in baseCategoryList" :key="item.categoryId">
                                <h3>
                                    <a href="javascript:;" :data-categoryName="item.categoryName" :data-category1Id="item.categoryId">{{item.categoryName}}</a>
                                </h3>
                                <div class="item-list clearfix" v-show="index===currentIndex">
                                    <div class="subitem">
                                        <dl class="fore" v-for="category in item.categoryChild" :key="`${item.categoryId}+${category.categoryId}`">
                                            <dt>
                                                <a href="javascript:;" :data-categoryName="category.categoryName" :data-category2Id="category.categoryId">{{category.categoryName}}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="categoryItem in category.categoryChild" :key="`${item.categoryId}+${category.categoryId}+${categoryItem.categoryId}`">
                                                    <a href="javascript:;" :data-categoryName="categoryItem.categoryName" :data-category3Id="categoryItem.categoryId">{{categoryItem.categoryName}}</a>
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
        },
        toSearch(event){
            const {dataset:{categoryname,category1id,category2id,category3id}}=event.target;
            if(categoryname){
                let query;
                if(category1id){
                    query={category1Id:category1id}
                }else if(category2id){
                    query={category2Id:category2id}
                }else if(category3id){
                    query={category3Id:category3id}
                }
                query.categoryName=categoryname;
                this.$router.push({path:"/search",query:{category3Id:category3id,categoryName:categoryname}});
            }
        }
    }
}
</script>

<style scoped>
#typeNav {
  border-bottom: 2px solid #e1251b;
}
#typeNav .sort {
  display: block;
  float: left;
}
#typeNav .sort .item-list {
  display: block;
}
</style>