<template>
    <div class="life">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">掌上组织生活</span>
        </div>
        <div class="wrap">
            <img class="img" src="../../../static/imgs/timg.jpg">
            <div class="menu">
                <div class="left">
                    <router-link :to="{ path: '/news', query: { title: '政治学习', id: 8 } }">
                        <img src="../../../static/imgs/icon1.png">
                        <span>政治学习</span>
                    </router-link>
                    <router-link to='/'>
                        <img src="../../../static/imgs/icon4.png">
                        <span>民主评议</span>
                    </router-link>
                </div>
                <div class="mid">
                    <router-link :to="{ path: '/review', query: { title: '思想汇报' } }">
                        <img src="../../../static/imgs/icon2.png">
                        <span>思想汇报</span>
                    </router-link>
                    <router-link :to="{ path: '/map', query: { title: '流动党员找组织' } }">
                        <img src="../../../static/imgs/icon5.png">
                        <span>流动党员找组织</span>
                    </router-link>
                </div>
                <div class="right">
                    <router-link :to="{ path: '/review', query: { title: '心得总结' } }">
                        <img src="../../../static/imgs/icon3.png">
                        <span>心得总结</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.life{
    width: 15rem;

    .header{
        position: fixed;
        width: 15rem;
        height: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
        color: #fff;
        background: #c50206;

        .back{
            display: inline;
            padding: 0.3rem;
            width: 1.6rem;
            height: 1.1rem;
        }

        .title{
            display: inline-block;
            width: 12.8rem;
            height: 1.7rem;
            line-height: 1.7rem;
            font-size: 18px;
        }
    }

    .wrap{
        padding-top: 1.7rem;

        .img{
            display: block;
            width: 15rem;
        }

        .menu{
            width: 15rem;
            display: flex;

            .left, .mid, .right{
                flex: 1;
                display: flex;
                flex-direction: column;
                text-align: center;

                a{
                    text-decoration: none;
                    font-size: 14px;
                    color: #444;
                }

                img{
                    margin: 20px auto 10px;
                    flex: 1;
                    display: block;
                    width: 85px;
                    height: 85px;
                }
            }
        }
    }
}
</style>