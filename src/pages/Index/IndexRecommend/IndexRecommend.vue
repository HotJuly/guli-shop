<template>
  <div class="floor">
    <div class="py-container">
      <div class="title floors">
        <h3 class="fl">{{recommend.name}}</h3>
        <div class="fr">
          <ul class="sui-nav nav-tabs">
            <li :class="index===0?'active':''"  v-for="(item,index) in recommend.navList" :key="index">
              <a :href="item.url">{{item.text}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clearfix  tab-content floor-content">
        <div id="tab1" class="tab-pane active">
          <div class="yui3-g Floor-1">
            <div class="yui3-u Left blockgary">
              <ul class="jd-list">
                <li v-for="keyword in recommend.keywords" :key="keyword">{{keyword}}</li>
              </ul>
              <img :src="recommend.imgUrl" />
            </div>
            <div class="yui3-u row-330 floorBanner">
              <!-- <div
                id="floorCarousel"
                data-ride="carousel"
                data-interval="4000"
                class="sui-carousel slide"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#floorCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#floorCarousel" data-slide-to="1"></li>
                  <li data-target="#floorCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="active item">
                    <img src="./img/floor-1-b01.png" />
                  </div>
                  <div class="item">
                    <img src="./img/floor-1-b02.png" />
                  </div>
                  <div class="item">
                    <img src="./img/floor-1-b03.png" />
                  </div>
                </div>
                <a
                  href="#floorCarousel"
                  data-slide="prev"
                  class="carousel-control left"
                  >‹</a
                >
                <a
                  href="#floorCarousel"
                  data-slide="next"
                  class="carousel-control right"
                  >›</a
                >
              </div> -->
              <Carousel width="329" height="360" :carouselList="recommend.carouselList" :name="recommend.id" />
            </div>
            <div class="yui3-u row-220 split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="recommend.recommendList[0]"/>
              </div>
              <div class="floor-conver-pit">
                <img :src="recommend.recommendList[1]"/>
              </div>
            </div>
            <div class="yui3-u row-218 split">
              <img :src="recommend.bigImg" />
            </div>
            <div class="yui3-u row-220 split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="recommend.recommendList[2]"/>
              </div>
              <div class="floor-conver-pit">
                <img :src="recommend.recommendList[3]"/>
              </div>
            </div>
          </div>
        </div>
        <div id="tab2" class="tab-pane">
          <p>第二个</p>
        </div>
        <div id="tab3" class="tab-pane">
          <p>第三个</p>
        </div>
        <div id="tab4" class="tab-pane">
          <p>第4个</p>
        </div>
        <div id="tab5" class="tab-pane">
          <p>第5个</p>
        </div>
        <div id="tab6" class="tab-pane">
          <p>第6个</p>
        </div>
        <div id="tab7" class="tab-pane">
          <p>第7个</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'IndexRecommend',
  props:["recommend"],
  components:{
    Carousel
  }
};
</script>

<style scoped>
img:hover {
  transform-origin: center center;
  transform: scale(1.1);
  transition: all 600ms;
}

.py-container .title {
  overflow: hidden;
  margin-top: 15px;
}

.floors h3 {
  color: #c81623;
}
.floor .floor-content {
  border-top: 2px solid #c81623;
  border-bottom: 1px solid #e4e4e4;
}
.floors .fr ul li {
  margin-left: 0;
}
.floors .fr ul li a {
  padding: 0;
}
.floors .fr ul li a:after {
  content: "|";
  padding: 0 10px;
}
.floors .fr ul li:last-child a:after {
  content: "";
}
.floors .sui-nav.nav-tabs > .active > a {
  font-weight: 400;
  color: #e1251b;
}

ul.jd-list {
  padding: 15px 0;
  overflow: hidden;
}
ul.jd-list li {
  list-style-type: none;
  float: left;
  width: 40%;
  margin: 0 10px;
  border-bottom: 1px solid #e4e4e4;
  text-align: center;
  line-height: 26px;
}
.floors .sui-nav.nav-tabs > .active > a {
  border: 0;
  padding-top: 1px;
}
.floors .sui-nav.nav-tabs {
  border-bottom: 0;
}
.floors .fr .sui-nav {
  margin: 10px 0 0;
  display: inline-block;
}
</style>