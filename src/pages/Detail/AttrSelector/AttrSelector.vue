<template>
    <dl class="AttrSelector">
        <dt>
            <div class="fl title">
                <i>{{spuSaleAttr.saleAttrName}}</i>
            </div>
        </dt>
        <dd v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList" :key="spuSaleAttrValue.saleAttrName+spuSaleAttrValue.id">
            <a href="javascript:;">{{spuSaleAttrValue.saleAttrValueName}}</a>
        </dd>
    </dl>
</template>

<script>
export default {
    name:"AttrSelector",
    props:{
        spuSaleAttr:Object.Required
    }
}
</script>

<style lang="stylus">
</style>