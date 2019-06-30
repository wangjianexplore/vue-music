<template>
    <div class="album">
        <discoverTag :liNum="6"></discoverTag>
        <div class="al_main">
            <!-- <div class="item">
                <div class="main_top">
                    <h3 class="h3">热门新碟</h3>
                </div>
                <div class="main_bot">
                    <ul>
                        <li class="col01" v-for="item in newAblum" :key="item.id">
                            <img :src="item.picUrl" alt="">
                            <div class="dec">{{item.name}}</div>
                            <div class="aut">{{item.artist.name}}</div>
                        </li>
                    </ul>
                </div>
            </div> -->
            <div class="item">
                <div class="main_top">
                    <h3 class="h3 h3_all">全部新碟</h3>
                    <!-- <ul class="sort">
                        <li>全部</li>
                        <li>|</li>
                        <li>华语</li>
                        <li>|</li>
                        <li> 欧美</li>
                        <li>|</li>
                        <li>韩国</li>
                        <li>|</li>
                        <li>日本</li>
                    </ul> -->
                </div>
                <div class="main_bot">
                    <ul>
                        <li class="col01" v-for="item in newAblum" :key="item.id">
                            <div class="bg"></div>
                            <img :src="item.picUrl" alt="" @click="$router.push('/listDetails/'+item.id)">
                            <div class="dec" @click="$router.push('/listDetails/'+item.id)">{{item.name}}</div>
                            <div class="aut" @click="$router.push('/artist/'+item.artist.id)">{{item.artist.name}}</div>
                        </li>
                    </ul>
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
                    limit: 35
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
