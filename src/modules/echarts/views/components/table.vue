<template>
    <section>
        <div v-highlight v-html="showFileContent">vuex</div>
        <pre v-highlight><code class="javascript">const s = new Date().toString()</code></pre>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="goback(scope.row)">返回</el-button>
                    <el-button type="text" v-on:click="gointo">下钻</el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        mounted(){

        },
        methods: {
            goback(v){
                window.location.href = 'http://localhost:8088/modules/index.html';

            },
            gointo(){
//                alert(123457)
                this.$router.push('/views/tabs')
            }
        }
    }
</script>