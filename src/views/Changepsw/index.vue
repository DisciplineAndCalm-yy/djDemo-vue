<template>
    <div class="changpsw">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">修改密码</span>
        </div>
        <div class="wrap">
            <div class="form-wrap">
                <div class="item">
                    <span class="i-font">旧密码：</span>
                    <input class="change" type="password">
                </div>
                <div class="item">
                    <span class="i-font">新密码：</span>
                    <input class="change" type="password">
                </div>
                <div class="item">
                    <span class="i-font">确认密码：</span>
                    <input class="change" type="password">
                </div>
            </div>
            <div class="btn-wrap">
                <button class="btn">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.changpsw{
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

    .form-wrap{
        width: 12rem;
        height: 12rem;
        margin: 50px auto 0;

        .i-font{
            display: block;
            font-size: 16px;
            color: #666;
        }

        .change{
            margin: 20px auto;
            width: 100%;
            height: 20px;
            padding: 10px 6px;
            font-size: 16px;
            border: 1px solid #999;
            border-radius: 6px;
            &:focus{
                outline: none;
            }
        }
    }

    .btn-wrap{
        width: 12rem;
        height: 2rem;
        margin: 0 auto;
        text-align: center;

        .btn{
            width: 100%;
            height: 50px;
            background: #ef473a;
            font-size: 16px;
            color: #fff;
            border-radius: 8px;
            &:focus{
                outline: none;
            }
        }
    }
}
</style>