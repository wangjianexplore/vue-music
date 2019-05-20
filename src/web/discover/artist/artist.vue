<template>
    <div class="artist">
        <discoverTag :liNum="5"></discoverTag>
        <div class="art_main">
            <div class="main_l">
                <div class="g-wrap">
                    <div class="items">
                        <h2 class="tit">推荐</h2>
                        <ul class="left_ul">
                            <li class="ac_li"><span class="dot"></span>推荐歌手</li>
                            <li><span class="dot"></span>入驻歌手</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">华语</h2>
                        <ul class="left_ul">
                            <li><span class="dot"></span>华语男歌手</li>
                            <li><span class="dot"></span>华语女歌手</li>
                            <li><span class="dot"></span>华语组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">欧美</h2>
                        <ul class="left_ul">
                            <li><span class="dot"></span>欧美男歌手</li>
                            <li><span class="dot"></span>欧美女歌手</li>
                            <li><span class="dot"></span>欧美组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">日本</h2>
                        <ul class="left_ul">
                            <li><span class="dot"></span>日本男歌手</li>
                            <li><span class="dot"></span>日本女歌手</li>
                            <li><span class="dot"></span>日本组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">韩国</h2>
                        <ul class="left_ul">
                            <li><span class="dot"></span>韩国男歌手</li>
                            <li><span class="dot"></span>韩国女歌手</li>
                            <li><span class="dot"></span>韩国组合/乐队</li>
                        </ul>
                    </div>
                    <div class="items item2">
                        <h2 class="tit">其他</h2>
                        <ul class="left_ul">
                            <li><span class="dot"></span>其他男歌手</li>
                            <li><span class="dot"></span>其他女歌手</li>
                            <li><span class="dot"></span>其他组合/乐队</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main_r">
                <div class="warp">
                    <div class="r_top">
                        <h3 class="h3">入驻歌手</h3>
                        <div class="more">更多 ></div>
                    </div>
                    <div class="r_bot">
                        <el-row>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">张惠妹</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">Fine乐团</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">万晓利</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p3.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">赵雷</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">王三溥</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">吴莫愁</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p3.music.126.net/aSFrKm-igpxlvzYrdJOMPQ==/279275953476688.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">洪启</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/d9xefjQIm5uWrEyalZjCkg==/109951163522346856.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">李霄云</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p3.music.126.net/YOmW5GdOWA44oascVdjfUw==/280375465100304.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">孙楠</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">老狼</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="warp">
                    <div class="r_top">
                        <h3 class="h3">热门歌手</h3>
                        <div class="more">更多 ></div>
                    </div>
                    <div class="r_bot">
                        <el-row>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">张惠妹</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">Fine乐团</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">万晓利</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p3.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">赵雷</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">王三溥</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">吴莫愁</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p3.music.126.net/aSFrKm-igpxlvzYrdJOMPQ==/279275953476688.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">洪启</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/d9xefjQIm5uWrEyalZjCkg==/109951163522346856.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">李霄云</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p3.music.126.net/YOmW5GdOWA44oascVdjfUw==/280375465100304.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">孙楠</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                            <el-col class="el-col03">
                                <img class="img" src="https://p4.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=130y130" alt="">
                                <div>
                                    <div class="name">老狼</div>
                                    <div class="per"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import "./artist.less";
.ac_li {
    border: 1px solid #d3d3d3;
    color: #c20c0c;
    border-radius: 3px;
    .dot {
        background-color: #c20c0c!important;
    }
}
</style>
