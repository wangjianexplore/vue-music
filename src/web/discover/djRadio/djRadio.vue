<template>
    <div class="djRadio">
        <discoverTag :liNum="4"></discoverTag>
        <div class="dj-main">
            <div class="dj-wrap">
                <div class="rditype">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <ul>
                                    <li class="el-col1" v-for="(item, index) in djList.slice(0,18)" :key="index">
                                        <div class="img" :style="{background:'url('+item.picWebUrl+')'}"></div>
                                        <div class="txt">{{item.name}}</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="swiper-slide">
                                <ul>
                                    <li class="el-col1" v-for="(item, index) in djList.slice(18)" :key="index">
                                        <div class="img" :style="{background:'url('+item.picWebUrl+')'}"></div>
                                        <div class="txt">{{item.name}}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <div class="rditop">
                    <div class="rdi_l">
                        <div class="rdi_top">
                            <div class="left">推荐节目</div>
                            <div class="right">更多></div>
                        </div>
                        <div class="rdi_bot">
                            <ul>
                                <li v-for="(item, index) in songList" :key="index">
                                    <img class="img" :src="item.img" alt="">
                                    <div class="cnt">
                                        <div class="title">{{item.title}}</div>
                                        <div class="anthor">{{item.author}}</div>
                                    </div>
                                    <div class="cz">{{item.type}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="rdi_r">
                        <div class="rdi_top">
                            <div class="left">节目排行榜</div>
                            <div class="right">更多></div>
                        </div>
                        <div class="rdi_bot">
                            <ul>
                                <li v-for="(item, index) in songList" :key="index">
                                    <img class="img" :src="item.img" alt="">
                                    <div class="cnt cnt2">
                                        <div class="title">{{item.title}}</div>
                                        <div class="anthor">{{item.author}}</div>
                                    </div>
                                    <div class="cz cz2">
                                        <el-progress :percentage="item.percentage" :show-text="false" :stroke-width="8" color="#C5C5C5"></el-progress>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">优秀新电台</div>
                    </div>
                    <div class="rd_list">
                        <ul class="ul">
                            <li class="li">
                                <img src="http://p2.music.126.net/aLF3FJa_AMt6_X0-BdvdZg==/109951163745447984.jpg?param=200y200" class="liimg" alt="">
                                <div class="one">解忧邵帅的解忧小房间。</div>
                                <div class="two textover">热门原创音乐人的创作故事</div>
                            </li>
                            <li class="li">
                                <img src="http://p2.music.126.net/aLF3FJa_AMt6_X0-BdvdZg==/109951163745447984.jpg?param=200y200" class="liimg" alt="">
                                <div class="one">解忧邵帅的解忧小房间。</div>
                                <div class="two textover">热门原创音乐人的创作故事</div>
                            </li>
                            <li class="li">
                                <img src="http://p2.music.126.net/aLF3FJa_AMt6_X0-BdvdZg==/109951163745447984.jpg?param=200y200" class="liimg" alt="">
                                <div class="one">解忧邵帅的解忧小房间。</div>
                                <div class="two textover">热门原创音乐人的创作故事</div>
                            </li>
                            <li class="li">
                                <img src="http://p2.music.126.net/aLF3FJa_AMt6_X0-BdvdZg==/109951163745447984.jpg?param=200y200" class="liimg" alt="">
                                <div class="one">解忧邵帅的解忧小房间。</div>
                                <div class="two textover">热门原创音乐人的创作故事</div>
                            </li>
                            <li class="li">
                                <img src="http://p2.music.126.net/aLF3FJa_AMt6_X0-BdvdZg==/109951163745447984.jpg?param=200y200" class="liimg" alt="">
                                <div class="one">解忧邵帅的解忧小房间。</div>
                                <div class="two textover">热门原创音乐人的创作故事</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">电台排行榜</div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p1.music.126.net/moRaw3RO6GqhHZ5Oe_qD4Q==/109951163197334196.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="per"><em class="em"></em>解忧大白</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p1.music.126.net/moRaw3RO6GqhHZ5Oe_qD4Q==/109951163197334196.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="per"><em class="em"></em>解忧大白</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">音乐故事·电台</div>
                        <div class="right">更多></div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p1.music.126.net/moRaw3RO6GqhHZ5Oe_qD4Q==/109951163197334196.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p1.music.126.net/GdtBGzb16wrcODZIol3rvg==/109951163669619488.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">WILLIAMISM MIXTAPE</div>
                                        <div class="info_2">陈伟霆WILLIAMISM in the air</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="https://p1.music.126.net/JAXmMw2HqPwsOB9gXqwTng==/6627856092806601.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="https://p1.music.126.net/oS3VFvjZtq5mlM0gBldMbw==/109951163184183846.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">WILLIAMISM MIXTAPE</div>
                                        <div class="info_2">陈伟霆WILLIAMISM in the air</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">美文读物·电台</div>
                        <div class="right">更多></div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p1.music.126.net/Urfj_LBMqC2Hmns673lvcA==/18941286812348365.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">洞见官方播客</div>
                                        <div class="info_2">不是每一种观点，都可以叫洞见</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p1.music.126.net/3Fe6rJXZ1TZQWKxJ_OPFug==/109951163695051079.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">轻课朗读</div>
                                        <div class="info_2">让朗读走进生活，使阅读不再功利</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="https://p1.music.126.net/aYmFv3hYC9N_ZtqnaSV-ZQ==/109951163653916525.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="https://p1.music.126.net/DFpihgdwcXXw666hGuWWYw==/109951163677114323.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">郑老师的话</div>
                                        <div class="info_2">用一篇美文扫清一周的疲惫</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">脱口秀·电台</div>
                        <div class="right">更多></div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p2.music.126.net/xKmmWnSGehUq5tsaPPSTWw==/109951163187119570.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">杉果电台</div>
                                        <div class="info_2">真正懂你的游戏脱口秀</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="https://p2.music.126.net/c9YaKZJStOeuk4Acahx3Ng==/109951163078416366.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">粤知一二官方电台</div>
                                        <div class="info_2">听了就会上瘾的粤语脱口秀</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="https://p2.music.126.net/24W4kAaBtm5PS73Dk3O3RA==/109951163546073369.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">老梁的四大名著情商课</div>
                                        <div class="info_2">识人辨事明理，中国式情商教科书</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="https://p2.music.126.net/cEL-igelEKB9c9mwjuWmNg==/109951163559159300.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">潇洒办事处</div>
                                        <div class="info_2">做你最贴心的电台管家</div>
                                    </div>
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
import Swiper from 'swiper';
export default {
    name: 'djRadio',
    data() {
        return {
            songList: [
                {
                    img: 'https://p1.music.126.net/D4yVBSzaWcLo8BMWGRN_iw==/19016053603020354.jpg?param=40x40',
                    title: '心 愿 便 利 T',
                    author: '亲爱的阿彪',
                    type: '创作|翻唱',
                    percentage: 70
                }, {
                    img: 'https://p1.music.126.net/1O9zMhmg5oCGQIrm_vL6cQ==/109951163782395047.jpg?param=40x40',
                    title: '专访【音乐人—川南】',
                    author: '被解放的耳朵',
                    type: '脱口秀',
                    percentage: 60
                }, {
                    img: 'https://p1.music.126.net/xd3IxgkIBhamslu7JCPnVg==/109951163283513298.jpg?param=40x40',
                    title: '一汪《清水河》火了张云雷',
                    author: '苏遥扯闲篇儿',
                    type: '人文历史',
                    percentage: 50
                }, {
                    img: 'https://p1.music.126.net/ldr595h7DfjFLE9VOHTOoA==/109951163783597163.jpg?param=40x40',
                    title: 'YOU（I）',
                    author: '柯西瓜的音乐电台',
                    type: '创作|翻唱',
                    percentage: 30
                }, {
                    img: 'https://p2.music.126.net/mYbAYle0ClnfrIG9lZxqsg==/109951163784388450.jpg?param=40x40',
                    title: '还是当皇上牛！就为皇上的馋口儿而发明---果脯 蜜饯.mp3',
                    author: '知味老京城',
                    type: '旅途|城市',
                    percentage: 60
                }, {
                    img: 'https://p2.music.126.net/Tr8FdWpVWImumIYikszvFg==/109951163783874144.jpg?param=40x40',
                    title: '初恋忏悔手册',
                    author: '世间美好破坏指南',
                    type: '脱口秀',
                    percentage: 40
                }, {
                    img: 'https://p2.music.126.net/dwPnme9sogcnxxhEW0dLWA==/109951163783465916.jpg?param=40x40',
                    title: 'Vol.14年度歌单里有没有另一个你',
                    author: '民谣火锅',
                    type: '音乐故事',
                    percentage: 80
                }, {
                    img: 'https://p2.music.126.net/PDg9wyxzOUOUyDR0diezkQ==/109951163783906005.jpg?param=40x40',
                    title: '夜行千里 VOYAGE AU BOUT DE LA NUIT.mp3',
                    author: 'WILLIAMISM MIXTAPE',
                    type: '音乐故事',
                    percentage: 70
                }, {
                    img: 'https://p2.music.126.net/kY3t7oz-GMPwXiS2cnFUFw==/109951163783778636.jpg?param=40x40',
                    title: '那些历史上著名的玩笑',
                    author: '有趣历史',
                    type: '脱口秀',
                    percentage: 100
                }, {
                    img: 'https://p2.music.126.net/nfrHvzPS2ezvYt4Jv7fENw==/109951163782039326.jpg?param=40x40',
                    title: '友谊地久天长（演奏：陌上花开）',
                    author: '拇指琴の陪伴生活',
                    type: '音乐故事',
                    percentage: 20
                }
            ],
            djList: [],
            recomList: []
        }
    },
    mounted() {
        this.getDj();
        this.getRecnm();
        this.swiperS();
    },
    methods: {
        getDj() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/dj/catelist').then(function (res) {
                vm.djList = res.data.categories;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getRecnm() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/program/recommend').then(function (res) {
                vm.recomList = res.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getRecnmType() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/program/recommend').then(function (res) {
                vm.recomList = res.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        swiperS() {
            let vm = this;
            var swiper = new Swiper('.swiper-container', {
                // loop: true,
                simulateTouch: false,//禁止鼠标模拟
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "./djRadio.less";
</style>
<style lang="less">
@import "swiper/dist/css/swiper.min.css";
.el-progress-bar__outer {
    background-color: #dedede;
}
</style>

