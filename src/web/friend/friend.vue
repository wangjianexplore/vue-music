<template>
    <div class="friend">
        <page-header :menuNum="3"></page-header>
        <div class="redBar"></div>
        <div class="f_main">
            <div class="main_l">
                <div class="n_left">
                    <div class="n_top">
                        <h3 class="dt">动态</h3>
                    </div>
                    <div class="n_bot">
                        <ul>
                            <li class="itemLi">
                                <div class="img"><img src="https://p1.music.126.net/LI663ME8CMYNr8p6MdeW9g==/18782957138964546.jpg?param=45y45" alt=""></div>
                                <div class="info">
                                    <div class="inf0_01">
                                        <span class="name">卖血哥</span>
                                        <span>发布视频</span>
                                    </div>
                                    <div class="time">1月7日 04:38</div>
                                    <div class="text">
                                        在现场连续唱了多首高音之后演绎这首【烟火里的尘埃】，可能有些许瑕疵，但还是可以接受的。<br>喜欢的朋友可以多多支持，点击收藏。<br>斗鱼TV：109064可以经常来听歌哦
                                    </div>
                                    <div class="video">
                                        <div class="video_img" @click="videoShow=true" v-show="!videoShow">
                                            <div class="video_title">
                                                <span>【烟火里的尘埃】炸街，斗鱼Live小王子的现场演绎</span>
                                                <span class="author"> - by 卖血哥</span class="aother">
                                            </div>
                                            <div class="play_logo"></div>

                                            <div class="play_bot">
                                                <span class="l_num">5623</span>
                                                <span class="r_time">05:08</span>
                                            </div>
                                            <img src="https://p2.music.126.net/VnuC7gnzivX0co0BC3OzDw==/109951163778640817.jpg?param=338y189" alt="">
                                        </div>
                                        <div class="video_play" v-show="videoShow">
                                            <div class="media_info">
                                                <span class="pack_up" @click="videoShow=false">收起</span>
                                                <span class="v_line"></span>
                                                <span class="title_v">【烟火里的尘埃】炸街，斗鱼Live小王子的现场演绎</span>
                                                <span class="author_v">卖血哥</span>
                                            </div>
                                            <video class="media" controls="controls" src="https://vodkgeyttp8.vod.126.net/vodkgeyttp8/A822DsKk_2237763704_shd.mp4?wsSecret=9126fe8e862b2f5891aab6a7df82ddde&wsTime=1547355099"></video>
                                        </div>
                                    </div>
                                    <div class="zan">
                                        <span class="zan01">—— 优质动态推荐</span>
                                        <span class="zan02">(12)</span>
                                        <span class="zan03">|</span>
                                        <span>转发 </span>
                                        <span class="zan03">|</span>
                                        <span>评论(10)</span>
                                    </div>
                                </div>
                            </li>
                            <li class="itemLi">
                                <div class="img"><img src="https://p1.music.126.net/BEFnwAq1DKvbY68i-8v_4Q==/109951163717583641.jpg?param=45y45" alt=""></div>
                                <div class="info">
                                    <div class="inf0_01">
                                        <span class="name">王宇良</span>
                                        <span>分享单曲</span>
                                    </div>
                                    <div class="time">最近</div>
                                    <div class="text">
                                        很想跟你们唠唠嗑，但怕你们不理我<img style="vertical-align: middle;" src="https://s1.music.126.net/style/web2/emt/emoji_342.png" alt="">
                                    </div>
                                    <div class="music">
                                        <img class="music_img" src="https://p1.music.126.net/XUV5-h21lVx6ncRKHjWRqw==/109951163049477992.jpg?param=40y40&quality=100" alt="">
                                        <div class="music_info">
                                            <div style="font-size: 14px;">闻窗一如初见</div>
                                            <div style="color: #666;">王宇良</div>
                                        </div>
                                    </div>
                                    <div class="images">
                                        <ul>
                                            <li><img src="https://p2.music.126.net/YoM4cWktxVxsKMxh00Y93w==/109951163680592809.jpg?param=0x338&quality=100" alt=""></li>
                                        </ul>
                                    </div>
                                    <div class="zan">
                                        <span class="zan01">—— 来这里关注乐坛资讯吧</span>
                                        <span class="zan02">(12)</span>
                                        <span class="zan03">|</span>
                                        <span>转发 </span>
                                        <span class="zan03">|</span>
                                        <span>评论(10)</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main_r">
                <div class="r_top">
                    <div style="overflow:hidden">
                        <div class="r_info">
                            <img src="https://p1.music.126.net/kQC7d6YwMAE23KtFoUXp_Q==/18899505369927830.jpg?param=180y180" alt="">
                        </div>
                        <h5 class="h5">那一岸边</h5>
                    </div>
                    <ul class="r_ul">
                        <li>
                            <div class="number">1</div>
                            <div>动态</div>
                        </li>
                        <li>
                            <div class="number">10</div>
                            <div>关注</div>
                        </li>
                        <li>
                            <div class="number">1</div>
                            <div>粉丝</div>
                        </li>
                    </ul>
                </div>
                <div class="g-wrap">
                    <div class="g_top">
                        <h4 class="h4">明星动态</h4>
                        <span class="span">换一批</span>
                    </div>
                    <div class="g_bot">
                        <ul>
                            <li>
                                <img class="img_li" src="https://p3.music.126.net/d_fIMlR6odZht4kWa9oG5w==/109951163123596131.jpg?param=45y45" alt="">
                                <div class="img_r">
                                    <div class="name">王东</div>
                                    <div class="zc">著名主持人，电台DJ，选秀评委</div>
                                </div>
                                <div class="gz">关注</div>
                            </li>
                            <li>
                                <img class="img_li" src="https://p3.music.126.net/d_fIMlR6odZht4kWa9oG5w==/109951163123596131.jpg?param=45y45" alt="">
                                <div class="img_r">
                                    <div class="name">王东</div>
                                    <div class="zc">著名主持人，电台DJ，选秀评委</div>
                                </div>
                                <div class="gz">关注</div>
                            </li>
                            <li>
                                <img class="img_li" src="https://p3.music.126.net/d_fIMlR6odZht4kWa9oG5w==/109951163123596131.jpg?param=45y45" alt="">
                                <div class="img_r">
                                    <div class="name">王东</div>
                                    <div class="zc">著名主持人，电台DJ，选秀评委</div>
                                </div>
                                <div class="gz">关注</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="g-wrap inter">
                    <div class="g_top">
                        <h4 class="h4">感兴趣的人</h4>
                        <span class="span">换一批</span>
                    </div>
                    <div class="g_bot">
                        <ul>
                            <li>
                                <img class="img_li" src="https://p4.music.126.net/KB7aK8AQBAjjyC8Ny0zCZw==/3262251007230961.jpg?param=30y30" alt="">
                                <div class="img_r">
                                    <div class="name">王东</div>
                                    <div class="zc">著名主持人，电台DJ，选秀评委</div>
                                </div>
                                <div class="gz">关注</div>
                            </li>
                            <li>
                                <img class="img_li" src="https://p4.music.126.net/KB7aK8AQBAjjyC8Ny0zCZw==/3262251007230961.jpg?param=30y30" alt="">
                                <div class="img_r">
                                    <div class="name">王东</div>
                                    <div class="zc">著名主持人，电台DJ，选秀评委</div>
                                </div>
                                <div class="gz">关注</div>
                            </li>
                            <li>
                                <img class="img_li" src="https://p4.music.126.net/KB7aK8AQBAjjyC8Ny0zCZw==/3262251007230961.jpg?param=30y30" alt="">
                                <div class="img_r">
                                    <div class="name">王东</div>
                                    <div class="zc">著名主持人，电台DJ，选秀评委</div>
                                </div>
                                <div class="gz">关注</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>
import pageHeader from '../pageHeader/pageHeader.vue';
import pageFooter from '../pageFooter/pageFooter.vue';
export default {
    name: 'friend',
    components: {
        pageHeader,
        pageFooter
    },
    data() {
        return {
            videoShow: false
        }
    }
}
</script>
<style lang="less">
@import "./friend.less";
.friend {
    overflow-y: scroll;
    overflow-x: auto;
    height: 100%;
    width: 100%;
}
</style>


