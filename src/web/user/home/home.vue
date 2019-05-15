<template>
    <div class="home">
        <div class="redBar"></div>
        <userHeader></userHeader>
        <div class="homeMain">
            <div class="wrap">
                <div class="list">
                    <div class="list_title">
                        <h3 class="t_h3">听歌排行</h3>
                        <h4 class="t_h4">累积听歌29首</h4>
                        <span class="t_icon"></span>
                        <div class="t_time">
                            <span class="t_all">最近一周</span>
                            <span class="t_line">|</span>
                            <span class="t_week">所有时间</span>
                        </div>
                    </div>
                    <div class="list_bot">
                        <ul>
                            <li class="li_bot">
                                <div class="li_one">
                                    1.
                                    <span class="span_bot"></span>
                                </div>
                                <div class="songname">
                                    <span class="name">前进乌托邦</span>
                                    <span class="bar">-</span>
                                    <span>张惠妹</span>
                                    <div class="opt">
                                        <span class="opt1"></span>
                                        <span class="opt0 opt2"></span>
                                        <span class="opt0 opt3"></span>
                                        <span class="opt0 opt4"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="li_bot">
                                <div class="li_one">
                                    1.
                                    <span class="span_bot"></span>
                                </div>
                                <div class="songname">
                                    <span class="name">前进乌托邦</span>
                                    <span class="bar">-</span>
                                    <span>张惠妹</span>
                                    <div class="opt">
                                        <span class="opt1"></span>
                                        <span class="opt0 opt2"></span>
                                        <span class="opt0 opt3"></span>
                                        <span class="opt0 opt4"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="li_bot">
                                <div class="li_one">
                                    1.
                                    <span class="span_bot"></span>
                                </div>
                                <div class="songname">
                                    <span class="name">前进乌托邦</span>
                                    <span class="bar">-</span>
                                    <span>张惠妹</span>
                                    <div class="opt">
                                        <span class="opt1"></span>
                                        <span class="opt0 opt2"></span>
                                        <span class="opt0 opt3"></span>
                                        <span class="opt0 opt4"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="li_bot">
                                <div class="li_one">
                                    1.
                                    <span class="span_bot"></span>
                                </div>
                                <div class="songname">
                                    <span class="name">前进乌托邦</span>
                                    <span class="bar">-</span>
                                    <span>张惠妹</span>
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
                        张惠妹aMEI创建的歌单（3）
                    </div>
                    <div class="r-bottom">
                        <el-row class="row-song">
                            <el-col :span="6" class="song-col">
                                <img @click="$router.push('/listDetails/' + item.id)" src="https://p2.music.126.net/3gY4PcSVv4veogE6FOmr7Q==/3382097768218496.jpg?param=140y140" alt="">
                                <div @click="$router.push('/listDetails/' + item.id)" class="songTitle">张惠妹aMEI喜欢的音乐</div>
                                <div @click="$router.push('/listDetails/' + item.id)" class="sBottom">
                                    <span class="music-logo"></span>
                                    <span class="music-num">16.7万</span>
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
<style lang="less" scoped>
@import "./home.less";
</style>


