(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"0911":function(t,i,e){"use strict";e.r(i);e("9911");var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"ivu-projects-cardList"},[t.loading?i("div",{directives:[{name:"height",rawName:"v-height",value:120,expression:"120"}],staticStyle:{position:"relative"}},[i("Spin",{attrs:{loading:t.loading,size:"large",fix:""}})],1):t._e(),i("Row",{attrs:{gutter:16}},t._l(t.projectList,(function(e){return i("Col",{key:e.id,staticClass:"ivu-mb",attrs:{xl:6,lg:8,md:12,sm:12,xs:24}},[i("RouterLink",{staticClass:"ivu-link ivu-link-color",attrs:{to:e.link}},[i("Card",{attrs:{padding:0}},[i("img",{staticClass:"ivu-projects-item-cover",attrs:{src:e.cover,alt:e.title}}),i("div",{staticClass:"ivu-p-8"},[i("div",[i("strong",[t._v(t._s(e.title))])]),i("div",{staticClass:"ivu-projects-item-desc"},[i("Ellipsis",{attrs:{length:100,text:e.desc}})],1),i("div",{staticClass:"ivu-projects-item-extra"},[i("span",[t._v(t._s(t.$Date(e.time).fromNow()))]),i("span",{staticClass:"ivu-fr"},[i("AvatarList",{attrs:{list:t.avatarList,size:"small"}})],1)])])])],1)],1)})),1)],1)},s=[],l=(e("99af"),[{title:"iView",desc:"一套基于 Vue.js 的企业级 UI 组件库，内含 50+ 常用基础组件",cover:"https://dev-file.iviewui.com/RZ8FQmZfHkcffMlTBCJllBFjEhEsObVo/middle",time:new Date("2016-07-28 14:00:00"),link:"/"},{title:"iView Pro",desc:"基于 iView 的高阶组件库，对 iView 基础组件的扩展，内含 30+ 业务及高阶组件",cover:"https://dev-file.iviewui.com/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd/middle",time:new Date("2019-02-01 14:00:00"),link:"/"},{title:"iView Admin Pro",desc:"基于 iView 的企业级中后台系统，内置 iView 及 iView Pro，功能强大，适用于各种中后台系统，高可配",cover:"https://dev-file.iviewui.com/4Z0QR2L0J1XStxBh99jVJ8qLfsGsOgjU/middle",time:new Date("2019-03-01 14:00:00"),link:"/"},{title:"iView Developer",desc:"iView 官方社区，关于 iView 你想知道的一切，都可以在这里向作者提问",cover:"https://dev-file.iviewui.com/ttkIjNPlVDuv4lUTvRX8GIlM2QqSe0jg/middle",time:new Date("2018-06-01 14:00:00"),link:"/"},{title:"iView Run",desc:"iView 在线运行编辑器，内置了 iView 环境，直接在线编写 .vue 文件，实时运行",cover:"https://dev-file.iviewui.com/fAenQ8nvRjL7x0i0jEfuDBZHvJfHf3v6/middle",time:new Date("2018-07-01 14:00:00"),link:"/"},{title:"iView Editor",desc:"基于 iView 的 markdown 编辑器",cover:"https://dev-file.iviewui.com/LrCTN2j94lo9N7wEql7cBr1Ux4rHMvmZ/middle",time:new Date("2018-07-05 14:00:00"),link:"/"},{title:"iView Doc",desc:"iView 官方文档",cover:"https://dev-file.iviewui.com/yeKvhT20lMU0f1T3Y743UlGEOLLnZSnp/middle",time:new Date("2016-08-01 14:00:00"),link:"/"},{title:"iView Cli",desc:"基于 Electron 的 iView 项目快速构建工具",cover:"https://dev-file.iviewui.com/CyrCNmTJfv7D6GFAg39bjT3eRkkRm5dI/middle",time:new Date("2017-09-02 14:00:00"),link:"/"}]),o={name:"Projects",data:function(){return{loading:!0,projectList:[],avatarList:[{src:"https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar",tip:"中小鱼"},{src:"https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar",tip:"唐不苦"},{src:"https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar",tip:"Echo"}]}},mounted:function(){this.getProject()},methods:{getProject:function(){var t=this;this.loading=!0,setTimeout((function(){t.projectList=t.projectList.concat(l),t.loading=!1}),200)}}},r=o,n=(e("ca52"),e("2877")),c=Object(n["a"])(r,a,s,!1,null,"1cba9320",null);i["default"]=c.exports},bc9b:function(t,i,e){},ca52:function(t,i,e){"use strict";e("bc9b")},cbe8:function(t,i,e){"use strict";e.r(i);e("9911"),e("b0c0");var a=function(){var t=this,i=t._self._c;return i("Card",{attrs:{shadow:""}},[i("List",{attrs:{size:"large","item-layout":"vertical"}},t._l(t.articleList,(function(e,a){return i("ListItem",{key:a,scopedSlots:t._u([{key:"action",fn:function(){return[i("li",[i("Icon",{attrs:{type:"ios-star-outline"}}),t._v(" "+t._s(e.collect)+" ")],1),i("li",[i("Icon",{attrs:{type:"ios-thumbs-up-outline"}}),t._v(" "+t._s(e.like)+" ")],1),i("li",[i("Icon",{attrs:{type:"ios-chatbubbles-outline"}}),t._v(" "+t._s(e.comment)+" ")],1)]},proxy:!0},e.hideCover?null:{key:"extra",fn:function(){return[i("img",{directives:[{name:"width",rawName:"v-width",value:280,expression:"280"}],attrs:{src:e.cover+"/small"}})]},proxy:!0}],null,!0)},[i("ListItemMeta",{scopedSlots:t._u([{key:"title",fn:function(){return[i("RouterLink",{attrs:{to:e.link,target:"_blank"}},[t._v(t._s(e.title))])]},proxy:!0},{key:"description",fn:function(){return t._l(e.tag,(function(e){return i("Tag",{key:e},[t._v(t._s(e))])}))},proxy:!0}],null,!0)}),i("div",{staticStyle:{"max-width":"700px"}},[t._v(t._s(e.desc))]),i("div",{staticClass:"ivu-mt"},[i("Avatar",{attrs:{size:"small",src:e.auth.avatar}}),t._v(" "+t._s(e.auth.name)+" 发表于 "+t._s(t.$Date(new Date(e.time)).format("YYYY-MM-DD HH:mm:ss"))+" ")],1)],1)})),1),t.loading?i("div",{directives:[{name:"height",rawName:"v-height",value:120,expression:"120"}],staticStyle:{position:"relative"}},[i("Spin",{attrs:{loading:t.loading,size:"large",fix:""}})],1):t._e(),i("div",{staticClass:"ivu-text-center ivu-mt"},[i("Button",{attrs:{loading:t.loading},nativeOn:{click:function(i){return t.getArticle.apply(null,arguments)}}},[t._v(t._s(t.loading?"加载中...":"加载更多"))])],1)],1)},s=[],l=(e("99af"),[{title:"写给 iView 开发者的一封信",desc:"你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月 28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转 iView Developer。",cover:"https://dev-file.iviewui.com/xM14LMsynHq844vHLXuqx7VkO47hX9dO",link:"https://dev.iviewui.com/articles/1019242066909204480",collect:120,like:288,comment:62,time:"2018-07-17T15:27:00.000Z",auth:{name:"管理员",avatar:"https://dev-file.iviewui.com/avatar_default/avatar"},tag:["iView","Vue.js","Webpack"]},{title:"Vue Seo 页面优化之 Nuxt 服务器渲染",desc:"Vue Seo 服务器渲染的坑 Nuxt，分享一下我从创建到部署远程服务器的相关经验。",cover:"https://dev-file.iviewui.com/WzOVTozHP4VZoHt7pkSFcLg0R4VcYR96",link:"https://dev.iviewui.com/articles/1032579816609681408",collect:20,like:15,comment:1,time:"2018-08-23T10:46:27.000Z",auth:{name:"唐不苦",avatar:"https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar"},tag:["iView","Vue.js","Webpack"]},{title:"二次封装 axios，根据参数来实现多个请求多次拦截",desc:"",cover:"https://dev-file.iviewui.com/h2v5OPIMsbpQJ0wUqHRHOKnYZjRY54UR",link:"https://dev.iviewui.com/articles/1031444597349421056",collect:16,like:54,comment:18,time:"2018-08-20T07:35:29.000Z",auth:{name:"hi修修",avatar:"https://dev-file.iviewui.com/avatar_default/avatar"},tag:["iView","Vue.js","Webpack"]},{title:"相同特性组件的一种优化思路",desc:"本文介绍了面对大量特性相同组件的代码组织问题的一种思路，主要应用了以下知识点：require.context、render函数以及functional组件。",cover:"https://dev-file.iviewui.com/tHlcBUZOSQXSTksmvhC8LXYiRDtgbbGF",link:"https://dev.iviewui.com/articles/1026690304465571840",collect:68,like:146,comment:5,time:"2018-08-07T04:43:38.000Z",auth:{name:"Jagger",avatar:"https://dev-file.iviewui.com/userinfo9nQqzFLYS77QEe5n0itU2IcBQOumiFDA/avatar"},tag:["iView","Vue.js","Webpack"]},{title:"脱离 Table 组件的 Render 苦海",desc:"在具体开发过程中，有些使用变扭的地方（和iview无关），比如 Table 组件的自定义列实现复杂，可展开 Table 不想单独建一个 vue 文件等。 在项目开发过程中发现的小技巧分享给大家，可提高代码编写效率与可维护性。",cover:"https://dev-file.iviewui.com/LsiCfUdZ6EvQhR3gmHCQ2HwYGmiCQVtI",link:"https://dev.iviewui.com/articles/1024639493791158272",collect:135,like:289,comment:122,time:"2018-08-01T12:54:26.000Z",auth:{name:"NB阿卡",avatar:"https://dev-file.iviewui.com/userinfoKukTjtAiIvUw6to7xFKeHIycrwV7rzhO/avatar"},tag:["iView","Vue.js","Webpack"]}]),o={name:"Article",data:function(){return{loading:!0,articleList:[]}},mounted:function(){this.getArticle()},methods:{getArticle:function(){var t=this;this.loading=!0,setTimeout((function(){t.articleList=t.articleList.concat(l),t.loading=!1}),200)}}},r=o,n=e("2877"),c=Object(n["a"])(r,a,s,!1,null,null,null);i["default"]=c.exports},cbf8:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t._self._c;return i("div",[t.loading?i("Spin",{attrs:{fix:""}}):t._e(),i("Row",{attrs:{gutter:16}},t._l(t.data,(function(e){return i("Col",{key:e.id,staticClass:"ivu-mb",attrs:{xl:6,lg:8,md:12,sm:12,xs:24}},[i("Card",{attrs:{shadow:"",padding:0}},[i("div",{staticClass:"ivu-pt ivu-pl ivu-pr"},[i("div",[i("Avatar",{attrs:{src:e.avatar}}),i("strong",{staticClass:"ivu-ml"},[t._v("iView")])],1),i("div",{staticClass:"ivu-mt"},[i("div",[t._v("负责人："+t._s(e.head))]),i("div",[t._v("最后更新时间："+t._s(e.updateTime))])])]),i("Divider",{staticClass:"ivu-mb-8"}),i("Row",{staticClass:"ivu-text-center ivu-pb-8"},[i("Col",{staticClass:"ivu-br",attrs:{span:6}},[i("Tooltip",{attrs:{placement:"top",content:"访问"}},[i("a",{attrs:{href:"https://www.iviewui.com/",target:"_blank"}},[i("Button",{attrs:{type:"text",icon:"md-open"}})],1)])],1),i("Col",{staticClass:"ivu-br",attrs:{span:6}},[i("Tooltip",{attrs:{placement:"top",content:"下载"}},[i("Button",{attrs:{type:"text",icon:"md-download"}})],1)],1),i("Col",{staticClass:"ivu-br",attrs:{span:6}},[i("Tooltip",{attrs:{placement:"top",content:"编辑"}},[i("Button",{attrs:{type:"text",icon:"md-create"}})],1)],1),i("Col",{attrs:{span:6}},[i("Dropdown",{scopedSlots:t._u([{key:"list",fn:function(){return[i("DropdownMenu",{staticClass:"ivu-text-left"},[i("DropdownItem",[i("Avatar",{attrs:{icon:"logo-googleplus",size:"small"}}),i("span",{staticClass:"ivu-ml-8"},[t._v("Google Plus")])],1),i("DropdownItem",[i("Avatar",{attrs:{icon:"logo-facebook",size:"small"}}),i("span",{staticClass:"ivu-ml-8"},[t._v("Facebook")])],1),i("DropdownItem",[i("Avatar",{attrs:{icon:"logo-twitter",size:"small"}}),i("span",{staticClass:"ivu-ml-8"},[t._v("Twitter")])],1),i("DropdownItem",[i("Avatar",{attrs:{icon:"logo-linkedin",size:"small"}}),i("span",{staticClass:"ivu-ml-8"},[t._v("LinkedIn")])],1)],1)]},proxy:!0}],null,!0)},[i("Button",{attrs:{type:"text",icon:"md-share"}})],1)],1)],1)],1)],1)})),1)],1)},s=[],l=e("2af9"),o={components:{TagSelect:l["P"],TagSelectOption:l["Q"]},data:function(){return{sorted:1,data:[],result:[{id:1,avatar:"https://dev-file.iviewui.com/RZ8FQmZfHkcffMlTBCJllBFjEhEsObVo/avatar",title:"iView",head:"Aresn",updateTime:"2016-07-28"},{id:2,avatar:"https://dev-file.iviewui.com/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd/avatar",title:"iView Pro",head:"中小鱼",updateTime:"2019-02-01"},{id:3,avatar:"https://dev-file.iviewui.com/4Z0QR2L0J1XStxBh99jVJ8qLfsGsOgjU/avatar",title:"iView Admin Pro",head:"Echo",updateTime:"2019-03-01"},{id:4,avatar:"https://dev-file.iviewui.com/ttkIjNPlVDuv4lUTvRX8GIlM2QqSe0jg/avatar",title:"iView Developer",head:"唐不苦",updateTime:"2018-06-01"},{id:5,avatar:"https://dev-file.iviewui.com/fAenQ8nvRjL7x0i0jEfuDBZHvJfHf3v6/avatar",title:"iView Run",head:"甜筒",updateTime:"2018-07-01"},{id:6,avatar:"https://dev-file.iviewui.com/LrCTN2j94lo9N7wEql7cBr1Ux4rHMvmZ/avatar",title:"iView Editor",head:"冷月呆呆",updateTime:"2018-07-05"},{id:7,avatar:"https://dev-file.iviewui.com/yeKvhT20lMU0f1T3Y743UlGEOLLnZSnp/avatar",title:"iView Doc",head:"ludd",updateTime:"2016-08-01"},{id:8,avatar:"https://dev-file.iviewui.com/CyrCNmTJfv7D6GFAg39bjT3eRkkRm5dI/avatar",title:"iView Cli",head:"白灼菜心儿",updateTime:"2017-09-02"}],loading:!0}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$axios.get("/list/article",{params:{count:8}}).then((function(i){t.data=t.result,t.loading=!1}))}}},r=o,n=e("2877"),c=Object(n["a"])(r,a,s,!1,null,null,null);i["default"]=c.exports}}]);