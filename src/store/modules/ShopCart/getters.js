export default{
    total(state){
        const sumPrice=state.shopCartList.reduce((pre,good)=>{
            const {skuPrice,skuNum,isChecked}=good;
            return pre+(isChecked*1?good.skuPrice*skuNum:0);
        },0)
        return sumPrice;
    },
    selectedTotal(state){
        const sum=state.shopCartList.reduce((pre,good)=>{
            const {isChecked,skuNum}=good;
            return pre+(isChecked*1?skuNum:0);
        },0)
        return sum;
    },
    selectedArr(state){
        const arr=state.shopCartList.filter((good)=>{
            return good.isChecked;
        })
        return arr;
    }
}