<template>
    <div class="song_list">
        <div class="top" :class="[titlepadding?'top':'top2']">
            <span class="top01">歌曲列表</span>
            <span class="top02">{{tracks.length}}首歌</span>
            <span class="top03">播放：<span class="red">{{playCount}}</span>次</span>
        </div>
        <div class="bot">
            <div class="s_list">
                <div class="sl_head">
                    <div class="head kong"></div>
                    <div class="head title">歌曲标题</div>
                    <div class="head time">时长</div>
                    <div class="head singer">歌手</div>
                    <div class="head zji">专辑</div>
                </div>
                <div class="sl_bot">
                    <ul>
                        <li v-for="(item, index) in tracks" :key="index">
                            <div class="head index">{{index+1}}<span class="play" @click="playMusic(index,item.id,item.name,item.ar[0].name,item.al.picUrl,tracks)"></span></div>
                            <div class="head title" @click="$router.push('/songDetail/'+item.id)" v-text="item.name"></div>
                            <div class="head time">{{getTime(parseInt(item.dt/60/1000))}}:{{getTime(parseInt(item.dt/1000%60))}}</div>
                            <div class="head singer" v-text="item.ar[0].name"></div>
                            <div class="head zji" v-text="item.name"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
export default {
    name: 'songList',
    data() {
        return {
            // musicSrc: ''
        }
    },
    props: {
        tracks: {
            type: Array,
            default: []
        },
        titlepadding: {
            type: Boolean,
            default: true
        },
        playCount: {
            type: Number,
            default: 0
        }
    },
    computed: {
        ...mapGetters(['getPlayInfo', 'getPlayList'])
        // playState() {
        //     return this.getPlayInfo.onplayflag;
        // }
    },
    watch: {
        // playState: function (a, b) {
        //     let vm = this;
        //     if (b) {
        //         vm.$refs.musicref.pause();
        //     } else {
        //         vm.$refs.musicref.play();
        //     }
        // }
    },
    methods: {
        ...mapMutations([
            'setPlayInfo', 'setPlayList'
        ]),
        getTime(arg) {
            var args = arg.toString();
            if (args.length <= 1) {
                return '0' + args;
            } else {
                return args;
            }
        },
        playMusic(index, id, name, singer, picurl, tracks) {
            let vm = this;
            if (vm.getPlayInfo.index === index) {
                vm.setPlayInfo({
                    restart: !vm.getPlayInfo.restart
                });
            }
            vm.setPlayInfo({
                curlength: 0,
                currentTime: 0,
                index: index,
                onplayflag: true,
                name: name,
                singer: singer,
                picurl: picurl,
                musicurl: 'https://music.163.com/song/media/outer/url?id=' + id + '.mp3',
                id: id
            });
            vm.setPlayList({
                list: tracks
            });
            // vm.getMusicUrl(id);
            vm.getLrc(id);
        },
        getMusicUrl(id) {
            let vm = this;
            axios.get('https://musicapi.leanapp.cn/song/url', {
                params: {
                    id: id
                }
            }).then(function (res) {
                let lrc = res.data;
                vm.setPlayInfo({
                    lrc: vm.parseLrc(lrc)
                });
            }).catch(function (error) {
                console.log(error);
            });
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
        }
    }
}
</script>

<style lang="less" scoped>
.song_list {
    .top {
        padding: 0 10px 0 32px;
        height: 33px;
        border-bottom: 2px solid #c20c0c;
    }
    .top2 {
        padding: 0;
    }
    .top01 {
        font-size: 20px;
        line-height: 28px;
    }
    .top02 {
        margin: 9px 0 0 20px;
        color: #666;
    }
    .top03 {
        float: right;
    }
    .red {
        color: #c20c0c;
        font-weight: bold;
    }
}
.s_list {
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    .head {
        float: left;
    }
    .sl_head {
        height: 40px;
        width: 100%;
        line-height: 39px;
        background-color: #f3f3f3;
        border-bottom: 1px solid #d3d3d3;
        box-shadow: 0px 2px 4px #d3d3d3;
        color: #666;
        .kong {
            width: 10%;
            height: 100%;
            padding-left: 8px;
            border-right: 1px solid #d3d3d3;
        }
        .title {
            width: 41%;
            padding-left: 8px;
            border-right: 1px solid #d3d3d3;
        }
        .time {
            width: 14%;
            padding-left: 8px;
            border-right: 1px solid #d3d3d3;
        }
        .singer {
            width: 15%;
            padding-left: 8px;
            border-right: 1px solid #d3d3d3;
        }
        .zji {
            padding-left: 8px;
            width: 20%;
        }
    }
    .sl_bot {
        border-bottom: 1px solid #d3d3d3;
        .index {
            width: 10%;
            height: 100%;
            padding-left: 15px;
            position: relative;
            color: #999;
        }
        li {
            line-height: 30px;
            overflow: hidden;
        }
        li:nth-child(n) {
            background-color: #f7f7f7;
            height: 30px;
        }
        li:nth-child(2n) {
            background-color: #fff;
            height: 30px;
        }
        li:hover {
            height: 45px;
            line-height: 45px;
            .play {
                top: 14px;
            }
        }
        .title {
            width: 41%;
            padding-left: 8px;
            height: 100%;
            overflow: hidden;
            cursor: pointer;
        }
        .time {
            width: 14%;
            padding-left: 8px;
        }
        .singer {
            width: 15%;
            padding-left: 8px;
        }
        .zji {
            padding-left: 8px;
            padding-right: 16px;
            width: 20%;
            height: 100%;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .play {
            position: absolute;
            right: 14px;
            top: 7px;
            width: 17px;
            height: 17px;
            cursor: pointer;
            background: url(../../assets/table.png) no-repeat;
            background-position: 0 -103px;
        }
    }
}
</style>

