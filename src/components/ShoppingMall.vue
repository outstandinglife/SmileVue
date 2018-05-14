<template>
    <div>
        <!--search bar layout-->
        <div class='search-bar' ref='search'>
            <van-row style='height: 100%;'>
                <van-col span='3' class='location-icon'>
                    <img :src='locationIcon'>
                </van-col>
                <van-col span='16' class='search-input'>
                    <input type='text' placeholder='查找'/>
                </van-col>
                <van-col span='5' class='seek'>
                    <van-button size='mini' class='button'>查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!--swipwer area-->
        <div class='swiper-area' ref='swiper_area'>
            <swipe
                :swipeList='swipeList'
                :autoplay='autoplay'
                :loop='loop'>
            </swipe>
        </div>
        <!-- type-bar -->
        <div class='type-bar'>
            <div v-for='(item, index) in category'>
                <img :src='item.image'>
                <span v-text='item.mallCategoryName'></span>
            </div>
        </div>
        <!-- AD banner area -->
        <div class='ad-banner'>
            <img :src='adBanner.PICTURE_ADDRESS' width='100%'>
        </div>
        <!-- recommend goods area -->
        <div class='recommend-area'>
            <div  class='recommend-title'>
                商品推荐
            </div>
            <div class='recommend-body'>
                <swiper :options='swiperOption'>
                    <swiper-slide v-for='(item, index) in recommendGoods' :key='index'>
                        <div class='recommend-item'>
                            <img :src='item.image' width='80%'>
                            <div class='recommend-goodsname'>{{item.goodsName}}</div>
                            <div>
                                <span>￥{{item.mallPrice}}</span>
                                <span class='originalPrice'>￥{{item.price}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- floor one area -->
        <floor :floorData='floor1' :floorName='floorName.floor1'></floor>
        <floor :floorData='floor2' :floorName='floorName.floor2'></floor>
        <floor :floorData='floor3' :floorName='floorName.floor3'></floor>
        <loading v-if='!goodsData'></loading>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swipe from 'base/swipe/swipe'
    import Loading from 'base/loading/Loading'
    import Floor from 'base/floor/floor'
    import axios from 'axios'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                locationIcon: require('../assets/images/location.png'),
                autoplay: 4000,
                loop: true,
                swipeList: [],
                category: [],
                adBanner: '',
                recommendGoods: [],
                goodsData: null,
                floor1: [],
                floor2: [],
                floor3: [],
                floorName: {},
                swiperOption:{
                    slidesPerView: 3
                }
            }
        },
        mounted () {
            const url = 'https://www.easy-mock.com/mock/5ae3caf8a223347f3605652d/SmlieVue/index';
            axios.get(url)
                .then((res) => {
                    if(res.status === 200) {
                        this.goodsData = res.data.data;
                        this.swipeList = this.goodsData.slides;
                        this.category = this.goodsData.category;
                        this.adBanner = this.goodsData.advertesPicture;
                        this.recommendGoods = this.goodsData.recommend;
                        this.floor1 = this.goodsData.floor1;
                        this.floor2 = this.goodsData.floor2;
                        this.floor3 = this.goodsData.floor3;
                        this.floorName = this.goodsData.floorName;
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        components: {
            Swipe,
            swiper,
            swiperSlide,
            Loading,
            Floor
        }
    }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    @import '~common/stylus/variable'
    .recommend-body >>> .swiper-container swiper-container-horizontal swiper-container-android
        height 0
        padding-bottom 50%
    input::-webkit-input-placeholder
        color $color-background
        font-size $font-size-s
    .search-bar
        width 100%
        height .8rem
        background-color $color-search-background
        .location-icon
            height 100%
            position relative
            padding .15rem
            img
                display block
                width 100%
                height 100%
        .search-input
            height 100%
            position relative
            input
                border none
                outline none
                box-sizing border-box
                -webkit-box-sizing border-box
                padding-top .15rem
                background-color $color-search-background
                height .7rem
                width 100%
                border-bottom 1px solid $color-background
                position absolute
                left 0
                top 50%
                margin-top -.4rem
                color $color-background
        .seek
            height 100%
            padding .15rem
            .button
                width 100%
                font-size $font-size-s
    .swiper-area
        width 100%
    .type-bar
        background #fff
        margin .15rem .1rem .1rem .1rem
        border-radius .2rem
        font-size .14rem
        display flex
        flex-direction row
        flex-wrap nowrap
        height auto
        div
            padding .1rem
            text-align center
            img
                display block
                height auto
                width 90%
                margin 0 auto
                padding-bottom .1rem
            span
                padding-bottom .1rem
    .recommend-area
        background-color #fff
        margin-top .1rem
        .recommend-title
            border-bottom 1px solid #eee
            font-size .16rem
            font-family '微软雅黑'
            padding .2rem
            letter-spacing 3px
            color #e5017d
        .recommend-body
            border-bottom 1px solid #eee
            .recommend-item
                width 100%
                text-align center
                font-size .12rem
                color #666
                padding-bottom .1rem
                .recommend-goodsname
                    margin-top .2rem
                    margin-bottom .2rem
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                .originalPrice
                    text-decoration line-through
    
</style>
