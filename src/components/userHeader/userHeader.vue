<template>
    <div class="homemain">
        <div class="wrap">
            <div class="head">
                <div class="head_left">
                    <img :src="profile.avatarUrl" class="h_img" alt="">
                </div>
                <div class="head_right">
                    <div class="hr_one">
                        <div class="one_top">
                            <h2>
                                <span class="name">{{profile.nickname}}</span>
                                <span class="level">
                                    {{level}}
                                    <i class="i_level"></i>
                                </span>
                                <span class="icon"></span>
                            </h2>
                            <div class="follow">
                                <span class="send">发私信</span>
                                <span class="foucs">关 注</span>
                            </div>
                            <div v-if="profile.userType!=0" class="look" @click="$router.push('/artist')">
                                <i class="i_look">查看歌手页</i>
                            </div>
                        </div>
                        <div class="one_bot">
                            <i class="tag"></i>
                            {{profile.description}}
                        </div>
                    </div>
                    <div class="hr_two">
                        <ul>
                            <li class="li_two">
                                <div class="dt_num" @click="$router.push('/user/event')">{{profile.authStatus}}</div>
                                <div class="dt" @click="$router.push('/user/event')">动态</div>
                            </li>
                            <li class="">
                                <div class="dt_num" @click="$router.push('/user/follows')">{{profile.djStatus}}</div>
                                <div class="dt" @click="$router.push('/user/follows')">关注</div>
                            </li>
                            <li class="">
                                <div class="dt_num" @click="$router.push('/user/fans')">{{profile.followeds}}</div>
                                <div class="dt" @click="$router.push('/user/fans')">粉丝</div>
                            </li>
                        </ul>
                    </div>
                    <div class="hr_three">
                        个人介绍：{{profile.signature}}。
                    </div>
                    <div class="hr_three hr_four">
                        所在地区：台湾省 - 台北市
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'userHeader',
    data() {
        return {}
    },
    props: {
        level: {
            type: Number,
            default: 1
        },
        profile: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="less" scoped>
.homemain {
    width: 980px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    .wrap {
        padding: 40px;
        padding-bottom: 0;
    }
}
.head {
    overflow: hidden;
    .head {
        margin-bottom: 43px;
    }
    .head_left {
        float: left;
        width: 188px;
        margin-right: 40px;
    }
    .h_img {
        display: block;
        width: 180px;
        height: 180px;
        padding: 3px;
        background: #fff;
        border: 1px solid #d5d5d5;
    }
    .head_right {
        float: left;
        width: 670px;
    }
    .hr_one {
        padding-bottom: 12px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
        .one_top {
            overflow: hidden;
        }
        .name {
            float: left;
            margin-top: 3px;
            font-size: 22px;
            font-weight: normal;
            line-height: 30px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }
        .level {
            float: left;
            margin: 8px 0 0 10px;
            height: 19px;
            overflow: hidden;
            padding-left: 29px;
            line-height: 21px;
            color: #e03a24;
            font-size: 14px;
            font-weight: bold;
            font-style: italic;
            background: url(../../assets/icon2.png) no-repeat;
            background-position: -135px -190px;
        }
        .i_level {
            float: right;
            width: 9px;
            height: 19px;
            background: url(../../assets/icon2.png) no-repeat;
            background-position: -191px -190px;
            overflow: hidden;
            vertical-align: middle;
        }
        .icon {
            float: left;
            margin: 9px 0 0 8px;
            width: 20px;
            height: 20px;
            background: url(../../assets/icon.png) no-repeat;
            background-position: -41px -27px;
        }
        .send {
            float: left;
            margin: 4px 0 0 15px;
            width: 75px;
            height: 31px;
            background: url(../../assets/button.png) no-repeat;
            background-position: 0 -810px;
            line-height: 29px;
            padding-left: 30px;
        }
        .foucs {
            float: left;
            margin: 4px 0 0 15px;
            width: 70px;
            height: 31px;
            padding-left: 30px;
            background: url(../../assets/button.png) no-repeat;
            background-position: 0 -720px;
            color: #fff;
            line-height: 30px;
        }
        .look {
            float: right;
            margin-top: 4px;
            color: #333;
            background: url(../../assets/button2.png) no-repeat;
            background-position: right -100px;
            padding: 0 5px 0 0;
        }
        .i_look {
            color: #333;
            background: url(../../assets/button2.png) no-repeat;
            background-position: 0 -59px;
            padding: 0 15px 0 20px;
            height: 31px;
            line-height: 31px;
            overflow: hidden;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            font-style: normal;
        }
        .one_bot {
            margin-top: 8px;
            line-height: 20px;
            font-size: 14px;
            color: #666;
        }
        .tag {
            margin-right: 6px;
            float: left;
            background: url(../../assets/icon2.png) no-repeat;
            background-position: 0 -480px;
            width: 68px;
            height: 20px;
        }
    }
    .hr_two {
        height: 41px;
        margin-bottom: 15px;
        color: #666;
        li {
            float: left;
            padding: 0 40px 0 20px;
            border-left: 1px solid #ddd;
        }
        li:hover {
            color: #0c73c2;
        }
        .li_two {
            padding-left: 0;
            border-left: none;
        }
        .dt_num {
            margin-top: -4px;
            font-size: 24px;
            font-weight: normal;
            cursor: pointer;
        }
        .dt {
            display: block;
            text-indent: 2px;
            cursor: pointer;
        }
    }
    .hr_three {
        margin-bottom: 5px;
        line-height: 21px;
        color: #666;
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
    }
}
</style>

