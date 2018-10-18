/**
 * Created by tmj on 2018/10/11.
 */
module.exports = {
    title: '公共技术文档平台',
    description: 'Document library ',
    port: 8182,
    // head: [
    //     ['link', { rel: 'icon', href: `/favicon.ico` }],
    // ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间
        search: true,
        searchMaxSuggestions: 10,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'Lion-Atom/tmj.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'Lion-Atom/tmj.github.io',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        serviceWorker: {
            updatePopup: true
            // 开启 themeConfig.serviceWorker.updatePopup 选项，将开启一个能够刷新内容的弹窗。
            // 当网站更新（即 Service Worker 更新）时，它会提供一个 refresh 按钮，允许用户立刻刷新内容。
        },
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
                    ['/frontend/css', 'CSS'],
                    ['/frontend/vuepress爬坑篇之搭建个人博客', 'vuepress爬坑篇之搭建个人博客'],
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
                    ['/document/AlwaysNew最佳实践手册', 'AlwaysNew2.0最佳实践手册']
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