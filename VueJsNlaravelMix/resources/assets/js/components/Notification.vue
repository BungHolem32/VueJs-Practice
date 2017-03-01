<template>
    <div class="notification">
        <h1>{{message}}</h1>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return {
                message: "welcome to Vue And laravel"
            }
        }
    }


</script>

<style lang="scss" rel="stylesheet/scss">

    $primaryTextColor : #333333;

    .notification {
        color : $primaryTextColor;
    }

</style>
