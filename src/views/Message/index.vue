<template>
    <div>
        <div class="header">
            <div>通知早知道</div>
        </div>
        <div class="main">
            <div class="main-item clearfix" 
                v-for="(message, index) in Messages" :key="index"
            >   
                <router-link :to="{ path: '/news/newsdetail', query: { title: '通知早知道', newsId: message.newsId } }">
                    <div class="left fll">
                        <img src="../../../static/imgs/iconfont_gonggaotongzhi.png">
                    </div>
                    <div class="right fll">
                        <div class="content">{{message.title}}</div>
                        <div class="time">{{message.currentTime}}</div>
                    </div>
                </router-link>
            </div>
            <div class="nodata">
                <span>没有数据了</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Messages: []
            }
        },
        methods: {
            getData() {
                this.$axios.get('/news/newsList.do?page=1&rows=10&type=2').then(res => {
                    if(res.code == 1) {
                        this.Messages = res.rows
                    }
                })
            }
        },
        created() {
            this.getData()
            console.log(this.Messages)
        }
    }
</script>

<style scoped lang='scss'>
.header{
    width: 15rem;
    height: 1rem;
    padding: 10px 0;
    color: #fff;
    font-size: 18px;
    background: #c50206;
    text-align: center;
}
.main{
    .main-item{
        width: 15rem;
        height: 3rem;
        padding: 10px;
        font-size: 15px;
        color: #333;
        border-bottom: 1px solid #e5e5e5;

        a{
            text-decoration: none;
            color: #555;
        }

        .left{
            display: inline-block;
            width: 3.5rem;
            height: 2.2rem;
            padding-top: 0.8rem;
            text-align: center;
            align-items: center;
            img{
                width: 35px;
                height: 35px;
            }
        }
        .right{
            display: inline-block;
            width: 10rem;
            height: 3rem;
            align-items: center;

            .time{
                margin-top: 10px;
                font-size: 12px;
                color: #666;
            }
        }
    }
}
.nodata{
    width: 15rem;
    height: 1rem;
    padding: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
    align-items: center;
}
</style>