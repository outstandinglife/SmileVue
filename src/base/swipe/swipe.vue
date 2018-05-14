<template>
    <div class='swiper-area'>
        <van-swipe :autoplay='autoplay' :loop='loop'>
            <van-swipe-item v-for='(item, index) in swipeList' :key='index'>
                <img v-lazy='item.image' @click='preview(index)'/>
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
                return;
                if(!this.ImagePreviewList.length) {
                    this.swipeList.map((item, index) => {
                        this.ImagePreviewList.push(item.image);
                    });
                }
                ImagePreview(this.ImagePreviewList, index);
            }
        }
    }
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
    .swiper-area
        overflow hidden
        width 100%
        height 0
        clear both
        padding-bottom 40.03%
        img
            width 100%
</style>