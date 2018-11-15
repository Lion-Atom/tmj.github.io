<template>
    <section>

        <el-row>
            <span>{{selectedEvent}}</span>
            <vue-instant :suggestion-attribute="suggestionAttribute" v-model="value" :disabled="false" @input="changed"
                         @click-input="clickInput" @click-button="clickButton" @selected="selected" @enter="enter"
                         @key-up="keyUp" @key-down="keyDown" @key-right="keyRight" @clear="clear" @escape="escape"
                         :show-autocomplete="true" :autofocus="false" :suggestions="suggestions" name="customName"
                         placeholder="custom placeholder" type="google"></vue-instant>
        </el-row>
        <el-row>
            <h2>测试页-表格 Created By{{$store.state.creator}}</h2>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%;">
                    <el-table-column
                            prop="duration"
                            label="连接时长"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="dbName"
                            label="数据库名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="programName"
                            label="程序名称">
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-row>
        <el-row>

        </el-row>
    </section>
</template>

<script>
    //    import VueInstant from 'vue-instant'  //不需要组建单独引入，已全局定义，可直接引用
    import axios from 'axios'
    import { remoteCall } from "src/services/common/remoteCallService"

    export default{
        data(){
            return {
                tableData: null,
                value: '',
                suggestionAttribute: 'original_title',
                suggestions: [],
                selectedEvent: "",
            }
        },
        mounted(){
          this.refreshChartData();
        },
        methods: {
            handleClick(row){
//                alert(JSON.stringify(row))
                this.$router.push(" ")
            },
//            YYCPZB-SVR0
            refreshChartData(){
                var _self = this;
                var params = {
                    instanceName:"YYCPZB-SVR0",
                };
                remoteCall("PTS.ITOM.MSSQL.LIST.DB.CONNECTION.REALTIME.LIST.01", params)
                    .then(function (data) {
                        _self.tableData = data.connectionInfoList;
                    })
            },
            clickInput () {
                this.selectedEvent = 'click input'
            },
            clickButton () {
                this.selectedEvent = 'click button'
            },
            selected () {
                this.selectedEvent = 'selection changed'
            },
            enter () {
                this.selectedEvent = 'enter'
            },
            keyUp: function () {
                this.selectedEvent = 'keyup pressed'
            },
            keyDown: function () {
                this.selectedEvent = 'keyDown pressed'
            },
            keyRight: function () {
                this.selectedEvent = 'keyRight pressed'
            },
            clear: function () {
                this.selectedEvent = 'clear input'
            },
            escape: function () {
                this.selectedEvent = 'escape'
            },
            changed: function () {
                var that = this
                this.suggestions = []
                axios.get('https://api.themoviedb.org/3/search/movie?api_key=342d3061b70d2747a1e159ae9a7e9a36&query=' + this.value)
                    .then(function (response) {
                        response.data.results.forEach(function (a) {
                            that.suggestions.push(a)
//                            alert(13245)
                        })
                    })
            },

        }
    }
</script>
<style scoped>
    .dialog {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: fixed;
        width: 90%;
    }

    .dialog-content {
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
    }

    .dialog-fade-transition {
        transition: opacity .3s linear;
    }

    .dialog-fade-enter,
    .dialog-fade-leave {
        opacity: 0;
    }
</style>