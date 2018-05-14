<template>
    <div class='container'>
       <div class='timer'>
           <div class="self-motion">
               {{time}}秒之后进入商城首页
           </div>
           <div class='promptly'>
               <button @click='toShoppingMall'>立即跳转</button>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'welcome',
        data () {
            return {
                time: 3
            }
        },
        created () {
            this.timeOut();
        },
        methods: {
            toShoppingMall () {
                this.$router.push('/ShoppingMall');
            },
            timeOut () {
                if(this.time !== 0) {
                    setTimeout(() => {
                        this.time--;
                        this.timeOut();
                    }, 1000);
                } else {
                    this.$router.push('/ShoppingMall');
                }
            }
        }
    }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    .container
        width 100%
        height 100%
        background-image url('../../common/image/huanyin.png')
        background-repeat no-repeat
        background-size 100% 100%
        position relative
        .timer
            width 100%
            height 2rem
            position absolute
            left 0
            bottom 2rem
            .self-motion
                width 100%
                text-align center
                color #fff
                font-size .5rem
                font-family '微软雅黑'
        .promptly
            width 100%
            button 
                border none
                outline none
                background none
                display block
                margin 0 auto
                height 1rem
                border-radius 5px
                margin-top .2rem
                color #fff
                width 50%
                background-color #55acee
                box-shadow 0 5px 0 0 #3c93D5
</style>