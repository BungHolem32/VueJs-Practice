<template>
    <div>
        <h2>The Count an Whatasasd asdlk as;d kasd;l kasd;l :{{count}}</h2>
        <p>
            <button @click="count+=50">Increment</button>
        </p>
    </div>
</template>


<script type="text/babel">
    export default{
        data(){
            return {
                count: 0
            }
        }
    }
</script>


<style rel="stylesheet/scss" lang="scss">

</style>