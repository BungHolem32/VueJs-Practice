<template>

    <div class="box is-info">
        <p>
            <slot></slot>
        </p>
    </div>

</template>


<script type="text/babel">
    export default{
        name: 'message',
    }

</script>


<style lang="scss" rel="stylesheet/scss">
    body {
        .box {
            background : #999999; padding : 18px; border : 1px solid #555; color : black;
        }
    }

</style>