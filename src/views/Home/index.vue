<template>
    <div class="home">
        <div class="header-wrap clearfix">
            <div class="img-wrap fll">
                <img src="../../../static/imgs/logo.png">
            </div>
            <router-link to='/login' v-if="!this.$store.state.isLogin">登录</router-link>
        </div>
        <div class="swiper-wrap">
            <mt-swipe :auto="4000" class="clearfix">
                <mt-swipe-item class="fll" v-for="(item, index) in banners" :key="index">
                    <router-link :to="{ path: '/news/newsdetail', query: { newsId: item.url, title: '随时随地学' } }">
                        <img class="swiper-img" :src="item.imgUrl">
                        <div class="swiper-font">
                            {{item.title}}
                        </div>
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="main">
            <div class="row">
                <router-link class="item" :to="{ path: '/news', query: { title: '信工新闻眼', id: 0 } }">
                    <div>
                        <img src="../../../static/imgs/icon_01.png">
                    </div>
                    <div class="main-font">
                        信工新闻眼
                    </div>
                </router-link>
                <router-link class="item" to='/life'>
                    <div>
                        <img src="../../../static/imgs/icon_03.png">
                    </div>
                    <div class="main-font">
                        掌上组织生活
                    </div>
                </router-link>
                <router-link class="item" to='/'>
                    <div>
                        <img src="../../../static/imgs/icon_05.png">
                    </div>
                    <div class="main-font">
                        党员云互动
                    </div>
                </router-link>
            </div>
            <div class="row">
                <router-link class="item" :to="{ path: '/news', query: { title: '党建一点通', id: 3 } }">
                    <div>
                        <img src="../../../static/imgs/icon_04.png">
                    </div>
                    <div class="main-font">
                        党建一点通
                    </div>
                </router-link>
                <router-link class="item" :to="{ path: '/news', query: { title: '党员亮身份', id: 5 } }">
                    <div>
                        <img src="../../../static/imgs/icon_06.png">
                    </div>
                    <div class="main-font">
                        党员亮身份
                    </div>
                </router-link>
                <router-link class="item" to='/'>
                    <div>
                        <img src="../../../static/imgs/icon_02.png">
                    </div>
                    <div class="main-font">
                        党史上的今天
                    </div>
                </router-link>
            </div>
        </div>
        <div class="main-banner">
            <img src="../../../static/imgs/banner01.png">
        </div>
        <div class="main-footer">
            <div class="left">
            </div>
            <div class="mid">
                <div class="photo">
                    <router-link :to="{ path: '/news', query: { title: '随时随地学', id: 6 } }"></router-link>
                </div>
                <div class="photo">
                    <router-link :to="{ path: '/news', query: { title: '制度建设', id: 4 } }"></router-link>
                </div>
            </div>
            <div class="right">
                <div class="photo">
                    <router-link :to="{ path: '/newspic', query: { title: '随时随地拍', id: 7 } }"></router-link>
                </div>
                <div class="photo">
                    <router-link :to="{ path: '/news', query: { title: '特色活动', id: 1 } }"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'mint-ui';

    export default {

    data () {
      return {
        banners: [ 
        ]
      }
    },
    methods: {
        getData() {
            this.$axios.get(`/carousel/carouselList.do?type=0`).then(res => {
                console.log(res)
                if(res.code == 1) {
                    this.banners = res.rows
                }
            })
        }
    },
    created() {
        this.getData()
    }
  }
</script>

<style scoped lang='scss'>
.header-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 15rem;
    height: 34px;
    padding: 5px;
    background: #c50206;
    z-index: 998;
    
    .img-wrap{
        position: relative;
        height: 34px;

        img{
            position: absolute;
            top: 0px;
            width: 136px;
            height: 34px;
        }
    }

    a{
        position: absolute;
        top: 10px;
        right: 30px;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
    }
}
.swiper-wrap{
    margin-top: 44px;

    .swiper-img{
        width: 15rem;
        height: 7.5rem;
    }
}
.swiper-wrap{ 
    width: 15rem;
    height: 7.5rem;
    position: relative;
    .swiper-font{
        position: absolute;
        z-index: 998;
        left: 0.2rem;
        bottom: 0.1rem;
        width: 15rem;
        height: 1rem;
        line-height: 1rem;
        font-weight: 500;
        color: #ccc;
        font-size: 12px;
        background: rgba($color: #000000, $alpha: .3)
    }
}
.main{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: url('../../../static/imgs/bt_bg.png') no-repeat;
    background-size: 100%;
    width: 15rem;
    height: 8rem;
    .row{
        display: flex;
        .item{
            flex: 1;
            font-size: 14px;
            text-decoration: none;
            text-align: center;
            color: #777;
        }
        img{
            width: 2rem
        }
    }
}
.main-banner{
    img{
        display: block;
        width: 15rem;
    }
}
.main-footer{
    display: flex;
    width: 15rem;
    height: 8.2rem;
    background: url('../../../static/imgs/tese.png') no-repeat;
    background-size: 100%;

    .left, .mid, .right{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 6.4rem;
        .photo{
            flex: 1;

            a{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>