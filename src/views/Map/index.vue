<template>
    <div class="map">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">{{$route.query.title}}</span>
        </div>
        <div class="wrap" id="container">
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            var map = new BMap.Map("container");    
            var point = new BMap.Point(116.404, 39.915);    
            map.centerAndZoom(point, 15);    
            window.setTimeout(function(){  
                map.panTo(new BMap.Point(116.409, 39.918));    
            }, 2000);
        }
    }
</script>

<style scoped lang='scss'>
.map{
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
        height: 100vh;
        padding-top: 1.7rem;
    }
}
</style>