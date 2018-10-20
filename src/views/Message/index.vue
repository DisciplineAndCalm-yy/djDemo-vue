<template>
    <div>
        <div class="header">
            <div>通知早知道</div>
        </div>
        <div class="main">
            <div class="main-item clearfix" 
                v-for="(message, index) in Messages" :key="index"
            >   
                <div class="left fll">
                    <img :src="message.icon">
                </div>
                <div class="right fll">
                    <div class="content">{{message.content}}</div>
                    <div class="time">{{message.createtime}}</div>
                </div>
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
                Messages: [
                    {
                        icon: '../../../static/imgs/iconfont_gonggaotongzhi.png',
                        content: '关于我院党总支近期将举办党的十九大知识竞赛的通知',
                        createtime: '2017-10-30 14:53:56',
                        push: '/'
                    },
                    {
                        icon: '../../../static/imgs/iconfont_gonggaotongzhi.png',
                        content: '信息工程学院组织教工党员赴何家冲开展“最佳党日活动” ',
                        createtime: '2017-10-30 14:53:56',
                        push: '/'
                    }
                ]
            }
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