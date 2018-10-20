<template>
    <div class="userinfo">
        <div class="header">
            <router-link to='/admin'> < </router-link>
            <div class="title">个人信息</div>
            <div class="edit">编辑</div>
        </div>
        <div class="main">
            <div class="item clearfix">
                <span class="fll">头像</span>
                <img class="flr" :src="formData.header">
            </div>
            <div class="item clearfix">
                <span class="fll">姓名</span>
                <span class="flr">{{formData.username}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">身份证</span>
                <span class="flr">{{formData.idCard}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">家庭住址</span>
                <span class="flr">{{formData.hometown}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">工作地址</span>
                <span class="flr">{{formData.address}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">民族</span>
                <span class="flr">{{formData.nation}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">微信号</span>
                <span class="flr">{{formData.wxNum}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">QQ号</span>
                <span class="flr">{{formData.qqNum}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">性别</span>
                <span class="flr">{{formData.sex}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">最高学历</span>
                <span class="flr">{{formData.education}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">职称</span>
                <span class="flr">{{formData.jobRank}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">薪资水平</span>
                <span class="flr">{{formData.salary}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">入党时间</span>
                <span class="flr">{{formData.joinPartyTime}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">党费最后缴纳时间</span>
                <span class="flr">{{formData.lastPayTime}}</span>
            </div>
            <div class="item clearfix">
                <span class="fll">当前身份</span>
                <span class="flr">{{formData.partyIdentity}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {}
            }
        },
        methods: {
            getData() {
                this.$axios.get('/user/userInfo.do').then(res => {
                    console.log(res, 'res')
                    if(rse.code == 200) {
                    }
                })
                
                this.formData = this.$store.state.userInfo
                console.log(this.formData)
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.userinfo{
    width: 15rem;
    position: relative;
    
    .header{
        position: fixed;
        width: 14rem;
        display: flex;
        padding: 0 12.5px;
        font-size: 18px;
        height: 1.8rem;
        line-height: 1.8rem;
        color: #fff;
        text-align: center;
        background: #c50206;

        .title{
            flex: 6;
        }
        
        a{
            flex: 1;
            font-size: 28px;
            text-decoration: none;
            color: #fff;
        }

        .edit{
            text-align: center;
            flex: 1;
            font-size: 16px;
            font-weight: 400;
        }
    }

    .main{
        padding: 1.8rem 0;
        width: 15rem;

        .item{
            width: 14rem;
            padding: 0.6rem 0.5rem;
            font-size: 14px;
            color: #555;
            border-bottom: 1px solid #e8e8e8;

            img{
                width: 27px;
                height: 27px;
            }
        }
    }
}
</style>