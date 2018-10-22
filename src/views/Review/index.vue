<template>
    <div class="review">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">{{$route.query.title}}</span>
        </div>
        <div class="wrap">
            <img class="img" src="../../../static/imgs/reviewing.png">
            <div class="w-font">正在审核中</div>
            <button class="btn" @click="$router.back(-1)">关闭</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.review{
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
        width: 15rem;
        padding-top: 1.7rem;
        text-align: center;

        .img{
            margin-top: 2rem;
            margin-bottom: 0.5rem;
            display: inline-block;
            width: 90px;
            height: 90px;
        }

        .w-font{
            font-size: 14px;
            font-weight: 500;
            color: #999;
        }

        .btn{
            margin-top: 4rem;
            width: 60%;
            height: 40px;
            background: #c50206;
            color: #fff;
            border-radius: 12px;
        }
    }
}
</style>