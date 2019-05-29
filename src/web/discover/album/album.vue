<template>
    <div class="album">
        <discoverTag :liNum="6"></discoverTag>
        <div class="al_main">
            <div class="item">
                <div class="main_top">
                    <h3 class="h3">热门新碟</h3>
                </div>
                <div class="main_bot">
                    <!-- <el-row>
                        <el-col class="col01" v-for="item in newAblum" :key="item.id">
                            <img :src="item.picUrl" alt="">
                            <div class="dec">{{item.name}}</div>
                            <div class="aut">{{item.artist.name}}</div>
                        </el-col>
                    </el-row> -->
                    <el-row>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/AmEaUMtl8R1Aql12-ydRsg==/109951163754790236.jpg?param=130y130" alt="">
                            <div class="dec">幕后之王 电视原声音...</div>
                            <div class="aut">群星</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/5fOHbAii9M5SFWj78bpLzw==/109951163774726743.jpg?param=130y130" alt="">
                            <div class="dec">제33회 골든디스크어워즈</div>
                            <div class="aut">V.A.</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/SCKSIhCbxlqkC9rTjIWVAQ==/109951163739212997.jpg?param=130y130" alt="">
                            <div class="dec">进阶</div>
                            <div class="aut">林俊杰</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/kCi0Cy3rR-OpRtc7ISkZ-A==/109951163725046743.jpg?param=130y130" alt="">
                            <div class="dec">沙发海</div>
                            <div class="aut">陈绮贞</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p3.music.126.net/FGa7ytvHoL5Eigw4sXlC9A==/109951163747890417.jpg?param=130y130" alt="">
                            <div class="dec">0</div>
                            <div class="aut">林忆莲</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/AmEaUMtl8R1Aql12-ydRsg==/109951163754790236.jpg?param=130y130" alt="">
                            <div class="dec">幕后之王 电视原声音...</div>
                            <div class="aut">群星</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/5fOHbAii9M5SFWj78bpLzw==/109951163774726743.jpg?param=130y130" alt="">
                            <div class="dec">제33회 골든디스크어워즈</div>
                            <div class="aut">V.A.</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/SCKSIhCbxlqkC9rTjIWVAQ==/109951163739212997.jpg?param=130y130" alt="">
                            <div class="dec">进阶</div>
                            <div class="aut">林俊杰</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/kCi0Cy3rR-OpRtc7ISkZ-A==/109951163725046743.jpg?param=130y130" alt="">
                            <div class="dec">沙发海</div>
                            <div class="aut">陈绮贞</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p3.music.126.net/FGa7ytvHoL5Eigw4sXlC9A==/109951163747890417.jpg?param=130y130" alt="">
                            <div class="dec">0</div>
                            <div class="aut">林忆莲</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="item">
                <div class="main_top">
                    <h3 class="h3 h3_all">全部新碟</h3>
                    <ul class="sort">
                        <li>全部</li>
                        <li>|</li>
                        <li>华语</li>
                        <li>|</li>
                        <li> 欧美</li>
                        <li>|</li>
                        <li>韩国</li>
                        <li>|</li>
                        <li>日本</li>
                    </ul>
                </div>
                <div class="main_bot">
                    <el-row>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/AmEaUMtl8R1Aql12-ydRsg==/109951163754790236.jpg?param=130y130" alt="">
                            <div class="dec">幕后之王 电视原声音...</div>
                            <div class="aut">群星</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/5fOHbAii9M5SFWj78bpLzw==/109951163774726743.jpg?param=130y130" alt="">
                            <div class="dec">제33회 골든디스크어워즈</div>
                            <div class="aut">V.A.</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/SCKSIhCbxlqkC9rTjIWVAQ==/109951163739212997.jpg?param=130y130" alt="">
                            <div class="dec">进阶</div>
                            <div class="aut">林俊杰</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/kCi0Cy3rR-OpRtc7ISkZ-A==/109951163725046743.jpg?param=130y130" alt="">
                            <div class="dec">沙发海</div>
                            <div class="aut">陈绮贞</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p3.music.126.net/FGa7ytvHoL5Eigw4sXlC9A==/109951163747890417.jpg?param=130y130" alt="">
                            <div class="dec">0</div>
                            <div class="aut">林忆莲</div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/AmEaUMtl8R1Aql12-ydRsg==/109951163754790236.jpg?param=130y130" alt="">
                            <div class="dec">幕后之王 电视原声音...</div>
                            <div class="aut">群星</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/5fOHbAii9M5SFWj78bpLzw==/109951163774726743.jpg?param=130y130" alt="">
                            <div class="dec">제33회 골든디스크어워즈</div>
                            <div class="aut">V.A.</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/SCKSIhCbxlqkC9rTjIWVAQ==/109951163739212997.jpg?param=130y130" alt="">
                            <div class="dec">进阶</div>
                            <div class="aut">林俊杰</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p4.music.126.net/kCi0Cy3rR-OpRtc7ISkZ-A==/109951163725046743.jpg?param=130y130" alt="">
                            <div class="dec">沙发海</div>
                            <div class="aut">陈绮贞</div>
                        </el-col>
                        <el-col class="col01">
                            <img src="https://p3.music.126.net/FGa7ytvHoL5Eigw4sXlC9A==/109951163747890417.jpg?param=130y130" alt="">
                            <div class="dec">0</div>
                            <div class="aut">林忆莲</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'album',
    data() {
        return {
            newAblum: []
        }
    },
    mounted () {
        this.getAlbum();
    },
    methods: {
        getAlbum() {
            let vm = this;
            axios.get('http://musicapi.leanapp.cn/top/album', {
                params: {
                    offset: 0,
                    limit: 10
                }
            }).then(function (res) {
                vm.newAblum = res.data.albums;
            }).catch(function (error) {
                console.log(error);
            });
        },
    }
}
</script>

<style lang="less">
@import "./album.less";
</style>
