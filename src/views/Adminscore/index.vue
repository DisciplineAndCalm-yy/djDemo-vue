<template>
    <div class="score">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">个人量化积分</span>
        </div>
        <div class="wrap"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.score{
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
}
</style>