/**
 * Created by ilanv on 27/02/2017.
 */

window.Event = new class {
    constructor(){
        this.vue = new Vue();
    }

    fire(event, data = null){
        this.vue.$emit(event, data);
    }

    listen(event, callback){
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
    template: '<input type="text" placeholder="enter you couponcode" @blur="onCouponApplied">',
    methods: {
        //parent commuincation
        onCouponApplied(){
            Event.fire('applied');
        }
    }
});


new Vue({
    el: "#root",

    data: {
        couponApplied: false
    },

    created(){
        Event.listen('applied', () => console.log('Handiling it'))
    }
});


