<template>
    <div>
        <div v-html="content"></div>
    </div>
</template>

<script>
    import getData from '../../utils/getToday'

    export default {
        data() {
            return{
                content: ''
            }
        },
        methods: {
            getData() {
                let url = `http://211.67.177.56:8080/hhdj/proxy/proxy.do`
                this.$axios.get(url).then(res => {
                    this.content = res.data
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>

</style>