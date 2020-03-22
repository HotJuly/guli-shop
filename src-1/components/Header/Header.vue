<template>
    <div id="nav-bottom">
        <!--顶部-->
        <div class="nav-top">
            <div class="top">
                <div class="py-container">
                    <div class="shortcut">
                        <ul class="fl">
                            <li class="f-item">尚品汇欢迎您！</li>
                            <li class="f-item logout" v-if="userInfo.nickName" @click="logout">{{userInfo.nickName}}</li>
                            <li class="f-item" v-else>请
                                <router-link to="/login">登录</router-link>
                                <span>
                                    <router-link to="/login">免费注册</router-link>
                                </span>
                            </li>
                        </ul>
                        <div class="fr typelist">
                            <ul class="types">
                                <li class="f-item">
                                    <span>
                                        <router-link to="/myorder">我的订单</router-link>
                                    </span>
                                </li>

                                <li class="f-item">
                                    <span>
                                        <router-link to="/shopcart">我的购物车</router-link>
                                    </span>
                                </li>
                                <li class="f-item">
                                    <span>
                                        <a href="home.html" target="_blank">我的尚品汇</a>
                                    </span>
                                </li>
                                <li class="f-item">
                                    <span>尚品汇会员</span>
                                </li>
                                <li class="f-item">
                                    <span>企业采购</span>
                                </li>
                                <li class="f-item">
                                    <span>关注尚品汇</span>
                                </li>
                                <li class="f-item">
                                    <span>
                                        <a href="cooperation.html" target="_blank">合作招商</a>
                                    </span>
                                </li>
                                <li class="f-item">
                                    <span>
                                        <a href="shoplogin.html" target="_blank">商家后台</a>
                                    </span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <!--头部-->
            <div class="header">
                <div class="py-container">
                    <div class="yui3-g Logo">
                        <div class="yui3-u Left logoArea">
                            <router-link class="logo-bd" to="/"></router-link>
                        </div>
                        <div class="yui3-u Rit searchArea">
                            <div class="search">
                                <form action="" class="sui-form form-inline">
                                    <!--searchAutoComplete-->
                                    <div class="input-append">
                                        <input type="text" id="autocomplete" v-model="keyword" class="input-error input-xxlarge" />
                                        <button class="sui-btn btn-xlarge btn-danger" @click="handleClick">搜索</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:"Header",
    data(){
        return {
            keyword:""
        }
    },
    methods:{
        handleClick(){
            if(this.$route.path.includes('/search')){
                this.$bus.$emit('setKeyWord',this.keyword)
            }else{
                this.$router.push({path:"/search",query:{keyword:this.keyword}})
            }
        },
        logout(){
            this.$store.dispatch('userLogout');
        }
    },
    computed:{
        ...mapState({
            userInfo:state=>state.Login.userInfo
        })
    }
}
</script>

<style scoped>
.logout {
  cursor: pointer;
}
</style>