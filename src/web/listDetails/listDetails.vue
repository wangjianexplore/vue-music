<template>
    <div class="listDetails">
        <page-header :menuNum="1"></page-header>
        <discoverTag :liNum="0"></discoverTag>
        <div class="layout">
            <div class="lay-main">
                <div class="layleft">
                    <div class="left-main">
                        <songListTop :songTop="songTop" :creator="creator"></songListTop>
                        <songList :tracks="tracks" :titlepadding="false" :playCount="playCount"></songList>
                        <comments :hotComments="hotComments" :styleFlag="true"></comments>
                    </div>
                </div>
                <div class="layright">
                    <likeList :likeList="likeList"></likeList>
                    <div class="hotSong">
                        <h3 class="hot_top">热门歌单</h3>
                        <ul>
                            <li class="li" v-for="(item, index) in hotList" :key="index">
                                <img class="img" @click="$router.push('/listDetails/'+item.id);getDetails(item.id)" :src="item.coverImgUrl" alt="">
                                <div class="li_info">
                                    <div class="title" @click="$router.push('/listDetails/'+item.id);getDetails(item.id)">{{item.name}}</div>
                                    <div class="num_auth">by {{item.creator.nickname}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import pageHeader from '../pageHeader/pageHeader.vue';
import pageFooter from '../pageFooter/pageFooter.vue';
import axios from 'axios';
export default {
    name: 'listDetails',
    components: {
        pageHeader,
        pageFooter
    },
    data() {
        return {
            videoShow: false,
            tracks: [],
            playCount: 0,
            songTop: {},
            creator: {},
            hotComments: [],
            likeList: [],
            hotList: []
        }
    },
    mounted() {
        let vm = this;
        vm.getDetails(vm.$route.params.id);
        vm.getComment(vm.$route.params.id);
        vm.getHotList();
    },
    methods: {
        ...mapMutations([
            'setPlayInfo', 'setPlayList', 'setPlayBtnInfo'
        ]),
        getDetails(id) {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/playlist/detail', {
                params: {
                    id: id
                }
            }).then(function (res) {
                let data = res.data.playlist
                vm.creator = data.creator;
                vm.tracks = data.tracks;
                vm.playCount = data.playCount;
                vm.likeList = data.subscribers;
                vm.setPlayList({
                    songList: data.tracks
                });
                vm.setPlayBtnInfo({
                    shareCount: data.shareCount,
                    subscribedCount: data.subscribedCount,
                    commentCount: data.commentCount
                });
                data.description = data.description.replace(/\n/g, '<br>');
                vm.songTop = data;
            }).catch(function (res) {
                console.log(res);
            });
        },
        getComment(id) {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/comment/playlist', {
                params: {
                    id: id
                }
            }).then(function (res) {
                vm.hotComments = res.data.hotComments;
            }).catch(function (res) {
                console.log(res);
            });
        },
        getHotList() {
           let vm = this;
            axios.get('https://musicapi.leanapp.cn/top/playlist', {
                params: {
                    limit: 5,
                    order: 'hot'
                }
            }).then(function (res) {
                vm.hotList = res.data.playlists;
            }).catch(function (res) {
                console.log(res);
            }); 
        }
    }
}
</script>
<style lang="less" scoped>
@import "./listDetails.less";
</style>