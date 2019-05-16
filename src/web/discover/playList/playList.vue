<template>
    <div class="playList">
        <discoverTag :liNum="3"></discoverTag>
        <div class="warp">
            <div class="wrap_top">
                <span class="all">{{cactName}}</span>
                <span class="sort" @click="boxShow=!boxShow">选择分类</span>
                <div class="hot-new">
                    <span class="hot" :class="{'hn_active':listFalg=='hot'}" @click="getHotList('hot',$route.params.type);listFalg='hot'">热门</span>
                    <span class="new" :class="{'hn_active':listFalg=='new'}" @click="getHotList('new',$route.params.type);listFalg='new'">最新</span>
                </div>
            </div>
            <div class="cateListBox" v-show="boxShow">
                <div class="triangle"></div>
                <div class="cattype">
                    <h3 class="h3">
                        <div class="all" @click="getHotList(listFalg,'全部');cactName='全部'">全部风格</div>
                    </h3>
                    <div class="typeline1">
                        <div class="left_one">
                            <span class="span_one"></span>
                            语种
                        </div>
                        <div class="right_one">
                            <label v-for="(item, index) in catlist" v-show="item.category==0" :key="index">
                                <span :class="{cat_active:cactName==item.name}" @click="getHotList(listFalg,item.name);cactName=item.name" class="cat_name">{{item.name}}</span><span class="line">|</span>
                            </label>
                        </div>
                    </div>
                    <div class="typeline2">
                        <div class="left_one">
                            <span class="span_one span_two"></span>
                            风格
                        </div>
                        <div class="right_one">
                            <label v-for="(item, index) in catlist" v-show="item.category==1" :key="index">
                                <span :class="{cat_active:cactName==item.name}" @click="getHotList(listFalg,item.name);cactName=item.name" class="cat_name">{{item.name}}</span><span class="line">|</span>
                            </label>
                        </div>
                    </div>
                    <div class="typeline2">
                        <div class="left_one">
                            <span class="span_one span_thr"></span>
                            场景
                        </div>
                        <div class="right_one">
                            <label v-for="(item, index) in catlist" v-show="item.category==2" :key="index">
                                <span :class="{cat_active:cactName==item.name}" @click="getHotList(listFalg,item.name);cactName=item.name" class="cat_name">{{item.name}}</span><span class="line">|</span>
                            </label>
                        </div>
                    </div>
                    <div class="typeline2">
                        <div class="left_one">
                            <span class="span_one span_four"></span>
                            情感
                        </div>
                        <div class="right_one">
                            <label v-for="(item, index) in catlist" v-show="item.category==3" :key="index">
                                <span :class="{cat_active:cactName==item.name}" @click="getHotList(listFalg,item.name);cactName=item.name" class="cat_name">{{item.name}}</span><span class="line">|</span>
                            </label>
                        </div>
                    </div>
                    <div class="typeline2 typeline5">
                        <div class="left_one">
                            <span class="span_one span_five"></span>
                            主题
                        </div>
                        <div class="right_one right_five">
                            <label v-for="(item, index) in catlist" v-show="item.category==4" :key="index">
                                <span :class="{cat_active:cactName==item.name}" @click="getHotList(listFalg,item.name);cactName=item.name" class="cat_name">{{item.name}}</span><span class="line">|</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap_bot">
                <el-row>
                    <el-col v-for="(item, index) in list" :key="index">
                        <img :src="item.coverImgUrl" @click="$router.push('/listDetails/' + item.id)" class="imghot" alt="">
                        <div class="songTitle">{{item.name}}</div>
                        <div class="anthor" v-if="item.creator!=undefined"><span class="by">by</span>{{item.creator.nickname}}</div>
                        <div class="sBottom">
                            <span class="music-logo"></span>
                            <span class="music-num">{{item.playCount}}</span>
                            <span class="music-play" @click="playMusic(item.id)"></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
export default {
    name: 'playList',
    data() {
        return {
            boxShow: false,
            list: [],
            listFalg: 'hot',
            catlist: [],
            cactName: '全部'
        }
    },
    mounted() {
        this.cactName = this.$route.params.type;
        this.getHotList('hot', this.$route.params.type);
        this.getCatlist();
    },
    methods: {
        ...mapMutations([
            'setPlayInfo', 'setPlayList'
        ]),
        getHotList(order, cat) {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/top/playlist', {
                params: {
                    limit: 35,
                    order: order,
                    cat: cat
                }
            }).then(function (res) {
                vm.list = res.data.playlists;
                vm.boxShow = false;
            }).catch(function (res) {
                console.log(res);
            });
        },
        getCatlist() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/playlist/catlist', {
                params: {}
            }).then(function (res) {
                vm.catlist = res.data.sub;
            }).catch(function (res) {
                console.log(res);
            });
        },
        playMusic(id) {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/playlist/detail', {
                params: {
                    id: id
                }
            }).then(function (res) {
                let tracks = res.data.playlist.tracks;
                vm.setPlayList({
                    list: tracks
                });
                let item = tracks[0];
                vm.setPlayInfo({
                    index: 0,
                    onplayflag: true,
                    duration: item.dt / 1000,
                    currentTime: 0,
                    name: item.name,
                    singer: item.ar[0].name,
                    picurl: item.al.picUrl,
                    musicurl: 'https://music.163.com/song/media/outer/url?id=' + item.id + '.mp3',
                    curlength: 0
                });
                vm.getLrc(item.id);
            }).catch(function (res) {
                console.log(res);
            });
        },
        getLrc(id) {
            let vm = this;
            axios.get('https://api.bzqll.com/music/netease/lrc', {
                params: {
                    key: 579621905,
                    id: id
                }
            }).then(function (res) {
                let lrc = res.data;
                // vm.parseLrc(lrc);
                vm.setPlayInfo({
                    lrc: vm.parseLrc(lrc)
                });
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
        }
    }
}
</script>

<style lang="less" scoped>
@import "./playList.less";
</style>
