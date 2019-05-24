<template>
    <div class="artist">
        <page-header></page-header>
        <div class="artmain">
            <div class="art_left">
                <div class="main">
                    <div class="title">
                        <h2 class="h2">{{artist.name}}</h2>
                        <h3 class="h3">{{alias}}</h3>
                    </div>
                    <img width="100%" height="300" :src="artist.picUrl" alt="">
                    <div class="mask"></div>
                    <!-- <span class="art_btn1" @click="$router.push('/user/home/'+artist.accountId)"></span> -->
                    <span class="art_btn2"></span>
                </div>
                <ul class="left_ul">
                    <li class="left_li" :class="{li_active:liflag==1}" @click="liflag=1">热门作品</li>
                    <li class="left_li" :class="{li_active:liflag==2}" @click="liflag=2">所有专辑</li>
                    <li class="left_li" :class="{li_active:liflag==3}" @click="liflag=3">相关MV</li>
                    <li class="left_li" :class="{li_active:liflag==4}" @click="liflag=4">艺人介绍</li>
                </ul>
                <div class="ul_main">
                    <div class="item" v-show="liflag==1">
                        <div class="item_btn">
                            <ul class="ul01">
                                <li class="li_one" @click="playMusic(sendMusicInfo(0,hotSongs[0].id,hotSongs[0].name,hotSongs[0].ar[0].name,hotSongs[0].al.picUrl,hotSongs,true))">
                                    播放
                                </li>
                                <li class="li_two"></li>
                                <li class="li_three">收藏热门{{hotSongs.length}}</li>
                            </ul>
                        </div>
                        <songList :tracks="hotSongs"></songList>
                    </div>
                    <div class="item" v-show="liflag==2">
                        <ul class="ul02">
                            <li class="li02" v-for="(item, index) in hotAlbums" :key="index">
                                <div class="cover">
                                    <img width="120" height="120" :src="item.picUrl" alt="">
                                    <div class="cover_mask" @click="$router.push('/listDetails/'+item.id)"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02" @click="$router.push('/listDetails/'+item.id)">{{item.name}}</p>
                                <p class="p02_date">{{formatDate(item.publishTime, 'yyyy.MM.dd')}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="item" v-show="liflag==3">
                        <ul class="ul03">
                            <li class="li03" v-for="(item, index) in mvs" :key="index+item.name">
                                <div class="cover03">
                                    <img width="137" height="103" :src="item.imgurl" alt="">
                                    <div class="mask03"></div>
                                    <div class="play03"></div>
                                </div>
                                <p class="dec">{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="item" v-show="liflag==4">
                        <div class="artdesc">
                            <h2>
                                <i>&nbsp;</i>
                                {{artist.name}}简介
                            </h2>
                            <p v-html="artist.briefDesc" style="text-indent:2em"></p>
                            <div v-for="(item, index) in introduction" :key="index">
                                <h2>{{item.ti}}</h2>
                                <p v-html="item.txt.replace(/\n/g, '<br>')"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="art_right"></div>
        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import pageHeader from '../pageHeader/pageHeader.vue';
import pageFooter from '../pageFooter/pageFooter.vue';
import axios from 'axios';
export default {
    name: 'user',
    components: {
        pageHeader,
        pageFooter
    },
    data() {
        return {
            liflag: 1,
            hotSongs: [],
            artist: {},
            hotAlbums: [],
            id: this.$route.params.id,
            mvs: [],
            alias: '',
            introduction: []
        }
    },
    mounted() {
        this.getSingerInfo();
        this.getAlbum();
        this.getMv();
        this.getDesc();
    },
    methods: {
        ...mapActions([
            'playMusic'
        ]),
        getSingerInfo(id) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/artists', {
                params: {
                    id: vm.id
                }
            }).then(function (res) {
                let data = res.data;
                vm.hotSongs = data.hotSongs;
                vm.artist = data.artist;
                vm.alias = vm.artist.alias.join(';');
            }).catch(function (error) {
                console.log(error);
            });
        },
        getDesc() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/artist/desc', {
                params: {
                    id: vm.id
                }
            }).then(function (res) {
                let data = res.data;
                vm.introduction = data.introduction;
                // vm.hotSongs = data.hotSongs;
                // vm.artist = data.artist;
                // vm.alias = vm.artist.alias.join(';');
            }).catch(function (error) {
                console.log(error);
            });
        },
        getAlbum() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/artist/album', {
                params: {
                    id: vm.id,
                    limit: 12
                }
            }).then(function (res) {
                let data = res.data;
                vm.hotAlbums = data.hotAlbums;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getMv() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/artist/mv', {
                params: {
                    id: vm.id
                }
            }).then(function (res) {
                let data = res.data;
                vm.mvs = data.mvs;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
<style lang="less" scoped>
@import "./artist.less";
</style>
<style lang="less">
.artist {
    .sl_head,
    .top {
        display: none;
    }
    .s_list {
        border-right: none !important;
        border-left: none !important;
        .sl_bot {
            border-bottom: none !important;
        }
    }
}
</style>