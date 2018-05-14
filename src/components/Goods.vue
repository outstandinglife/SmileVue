<template>
    <div>
        <button @click='test'>测试</button>
        <button @click='repay'>支付</button>
    </div>
</template>

<script>
    export default {
        created () {
            window.localStorage.flag = 2;
        },
        methods: {
            test () {
               this.$router.push('/');
            },
            repay () {
                window.localStorage.flag = 1;
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    div
        width 100%
        height 100%
        overflow hidden
        background-color greenyellow
        button
            display block
            width 100%
            height .8rem
            margin 2rem 0
</style>