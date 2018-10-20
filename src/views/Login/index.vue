<template>
    <div class="login">
        <div class="header">
            <div class="tips" @click="$router.back(-1)"> < </div>
            登录
        </div>
        <div class="main">
            <img class="logo" src="../../../static/imgs/logo.png">
            <div class="content">
                <input type="text" placeholder="身份证号" v-model="userData.id_card">
                <input type="password" placeholder="密码" v-model="userData.password">
                <mt-button type="danger" size="large" @click="login" @keyup.enter.native='login'>登录</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Button, Toast } from 'mint-ui'

    export default {
        data() {
            return {
                userData: {
                    id_card: '',
                    password: ''
                },
                userInfo: {},
                isLogin: false
            }
        },
        methods: {
            login() {
                let formData = new FormData()
                formData.append('id_card', this.userData.id_card)
                formData.append('password', this.userData.password)

                this.$axios.post('/user/userLogin.do', formData).then(res => {
                    if(res.code == 1) {
                        this.$router.back(-1)
                        this.isLogin = true
                        this.$store.commit('set_token', res.token)
                        this.$store.commit('CHANGE_LOGIN', this.isLogin)
                        
                        this.$store.commit('ADD_USERINFO', res.data)
                        this.userInfo = res.data
                        console.log(this.userInfo, 'login-userInfo')

                    } else {
                        console.log(res, 'Error')
                    }
                })
            }
            // getToken() {
            //     var url = this.HOST + '/session'
            //     this.$axios.post(url, {
            //         username: this.loginForm.username,
            //         password: this.loginForm.pass
            //     }).then(res => {
            //         this.$message.sucess('登录成功')
            //         // let data = res.data
            //         this.$store.commit('set_token', res.token)

            //         if(store.state.token) {
            //             this.$router.push('/')
            //             console.log(store.state.token)
            //         } else {
            //             this.$router.replace('/login')
            //         }
            //     }).catch(err => {
            //         this.loading = false
            //         this.loginBtn = '登录'
            //         this.$message.error('账号或密码错误')
            //     })
            // }
        },
        created() {
            // this.getToken()
        }
    }
</script>

<style scoped lang='scss'>
.login{
    width: 15rem;
    height: 100vh;
    font-size: 18px;
    color: #fff;
    background: #c50206;
    .header{
        width: 15rem;
        height: 1.8rem;
        line-height: 1.8rem;
        position: relative;
        text-align: center;

        .tips{
            display: inline-block;
            position: absolute;
            top: -0.18rem;
            left: 0;
            width: 1rem;
            height: 1.4rem;
            font-size: 20px;
        }
    }

    .main{
        width: 15rem;
        height: 8.8rem;
        text-align: center;

        .logo{
            margin: 30px;
            width: 200px;
        }

        .content{
            margin: 0 auto;
            width: 300px;

            input{
                display: block;
                color: #fff;
                width: 280px;
                height: 30px;
                padding: 4px 10px;
                background: #c50206;
                border-radius: 6px;
                border: 1px solid #ff0;
                margin-bottom: 14px;
            }
            input::-webkit-input-placeholder {
                color: #fff;
            }
        }
    }
}
</style>