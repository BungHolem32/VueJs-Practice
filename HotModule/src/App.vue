<template>
    <div id="app">
        <counter></counter>
    </div>
</template>


<script type="text/babel">

    import Counter from './component/Counter.vue';

    export default {
        name: 'app',
        components: {
            Counter
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss"></style>
