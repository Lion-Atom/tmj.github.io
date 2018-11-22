<template>
    <section>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item to="/">网关</Breadcrumb-item>
                <Breadcrumb-item to="#">导航</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <h1>标签页来了~</h1>
            </div>
            <div>
                <Tabs value="1">
                    <TabPane :label="label_one" name="1">
                        <template>
                            <Tabs type="card">
                                <TabPane label="内嵌标签一" name="1">
                                    卡片标签页1
                                </TabPane>
                                <TabPane label="内嵌标签二" name="2">
                                    卡片标签页2
                                </TabPane>
                                <TabPane label="内嵌标签三" name="3">
                                    卡片标签页3
                                </TabPane>
                            </Tabs>
                        </template>
                    </TabPane>
                    <TabPane label="标签二" name="2">
                        哎呦，这里没人哦~
                    </TabPane>
                    <TabPane label="标签三" name="3">
                        哦呦，还是有个人的~
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default{
        data(){
            return {
                label_one: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: this.$store.state.count,
                            }
                        })
                    ])
                },
            }
        }, components: {},
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'getCount'
                // ...
            ])
        },
        mounted(){

        },
        methods: {
            ...mapActions([

            ])
        }
    }</script>
<style scoped></style>