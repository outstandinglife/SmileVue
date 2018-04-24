<template>
    <div>
        <!--search bar layout-->
        <div class='search-bar'>
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
        <div class='swiper-area'>
            <swipe
                :swipeList='swipeList'
                :autoplay='autoplay'
                :loop='loop'>
            </swipe>
        </div>
    </div>
</template>

<script>
    import Swipe from 'base/swipe/swipe'
    export default {
        data() {
            return {
                locationIcon: require('../assets/images/location.png'),
                autoplay: 4000,
                loop: true,
                swipeList: [
                    {imgUrl: require('../assets/images/swipe1.jpg')},
                    {imgUrl: require('../assets/images/swipe2.jpg')},
                    {imgUrl: require('../assets/images/swipe3.jpg')}
                ]
            }
        },
        components: {
            Swipe
        }
    }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    @import '~common/stylus/variable'
    input::-webkit-input-placeholder
        color $color-background
        font-size $font-size-s
    .search-bar
        width 100%
        height 1rem
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
                background-color $color-search-background
                height .8rem
                width 100%
                border-bottom 1px solid $color-background
                position absolute
                left 0
                top 50%
                margin-top -.4rem
                color $color-background
        .seek
            height 100%
            padding .2rem
            .button
                width 100%
                height 100%
                font-size $font-size-s
    .swiper-area
        width 100%
        height auto
</style>
