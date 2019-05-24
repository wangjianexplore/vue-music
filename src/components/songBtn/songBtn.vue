<template>
    <div class="play">
        <ul>
            <li class="li_one" @click="playMusic(sendMusicInfo(0,list[0].id,list[0].name,list[0].ar[0].name,list[0].al.picUrl,list,true))">
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
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
export default {
    name: 'songList',
    data() {
        return {
            list: []
        }
    },
    mounted () {
        this.list = this.getPlayList.songList
    },
    computed: {
        ...mapGetters(['getPlayList', 'getPlayBtnInfo'])
    },
    methods: {
        ...mapActions([
            'playMusic'
        ])
    }
}
</script>
<style lang="less" scoped>
.play {
    overflow: hidden;
    li {
        float: left;
        position: relative;
        background: url(../../assets/button2.png) no-repeat;
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
        background: url(../../assets/button2.png) no-repeat;
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
        background: url(../../assets/button2.png) no-repeat;
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
