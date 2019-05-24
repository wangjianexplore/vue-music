import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import axios from 'axios';
Vue.use(Vuex);
const state = {
    playInfo: {
        index: 0,
        onplayflag: false,
        duration: 0,
        currentTime: 0,
        name: '',
        singer: '',
        picurl: '',
        musicurl: '',
        curlength: 0, // 进度条长度
        restart: false, // 是否重新播放
        order: 1, // 播放顺序 顺序、随机、单曲
        volume: 93, // 音量
        lrc: '', // 歌词
        id: '' // 歌曲id
    },
    playList: {
        list: [], // 播放列表
        songList: [] // 歌单列表
    },
    // 列表播放按钮数据
    playBtnInfo: {
        shareCount: 0, // 分享数
        subscribedCount: 0, // 收藏数
        commentCount: 0 // 评论数
    }
}
const mutations = {
    setPlayInfo(state, info) {
        state.playInfo.index = info.index == undefined ? state.playInfo.index : info.index;
        state.playInfo.onplayflag = info.onplayflag == undefined ? state.playInfo.onplayflag : info.onplayflag;
        state.playInfo.duration = info.duration == undefined ? state.playInfo.duration : info.duration;
        state.playInfo.currentTime = info.currentTime == undefined ? state.playInfo.currentTime : info.currentTime;
        state.playInfo.name = info.name == undefined ? state.playInfo.name : info.name;
        state.playInfo.singer = info.singer == undefined ? state.playInfo.singer : info.singer;
        state.playInfo.picurl = info.picurl == undefined ? state.playInfo.picurl : info.picurl;
        state.playInfo.musicurl = info.musicurl == undefined ? state.playInfo.musicurl : info.musicurl;
        state.playInfo.curlength = info.curlength == undefined ? state.playInfo.curlength : info.curlength;
        state.playInfo.restart = info.restart == undefined ? state.playInfo.restart : info.restart;
        state.playInfo.order = info.order == undefined ? state.playInfo.order : info.order;
        state.playInfo.volume = info.volume == undefined ? state.playInfo.volume : info.volume;
        state.playInfo.lrc = info.lrc == undefined ? state.playInfo.lrc : info.lrc;
        state.playInfo.id = info.id == undefined ? state.playInfo.id : info.id;
    },
    setPlayList(state, info) {
        state.playList.list = info.list == undefined ? state.playList.list : info.list;
        state.playList.songList = info.songList == undefined ? state.playList.songList : info.songList;
    },
    setPlayBtnInfo(state, info) {
        state.playBtnInfo.shareCount = info.shareCount == undefined ? state.playBtnInfo.shareCount : info.shareCount;
        state.playBtnInfo.subscribedCount = info.subscribedCount == undefined ? state.playBtnInfo.subscribedCount : info.subscribedCount;
        state.playBtnInfo.commentCount = info.commentCount == undefined ? state.playBtnInfo.commentCount : info.commentCount;
    }
}
const actions = {
    SetPlayInfo({ commit }, info) {
        commit('setPlayInfo', info);
    },
    SetPlayList({ commit }, info) {
        commit('setPlayList', info);
    },
    SetPlayBtnInfo({ commit }, info) {
        commit('setPlayBtnInfo', info);
    },
    playMusic({ commit, state }, playInfo) {
        // 判断是播放一首还是一个歌单
        if (playInfo.listFlag) {
            commit('setPlayList', {list: playInfo.list});
        } else {
            let list = state.playList.list;
            let arr = [];
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                arr.push(item.id);
            }
            if (arr.indexOf(playInfo.id) == -1) {
                playInfo.index = list.length;
                alert(playInfo.index);
                state.playList.list.push(playInfo.theMusic);
            }
        }
        if (state.playInfo.index == playInfo.index && state.playInfo.id == playInfo.id) {
            commit('setPlayInfo', {restart: !state.playInfo.restart});
        }
        commit('setPlayInfo', playInfo);
        // 获取歌词
        axios.get('https://v1.itooi.cn/netease/lrc', {
            params: {
                id: playInfo.id
            }
        }).then(function (res) {
            let lrcObj = {};
            lrcObj.lrc = actions.parseLrc(res.data);
            commit('setPlayInfo', lrcObj);
        }).catch(function (error) {
            console.log(error);
        });
    },
    parseLrc(lrc) {
        let arr = lrc.split('\n');
        var lrcArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                let temp = arr[i].split(']');
                if (temp.length > 1) {
                    var offset = temp[0].substring(1, temp[0].length + 1);
                    var text = temp[1];
                    if (text != '') {
                        lrcArray.push({ 'offset': offset, 'text': text });
                    }
                }
            }
        }
        return lrcArray;
    }
}
const getters = {
    getPlayInfo(state) {
        return state.playInfo;
    },
    getPlayList(state) {
        return state.playList;
    },
    getPlayBtnInfo(state) {
        return state.playBtnInfo;
    }
}
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({
        playInfo: state.playInfo,
        playList: state.playList
    }),
    filter: (mutation) => (
        mutation.type === 'setPlayInfo' ||
        mutation.type === 'setPlayList'
    )
});
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [vuexLocal.plugin]
});