<template>
    <div id="detail">
        <TypeNav/>
        <div class="py-container">
            <div id="item">
                <div class="crumb-wrap">
                    <ul class="sui-breadcrumb">
                        <li>
                            <a href="#">手机、数码、通讯</a>
                        </li>
                        <li>
                            <a href="#">手机</a>
                        </li>
                        <li>
                            <a href="#">Apple苹果</a>
                        </li>
                        <li class="active">iphone 6S系类</li>
                    </ul>
                </div>
                <!--product-info-->
                <div class="product-info">
                    <div class="fl preview-wrap">
                        <!--放大镜效果-->
                        <div class="zoom">
                            <!--默认第一个预览-->
                            <div id="preview" class="spec-preview">
                                <span class="jqzoom">
                                    <img jqimg="./img/_/b1.png" :src="skuInfo.skuDefaultImg" />
                                </span>
                            </div>
                            <!--下方的缩略图-->
                            <div class="spec-scroll">
                                <a class="prev">&lt;</a>
                                <!--左右按钮-->
                                <div class="items">
                                    <ul>
                                        <li v-for="skuImage in skuImageList" :key="skuImage.id">
                                            <img :src="skuImage.imgUrl" :bimg="skuImage.imgUrl" />
                                        </li>
                                    </ul>
                                </div>
                                <a class="next">&gt;</a>
                            </div>
                        </div>
                    </div>
                    <div class="fr itemInfo-wrap" id="app">
                        <div class="sku-name">
                            <h4>{{skuInfo.skuName}}</h4>
                        </div>
                        <div class="news">
                            <span>推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</span>
                        </div>
                        <div class="summary">
                            <div class="summary-wrap">
                                <div class="fl title">
                                    <i>价　　格</i>
                                </div>
                                <div class="fl price">
                                    <i>¥</i>
                                    <em>{{skuInfo.price}}</em>
                                    <span>降价通知</span>
                                </div>
                                <div class="fr remark">
                                    <i>累计评价</i>
                                    <em>{{goodsdetail.remark}}</em>
                                </div>
                            </div>
                            <div class="summary-wrap">
                                <div class="fl title">
                                    <i>促　　销</i>
                                </div>
                                <div class="fl fix-width">
                                    <i class="red-bg">加价购</i>
                                    <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                                </div>
                            </div>
                        </div>
                        <div class="support">
                            <div class="summary-wrap">
                                <div class="fl title">
                                    <i>支　　持</i>
                                </div>
                                <div class="fl fix-width">
                                    <em class="t-gray">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</em>
                                </div>
                            </div>
                            <div class="summary-wrap">
                                <div class="fl title">
                                    <i>配 送 至</i>
                                </div>
                                <div class="fl fix-width">
                                    <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix choose">
                            <div id="specification" class="summary-wrap clearfix">
                                <AttrSelector :spuSaleAttr="spuSaleAttr" v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.saleAttrName"/>
                            </div>

                            <div class="summary-wrap">
                                <div class="fl title">
                                    <div class="control-group">
                                        <div class="controls">
                                            <input type="text" v-model="skuNum" class="itxt" />
                                            <a href="javascript:void(0)" @click="skuNum++" class="increment plus">+</a>
                                            <a href="javascript:void(0)" @click="skuNum<=1?skuNum=1:skuNum--" class="increment mins">-</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="fl">
                                    <ul class="btn-choose unstyled">
                                        <li @click="addToCart">
                                            <a href="javascript:void(0)" class="sui-btn btn-danger addshopcar">加入购物车</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--product-detail-->
                <div class="clearfix product-detail">
                    <div class="fl aside">
                        <ul class="sui-nav nav-tabs tab-wraped">
                            <li class="active">
                                <a href="#index" data-toggle="tab">
                                    <span>相关分类</span>
                                </a>
                            </li>
                            <li>
                                <a href="#profile" data-toggle="tab">
                                    <span>推荐品牌</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content tab-wraped">
                            <div id="index" class="tab-pane active">
                                <ul class="part-list unstyled">
                                    <li>手机</li>
                                    <li>手机壳</li>
                                    <li>内存卡</li>
                                    <li>Iphone配件</li>
                                    <li>贴膜</li>
                                    <li>手机耳机</li>
                                    <li>移动电源</li>
                                    <li>平板电脑</li>
                                </ul>
                                <ul class="goods-list unstyled">
                                    <li>
                                        <div class="list-wrap">
                                            <div class="p-img">
                                                <img src="./img/_/part01.png" />
                                            </div>
                                            <div class="attr">
                                                <em>Apple苹果iPhone 6s (A1699)</em>
                                            </div>
                                            <div class="price">
                                                <strong>
                                                    <em>¥</em>
                                                    <i>6088.00</i>
                                                </strong>
                                            </div>
                                            <div class="operate">
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list-wrap">
                                            <div class="p-img">
                                                <img src="./img/_/part02.png" />
                                            </div>
                                            <div class="attr">
                                                <em>Apple苹果iPhone 6s (A1699)</em>
                                            </div>
                                            <div class="price">
                                                <strong>
                                                    <em>¥</em>
                                                    <i>6088.00</i>
                                                </strong>
                                            </div>
                                            <div class="operate">
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list-wrap">
                                            <div class="p-img">
                                                <img src="./img/_/part03.png" />
                                            </div>
                                            <div class="attr">
                                                <em>Apple苹果iPhone 6s (A1699)</em>
                                            </div>
                                            <div class="price">
                                                <strong>
                                                    <em>¥</em>
                                                    <i>6088.00</i>
                                                </strong>
                                            </div>
                                            <div class="operate">
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                                            </div>
                                        </div>
                                        <div class="list-wrap">
                                            <div class="p-img">
                                                <img src="./img/_/part02.png" />
                                            </div>
                                            <div class="attr">
                                                <em>Apple苹果iPhone 6s (A1699)</em>
                                            </div>
                                            <div class="price">
                                                <strong>
                                                    <em>¥</em>
                                                    <i>6088.00</i>
                                                </strong>
                                            </div>
                                            <div class="operate">
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                                            </div>
                                        </div>
                                        <div class="list-wrap">
                                            <div class="p-img">
                                                <img src="./img/_/part03.png" />
                                            </div>
                                            <div class="attr">
                                                <em>Apple苹果iPhone 6s (A1699)</em>
                                            </div>
                                            <div class="price">
                                                <strong>
                                                    <em>¥</em>
                                                    <i>6088.00</i>
                                                </strong>
                                            </div>
                                            <div class="operate">
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id="profile" class="tab-pane">
                                <p>推荐品牌</p>
                            </div>
                        </div>
                    </div>
                    <div class="fr detail">
                        <div class="clearfix fitting">
                            <h4 class="kt">选择搭配</h4>
                            <div class="good-suits">
                                <div class="fl master">
                                    <div class="list-wrap">
                                        <div class="p-img">
                                            <img src="./img/_/l-m01.png" />
                                        </div>
                                        <em>￥5299</em>
                                        <i>+</i>
                                    </div>
                                </div>
                                <div class="fl suits">
                                    <ul class="suit-list">
                                        <li class="">
                                            <div id="">
                                                <img src="./img/_/dp01.png" />
                                            </div>
                                            <i>Feless费勒斯VR</i>
                                            <label data-toggle="checkbox" class="checkbox-pretty">
                                                <input type="checkbox">
                                                <span>39</span>
                                            </label>
                                        </li>
                                        <li class="">
                                            <div id="">
                                                <img src="./img/_/dp02.png" /> </div>
                                            <i>Feless费勒斯VR</i>
                                            <label data-toggle="checkbox" class="checkbox-pretty">
                                                <input type="checkbox">
                                                <span>50</span>
                                            </label>
                                        </li>
                                        <li class="">
                                            <div id="">
                                                <img src="./img/_/dp03.png" />
                                            </div>
                                            <i>Feless费勒斯VR</i>
                                            <label data-toggle="checkbox" class="checkbox-pretty">
                                                <input type="checkbox">
                                                <span>59</span>
                                            </label>
                                        </li>
                                        <li class="">
                                            <div id="">
                                                <img src="./img/_/dp04.png" />
                                            </div>
                                            <i>Feless费勒斯VR</i>
                                            <label data-toggle="checkbox" class="checkbox-pretty">
                                                <input type="checkbox">
                                                <span>99</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="fr result">
                                    <div class="num">已选购0件商品</div>
                                    <div class="price-tit">
                                        <strong>套餐价</strong>
                                    </div>
                                    <div class="price">￥5299</div>
                                    <button class="sui-btn  btn-danger addshopcar">加入购物车</button>
                                </div>
                            </div>
                        </div>
                        <div class="tab-main intro">
                            <ul class="sui-nav nav-tabs tab-wraped">
                                <li class="active">
                                    <a href="#one" data-toggle="tab">
                                        <span>商品介绍</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#two" data-toggle="tab">
                                        <span>规格与包装</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#three" data-toggle="tab">
                                        <span>售后保障</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#four" data-toggle="tab">
                                        <span>商品评价</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#five" data-toggle="tab">
                                        <span>手机社区</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                            <div class="tab-content tab-wraped">
                                <div id="one" class="tab-pane active">
                                    <ul class="goods-intro unstyled">
                                        <li>分辨率：1920*1080(FHD)</li>
                                        <li>后置摄像头：1200万像素</li>
                                        <li>前置摄像头：500万像素</li>
                                        <li>核 数：其他</li>
                                        <li>频 率：以官网信息为准</li>
                                        <li>品牌： Apple</li>
                                        <li>商品名称：APPLEiPhone 6s Plus</li>
                                        <li>商品编号：1861098</li>
                                        <li>商品毛重：0.51kg</li>
                                        <li>商品产地：中国大陆</li>
                                        <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                                        <li>系统：苹果（IOS）</li>
                                        <li>像素：1000-1600万</li>
                                        <li>机身内存：64GB</li>
                                    </ul>
                                    <div class="intro-detail">
                                        <img src="./img/_/intro01.png" />
                                        <img src="./img/_/intro02.png" />
                                        <img src="./img/_/intro03.png" />
                                    </div>
                                </div>
                                <div id="two" class="tab-pane">
                                    <p>规格与包装</p>
                                </div>
                                <div id="three" class="tab-pane">
                                    <p>售后保障</p>
                                </div>
                                <div id="four" class="tab-pane">
                                    <div class="comment">
                                        <div class="com-tit">商品评价</div>
                                        <div class="com-percent">
                                            <p>好评度
                                                <span class="percent">96%</span>
                                            </p>
                                        </div>
                                        <div class="com-tab-type">
                                            <ul class="type">
                                                <li class="current">
                                                    <a href="javascript:;">全部评价(123456)</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">晒图(500)</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">追评(500)</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">好评(500)</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">中评(500)</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">差评(500)</a>
                                                </li>
                                            </ul>
                                            <div class="content">
                                                <div class="com-item">
                                                    <div class="user-column">
                                                        <div class="username">
                                                            <img src="./img/_/photo.jpg" />用户****1</div>
                                                        <div class="usernum">品享值258698</div>
                                                    </div>
                                                    <div class="user-info">
                                                        <div class="stars star4"></div>
                                                        <p>手机还不错，可以的可以的</p>
                                                        <div class="guige">
                                                            <ul class="mini">
                                                                <li>玫瑰金</li>
                                                                <li>标配版</li>
                                                                <li>2017-11-02 13:23</li>
                                                            </ul>
                                                            <div class="operate">
                                                                <span id="collect">
                                                                    <i class="sui-icon icon-tb-like"></i> 325</span>
                                                                <span id="comment">
                                                                    <i class="sui-icon icon-tb-wang"></i> 256</span>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <div class="reply">
                                                                <p><span class="name">商家名称官方旗舰店</span>回复：</p>
                                                                <div>亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉亲爱的用户，非常抱歉</div>
                                                                <p class="time">2017-11-13</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="com-item">
                                                    <div class="user-column">
                                                        <div class="username">
                                                            <img src="./img/_/photo.jpg" />用户****1</div>
                                                        <div class="usernum">品享值258698</div>
                                                    </div>
                                                    <div class="user-info">
                                                        <div class="stars star4"></div>
                                                        <p>手机还不错，可以的可以的</p>
                                                        <div class="guige">
                                                            <ul class="mini">
                                                                <li>玫瑰金</li>
                                                                <li>标配版</li>
                                                                <li>2017-11-02 13:23</li>
                                                            </ul>
                                                            <div class="operate">
                                                                <span id="collect">
                                                                    <i class="sui-icon icon-tb-like"></i> 325</span>
                                                                <span id="comment">
                                                                    <i class="sui-icon icon-tb-wang"></i> 256</span>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="com-item">
                                                    <div class="user-column">
                                                        <div class="username">
                                                            <img src="./img/_/photo.jpg" />用户****1</div>
                                                        <div class="usernum">品享值258698</div>
                                                    </div>
                                                    <div class="user-info">
                                                        <div class="stars star4"></div>
                                                        <p>手机还不错，可以的可以的</p>
                                                        <div class="guige">
                                                            <ul class="mini">
                                                                <li>玫瑰金</li>
                                                                <li>标配版</li>
                                                                <li>2017-11-02 13:23</li>
                                                            </ul>
                                                            <div class="operate">
                                                                <span id="collect">
                                                                    <i class="sui-icon icon-tb-like"></i> 325</span>
                                                                <span id="comment">
                                                                    <i class="sui-icon icon-tb-wang"></i> 256</span>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="com-item">
                                                    <div class="user-column">
                                                        <div class="username">
                                                            <img src="./img/_/photo.jpg" />用户****1</div>
                                                        <div class="usernum">品享值258698</div>
                                                    </div>
                                                    <div class="user-info">
                                                        <div class="stars star4"></div>
                                                        <p>手机还不错，可以的可以的</p>
                                                        <div class="guige">
                                                            <ul class="mini">
                                                                <li>玫瑰金</li>
                                                                <li>标配版</li>
                                                                <li>2017-11-02 13:23</li>
                                                            </ul>
                                                            <div class="operate">
                                                                <span id="collect">
                                                                    <i class="sui-icon icon-tb-like"></i> 325</span>
                                                                <span id="comment">
                                                                    <i class="sui-icon icon-tb-wang"></i> 256</span>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="com-item">
                                                    <div class="user-column">
                                                        <div class="username">
                                                            <img src="./img/_/photo.jpg" />用户****1</div>
                                                        <div class="usernum">品享值258698</div>
                                                    </div>
                                                    <div class="user-info">
                                                        <div class="stars star4"></div>
                                                        <p>手机还不错，可以的可以的</p>
                                                        <div class="guige">
                                                            <ul class="mini">
                                                                <li>玫瑰金</li>
                                                                <li>标配版</li>
                                                                <li>2017-11-02 13:23</li>
                                                            </ul>
                                                            <div class="operate">
                                                                <span id="collect">
                                                                    <i class="sui-icon icon-tb-like"></i> 325</span>
                                                                <span id="comment">
                                                                    <i class="sui-icon icon-tb-wang"></i> 256</span>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="five" class="tab-pane">
                                    <p>手机社区</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--like-->
                <div class="clearfix"></div>
                <div class="like">
                    <h4 class="kt">猜你喜欢</h4>
                    <div class="like-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-6">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/itemlike01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>3699.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有6人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-6">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/itemlike02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s/6s Plus 16G 64G 128G</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4388.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-6">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/itemlike03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-6">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/itemlike04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-6">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/itemlike05.png" />
                                    </div>
                                    <div class="attr">
                                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-6">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./img/_/itemlike06.png" />
                                    </div>
                                    <div class="attr">
                                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import TypeNav from '../../components/TypeNav/TypeNav'
import AttrSelector from './AttrSelector/AttrSelector'
export default {
    name:"Detail",
    data() {
        return {
            goodsdetail: {
                name: 'Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机',
                price: '5299',
                remark:'62344',
                color: ['金色','银色','黑色'],
                size: ['16G','64G','128G'],
                version: ['公开版', '移动版'],
                buytype: ['官方标配', '移动优惠版','电信优惠版'],
                other:['保护套装','充电套装']

            },
            skuNum:1
        }
    },
    computed:{
        ...mapGetters(['skuImageList','skuInfo','spuSaleAttrList']),
        // ...mapState({
        //     skuInfo:state=>state.Detail.skuInfo,
        //     spuSaleAttrList:state=>state.Detail.spuSaleAttrList,
        // }),
        skuId(){return this.$route.query.skuId}
    },
    mounted(){
        this.$store.dispatch('getDetailInfo',this.skuId)
    },
    methods:{
        addToCart(){
            const {skuId,skuNum}=this;
            this.$store.dispatch('addToCart',{skuId,skuNum,cb:()=>this.$router.push('/addcartsuccess')});
        }
    },
    components:{
        TypeNav,
        AttrSelector
    }
}
</script>

<style lang="stylus" scoped>
a 
  color #666
.btn-danger 
  border-radius 0
  background-color #e1251b
  border 1px solid #e1251b
.btn-danger:hover,
.btn-danger:focus .btn-danger:active,
.btn-danger.active 
  border 1px solid #e1251b
  background-color #e1251b
.typeNav 
  border-bottom 2px solid #e1251b
#item 
  margin 15px 0
  font-family "微软雅黑"
.preview-wrap 
  width 400px
.itemInfo-wrap 
  width 700px
  font-family "宋体"
.aside 
  width 210px
.detail 
  width 980px
em 
  font-style normal
.sui-breadcrumb 
  padding 9px 15px 0 0
  margin 0 0 9px
.product-info 
  overflow hidden
  margin 5px 0 15px
.summary-wrap 
  overflow hidden
  line-height 28px
  margin-top 10px
  .price 
    color #c81623
    em 
      font-size 24px
      font-weight 700
    i 
      font-size 16px
    span 
      font-size 12px
  dl 
    overflow hidden
    a 
      color #666
      line-height 24px
      padding 2px 14px
      margin-right 5px
      display block
      float left
      position relative
      outline 0
      border-top 1px solid #eee
      border-right 1px solid #bbb
      border-bottom 1px solid #bbb
      border-left 1px solid #eee
      background-color #fff
      text-decoration none
  .selected 
    border 1px solid #77b72c
    span 
      display block
  .locked 
    color #d6d6d6
    cursor not-allowed
    border-color #bbb
    border-style dotted
  a 
    span 
      width 13px
      height 13px
      display none
      position absolute
      right 0
      _right -1px
      bottom 0
      _bottom -1px
      overflow hidden
      background url(./img/choosed.png) no-repeat
.product-detail 
  margin 30px 0
.red-bg 
  background #b61d1d
  padding 3px
  color #fff
  background #c81623
  color #fff
  padding 3px
.sku-name 
  h4 
    font-weight 700
.news 
  color #e12228
.summary 
  background #fee9eb
  padding 7px
  margin 13px 0
.support 
  border-bottom 1px solid #ededed
  padding-bottom 5px
.title 
  margin-right 15px
.controls 
  width 48px
  position relative
  a 
    text-decoration none
  .itxt 
    display block
    width 38px
    height 34px
    line-height 42px
    border 1px solid #ddd
    text-align center
    color #555
    float left
    border-right 0
  .plus 
    display block
    width 15px
    text-align center
    height 17px
    line-height 17px
    overflow hidden
    background #f1f1f1
    color #666
    position absolute
    right -8px
    border 1px solid #ccc
  .mins 
    display block
    width 15px
    text-align center
    height 17px
    line-height 17px
    overflow hidden
    background #f1f1f1
    color #666
    position absolute
    right -8px
    border 1px solid #ccc
    top 19px
    border-top 0
.fix-width 
  width 520px
.t-gray 
  color #999
ul 
  &.btn-choose 
    li 
      float left
      margin 0 10px 0 0
      .btn-xlarge 
        font-size 12px
        border-radius 0
        .addshopcar 
          font-size 16px
  &.part-list 
    overflow hidden
    li 
      line-height 18px
      width 50%
      float left
      border-bottom 1px dashed #ededed
      line-height 28px
  &.goods-list 
    li 
      margin 5px 0 15px
      border-bottom 1px solid #ededed
      padding-bottom 5px
  &.goods-intro 
    li 
      line-height 26px
.addshopcar 
  padding 10px 25px
  background #77b72c
  font-size 16px
  font-family "微软雅黑"
.sui-btn:active,.sui-btn.active 
  background-color #e1251b
  color #fff
.sui-nav 
  &.nav-tabs 
    &.tab-wraped 
      & > li 
        width 50%
        & > a 
          padding 11px
          text-align center
        &.active 
          & > a 
            padding-top 9px
            border-top 3px solid #e1251b
.intro 
  .sui-nav 
    &.nav-tabs 
      &.tab-wraped 
        background #ededed
        & > li 
          width auto
          &.active 
            & > a 
              font-weight 400
              border 0
              padding-top 12px
              background #e1251b
              color #fff
  .tab-content 
    &.tab-wraped 
      border 0
.tab-content 
  &.tab-wraped 
    padding 10px
.summary-price-wrap 
  overflow hidden
.goods-list 
  .operate 
    margin 5px 40px
.p-img 
  img 
    padding-left 20px
.suits 
  .list-wrap 
    float left
    margin 0 10px
  ul 
    li 
      float left
      list-style-type none
      padding 0 20px
.good-suits 
  overflow hidden
.master,
.suits,
.result 
  height 140px
  padding 10px
.master 
  .list-wrap 
    position relative
    text-align center
    i 
      position absolute
      top 48px
      right -25px
      font-size 16px
    em 
      color #c81623
      font-size 16px
      font-weight 700
.result 
  line-height 26px
  border-left 1px solid #ddd
  padding 20px
  .price 
    color #b1191a
    font-size 16px
.fitting,
.like 
  border 1px solid #ddd
  margin-bottom 15px
.kt 
  border-bottom 1px solid #ddd
  background #f1f1f1
  color #333
  margin 0
  padding 5px 0 5px 15px
.like 
  .like-list 
    padding 15px
.like-list ul li .attr,
.like-list ul li .price,
.like-list ul li .commit 
  padding-left 15px
  font-family "微软雅黑"
.list-wrap 
  .price 
    font-size 16px
    color #c81623
.like-list 
  ul 
    li 
      .price 
        margin-bottom 20px
      .list-wrap 
        line-height 22px
.comment 
  p 
    margin-bottom 0
    margin-top 0
  .com-tit 
    padding 0 10px
    line-height 32px
    font-size 14px
    background-color #f7f7f7
    border 1px solid #eee
    font-weight 700
  .com-percent 
    text-align center
    line-height 45px
    p 
      margin-bottom 0
    .percent 
      font-size 30px
      color #ff0909
  .com-tab-type 
    line-height 36px
    .type 
      padding-left 20px
      list-style none
      background-color #f7f7f7
      li 
        display inline-block
        margin-right 15px
        cursor pointer
        a 
          text-decoration none
          color #555
        &.current 
          a 
            color #ff0909
    .content 
      .com-item 
        padding 15px
        line-height 26px
        border-bottom 1px solid #ddd
.com-item 
  .user-column 
    float left
    width 140px
    .username 
      img 
        width 25px
        height 25px
        border-radius 12px
        margin-right 2px
    .usernum 
      color #999
  .user-info 
    margin-left 150px
    .stars 
      width 78px
      height 18px
      background url(./img/_/star.png) no-repeat
      &.star4 
        background-position 0 0
    .mini 
      list-style none
      float left
      li 
        display inline-block
    .guige 
      color #999
      .reply 
        color #ff0909
        margin 10px
        border-top 1px solid #dddddd
        padding-top 15px
        font-size 14px
        .name 
          padding-right 20px
        .time 
          color #999
    .operate 
      float right
      span 
        padding-right 15px
        cursor pointer
        i 
          font-size 16px
i 
  &.icon-tb-likefill 
    color #c81623
  &.icon-tb-wangfill 
    color #c81623
.tab 
  overflow hidden
  border-bottom 2px solid #be0000
  margin-bottom 10px
  li 
    position relative
    height 24px
    padding 3px 12px 0
    overflow hidden
    margin-right 3px
    line-height 24px
    font-size 14px
    font-weight 700
    color #c30
  span 
    position absolute
    left 0
    top 0
    z-index 1
    width 10px
    height 27px
  a 
    float none
    color #c30
  .curr 
    background-position right -178px
    color #fff
    span 
      background-position 0 -178px
    a 
      color #fff
.tab li,.tab a,.tab-item 
  cursor pointer
  float left
  text-align center
.m,.mt,.mc,.mb 
  overflow hidden
.mt 
  .extra 
    float right
.zoom 
  img 
    max-width none
.jqzoom 
  float left
  border 0
  position relative
  padding 5px
  cursor pointer
  margin 0
  display block
.zoomdiv 
  z-index 100
  position absolute
  top 0
  left 0
  width 350px
  height 350px
  background #fff
  border 1px solid #ccc
  display none
  text-align center
  overflow hidden
.jqZoomPup 
  z-index 10
  visibility hidden
  position absolute
  top 0
  left 0
  width 20px
  height 20px
  border 1px solid #aaa
  background #fff
  opacity .5
.spec-preview 
  width 410px
  height 410px
  border 1px solid #dfdfdf
.spec-scroll 
  clear both
  margin-top 5px
  width 410px
  overflow hidden
  .prev 
    float left
    margin-right 4px
  .next 
    float right
  .items 
    float left
    position relative
    width 380px
    height 56px
    overflow hidden
    ul 
      position absolute
      width 9999px
      height 56px
      margin 0
      padding 0
      li 
        float left
        width 75px
        text-align center
        margin 0
        padding 0
        list-style-type none
        img 
          border 1px solid #ccc
          padding 2px
          width 50px
          height 50px
          display block
          &:hover 
            border 2px solid #f60
            padding 1px
.spec-scroll .prev,.spec-scroll .next 
  display block
  font-family "宋体"
  text-align center
  width 10px
  height 54px
  line-height 54px
  border 1px solid #ccc
  background #ebebeb
  cursor pointer
  text-decoration none

</style>