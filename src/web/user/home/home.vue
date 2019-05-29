<template>
    <div class="home">
        <div class="redBar"></div>
        <userHeader :level="level" :profile="profile"></userHeader>
        <div class="homeMain">
            <div class="wrap">
                <div class="list">
                    <div class="list_title">
                        <h3 class="t_h3">听歌排行</h3>
                        <h4 class="t_h4">累积听歌{{songList.length}}首</h4>
                        <span class="t_icon"></span>
                        <div class="t_time">
                            <span class="t_all" :class="{t_week:weekFlag}" @click="weekFlag=true;songList=weekData">最近一周</span>
                            <span class="t_line">|</span>
                            <span class="t_all" :class="{t_week:!weekFlag}" @click="weekFlag=false;songList=allData">所有时间</span>
                        </div>
                    </div>
                    <div class="list_bot">
                        <div class="n-nmusic" v-show="!songList.length">
                            <h3 class="h3">
                                <i class="icon"></i>
                                暂无听歌记录
                            </h3>
                        </div>
                        <ul>
                            <li class="li_bot" v-for="(item, index) in songList" :key="index">
                                <div class="li_one">
                                    {{index+1}}.
                                    <span class="span_bot" @click="playMusic(sendMusicInfo(index,item.song.id,item.song.name,item.song.ar[0].name,item.song.al.picUrl,[],false,item.song))"></span>
                                </div>
                                <div class="songname">
                                    <span class="name" @click="$router.push('/songDetail/'+item.song.id)">{{item.song.name}}</span>
                                    <span class="bar">-</span>
                                    <span class="singername" @click="$router.push('/artist/'+item.song.ar[0].id)">{{item.song.ar[0].name}}</span>
                                    <div class="opt">
                                        <span class="opt1"></span>
                                        <span class="opt0 opt2"></span>
                                        <span class="opt0 opt3"></span>
                                        <span class="opt0 opt4"></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="r-wrap">
                    <div class="r-header">
                        {{profile.nickname}}创建的歌单（3）
                    </div>
                    <div class="r-bottom">
                        <el-row class="row-song">
                            <el-col :span="5" class="song-col" v-for="(item, index) in playlist" :key="index">
                                <img @click="$router.push('/listDetails/' + item.id)" :src="item.coverImgUrl" alt="">
                                <div @click="$router.push('/listDetails/' + item.id)" class="songTitle">{{item.name}}</div>
                                <div @click="$router.push('/listDetails/' + item.id)" class="sBottom">
                                    <span class="music-logo"></span>
                                    <span class="music-num">{{item.playCount}}</span>
                                    <span class="music-play"></span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
    name: 'home',
    data() {
        return {
            singerId: this.$route.params.uid,
            level: 1,
            profile: {},
            songList: [],
            allData: [],
            weekData: [],
            weekFlag: false,
            playlist: []
        }
    },
    mounted() {
        this.getUserDetail(this.singerId);
        this.getPlaylist(this.singerId);
        this.getRecord(this.singerId, 0); // 所有
        this.getRecord(this.singerId, 1); // 一周
    },
    methods: {
        ...mapActions([
            'playMusic'
        ]),
        // 用户基本信息
        getUserDetail(uid) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/user/detail', {
                params: {
                    uid: uid
                }
            }).then(function (res) {
                let data = res.data;
                vm.level = data.level;
                vm.profile = data.profile;
            }).catch(function (error) {
                console.log(error);
            });
        },
        // 用户播放记录
        getRecord(uid, type) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/user/record', {
                params: {
                    uid: uid,
                    type: type
                }
            }).then(function (res) {
                let data = res.data;
                type == 0 ? vm.songList = vm.allData = data.allData : vm.weekData = data.weekData;
            }).catch(function (error) {
                console.log(error);
            });
        },
        // 用户播放记录
        getPlaylist(uid) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/user/playlist', {
                params: {
                    uid: uid
                }
            }).then(function (res) {
                let data = res.data;
                vm.playlist = data.playlist;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "./home.less";
</style>


