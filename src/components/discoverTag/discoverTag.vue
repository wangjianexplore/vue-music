<template>
    <el-row class="row-top">
        <el-col :span="12" :offset="6" class="col-top">
            <ul class="ul-bar">
                <li :class="{li_active:liNum==1}" @click="$router.push('/discover')">推荐</li>
                <li :class="{li_active:liNum==2}" @click="$router.push('/discover/topList')">排行榜</li>
                <li :class="{li_active:liNum==3}" @click="$router.push('/discover/playList/全部')">歌单</li>
                <li :class="{li_active:liNum==4}" @click="$router.push('/discover/djRadio')">主播电台</li>
                <li :class="{li_active:liNum==5}" @click="$router.push('/discover/artist')">歌手</li>
                <li :class="{li_active:liNum==6}" @click="$router.push('/discover/album')">新碟上架</li>
            </ul>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'discover',
    data() {
        return {
        }
    },
    props: {
        liNum: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="less" scoped>
.row-top {
    background-color: #c20c0c;
    height: 35px;
    .col-top {
        padding-left: 10px;
    }
    li {
        padding: 0 13px;
        margin: 7px 17px 0;
        float: left;
        border-radius: 20px;
        line-height: 21px;
        color: #fff;
        cursor: pointer;
    }
    li:hover {
        background-color: #9b0909;
    }
    .li_active {
        background-color: #9b0909;
    }
}
</style>
