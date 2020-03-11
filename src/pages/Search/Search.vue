<template>
    <div id="search">
        <TypeNav/>
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" v-show="category">{{category}}</li>
                        <li class="with-x" v-show="option.trademark">{{option.trademark}}<i @click="removeOption('trademark')">×</i></li>
                        <li class="with-x" v-for="(prop,index) in option.props" :key="prop">{{prop}}<i @click="removePorp(index)">×</i></li>
                    </ul>
                </div>
                <SearchSelector :setProps="setProps" :setTrademark="setTrademark"/>
                <!--details-->
                <div class="details">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li :class="{active:option.order.includes('1')}"  @click="setSort('hot')">
                                    <a>综合</a>
                                </li>
                                <li>
                                    <a href="#">销量</a>
                                </li>
                                <li>
                                    <a href="#">新品</a>
                                </li>
                                <li>
                                    <a href="#">评价</a>
                                </li>
                                <li :class="{active:option.order==='2:asc'}" @click="setSort('2:asc')">
                                    <a>价格⬆</a>
                                </li>
                                <li :class="{active:option.order==='2:desc'}" @click="setSort('2:desc')">
                                    <a>价格⬇</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <GoodList :goodsList="goodsList" />
                    <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="10"
                        layout="prev, pager, next, jumper"
                        :total="goodsList.length">
                    </el-pagination>
                    <!-- <div class="fr page">
                        <div class="sui-pagination pagination-large">
                            <ul>
                                <li class="prev disabled">
                                    <a href="#">«上一页</a>
                                </li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li class="dotted"><span>...</span></li>
                                <li class="next">
                                    <a href="#">下一页»</a>
                                </li>
                            </ul>
                            <div><span>共10页&nbsp;</span></div>
                        </div>
                    </div> -->
                </div>
                <!--hotsale-->
                <!-- <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4068.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> -->
            </div>
	    </div>
    </div>
</template>

<script>
import {Pagination} from 'element-ui'
import {mapGetters} from 'vuex'
import TypeNav from '../../components/TypeNav/TypeNav'
import SearchSelector from './SearchSelector/SearchSelector'
import GoodList from './GoodList/GoodList'
export default {
    name:"Search",
    data(){
        return {
            option:{
                order:"1:desc"
            },
            currentPage:1
        }
    },
    mounted(){
        this.option={...this.$route.query,props:[],order:"1:desc"};
        //设置事件总线,防止在Search页面再次点击搜索按钮无效
        this.$bus.$on('setKeyWord',this.setKeyWord)
        this.getList();
    },
    computed:{
        category(){
            return this.option.categoryName||this.option.keyword;
        },
        ...mapGetters(["goodsList"])
    },
    methods:{
        getList(){
            this.$store.dispatch('getList',this.option)
        },
        setKeyWord(keyword){
            this.option.keyword=keyword;
            this.getList();
        },
        setProps(propsId,newProps){
            let oldProps=this.option.props;
            let isRepeat=false;
            propsId=""+propsId;
            oldProps=oldProps.map((item)=>{
                const result=item.split(":")[0]===propsId;
                isRepeat=result?result:isRepeat;
                return result?newProps:item;
            })
            if(!isRepeat){
                this.option.props=[...oldProps,newProps];
            }else{
                this.option.props=oldProps
            }
            this.getList();
        },
        setTrademark(tmId,tmName){
            this.option={...this.option,trademark:`${tmId}:${tmName}`};
            this.getList();
        },
        removePorp(index){
            this.option.props.splice(index,1);
            this.getList();
        },
        removeOption(attr){
            if(attr==="category"){
                if(this.option.categoryName){
                    this.option.category1Id="";
                    this.option.category2Id="";
                    this.option.category3Id="";
                    this.option.categoryName="";
                }else{
                    this.option.keyword="";
                }
            }else{
                this.option[attr]="";
            }
            this.getList();
        },
        setSort(value){
            if(value==="hot"){
                if(this.option.order.includes('asc')){
                    this.option.order="1:desc"
                }else{
                    this.option.order="1:asc"
                }
            }else{
                this.option.order=value;
            }
            this.getList();
        },
        handleCurrentChange(currentPage){
            this.currentPage=currentPage;
        }
    },
    components:{
        TypeNav,
        SearchSelector,
        GoodList,
        [Pagination.name]:Pagination
    }
}
</script>

<style lang="stylus" scoped>
.main 
  margin 10px 0
a 
  color #666
em,
i 
  font-style normal
.sui-btn.btn-bordered.btn-danger:hover,
.sui-btn.btn-bordered.btn-danger:focus,
.operate .sui-btn.btn-bordered.btn-danger:active,
.operate .sui-btn.btn-bordered.btn-danger.active 
  border 1px solid #e1251b
  background-color #e1251b
.typeNav 
  border-bottom 2px solid #e1251b
.filter 
  background #f1f1f1

.sui-pagination ul > li > a:hover,
.sui-pagination ul > li > a:focus 
  border 1px solid #e1251b
  background #e1251b
.page 
  width 733px
  height 66px
  overflow hidden
.sui-pagination 
  div 
    float right
    width 241px
    display inline-block
    *display inline
    *zoom 1
  ul 
    display inline-block
    *display inline
    *zoom 1
    width 490px
    float left
    & > .active 
      & > a 
        background-color #fff
        color #e1251b
        border-color #fff
        cursor default
        &:hover 
          background #ccc
          border 1px solid #ddd
    & > li 
      display inline-block
      *display inline
      *zoom 1
      & > a 
        &:hover 
          background #ccc
          border 1px solid #ddd
.pagination-large ul > li > a,
.pagination-large ul > li > span 
  padding 9px 18px
  color #333
.sui-pagination ul > .dotted > span,
.sui-pagination ul > .dotted > a 
  border 0
.pagination-large 
  div 
    .page-num 
      padding 9px 18px
      & + . 
        padding 7px 16px
        color #666
        background-color #f6f6f6
        border 1px solid #ddd
.hot-sale 
  .hot-list 
    padding 15px
  .title 
    border-bottom 1px solid #ddd
    background #f1f1f1
    color #333
    margin 0
    padding 5px 0 5px 15px
.sort 
  position absolute
  display none
.el-pagination
    width 550px
    margin 0 auto
</style>