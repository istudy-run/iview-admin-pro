(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"00d87":function(e,t){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?r.push(t.charAt(s>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(n))>>>6-2*s);return r}};e.exports=r})()},"044b":function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},"0fea":function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return m})),r.d(t,"d",(function(){return h}));var n=r("a27e"),s=r("53ca"),a=r("d4ec"),o=r("bee2"),i=(r("4e82"),r("ac1f"),r("caad"),r("2532"),r("d3b7"),r("25f0"),r("b64b"),r("6821")),c=r.n(i),u="dd05f1c54d63749eda95f9fa6d49v442a",l=function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,null,[{key:"sortAsc",value:function(e){var t=new Array,r=0;for(var n in e)t[r]=n,r++;var s=t.sort(),a={};for(var o in s)a[s[o]]=e[s[o]];return a}},{key:"getSign",value:function(e,t){var r=this.parseQueryString(e),n=this.mergeObject(r,t),s=this.sortAsc(n);return c()(JSON.stringify(s)+u).toUpperCase()}},{key:"parseQueryString",value:function(e){var t=/^[^\?]+\?([\w\W]+)$/,r=/([^&=]+)=([\w\W]*?)(&|$|#)/g,n=t.exec(e),s={},a=e.substring(e.lastIndexOf("/")+1);if(a.includes(",")&&(a.includes("?")&&(a=a.substring(0,a.indexOf("?"))),s["x-path-variable"]=decodeURIComponent(a)),n&&n[1]){var o,i=n[1];while(null!=(o=r.exec(i)))this.myIsNaN(o[2])&&(o[2]=o[2].toString()),s[o[1]]=o[2]}return s}},{key:"mergeObject",value:function(e,t){if(t&&Object.keys(t).length>0)for(var r in t)!0===t.hasOwnProperty(r)&&(this.myIsNaN(t[r])&&(t[r]=t[r].toString()),e[r]=t[r]);return e}},{key:"urlEncode",value:function(e,t,r){if(null==e)return"";var n="",a=Object(s["a"])(e);if("string"===a||"number"===a||"boolean"===a)n+="&"+t+"="+(null==r||r?encodeURIComponent(e):e);else for(var o in e){var i=null==t?o:t+(e instanceof Array?"["+o+"]":"."+o);n+=this.urlEncode(e[o],i,r)}return n}},{key:"getDateTimeToString",value:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();r<10&&(r="0"+r),n<10&&(n="0"+n);var s=e.getHours(),a=e.getMinutes(),o=e.getSeconds(),i=e.getMilliseconds();return s<10&&(s="0"+s),a<10&&(a="0"+a),o<10&&(o="0"+o),i<10&&(o="0"+i),t+""+r+n+s+a+o}},{key:"myIsNaN",value:function(e){return"number"===typeof e&&!isNaN(e)}}]),e}(),f={user:"/user",role:"/role",service:"/service",userList:"/userList",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function d(e){return Object(n["a"])({url:f.role,method:"get",params:e})}function p(e){return Object(n["a"])({url:f.service,method:"get",params:e})}function m(e,t){var r=l.getSign(e,t),s={"X-Sign":r,"X-TIMESTAMP":l.getDateTimeToString()};return Object(n["a"])({url:e,method:"get",params:t,headers:s})}function h(e){return Object(n["a"])({url:f.userList,method:"get",params:e})}},"13b7":function(e,t,r){e.exports=r.p+"img/wx.c69ec08c.svg"},2095:function(e,t,r){e.exports=r.p+"img/wb.cbf658a0.svg"},3390:function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a");var n=function(){var e=this,t=e._self._c;return t("Result",{attrs:{type:"success",title:e.email,desc:e.description},scopedSlots:e._u([{key:"actions",fn:function(){return[t("Space",[t("Button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),t("Button",{attrs:{size:"large"},on:{click:e.handleGoHome}},[e._v("返回首页")])],1)]},proxy:!0}])})},s=[],a=r("2af9"),o={name:"RegisterResult",components:{Result:a["A"]},data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{handleGoHome:function(){this.$router.push({name:"login"})}}},i=o,c=r("2877"),u=Object(c["a"])(i,n,s,!1,null,null,null);t["default"]=u.exports},"5fc7":function(e,t){e.exports="data:image/png;base64,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"},6821:function(e,t,r){(function(){var t=r("00d87"),n=r("9a63").utf8,s=r("044b"),a=r("9a63").bin,o=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?a.stringToBytes(e):n.stringToBytes(e):s(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var i=t.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,f=-1732584194,d=271733878,p=0;p<i.length;p++)i[p]=16711935&(i[p]<<8|i[p]>>>24)|4278255360&(i[p]<<24|i[p]>>>8);i[c>>>5]|=128<<c%32,i[14+(c+64>>>9<<4)]=c;var m=o._ff,h=o._gg,g=o._hh,v=o._ii;for(p=0;p<i.length;p+=16){var A=u,b=l,w=f,y=d;u=m(u,l,f,d,i[p+0],7,-680876936),d=m(d,u,l,f,i[p+1],12,-389564586),f=m(f,d,u,l,i[p+2],17,606105819),l=m(l,f,d,u,i[p+3],22,-1044525330),u=m(u,l,f,d,i[p+4],7,-176418897),d=m(d,u,l,f,i[p+5],12,1200080426),f=m(f,d,u,l,i[p+6],17,-1473231341),l=m(l,f,d,u,i[p+7],22,-45705983),u=m(u,l,f,d,i[p+8],7,1770035416),d=m(d,u,l,f,i[p+9],12,-1958414417),f=m(f,d,u,l,i[p+10],17,-42063),l=m(l,f,d,u,i[p+11],22,-1990404162),u=m(u,l,f,d,i[p+12],7,1804603682),d=m(d,u,l,f,i[p+13],12,-40341101),f=m(f,d,u,l,i[p+14],17,-1502002290),l=m(l,f,d,u,i[p+15],22,1236535329),u=h(u,l,f,d,i[p+1],5,-165796510),d=h(d,u,l,f,i[p+6],9,-1069501632),f=h(f,d,u,l,i[p+11],14,643717713),l=h(l,f,d,u,i[p+0],20,-373897302),u=h(u,l,f,d,i[p+5],5,-701558691),d=h(d,u,l,f,i[p+10],9,38016083),f=h(f,d,u,l,i[p+15],14,-660478335),l=h(l,f,d,u,i[p+4],20,-405537848),u=h(u,l,f,d,i[p+9],5,568446438),d=h(d,u,l,f,i[p+14],9,-1019803690),f=h(f,d,u,l,i[p+3],14,-187363961),l=h(l,f,d,u,i[p+8],20,1163531501),u=h(u,l,f,d,i[p+13],5,-1444681467),d=h(d,u,l,f,i[p+2],9,-51403784),f=h(f,d,u,l,i[p+7],14,1735328473),l=h(l,f,d,u,i[p+12],20,-1926607734),u=g(u,l,f,d,i[p+5],4,-378558),d=g(d,u,l,f,i[p+8],11,-2022574463),f=g(f,d,u,l,i[p+11],16,1839030562),l=g(l,f,d,u,i[p+14],23,-35309556),u=g(u,l,f,d,i[p+1],4,-1530992060),d=g(d,u,l,f,i[p+4],11,1272893353),f=g(f,d,u,l,i[p+7],16,-155497632),l=g(l,f,d,u,i[p+10],23,-1094730640),u=g(u,l,f,d,i[p+13],4,681279174),d=g(d,u,l,f,i[p+0],11,-358537222),f=g(f,d,u,l,i[p+3],16,-722521979),l=g(l,f,d,u,i[p+6],23,76029189),u=g(u,l,f,d,i[p+9],4,-640364487),d=g(d,u,l,f,i[p+12],11,-421815835),f=g(f,d,u,l,i[p+15],16,530742520),l=g(l,f,d,u,i[p+2],23,-995338651),u=v(u,l,f,d,i[p+0],6,-198630844),d=v(d,u,l,f,i[p+7],10,1126891415),f=v(f,d,u,l,i[p+14],15,-1416354905),l=v(l,f,d,u,i[p+5],21,-57434055),u=v(u,l,f,d,i[p+12],6,1700485571),d=v(d,u,l,f,i[p+3],10,-1894986606),f=v(f,d,u,l,i[p+10],15,-1051523),l=v(l,f,d,u,i[p+1],21,-2054922799),u=v(u,l,f,d,i[p+8],6,1873313359),d=v(d,u,l,f,i[p+15],10,-30611744),f=v(f,d,u,l,i[p+6],15,-1560198380),l=v(l,f,d,u,i[p+13],21,1309151649),u=v(u,l,f,d,i[p+4],6,-145523070),d=v(d,u,l,f,i[p+11],10,-1120210379),f=v(f,d,u,l,i[p+2],15,718787259),l=v(l,f,d,u,i[p+9],21,-343485551),u=u+A>>>0,l=l+b>>>0,f=f+w>>>0,d=d+y>>>0}return t.endian([u,l,f,d])};o._ff=function(e,t,r,n,s,a,o){var i=e+(t&r|~t&n)+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._gg=function(e,t,r,n,s,a,o){var i=e+(t&n|r&~n)+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._hh=function(e,t,r,n,s,a,o){var i=e+(t^r^n)+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._ii=function(e,t,r,n,s,a,o){var i=e+(r^(t|~n))+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._blocksize=16,o._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(o(e,r));return r&&r.asBytes?n:r&&r.asString?a.bytesToString(n):t.bytesToHex(n)}})()},"728b":function(e,t,r){e.exports=r.p+"img/qq.2cf4276d.svg"},"9a63":function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},a9e32:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{class:"".concat(e.prefixCls,"-container")},[t("Form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{prefix:"ios-contact-outline",size:"large",placeholder:"请输入账户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("Poptip",{attrs:{"word-wrap":"",trigger:"focus",placement:"right-start"},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{style:{width:"240px"}},[t("div",{class:e.passwordLevelClass},[e._v(" 强度："),t("span",[e._v(e._s(e.passwordLevelName))])]),t("Progress",{attrs:{percent:e.state.percent,"hide-info":!0,"stroke-color":e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]},proxy:!0}]),model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",prefix:"ios-lock-outline",size:"large",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),t("FormItem",{attrs:{prop:"password2"}},[t("Input",{attrs:{type:"password",prefix:"ios-lock-outline",size:"large",autocomplete:"false",placeholder:"确认密码"},model:{value:e.form.password2,callback:function(t){e.$set(e.form,"password2",t)},expression:"form.password2"}})],1),t("FormItem",{attrs:{prop:"mobile"}},[t("Input",{attrs:{prefix:"ios-phone-portrait",size:"large",placeholder:"请输入手机号码"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:16}},[t("FormItem",{attrs:{prop:"captcha"}},[t("Input",{attrs:{prefix:"ios-mail-outline",size:"large",placeholder:"请输入验证码"},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}})],1)],1),t("Col",{attrs:{span:8}},[t("Button",{attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1),t("div",{class:"".concat(e.prefixCls,"-container-submit")},[t("Button",{attrs:{size:"large",type:"primary",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v("注册")])],1),t("div",{class:"".concat(e.prefixCls,"-container-other-login")},[t("RouterLink",{attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)},s=[],a=r("5530"),o=(r("ac1f"),r("498a"),r("b64b"),r("d3b7"),r("159b"),r("a15b"),r("25f0"),r("ac0d")),i=r("7ded"),c={0:"低",1:"低",2:"中",3:"强"},u={0:"error",1:"error",2:"warning",3:"success"},l={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},f={name:"Register",mixins:[o["b"]],data:function(){return{prefixCls:"".concat(this.$config.cssPrefix,"login"),form:{username:"",password:"",password2:"",mobile:"",captcha:""},rule:{username:[{required:!0,validator:this.checkUsername,message:"请输入账户名"}],password:[{required:!0,validator:this.handlePasswordLevel,message:"至少6位密码，区分大小写"}],password2:[{required:!0,validator:this.handlePasswordCheck,message:"至少6位密码，区分大小写"}],mobile:[{required:!0,validator:this.handlePhoneCheck,message:"请输入手机号码",trigger:"change"}],captcha:[{required:!0,validator:this.handleCaptchaCheck,message:"请输入验证码"}]},state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return u[this.state.passwordLevel]},passwordLevelName:function(){return c[this.state.passwordLevel]},passwordLevelColor:function(){return l[this.state.passwordLevel]}},methods:{checkUsername:function(e,t,r){t?r():r(new Error("请输入用户名"))},handlePasswordLevel:function(e,t,r){var n=0;/[0-9]/.test(t)&&n++,/[a-zA-Z]/.test(t)&&n++,/[^0-9a-zA-Z_]/.test(t)&&n++,this.state.passwordLevel=n,this.state.percent=30*n,n>=2?(n>=3&&(this.state.percent=100),r()):(0===n&&(this.state.percent=10),r(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,r){var n=this.form.password;void 0===t&&r(new Error("请输入密码")),t&&n&&t.trim()!==n.trim()&&r(new Error("两次密码不一致")),r()},handlePhoneCheck:function(e,t,r){var n=/^1[3456789]\d{9}$/;n.test(t)?r():r(new Error("请输入正确手机号"))},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleCaptchaCheck:function(e,t,r){t?r():r(new Error("请输入验证码"))},handleSubmit:function(){var e=this,t=this.form,r=this.state,n=this.$router;this.$refs.form.validate((function(s){if(s)r.passwordLevelChecked=!1,n.push({name:"registerResult",params:Object(a["a"])({},t)});else{var o=e.$refs.form,i=Object.keys(o.model),c=[];i.forEach((function(e){return o.validateField(e,(function(e){e&&c.push(e)}))})),e.$Message.error(c.join("；"))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form,n=this.state,s=this.$Message,a=this.$Notice;this.$refs.form.validateField("mobile",(function(e){if(e)t.$Message.error(e);else{n.smsSendBtn=!0;var o=window.setInterval((function(){n.time--<=0&&(n.time=60,n.smsSendBtn=!1,window.clearInterval(o))}),1e3),c=s.loading("验证码发送中..",0);Object(i["b"])({mobile:r.mobile}).then((function(e){setTimeout(c,0),a.success({title:"系统提示",desc:"验证码获取成功，您的验证码为："+e.captcha,duration:8})})).catch((function(e){setTimeout(c,1),clearInterval(o),n.time=60,n.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$Notice.error({title:"系统提示",desc:e.toString()}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){console.log(e)}}},d=f,p=r("2877"),m=Object(p["a"])(d,n,s,!1,null,null,null);t["default"]=m.exports},ede4:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{class:"".concat(e.prefixCls,"-container")},[t("div",{class:"".concat(e.prefixCls,"-container-form")},[t("Form",{staticClass:"login-layout",nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[t("Tabs",{attrs:{value:e.customActiveKey},on:{"on-click":e.handleTabClick}},[t("TabPane",{attrs:{name:"tab1",label:"账号密码登录"}},[t("LoginAccount",{directives:[{name:"show",rawName:"v-show",value:"tab1"===e.customActiveKey,expression:"customActiveKey === 'tab1'"}],ref:"alogin",on:{validFail:e.validateFail,success:e.requestSuccess,fail:e.requestFailed}})],1),t("TabPane",{attrs:{name:"tab2",label:"手机号登录"}},[t("LoginPhone",{directives:[{name:"show",rawName:"v-show",value:"tab2"===e.customActiveKey,expression:"customActiveKey === 'tab2'"}],ref:"plogin",on:{validFail:e.validateFail,success:e.requestSuccess,fail:e.requestFailed}})],1)],1)],1)],1),t("div",{class:"".concat(e.prefixCls,"-container-remember")},[t("Checkbox",{model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}},[e._v(" 记住密码")]),t("RouterLink",{attrs:{to:{}}},[e._v("忘记密码")])],1),t("div",{class:"".concat(e.prefixCls,"-container-submit")},[t("Button",{attrs:{size:"large",type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v("登录")])],1),t("div",{class:"".concat(e.prefixCls,"-container-other")},[t("span",[e._v("其他登录方式")]),t("img",{attrs:{src:r("13b7"),alt:"微信"}}),t("img",{attrs:{src:r("728b"),alt:"QQ"}}),t("img",{attrs:{src:r("2095"),alt:"微博"}}),t("RouterLink",{class:"".concat(e.prefixCls,"-container-other-register"),attrs:{to:{name:"register"}}},[e._v("注册账户")])],1)])},s=[],a=r("5530"),o=(r("99af"),r("b0c0"),r("d3b7"),r("25f0"),r("2f62")),i=r("ca00"),c=function(){var e=this,t=e._self._c;return t("div",[t("Form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rule}},[t("FormItem",{attrs:{prop:"mobile"}},[t("Input",{attrs:{prefix:"ios-phone-portrait",size:"large",placeholder:"请输入手机号码"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:16}},[t("FormItem",{attrs:{prop:"captcha"}},[t("Input",{attrs:{prefix:"ios-mail-outline",size:"large",placeholder:"请输入验证码"},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}})],1)],1),t("Col",{attrs:{span:8}},[t("Button",{attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1)],1)},u=[],l=(r("ac1f"),r("4d63"),r("b64b"),r("159b"),r("a15b"),r("7ded")),f={name:"LoginPhone",data:function(){return{form:{mobile:"",captcha:""},rule:{mobile:[{required:!0,validator:this.validateMobile,trigger:"change"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},state:{time:60,smsSendBtn:!1}}},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["login"])),{},{validateMobile:function(e,t,r){t||r(new Error("请输入手机号码")),new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?r():r(new Error("手机号码格式不正确"))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.state,n=this.form;this.$refs.ruleForm.validateField("mobile",(function(e){if(e)t.$Message.error(e);else{r.smsSendBtn=!0;var s=window.setInterval((function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(s))}),1e3),a=t.$Message.loading("验证码发送中..",0);Object(l["b"])({mobile:n.mobile}).then((function(e){setTimeout(a,0),t.$Notice.success({title:"系统提示",desc:"验证码获取成功，您的验证码为："+e.captcha,duration:8})})).catch((function(e){setTimeout(a,1),clearInterval(s),r.time=60,r.smsSendBtn=!1,t.requestFailed(e)}))}}))},handleLogin:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(t){var r=Object(a["a"])({},e.form);e.login(r).then((function(t){return e.$emit("success",t)})).catch((function(t){return e.$emit("fail",t)}))}else{e.$emit("validFail");var n=e.$refs.ruleForm,s=Object.keys(n.model),o=[];s.forEach((function(e){return n.validateField(e,(function(e){e&&o.push(e)}))})),e.$Message.error(o.join("；"))}}))}})},d=f,p=r("2877"),m=Object(p["a"])(d,c,u,!1,null,null,null),h=m.exports,g=function(){var e=this,t=e._self._c;return t("div",[t("Form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rule}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{prefix:"ios-contact-outline",size:"large",placeholder:"请输入帐号 / admin"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",prefix:"ios-lock-outline",size:"large",autocomplete:"false",placeholder:"请输入密码 / admin"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e.isPictureCode?t("Row",{attrs:{gutter:0}},[t("Col",{attrs:{span:16}},[t("FormItem",{attrs:{prop:"captcha"}},[t("Input",{attrs:{prefix:"ios-mail-outline",size:"large",placeholder:"请输入验证码"},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}})],1)],1),t("Col",{staticClass:"captcha",attrs:{span:8}},[e.requestCodeSuccess?t("img",{attrs:{src:e.randCodeImage},on:{click:e.handleChangeCheckCode}}):t("img",{attrs:{src:r("5fc7")},on:{click:e.handleChangeCheckCode}})])],1):e._e()],1),e.isPictureCode?e._e():t("Verify",{ref:"verify",attrs:{mode:"pop",imgSize:{width:"400px",height:"200px"},captchaType:e.captchaType},on:{"on-success":e.verifySuccess,"on-error":e.verifyError}})],1)},v=[],A=r("6821"),b=r.n(A),w=r("2af9"),y=r("0fea"),x=r("c9d9"),C={name:"LoginAccount",components:{Verify:w["G"]},data:function(){return{loginType:0,verifyForce:!1,requestCodeSuccess:!0,randCodeImage:"",form:{username:"admin",password:"admin",captcha:"admin"},rule:{username:[{required:!0,validator:this.handleUsernameOrEmail,message:"请输入帐号"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},computed:{captchaType:function(){var e=0,t=100,r=Math.floor(Math.random()*(t-e))+e,n=x["a"].clickWord;return r%3===0?n=x["a"].blockPuzzle:r%3===1&&(n=x["a"].pictureCode),this.$config.captchaType||n},isPictureCode:function(){return this.verifyForce||this.captchaType===x["a"].pictureCode}},created:function(){this.handleChangeCheckCode()},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["login"])),{},{handleChangeCheckCode:function(){var e=this;this.currdatetime=(new Date).getTime();var t="https://api.boot.jeecg.com/sys/randomImage/".concat(this.currdatetime);Object(y["a"])(t).then((function(t){t.success?(e.randCodeImage=t.result,e.requestCodeSuccess=!0):(e.$Message.error(t.message),e.requestCodeSuccess=!1)})).catch((function(){e.requestCodeSuccess=!1}))},handleUsernameOrEmail:function(e,t,r){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;n.test(t)?this.loginType=0:this.loginType=1,r()},handleLogin:function(){var e=this;this.$refs.ruleForm.validate((function(t){t?e.isPictureCode?e.handleSubmit():e.$refs.verify.show():(e.$emit("validFail"),e.alertMsg())}))},alertMsg:function(){var e=this.$refs.ruleForm,t=Object.keys(e.model),r=[];t.forEach((function(t){return e.validateField(t,(function(e){e&&r.push(e)}))})),this.$Message.error(r.join("；"))},handleSubmit:function(){var e=this,t=Object(a["a"])({},this.form);t.password=b()(this.form.password),this.login(t).then((function(t){return e.$emit("success",t)})).catch((function(t){return e.$emit("fail",t)}))},verifySuccess:function(e){this.form.code=e.captchaVerification,this.handleSubmit()},verifyError:function(){this.verifyForce=!0,this.$Message.error("验证码组件异常，强制启用图形验证码")}})},k=C,F=Object(p["a"])(k,g,v,!1,null,null,null),B=F.exports,S={components:{LoginPhone:h,LoginAccount:B},data:function(){return{prefixCls:"".concat(this.$config.cssPrefix,"login"),customActiveKey:"tab1",rememberMe:!1}},computed:Object(a["a"])({},Object(o["e"])({homeRouteName:function(e){return e.app.homeRouteName},userInfo:function(e){return e.user.userInfo}})),methods:{verifySuccess:function(e){this.$refs.alogin.verifySuccess(e)},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(){"tab1"===this.customActiveKey?this.$refs.alogin.handleLogin():this.$refs.plogin.handleLogin()},requestSuccess:function(e){var t=this;this.$router.push({name:this.homeRouteName}),setTimeout((function(){return t.$Message.success("".concat(Object(i["e"])(),"，").concat(t.userInfo.name))}),1e3)},requestFailed:function(e){this.validateFail(),this.$Notice.error({title:"系统提示",desc:e.toString()})},validateFail:function(){}}},I=S,M=Object(p["a"])(I,n,s,!1,null,null,null);t["default"]=M.exports}}]);