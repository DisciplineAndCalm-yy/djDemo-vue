<template>
    <div class="footer">
        <div v-for="(item, index) in items"
            :key="index"
            :class="[item.cls, {active: $route.name === item.cls}]"
            @click="$router.push(item.push)"
        >
            <img :src="$route.name === item.cls ? item.iconSeleted : item.icon">
            <p class="">{{item.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        id: 0,
                        cls: 'Home',
                        name: '首页',
                        push: '/home',
                        icon: '../../static/imgs/党_grey.png',
                        iconSeleted: '../../static/imgs/党_red.png'
                    },
                    {
                        id: 1,
                        cls: 'Message',
                        name: '通知早知道',
                        push: '/message',
                        icon: '../../static/imgs/消息_grey.png',
                        iconSeleted: '../../static/imgs/消息_red.png'
                    },
                    {
                        id: 2,
                        cls: 'Admin',
                        name: '我的党建',
                        push: '/admin',
                        icon: '../../static/imgs/会员_grey.png',
                        iconSeleted: '../../static/imgs/会员_red.png'
                    }
                ]
            }
        },
        methods: {
            getParams() {

            }
        }
    }
</script>

<style scoped lang='scss'>
.footer{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: #aaa;
    background: #f1f3f5;

    div{
        display: inline-block;
        flex: 1;
        font-size: 12px;
        text-align: center;
        align-items: center;

        a{
            text-decoration: none;

        }
        
        img{
            margin-top: 4px;
            width: 21px;
            height: 27px;
        }
    }
}
.active{
    color: #c7000a;
    border-top: 2px solid #c7000a;
}
</style>