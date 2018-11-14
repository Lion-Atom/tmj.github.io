<template>
    <div id="app">
        <el-container>
            <el-header>
                <top-bar></top-bar>
            </el-header>
            <el-container>
                <!--<el-aside width="200px">-->
                    <!--<side-bar></side-bar>-->
                <!--</el-aside>-->
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer style="bottom:0px;position: fixed;">
                        <foot-bar></foot-bar>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
        <!--登陆界面-->
        <router-view v-if="!$route.meta.keepAlive" ></router-view>
    </div>
</template>

<script>
    import TopBar from './components/head-nav'
    import FootBar from './components/foot-nav.vue'
//    import SideBar from './components/left-nav.vue'
    export default {
        name: 'Admin',
        components: {TopBar,FootBar},
    }
</script>

<style scoped>
    *{
        margin:0px;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>