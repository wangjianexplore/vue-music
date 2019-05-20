<template>
    <div class="header">
        <div class="wrap">
            <div class="logo" @click="$router.push('/discover')"></div>
            <div class="menu">
                <div class="menu_div" :class="{menu_active: menuNum==1}" @click="$router.push('/discover')">发现音乐</div>
                <div class="menu_div" :class="{menu_active: menuNum==2}" @click="$router.push('/myMusic')">我的音乐</div>
                <div class="menu_div" :class="{menu_active: menuNum==3}" @click="$router.push('/friend')">朋友</div>
                <div class="menu_div" :class="{menu_active: menuNum==4}">商城</div>
                <div class="menu_div" :class="{menu_active: menuNum==5}">音乐人</div>
                <div class="menu_div lastmenu" :class="{menu_active: menuNum==6}">下载客户端</div>
            </div>
            <div class="search">
                <input type="text" class="s_input" placeholder="音乐/视频/电台/用户">
            </div>
            <div class="author">
                创作者中心
            </div>
            <div class="info" @mouseenter="showInfo()" @mouseleave="hideInfo()">
                <img width="30" height="30" src="https://p1.music.126.net/kQC7d6YwMAE23KtFoUXp_Q==/18899505369927830.jpg?param=180y180" alt="" class="info_img">
                <div class="mainInfo" v-show="infoFlag">
                    <ul>
                        <li><i class="imgi img1"></i>我的主页</li>
                        <li><i class="imgi img2"></i>我的消息</li>
                        <li><i class="imgi img3"></i>我的等级</li>
                        <li><i class="imgi img4"></i>VIP会员</li>
                        <li><i class="imgi img5"></i>个人设置</li>
                        <li><i class="imgi img6"></i>实名认证</li>
                        <li><i class="imgi img7"></i>退出</li>
                    </ul>
                    <i class="arr"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pageHeader',
    data() {
        return {
            infoFlag: false
        }
    },
    props: {
        menuNum: {
            type: Number,
            default: 0
        }
    },
    methods: {
        showInfo() {
            this.infoFlag = true;
        },
        hideInfo() {
            this.infoFlag = false;
        }
    }
}
</script>

<style lang="less" scoped>
@import './pageHeader.less';
</style>
