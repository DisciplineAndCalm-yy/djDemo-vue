<template>
    <div class="detail">
        <div class="d-header">
            <div class="d-back" @click="$router.back(-1)"> < </div>
            <span class="d-title">{{$route.query.title}}</span>
        </div>
        <div class="d-wrap">
            <h3>{{newsData.title}}</h3>
            <div v-html="newsData.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsData: {}
            }
        },
        methods: {
            getData() {
                let newsId = this.$route.query.newsId
                this.$axios.get(`/news/newsContent.do?newsId=${newsId}`).then(res => {
                    if(res.code == 1){
                        this.newsData = res.data
                    }
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style lang='scss'>
.detail{
    width: 15rem;

    .d-header{
        position: fixed;
        width: 15rem;
        height: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
        color: #fff;
        background: #c50206;

        .d-back{
            display: inline;
            padding: 0.3rem;
            width: 1.6rem;
            height: 1.1rem;
        }

        .d-title{
            display: inline-block;
            width: 12.8rem;
            height: 1.7rem;
            line-height: 1.7rem;
            font-size: 18px;
        }
    }

    .d-wrap{
        padding-top: 1.7rem;
        font-size: 16px;
        line-height: 1.2;

        h3{
            font-size: 24px;
            font-weight: 400;
            padding: 0.5rem;
        }

        div{
            width: 14rem;
            padding: 0.5rem;

            /deep/img{
                display: block;
                max-width: 100%;
                margin: auto;
            }

            /deep/h4{
                font-size: 18px;
                font-weight: 500;
            }

            /deep/p{
                margin-bottom: 14px;
            }
        }
    }
}
</style>