---
title: VUE进阶之发布第一个vue发布项目
date: 2018-07-30 13:51:36
categories: 前端设计
pageClass: custom-page-class
sidebar: auto
---
# 前言

<p>前端工程化愈演愈热，熟悉几个前端的框架非常的有必要，在接触了angular2的项目之后，再来熟悉一款轻便型的前端框架-Vue,也是目前热门的前端框架之一。</p>

<!--more-->

# 内容
##  一.vue是什么？
Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架（Angular2）不同的是，Vue 采用自底向上增量开发的设计。
Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。
另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。 
   
##  二.vue的环境
```bash
1.node.js
2.cnpm
3.vue.js
4.vue/cli脚本架
```

##  三.环境搭建

### 1.node.js下载：<a href="https://nodejs.org/en/" >https://nodejs.org/en/</a>
  测试node安装成功：
```bash
node -v
npm  -v
```
### 2.命令提示符下载cnpm：
```bash
npm install cnpm -g --registry=https://registry.npm.taobao.org
```
  测试cnpm安装成功：
```bash
cnpm -v
```
<span style="color:#f44336;">注：如果若出错;因为cnpm会被安装到D:\Program Files\nodejs\node_global下，而系统变量path并未包含该路径。在系统变量path下添加该路径即可正常使用cnpm。</span>
### 3.安装vue.js:
```bash
cnpm install vue
```
如cnpm未安装或者安装失败解决不了则执行<div style="background-color:#000;color:#fff;">npm install vue</div>；后面cnpm均可以被npm代替
   测试vue.js安装是否成功:
```bash
vue -V 
```
### 4.全局安装vue/cli脚本架
```bash
cnpm install --global vue-cli
```
##  四.初始化一个vue.js项目
### 1.创建一个基于webpack的vue项目:
```bash
vue init webpack my-first-project      //初始化一个名为my-first-project的项目
```
### 2.在创建的项目中引入依赖包：
```bash
cd my-first-project
cnpm install
```
 ![An image](/npm-install.png) 

### 3.启动项目
```bash
cnpm start  //npm run dev 
```
![An image](/npm-run-dev.png) 
### 4.浏览器输入图中所示地址：
![An image](/dev-result.png) 







 