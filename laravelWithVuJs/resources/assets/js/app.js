/**
 * Created by ilanv on 28/02/2017.
 */

import  Vue from 'vue';
import axios from 'axios';
import Example from './components/Example'

window.axios = axios;

Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    data: {
        skills: []
    },
    components:{
        Example
    },

    mounted(){
        //make an ajax request - /skills

        //fetch() | jqury $.ajax() | axios package
        this.$http.get('/skills').then(skills => this.skills = skills.data)
    }
});
