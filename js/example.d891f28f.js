(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["example"],{"8f6a":function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e._self._c;return o("XIframe",{attrs:{margin:"",copyright:"",src:"https://istudy-run.gitee.io/relax-time#/"}})},n=[],c=t("2af9"),d={name:"iframePage",components:{XIframe:c["J"]}},a=d,r=t("2877"),l=Object(r["a"])(a,i,n,!1,null,null,null);o["default"]=l.exports},"9fe8":function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e._self._c;return o("Card",{attrs:{shadow:""},scopedSlots:e._u([{key:"title",fn:function(){return[o("Avatar",{staticStyle:{color:"rgb(82, 196, 26)",background:"rgb(246, 255, 237)"},attrs:{size:"small",icon:"md-send"}}),o("span",{staticClass:"ivu-pl-8"},[e._v("更新日志")])]},proxy:!0}])},[o("article",{staticClass:"version-doc"},[o("Timeline",[o("Alert",{attrs:{type:"warning","show-icon":""},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("2023-11-01 起停止开发新功能，后续只进行必要的Bug修复和安全修复。开启新篇章，去拥抱Vue3生态。")]},proxy:!0}])},[o("span",[e._v(e._s(e.$config.titleSuffix)+" 已进入维护模式")])]),e._l(e.versionLog,(function(t,i){return o("TimelineItem",{key:"item-".concat(i),attrs:{color:t.color},scopedSlots:e._u([{key:"dot",fn:function(){return[o("Icon",{attrs:{type:t.icon}})]},proxy:!0}],null,!0)},[o("span",[e._v(e._s(t.title))]),o("p",[o("code",[e._v(e._s(t.date))])]),o("ul",e._l(t.list,(function(t,i){return o("li",{key:"li-".concat(i),domProps:{innerHTML:e._s(t)}})})),0)])}))],2)],1)])},n=[],c=t("13bf"),d=t("eeb0"),a=[{title:"iView Admin Pro@2.0.0",icon:"md-time",date:"2023-08-26",list:["2023/06/09综合考虑ViewUI社区生态、活跃度，项目进入停更状态，但ViewUI的设计给我一种更舒适的体验，再次启程，不留遗憾。",'属于 <a href="https://istudy-run.gitee.io/admin-antd#/" target="_blank">Admin Labs Antd</a> 分支，UI框架<code>Ant Design Vue</code>改为<code>ViewUI</code>，相互学习，相辅相成。']},{title:"iView Admin Pro@2.1.0",color:"green",icon:"ios-trophy",date:"2023-09-28",list:['新增<code>IconSelect图标选择器</code>、<code>Region行政区域选择器</code>、<code>Empty空状态</code>、<code>Space间距</code> <a href="#/dashboard/components">#组件库</a>',"优化<code>City城市选择器</code>默认插槽改为输入框，下拉菜单宽度自适应","多页签<code>TabsNav</code>唯一性由name改为fullPath，增加TabsReload点击当前页签重载页面","菜单组件拆分为<code>MenuSide</code>、<code>MenuHead</code>全面重构，增加Badge徽标显示","优化验证码组件<code>Verify</code>，增加异常处理"]},{title:"iView Admin Pro@2.2.0",color:"blue",icon:"md-time",date:"2023-10-11",list:['新增<code>DialogContainer对话框容器</code> <a href="#/dashboard/components">#组件库</a>',"优化<code>Space间距</code>，自动换行没有上下间距的问题","优化<code>Empty空状态</code>，Svg不再用作Img渲染，改为函数式组件渲染","移除VueMeta、viser-vue，动态标题使用VueX+VueRouter实现","菜单结构统一规范格式化，使用默认子路由精简URL","移动端响应式控制不再操作Html Meta，改为自定义Class实现","修复路由子项配置hideInMenu不生效的问题","修复响应式布局切换时，侧边栏无法渲染的问题","修复MenuHead下拉菜单项为外链跳转错误问题","修复Mobile下topMenu多页签/内容区域宽度无法自适应问题"]},{title:"iView Admin Pro@2.2.1",color:"blue",icon:"md-time",date:"2023-10-12",list:["修复登录后内容区域无法渲染的问题"]},{title:"iView Admin Pro@2.2.2",color:"blue",icon:"md-time",date:"2023-10-16",list:["修复侧边菜单MenuSideCollapse外链点击跳转异常"]},{title:"iView Admin Pro@2.2.3",color:"blue",icon:"md-time",date:"2023-10-19",list:["顶部导航下拉菜单增加二级菜单subtitle显示","侧边菜单Badge徽标层级结构调整","修复侧边菜单折叠后子菜单不显示Badge徽标，处理徽标错位问题"]},{title:"iView Admin Pro@2.3.0",color:"blue",icon:"md-time",date:"2023-10-25",list:['新增<code>Tour漫游式引导</code>、<code>VueXgplayer视频播放</code>、<code>富文本编辑器TinymceEditor</code>、<code>Markdown编辑器ByteMdEditor</code> <a href="#/dashboard/components">#组件库</a>',"移除wangeditor，vue-quill-editor"]},{title:"iView Admin Pro@2.3.1",color:"blue",icon:"md-time",date:"2023-10-29",list:["页签配置新增<code>双击页签重载</code>、<code>拖拽页签排序</code>","webpack打包构建配置精简"]},{title:"iView Admin Pro@2.3.2",color:"blue",icon:"md-time",date:"2023-11-01",list:["<code>components</code>按照业务、公共组件职责拆分","重型组件<code>Editor</code>等改为异步组件动态导入"]}],r=a.reverse(),l={name:"VersionLog",components:{Timeline:d["a"],TimelineItem:c["a"]},data:function(){return{versionLog:r}}},s=l,u=(t("b79a"),t("2877")),m=Object(u["a"])(s,i,n,!1,null,null,null);o["default"]=m.exports},b79a:function(e,o,t){"use strict";t("bed3")},bed3:function(e,o,t){}}]);