<template>
    <div class="artist">
        <discoverTag :liNum="5"></discoverTag>
        <div class="art_main">
            <div class="main_l">
                <div class="g-wrap">
                    <div class="items">
                        <h2 class="tit">推荐</h2>
                        <ul class="left_ul">
                            <li @click="selCatSinger('','推荐歌手',false)" :class="{ac_li:title=='推荐歌手'}"><span class="dot"></span>推荐歌手</li>
                            <li @click="selCatSinger(5001,'入驻歌手')" :class="{ac_li:title=='入驻歌手'}"><span class="dot"></span>入驻歌手</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">华语</h2>
                        <ul class="left_ul">
                            <li @click="selCatSinger(1001,'华语男歌手')" :class="{ac_li:title=='华语男歌手'}"><span class="dot"></span>华语男歌手</li>
                            <li @click="selCatSinger(1002,'华语女歌手')" :class="{ac_li:title=='华语女歌手'}"><span class="dot"></span>华语女歌手</li>
                            <li @click="selCatSinger(1003,'华语组合/乐队')" :class="{ac_li:title=='华语组合/乐队'}"><span class="dot"></span>华语组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">欧美</h2>
                        <ul class="left_ul">
                            <li @click="selCatSinger(2001,'欧美男歌手')" :class="{ac_li:title=='欧美男歌手'}"><span class="dot"></span>欧美男歌手</li>
                            <li @click="selCatSinger(2002,'欧美女歌手')" :class="{ac_li:title=='欧美女歌手'}"><span class="dot"></span>欧美女歌手</li>
                            <li @click="selCatSinger(2003,'欧美组合/乐队')" :class="{ac_li:title=='欧美组合/乐队'}"><span class="dot"></span>欧美组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">日本</h2>
                        <ul class="left_ul">
                            <li @click="selCatSinger(6001,'日本男歌手')" :class="{ac_li:title=='日本男歌手'}"><span class="dot"></span>日本男歌手</li>
                            <li @click="selCatSinger(6002,'日本女歌手')" :class="{ac_li:title=='日本女歌手'}"><span class="dot"></span>日本女歌手</li>
                            <li @click="selCatSinger(6003,'日本组合/乐队')" :class="{ac_li:title=='日本组合/乐队'}"><span class="dot"></span>日本组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">韩国</h2>
                        <ul class="left_ul">
                            <li @click="selCatSinger(7001,'韩国男歌手')" :class="{ac_li:title=='韩国男歌手'}"><span class="dot"></span>韩国男歌手</li>
                            <li @click="selCatSinger(7002,'韩国女歌手')" :class="{ac_li:title=='韩国女歌手'}"><span class="dot"></span>韩国女歌手</li>
                            <li @click="selCatSinger(7003,'韩国组合/乐队')" :class="{ac_li:title=='韩国组合/乐队'}"><span class="dot"></span>韩国组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">其他</h2>
                        <ul class="left_ul">
                            <li @click="selCatSinger(4001,'其他男歌手')" :class="{ac_li:title=='其他男歌手'}"><span class="dot"></span>其他男歌手</li>
                            <li @click="selCatSinger(4002,'其他女歌手')" :class="{ac_li:title=='其他女歌手'}"><span class="dot"></span>其他女歌手</li>
                            <li @click="selCatSinger(4003,'其他组合')" :class="{ac_li:title=='其他组合/乐队'}"><span class="dot"></span>其他组合/乐队</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main_r">
                <div class="warp" v-show="!selFlag">
                    <div class="r_top">
                        <h3 class="h3">入驻歌手</h3>
                        <div class="more">更多 ></div>
                    </div>
                    <div class="r_bot">
                        <el-row>
                            <el-col class="el-col03" v-for="item in enterSinger.slice(0,10)" :key="item.accountId">
                                <img @click="$router.push('/artist/'+item.id)" class="img" :src="item.img1v1Url" alt="">
                                <div>
                                    <div class="name" @click="$router.push('/artist/'+item.id)">{{item.name}}</div>
                                    <div class="per" @click="$router.push('/user/home/'+item.accountId)"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="warp" v-show="!selFlag">
                    <div class="r_top">
                        <h3 class="h3">热门歌手</h3>
                        <div class="more">更多 ></div>
                    </div>
                    <div class="r_bot">
                        <el-row>
                            <el-col class="el-col03" v-for="item in hotSinger" :key="item.accountId">
                                <img class="img" @click="$router.push('/artist/'+item.id)" :src="item.img1v1Url" alt="">
                                <div>
                                    <div class="name" @click="$router.push('/artist/'+item.id)">{{item.name}}</div>
                                    <div class="per" @click="$router.push('/user/home/'+item.accountId)"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="warp" v-show="selFlag">
                    <div class="r_top">
                        <h3 class="h3">{{title}}</h3>
                    </div>
                    <div class="r_bot">
                        <el-row>
                            <el-col class="el-col03" v-for="item in selSinger" :key="item.accountId">
                                <img class="img" @click="$router.push('/artist/'+item.id)" v-lazy="item.img1v1Url" alt="">
                                <div>
                                    <div class="name" @click="$router.push('/artist/'+item.id)">{{item.name}}</div>
                                    <div class="per" @click="$router.push('/user/home/'+item.accountId)"></div>
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
export default {
    name: 'artist',
    data() {
        return {
            artist: [],
            enterSinger: [],
            hotSinger: [],
            title: '推荐歌手',
            selSinger: [],
            selFlag: false
        }
    },
    mounted () {
        this.getArtist(5001, 10);
        this.getHotSinger();
    },
    methods: {
        getArtist(cat, num) {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/artist/list', {
                params: {
                    cat: cat,
                    limit: num
                }
            }).then(function (res) {
                if (cat == 5001) {
                    vm.enterSinger = res.data.artists;
                }
                vm.selFlag ? vm.selSinger = res.data.artists : '';
            }).catch(function (error) {
                console.log(error);
            });
        },
        getHotSinger() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/top/artists', {
                params: {
                    offset: 0,
                    limit: 10
                }
            }).then(function (res) {
                vm.hotSinger = res.data.artists;
            }).catch(function (error) {
                console.log(error);
            });
        },
        selCatSinger(cat, tit, selFlag = true) {
            let vm = this;
            vm.title = tit;
            vm.selFlag = selFlag;
            if (selFlag) vm.getArtist(cat, 60);
        }
    }
}
</script>

<style lang="less" scoped>
@import "./artist.less";
.ac_li {
    border: 1px solid #d3d3d3;
    color: #c20c0c;
    border-radius: 3px;
    .dot {
        background-color: #c20c0c!important;
    }
}
</style>
