import Vue from "vue";

require('./bootstrap');

window.Vue = require('vue');
window.Vuex = require('vuex');
window.VueToast = require('vue-template-compiler');
window.ChatWindow = require('vue-advanced-chat');
window.ChatContainer = require('./components/ChatContainer.vue').default;

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('chat-room', require('./components/ChatRoom.vue').default);
Vue.component('chat-container', require('./components/ChatContainer.vue').default);
