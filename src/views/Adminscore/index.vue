<template>
    <div class="score">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">个人量化积分</span>
        </div>
        <div class="wrap">
            <div class="bannar">
                <!-- <img class="b-img" src="../../../static/imgs/jifen.png"> -->
                <span class="score">68.5</span>
            </div>
            <div class="box clearfix">
                <router-link to="/scoredetail">
                    <img class="icon fll" src="../../../static/imgs/lxjf.png">
                    <span class="b-font">积分明细</span>
                    <img class="r-icon flr" src="../../../static/imgs/right.png">
                </router-link>
            </div>
            <div class="main clearfix">
                <span class="m-font fll">积分规则</span>
                <img class="m-img flr" src="../../../static/imgs/wenhao.png">
            </div>
            <div class="content clearfix" v-for="(item, index) in items" :key="index">
                <span class="c-title fll">{{item.item}}</span>
                <span class="c-score flr">{{item.score}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                items: [
                    { item: '登陆APP', score: '5' },
                    { item: '完善个人信息', score: '2' },
                    { item: '查看积分', score: '1' },
                    { item: '按时交纳党费', score: '10' },
                    { item: '查看通知', score: '2' },
                    { item: '了解学院工作动态', score: '5' },
                    { item: '上交思想汇报经审核通过', score: '5' },
                    { item: '主动学习相关文件', score: '10' },
                    { item: '提交个人总结，并参与评议', score: '5' },
                    { item: '积极参与互动', score: '2' },
                    { item: '学习党建知识', score: '5' },
                    { item: '学习党史', score: '10' },
                    { item: '创先争优事迹', score: '10' },
                    { item: '学党章，学习近平总书记系列讲话', score: '10' },
                    { item: '用镜头记录两学一做过程中令人感动的人和事', score: '3' },
                    { item: '关注并积极参与特色活动', score: '5' },
                    { item: '制度化、常态化建设', score: '5' }
                ]
            }
        }
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
        width: 100%;
        padding-top: 1.7rem;

        .bannar{
            width: 15rem;
            height: 6rem;
            position: relative;
            background: url('../../../static/imgs/jifen.png') no-repeat;
            background-size: contain;

            .score{
                position: absolute;
                top: 45%;
                left: 45%;
                color:#fff;
                font-size: 16px;
            }
        }
    }
}
.box{
    width: calc( 15rem - 2px );
    height: 2.2rem;
    border: 1px solid #ccc;
    
    a{
        text-decoration: none;
        color: #555;
        font-size: 16px;
    }

    .icon{
        width: 30px;
        height: 32px;
        margin: 10px 10px;
    }

    .b-font{
        display: inline-block;
        margin: 16px 10px;
    }

    .r-icon{
        width: 8px;
        height: 14px;
        margin: 20px 10px;
    }
}

.main{
    width: 15rem;
    height: 1.4rem;
    font-size: 14px;
    color: #555;
    background: #eee;

    .m-font{
        margin: 6px 10px;
    }

    .m-img{
        margin: 8px 10px;
    }
}
.content{
    font-size: 14px;
    padding: 10px;
    color: #777;
    border-bottom: 1px solid #ccc;

    .c-score{
        font-size: 14px;
        color: #f00;
    }
}
</style>