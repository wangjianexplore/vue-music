<template>
    <div class="myMusicBody">
        <page-header :menuNum="2"></page-header>
        <div class="redBar"></div>
        <div class="myMusic">
            <div class="my_main">
                <div class="my_l">
                    <h2 class="h2 h3" :class="{active_color:h2Num==1}" @click="h2Num=1">我的歌手(3)</h2>
                    <h2 class="h2 h3" :class="{active_color:h2Num==2}" @click="h2Num=2">我的电台(3)</h2>
                    <div class="creatList">
                        <span class="cl" v-show="listShow"></span>
                        <span class="cl2" v-show="!listShow"></span>
                        <h2 class="h2" @click="listShow=!listShow">创建的歌单(6)<span class="build">新建</span></h2>
                        <ul v-show="listShow">
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="creatList">
                        <span class="cl" v-show="listShow2"></span>
                        <span class="cl2" v-show="!listShow2"></span>
                        <h2 class="h2" @click="listShow2=!listShow2">收藏的歌单(6)</h2>
                        <ul v-show="listShow2">
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                            <li class="li">
                                <img class="img" src="https://p2.music.126.net/THGppBt3_BLxnm9tGQTK5Q==/7884597883694834.jpg?param=40y40" alt="">
                                <div class="li_info">
                                    <div class="title">评论过万的中文歌与潜力股</div>
                                    <div class="num_auth">206首 by 吴雪龙</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="my_r">
                    <div class="myr_t">
                        <songListTop></songListTop>
                    </div>
                    <div class="myr_bot">
                        <songList></songList>
                    </div>
                    <comments></comments>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pageHeader from '../pageHeader/pageHeader.vue';
export default {
    name: 'homePage',
    components: {
        pageHeader
    },
    data() {
        return {
            listShow: true,
            listShow2: true,
            h2Num: 1
        }
    },
    // beforeCreate () {
    //   document.querySelector('html').setAttribute('style', 'overflow: hidden;');
    //   document.querySelector('body').setAttribute('style', 'overflow: hidden;');
    // },
    mounted() {
    }
    // beforeDestroy () {
    //   document.querySelector('html').removeAttribute('style');
    //   document.querySelector('body').removeAttribute('style');
    // }
}
</script>
<style lang="less" scoped>
.myMusicBody {
    position: fixed;
    height: 100%;
    width: 100%;
}
@import "./myMusic.less";
</style>
