<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(imgUrl,index) in smallImgArr" :key="imgUrl+index">
              <img :src="imgUrl" :class="currentIndex===index?'active':''" @click="changeIndex(index)">
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    name:"Thumb",
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      smallImgArr:Array
    },
    mounted(){
        this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        // spaceBetween: 30,
        slidesPerGroup: 2,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        });
    },
    methods:{
      changeIndex(index){
        this.currentIndex=index;
        this.$bus.$emit('changeThumbIndex',index)
      }
    }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  height 56px
  width 412px
  box-sizing border-box
  padding 0 12px
  .swiper-slide
    width 56px
    height 56px
    img 
      width 100%
      height 100%
      border 1px solid #ccc
      padding 2px
      width 50px
      height 50px
      display block
      &.active
        border 2px solid #f60
        padding 1px
      &:hover
        border 2px solid #f60
        padding 1px
  .swiper-button-next
    left auto
    right 0
  .swiper-button-prev
    left 0
    right auto
  .swiper-button-next,.swiper-button-prev
    box-sizing border-box
    width 12px
    height 56px
    background rgb(235, 235, 235)
    border 1px solid rgb(204, 204, 204)
    top 0
    margin-top 0
    &::after
      font-size 12px
</style>