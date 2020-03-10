export default{
    skuImageList(state){
        const skuInfo=state.detailInfo.skuInfo;
        return skuInfo?skuInfo.skuImageList:[];
    },
    skuInfo(state){
        const skuInfo=state.detailInfo.skuInfo;
        return skuInfo?skuInfo:{};
    },
    spuSaleAttrList(state){
        const spuSaleAttrList=state.detailInfo.spuSaleAttrList;
        return spuSaleAttrList?spuSaleAttrList:{};
    }
}