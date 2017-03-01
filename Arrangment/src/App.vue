<template>
    <div id="app">
        <message>Hello There</message>
    </div>
</template>

<script type="text/babel">

    import Message from './components/message.component.vue';

    export default {
        name: 'app',
        components: {Message},
        data(){
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
