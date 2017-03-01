// /**
//  * Created by ilanv on 27/02/2017.
//  */
//
//
// Vue.component('task', {
//     template: `<li><slot></slot></li>`,
//     data(){
//         return {}
//     }
// });
//
//
// Vue.component('task-list', {
//     template: `<div>
//                     <task v-for="task in tasks" v-text="task.description"></task>
//                </div>
//               `,
//     data(){
//         return {
//             tasks: [{description: 'Go to the store', 'completed': true},
//                 {description: 'Finish screencast', 'completed': false},
//                 {description: 'Make donation', 'completed': false},
//                 {description: 'Clear inbox', 'completed': true},
//                 {description: 'Make dinner', 'completed': false},
//                 {description: 'Clean room', 'completed': false}
//             ]
//         }
//     }
// });

//new article from bulma
Vue.component('message', {
    props: ['title', 'body'],
    template: `
        <article class="message" v-show="isVisible">
          <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" @click="hideModal"></button>
          </div>
          <div class="message-body">
                {{body}}
          </div>
        </article>

`,
    data(){
        return {
            isVisible: true
        };
    },
    methods: {
        hideModal(){
            this.isVisible = false;
        }
    }
});

//new modal component from bulma
Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
    
            <div class="modal-content">
                <div class="box">
                    <p>
                       <slot></slot>
                    </p>
                </div>
            </div>
            <!--emit will trigger this event when click was initialized-->
            <button class="modal-close" @click="$emit('close')"></button>
         </div>
    `
});


Vue.component('tabs', {
    template: `
        <div class="tabsWrapper">
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" v-bind:class="{ 'is-active': tab.isActive }"> 
                      <a :href="tab.href" class="capitalize" @click="selectTab(tab)">
                      {{tab.name}}
                      </a>
                    </li>
                </ul>
            </div>
            <div class="tabDetails">
                <slot></slot>
            </div>
        </div>
`,
    data(){
        return {
            tabs: []
        }
    },
    //WHEN COMPONENT CREATED PASS THE CHILDREN'S TO THE TABS
    created(){
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab =>{
                tab.isActive = (tab.name==selectedTab.name);
            })
        }
    }
});

Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },
    template: `<div v-show="isActive">
                <slot></slot>
               </div>
`
    , data(){
        return {
            isActive: false
        }
    },

    computed: {
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted(){
        this.isActive = this.selected;
    }
});


new Vue({
    el: "#root",
    data: {
        showModal: false
    }
});