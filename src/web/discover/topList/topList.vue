<template>
    <div class="topList">
        <discoverTag :liNum="2"></discoverTag>
        <div class="list">
            <div class="list-left">
                <div class="left-main">
                    <h2 class="left-h2">云音乐特色榜</h2>
                    <div class="spec-list">
                        <ul>
                            <li :class="{li_active:liNum==1}">
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐飙升榜</p>
                                    <p class="li-p2">每天更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐新歌榜</p>
                                    <p class="li-p2">每天更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">网易原创歌曲榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐热歌榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="left-main left-main02">
                    <h2 class="left-h2">全球媒体榜</h2>
                    <div class="spec-list">
                        <ul>
                            <li :class="{li_active:liNum==6}">
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/XbjRDARP1xv5a-40ZDOy6A==/109951163785427934.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">国风风云榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/TuGxihwbiPmoHoFGvIuu_w==/109951163781770038.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐电音榜</p>
                                    <p class="li-p2">每天更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">斗鱼音乐榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">抖音排行榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/bZvjH5KTuvAT0YXlVa-RtQ==/109951163326845001.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐古典音乐榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐ACG音乐榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/vs-cMh49e6qPEorHuhU07A==/18737877162497499.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐韩语榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/8-GBrukQ3BHhs4CmK6qE4w==/109951163424197392.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">云音乐国电榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                            <li>
                                <div class="li-left"><img class="li-img" src="https://p2.music.126.net/0_6_Efe9m0D0NtghOxinUg==/109951163089272193.jpg?param=40y40" alt=""></div>
                                <div class="li-right">
                                    <p class="li-p1">江小白YOLO云音乐说唱榜</p>
                                    <p class="li-p2">每周四更新</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="list-right">
                <div class="right-top">
                    <div class="top-left">
                        <div class="top-img"><img class="img" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" alt=""></div>
                    </div>
                    <div class="top-right">
                        <div class="title">云音乐飙升榜</div>
                        <div class="date">最近更新：01月08日 （每天更新）</div>
                        <songBtn></songBtn>
                    </div>
                </div>
                <div class="right-bottom">
                    <div class="song_list">
                        <div class="sl_top">
                            <span class="span_song">歌曲列表</span>
                            <span class="span_num">100首歌</span>
                            <span class="span_pl">播放：<span class="span_red">1570996096</span>次</span>
                        </div>
                        <div class="sl_bot">
                            <div class="sl_head">
                                <div class="head kong"></div>
                                <div class="head title">标题</div>
                                <div class="head time">时长</div>
                                <div class="head singer">歌手</div>
                            </div>
                            <div class="list_items">
                                <ul>
                                    <li class="spec_item1 list_item">
                                        <span class="item item01">1</span>
                                        <span class="item item02">
                                            <img src="https://p2.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=50y50&quality=100" alt="">
                                            <span class="song-nane">天份</span>
                                        </span>
                                        <span class="item item03">04:08</span>
                                        <span class="item item04">薛之谦</span>
                                    </li>
                                    <li class="spec_item2 list_item">
                                        <span class="item item01">2</span>
                                        <span class="item item02">
                                            <img src="https://p2.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=50y50&quality=100" alt="">
                                            <span class="song-nane">天份</span>
                                        </span>
                                        <span class="item item03">04:08</span>
                                        <span class="item item04">薛之谦</span>
                                    </li>
                                    <li class="spec_item1 list_item">
                                        <span class="item item01">3</span>
                                        <span class="item item02">
                                            <img src="https://p2.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=50y50&quality=100" alt="">
                                            <span class="song-nane">天份</span>
                                        </span>
                                        <span class="item item03">04:08</span>
                                        <span class="item item04">薛之谦</span>
                                    </li>
                                </ul>
                                <ul class="item-li">
                                    <li class="spec_item list_item" v-for="(item, index) in 97" :key="index">
                                        <span class="item item01 item07">{{index+4}}</span>
                                        <span class="item item02 item08">
                                            <span class="song-nane">天份</span>
                                        </span>
                                        <span class="item item03 item09">04:08</span>
                                        <span class="item item04 item10">薛之谦</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <comments></comments>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'topList',
    data() {
        return {
            liNum: 1
        }
    }
}
</script>

<style lang="less" scoped>
@import "./topList.less";
</style>
<style lang="less">
.topList {
    .m-cmmt {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
    .cmmts_top,
    .cmmts_bot {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>


