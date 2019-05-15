<template>
    <div class="likeList">
        <h3 class="like_top">喜欢这个歌单的人</h3>
        <div class="like_bot">
            <el-row class="like_row">
                <el-col :span="6" class="like_col" v-for="(item, index) in likeList" :key="index">
                    <img :src="item.avatarUrl" class="img" alt="">
                </el-col>
                <!-- <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col>
                <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col>
                <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col>
                <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col>
                <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col>
                <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col>
                <el-col :span="6" class="like_col">
                    <img src="http://p1.music.126.net/eW4ifgFuAmVRkOKDKwnYng==/18941286811950406.jpg?param=40y40" alt="">
                </el-col> -->
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'likeList',
    props: {
        likeList: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="less">
.like_row {
    margin-left: -13px;
}
.like_col {
    padding-bottom: 10px;
    padding-left: 13px;
    box-sizing: border-box;
    height: 53px;
    .img {
        width: 100%;
    }
}
.like_top {
    position: relative;
    height: 23px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;
}
</style>
