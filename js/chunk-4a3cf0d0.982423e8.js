(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a3cf0d0"],{d748:function(o,n,t){"use strict";t("e660")},e660:function(o,n,t){},f4a8:function(o,n,t){"use strict";t.r(n);var r=function(){var o=this,n=o._self._c;return n("Card",{attrs:{bordered:!1,"dis-hover":!0}},[n("Alert",{attrs:{type:"info","show-icon":""},scopedSlots:o._u([{key:"desc",fn:function(){return[o._v("打开控制台，点击不同的按钮，可显示不同的日志打印效果。")]},proxy:!0}])},[o._v(" 用法说明 ")]),n("Row",[n("i-col",{attrs:{sm:24,md:24,xl:24}},[n("Divider",[o._v("胶囊型")]),n("Button",{on:{click:function(n){return o.consoleCapsuleLog("default")}}},[o._v("胶囊型（default）")]),n("Button",{attrs:{type:"primary"},on:{click:function(n){return o.consoleCapsuleLog("primary")}}},[o._v("胶囊型（primary）")]),n("Button",{attrs:{type:"success"},on:{click:function(n){return o.consoleCapsuleLog("success")}}},[o._v("胶囊型（success）")]),n("Button",{attrs:{type:"warning"},on:{click:function(n){return o.consoleCapsuleLog("warning")}}},[o._v("胶囊型（warning）")]),n("Button",{attrs:{type:"error"},on:{click:function(n){return o.consoleCapsuleLog("error")}}},[o._v("胶囊型（error）")]),n("Divider",[o._v("普通型")]),n("Button",{on:{click:function(n){return o.consoleCommonLog("default")}}},[o._v("普通型（default）")]),n("Button",{attrs:{type:"primary"},on:{click:function(n){return o.consoleCommonLog("primary")}}},[o._v("普通型（primary）")]),n("Button",{attrs:{type:"success"},on:{click:function(n){return o.consoleCommonLog("success")}}},[o._v("普通型（success）")]),n("Button",{attrs:{type:"warning"},on:{click:function(n){return o.consoleCommonLog("warning")}}},[o._v("普通型（warning）")]),n("Button",{attrs:{type:"error"},on:{click:function(n){return o.consoleCommonLog("error")}}},[o._v("普通型（error）")])],1)],1)],1)},e=[],c={name:"ConsoleLog",data:function(){return{description:"使用内置 $log 插件，可以在控制台打印各种日志。"}},methods:{consoleCapsuleLog:function(o){this.$Message.info("请按F12打开控制台查看"),this.$log.capsule("iView Admin",o,o)},consoleCommonLog:function(o){this.$Message.info("请按F12打开控制台查看"),this.$log[o]("iView Admin",o)}}},s=c,i=(t("d748"),t("2877")),u=Object(i["a"])(s,r,e,!1,null,"7ba7ebcd",null);n["default"]=u.exports}}]);