<template>
    <div class="listDetails">
        <page-header :menuNum="1"></page-header>
        <discoverTag :liNum="0"></discoverTag>
        <div class="layout">
            <div class="lay-main">
                <div class="layleft">
                    <div class="left-main">
                        <div class="myr_top">
                            <div class="w_img">
                                <img class="img" v-if="Object.keys(songs).length!=0" :src="songs.al.picUrl" alt="">
                                <span class="sp_back"></span>
                            </div>
                            <div class="cnt">
                                <div class="line01">
                                    <span class="logo"></span>
                                    <span class="title">{{songs.name}}</span>
                                </div>
                                <div class="line02">
                                    <span class="create">歌手：</span>
                                    <span class="name" v-if="Object.keys(songs).length!=0">{{songs.ar[0].name}}</span>
                                </div>
                                <div class="line02">
                                    <span class="create">所属专辑：</span>
                                    <span class="name" v-if="Object.keys(songs).length!=0">{{songs.al.name}}</span>
                                </div>
                                <div class="play">
                                    <ul>
                                        <li class="li_one" @click="playMusic()">
                                            播放
                                        </li>
                                        <li class="li_two"></li>
                                        <li class="li_three">收藏</li>
                                        <li class="li_four">分享</li>
                                        <li class="li_five">下载</li>
                                        <li class="li_six">({{hotComments.length}})</li>
                                    </ul>
                                </div>
                                <div class="desc" :class="{desc_auto:showFlag}">
                                    <p class="p_lrc" ref="p_lrc" v-for="(item, index) in lrc" :key="index" v-text="item.text"></p>
                                </div>
                                <div class="open">
                                    <span class="span_icon" @click="showFlag=!showFlag">{{showFlag==false?'展开':'收起'}}<i class="u-icn" :class="{u_icn2:showFlag==true}"></i></span>
                                </div>
                            </div>
                        </div>
                        <comments :hotComments="hotComments" :styleFlag="true"></comments>
                    </div>
                </div>
                <div class="layright">
                    <!-- <likeList :likeList="likeList"></likeList> -->
                    <div class="hotSong">
                        <h3 class="hot_top">热门歌单</h3>
                        <ul>
                            <li class="li" v-for="(item, index) in hotList" :key="index">
                                <img class="img" @click="$router.push('/listDetails/'+item.id)" :src="item.coverImgUrl" alt="">
                                <div class="li_info">
                                    <div class="title" @click="$router.push('/listDetails/'+item.id)">{{item.name}}</div>
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
    name: 'songDetail',
    components: {
        pageHeader,
        pageFooter
    },
    data() {
        return {
            hotComments: [],
            likeList: [],
            hotList: [],
            showFlag: false,
            songs: {},
            lrc: []
        }
    },
    computed: {
        ...mapGetters(['getPlayInfo', 'getPlayList'])
    },
    mounted() {
        let vm = this;
        vm.getDetails();
        vm.getComment();
        vm.getLrc();
        vm.getHotList();
        vm.getLikeUser();
    },
    methods: {
        ...mapMutations([
            'setPlayInfo', 'setPlayList'
        ]),
        playMusic() {
            let vm = this;
            let num = 0;
            for (let i = 0; i < vm.getPlayList.list.length; i++) {
                let item = vm.getPlayList.list[i];
                if (item.id == vm.$route.params.id) {
                    num = i
                    if (vm.getPlayInfo.index === i) {
                        vm.setPlayInfo({
                            restart: !vm.getPlayInfo.restart
                        });
                    }
                    break;
                }
            }
            if (num == 0) {
                vm.getPlayList.list.push(vm.songs);
                num = vm.getPlayList.list.length - 1;
            }
            vm.setPlayInfo({
                curlength: 0,
                currentTime: 0,
                index: num,
                onplayflag: true,
                name: vm.songs.name,
                singer: vm.songs.ar[0].name,
                picurl: vm.songs.al.picUrl,
                musicurl: 'https://music.163.com/song/media/outer/url?id=' + vm.$route.params.id + '.mp3',
                id: vm.$route.params.id,
                lrc: vm.lrc
            });
        },
        getDetails() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/song/detail', {
                params: {
                    ids: vm.$route.params.id
                }
            }).then(function (res) {
                vm.songs = res.data.songs[0];
            }).catch(function (res) {
                console.log(res);
            });
        },
        getLikeUser() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/simi/user', {
                params: {
                    id: vm.$route.params.id
                }
            }).then(function (res) {
                vm.lrc = vm.parseLrc(res.data.lrc.lyric);
            }).catch(function (error) {
                console.log(error);
            });
        },
        getLrc() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/lyric', {
                params: {
                    id: vm.$route.params.id
                }
            }).then(function (res) {
                vm.lrc = vm.parseLrc(res.data.lrc.lyric);
            }).catch(function (error) {
                console.log(error);
            });
        },
        parseLrc(lrc) {
            let arr = lrc.split('\n');
            var lrcArray = [];
            var html = '';
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != '') {
                    let temp = arr[i].split(']');
                    if (temp.length > 1) {
                        var offset = temp[0].substring(1, temp[0].length + 1);
                        var text = temp[1];
                        if (text != '') {
                            lrcArray.push({ 'offset': offset, 'text': text });
                        }
                    }
                }
            }
            return lrcArray;
        },
        getComment() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/comment/music', {
                params: {
                    id: vm.getPlayInfo.id
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
@import "./songDetail.less";
</style>