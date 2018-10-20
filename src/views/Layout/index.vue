<template>
    <div>
        <router-view />
        <BottomNav></BottomNav>
    </div>
</template>

<script>
    import BottomNav from '@/components/BottomNav'

    export default {
        components: {
            BottomNav
        }
    }
</script>

<style scoped>

</style>