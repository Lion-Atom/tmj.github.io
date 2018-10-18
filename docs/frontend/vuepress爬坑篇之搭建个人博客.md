# 前言
vuepress是尤大大4月12日发布的一个全新的[基于vue的静态网站生成器](https://vuepress.vuejs.org/)，实际上就是一个vue的[spa](https://www.jianshu.com/p/fad8aa9e277f)应用，内置webpack，可以用来写文档。
本文主要是分享本人在使用vuepress搭建[个人博客](http://172.16.140.35:81/)遇到的一些坑和比较实用的小技巧。
![官方图](https://files.jb51.net/file_images/article/201804/2018426112733150.png)
<!--more-->
# 内容
## 开撸框架
你可以跟着文档上的例子自己玩一玩，不过由于VuePress的文档也是用VuePress来实现的，可以取巧直接拿VuePress仓库中的docs目录拿来玩耍。
但是官网上的例子对于初学者来说，不适合作为第一个demo撸撸。下面我以webstrom工具为例新建一个空项目。可以从下图看出来啥都不用刻意布局：
![新建空项目](/vuepress-new-demo.png)
### 1.首先安装VuePress
 ````bush
 yarn add -D vuepress 或者 npm install -g vuepress  //全局安装
 yarn global add vuepress 或者 npm install -D vuepress  //本地安装
 ````
### 2.新建docs目录
````bush
mkdir docs
````
### 3.新建一个 markdown 文件
````bush
# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md
````
### 4.添加package.json 脚本
````bush
{
  "devDependencies": {
    "vuepress": "^1.0.0-alpha.8"
  },                              //vuepress版本，此段可自行添加
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
````
### 5.开始写作或预览
````bush
yarn docs:dev # 或者：npm run docs:dev
````
我们可以从下图中可以看到我们的目录结构和预览/写作的入口，打开http://localhost:8080/可以预览：
![demo-codes](/vuepress-demo-codes.png)
### 6.运行结果预览
![运行结果预览](/demo-dev-result.png)
## 正式构建
基于上面，我们已经为个人博客这个目标搭好了我们的“地基”，下面正式填充内容。在正式开始“添砖加瓦”之前，我们先为我们的项目打包，
build生成静态的HTML文件,默认会在 .vuepress/dist 文件夹下；之所以要在建造之前打包就是因为我们后面配置文件config.js、放置静态文件public目录等都是在**[.vuepress]**文件目录下的。
````bush
yarn docs:build # 或者：npm run docs:build
````
### 首页
首页作为门面，我们必然要规范一下，炫酷一下，同样采用官方那个样式，看起来也不是不错的哦；根据个人喜好可以试试看，在根目录下的README.md中修改内容为：
````bush
---
home: true   //这句意在指定首页是此页
heroImage: /logo.jpg
actionText: Demo →
actionLink: /
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
````
### 基本配置
在 .vuepress目录下新建一个config.js,他导出一个对象

一些配置可以参考[官方文档](https://vuepress.vuejs.org/config/#base),这里我配置常用及必须配置:
网站信息、导航栏设置、端口号自定义、侧边栏设置、默认全局搜索。
#### 网站信息
````bush
module.exports = {
  title: '游魂的文档',
  description: 'Document library',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }], //需要开启
  ],
   base: '/', // 这是部署到github相关的配置 下面会讲
   markdown: {
       lineNumbers: true // 代码块显示行号
   },
}
````
#### 导航栏配置
导航栏可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置；导航栏中的/相对目录都是以docs为根目录的，创建目录时候一定不要搞错了，如下面的frontend目录层级适合.vuepress同级。
````bush
module.exports = {
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/frontEnd/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      { text: '个人博客', link: 'http://172.16.140.35/' },
      // 下拉列表的配置
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ]
  }
}
````
如图：
![](blog-demo-p1.png)
#### 端口自定义
````bush
port:8383  //避免默认的8080端口占用冲突
````
#### 侧边栏配置
````bush
 sidebar: [
            {
                title: '前端共享',
                // collapsable: false,
                children: [
                    ['/frontend/introduction', '前端介绍'],
                    ['/frontend/vuepress爬坑篇之搭建个人博客', 'vuepress爬坑篇之搭建个人博客'],
                    ['/frontend/html5', 'HTML5'],
                    ['/frontend/css', 'CSS'],
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
        ]
````
如图：
![](/vuepress-side-bar.png)
至此，大致的一个个人博客就创建好了，页面的具体填充就不再赘述了。
### 其他
#### 图片添加
图片统一放在docs/.vuepress/public文件夹下面，如上面首页中***heroImage: /logo.jpg***logo.jpg图片放在public下：
#### 内置搜索
你可以通过设置 themeConfig.search: false 来禁用默认的搜索框，或是通过 themeConfig.searchMaxSuggestions 来调整默认搜索框显示的搜索结果数量：
````bush
module.exports = {
  themeConfig: {
    search: true, //false是关闭
    searchMaxSuggestions: 10 //搜索结果条目最大为10
  }
}
````
你可以通过 themeConfig.algolia 选项来用 []Algolia](https://community.algolia.com/docsearch/) 搜索 替换内置的搜索框。要启用 Algolia 搜索，需要注册购买域名等，具体事宜
请参考[Algolia DocSearch 的文档](https://github.com/algolia/docsearch#docsearch-options)
#### 侧边栏分组
默认侧边栏是所有板块公用的，但如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：
````bush
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
````
接着，遵循以下的侧边栏配置：
````bush
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
````
***注意***：确保 fallback 侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
#### 自动生成侧栏
如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 YAML front matter 来实现：

````bush
sidebar: auto
`````
也可以在config.js中themeConfig同样使用*sidebar:auto*里面全局定义它。
#### git部署
默认已经本地已建git仓库，没有的话可参考Git的安装及使用进行详细说明的[文档](https://git-scm.com/downloads/)。
#### 第一步：创建本地仓库用于push到远处仓库
终端进入项目所在目录，输入：
````bush
git init
git add -A
git commit -m 'deploy'
````
#### 第二步：为当前用户（我的是root用户）创建ssh连接公钥，并将公钥添加在添加在个人的Git@OSC账号下，用于向远程服务器push时的验证
参见其它文章，不再详述。
#### 第三步：为StudyGit项目添加远程仓库，并将本地仓库中代码push到远程仓库：
````bush
git remote add origin 你的远程库地址 //origin是仓库别称可自行定义；
如：git remote add origin https://github.com/Lion-Atom/tmj.github.io
````
如果提示SSL未开启错误，我们可以借助下面两行代码避开：
````bush
git config --global http.proxy
git config --global --unset http.proxy
````
然后你就可以push了！
#### 第四步（可选）：Git 仓库和编辑链接
当你提供了 themeConfig.repo 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接。
````bush
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
````
可以参考作者的自定义配置：
````bush
 repo: 'Lion-Atom/tmj.github.io'
 repoLabel: '查看源码',
 docsRepo: 'Lion-Atom/tmj.github.io',//远程仓库地址
 docsDir: 'docs',
 docsBranch: 'master', //远程git所属分支名称
 // 默认是 false, 设置为 true 来启用
 editLinks: true,
 editLinkText: '帮助我们改善此页面！',
 serviceWorker: {
     updatePopup: true
 },
````

### 注意事项(坑)
- 把你想引用的资源都放在.vuepress目录下的public文件夹
- 给git仓库绑定了独立域名后,记得修改base路径
- 设置侧边栏分组后默认会自动生成 上/下一篇链接
- 设置了自动生成侧边栏会把侧边栏分组覆盖掉
- 设置PWA记得开启SSL
## 附录
Git命令速查表：
![Git命令速查表](/git命令速查表.png)