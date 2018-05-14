<template>
    <div id='app'>
        <keep-alive exclude='welcome'>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

</script>

<style>
    #app {
        width: 100%;
        height: 100%;
        background-color: #EDEFEE;
    }
</style>
