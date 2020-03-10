<template>
    <div class="floor">
        <div class="py-container">
            <div class="title floors">
                <h3 class="fl">家用电器</h3>
                <div class="fr">
                    <ul class="sui-nav nav-tabs">
                        <li class="active">
                            <a href="#tab1" data-toggle="tab">热门</a>
                        </li>
                        <li>
                            <a href="#tab2" data-toggle="tab">大家电</a>
                        </li>
                        <li>
                            <a href="#tab3" data-toggle="tab">生活电器</a>
                        </li>
                        <li>
                            <a href="#tab4" data-toggle="tab">厨房电器</a>
                        </li>
                        <li>
                            <a href="#tab5" data-toggle="tab">应季电器</a>
                        </li>
                        <li>
                            <a href="#tab6" data-toggle="tab">空气/净水</a>
                        </li>
                        <li>
                            <a href="#tab7" data-toggle="tab">高端电器</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="clearfix  tab-content floor-content">
                <div id="tab1" class="tab-pane active">
                    <div class="yui3-g Floor-1">
                        <div class="yui3-u Left blockgary">
                            <ul class="jd-list">
                                <li>节能补贴</li>
                                <li>4K电视</li>
                                <li>空气净化器</li>
                                <li>IH电饭煲</li>
                                <li>滚筒洗衣机</li>
                                <li>电热水器</li>
                            </ul>
                            <img src="./img/floor-1-1.png" />
                        </div>
                        <div class="yui3-u row-330 floorBanner">
                            <div id="floorCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel slide">
                                <ol class="carousel-indicators">
                                    <li data-target="#floorCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#floorCarousel" data-slide-to="1"></li>
                                    <li data-target="#floorCarousel" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="active item">
                                        <img src="./img/floor-1-b01.png">
                                    </div>
                                    <div class="item">
                                        <img src="./img/floor-1-b02.png">
                                    </div>
                                    <div class="item">
                                        <img src="./img/floor-1-b03.png">
                                    </div>
                                </div>
                                <a href="#floorCarousel" data-slide="prev" class="carousel-control left">‹</a>
                                <a href="#floorCarousel" data-slide="next" class="carousel-control right">›</a>
                            </div>
                        </div>
                        <div class="yui3-u row-220 split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-2.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-3.png" />
                            </div>
                        </div>
                        <div class="yui3-u row-218 split">
                            <img src="./img/floor-1-4.png" />
                        </div>
                        <div class="yui3-u row-220 split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-5.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="./img/floor-1-6.png" />
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
export default {
    name:"IndexRecommend"
}
</script>

<style lang="stylus">

</style>