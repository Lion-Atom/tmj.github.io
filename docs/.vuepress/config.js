/**
 * Created by tmj on 2018/10/11.
 */
module.exports = {
    title: 'C++技术文档共享平台',
    description: 'C++ Document library',
    port: 8282,
    // head: [
    //     ['link', { rel: 'icon', href: `/favicon.ico` }],
    //     //增加manifest.json
    //     ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间
        search: true,
        searchMaxSuggestions: 10,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'Lion-Atom/tmj.github.io/tree/cpp',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'Lion-Atom/tmj.github.io',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'cpp',
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
            {text: '简介', link: '/'},
            {text: 'C++基础篇', link: '/base/环境设置'},
            {text: 'C++面向对象', link: '/object-oriented/类与对象'},
            {text: 'C++高级教程', link: '/advanced-course/文件和流'},
            {text: 'C++资源库', link: '/resources/STL'},
            {text: '技术社区', link: 'http://community.winning.com.cn:8888'},
        ],
        sidebar:{
            '/base/':[
                '环境设置',
                '基本语法',
                '注释',
                '变量类型',
                '数据类型',
                '变量作用域',
                '常量',
                '修饰符类型',
                '存储类',
                '运算符',
                '循环',
                '判断',
                '函数',
                '数字',
                '数组',
                '字符串',
                '指针',
                '引用',
                '日期与时间',
                '基本的输入输出',
                '数据结构'
            ],
            '/object-oriented/':[
                '类与对象',
                '继承',
                '重载运算符和重载函数',
                '多态',
                '数据抽象',
                '数据封装',
                '抽象类接口'
            ],
            '/advanced-course/':[
                '文件和流',
                '异常处理',
                '动态内存',
                '命名空间'
            ],
            '/resources/':[
                'STL',
                '标准库',
                '有用的资源'
            ]
        }
    }
}