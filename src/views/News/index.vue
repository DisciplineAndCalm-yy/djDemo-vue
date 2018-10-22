<template>
    <div class="news">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">{{$route.query.title}}</span>
        </div>
        <div  class="wrap" 
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <div class="main" v-for="(item, index) in formData" :key="index">
                <div>
                    <img class="img" :src="item.pic">
                </div>
                <div class="right">
                    <span class="r-title">{{item.title}}</span>
                    <div class="bottom">
                        <span>{{item.currentTime}}</span>
                        <img class="eye" src="../../../static/imgs/eyes.png">
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nomore">没有更多数据了</div>
    </div>
</template>

<script>
    import { InfiniteScroll } from 'mint-ui'
    
    export default {
        data() {
            return {
                id: '',
                page: 1,
                formData: []
            }
        },
        methods: {
            getData() {
                console.log(this.$route)
                this.id = this.$route.query.id
                this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=${this.id}`).then(res => {
                    if(res.code == 1) {
                        this.formData.push.apply(this.formData, res.rows)
                        console.log(res)
                    }
                })
            },
            loadMore() {
                this.page ++
                this.getData()
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.news{
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
    }

    .main{
        width: 14.2rem;
        height: 3.2rem;
        padding: 10px;
        display: flex;
        border-bottom: 1px solid #c1c3c5;

        .img{
            flex: 1;
            width: 80px;
            height: 80px;
        }

        .right{
            flex: 3;
            font-size: 12px;
            margin-left: 10px;
            color: #777;

            .r-title{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 16px;
                color: #333;
            }
        }
    }
}

.bottom{
    display: flex;
    margin-top: 16px;
    width: 100%;
    height: 20px;
    line-height: 20px;

    .eye{
        display: block;
        margin-left: 70px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
}

.nomore{
    margin: 10px auto;
    font-size: 16px;
    color: #999;
    text-align: center;
}
</style>