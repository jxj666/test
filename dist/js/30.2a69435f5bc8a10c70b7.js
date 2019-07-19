(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1056:function(r,e,n){"use strict";n.r(e);var t=n(2),o=n(16),a=n(7),s=t.a.title,i=(n(415),n(3)),l=Object(i.a)({components:{},data:function(){return{title:s,loginForm:{email:"",password:""},loginFormRules:{email:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){},methods:{login:function(){var r=this;this.$refs.loginForm.validate(function(e){if(!e)return!1;var n=r.loginForm,s=r.$router;t.a.ajax({url:"/web/v1/user/login",type:"POST",data:n,timeout:1e3,contentType:"application/json",success:function(r){if(0===r.status){var e=r.data||r;e.username=e.username||n.email,o.a.login(e)?(a.Notification.success({title:"登录",message:r.message||"成功"}),s.push({path:"/admin"})):a.Notification.error({title:"错误",message:r.message||r.status||"登录失败"})}else a.Notification.error({title:"错误",message:r.message||r.status||"登录失败"})},error:function(r){var e=r.message?r.message:"未知错误";a.Notification.error({title:"错误",message:e})}})})},loginOldReportService:function(){t.a.ajax({url:"/api/v1/user/login",type:"POST",data:{email:"test@we.com",password:"password"},timeout:1e3,contentType:"application/json",success:function(r){if(0===r.status){var e=r.data||r;o.a.loginOld(e)?console.log("oldReportService:","登录成功"):console.log("oldReportService:","登录失败")}else console.log("oldReportService:",r.message||r.status||"登录失败")}})},clearPassword:function(){this.passwd=""},resetLoginForm:function(){this.$refs.loginForm.resetFields()}}},function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("h1",{staticClass:"login-title"},[r._v(r._s(r.title))])])],1),r._v(" "),n("el-form",{ref:"loginForm",attrs:{model:r.loginForm,rules:r.loginFormRules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"email"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:r.loginForm.email,callback:function(e){r.$set(r.loginForm,"email",e)},expression:"loginForm.email"}})],1),r._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.login()}},model:{value:r.loginForm.password,callback:function(e){r.$set(r.loginForm,"password",e)},expression:"loginForm.password"}})],1),r._v(" "),n("el-form-item")],1),r._v(" "),n("el-row",{staticClass:"text-center"},[n("el-col",{attrs:{span:24}},[n("el-button",{on:{click:function(){return r.resetLoginForm()}}},[r._v("重置")]),r._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(){return r.login()}}},[r._v("登录")])],1)],1)],1)])},[],!1,null,"7fad2fea",null);e.default=l.exports},106:function(r,e,n){r.exports=n.p+"dist/img/bg.a97556c.png"},108:function(r,e,n){var t=n(416);"string"==typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);(0,n(5).default)("2d9c3e10",t,!0,{})},2:function(r,e,n){"use strict";var t=n(32),o=n.n(t),a=n(51),s=n.n(a),i=n(26),l=n.n(i),p=n(16),A=function(r,e){return r.title="好分期报表系统",r.ajax=function(n){r.token=p.a.getToken();var t,a=n.url,i=+new Date;if(0<=a.indexOf("api/")){var l=p.a.getOldToken();i=l.timestamp,t=l.token}else t=r.token;n.uploadFiles||(n.type&&"get"==n.type.toLowerCase()?s()(n.data):"object"===s()(n.data)&&(n.data=o()(n.data))),e.ajax({headers:{Authorization:t,Timestamp:i},url:a,type:n.type||"GET",traditional:!0,data:n.data||{},async:n.async||!0,processData:void 0===n.processData||n.processData,contentType:void 0===n.contentType?e.ajaxSettings.contentType:n.contentType,dataType:n.dataType||"json",success:function(r){return r.status&&"0"!==r.status?void(-1==r.status?(alert("警告: "+r.message),p.a.setAsLoggedOut(),location.href="/#/login"):n.error?n.error(r):alert("警告: "+r.message+"\n错误："+r.status)):void(n.success&&n.success(r))},error:function(r){n.error&&(r.response?n.error(r.response):n.error({message:"请求失败"}))},complete:n.complete||void 0,timeout:n.timeout||null})},r.hasDuplicate=function(r,e){if("[object Array]"!==Object.prototype.toString.call(e))throw new Error("invalid argument");for(var n=0,t=e.length;n<t;n++)if(r==e[n])return!0;return!1},r.formatQuery=function(r){if("[object Object]"!==Object.prototype.toString.call(r))throw new Error("invalid argument");var e=r,n="?";for(var t in e)e.hasOwnProperty(t)&&(n+=t+"="+e[t]+"&");return n},r}(A||{},l.a);e.a=A},415:function(r,e,n){"use strict";var t=n(108);n.n(t).a},416:function(r,e,n){e=r.exports=n(4)(!0);var t=n(72)(n(106));e.push([r.i,'\nbody[data-v-7fad2fea] {\r\n  font-family: "Microsoft YaHei";\r\n  font-size: 12px;\n}\n.login[data-v-7fad2fea] {\r\n  position: absolute;\r\n  width: 99%;\r\n  height: 98%;\r\n  font-size: 12px;\r\n  background: url('+t+") 0 0 repeat;\n}\n.container[data-v-7fad2fea] {\r\n  box-sizing: border-box;\r\n  width: 400px;\r\n  height: 300px;\r\n  padding: 20px 60px 20px 10px;\r\n  margin-left: -200px;\r\n  margin-top: -180px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  border: 1px solid #e8ebf2;\r\n  border-radius: 2px;\r\n  filter: progid:DXImageTransform.Microsoft.Shadow(color='#e8ebf2', Direction=135, Strength=5); /*for ie6,7,8*/\r\n  background-color: #fff;\r\n  -moz-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*firefox*/\r\n  -webkit-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*webkit*/\r\n  box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*opera或ie9*/\n}\n.login-title[data-v-7fad2fea] {\r\n  text-align: center;\r\n  padding-left: 60px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #1a1d22;\r\n  line-height: 50px;\n}\n.el-form-item[data-v-7fad2fea] {\r\n  margin-bottom: 20px;\n}\n.text-center[data-v-7fad2fea] {\r\n  text-align: center;\r\n  padding-left: 60px;\n}\r\n","",{version:3,sources:["src/views/login.vue"],names:[],mappings:";AA8LA;EACA,8BAAA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,oDAAA;AACA;AAEA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,yBAAA;EACA,kBAAA;EACA,4FAAA,EAAA,cAAA;EACA,sBAAA;EACA,qEAAA,EAAA,UAAA;EACA,wEAAA,EAAA,SAAA;EACA,gEAAA,EAAA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,kBAAA;AACA",file:"login.vue?vue&type=style&index=0&id=7fad2fea&scoped=true&lang=css&",sourcesContent:["\x3c!--\r\n * @Description: \r\n * @Author: 焦丙乾(jiaobingqian)\r\n * @Email: jiaobq123@163.com\r\n * @Date: 2018-03-23 14:27:21\r\n * @LastEditTime: 2019-06-13 11:14:37\r\n * @LastEditors: 焦丙乾(jiaobingqian)\r\n --\x3e\r\n<template>\r\n  <div class=\"login\">\r\n    <div class=\"container\">\r\n      <el-row>\r\n        <el-col :span=\"24\">\r\n          <h1 class=\"login-title\">{{title}}</h1>\r\n        </el-col>\r\n      </el-row>\r\n\r\n      <el-form :model=\"loginForm\" :rules=\"loginFormRules\" ref=\"loginForm\" label-width=\"100px\">\r\n        <el-form-item label=\"用户名\" prop=\"email\">\r\n          <el-input v-model=\"loginForm.email\" auto-complete=\"off\"></el-input>\r\n        </el-form-item>\r\n\r\n        <el-form-item label=\"密码\" prop=\"password\">\r\n          <el-input\r\n            type=\"password\"\r\n            v-model=\"loginForm.password\"\r\n            v-on:keyup.enter.native=\"login()\"\r\n            auto-complete=\"off\"\r\n          ></el-input>\r\n        </el-form-item>\r\n\r\n        <el-form-item></el-form-item>\r\n      </el-form>\r\n      <el-row class=\"text-center\">\r\n        <el-col :span=\"24\">\r\n          <el-button @click=\"resetLoginForm()\">重置</el-button>\r\n          <el-button type=\"primary\" @click=\"login()\">登录</el-button>\r\n        </el-col>\r\n      </el-row>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport common from '../utils/common';\r\nimport auth from '../utils/authenticate';\r\nimport { Notification } from 'element-ui';\r\nlet { title } = common;\r\n\r\nexport default {\r\n  components: {},\r\n  data() {\r\n    var validatePassword = (rule, value, callback) => {\r\n      if (value === '') {\r\n        callback(new Error('请输入密码'));\r\n      } else {\r\n        // TODO: password regex check\r\n        callback();\r\n      }\r\n    };\r\n\r\n    return {\r\n      title: title,\r\n      loginForm: {\r\n        //          email: 'test@we.com',\r\n        //          password: 'password',\r\n        email: '',\r\n        password: ''\r\n      },\r\n      loginFormRules: {\r\n        email: [\r\n          { required: true, message: '请输入用户名', trigger: 'blur' }\r\n          //{ min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }\r\n        ],\r\n        password: [\r\n          // { validator: validatePassword, trigger: 'blur' },\r\n          { required: true, message: '请输入密码', trigger: 'blur' }\r\n        ]\r\n      }\r\n    };\r\n  },\r\n  mounted() {},\r\n  methods: {\r\n    login: function() {\r\n      this.$refs['loginForm'].validate(valid => {\r\n        if (valid) {\r\n          var params = this.loginForm;\r\n          var router = this.$router;\r\n          common.ajax({\r\n            url: '/web/v1/user/login',\r\n            type: 'POST',\r\n            data: params,\r\n            timeout: 1000,\r\n            contentType: 'application/json',\r\n            success: response => {\r\n              if (response.status !== 0) {\r\n                Notification.error({\r\n                  title: '错误',\r\n                  message: response.message || response.status || '登录失败'\r\n                });\r\n                return;\r\n              }\r\n              var userData = response.data || response;\r\n              userData.username = userData.username || params.email;\r\n              if (auth.login(userData)) {\r\n                Notification.success({\r\n                  title: '登录',\r\n                  message: response.message || '成功'\r\n                });\r\n                router.push({ path: '/admin' });\r\n                //                                    this.loginOldReportService();\r\n              } else {\r\n                Notification.error({\r\n                  title: '错误',\r\n                  message: response.message || response.status || '登录失败'\r\n                });\r\n              }\r\n            },\r\n            error: function(response) {\r\n              var message = response.message ? response.message : '未知错误';\r\n              Notification.error({\r\n                title: '错误',\r\n                message: message\r\n              });\r\n              /* 测试 */\r\n              //                  let res = {\r\n              //                  \tmessage:'成功',\r\n              //                    data:{\r\n              //                  \t\t'username':'dev',\r\n              //                      'token':'sssdfsadfasdfweasdasdqweasdasd'\r\n              //                    }\r\n              //                  }\r\n              //                  var userData = res.data || res;\r\n              //                  if(auth.login(userData)){\r\n              //                    router.push({path: '/admin/operation'})\r\n              //                    Notification.success({\r\n              //                      title: '登录',\r\n              //                      message: res.message||'成功'\r\n              //                    });\r\n              //                  }\r\n              //                  router.push({path: '/admin/operation'})\r\n              //                  Notification.success({\r\n              //                    title: '登录',\r\n              //                    message: '成功'\r\n              //                  });\r\n            }\r\n          });\r\n        } else {\r\n          return false;\r\n        }\r\n      });\r\n    },\r\n    loginOldReportService() {\r\n      common.ajax({\r\n        url: '/api/v1/user/login',\r\n        type: 'POST',\r\n        data: {\r\n          email: 'test@we.com',\r\n          password: 'password'\r\n        },\r\n        timeout: 1000,\r\n        contentType: 'application/json',\r\n        success: response => {\r\n          if (response.status !== 0) {\r\n            console.log(\r\n              'oldReportService:',\r\n              response.message || response.status || '登录失败',\r\n            );\r\n            return;\r\n          }\r\n          var oldUserData = response.data || response;\r\n          if (auth.loginOld(oldUserData)) {\r\n            console.log('oldReportService:', '登录成功');\r\n          } else {\r\n            console.log('oldReportService:', '登录失败');\r\n          }\r\n        }\r\n      });\r\n    },\r\n    clearPassword: function() {\r\n      this.passwd = '';\r\n    },\r\n    resetLoginForm() {\r\n      this.$refs['loginForm'].resetFields();\r\n    }\r\n  }\r\n};\r\n<\/script>\r\n\r\n<style scoped>\r\nbody {\r\n  font-family: \"Microsoft YaHei\";\r\n  font-size: 12px;\r\n}\r\n\r\n.login {\r\n  position: absolute;\r\n  width: 99%;\r\n  height: 98%;\r\n  font-size: 12px;\r\n  background: url(\"../assets/images/bg.png\") 0 0 repeat;\r\n}\r\n\r\n.container {\r\n  box-sizing: border-box;\r\n  width: 400px;\r\n  height: 300px;\r\n  padding: 20px 60px 20px 10px;\r\n  margin-left: -200px;\r\n  margin-top: -180px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  border: 1px solid #e8ebf2;\r\n  border-radius: 2px;\r\n  filter: progid:DXImageTransform.Microsoft.Shadow(color='#e8ebf2', Direction=135, Strength=5); /*for ie6,7,8*/\r\n  background-color: #fff;\r\n  -moz-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*firefox*/\r\n  -webkit-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*webkit*/\r\n  box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*opera或ie9*/\r\n}\r\n\r\n.login-title {\r\n  text-align: center;\r\n  padding-left: 60px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #1a1d22;\r\n  line-height: 50px;\r\n}\r\n\r\n.el-form-item {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n  padding-left: 60px;\r\n}\r\n</style>\r\n"]}])},51:function(r,e,n){r.exports=n(45)(3)}}]);
//# sourceMappingURL=30.2a69435f5bc8a10c70b7.js.map