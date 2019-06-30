<template>
    <div class="topList">
        <discoverTag :liNum="2"></discoverTag>
        <div class="list">
            <div class="list-left">
                <div class="left-main">
                    <h2 class="left-h2">云音乐特色榜</h2>
                    <div class="spec-list">
                        <ul>
                            <li :class="{li_active:liNum==item.id}" @click="songList(item.idx)" v-for="(item,index) in featureToplist" :key="index+item.id">
                                <div class="li-left"><img class="li-img" :src="item.coverImgUrl" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">{{item.name}}</p>
                                    <p class="li-p2">{{item.updateFrequency}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="left-main left-main02">
                    <h2 class="left-h2">全球媒体榜</h2>
                    <div class="spec-list">
                        <ul>
                            <li :class="{li_active:liNum==6}" v-for="(item,index) in mediaToplist" :key="index+item.id">
                                <div class="li-left"><img class="li-img" :src="item.coverImgUrl" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">{{item.name}}</p>
                                    <p class="li-p2">{{item.updateFrequency}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="list-right">
                <div class="right-top">
                    <div class="top-left">
                        <div class="top-img"><img class="img" :src="playlist.coverImgUrl" alt=""></div>
                    </div>
                    <div class="top-right">
                        <div class="title">{{playlist.name}}</div>
                        <div class="date">最近更新：{{formatDate(playlist.updateTime, 'MM-dd')}} （每天更新）</div>
                        <songBtn></songBtn>
                    </div>
                </div>
                <div class="right-bottom">
                    <div class="song_list">
                        <div class="sl_top">
                            <span class="span_song">歌曲列表</span>
                            <span class="span_num">100首歌</span>
                            <span class="span_pl">播放：<span class="span_red">{{playlist.playCount}}</span>次</span>
                        </div>
                        <div class="sl_bot">
                            <div class="sl_head">
                                <div class="head kong"></div>
                                <div class="head title">标题</div>
                                <div class="head time">时长</div>
                                <div class="head singer">歌手</div>
                            </div>
                            <div class="list_items">
                                <ul class="item-li">
                                    <li class="spec_item list_item" :class="{spec_item1:index<4}" v-for="(item, index) in tracks" :key="index+item.id">
                                        <span class="item item01" :class="{item07:index>=4}">{{index+1}}</span>
                                        <span class="item item02" :class="{item08:index>=4}">
                                            <img v-if="index<4" @click="$router.push('/songDetail/'+item.id)" :src="item.al.picUrl" alt="">
                                            <span class="song-nane">
                                                <div class="play" @click="playMusic(sendMusicInfo(index,item.id,item.name,item.ar[0].name,item.al.picUrl,tracks))" :class="{play2:index>=4}"></div>
                                                <span class="name" @click="$router.push('/songDetail/'+item.id)">{{item.name}}</span>
                                            </span>
                                        </span>
                                        <span class="item item03" :class="{item09:index>=4}">{{getTime(parseInt(item.dt/60/1000))}}:{{getTime(parseInt(item.dt/1000%60))}}</span>
                                        <span class="item item04" :class="{item10:index>=4}">{{item.ar[0].name}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <comments :hotComments="hotComments"></comments>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';
import axios from 'axios';
export default {
    name: 'topList',
    data() {
        return {
            liNum: 0,
            playlist: {},
            tracks: [],
            hotComments: [],
            featureToplist: [],
            mediaToplist: []
        }
    },
    mounted() {
        let vm = this;
        vm.songList(vm.$route.params.id);
        vm.getToplist();
        window.scrollTo(0, 0);
    },
    methods: {
        ...mapMutations([
            'setPlayList', 'setPlayBtnInfo'
        ]),
        ...mapActions([
            'playMusic'
        ]),
        getTime(arg) {
            var args = arg.toString();
            if (args.length <= 1) {
                return '0' + args;
            } else {
                return args;
            }
        },
        songList(id) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/top/list', {
                params: {
                    idx: id
                }
            }).then(function (res) {
                let data = res.data.playlist;
                vm.playlist = data;
                vm.tracks = data.tracks;
                vm.liNum = data.id;
                vm.setPlayList({
                    songList: data.tracks
                });
                vm.setPlayBtnInfo({
                    shareCount: data.shareCount,
                    subscribedCount: data.subscribedCount,
                    commentCount: data.commentCount
                });
                vm.getComment(data.id);
            }).catch(function (error) {
                console.log(error);
            });
        },
        getComment(id) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/comment/playlist', {
                params: {
                    id: id
                }
            }).then(function (res) {
                vm.hotComments = res.data.comments;
            }).catch(function (res) {
                console.log(res);
            });
        },
        getToplist() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/toplist').then(function (res) {
                let data = res.data.list;
                data.map(item => {
                    switch(item.name) {
                        case '云音乐飙升榜':
                            item.idx = 3;
                            break;
                        case '云音乐新歌榜':
                            item.idx = 0;
                            break;
                        case '网易原创歌曲榜':
                            item.idx = 2;
                            break;
                        case '云音乐热歌榜':
                            item.idx = 1;
                            break;
                    }
                });
                vm.featureToplist = data.slice(0, 4);
                vm.mediaToplist = data.slice(4);
            }).catch(function (res) {
                console.log(res);
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "./topList.less";
</style>
<style lang="less">
.topList {
    .m-cmmt {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
    .cmmts_top,
    .cmmts_bot {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>


