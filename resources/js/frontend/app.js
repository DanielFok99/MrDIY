import Vue from "vue";

require('./bootstrap');
window.Vue = require('vue');
window.Chat = require('vue-beautiful-chat');
window.CustomerChat = require('../components/CustomerChat.vue').default;

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


Vue.component('beautiful-chat', require('vue-beautiful-chat').default);
Vue.component('customer-chat', require('../components/CustomerChat.vue').default);
