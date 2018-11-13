<template>
    <div id="bar_polar_stack_radial" style="width:100%;height:400px;"></div>
</template>

<script>
    import echarts from 'echarts'
export default{
    data(){
        return {
            bar_polar_stack_radial:null,
        }
    },
    mounted(){
        this.drawchart();
    },
    methods:{
        drawchart(){
            this.bar_polar_stack_radial = echarts.init(document.getElementById('bar_polar_stack_radial'));
            this.bar_polar_stack_radial.setOption({
                angleAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    z: 10
                },
                radiusAxis: {
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [2, 4, 6, 1, 3, 2, 1],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: ['A', 'B', 'C']
                }
            })
            var _self = this;
//            var lists = getCurrentDatabaseList();
            _self.bar_polar_stack_radial.on('click', function (params) {
//                alert(123456)
//                for(var idx in lists){
//                    if(lists[idx].dbName == params.name){
//                        setCurrentDatabase(lists[idx])
                        _self.$router.push({path: '/views/components/table'});
//                        break;
//                    }
//                }
            });
        }
    }

}</script>
<style scoped></style>