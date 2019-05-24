import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/discover'
}, {
  path: '/discover',
  name: 'discover',
  component: resolve => require(['@/web/discover/discover'], resolve),
  children: [{
    path: '',
    name: 'recommend',
    component: resolve => require(['@/web/discover/recommend/recommend'], resolve)
  }, {
    path: 'topList/:id',
    name: 'topList',
    component: resolve => require(['@/web/discover/topList/topList'], resolve)
  }, {
    path: 'playList/:type',
    name: 'playList',
    component: resolve => require(['@/web/discover/playList/playList'], resolve)
  }, {
    path: 'djRadio',
    name: 'djRadio',
    component: resolve => require(['@/web/discover/djRadio/djRadio'], resolve)
  }, {
    path: 'artist',
    name: 'artist',
    component: resolve => require(['@/web/discover/artist/artist'], resolve)
  }, {
    path: 'album',
    name: 'album',
    component: resolve => require(['@/web/discover/album/album'], resolve)
  }]
}, {
  path: '/myMusic',
  name: 'myMusic',
  component: resolve => require(['@/web/myMusic/myMusic'], resolve)
}, {
  path: '/friend',
  name: 'friend',
  component: resolve => require(['@/web/friend/friend'], resolve)
}, {
  path: '/listDetails/:id',
  name: 'listDetails',
  component: resolve => require(['@/web/listDetails/listDetails'], resolve)
}, {
  path: '/songDetail/:id',
  name: 'songDetail',
  component: resolve => require(['@/web/songDetail/songDetail'], resolve)
}, {
  path: '/user',
  name: 'user',
  component: resolve => require(['@/web/user/user'], resolve),
  children: [{
    path: 'home/:uid',
    name: 'home',
    component: resolve => require(['@/web/user/home/home'], resolve)
  }, {
    path: 'event',
    name: 'event',
    component: resolve => require(['@/web/user/event/event'], resolve)
  }, {
    path: 'follows',
    name: 'follows',
    component: resolve => require(['@/web/user/follows/follows'], resolve)
  }, {
    path: 'fans',
    name: 'fans',
    component: resolve => require(['@/web/user/fans/fans'], resolve)
  }]
}, {
  path: '/artist/:id',
  name: 'artist',
  component: resolve => require(['@/web/artist/artist'], resolve)
}]

const router = new Router({
  routes
})

export default router;