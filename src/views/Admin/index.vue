<template>
    <div class="admin">
        <div class="header">
            <div class="title">我的党建</div>
            <div class="banner">
                <div class="router" @click="$store.state.isLogin ? $router.push('/userinfo') : $router.push('/login')">
                    <div class="username">{{$store.state.isLogin ? formData.username : userInfo.username}}</div>
                    <div class="userinfo">
                        <img :src='$store.state.isLogin ? formData.header : userInfo.header'>
                    </div>
                    <div v-if="!this.$store.state.isLogin" class="tips">你还没有登录,请登录</div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main-item" 
                v-for="(item, index) in menuData" 
                @click="$store.state.isLogin ? $router.push(item.push) : $router.push(item.pushLogin)"
                :key="index">
                <div class="icon">
                    <img :src="item.icon">
                </div>
                <div class="content">{{item.title}}</div>
                <div class="linkitem">></div>
            </div>
        </div>
        <div class="footer">
             <mt-button v-if="$store.state.isLogin" type="danger" size="large" @click="loginout">退出登录</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    username: '请登录哦',
                    header: '../../../static/imgs/arvatar.jpg'
                },
                formData: {},
                isLogin: false,
                menuData: [
                    {
                        title: '个人信息',
                        icon: '../../../static/imgs/person.png',
                        pushLogin: '/login',
                        push: '/userinfo'
                    },
                    {
                        title: '个人量化积分',
                        icon: '../../../static/imgs/lxjf.png',
                        pushLogin: '/login',
                        push: '/adminscore'
                    },
                    {
                        title: '修改密码',
                        icon: '../../../static/imgs/xgmm.png',
                        pushLogin: '/login',
                        push: '/changepsw'
                    },
                    {
                        title: '党费缴纳',
                        icon: '../../../static/imgs/icon3.png',
                        pushLogin: '/login',
                        push: '/pay'
                    }
                ]
            }
        },
        methods: {
            getData() {
                this.isLogin = this.$store.state.isLogin
                this.formData = this.$store.state.userInfo
                console.log(this.formData, 'admin-formData')
            },
            loginout() {
                this.isLogin = false
                this.$store.commit('CHANGE_LOGIN', this.isLogin)
                this.$router.push('/login')

                this.isLogin = this.$store.state.isLogin
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.header{
    width: 15rem;
    height: 7rem;
    padding: 0.4rem 0;
    font-size: 18px;
    color: #fff;
    background: #c50206;
    text-align: center;

    .banner{
        margin: 0 auto;
        width: 6rem;
        height: 6.5rem;
        .router{
            color: #fff;
            text-decoration: none;
            .username{
                margin-top: 10px;
                font-size: 14px;
            }
            .userinfo{
                width: 3rem;
                height: 3rem;
                margin: 10px auto;
                overflow: hidden;
                border-radius: 100%;

                img{
                    display: block;
                    width: 3rem;
                    height: 3rem;
                }
            }
            .tips{
                font-size: 15px;
            }
        }
    }
}
.main{
    .main-item{
        width: 15rem;
        height: 2rem;
        padding: 1px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 16px;
        font-weight: 500;
        color: #666;
        display: flex;

        div{
            margin-top: 14px;
        }

        .icon, .linkitem{
            flex: 1
        }
        .content {
            flex: 5
        }

        .icon{
            margin-top: 12px;
            margin-left: 10px;

            img{
                width: 30px;
                height: 30px;
            }
        }
        .linkitem{
            margin-right: -30px;
            color: #ccc;
        }
    }
}

.footer{
    width: 15rem;
    margin-top: 1rem;
    margin-bottom: 70px;
}
</style>