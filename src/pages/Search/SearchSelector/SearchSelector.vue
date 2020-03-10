<template>
    <!--selector-->
    <div class="clearfix selector">
        <div class="type-wrap logo">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
                <ul class="logo-list">
                    <li class="trademark" @click="changeTrademark(trademark.tmId,trademark.tmName)" v-for="trademark in trademarkList" :key="trademark.tmName+trademark.tmId">{{trademark.tmName}}</li>
                    <!-- <li><img src="./img/_/phone06.png" /></li> -->
                </ul>
            </div>
            <div class="ext">
                <a href="javascript:void(0);" class="sui-btn">多选</a>
                <a href="javascript:void(0);">更多</a>
            </div>
        </div>
        <div class="type-wrap" v-for="attrs in attrsList" :key="`${attrs.attrName}-${attrs.attrId}`">
            <div class="fl key">{{attrs.attrName}}</div>
            <div class="fl value">
                <ul class="type-list">
                    <li v-for="attr in attrs.attrValueList" :key="attr">
                        <a @click="addOption(attrs.attrId,attr,attrs.attrName)">{{attr}}</a>
                    </li>
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>
        <div class="type-wrap">
            <div class="fl key">更多筛选项</div>
            <div class="fl value">
                <ul class="type-list">
                    <li>
                        <a>特点</a>
                    </li>
                    <li>
                        <a>系统</a>
                    </li>
                    <li>
                        <a>手机内存 </a>
                    </li>
                    <li>
                        <a>单卡双卡</a>
                    </li>
                    <li>
                        <a>其他</a>
                    </li>
                </ul>
            </div>
            <div class="fl ext">
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"SearchSelector",
    props:{
        setProps:Function.Required,
        setTrademark:Function.Required
    },
    computed:{
        ...mapGetters(['trademarkList','attrsList'])
    },
    methods:{
        addOption(propsId,select,propsName){
            const newProps=`${propsId}:${select}:${propsName}`;
            this.setProps(propsId,newProps);
        },
        changeTrademark(tmId,tmName){
            this.setTrademark(tmId,tmName);
        }
    }
}
</script>

<style lang="stylus">
.trademark
    cursor pointer
</style>