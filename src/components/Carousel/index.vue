<template>
    <div class="swiper-container" :ref="name" :style="{width:`${width}px`,height:`${height}px`}" >
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in carouselList" :key="carousel.id">
                <img :src="carousel.imgUrl"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <a class="carousel-control left">‹</a>
        <a class="carousel-control right">›</a>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    name:"Carousel",
    props:["width","height","carouselList","name"],
    mounted(){
        this.swiper=new Swiper(this.$refs[this.name],{
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.right',
                prevEl: '.left',
            },
        })
    },
    updated(){
        this.swiper.update();
    }
}
</script>

<style scoped>
/* 原有样式 */
.banerArea .sui-carousel {
  padding: 5px;
  margin-bottom: 0;
}

/* 新增样式 */
.left,.right{
    z-index:999
}
img{
    width:100%;
    height:100%;
    transition: all 400ms;
}
img:hover{
    transform-origin: center center;
    transform:scale(1.1);
}
</style>