<template>
    <div class="pay">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">缴纳党费</span>
        </div>
        <div class="wrap">
            <div class="box">
                <span class="title">请选择支付方式</span>
                <div class="item clearfix" @click="changeWechat">
                    <img class="icon fll" src="../../../static/imgs/wechat.png">
                    <span class="fll">微信</span>
                    <img class="right flr" src="../../../static/imgs/right.png">
                </div>
                <div class="item clearfix" @click="changeZhifubao">
                    <img class="icon fll" src="../../../static/imgs/zhifu.png">
                    <span class="fll">支付宝</span>
                    <img class="right flr" src="../../../static/imgs/right.png">
                </div>
                <div class="pay-we" v-if="showWechat">
                    <img src="../../../static/imgs/wechatpay.jpg">
                </div>
                <div class="pay-zhi" v-if="ShowZhifubao">
                    <img src="../../../static/imgs/zhifubao.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ShowWechat: false,
                ShowZhifubao: false
            }
        },
        methods: {
            changeWechat() {
                this.ShowWechat = !this.ShowWechat
            },
            changeZhifubao() {
                this.ShowZhifubao = !this.ShowZhifubao
            },
        }
    }
</script>

<style scoped lang='scss'>
.pay{
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

        .title{
            padding: 10px;
            display: block;
            font-size: 16px;
            font-weight: 500;
            color: #555;
        }

        .item{
            width: 100%;
            height: 60px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 16px;
            color: #555;

            cursor: pointer;
            
            &active{
                background-color: #f33;
            }

            img{
                display: inline-block;
            }

            .icon{
                margin: 10px 10px 0;
                width: 36px;
                height: 36px;
            }

            span{
                display: inline-block;
                margin-top: 16px;
            }

            .right{
                width: 16px;
                height: 20px;
                margin-top: 20px;
                margin-right: 10px;
            }
        }
    }
}

.pay-we, .pay-zhi{
    background:rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index:1000;

    img{
        width: 10rem;
        height: 12rem;
        background-color:#fff;
        border-radius:4px;
        left: 15%;
        top:50%;
        margin-top:-150px;
        position:relative;
    }
}
</style>