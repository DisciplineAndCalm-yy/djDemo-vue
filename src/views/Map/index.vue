<template>
    <div class="map">
        <div class="header">
            <div class="back" @click="$router.back(-1)"> < </div>
            <span class="title">{{$route.query.title}}</span>
        </div>
        <div class="wrap">
            <div class="container" id="container">
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            getMap() {
                var map = new BMap.Map("container");    
                var point = new BMap.Point(116.404, 39.915);    
                map.centerAndZoom(point, 5);    
                window.setTimeout(function(){  
                    map.panTo(new BMap.Point(116.409, 39.918));    
                }, 2000);
                map.enableScrollWheelZoom(true);
                var opts = {anthor: BMAP_ANCHOR_TOP_LEFT}
                map.addControl(new BMap.NavigationControl(opts));

                var startpoint = new BMap.Point(114.02, 32.98);
                var startlabel = new BMap.Label('信息工程学院学生党支部', {
                    offset: new BMap.Size(30, 0)
                })
                var startmarker = new BMap.Marker(startpoint);
                map.addOverlay(startmarker)
                map.addOverlay(startlabel)
                startmarker.setLabel(startlabel)
            }
        },
        mounted() {
            this.getMap()
        },
        created() {
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
        height: calc( 100vh - 1.7rem );
        padding-top: 1.7rem;

        .container{
            height: 100%;
        }
    }
}
</style>