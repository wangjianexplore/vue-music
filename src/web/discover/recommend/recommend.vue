<template>
    <div class="main-music">
        <discoverTag></discoverTag>
        <el-row class="row-swiper" :style='{background:"url("+bgColor+")"}'>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in banners" :key="index+item.targetId"><img v-lazy="item.picUrl" alt="" /></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="dowmload" @click="test(1,2)">
                    <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
                </div>
            </div>
        </el-row>
        <div class="songList">
            <div class="songMain">
                <div class="songRight">
                    <div class="rightMain">
                        <div class="r-wrap r-wrap2">
                            <div class="r-header">
                                <span class="hot">热门推荐</span>
                                <ul>
                                    <li @click="$router.push('/discover/playList/华语')">华语</li>
                                    <span class="line">|</span>
                                    <li @click="$router.push('/discover/playList/流行')">流行</li>
                                    <span class="line">|</span>
                                    <li @click="$router.push('/discover/playList/摇滚')">摇滚</li>
                                    <span class="line">|</span>
                                    <li @click="$router.push('/discover/playList/民谣')">民谣</li>
                                    <span class="line">|</span>
                                    <li @click="$router.push('/discover/playList/电子')">电子</li>
                                </ul>
                                <span class="more" @click="$router.push('/discover/playList/全部')">更多</span>
                            </div>
                            <div class="r-bottom">
                                <el-row class="row-song">
                                    <el-col :span="6" class="song-col" v-for="(item,index) in rList" :key="index">
                                        <img @click="$router.push('/listDetails/' + item.id)" v-lazy="item.picUrl" alt="">
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
                        <div class="r-wrap">
                            <div class="r-header">
                                <span class="hot">个性化推荐</span>
                            </div>
                            <div class="r-bottom">
                                <el-row class="row-song">
                                    <el-col :span="6" class="song-col">
                                        <div class="date">
                                            <div class="week">星期一</div>
                                            <div class="date-num">7</div>
                                        </div>
                                        <div class="songTitle">每日歌曲推荐</div>
                                        <div class="song-detail">根据你的口味生成，每天6:00更新</div>
                                    </el-col>
                                    <el-col :span="6" class="song-col" v-for="(item,index) in perList" :key="index">
                                        <img v-lazy="item.picUrl" @click="$router.push('/listDetails/' + item.id)" alt="">
                                        <div class="songTitle" @click="$router.push('/listDetails/' + item.id)">{{item.name}}</div>
                                        <div class="song-detail">{{item.copywriter}}</div>
                                        <div class="sBottom">
                                            <span class="music-logo"></span>
                                            <span class="music-num">{{item.playCount}}</span>
                                            <span class="music-play" @click="$router.push('/listDetails/' + item.id)"></span>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div class="r-wrap">
                            <div class="r-header">
                                <span class="hot">新碟上架</span>
                                <span class="more">更多</span>
                            </div>
                            <div class="r-bottom r-bottom2">
                                <div class="swiper-container2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <el-row class="swiper2-row">
                                                <el-col v-for="(item,index) in newList1" :key="index">
                                                    <div class="bg" @click="$router.push('/listDetails/' + item.id)"></div>
                                                    <img class="img_new" v-lazy="item.picUrl" alt="" />
                                                    <div class="text01">{{item.name}}</div>
                                                    <div class="text02">{{item.artist.name}}</div>
                                                    <div class="shadow"></div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                        <div class="swiper-slide">
                                            <el-row class="swiper2-row">
                                                <el-col v-for="(item,index) in newList2" :key="index">
                                                    <div class="bg" @click="$router.push('/listDetails/' + item.id)"></div>
                                                    <img class="img_new" v-lazy="item.picUrl" alt="" />
                                                    <div class="text01">{{item.name}}</div>
                                                    <div class="text02">{{item.company}}</div>
                                                    <div class="shadow"></div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                        <div class="r-wrap list-board">
                            <div class="r-header">
                                <span class="hot">榜单</span>
                                <span class="more">更多</span>
                            </div>
                            <div class="r-bottom r-bottom3">
                                <el-row>
                                    <el-col :span="8">
                                        <div class="board-top">
                                            <img v-lazy="hotSongUrl" alt="">
                                            <div class="board-right">
                                                <div class="playbtn" @click="playMusic(sendMusicInfo(0,hotSong[0].id,hotSong[0].name,hotSong[0].ar[0].name,hotSong[0].al.picUrl,hotSong,true))"></div>
                                                <div>云音乐飙升榜</div>
                                                <div class="shouc"></div>
                                            </div>
                                        </div>
                                        <ol>
                                            <li class="board-li" v-for="(item,index) in hotSong" :key="index+item.id">
                                                <span class="board-num" v-bind:class="{num_red:index<=2}">{{index+1}}</span>
                                                <span class="board-title">{{item.name}}</span>
                                                <div class="per">
                                                    <span class="per_play" @click="playMusic(sendMusicInfo(index,item.id,item.name,item.ar[0].name,item.al.picUrl,hotSong,false,hotSong[index]))"></span>
                                                    <span class="per_add"></span>
                                                    <span class="per_sc"></span>
                                                </div>
                                            </li>
                                            <li class="board-li">
                                                <span class="board-more" @click="$router.push('/discover/topList/3')">查看全部></span>
                                            </li>
                                        </ol>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="board-top">
                                            <img v-lazy="newSongUrl" alt="">
                                            <div class="board-right">
                                                <div class="playbtn" @click="playMusic(sendMusicInfo(0,newSong[0].id,newSong[0].name,newSong[0].ar[0].name,newSong[0].al.picUrl,newSong,true))"></div>
                                                <div>云音乐新歌榜</div>
                                                <div class="shouc"></div>
                                            </div>
                                        </div>
                                        <ol>
                                            <li class="board-li" v-for="(item,index) in newSong" :key="index+item.id">
                                                <span class="board-num" v-bind:class="{num_red:index<=2}">{{index+1}}</span>
                                                <span class="board-title">{{item.name}}</span>
                                                <div class="per">
                                                    <span class="per_play" @click="playMusic(sendMusicInfo(index,item.id,item.name,item.ar[0].name,item.al.picUrl,newSong,false,newSong[index]))"></span>
                                                    <span class="per_add"></span>
                                                    <span class="per_sc"></span>
                                                </div>
                                            </li>
                                            <li class="board-li">
                                                <span class="board-more" @click="$router.push('/discover/topList/0')">查看全部></span>
                                            </li>
                                        </ol>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="board-top">
                                            <img v-lazy="nativeSongUrl" alt="">
                                            <div class="board-right">
                                                <div class="playbtn" @click="playMusic(sendMusicInfo(0,nativeSong[0].id,nativeSong[0].name,nativeSong[0].ar[0].name,nativeSong[0].al.picUrl,nativeSong,true))"></div>
                                                <div>网易原创歌曲榜</div>
                                                <div class="shouc"></div>
                                            </div>
                                        </div>
                                        <ol>
                                            <li class="board-li" v-for="(item,index) in nativeSong" :key="index+item.id">
                                                <span class="board-num" v-bind:class="{num_red:index<=2}">{{index+1}}</span>
                                                <span class="board-title">{{item.name}}</span>
                                                <div class="per">
                                                    <span class="per_play" @click="playMusic(sendMusicInfo(index,item.id,item.name,item.ar[0].name,item.al.picUrl,nativeSong,false,nativeSong[index]))"></span>
                                                    <span class="per_add"></span>
                                                    <span class="per_sc"></span>
                                                </div>
                                            </li>
                                            <li class="board-li">
                                                <span class="board-more" @click="$router.push('/discover/topList/2')">查看全部></span>
                                            </li>
                                        </ol>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="songLeft">
                    <div class="left-box">
                        <div class="lb-top">
                            <div class="left-head">
                                <img width="86" height="86" src="http://p1.music.126.net/kQC7d6YwMAE23KtFoUXp_Q==/18899505369927830.jpg?param=180y180" alt="">
                            </div>
                            <div class="right-name">
                                <div class="name">那一岸边</div>
                                <div class="level">8<i class="icn2"></i></div>
                                <div class="button"><i class="i-btn">签到</i></div>
                            </div>
                        </div>
                        <div class="lb-bottom">
                            <ul>
                                <li>
                                    <p class="p-num">0</p>
                                    <p class="p-txt">动态</p>
                                </li>
                                <li>
                                    <p class="p-num">10</p>
                                    <p class="p-txt">关注</p>
                                </li>
                                <li>
                                    <p class="p-num">1</p>
                                    <p class="p-txt">粉丝</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="left-singer">
                        <div class="singer-top">
                            <div class="rz-singer">入住歌手</div>
                            <div class="more-singer">查看全部></div>
                        </div>
                        <div class="singer-list">
                            <ul>
                                <li v-for="(item, index) in rzSinger" @click="$router.push('/user/home/'+item.accountId)" :key="index + item.id">
                                    <div class="singer-img">
                                        <img v-lazy="item.picUrl" alt="">
                                    </div>
                                    <div class="singer-info">
                                        <p class="singer-name">{{item.name}}</p>
                                        <p class="singer-tl">音乐人</p>
                                    </div>
                                </li>
                                <li class="for-singer">申请成为网易音乐人</li>
                            </ul>
                        </div>
                    </div>
                    <div class="left-anchor">
                        <div class="hot-anchor">热门主播</div>
                        <div class="anchor-li">
                            <ul>
                                <li>
                                    <div class="anchor-img">
                                        <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name">陈立</p>
                                        <p class="anchor-tl">心理学家、美食家陈立教授</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img">
                                        <img src="http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name">DJ艳秋</p>
                                        <p class="anchor-tl">著名音乐节目主持人</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img">
                                        <img src="http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name">国家大剧院古典音乐频道</p>
                                        <p class="anchor-tl">国家大剧院古典音乐官方</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img">
                                        <img src="http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name">DJ晓苏</p>
                                        <p class="anchor-tl">独立DJ，CRI环球旅游广播特邀DJ</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img">
                                        <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name">陈立</p>
                                        <p class="anchor-tl">心理学家、美食家陈立教授</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import Swiper from 'swiper';
import axios from 'axios';
export default {
    name: 'discover',
    data() {
        return {
            liNum: 1,
            bgColor: '',
            rList: [],
            perList: [],
            newList1: [],
            newList2: [],
            hotSong: [],
            newSong: [],
            nativeSong: [],
            hotSongUrl: [],
            newSongUrl: [],
            nativeSongUrl: [],
            rzSinger: [],
            banners: [],
            errorTime: 0
        }
    },
    mounted() {
        this.getBanner();
        this.swiperS();
        this.recommendList();
        this.album();
        this.getArtist();
        this.songList(3);
        this.songList(0);
        this.songList(2);
    },
    watch: {
        errorTime: function (val) {
            if (val > 4) {
                this.open();
            }
        }
    },
    methods: {
        ...mapActions([
            'playMusic'
        ]),
        open() {
            this.$alert('抱歉，接口挂掉了！！', {
                confirmButtonText: '确定',
                center: true,
                showClose: false
            });
        },
        swiperF() {
            let vm = this;
            vm.$nextTick(() => {
                var swiper = new Swiper('.swiper-container', {
                    effect: 'fade',
                    loop: true,
                    simulateTouch: false,//禁止鼠标模拟
                    speed: 1000,
                    autoplay: {
                        delay: 5000//1秒切换一次
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on: {
                        transitionStart: function () {
                            let index = (this.activeIndex - 1) % 9;
                            vm.bgColor = vm.banners[index].backgroundUrl;
                        },
                    }
                });
            });
        },
        swiperS() {
            let vm = this;
            var swiper = new Swiper('.swiper-container2', {
                // loop: true,
                simulateTouch: false,//禁止鼠标模拟
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        },
        // 热门推荐
        recommendList() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/personalized').then(function (res) {
                let arr = res.data.result;
                vm.rList = arr.slice(0, 8);
                vm.perList = arr.slice(8, 11);
            }).catch(function (error) {
                vm.errorTime++;
                console.log(error);
            });
        },
        // 新碟上架
        album() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/top/album', {
                params: {
                    offset: 0,
                    limit: 10
                }
            }).then(function (res) {
                let arr = res.data.albums;
                vm.newList1 = arr.slice(0, 5);
                vm.newList2 = arr.slice(5, 10);
            }).catch(function (error) {
                vm.errorTime++;
                console.log(error);
            });
        },
        // banner
        getBanner() {
            let vm = this;
            let promise = new Promise((resolve, reject) => {
                axios.get('http://musicapi.leanapp.cn/banner', {
                    params: {
                        type: 0
                    }
                }).then(function (res) {
                    vm.banners = res.data.banners;
                    vm.bgColor = vm.banners[0].backgroundUrl;
                    resolve(true);
                }).catch(function (error) {
                    vm.errorTime++;
                    console.log(error);
                });
            });
            promise.then(function (data) {
                if (data) {
                    vm.swiperF();
                }
            });
        },
        songList(id) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/top/list', {
                params: {
                    idx: id
                }
            }).then(function (res) {
                let data = res.data.playlist;
                if (id === 3) {
                    vm.hotSong = data.tracks.slice(0, 10);
                    vm.hotSongUrl = data.coverImgUrl;
                } else if (id === 0) {
                    vm.newSong = data.tracks.slice(0, 10);
                    vm.newSongUrl = data.coverImgUrl;
                } else if (id === 2) {
                    vm.nativeSong = data.tracks.slice(0, 10);
                    vm.nativeSongUrl = data.coverImgUrl;
                }
            }).catch(function (error) {
                vm.errorTime++;
                console.log(error);
            });
        },
        getArtist() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/artist/list', {
                params: {
                    cat: 5001,
                    limit: 5
                }
            }).then(function (res) {
                vm.rzSinger = res.data.artists
            }).catch(function (error) {
                vm.errorTime++;
                console.log(error);
            });
        }
    }
}
</script>
<style lang="less">
@import "swiper/dist/css/swiper.min.css";
.swiper-pagination-bullets {
    bottom: 5px !important;
}
.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background: url(../../../assets/banner.png) no-repeat;
    background-position: 3px -343px;
    opacity: 1;
    &:focus {
        outline: none;
    }
}
.swiper-pagination-bullet-active {
    background-position: -16px -343px;
}
.el-message-box__header {
    padding-top: 15px !important;
}
</style>
<style lang="less" scoped>
@import "./recommend.less";
</style>

