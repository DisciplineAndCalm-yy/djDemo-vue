<template>
    <div>
        我是通知页面的详情
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: {}
            }
        },
        methods: {
            getMessage() {
                this.$axios.get('/news/news').then(res => {
                    if(res.code == 1) {
                        console.log(res.data)
                    }
                })
            }
        },
        created() {
            this.getMessage()
        }
    }
</script>

<style scoped>

</style>