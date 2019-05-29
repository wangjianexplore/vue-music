<template>
    <div class="myr_top">
        <div class="w_img">
            <img class="img" :src="songTop.coverImgUrl" alt="">
        </div>
        <div class="cnt">
            <div class="line01">
                <span class="logo"></span>
                <span class="title" v-text="songTop.name"></span>
            </div>
            <div class="line02">
                <img class="img02" :src="creator.avatarUrl?creator.avatarUrl:''" alt="">
                <span class="name" v-text="creator.nickname?creator.nickname:''"></span>
                <span class="create">{{formatDate(songTop.createTime, 'yyyy-MM-dd')}} 创建</span>
            </div>
            <songBtn></songBtn>
            <div class="label">
                <span class="span_bq">标签：</span>
                <span class="span" v-for="(item, index) in songTop.tags" :key="index"><i>{{item}}</i></span>
            </div>
            <div class="desc" ref="desc" v-if="songTop.description" :class="{desc_auto:showFlag}" v-html="songTop.description">
            </div>
            <div class="open" v-if="songTop.description">
                <span class="span_icon" @click="showFlag=!showFlag">{{showFlag==false?'展开':'收起'}}<i class="u-icn" :class="{u_icn2:showFlag==true}"></i></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'songListTop',
    data() {
        return {
            showFlag: false,
            avatarUrl: '',
            nickname: ''
        }
    },
    props: {
        songTop: {
            type: Object,
            default: {
                tags: []
            }
        },
        creator: {
            type: Object,
            default: {}
        }
    },
    mounted () {
    },
    updated () {
        console.log(this.$refs.desc);
    }
}
</script>

<style lang="less" scoped>
.myr_top {
    overflow: hidden;
    .w_img {
        width: 208px;
        height: 208px;
        padding: 3px;
        border: 1px solid #d3d3d3;
        float: left;
    }
    .cnt {
        margin-left: 230px;
        overflow: hidden;
    }
    .logo {
        float: left;
        width: 54px;
        height: 24px;
        background: url(../../assets/icon.png) no-repeat;
        margin-top: 5px;
        background-position: 0 -243px;
    }
    .title {
        line-height: 33px;
        font-size: 20px;
        font-weight: normal;
        padding-left: 7px;
    }
    .img {
        width: 200px;
    }
    .img02 {
        float: left;
        margin-right: 10px;
        width: 35px;
    }
    .line02 {
        margin-top: 12px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .name {
        float: left;
        color: #0c73c2;
        max-width: 210px;
        line-height: 35px;
        margin-right: 10px;
    }
    .create {
        float: left;
        line-height: 35px;
        color: #999;
    }
}
.label {
    overflow: hidden;
    margin: 25px 0 5px;
    line-height: 22px;
    color: #666;
    .span_bq {
        float: left;
    }
    .span {
        padding: 0 10px 0 0;
        text-shadow: 0 1px #fdfdfd;
        background: url(../../assets/button2.png) no-repeat;
        background-position: right -27px;
        float: left;
        margin: 0px 10px 3px 0;
        i {
            position: relative;
            zoom: 1;
            padding: 0 3px 0 13px;
            background: url(../../assets/button2.png)
                no-repeat;
            background-position: 0 0;
            float: left;
            height: 22px;
            line-height: 22px;
            font-style: normal;
            text-align: left;
            font-size: inherit;
        }
    }
}
.desc {
    margin-top: 4px;
    line-height: 18px;
    color: #666;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    height: 127px;
    overflow: hidden;
}
.desc_auto {
    height: auto;
}
.open {
    .span_icon {
        float: right;
        color: #0c73c2;
        cursor: pointer;
    }
    .u-icn {
        width: 11px;
        height: 8px;
        background: url(../../assets/icon.png) no-repeat;
        background-position: -65px -520px;
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
    }
    .u_icn2 {
        background-position: -45px -520px;
    }
}
</style>

