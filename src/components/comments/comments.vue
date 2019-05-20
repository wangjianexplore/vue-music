<template>
    <div class="comments" :class="{'other-style':styleFlag}">
        <div class="comment">
            <div class="sl_top">
                <span class="span_song">评论</span>
                <span class="span_num">共{{hotComments.length}}条评论</span>
            </div>
            <div class="m-cmmt">
                <div class="cmmt-top">
                    <div class="cmmt-img">
                        <img src="https://p1.music.126.net/kQC7d6YwMAE23KtFoUXp_Q==/18899505369927830.jpg?param=180y180" alt="">
                    </div>
                    <div class="cmmt-input">
                        <textarea class="textarea" placeholder="评论"></textarea>
                        <div class="input-btn">
                            <span class="btn01"></span>
                            <span class="btn02"></span>
                            <span class="btn04">评论</span>
                            <span class="btn03">140</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cmmts">
            <div class="cmmts_top">
                精彩评论
            </div>
            <div class="cmmts_bot" :class="{'cmmts_bot1': index==0}" v-for="(item, index) in hotComments" :key="index">
                <div class="head">
                    <img :src="item.user.avatarUrl" alt="">
                </div>
                <div class="cmmts_txt">
                    <div class="txt"><span class="txt_span">{{item.user.nickname}}</span>：<span v-html="item.content.replace(/\n/g, '<br>')"></span></div>
                    <div>
                        <span class="date">{{formatDate(item.time, 'MM-dd mm:ss')}}</span>
                        <span class="hf">回复</span>
                        <span class="num">({{item.likedCount}})</span>
                        <span class="zan"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'comments',
    props: {
        styleFlag: {
            type: Boolean,
            default: false
        },
        hotComments: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapGetters(['getPlayBtnInfo'])
    }
}
</script>

<style lang="less" scoped>
.comment {
    margin-top: 40px;
    .sl_top {
        border-bottom: 2px solid #c20c0c;
        height: 33px;
        padding-left: 40px;
        padding-right: 30px;
    }
    .span_song {
        font-size: 20px;
        line-height: 28px;
        float: left;
    }
    .span_num {
        color: #666;
        margin: 9px 0 0 20px;
        float: left;
    }
    .m-cmmt {
        margin: 20px 0;
        overflow: hidden;
        padding-left: 40px;
        padding-right: 30px;
    }
    .cmmt-img {
        width: 60px;
        float: left;
        img {
            height: 50px;
            width: 50px;
        }
    }
    .cmmt-input {
        // height: 80px;
        margin-left: 60px;
        position: relative;
    }
    .textarea {
        width: 100%;
        height: 63px;
        padding: 5px 6px 6px;
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        resize: none;
        overflow: auto;
        outline: none;
    }
    .input-btn {
        padding-top: 10px;
        height: 36px;
    }
    .btn01 {
        width: 18px;
        height: 18px;
        background: url(../../assets/icon.png) no-repeat;
        background-position: -40px -490px;
        display: inline-block;
        overflow: hidden;
    }
    .btn02 {
        background: url(../../assets/icon.png) no-repeat;
        width: 18px;
        height: 18px;
        display: inline-block;
        background-position: -60px -490px;
        margin-left: 8px;
    }
    .btn03 {
        width: 31px;
        height: 18px;
        float: right;
        color: #999;
        line-height: 26px;
        padding-right: 5px;
    }
    .btn04 {
        float: right;
        width: 46px;
        height: 25px;
        color: #fff;
        text-align: center;
        line-height: 25px;
        background: url(../../assets/button.png) no-repeat;
        background-position: -84px -64px;
    }
}
.cmmts_top {
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
    margin-left: 40px;
    font-weight: bold;
    margin-right: 30px;
}
.cmmts_bot {
    padding: 15px 0;
    border-top: 1px dotted #ccc;
    margin-left: 40px;
    margin-right: 30px;
    overflow: hidden;
    .cmmts_txt {
        margin-left: 60px;
    }
    .head {
        float: left;
        width: 50px;
        height: 50px;
        img {
            width: 50px;
            height: 50px;
        }
    }
    .date {
        color: #999;
        margin-top: 15px;
        display: inline-block;
    }
    .zan {
        width: 15px;
        height: 14px;
        float: right;
        margin-top: 15px;
        margin-right: 9px;
        background: url(../../assets/icon2.png) no-repeat;
        background-position: -150px 0;
    }
    .num {
        margin-top: 15px;
        min-width: 15px;
        height: 14px;
        float: right;
        margin-right: 9px;
        border-right: 1px solid #d3d3d3;
        padding-right: 9px;
    }
    .hf {
        margin-top: 14px;
        float: right;
    }
    .txt_span {
        color: #0c73c2;
    }
}
.cmmts_bot1 {
    border-top: none;
}
.other-style {
    .sl_top {
        padding: 0;
    }
    .m-cmmt {
        padding: 0;
    }
    .cmmts_bot, .cmmts_top {
        margin: 0;
    }
}
</style>
