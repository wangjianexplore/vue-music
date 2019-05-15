<template>
    <div class="user">
        <page-header></page-header>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>
<script>
import pageHeader from '../pageHeader/pageHeader.vue';
import pageFooter from '../pageFooter/pageFooter.vue';
export default {
    name: 'user',
    components: {
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
.user {
    overflow-y: scroll;
    overflow-x: auto;
    height: 100%;
    width: 100%;
}
</style>