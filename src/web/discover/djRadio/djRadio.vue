<template>
    <div class="djRadio">
        <discoverTag :liNum="4"></discoverTag>
        <div class="dj-main">
            <div class="dj-wrap">
                <div class="rditype">
                    <el-row>
                        <el-col class="el-col1" v-for="(item, index) in imgList" :key="index">
                            <div class="img" :style="{background:'url('+item.img+')'}"></div>
                            <div class="txt">{{item.name}}</div>
                        </el-col>
                    </el-row>
                </div>
                <div class="rditop">
                    <div class="rdi_l">
                        <div class="rdi_top">
                            <div class="left">推荐节目</div>
                            <div class="right">更多></div>
                        </div>
                        <div class="rdi_bot">
                            <ul>
                                <li v-for="(item, index) in songList" :key="index">
                                    <img class="img" :src="item.img" alt="">
                                    <div class="cnt">
                                        <div class="title">{{item.title}}</div>
                                        <div class="anthor">{{item.author}}</div>
                                    </div>
                                    <div class="cz">{{item.type}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="rdi_r">
                        <div class="rdi_top">
                            <div class="left">节目排行榜</div>
                            <div class="right">更多></div>
                        </div>
                        <div class="rdi_bot">
                            <ul>
                                <li v-for="(item, index) in songList" :key="index">
                                    <img class="img" :src="item.img" alt="">
                                    <div class="cnt cnt2">
                                        <div class="title">{{item.title}}</div>
                                        <div class="anthor">{{item.author}}</div>
                                    </div>
                                    <div class="cz cz2">
                                        <el-progress :percentage="item.percentage" :show-text="false" :stroke-width="8" color="#C5C5C5"></el-progress>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">音乐故事·电台</div>
                        <div class="right">更多></div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="http://p1.music.126.net/moRaw3RO6GqhHZ5Oe_qD4Q==/109951163197334196.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="http://p1.music.126.net/GdtBGzb16wrcODZIol3rvg==/109951163669619488.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">WILLIAMISM MIXTAPE</div>
                                        <div class="info_2">陈伟霆WILLIAMISM in the air</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="http://p1.music.126.net/JAXmMw2HqPwsOB9gXqwTng==/6627856092806601.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="http://p1.music.126.net/oS3VFvjZtq5mlM0gBldMbw==/109951163184183846.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">WILLIAMISM MIXTAPE</div>
                                        <div class="info_2">陈伟霆WILLIAMISM in the air</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">美文读物·电台</div>
                        <div class="right">更多></div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="http://p1.music.126.net/Urfj_LBMqC2Hmns673lvcA==/18941286812348365.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">洞见官方播客</div>
                                        <div class="info_2">不是每一种观点，都可以叫洞见</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="http://p1.music.126.net/3Fe6rJXZ1TZQWKxJ_OPFug==/109951163695051079.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">轻课朗读</div>
                                        <div class="info_2">让朗读走进生活，使阅读不再功利</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="http://p1.music.126.net/aYmFv3hYC9N_ZtqnaSV-ZQ==/109951163653916525.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">嘻哈公园thePark</div>
                                        <div class="info_2">最有态度的嘻哈电台</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="http://p1.music.126.net/DFpihgdwcXXw666hGuWWYw==/109951163677114323.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">郑老师的话</div>
                                        <div class="info_2">用一篇美文扫清一周的疲惫</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="rdimore">
                    <div class="u-title">
                        <div class="left">脱口秀·电台</div>
                        <div class="right">更多></div>
                    </div>
                    <div class="rd_list">
                        <el-row>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="http://p2.music.126.net/xKmmWnSGehUq5tsaPPSTWw==/109951163187119570.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">杉果电台</div>
                                        <div class="info_2">真正懂你的游戏脱口秀</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2">
                                    <img class="img2" src="http://p2.music.126.net/c9YaKZJStOeuk4Acahx3Ng==/109951163078416366.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">粤知一二官方电台</div>
                                        <div class="info_2">听了就会上瘾的粤语脱口秀</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="http://p2.music.126.net/24W4kAaBtm5PS73Dk3O3RA==/109951163546073369.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">老梁的四大名著情商课</div>
                                        <div class="info_2">识人辨事明理，中国式情商教科书</div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col class="el-col2" :span="12">
                                <div class="list_col2 list_col3">
                                    <img class="img2" src="http://p2.music.126.net/cEL-igelEKB9c9mwjuWmNg==/109951163559159300.jpg?param=200y200" alt="">
                                    <div class="info">
                                        <div class="info_1">潇洒办事处</div>
                                        <div class="info_2">做你最贴心的电台管家</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'djRadio',
    data() {
        return {
            imgList: [
                {
                    name: '有声书',
                    img: 'http://p1.music.126.net/jQo83vj8D0r3g0ydL1ujag==/18555358232264878.jpg'
                },
                {
                    name: '知识技能',
                    img: 'http://p1.music.126.net/OQ-1zApxCjSxieFf63irwA==/19212866183939953.jpg'
                },
                {
                    name: '商业财经',
                    img: 'http://p1.music.126.net/27_UywB9VT7qTicVaUL2Ww==/19052337486286044.jpg'
                },
                {
                    name: '人文历史',
                    img: 'http://p1.music.126.net/fxNHDWCNVvRFa_3KAsBw6w==/3242459791054879.jpg'
                },
                {
                    name: '外语世界',
                    img: 'http://p1.music.126.net/tNg9R3kjzSAvYRU439sV-A==/18996262393228947.jpg'
                },
                {
                    name: '亲子宝贝',
                    img: 'http://p1.music.126.net/WtEmxKotqvrOx02c7RwbdQ==/19167786207164648.jpg'
                },
                {
                    name: '创作|翻唱',
                    img: 'http://p1.music.126.net/cCogGBNagepu5uAd-OuCKQ==/19119407695444318.jpg'
                },
                {
                    name: '音乐故事',
                    img: 'http://p1.music.126.net/fNsFzMtgDByvOnpA0Kfehg==/3242459791054876.jpg'
                },
                {
                    name: '3D|电子',
                    img: 'http://p1.music.126.net/BVIacbDdjw90QjU4z7mZIw==/3389794351757648.jpg'
                },
                {
                    name: '相声曲艺',
                    img: 'http://p1.music.126.net/DZV3wnLcYoc32YLnxoVCOg==/3240260767799323.jpg'
                },
                {
                    name: '情感调频',
                    img: 'http://p1.music.126.net/RuluBZUC94KRYjx0eF7aHQ==/3223768093383533.jpg'
                },
                {
                    name: '美文读物',
                    img: 'http://p1.music.126.net/svlzt2aNhbHcAVRG1ae9nw==/19199672044369951.jpg'
                },
                {
                    name: '脱口秀',
                    img: 'http://p1.music.126.net/QdPlGPCPc-QDdaIKuVq3RQ==/3236962232922745.jpg'
                },
                {
                    name: '广播剧',
                    img: 'http://p1.music.126.net/MkrVCkXoJ7v29QXLBluUkw==/19167786207164651.jpg'
                },
                {
                    name: '二次元',
                    img: 'http://p1.music.126.net/2jEyq6KuPUv0GgFOeDB0rA==/7731765766567381.jpg'
                },
                {
                    name: '明星做主播',
                    img: 'http://p1.music.126.net/Jnx0K_M3Nc0Uk5YBXPifqw==/3249056860670081.jpg'
                },
                {
                    name: '娱乐|影视',
                    img: 'http://p2.music.126.net/8yoy33lYuvviDbcg1AOLUw==/3242459791054877.jpg'
                },
                {
                    name: '科技科学',
                    img: 'http://p2.music.126.net/RLir9qUUGNolaxtMz-mPNA==/18896206835140215.jpg'
                }
            ],
            songList: [
                {
                    img: 'http://p1.music.126.net/D4yVBSzaWcLo8BMWGRN_iw==/19016053603020354.jpg?param=40x40',
                    title: '心 愿 便 利 T',
                    author: '亲爱的阿彪',
                    type: '创作|翻唱',
                    percentage: 70
                }, {
                    img: 'http://p1.music.126.net/1O9zMhmg5oCGQIrm_vL6cQ==/109951163782395047.jpg?param=40x40',
                    title: '专访【音乐人—川南】',
                    author: '被解放的耳朵',
                    type: '脱口秀',
                    percentage: 60
                }, {
                    img: 'http://p1.music.126.net/xd3IxgkIBhamslu7JCPnVg==/109951163283513298.jpg?param=40x40',
                    title: '一汪《清水河》火了张云雷',
                    author: '苏遥扯闲篇儿',
                    type: '人文历史',
                    percentage: 50
                }, {
                    img: 'http://p1.music.126.net/ldr595h7DfjFLE9VOHTOoA==/109951163783597163.jpg?param=40x40',
                    title: 'YOU（I）',
                    author: '柯西瓜的音乐电台',
                    type: '创作|翻唱',
                    percentage: 30
                }, {
                    img: 'http://p2.music.126.net/mYbAYle0ClnfrIG9lZxqsg==/109951163784388450.jpg?param=40x40',
                    title: '还是当皇上牛！就为皇上的馋口儿而发明---果脯 蜜饯.mp3',
                    author: '知味老京城',
                    type: '旅途|城市',
                    percentage: 60
                }, {
                    img: 'http://p2.music.126.net/Tr8FdWpVWImumIYikszvFg==/109951163783874144.jpg?param=40x40',
                    title: '初恋忏悔手册',
                    author: '世间美好破坏指南',
                    type: '脱口秀',
                    percentage: 40
                }, {
                    img: 'http://p2.music.126.net/dwPnme9sogcnxxhEW0dLWA==/109951163783465916.jpg?param=40x40',
                    title: 'Vol.14年度歌单里有没有另一个你',
                    author: '民谣火锅',
                    type: '音乐故事',
                    percentage: 80
                }, {
                    img: 'http://p2.music.126.net/PDg9wyxzOUOUyDR0diezkQ==/109951163783906005.jpg?param=40x40',
                    title: '夜行千里 VOYAGE AU BOUT DE LA NUIT.mp3',
                    author: 'WILLIAMISM MIXTAPE',
                    type: '音乐故事',
                    percentage: 70
                }, {
                    img: 'http://p2.music.126.net/kY3t7oz-GMPwXiS2cnFUFw==/109951163783778636.jpg?param=40x40',
                    title: '那些历史上著名的玩笑',
                    author: '有趣历史',
                    type: '脱口秀',
                    percentage: 100
                }, {
                    img: 'http://p2.music.126.net/nfrHvzPS2ezvYt4Jv7fENw==/109951163782039326.jpg?param=40x40',
                    title: '友谊地久天长（演奏：陌上花开）',
                    author: '拇指琴の陪伴生活',
                    type: '音乐故事',
                    percentage: 20
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import "./djRadio.less";
</style>
<style lang="less">
.el-progress-bar__outer {
    background-color: #dedede;
}
</style>

