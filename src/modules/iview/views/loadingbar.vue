<template>
    <section>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item to="#">详情</Breadcrumb-item>
                <Breadcrumb-item to="/loadingbar">加载进度条</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <h1>标签页来了~</h1>
            </div>
            <div>
                <h1>vuex 测试</h1>
                Clicked: {{ getCount }} times
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </div>
            <Divider>分割线</Divider>
            <template>
                <Button @click="start">Start</Button>
                <Button @click="finish">Finish</Button>
                <Button @click="error">Error</Button>
            </template>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        name: 'Steps',
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'getCount'
                // ...
            ])
        },
        methods: {
            ...mapActions([
                'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
                'decrement'
            ]),
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }

</script>