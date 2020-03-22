import Mock from 'mockjs'
import datas from './datas'
import recommendList from './recommendList'

Mock.mock('/mock/getCarouselList',{
    code:200,
    data:datas
})
Mock.mock('/mock/getRecommendList',{
    code:200,
    data:recommendList
})
