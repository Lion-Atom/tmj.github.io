/**
 * Created by tmj on 2018/10/11.
 */
module.exports = {
    title: '公共技术文档平台',
    description: 'Document library ',
    port: 8181,
    // head: [
    //     ['link', { rel: 'icon', href: `/favicon.ico` }],
    // ],
    // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            {text: '主页', link: '/'},
            {text: '前端文档', link: '/frontend/introduction'},
            {text: '后端文档', link: '/backend/java/utils/mapper'},
            {text: '开发环境', link: '/development/jdk安装'},
            {text: '共享文档', link: '/document/AlwaysNew场景案例分析'},
            {text: '多级测试', link: '/test/jav/first'},
            {text: '技术社区', link: 'http://community.winning.com.cn:8888'},
            // 下拉列表的配置
            {
                text: 'Languages',
                items: [
                    {text: 'Chinese', link: '/language/chinese'},
                    {text: 'English', link: '/language/English'}
                ]
            },
            {
                text: '更多',
                collapsable: true,
                items: [
                    {text: '开发者', items:[

                        {text:'fir',link:'http://caibaojian.com/vuepress/default-theme-config/#%E4%B8%BB%E9%A1%B5-homepage'},
                        {text:'st',link:'https://www.cnblogs.com/lewiscutey/p/9427421.html'}
                    ]},
                    {text: '版权', link: '/language/English'}
                ]
            }
        ],
        sidebar: [
            {
                title: '前端共享',
                // collapsable: false,
                children: [
                    ['/frontend/introduction', '前端介绍'],
                    ['/frontend/VUE进阶一之发布第一个vue发布项目', 'VUE进阶一之发布第一个vue发布项目'],
                    ['/frontend/html5', 'HTML5'],
                    ['/frontend/css', 'CSS']
                ]
            },
            {
                title: '后端共享',
                children: [
                    ['/backend/java/utils/mapper', 'mapper'],
                    ['/backend/java/utils/collection', 'collection'],
                    ['/backend/java/utils/net', 'net'],
                    ['/backend/java/utils/base','base']
                ]
            },
            {
                title: '开发环境',
                children: [
                    ['/development/jdk安装', 'jdk安装'],
                    ['/development/idea安装', 'idea安装'],
                    ['/development/maven安装', 'maven安装'],
                    ['/development/webstrom安装', 'webstrom安装'],
                    ['/development/alwaysnew助手安装', 'alwaysnew助手安装'],
                ]
            },
            {
                title: '共享文档',
                children: [
                    ['/document/AlwaysNew场景案例分析', 'AlwaysNew场景案例分析'],
                    ['/document/AlwaysNew实施路径说明文档', 'AlwaysNew实施路径说明文档'],
                    ['/document/AlwaysNew工具故障原因汇总及使用原则', 'AlwaysNew工具故障原因汇总及使用原则'],
                ]
            },
            {
                title:'多级测试',
                children:[
                    ['/test/jav/first', 'first'],
                    ['/test/jav/second', 'second'],
                ]
            }
        ]
        // sidebar: {
        //     '/note': [
        //         {
        //             title:'前端',
        //             collapsable: true,
        //             children:[
        //                 '/notes/frontend/VueJS组件编码规范',
        //                 '/notes/frontend/vue-cli脚手架快速搭建项目',
        //                 '/notes/frontend/深入理解vue中的slot与slot-scope',
        //                 '/notes/frontend/webpack入门',
        //                 '/notes/frontend/PWA介绍及快速上手搭建一个PWA应用',
        //             ]
        //         },
        //         {
        //             title:'后端',
        //             collapsable: true,
        //             children:[
        //                 'notes/backEnd/nginx入门',
        //                 'notes/backEnd/CentOS如何挂载磁盘',
        //             ]
        //         },
        //     ]
        // }
    },


}