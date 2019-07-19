(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{106:function(r,e,n){r.exports=n.p+"dist/img/bg.a97556c.png"},1080:function(r,e,n){"use strict";n.r(e);var s=n(2),t=n(16),a=n(7),o=(n(504),n(3)),i=Object(o.a)({data:function(){var r=this;return{title:"修改密码",labelPosition:"right",passwordForm:{password:"",newPassword:"",checkNewPassWord:""},passwordFormRules:{password:[{required:!0,message:"请输入原密码",trigger:"blur"},{validator:function(e,n,s){""!==n&&(r.passwordForm.checkNewPassWord,s())},trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:function(e,n,s){if(""===n)s(new Error("请输入新密码"));else{7>n.length||!/\w*[0-9]+\w*$/.test(n)||!/\w*[a-zA-Z]+\w*$/.test(n)?s(new Error("密码须为大于6位的数字和字母")):(""!==r.passwordForm.checkNewPassWord&&r.$refs.passwordForm.validateField("checkNewPassWord"),s())}},trigger:"blur"}],checkNewPassWord:[{required:!0,message:"请确认新密码",trigger:"blur"},{validator:function(e,n,s){""===n?s(new Error("请再次输入密码")):n===r.passwordForm.newPassword?s():s(new Error("两次输入密码不一致!"))},trigger:"blur"},{validator:function(e,n,s){n===r.passwordForm.newPassword&&s()},trigger:"change"}]}}},mounted:function(){this.passwordForm.email=t.a.getEmail()},methods:{submit:function(){var r=this;this.$refs.passwordForm.validate(function(e){if(!e)return!1;var n=r.passwordForm,o=r.$router;s.a.ajax({url:"/web/v1/user/resetPassword",type:"POST",data:n,timeout:1e3,contentType:"application/json",success:function(r){t.a.setRequiresAlterPassword(!1),r.data||r?(o.push({path:"/admin"}),a.Notification.success({title:"登录",message:r.message||"成功"})):a.Notification.error({title:"错误",message:r.message||r.status||"登录失败"})},error:function(r){var e=r.message?r.message:"未知错误";a.Notification.error({title:"错误",message:e})}})})},clearPassword:function(){this.passwd=""},resetPasswordForm:function(){this.$refs.passwordForm.resetFields()}}},function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("h2",{staticClass:"page-title"},[r._v("\n          "+r._s(r.title)+"\n                  ")])])],1),r._v(" "),n("el-form",{ref:"passwordForm",attrs:{model:r.passwordForm,rules:r.passwordFormRules,"label-position":r.labelPosition,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"原密码",prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:r.passwordForm.password,callback:function(e){r.$set(r.passwordForm,"password",e)},expression:"passwordForm.password"}})],1),r._v(" "),n("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:r.passwordForm.newPassword,callback:function(e){r.$set(r.passwordForm,"newPassword",e)},expression:"passwordForm.newPassword"}})],1),r._v(" "),n("el-form-item",{attrs:{label:"确认新密码",prop:"checkNewPassWord"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.submit()}},model:{value:r.passwordForm.checkNewPassWord,callback:function(e){r.$set(r.passwordForm,"checkNewPassWord",e)},expression:"passwordForm.checkNewPassWord"}})],1)],1),r._v(" "),n("el-row",{staticClass:"text-center"},[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{type:"primary"},on:{click:function(){return r.submit()}}},[r._v("提交")]),r._v(" "),n("el-button",{on:{click:function(){return r.resetPasswordForm()}}},[r._v("重置")])],1)],1)],1)])},[],!1,null,"67dc3266",null);e.default=i.exports},152:function(r,e,n){var s=n(505);"string"==typeof s&&(s=[[r.i,s,""]]),s.locals&&(r.exports=s.locals);(0,n(5).default)("4bcd7442",s,!0,{})},2:function(r,e,n){"use strict";var s=n(32),t=n.n(s),a=n(51),o=n.n(a),i=n(26),l=n.n(i),p=n(16),d=function(r,e){return r.title="好分期报表系统",r.ajax=function(n){r.token=p.a.getToken();var s,a=n.url,i=+new Date;if(0<=a.indexOf("api/")){var l=p.a.getOldToken();i=l.timestamp,s=l.token}else s=r.token;n.uploadFiles||(n.type&&"get"==n.type.toLowerCase()?o()(n.data):"object"===o()(n.data)&&(n.data=t()(n.data))),e.ajax({headers:{Authorization:s,Timestamp:i},url:a,type:n.type||"GET",traditional:!0,data:n.data||{},async:n.async||!0,processData:void 0===n.processData||n.processData,contentType:void 0===n.contentType?e.ajaxSettings.contentType:n.contentType,dataType:n.dataType||"json",success:function(r){return r.status&&"0"!==r.status?void(-1==r.status?(alert("警告: "+r.message),p.a.setAsLoggedOut(),location.href="/#/login"):n.error?n.error(r):alert("警告: "+r.message+"\n错误："+r.status)):void(n.success&&n.success(r))},error:function(r){n.error&&(r.response?n.error(r.response):n.error({message:"请求失败"}))},complete:n.complete||void 0,timeout:n.timeout||null})},r.hasDuplicate=function(r,e){if("[object Array]"!==Object.prototype.toString.call(e))throw new Error("invalid argument");for(var n=0,s=e.length;n<s;n++)if(r==e[n])return!0;return!1},r.formatQuery=function(r){if("[object Object]"!==Object.prototype.toString.call(r))throw new Error("invalid argument");var e=r,n="?";for(var s in e)e.hasOwnProperty(s)&&(n+=s+"="+e[s]+"&");return n},r}(d||{},l.a);e.a=d},504:function(r,e,n){"use strict";var s=n(152);n.n(s).a},505:function(r,e,n){e=r.exports=n(4)(!0);var s=n(72)(n(106));e.push([r.i,'\nbody[data-v-67dc3266] {\n  font-family: "Microsoft YaHei";\n  font-size: 12px;\n}\n.page[data-v-67dc3266] {\n  position: absolute;\n  width: 99%;\n  height: 98%;\n  font-size: 12px;\n  background: url('+s+") 0 0 repeat;\n}\n.container[data-v-67dc3266] {\n  box-sizing: border-box;\n  width: 400px;\n  height: 300px;\n  padding: 20px 60px 20px 10px;\n  margin-left: -200px;\n  margin-top: -180px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border: 1px solid #e8ebf2;\n  border-radius: 2px;\n  filter: progid:DXImageTransform.Microsoft.Shadow(color='#e8ebf2', Direction=135, Strength=5); /*for ie6,7,8*/\n  background-color: #fff;\n  -moz-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*firefox*/\n  -webkit-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*webkit*/\n  box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*opera或ie9*/\n}\n.page-title[data-v-67dc3266] {\n  text-align: center;\n  padding-left: 60px;\n  font-size: 20px;\n  font-weight: bold;\n  color: #1a1d22;\n  line-height: 50px;\n}\n.text-center[data-v-67dc3266]{\n      text-align: center;\n      padding-left: 60px;\n}\n\n\n","",{version:3,sources:["src/views/contents/permission/resetPassword.vue"],names:[],mappings:";AA+KA;EACA,8BAAA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,oDAAA;AACA;AAEA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,yBAAA;EACA,kBAAA;EACA,4FAAA,EAAA,cAAA;EACA,sBAAA;EACA,qEAAA,EAAA,UAAA;EACA,wEAAA,EAAA,SAAA;EACA,gEAAA,EAAA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;AACA;AACA;MACA,kBAAA;MACA,kBAAA;AACA",file:"resetPassword.vue?vue&type=style&index=0&id=67dc3266&scoped=true&lang=css&",sourcesContent:["<template>\r\n  <div class=\"page\">\r\n    <div class=\"container\">\r\n      <el-row>\r\n        <el-col :span=\"24\">\r\n          <h2 class=\"page-title\">\r\n            {{title}}\r\n                    </h2>\r\n        </el-col>\r\n      </el-row>\r\n      <el-form :model=\"passwordForm\" :rules=\"passwordFormRules\" ref=\"passwordForm\" :label-position=\"labelPosition\" label-width=\"100px\">\r\n        \x3c!--<el-form-item label=\"用户名\" prop=\"username\">--\x3e\r\n        \x3c!--<el-input v-model=\"passwordForm.username\" auto-complete=\"off\"></el-input>--\x3e\r\n        \x3c!--</el-form-item>--\x3e\r\n\r\n        <el-form-item label=\"原密码\" prop=\"password\">\r\n          <el-input type=\"password\" v-model=\"passwordForm.password\" auto-complete=\"off\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"新密码\" prop=\"newPassword\">\r\n          <el-input type=\"password\" v-model=\"passwordForm.newPassword\" auto-complete=\"off\"></el-input>\r\n        </el-form-item>\r\n        <el-form-item label=\"确认新密码\" prop=\"checkNewPassWord\">\r\n          <el-input type=\"password\" v-model=\"passwordForm.checkNewPassWord\" auto-complete=\"off\" v-on:keyup.enter.native=\"submit()\"></el-input>\r\n        </el-form-item>\r\n\r\n      </el-form>\r\n        <el-row class=\"text-center\">\r\n            <el-col :span=\"24\">\r\n                <el-button type=\"primary\" @click=\"submit()\">提交</el-button>\r\n                <el-button @click=\"resetPasswordForm()\">重置</el-button>\r\n            </el-col>\r\n        </el-row>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Common from '../../../utils/common'\r\n  import auth from '../../../utils/authenticate'\r\n  import {Notification} from 'element-ui';\r\n  export default {\r\n    data() {\r\n      /**\r\n       *\r\n       * @param rule\r\n       * @param value\r\n       * @param callback\r\n       */\r\n      var validatePassword = (rule, value, callback) => {\r\n        if (value !== '') {\r\n          if (this.passwordForm.checkNewPassWord !== '') {\r\n            //Common.ajax\r\n          }\r\n          callback();\r\n        }\r\n      };\r\n      var validateNewPassword = (rule, value, callback) => {\r\n        if (value === '') {\r\n          callback(new Error('请输入新密码'));\r\n        } else {\r\n          var reg = /^[0-9a-zA-Z]+$/;\r\n          var regu = /\\w*[0-9]+\\w*$/;\r\n          var regu2 = /\\w*[a-zA-Z]+\\w*$/;\r\n          if (value.length < 7 || !regu.test(value) || !regu2.test(value)) {\r\n            callback(new Error('密码须为大于6位的数字和字母'));\r\n          } else {\r\n            if (this.passwordForm.checkNewPassWord !== '') {\r\n              this.$refs.passwordForm.validateField('checkNewPassWord');\r\n            }\r\n            callback();\r\n          }\r\n        }\r\n      };\r\n      var validatePass2 = (rule, value, callback) => {\r\n        if (value === '') {\r\n          callback(new Error('请再次输入密码'));\r\n        } else if (value !== this.passwordForm.newPassword) {\r\n          callback(new Error('两次输入密码不一致!'));\r\n        } else {\r\n          callback();\r\n        }\r\n      };\r\n      var validatePass3 = (rule, value, callback) => {\r\n        if (value === this.passwordForm.newPassword) {\r\n          callback();\r\n        }\r\n      };\r\n\r\n      return {\r\n        title: '修改密码',\r\n        labelPosition:'right',\r\n        passwordForm: {\r\n          password: '',\r\n          newPassword: '',\r\n          checkNewPassWord: '',\r\n        },\r\n        passwordFormRules: {\r\n//          username: [\r\n//            { required: true, message: '请输入用户名', trigger: 'blur' },\r\n//            //{ min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }\r\n//          ],\r\n          password: [\r\n            {required: true, message: '请输入原密码', trigger: 'blur'},\r\n            {validator: validatePassword, trigger: 'blur'},\r\n          ],\r\n          newPassword: [\r\n            {required: true, message: '请输入新密码', trigger: 'blur'},\r\n//            {min: 7, message: '大于6位的数字和字母', trigger: 'blur'},\r\n            {validator: validateNewPassword, trigger: 'blur'},\r\n          ],\r\n          checkNewPassWord: [\r\n            {required: true, message: '请确认新密码', trigger: 'blur'},\r\n            {validator: validatePass2, trigger: 'blur'},\r\n            {validator: validatePass3, trigger: 'change'},\r\n          ],\r\n        }\r\n      }\r\n    },\r\n    mounted(){\r\n        this.passwordForm.email = auth.getEmail();\r\n    },\r\n    methods: {\r\n      submit: function () {\r\n        this.$refs['passwordForm'].validate((valid) => {\r\n          if (valid) {\r\n            var params = this.passwordForm;\r\n            var router = this.$router;\r\n            Common.ajax({\r\n              url: \"/web/v1/user/resetPassword\",\r\n              type: \"POST\",\r\n              data: params,\r\n              timeout: 1000,\r\n              contentType: \"application/json\",\r\n              success: function (response) {\r\n                  auth.setRequiresAlterPassword(false);\r\n                var res = response.data || response;\r\n                if (res) {\r\n                  router.push({path: '/admin'})\r\n                  Notification.success({\r\n                    title: '登录',\r\n                    message: response.message || '成功'\r\n                  });\r\n                }\r\n                else {\r\n                  Notification.error({\r\n                    title: '错误',\r\n                    message: response.message || response.status || '登录失败'\r\n                  });\r\n                }\r\n              },\r\n              error: function (response) {\r\n                var message = (response.message) ? response.message : \"未知错误\";\r\n                Notification.error({\r\n                  title: '错误',\r\n                  message: message\r\n                });\r\n              }\r\n            });\r\n          } else {\r\n            return false;\r\n          }\r\n        });\r\n      },\r\n      clearPassword: function () {\r\n        this.passwd = \"\";\r\n      },\r\n      resetPasswordForm() {\r\n        this.$refs['passwordForm'].resetFields();\r\n      }\r\n    },\r\n  }\r\n\r\n<\/script>\r\n\r\n<style scoped>\r\n  body {\r\n    font-family: \"Microsoft YaHei\";\r\n    font-size: 12px;\r\n  }\r\n\r\n  .page {\r\n    position: absolute;\r\n    width: 99%;\r\n    height: 98%;\r\n    font-size: 12px;\r\n    background: url('../../../assets/images/bg.png') 0 0 repeat;\r\n  }\r\n\r\n  .container {\r\n    box-sizing: border-box;\r\n    width: 400px;\r\n    height: 300px;\r\n    padding: 20px 60px 20px 10px;\r\n    margin-left: -200px;\r\n    margin-top: -180px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    border: 1px solid #e8ebf2;\r\n    border-radius: 2px;\r\n    filter: progid:DXImageTransform.Microsoft.Shadow(color='#e8ebf2', Direction=135, Strength=5); /*for ie6,7,8*/\r\n    background-color: #fff;\r\n    -moz-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*firefox*/\r\n    -webkit-box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*webkit*/\r\n    box-shadow: 0 2px 16px #e8ebf2, 0 0 1px #e8ebf2, 0 0 1px #e8ebf2; /*opera或ie9*/\r\n  }\r\n\r\n  .page-title {\r\n    text-align: center;\r\n    padding-left: 60px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #1a1d22;\r\n    line-height: 50px;\r\n  }\r\n    .text-center{\r\n        text-align: center;\r\n        padding-left: 60px;\r\n    }\r\n\r\n\r\n</style>\r\n"]}])},51:function(r,e,n){r.exports=n(45)(3)}}]);
//# sourceMappingURL=28.fee91adf949dd7599163.js.map