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
                </el-table>
            </div>
        </el-row>

    </section>
</template>

<script>
    import VueInstant from 'vue-instant'
    import axios from 'axios'
    export default{
        data(){
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
                }],
                value: '',
                suggestionAttribute: 'original_title',
                suggestions: [],
                selectedEvent: ""
            }
        },
        methods: {
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