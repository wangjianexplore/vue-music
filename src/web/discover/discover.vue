<template>
    <div class="discover">
        <!-- <facebook-loader></facebook-loader> -->
        <page-header :menuNum="1"></page-header>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>
<script>
// import { FacebookLoader } from 'vue-content-loader'
import pageHeader from '../pageHeader/pageHeader.vue';
import pageFooter from '../pageFooter/pageFooter.vue';
export default {
    name: 'discover',
    components: {
        // FacebookLoader,
        pageHeader,
        pageFooter
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less">
.discover {
    overflow-y: scroll;
    overflow-x: auto;
    height: 100%;
    width: 100%;
}
</style>


