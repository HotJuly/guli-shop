export default{
    userAddressList(state){
        return state.tradeInfo.userAddressList||[];
    },
    detailArrayList(state){
        return state.tradeInfo.detailArrayList||[];
    }
}