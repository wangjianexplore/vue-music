<template>
    <div class="artist">
        <page-header></page-header>
        <div class="artmain">
            <div class="art_left">
                <div class="main">
                    <div class="title">
                        <h2 class="h2">张惠妹</h2>
                        <h3 class="h3">aMEI;阿密特</h3>
                    </div>
                    <img width="100%" src="https://p3.music.126.net/-JxOlVRUl3OFqNkCIu9dlw==/678398674363509.jpg?param=640y300" alt="">
                    <div class="mask"></div>
                    <span class="art_btn1" @click="$router.push('/user')"></span>
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
                                <li class="li_one" @click="playMusic()">
                                    播放
                                </li>
                                <li class="li_two"></li>
                                <li class="li_three">收藏热门50</li>
                            </ul>
                        </div>
                        <songList :tracks="hotSongs"></songList>
                    </div>
                    <div class="item" v-show="liflag==2">
                        <ul class="ul02">
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                            <li class="li02">
                                <div class="cover">
                                    <img src="https://p4.music.126.net/NlvvmjWcrpvIKY3vs-tPYA==/109951163559485453.jpg?param=120y120" alt="">
                                    <div class="cover_mask"></div>
                                    <div class="play02"></div>
                                </div>
                                <p class="p02">双影</p>
                                <p class="p02_date">2018.8.20</p>
                            </li>
                        </ul>
                    </div>
                    <div class="item" v-show="liflag==3">
                        <ul class="ul03">
                            <li class="li03">
                                <div class="cover03">
                                    <img src="https://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103" alt="">
                                    <div class="mask03"></div>
                                    <div class="play03"></div>
                                </div>
                                <p class="dec">If Only</p>
                            </li>
                            <li class="li03">
                                <div class="cover03">
                                    <img src="https://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103" alt="">
                                    <div class="mask03"></div>
                                    <div class="play03"></div>
                                </div>
                                <p class="dec">If Only</p>
                            </li>
                            <li class="li03">
                                <div class="cover03">
                                    <img src="https://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103" alt="">
                                    <div class="mask03"></div>
                                    <div class="play03"></div>
                                </div>
                                <p class="dec">If Only</p>
                            </li>
                            <li class="li03">
                                <div class="cover03">
                                    <img src="https://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103" alt="">
                                    <div class="mask03"></div>
                                    <div class="play03"></div>
                                </div>
                                <p class="dec">If Only</p>
                            </li>
                            <li class="li03">
                                <div class="cover03">
                                    <img src="https://p1.music.126.net/m_Rd7_euILOFaXa5LMesWw==/109951163573215176.jpg?param=137y103" alt="">
                                    <div class="mask03"></div>
                                    <div class="play03"></div>
                                </div>
                                <p class="dec">If Only</p>
                            </li>
                        </ul>
                    </div>
                    <div class="item" v-show="liflag==4">
                        <div class="artdesc">
                            <h2>
                                <i>&nbsp;</i>
                                张惠妹简介
                            </h2>
                            <p>
                                中国台湾著名女歌手，亚洲流行歌坛重量级天后，台湾原住民歌手。张惠妹于华人世界名气极高，于海外（尤美、日等地）也有一定的知名度，已囊括多项华语圈重要的音乐奖项。也是台湾首位接受美国CNN专访的歌手（并且在2011年第二度接受此媒体《Talk Asia》节目专访）。阿妹在1996年三月被著名台湾音乐人陈志远、陈复明发现并签约丰华唱片。并在同年7月在带自己入行的恩师张雨生的《两伊战争－红色热情》专辑中与张雨生男女对唱《最爱的人伤我最深》。同年12月13日，张惠妹在张雨生的协助下发行第一张个人专辑《姐妹》。1998年 举办第一场个人大型户外售票演唱会“妹力四射”，创下台湾歌手有史以来最快举行大型演唱会的纪录。2009年发行的《阿密特》专辑至今仍是金曲奖史上获得最大成功的作品，曾于第21届时擒下包括专辑、制作人、歌手等六项大奖。代表作品：《姐妹》、《我可以抱你吗》、《记得》、《火》、《如果你也听说》、《掉了》、《我最亲爱的》。
                            </p>
                            <h2>
                                音乐专辑
                            </h2>
                            <p class="z-indent">▪&nbsp;阿密特&nbsp;( 2009.6.26)<br>▪&nbsp;歌声妹影&nbsp;( 2000.1.1)<br>▪&nbsp;妹力最精选&nbsp;( 2002.10.1)<br>▪&nbsp;妹力新世纪&nbsp;( 1999.12.28)<br>▪&nbsp;star&nbsp;( 2007.8.3)<br>▪&nbsp;我要快乐&nbsp;( 2006.2.17)<br>▪&nbsp;也许明天&nbsp;( 2004.9.21)<br>▪&nbsp;勇敢&nbsp;( 2003.6.27)<br>▪&nbsp;真实&nbsp;( 2001.10.29)<br>▪&nbsp;旅程&nbsp;( 2001.9.7)<br>▪&nbsp;不顾一切&nbsp;( 2000.12.5)<br>▪&nbsp;妹力四射&nbsp;( 1997.12.30)<br>▪&nbsp;姐妹&nbsp;( 1996.12.13)&nbsp;<br>▪发烧&nbsp;( 2002.8.30)<br>▪&nbsp;你在看我吗&nbsp;( 2011.4.23)<br>▪&nbsp;我可以抱你吗？爱人&nbsp;( 1999.6.9)<br>▪&nbsp;The Original&nbsp;( 2004.4.2)<br>▪&nbsp;Bad Boy&nbsp;( 1997.6.11)<br>▪&nbsp;A-mei in PUB&nbsp;( 2001.9.7)</p>
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
            hotSongs: []
        }
    },
    mounted() {
        this.getSingerInfo();
    },
    methods: {
        getSingerInfo(id) {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/artists', {
                params: {
                    id: 10559
                }
            }).then(function (res) {
                console.log(res.data);
                vm.hotSongs = res.data.hotSongs;
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