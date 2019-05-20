<template>
    <div class="play">
        <ul>
            <li class="li_one" @click="playMusic()">
                播放
            </li>
            <li class="li_two"></li>
            <li class="li_three">({{getPlayBtnInfo.subscribedCount}})</li>
            <li class="li_four">({{getPlayBtnInfo.shareCount}})</li>
            <li class="li_five">下载</li>
            <li class="li_six">({{getPlayBtnInfo.commentCount}})</li>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
export default {
    name: 'songList',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['getPlayList', 'getPlayBtnInfo'])
    },
    methods: {
        ...mapMutations([
            'setPlayInfo', 'setPlayList'
        ]),
        playMusic() {
            let vm = this;
            vm.setPlayList({
                list: vm.getPlayList.songList
            });
            let item = vm.getPlayList.songList[0];
            vm.setPlayInfo({
                index: 0,
                onplayflag: true,
                duration: item.dt/1000,
                currentTime: 0,
                name: item.name,
                singer: item.ar[0].name,
                picurl: item.al.picUrl,
                musicurl: 'https://music.163.com/song/media/outer/url?id=' + item.id + '.mp3',
                curlength: 0,
                id: item.id
            });
            vm.getLrc(item.id)
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
.play {
    overflow: hidden;
    li {
        float: left;
        position: relative;
        background: url(../../../static/images/discover/button2.png) no-repeat;
    }
    .li_one {
        height: 31px;
        padding-right: 3px;
        padding: 0 7px 0 28px;
        color: #fff;
        background-position: 0 -387px;
        line-height: 31px;
        cursor: pointer;
    }
    .li_one:before {
        content: "";
        display: block;
        position: absolute;
        top: 6px;
        left: 6px;
        width: 20px;
        height: 18px;
        background: url(../../../static/images/discover/button2.png) no-repeat;
        background-position: 0 -1622px;
    }
    .li_two {
        width: 31px;
        height: 31px;

        background-position: 0 -1588px;
    }
    .li_three {
        height: 31px;
        padding-right: 3px;
        line-height: 30px;
        cursor: pointer;
        margin-left: 6px;
        padding-left: 27px;
        background-position: 0 -977px;
    }
    .li_three:before,
    .li_four:before,
    .li_five:before,
    .li_six:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: -4px;
        width: 23px;
        height: 31px;
        background: url(../../../static/images/discover/button2.png) no-repeat;
        background-position: right -1020px;
    }
    .li_four {
        height: 31px;
        line-height: 31px;
        padding-left: 30px;
        margin-left: 12px;
        background-position: 0 -1225px;
        padding-right: 3px;
    }
    .li_four:before {
        right: -4px;
    }
    .li_five {
        height: 31px;
        padding-right: 3px;
        line-height: 31px;
        padding-left: 30px;
        margin-left: 12px;
        background-position: 0 -2761px;
    }
    .li_six {
        padding-right: 3px;
        height: 31px;
        line-height: 31px;
        padding-left: 30px;
        margin-left: 12px;
        background-position: 0 -1465px;
    }
}
</style>
