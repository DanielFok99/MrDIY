import Vue from "vue";

require('./bootstrap');
window.Vue = require('vue');
window.Chat = require('vue-beautiful-chat');

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

