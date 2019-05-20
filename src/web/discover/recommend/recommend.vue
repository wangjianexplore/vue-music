<template>
    <div class="main-music">
        <discoverTag></discoverTag>
        <el-row class="row-swiper" :style="{backgroundColor:bgColor}">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../../assets/main01.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main02.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main03.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main04.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main05.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main06.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main07.jpg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../../assets/main08.jpg" alt="" /></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="dowmload">
                    <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
                </div>
            </div>
        </el-row>
        <div class="songList">
            <div class="songMain">
                <div class="songRight">
                    <div class="rightMain">
                        <div class="r-wrap">
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
                                        <img @click="$router.push('/listDetails/' + item.id)" :src="item.picUrl" alt="">
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
                                        <img :src="item.picUrl" @click="$router.push('/listDetails/' + item.id)" alt="">
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
                                                    <img class="img_new" :src="item.picUrl" alt="" />
                                                    <div class="text01">{{item.name}}</div>
                                                    <div class="text02">{{item.company}}</div>
                                                    <div class="shadow"></div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                        <div class="swiper-slide">
                                            <el-row class="swiper2-row">
                                                <el-col v-for="(item,index) in newList2" :key="index">
                                                    <img class="img_new" :src="item.picUrl" alt="" />
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
                                            <img src="https://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="">
                                            <div class="board-right">
                                                <div>云音乐飙升榜</div>
                                            </div>
                                        </div>
                                        <ol>
                                            <li class="board-li" v-for="(item,index) in hotSong" :key="index">
                                                <span class="board-num" v-bind:class="{num_red:index<=2}">{{index+1}}</span>
                                                <span class="board-title">{{item.name}}</span>
                                            </li>
                                            <li class="board-li">
                                                <span class="board-more">查看全部></span>
                                            </li>
                                        </ol>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="board-top">
                                            <img src="https://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" alt="">
                                            <div class="board-right">
                                                <div>云音乐新歌榜</div>
                                            </div>
                                        </div>
                                        <ol>
                                            <li class="board-li" v-for="(item,index) in newSong" :key="index">
                                                <span class="board-num" v-bind:class="{num_red:index<=2}">{{index+1}}</span>
                                                <span class="board-title">{{item.name}}</span>
                                            </li>
                                            <li class="board-li">
                                                <span class="board-more">查看全部></span>
                                            </li>
                                        </ol>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="board-top">
                                            <img src="https://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" alt="">
                                            <div class="board-right">
                                                <div>网易原创歌曲榜</div>
                                            </div>
                                        </div>
                                        <ol>
                                            <li class="board-li" v-for="(item,index) in nativeSong" :key="index">
                                                <span class="board-num" v-bind:class="{num_red:index<=2}">{{index+1}}</span>
                                                <span class="board-title">{{item.name}}</span>
                                            </li>
                                            <li class="board-li">
                                                <span class="board-more">查看全部></span>
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
                                <img width="86" height="86" src="https://p1.music.126.net/kQC7d6YwMAE23KtFoUXp_Q==/18899505369927830.jpg?param=180y180" alt="">
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
                                <li v-for="(item, index) in rzSinger" @click="$router.push('/user')" :key="index + item.id">
                                    <div class="singer-img">
                                        <img :src="item.picUrl" alt="">
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
                                    <div class="anchor-img" @click="$router.push('/user')">
                                        <img src="https://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name" @click="$router.push('/user')">陈立</p>
                                        <p class="anchor-tl">心理学家、美食家陈立教授</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img" @click="$router.push('/user')">
                                        <img src="https://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name" @click="$router.push('/user')">DJ艳秋</p>
                                        <p class="anchor-tl">著名音乐节目主持人</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img" @click="$router.push('/user')">
                                        <img src="https://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name" @click="$router.push('/user')">国家大剧院古典音乐频道</p>
                                        <p class="anchor-tl">国家大剧院古典音乐官方</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img" @click="$router.push('/user')">
                                        <img src="https://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name" @click="$router.push('/user')">DJ晓苏</p>
                                        <p class="anchor-tl">独立DJ，CRI环球旅游广播特邀DJ</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="anchor-img" @click="$router.push('/user')">
                                        <img src="https://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="">
                                    </div>
                                    <div class="anchor-info">
                                        <p class="anchor-name" @click="$router.push('/user')">陈立</p>
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
import Swiper from 'swiper';
import axios from 'axios';
export default {
    name: 'discover',
    data() {
        return {
            liNum: 1,
            bgColor: '#8F9F9E',
            rList: [],
            perList: [],
            newList1: [],
            newList2: [],
            hotSong: [],
            newSong: [],
            nativeSong: [],
            rzSinger: []
        }
    },
    mounted() {
        this.swiperF();
        this.swiperS();
        this.recommendList();
        this.album();
        this.getArtist();
        this.songList(19723756, 1);
        this.songList(3779629, 2);
        this.songList(2884035, 3);
    },
    methods: {
        swiperF() {
            let vm = this;
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
                        if (this.activeIndex === 1) {
                            vm.bgColor = '#8F9F9E';
                        } else if (this.activeIndex === 2) {
                            vm.bgColor = '#b3ecff';
                        } else if (this.activeIndex === 3) {
                            vm.bgColor = '#0F1012';
                        } else if (this.activeIndex === 4) {
                            vm.bgColor = '#0F1012';
                        } else if (this.activeIndex === 5) {
                            vm.bgColor = '#E4E9D3';
                        } else if (this.activeIndex === 6) {
                            vm.bgColor = '#0F190E';
                        } else if (this.activeIndex === 7) {
                            vm.bgColor = '#D80E00';
                        } else if (this.activeIndex === 8) {
                            vm.bgColor = '#000';
                        } else if (this.activeIndex === 9) {
                            vm.bgColor = '#8F9F9E';
                        }
                    },
                }
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
            axios.get('https://musicapi.leanapp.cn/personalized').then(function (res) {
                let arr = res.data.result;
                vm.rList = arr.slice(0, 8);
                vm.perList = arr.slice(8, 11);
            }).catch(function (error) {
                console.log(error);
            });
        },
        // 新碟上架
        album() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/top/album', {
                params: {
                    offset: 0,
                    limit: 10
                }
            }).then(function (res) {
                let arr = res.data.albums;
                vm.newList1 = arr.slice(0, 5);
                vm.newList2 = arr.slice(5, 10);
            }).catch(function (error) {
                console.log(error);
            });
        },
        songList(id, type) {
            let vm = this;
            axios.get('https://api.itooi.cn/music/netease/songList', {
                params: {
                    key: 579621905,
                    id: id,
                    limit: 10,
                    offset: 0
                }
            }).then(function (res) {
                let data = res.data.data.songs;
                if (type === 1) {
                    vm.hotSong = data.slice(0, 10);
                } else if (type === 2) {
                    vm.newSong = data.slice(0, 10);
                } else if (type === 3) {
                    vm.nativeSong = data.slice(0, 10);
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        getArtist() {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/artist/list', {
                params: {
                    cat: 5001,
                    limit: 5
                }
            }).then(function (res) {
                vm.rzSinger = res.data.artists
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "swiper/dist/css/swiper.min.css";
@import "./recommend.less";
</style>

