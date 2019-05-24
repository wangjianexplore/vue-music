import discoverTag from './discoverTag/discoverTag.vue';
import songBtn from './songBtn/songBtn.vue';
import comments from './comments/comments.vue';
import songList from './songList/songList.vue';
import songListTop from './songListTop/songListTop.vue';
import layout from './layout/layout.vue';
import layleft from './layout/layleft.vue';
import layright from './layout/layright.vue';
import likeList from './likeList/likeList.vue';
import userHeader from './userHeader/userHeader.vue';
import './tools/tools.js';

const components = {
    install: function(Vue) {
        Vue.component('discoverTag', discoverTag);
        Vue.component('songBtn', songBtn);
        Vue.component('comments', comments);
        Vue.component('songList', songList);
        Vue.component('songListTop', songListTop);
        Vue.component('layout', layout);
        Vue.component('layleft', layleft);
        Vue.component('layright', layright);
        Vue.component('likeList', likeList);
        Vue.component('userHeader', userHeader);
    }
}

export default components;