(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{151:function(t,a,s){"use strict";s.r(a);var _=s(0),r=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"_1-ghost安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ghost安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.GHOST安装")]),t._v(" "),s("p",[s("strong",[t._v("场景：")]),t._v("\n医院新采购一批电脑，那么这些电脑需要装上许多定制的软件（比如CIS，HIS），单独去给每台电脑安装时很麻烦的，就会想到何不在给电脑装系统时就给安装上，而且给电脑装系统这事可以让电脑卖家来做，我们需要做的就是制作一个电脑系统的ghost。我们需要关注的就是怎么去制作ghost。"),s("br"),t._v(" "),s("strong",[t._v("解决方案：")]),t._v("\nAlwaysNew v2.0 时可以支持Ghost安装方式的，在一台电脑上安装好AlwaysNew助手 ，然后关闭AlwaysNew助手 ，找到AlwaysNew助手 的安装目录，删掉Config文件夹里的CLIENTID文件，然后使用ghost制作工具制作ghost。")]),t._v(" "),s("h2",{attrs:{id:"_2-分院升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-分院升级","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.分院升级")]),t._v(" "),s("p",[s("strong",[t._v("场景：")]),t._v("\n有的医院有多个分院，每个分院的同一业务系统可能会有不同的配置文件，即业务系统的程序文件是不一样的，需要分开升级。"),s("br"),t._v(" "),s("strong",[t._v("解决方案：")]),t._v("\n同一业务系统不同分院使用不同的业务系统ID，即在初始化业务系统时为分院的业务系统单独创建一个业务系统，比如CIS系统，可以创建CIS_zongyuan，CIS_fenyuan1，CIS_fenyuan2，三个不同的业务系统，升级时可以单独发布升级。还可以使用标签来区分不同分院，但是这种方法在发布升级计划时实施人员容易忘记选择标签从而发布错，故推荐使用业务系统来解决分院的问题。")]),t._v(" "),s("h2",{attrs:{id:"_3-程序多入口配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-程序多入口配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.程序多入口配置")]),t._v(" "),s("p",[s("strong",[t._v("场景：")]),t._v("\n有的程序具有很多入口，不同的参数为不同的入口。"),s("br"),t._v(" "),s("strong",[t._v("解决方案：")]),t._v("\n这种情况只能是通过手工去设置，在桌面的快捷方式中设置“目标”，如下图，前面是启动文件的名称，后面是启动参数。比如TEST.exe有三个入口，参数分别为a1,a2,a3,,那么就制作三个快捷方式放到桌面。以后快捷方式需要更新或者增加，可以创建一个发布计划，发布的内容是需要增加或更新的快捷方式，发布文件的目录类型为“"),s("strong",[t._v("桌面")]),t._v("”。")]),t._v(" "),s("h2",{attrs:{id:"_4-发布升级计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-发布升级计划","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.发布升级计划")]),t._v(" "),s("p",[s("strong",[t._v("场景：")]),t._v("\n有一个新的版本需要升级，那么就要发布一个新的升级计划，这本身是一个简单的事情，但是在AlwaysNew 发布上线以来，发布人员发布错文件造成业务系统出错的情况也时有发生，那么在正式发布前发布一个测试版本是很有必要的。"),s("br"),t._v(" "),s("strong",[t._v("解决方案：")]),t._v("\n创建一个测试标签，找一台测试机器并设置测试标签，发布时给升级计划选择建立的测试标签，发布后检验测试机器有没有升级到预期的结果，检验成功后给所有机器重新发布该发布计划。")]),t._v(" "),s("h2",{attrs:{id:"_5-撤销发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-撤销发布","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.撤销发布")]),t._v(" "),s("p",[s("strong",[t._v("场景：")]),t._v("\n发布了错误的升级文件。"),s("br"),t._v(" "),s("strong",[t._v("解决方案：")]),t._v("\n重新发布一个升级计划覆盖掉前一个升级计划的错误文件，比如发布了a.dll,而这个dll是不需要的，那么在新发布的升级计划里添加这个a.dll并将其升级类型选择为“删除”，如果是a.dll的版本错了，那么添加对的a.dll,选择升级类型为“"),s("strong",[t._v("强制覆盖")]),t._v("”。还有一种方案为撤销升级计划，这个功能会在数据库产生多余的垃圾记录，会对后续的升级速度方面造成影响，所有不建议使用撤销升级计划这个功能，这个功能仅供紧急情况使用。\n"),s("img",{attrs:{src:"http://community.winning.com.cn:8888/Uploads/Editor/Picture/2018-10-17/5bc6975b98d57.png",alt:""}})])])}],!1,null,null,null);r.options.__file="AlwaysNew最佳实践手册.md";a.default=r.exports}}]);