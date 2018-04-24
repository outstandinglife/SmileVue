<template>
    <div class='swiper-area'>
        <van-swipe :autoplay='autoplay' :loop='loop'>
            <van-swipe-item v-for='(item, index) in swipeList' :key='index'>
                <img v-lazy='item.imgUrl' @click='preview(index)'>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        props: {
            autoplay: {
                type: Number,
                default: 4000
            },
            loop: {
                type: Boolean,
                default: false
            },
            swipeList: {
                type: Array,
                default: null
            }
        },
        data() {
            return {
                ImagePreviewList: []
            }
        },
        methods: {
            preview(index) {
                this.swipeList.map((item, index) => {
                    this.ImagePreviewList.push(item.imgUrl);
                });
                ImagePreview(this.ImagePreviewList, index);
            }
        }
    }
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
    .swiper-area
        width 100%
        height auto
        clear both
        img
            display block
            width 100%
            height 2.5rem
</style>