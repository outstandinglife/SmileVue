<template>  
    <div>
        <div class='floor'>
            <div class='floor-title'>
                <!-- <span class='floor-number'>1F</span> -->{{ floorName }}
            </div>
            <div class='floor-anomaly'>
                <div class='floor-one'>
                    <img style='display:block;' :src='floor0.image' width='100%' height='100%' />
                </div>
                <div class='floor-two-box'>
                    <div class='floor-two'>
                        <img style='display:block;' :src='floor1.image' width='100%' />
                    </div>
                    <div>
                        <img style='display:block;' :src='floor2.image' width='100%' />
                    </div>
                </div>
            </div>
            <div class='floor-rule'>
                <div v-for='(item, index) in floorData.slice(3)' :key='index'>
                    <img style='display:block;' :src='item.image' width='100%' height='100%' />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            floorData: {
                type: Array,
                default: null
            },
            floorName: {
                type: String,
                default: ' '
            }
        },
        data () {
            return {
                floor0: {},
                floor1: {},
                floor2: {}
            }
        },
        watch: {
            floorData () {
                this.floor0 = this.floorData[0];
                this.floor1 = this.floorData[1];
                this.floor2 = this.floorData[2];
            }
        }
    }
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
    .floor-title
        display flex
        justify-content center
        align-items center
        font-size .3rem
        line-height .7rem
        text-align center
        color #C85B47
        background-color #EDEFEE
        .floor-number
            display block
            width .5rem
            height .5rem
            line-height .5rem
            margin-right .2rem
            text-align center
            background #D84118
            color #fff
            font-size .25rem
            border-radius 50%
    .floor-anomaly
        display flex
        flex-direction row
        background-color #fff
        border-bottom 1px solid #eee
        .floor-one
            width 50%
            box-sizing border-box
            -webkit-box-sizing border-box
            border-right 1px solid #eee
        .floor-two-box
            width 50%
            .floor-two
                box-sizing border-box
                -webkit-box-sizing border-box
                border-bottom 1px solid #eee
    .floor-rule
        display flex
        flex-direction row
        flex-wrap wrap
        background #fff
        div
            box-sizing border-box
            -webkit-box-sizing border-box
            border-bottom 1px solid #eee
            width 50%
        div:nth-child(odd)
            border-right 1px solid #eee
</style>