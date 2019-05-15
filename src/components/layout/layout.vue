<template>
    <div class="layout">
        <div class="lay-main">
            <layleft></layleft>
            <layright></layright>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layout'
}
</script>

<style lang="less">
.layout {
    width: 100%;
    background-color: #f5f5f5;
    .lay-main {
        min-height: 700px;
        border: 1px solid #d3d3d3;
        border-bottom: none;
        border-top: none;
        width: 982px;
        margin: 0 auto;
        background-color: #fff;
        overflow: hidden;
    }
}
</style>

