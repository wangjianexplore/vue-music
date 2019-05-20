<template>
    <div class="app">
        <router-view />
        <div class="play-btn">
            <div class="play-main" :class="{playmain01:playFlag==false, playmain02:playFlag==true}" @mouseenter="mouseenter" @mouseleave="mouseleave">
                <div class="back-left">
                </div>
                <div class="back-right">
                    <div class="r-one">
                    </div>
                    <div class="r-two"></div>
                </div>
                <div class="hand">
                    <div class="unlock" :class="{lock:lockFlag==true}" @click="lockFlag=!lockFlag;playFlag=true"></div>
                </div>
                <div class="wrap">
                    <div class="btns">
                        <span class="prev" @click="playPrev()"></span>
                        <span class="pause" :class="{onplay:getPlayInfo.onplayflag}" @click="playBtn()"></span>
                        <span class="next" @click="playNext()"></span>
                    </div>
                    <div class="head" @click="$router.push('/songDetail/'+getPlayInfo.id)">
                        <img class="img" :src="musicinfo.picurl" alt="">
                        <span class="mask"></span>
                    </div>
                    <div class="play">
                        <div class="words">
                            <span class="name" @click="$router.push('/songDetail')">{{musicinfo.name}}</span>
                            <span class="by">{{musicinfo.singer}}</span>
                            <span class="src"></span>
                        </div>
                        <div class="m-pbar">
                            <div class="barbg" @click="getBarLeft($event)" ref="barbg">
                                <div class="cur" :style="{'width':getPlayInfo.curlength+'%'}">
                                    <span class="btn" ref="refbtn">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                            <div class="time">
                                <em>{{getTime(parseInt(musicinfo.currentTime/60))}}:{{getTime(parseInt(musicinfo.currentTime%60))}}</em> / {{getTime(parseInt(musicinfo.duration/60))}}:{{getTime(parseInt(musicinfo.duration%60))}}
                            </div>
                        </div>
                    </div>
                    <div class="oper">
                        <span class="icn icn-add"></span>
                        <span class="icn icn-share"></span>
                    </div>
                    <div class="ctrl">
                        <div class="m-vol" ref="m_vol" v-show="volflag">
                            <div class="m_barbg"></div>
                            <div class="vbg" @click="getVolume($event)" ref="volume">
                                <div class="m_curr" :style="{'height':getPlayInfo.volume+'px'}"></div>
                                <div class="m_btn" :style="{'top':86-getPlayInfo.volume+'px'}" ref="volumeBtn"></div>
                            </div>
                        </div>
                        <span class="icn icn-vol" :class="{'icn-vol2': getPlayInfo.volume==10}" @click="volflag=!volflag"></span>
                        <span class="icn" @click="changeOrder()" :class="[{ icn_shuffle: musicinfo.order==1 },{ icn_shuffle2: musicinfo.order==2 },{ icn_shuffle3: musicinfo.order==3 }]"></span>
                        <span class="add">
                            <span class="icn icn-list" @click="nowlistFlag=!nowlistFlag;playFlag==true">{{getPlayList.list.length}}</span>
                        </span>
                    </div>
                </div>
                <div class="nowlist" v-show="nowlistFlag">
                    <div class="listhd">
                        <div class="listhdc">
                            <h4>播放列表(<span class="j-flag">{{getPlayList.list.length}}</span>)</h4>
                            <div class="addall">
                                <span class="ico ico-add"></span>收藏全部
                            </div>
                            <span class="line"></span>
                            <div class="clear">
                                <span class="ico icn-del"></span>清除
                            </div>
                            <p class="lytit ">{{getPlayInfo.name}}</p>
                            <span class="close" @click="nowlistFlag=false">关闭</span>
                        </div>
                    </div>
                    <div class="listhd2">
                        <img :src="getPlayInfo.picurl" class="imgbg" alt="">
                        <div class="msk"></div>
                        <div class="listbdc">
                            <ul class="f-cb">
                                <li class="col_li" :class="{'col_li_active':getPlayInfo.index==index}" v-for="(item, index) in getPlayList.list" :key="index">
                                    <div class="col col-1">
                                        <div class="playicn" v-if="getPlayInfo.index==index"></div>
                                    </div>
                                    <div class="col col-2">{{item.name}}</div>
                                    <div class="col col-3">
                                        <div class="icns">
                                            <div class="ico2 icn-dels"></div>
                                            <div class="ico2 ico-dl"></div>
                                            <div class="ico2 ico-share"></div>
                                            <div class="ico2 ico-add"></div>
                                        </div>
                                    </div>
                                    <div class="col col-4">{{item.ar[0].name}}</div>
                                    <div class="col col-5">{{getTime(parseInt(item.dt/1000/60))}}:{{getTime(parseInt(item.dt/1000%60))}}</div>
                                    <div class="col col-6"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="msk2"></div>
                        <div class="listlyric" ref="listlyric" style="transition: transform 1s ease-out; transform-origin: 0px 0px 0px;" :style="{'transform':' translate3d(0px,'+ -lrcOffset +'px, 0px)'}">
                            <p ref="p_lrc" :data-time="parseTime(item.offset)" v-for="(item, index) in getPlayInfo.lrc" :key="index" v-text="item.text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <audio :src="getPlayInfo.musicurl" @timeupdate="updateTime" @ended="musicEnd" ref="musicref" controls style="display:none"></audio>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            lockFlag: false,
            playFlag: false,
            xlength: 0,
            volflag: false,
            nowlistFlag: false,
            lrcOffset: 0
        }
    },
    computed: {
        ...mapGetters(['getPlayInfo', 'getPlayList']),
        musicinfo() {
            return this.getPlayInfo;
        },
        playState() {
            return this.getPlayInfo.onplayflag;
        },
        restart() {
            return this.getPlayInfo.restart;
        }
    },
    mounted() {
        let vm = this;
        vm.setPlayInfo({
            onplayflag: false
        });
        vm.progressBar();
        vm.volumeBar();
    },
    watch: {
        playState: function (a, b) {
            let vm = this;
            if (b) {
                vm.$refs.musicref.pause();
            } else {
                vm.$refs.musicref.play();
            }
        },
        restart: function (a, b) {
            let vm = this;
            vm.$refs.musicref.load();
        }
    },
    methods: {
        ...mapMutations([
            'setPlayInfo'
        ]),
        // 音量条拖动
        volumeBar() {
            let vm = this;
            // vm.$refs.musicref.volume = vm.getPlayInfo.volume / 93;
            vm.$refs.musicref.volume = (vm.getPlayInfo.volume - 10) / 83;
            var volumeBtn = vm.$refs.volumeBtn; //获取元素
            var volume = vm.$refs.volume;
            var m_vol = vm.$refs.m_vol;
            var y; //存储div的坐标
            var isDrop = false; //移动状态的判断鼠标按下才能移动
            volumeBtn.onmousedown = function (e) {
                document.onmousedown = new Function("return false");
                isDrop = true; //设为true表示可以移动
            }
            m_vol.onmousemove = function (e) {
                if (isDrop) {
                    var $height = 93 + volume.getBoundingClientRect().top - e.pageY;
                    if ($height > 93) {
                        $height = 93;
                    } else if ($height < 10) {
                        $height = 10;
                    }
                    vm.$refs.musicref.volume = ($height - 10) / 83;
                    vm.setPlayInfo({
                        volume: $height
                    })
                } else {
                    return;
                }
            }
            window.onmouseup = function () {
                document.onmousedown = new Function("return true");
                isDrop = false; //设置为false不可移动
            }
        },
        // 进度条拖动
        progressBar() {
            let vm = this;
            var refbtn = vm.$refs.refbtn; //获取元素
            var barbg = vm.$refs.barbg;
            var x; //存储div的坐标
            var isDrop = false; //移动状态的判断鼠标按下才能移动
            barbg.onmousedown = function (e) {
                document.onmousedown = new Function("return false");
                isDrop = true; //设为true表示可以移动
                if (vm.getPlayInfo.onplayflag) {
                    vm.$refs.musicref.pause();
                }
            }

            document.onmousemove = function (e) {
                //是否为可移动状态                　　　　　　　　　　　 　　　　　　　
                if (isDrop) {
                    var lengths = e.pageX - barbg.getBoundingClientRect().left;
                    if (lengths > 485) {
                        lengths = 485;
                    }
                    var pren = lengths / 485;
                    vm.$refs.musicref.currentTime = vm.getPlayInfo.duration * pren;
                    vm.setPlayInfo({
                        currentTime: vm.getPlayInfo.duration * pren,
                        curlength: vm.getPlayInfo.currentTime / vm.getPlayInfo.duration * 100
                    })
                } else {
                    return;
                }

            }
            document.onmouseup = function () {
                isDrop = false; //设置为false不可移动
                document.onmousedown = new Function("return true");
                if (vm.getPlayInfo.onplayflag) {
                    vm.$refs.musicref.play();
                }
            }
        },
        playBtn() {
            let vm = this;
            vm.$refs.musicref.currentTime = vm.getPlayInfo.currentTime;
            if (vm.getPlayInfo.onplayflag) {
                vm.$refs.musicref.pause();
            } else {
                vm.$refs.musicref.play();
            }
            vm.setPlayInfo({
                onplayflag: !vm.getPlayInfo.onplayflag
            });
        },
        mouseenter() {
            let vm = this;
            vm.playFlag = true;
        },
        mouseleave() {
            let vm = this;
            if (!vm.lockFlag && !vm.nowlistFlag) {
                vm.playFlag = false;
            }
        },
        getTime(arg) {
            var args = arg.toString();
            if (args.length <= 1) {
                return '0' + args;
            } else {
                return args;
            }
        },
        getBarLeft($event) {
            let vm = this;
            var $barbg = vm.$refs.barbg;
            var lengths = $event.pageX - $barbg.getBoundingClientRect().left;
            var pren = lengths / 485;
            vm.$refs.musicref.currentTime = vm.getPlayInfo.duration * pren;
            vm.setPlayInfo({
                currentTime: vm.getPlayInfo.duration * pren,
                curlength: pren * 100
            })
        },
        updateTime() {
            let vm = this;
            if (!isNaN(vm.$refs.musicref.duration)) {
                vm.setPlayInfo({
                    duration: vm.$refs.musicref.duration,
                    currentTime: vm.$refs.musicref.currentTime,
                    curlength: vm.$refs.musicref.currentTime / vm.$refs.musicref.duration * 100
                });
            }
            if (vm.nowlistFlag) {
                vm.renderLrc();
            }
        },
        renderLrc() {
            let vm = this;
            // var scH = vm.$refs.listlyric.scrollHeight;
            var pList = vm.$refs.listlyric.childNodes;
            // console.log(vm.$refs.p_lrc);
            // vm.$refs.p_lrc.classList.remove('activated');
            // console.log(pList[1].getAttribute('data-time'));
            // console.log(pList[1].nextSibling.getAttribute('data-time'));
            pList.forEach(function (item, index) {
                try {
                    // console.log(item.nextSibling.getAttribute('data-time'));
                    var thisTime = item.getAttribute('data-time');
                    var prevTime = item.previousSibling.getAttribute('data-time');
                    var nextTime = item.nextSibling.getAttribute('data-time');
                    pList[index].classList.remove('activated');
                    if (vm.getPlayInfo.currentTime >= thisTime && vm.getPlayInfo.currentTime <= nextTime) {
                        item.classList.add("activated");
                        vm.lrcOffset = 32 * (index - 2);
                    }
                } catch (error) {

                }

            })
        },
        /*解析时间*/
        parseTime(time) {
            var tl = time.split(":");
            switch (tl.length) {
                case 1:
                    return parseFloat(tl[0]);
                case 2:
                    return parseFloat(tl[0]) * 60 + parseFloat(tl[1]);
                case 3:
                    return parseFloat(tl[0]) * 3600 + parseFloat(tl[1]) * 60 + parseFloat(tl[2]);
            }
        },
        // 上一曲
        playPrev() {
            let vm = this;
            // 随机播放时产生的随机数字
            if (vm.getPlayInfo.order === 2) {
                let randomNum = Math.floor(Math.random() * vm.getPlayList.list.length);
                vm.setPlayInfo({
                    index: randomNum
                });
            }
            let nextIndex = 0;
            if (vm.getPlayInfo.index === 0) {
                nextIndex = vm.getPlayList.list.length - 1;
            } else {
                nextIndex = vm.getPlayInfo.index - 1;
            }
            let nextMusic = vm.getPlayList.list[nextIndex];
            vm.setPlayInfo({
                curlength: 0,
                index: nextIndex,
                musicurl: 'https://music.163.com/song/media/outer/url?id=' + nextMusic.id + '.mp3',
                name: nextMusic.name,
                onplayflag: true,
                picurl: nextMusic.al.picUrl,
                singer: nextMusic.ar[0].name,
                duration: nextMusic.dt/1000,
                id: nextMusic.id
            });
            vm.getLrc(nextMusic.id)
        },
        // 下一曲
        playNext() {
            let vm = this;
            // 随机播放时产生的随机数字
            if (vm.getPlayInfo.order === 2) {
                let randomNum = Math.floor(Math.random() * vm.getPlayList.list.length);
                vm.setPlayInfo({
                    index: randomNum
                });
            }
            let nextIndex = 0;
            if (vm.getPlayInfo.index + 1 == vm.getPlayList.list.length) {
                nextIndex = 0;
            } else {
                nextIndex = vm.getPlayInfo.index + 1
            }
            let nextMusic = vm.getPlayList.list[nextIndex];
            // console.log(nextMusic.al.picUrl);
            vm.setPlayInfo({
                curlength: 0,
                index: nextIndex,
                musicurl: 'https://music.163.com/song/media/outer/url?id=' + nextMusic.id + '.mp3',
                name: nextMusic.name,
                onplayflag: true,
                picurl: nextMusic.al.picUrl,
                singer: nextMusic.ar[0].name,
                duration: nextMusic.dt/1000,
                id: nextMusic.id
            });
            vm.getLrc(nextMusic.id);
        },
        getLrc(id) {
            let vm = this;
            axios.get('https://api.itooi.cn/music/netease/lrc', {
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
            for(let i =0; i < arr.length; i++) {
                if (arr[i] != '') {
                    let temp = arr[i].split(']');
                    if (temp.length > 1) {
                        var offset = temp[0].substring(1, temp[0].length + 1);
                        var text = temp[1];
                        if (text != '') {
                            lrcArray.push({'offset': offset, 'text': text});
                        }
                    }
                }
            }
            return lrcArray;
        },
        changeOrder() {
            let vm = this;
            let order = 1;
            if (vm.getPlayInfo.order == 3) {
                order = 1;
            } else {
                order = vm.getPlayInfo.order + 1;
            }
            vm.setPlayInfo({
                order: order
            });
        },
        musicEnd() {
            let vm = this;
            // 结束时歌词div回到顶部
            vm.lrcOffset = 0;
            if (vm.getPlayInfo.order === 1) {
                vm.playNext();
            } else if (vm.getPlayInfo.order === 2) {
                let randomNum = Math.floor(Math.random() * vm.getPlayList.list.length);
                vm.setPlayInfo({
                    index: randomNum
                });
                vm.playNext();
            } else if (vm.getPlayInfo.order === 3) {
                vm.$refs.musicref.load();
            }
        },
        // 点击调音量
        getVolume($event) {
            let vm = this;
            var $volume = vm.$refs.volume;
            var $height = 93 + $volume.getBoundingClientRect().top - $event.pageY;
            if ($height > 93) {
                $height = 93;
            } else if ($height < 10) {
                $height = 10;
            }
            vm.$refs.musicref.volume = ($height - 10) / 83;
            vm.setPlayInfo({
                volume: $height
            })
        }
    }
}
</script>

<style lang="less">
.app {
    // position: fixed;
    width: 100%;
    height: 100%;
}
.play-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    @keyframes playMain02 {
        0% {
            top: -53px;
        }
        80% {
            top: -53px;
        }
        100% {
            top: -8px;
        }
    }
    .play-main {
        animation: playMain02 2.5s;
        position: absolute;
        zoom: 1;
        top: -53px;
        left: 0;
        width: 100%;
        height: 53px;
        margin: 0 auto;
        .back-left {
            height: 53px;
            zoom: 1;
            margin-right: 67px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: 0 0;
            background-repeat: repeat-x;
        }
        .back-right {
            position: relative;
        }
        .r-one {
            z-index: 99;
            position: absolute;
            top: -67px;
            right: 15px;
            width: 52px;
            height: 67px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: 0 -380px;
        }
        .r-two {
            position: absolute;
            top: -54px;
            right: 0;
            width: 15px;
            height: 54px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -52px -393px;
            pointer-events: none;
        }
        .hand {
            position: absolute;
            top: -10px;
            width: 100%;
            height: 20px;
            cursor: pointer;
        }
        .wrap {
            position: absolute;
            left: 50%;
            top: 6px;
            z-index: 15;
            width: 980px;
            height: 47px;
            margin: 0 auto;
            margin-left: -498px;
        }
        .btns {
            float: left;
            width: 137px;
            padding-top: 6px;
        }
        .head {
            position: relative;
            float: left;
            width: 34px;
            height: 34px;
            margin: 6px 15px 0 0;
            cursor: pointer;
            .img {
                width: 34px;
                height: 34px;
            }
        }
        .prev {
            width: 28px;
            height: 28px;
            float: left;
            margin-right: 8px;
            margin-top: 5px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: 0 -130px;
            cursor: pointer;
        }
        .prev:hover {
            background-position: -30px -130px;
        }
        .pause {
            width: 36px;
            height: 36px;
            float: left;
            margin-right: 8px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: 0 -204px;
            cursor: pointer;
        }
        .pause:hover {
            background-position: -40px -204px;
        }
        .onplay {
            background-position: 0 -165px;
        }
        .onplay:hover {
            background-position: -40px -165px;
        }
        .next {
            width: 28px;
            height: 28px;
            float: left;
            margin-right: 8px;
            margin-top: 5px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -80px -130px;
            cursor: pointer;
        }
        .next:hover {
            background-position: -110px -130px;
        }
        .mask {
            position: absolute;
            top: 0px;
            left: 0px;
            display: block;
            width: 34px;
            height: 35px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: 0 -80px;
        }
        .play {
            width: 600px;
            float: left;
        }
        .words {
            height: 28px;
            overflow: hidden;
            color: #e8e8e8;
            text-shadow: 0 1px 0 #171717;
            line-height: 28px;
        }
        .name {
            max-width: 300px;
            color: #e8e8e8;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            float: left;
            cursor: pointer;
        }
        .by {
            float: left;
            max-width: 220px;
            margin-left: 15px;
            color: #9b9b9b;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }
        .src {
            float: left;
            width: 14px;
            height: 15px;
            margin: 7px 0 0 13px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -110px -103px;
        }
        .m-pbar {
            position: relative;
            width: 485px;
            height: 9px;
            background: url(../static/images/discover/statbar.png) no-repeat;
            background-position: right 0;
        }
        .barbg {
            height: 9px;
            background: url(../static/images/discover/statbar.png) no-repeat;
            background-position: right 0;
        }
        .cur {
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            background: url(../static/images/discover/statbar.png) no-repeat;
            background-position: left -66px;
        }
        .btn {
            position: absolute;
            top: -7.5px;
            right: -13px;
            width: 22px;
            height: 24px;
            margin-left: -11px;
            background: url(../static/images/discover/iconall.png) no-repeat;
            background-position: 0 -250px;
            i {
                visibility: hidden;
                position: absolute;
                left: 5px;
                top: 5px;
                width: 12px;
                height: 12px;
                background: url(../static/images/discover/loading.gif) no-repeat;
            }
        }
        .time {
            position: absolute;
            top: -3px;
            right: -84px;
            color: #797979;
            text-shadow: 0 1px 0 #121212;
            em {
                font-style: normal;
                text-align: left;
                font-size: inherit;
                color: #a1a1a1;
            }
        }
        .icn {
            float: left;
            width: 25px;
            height: 25px;
            margin: 11px 2px 0 0;
            text-indent: -9999px;
            background: url(../static/images/discover/playbar.png) no-repeat;
        }
        .icn-add {
            background-position: -88px -163px;
        }
        .icn-add:hover {
            background-position: -88px -189px;
        }
        .icn-share {
            background-position: -114px -163px;
        }
        .icn-share:hover {
            background-position: -114px -189px;
        }
        .ctrl {
            float: left;
            position: relative;
            z-index: 10;
            width: 126px;
            padding-left: 13px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -147px -238px;
        }
        .m_curr {
            position: absolute;
            width: 4px;
            height: 93px;
            top: auto;
            bottom: 8px;
            left: 0;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -40px bottom;
            overflow: hidden;
        }
        .m_btn {
            position: absolute;
            top: -7px;
            left: -7px;
            display: block;
            width: 18px;
            height: 20px;
            background: url(../static/images/discover/iconall.png) no-repeat;
            background-position: -40px -250px;
            cursor: pointer;
        }
        .m_btn:hover {
            background-position: -40px -280px;
        }
        .vbg {
            padding: 4px 0;
            top: 15px;
            position: absolute;
            left: 14px;
            width: 4px;
            height: 100px;
        }
        .m-vol {
            position: absolute;
            top: -113px;
            left: 9px;
            clear: both;
            width: 32px;
            height: 113px;
        }
        .m_barbg {
            position: absolute;
            top: 0;
            left: 0;
            width: 32px;
            height: 113px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: 0 -503px;
        }
        .icn-vol {
            background-position: -2px -248px;
        }
        .icn-vol2 {
            background-position: -104px -69px;
        }
        .icn-vol:hover {
            background-position: -31px -248px;
        }
        .icn-vol2:hover {
            background-position: -126px -69px;
        }
        .icn_shuffle {
            background-position: -3px -344px;
            cursor: pointer;
        }
        .icn_shuffle:hover {
            background-position: -33px -344px;
        }
        .icn_shuffle2:hover {
            background-position: -93px -248px;
        }
        .icn_shuffle3:hover {
            background-position: -93px -344px;
        }
        .icn_shuffle2 {
            background-position: -66px -248px;
            cursor: pointer;
        }
        .icn_shuffle3 {
            background-position: -66px -344px;
            cursor: pointer;
        }
        .add {
            float: left;
            width: 59px;
            height: 36px;
        }
        .icn-list {
            display: block;
            float: none;
            width: 59px;
            padding-left: 21px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -42px -68px;
            line-height: 27px;
            text-align: center;
            color: #666;
            text-shadow: 0 1px 0 #080707;
            text-indent: 0;
            text-decoration: none;
            cursor: pointer;
        }
        .icn-list:hover {
            background-position: -42px -98px;
        }
        .unlock {
            z-index: 100;
            position: absolute;
            right: 31px;
            top: -4px;
            display: block;
            width: 18px;
            height: 18px;
            margin: 6px 0 0 17px;
            background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -80px -380px;
            color: #fff;
        }
        .unlock:hover {
            z-index: 100;
            background-position: -80px -400px;
        }
        .lock {
            z-index: 100;
            // position: absolute;
            // right: 31px;
            // top: -4px;
            // display: block;
            // width: 18px;
            // height: 18px;
            // margin: 6px 0 0 17px;
            // background: url(../static/images/discover/playbar.png) no-repeat;
            background-position: -100px -380px;
            color: #fff;
        }
        .lock:hover {
            z-index: 100;
            background-position: -100px -400px;
            color: #f00;
        }
    }
    .nowlist {
        position: absolute;
        left: 50%;
        bottom: 47px;
        width: 986px;
        height: 301px;
        margin-left: -493px;
        .listhd {
            background: url(../static/images/discover/playlist_bg.png) no-repeat;
            background-position: 0 0;
            height: 41px;
            padding: 0 5px;
        }
        .listhdc {
            position: relative;
            height: 40px;
            h4 {
                position: absolute;
                left: 25px;
                top: 0;
                height: 39px;
                line-height: 39px;
                font-size: 14px;
                color: #e2e2e2;
            }
        }
        .addall {
            position: absolute;
            left: 398px;
            top: 12px;
            height: 15px;
            line-height: 15px;
            cursor: pointer;
            color: #ccc;
        }
        .ico {
            background: url(../static/images/discover/playlist.png) no-repeat;
        }
        .ico-add {
            float: left;
            margin: 1px 6px 0 0;
            width: 16px;
            background-position: -24px 0;
            height: 16px;
            cursor: pointer;
        }
        .clear {
            position: absolute;
            left: 490px;
            top: 12px;
            height: 15px;
            line-height: 15px;
            cursor: pointer;
            color: #ccc;
        }
        .lytit {
            position: absolute;
            left: 595px;
            top: 0;
            width: 346px;
            text-align: center;
            height: 39px;
            line-height: 39px;
            color: #fff;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            font-family: Arial, Helvetica, sans-serif;
        }
        .close {
            position: absolute;
            top: 6px;
            right: 8px;
            width: 30px;
            height: 30px;
            overflow: hidden;
            text-indent: -999px;
            cursor: pointer;
            background: url(../static/images/discover/playlist.png) no-repeat;
            background-position: -195px 9px;
        }
        .icn-del {
            float: left;
            margin: 1px 6px 0 0;
            width: 13px;
            background-position: -51px 0;
            height: 16px;
        }
        .line {
            position: absolute;
            top: 13px;
            left: 477px;
            height: 15px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
        }
        .listhd2 {
            position: absolute;
            left: 0;
            top: 41px;
            width: 976px;
            height: 260px;
            overflow: hidden;
            background: url(../static/images/discover/playlist_bg.png) no-repeat;
            background-position: -1014px 0;
            background-repeat: repeat-y;
            padding: 0 5px;
            box-sizing: content-box;
        }
        .imgbg {
            position: absolute;
            left: 2px;
            top: -360px;
            z-index: 1;
            width: 980px;
            height: auto;
            opacity: 0.2;
        }
        .msk {
            position: absolute;
            left: 2px;
            top: 0;
            z-index: 2;
            width: 558px;
            height: 260px;
            background: #121212;
            opacity: 0.5;
        }
        .listbdc {
            position: absolute;
            left: 2px;
            top: 0;
            z-index: 4;
            height: 260px;
            width: 559px;
            overflow: hidden;
            overflow-x: hidden;
            overflow-y: scroll;
        }
        .listbdc::-webkit-scrollbar {
            width: 6px;
            // height: 8px;
        }
        .listbdc::-webkit-scrollbar-thumb {
            background: #868686;
            border: 1px solid #a6a6a6;
            border-radius: 10px;
            // box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
        }
        .listbdc::-webkit-scrollbar-track {
            border-radius: 10px;
            // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
        }
        .listbdc:hover::-webkit-scrollbar-thumb {
            background: #868686;
            border: 1px solid #a6a6a6;
        }
        .f-cb {
            color: #ccc;
            overflow: hidden;
        }
        .col_li {
            float: left;
            width: 100%;
        }
        .col_li_active {
            background-color: rgba(0, 0, 0, 0.3);
        }
        .col {
            float: left;
            padding-left: 10px;
            height: 28px;
            line-height: 28px;
            overflow: hidden;
            cursor: pointer;
            box-sizing: content-box;
        }
        .col-1 {
            width: 10px;
        }
        .col-2 {
            width: 256px;
        }
        .col-3 {
            width: 78px;
            position: relative;
        }
        .col-4 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 70px;
            color: #9b9b9b;
        }
        .col-5 {
            width: 35px;
            color: #666;
        }
        .col-6 {
            margin: 7px 0 0 10px;
            padding-left: 6px;
            width: 14px;
            height: 16px;
            margin-left: 32px;
            background: url(../static/images/discover/playlist.png) no-repeat;
            background-position: -80px 0px;
        }
        .playicn {
            margin-top: 8px;
            width: 10px;
            height: 13px;
            background: url(../static/images/discover/playlist.png) no-repeat;
            background-position: -182px 0;
        }
        .ico2 {
            float: right;
            overflow: hidden;
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            background: url(../static/images/discover/playlist.png) no-repeat;
        }
        .col_li:hover .icns {
            display: block;
        }
        .icns {
            position: absolute;
            right: 0;
            top: 0;
            width: 100px;
            height: 23px;
            display: none;
        }
        .icn-dels {
            width: 13px;
            background-position: -51px 0;
            height: 16px;
        }
        .ico-dl {
            width: 14px;
            background-position: -57px -50px;
            height: 16px;
        }
        .ico-share {
            width: 14px;
            background-position: 0 0;
            height: 16px;
        }
        .ico-add {
            width: 16px;
            background-position: -24px 0;
            height: 16px;
        }
        .msk2 {
            position: absolute;
            left: 560px;
            top: 0;
            z-index: 3;
            width: 420px;
            height: 250px;
            background: #121212;
            opacity: 0.01;
        }
        .listlyric {
            position: absolute;
            right: 1px;
            top: 0;
            z-index: 4;
            padding: 21px 0 20px 0;
            height: auto;
            width: 420px;
            overflow: hidden;
            color: #989898;
            word-wrap: break-word;
            text-align: center;
            line-height: 32px;
            min-height: 32px;
            transition: color 0.7s linear;
            overflow-x: hidden;
            overflow-y: scroll;
        }
        .activated {
            color: #fff;
            font-size: 14px;
            transition: color 0.7s linear;
        }
        .listlyric::-webkit-scrollbar {
            width: 6px;
        }
        .listlyric::-webkit-scrollbar-thumb {
            background: #868686;
            border: 1px solid #a6a6a6;
            border-radius: 10px;
        }
        .listlyric::-webkit-scrollbar-track {
            border-radius: 10px;
        }
        .listlyric:hover::-webkit-scrollbar-thumb {
            background: #868686;
            border: 1px solid #a6a6a6;
        }
    }
    .playmain01 {
        transition: top 0.3s 0.8s;
        top: -8px;
    }
    .playmain02 {
        transition: top 0.3s;
        top: -53px;
    }
}
</style>
