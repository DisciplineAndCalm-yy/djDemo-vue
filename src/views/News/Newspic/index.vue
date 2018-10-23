<template>
    <div class="newspic">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">{{$route.query.title}}</span>
        </div>
        <div  class="wrap clearfix"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <div class="main fll" v-for="(item, index) in formData" :key="index">
                <router-link :to="{ path: '/news/newsdetail', query: { newsId: item.newsId, title: title } }">
                   <img class="img" :src="item.pic">
                   <span class="title">{{item.title}}</span>
                </router-link>
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
                title: this.$route.query.title,
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
.newspic{
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
        display: inline-block;
        width: 6.6rem;
        height: 6.8rem;
        padding: 10px;

        a{
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;

            .img{
                display: block;
                width: 6.2rem;
                height: 4.8rem;
            }

            .title{
                margin-top: 6px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 14px;
                color: #888;
            }
        }
    }
}

.nomore{
    margin: 10px auto;
    font-size: 16px;
    color: #999;
    text-align: center;
}
</style>