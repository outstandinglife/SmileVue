<template>
    <div class='loading-container'>
        <div class='loading loading-1'>
            <div class='loading-outter'></div>
            <div class='loading-inner'></div>
        </div>
        <div class='load'>数据请求中</div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    @keyframes loading-outter
        0%
            transform rotate(0deg)
        100%
            transform rotate(360deg)
    @keyframes loading-inner
        0%
            transform rotate(0deg)
        100%
            transform rotate(-360deg)
    .loading-container
        position fixed
        z-index 1
        top .8rem
        left 0
        right 0
        bottom 0
        display flex
        flex-direction column
        justify-content center
        text-align center
        background-color rgba(0, 0, 0, 1)
        border-radius .1rem
        .loading
            position relative
            width .6rem
            height .6rem
            border-radius 50%
            margin 0 auto
            display inline-block
            vertical-align middle
            .loading-outter
                position absolute
                border .04rem solid #f50057
                border-left-color transparent
                border-bottom 0
                width 100%
                height 100%
                border-radius 50%
                animation loading-outter 1s cubic-bezier(.42, .61, .58, .41) infinite
            .loading-inner
                position absolute
                border .04rem solid #f50057
                border-radius 50%
                width .4rem
                height .4rem
                left calc(50% - .2rem)
                top calc(50% - .2rem)
                border-right 0
                border-top-color transparent
                animation loading-inner 1s cubic-bezier(.42, .61, .58, .41) infinite
        .load
            padding .3rem
            color #fff
            font-size .3rem

</style>