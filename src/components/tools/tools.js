import Vue from 'vue';


Vue.prototype.formatDate = function (dateTime, fmt) { // author: meizz
    var isStr = isString(dateTime);
    if (dateTime != undefined && dateTime != '' && dateTime != null) {
        var time = dateTime;
        time = new Date(dateTime);
        if (isStr && dateTime.toString().indexOf('-') != -1) {
            time = new Date(dateTime.replace(/-/g, '/'));
        }
        var o = {
            'M+': time.getMonth() + 1, // 月份
            'd+': time.getDate(), // 日
            'h+': time.getHours(), // 小时
            'm+': time.getMinutes(), // 分
            's+': time.getSeconds(), // 秒
            'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
            'S': time.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
        return fmt;
    } else {
        return '';
    }
}

// 处理歌曲数据格式送往vuex（因为action中只接收一个参数）
Vue.prototype.sendMusicInfo = function(index, id, name, singer, picurl, tracks, listFlag = false, theMusic = {}) {
    return {
        curlength: 0,
        currentTime: 0,
        index: index,
        onplayflag: true,
        name: name,
        singer: singer,
        picurl: picurl,
        musicurl: 'http://music.163.com/song/media/outer/url?id=' + id + '.mp3',
        id: id,
        theMusic: theMusic,
        list: tracks,
        listFlag: listFlag
    }
}

function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]' || Object.prototype.toString.call(obj) === '[object Number]';
}