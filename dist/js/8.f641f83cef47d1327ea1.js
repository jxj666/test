(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1046:function(t,e,r){"use strict";r.r(e);var n=r(2),a=(r(16),r(7)),i=(r(73),r(52),r(46),r(74),r(58),r(53)),s=r(26),o=r.n(s),l=r(36),c=r.n(l),d=(r(440),r(3)),h=Object(d.a)({props:[],components:{},data:function(){new Date,new Date;return{closable:!1,line:c()(i.a),hashes:[1],searchParam:{},activeName:"first",isFullScreen:!1,clearable:!1,lineGroup:{}}},computed:{},methods:{formatDate:function(t){("number"==typeof t||"string"==typeof t)&&(t=new Date(t));var e=t.getFullYear(),r=t.getMonth(),n=t.getDate();return e+"/"+(r=9>r?"0"+(r+1):r+1)+"/"+(n=10>n?"0"+n:n)+" "+t.getHours()},clearLine:function(){this.line.legend.data=[],this.line.xAxis&&(this.line.xAxis[0].data=[]),this.line.series=[],this.showPercent=!1,this.line.yAxis[0].axisLabel={formatter:"{value}"},this.line.tooltip.formatter=null,this.line.tooltip.axisPointer.label={formatter:"{value}"}},setDataView:function(t,e){for(var r="",n=[],a="",i=0;i<t.length;i++)r+="<td>"+this.line.series[i].name+"</td>";for(var s=0,o=e.length;s<o;s++){n[s]="";for(i=0;i<t.length;i++)n[s]+="<td>"+this.line.series[i].data[s]+"</td>";a+="<tr><td>"+e[s]+"</td>"+n[s]+"</tr>"}this.line.toolbox.feature.dataView.optionToContent=function(){return'<table style="width:100%;text-align:center"><tbody><tr><td>时间</td>'+r+"</tr>"+a+"</tbody></table>"}},setOptions:function(t,e){var r=this;this.line.dataZoom[0].start=67;var n=e.length,a=["rgba(255,144,128,1)","rgba(0,191,183,1)","rgba(252,230,48,1)"];this.line.xAxis[0].data=e.map(function(t){return r.formatDate(t)}),this.line.legend.data=t.map(function(t){return t.value});for(var i=0;i<t.length;i++){this.lineGroup[t[i].value]=i;var s={name:t[i].value,type:"line",label:{normal:{show:!0}},barMaxWidth:30,barGap:"80%",symbolSize:5,symbol:"circle",areaStyle:{normal:{}},data:Array(n).fill(0),itemStyle:{normal:{color:a[i],label:{show:!0,position:"insideTop",formatter:function(t){return 0<t.value?t.value:""}}}}};"avgVerFk"==t[i].key&&(s.itemStyle.normal.label.position="top"),this.line.series.push(s)}},search:function(){var t=this;this.$refs.line.showLoading({text:"正在加载",color:"#4ea397",maskColor:"rgba(255, 255, 255, 0.4)"}),n.a.ajax({url:"/web/v1/audit/getThreeDay",type:"post",contentType:"application/json",data:{},success:function(e){var r;t.$refs.line.hideLoading(),t.clearLine(),e.data&&e.data.list&&(r=e.data,!e.status&&(t.setOptions(r.categories,r.dates),r.list.forEach(function(e){var r=Math.abs,n=Math.ceil,a=t.line.xAxis[0].data.indexOf(t.formatDate(1e3*e.startTime));0<=a&&(t.line.series[t.lineGroup.进件到提交].data[a]=n(e.avgJjSub/60)+"."+r(e.avgJjSub)%60,t.line.series[t.lineGroup.提交到审核].data[a]=n(e.avgSubVer/60)+"."+r(e.avgSubVer)%60,t.line.series[t.lineGroup.审核到放款].data[a]=n(e.avgVerFk/60)+"."+r(e.avgVerFk)%60)}),t.setDataView(r.categories,r.dates)))},error:function(e){t.$refs.line.hideLoading();var r=e.message||e;a.Notification.error({title:"错误",message:r})}})},handleClick:function(t){0==t.index&&(this.activeName="first")}},created:function(){},mounted:function(){var t=o()(".contents").height()-200;o()(".chartClass").css("height",t),this.$refs.line.resize(),this.search()},beforeDestroy:function(){this.clearLine()},watch:{}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"放款时效",name:"first"}},[r("div",{staticClass:"p_6"},[r("div",{staticClass:"search-wrapper"},[r("div",{staticStyle:{float:"right",overflow:"hidden"}},[r("el-button",{attrs:{slot:"append",type:"primary",icon:"search"},on:{click:t.search},slot:"append"},[t._v("重新查询")])],1)]),t._v(" "),r("chart",{ref:"line",staticClass:"chartClass",attrs:{options:t.line,theme:"ovilia-green","auto-resize":""}}),t._v(" "),r("el-alert",{attrs:{title:"",type:"info",description:"提示：图表下方和右侧灰色区域两头可拖动控制相应联动区域的缩小和放大，方便数据查看，光标在图表区域内鼠标滑轮滑动亦可以！","show-icon":"",closable:t.closable}}),t._v(" "),r("el-alert",{attrs:{title:"",description:"警告：图表右上角工具条数据视图点开情况下，请勿点击查询按钮，如点击查询再点击数据视图内刷新后会与前一查询结果重合且图表类型变化，可点击工具条还原按钮还原！","show-icon":"",type:"warning",closable:t.closable}})],1)])],1)},[],!1,null,"941f7372",null);e.default=h.exports},120:function(t,e,r){var n=r(441);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(5).default)("413950d0",n,!0,{})},2:function(t,e,r){"use strict";var n=r(32),a=r.n(n),i=r(51),s=r.n(i),o=r(26),l=r.n(o),c=r(16),d=function(t,e){return t.title="好分期报表系统",t.ajax=function(r){t.token=c.a.getToken();var n,i=r.url,o=+new Date;if(0<=i.indexOf("api/")){var l=c.a.getOldToken();o=l.timestamp,n=l.token}else n=t.token;r.uploadFiles||(r.type&&"get"==r.type.toLowerCase()?s()(r.data):"object"===s()(r.data)&&(r.data=a()(r.data))),e.ajax({headers:{Authorization:n,Timestamp:o},url:i,type:r.type||"GET",traditional:!0,data:r.data||{},async:r.async||!0,processData:void 0===r.processData||r.processData,contentType:void 0===r.contentType?e.ajaxSettings.contentType:r.contentType,dataType:r.dataType||"json",success:function(t){return t.status&&"0"!==t.status?void(-1==t.status?(alert("警告: "+t.message),c.a.setAsLoggedOut(),location.href="/#/login"):r.error?r.error(t):alert("警告: "+t.message+"\n错误："+t.status)):void(r.success&&r.success(t))},error:function(t){r.error&&(t.response?r.error(t.response):r.error({message:"请求失败"}))},complete:r.complete||void 0,timeout:r.timeout||null})},t.hasDuplicate=function(t,e){if("[object Array]"!==Object.prototype.toString.call(e))throw new Error("invalid argument");for(var r=0,n=e.length;r<n;r++)if(t==e[r])return!0;return!1},t.formatQuery=function(t){if("[object Object]"!==Object.prototype.toString.call(t))throw new Error("invalid argument");var e=t,r="?";for(var n in e)e.hasOwnProperty(n)&&(r+=n+"="+e[n]+"&");return r},t}(d||{},l.a);e.a=d},412:function(t,e,r){t.exports=r(45)(43)},413:function(t,e,r){t.exports=r(45)(8)},414:function(t,e,r){t.exports=r(45)(12)},440:function(t,e,r){"use strict";var n=r(120);r.n(n).a},441:function(t,e,r){(t.exports=r(4)(!0)).push([t.i,"\n.el-select .el-input[data-v-941f7372] {\r\n  width: 200px;\n}\n.pagination_position[data-v-941f7372] {\r\n  padding-top: 20px;\n}\n.search-wrapper[data-v-941f7372] {\r\n  margin: 0px auto 10px;\n}\n.chart-wrapper[data-v-941f7372] {\r\n  display: -webkit-flex; /* Safari */\r\n  display: flex;\r\n  display: -ms-flex;\r\n\r\n  /*flex主轴方向和主轴溢出排版方式的简写*/\r\n  -webkit-flex-flow: row wrap;\r\n  flex-flow: row wrap;\r\n  -ms-flex-flow: row wrap;\r\n\r\n  /*内容在主轴上的对齐方式*/\r\n  -webkit-justify-content: space-between;\r\n  justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n\r\n  /*内容项目在交叉轴上的对齐方式*/\r\n  -webkit-align-items: stretch;\r\n  align-items: stretch;\r\n  -ms-align-items: stretch;\r\n\r\n  /*多轴的时候轴线的对齐方式*/\r\n  -webkit-align-content: stretch;\r\n  align-content: stretch;\r\n  -ms-align-content: stretch;\n}\n.echarts[data-v-941f7372] {\r\n  width: 100%;\n}\n.right[data-v-941f7372] {\r\n  float: right;\n}\n.warning[data-v-941f7372] {\r\n  color: #f7ba2a;\n}\r\n","",{version:3,sources:["src/views/contents/audit/loanEfficiency.vue"],names:[],mappings:";AA+CA;EACA,YAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,qBAAA,EAAA,WAAA;EACA,aAAA;EACA,iBAAA;;EAEA,uBAAA;EACA,2BAAA;EACA,mBAAA;EACA,uBAAA;;EAEA,cAAA;EACA,sCAAA;EACA,8BAAA;EACA,kCAAA;;EAEA,iBAAA;EACA,4BAAA;EACA,oBAAA;EACA,wBAAA;;EAEA,eAAA;EACA,8BAAA;EACA,sBAAA;EACA,0BAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,YAAA;AACA;AACA;EACA,cAAA;AACA",file:"loanEfficiency.vue?vue&type=style&index=0&id=941f7372&scoped=true&lang=css&",sourcesContent:['\x3c!--\r\n * @Description: \r\n * @Author: jinxiaojian\r\n * @Email: jinxiaojian@youxin.com\r\n * @Date: 2019-07-12 16:17:33\r\n * @LastEditTime: 2019-07-16 14:25:25\r\n * @LastEditors: 靳肖健\r\n --\x3e\r\n<template>\r\n  <el-tabs v-model="activeName" @tab-click="handleClick">\r\n    <el-tab-pane label="放款时效" name="first">\r\n      <div class="p_6">\r\n        <div class="search-wrapper">\r\n          \x3c!--<div class="search-content">--\x3e\r\n          \x3c!--<el-date-picker--\x3e\r\n          \x3c!--v-show="searchParam.category === 1"--\x3e\r\n          \x3c!--v-model="searchParam.dateRange"--\x3e\r\n          \x3c!--type="daterange"--\x3e\r\n          \x3c!--placeholder="选择日期范围">--\x3e\r\n          \x3c!--</el-date-picker>--\x3e\r\n          \x3c!--</div>--\x3e\r\n          <div style="float: right;overflow: hidden;">\r\n            <el-button slot="append" type="primary" icon="search" @click="search">重新查询</el-button>\r\n          </div>\r\n        </div>\r\n        <chart :options="line" ref="line" theme="ovilia-green" auto-resize class="chartClass"></chart>\r\n\r\n        <el-alert\r\n          title\r\n          type="info"\r\n          description="提示：图表下方和右侧灰色区域两头可拖动控制相应联动区域的缩小和放大，方便数据查看，光标在图表区域内鼠标滑轮滑动亦可以！"\r\n          show-icon\r\n          :closable="closable"\r\n        ></el-alert>\r\n        <el-alert\r\n          title\r\n          description="警告：图表右上角工具条数据视图点开情况下，请勿点击查询按钮，如点击查询再点击数据视图内刷新后会与前一查询结果重合且图表类型变化，可点击工具条还原按钮还原！"\r\n          show-icon\r\n          type="warning"\r\n          :closable="closable"\r\n        ></el-alert>\r\n      </div>\r\n    </el-tab-pane>\r\n  </el-tabs>\r\n</template>\r\n\r\n<style scoped>\r\n.el-select .el-input {\r\n  width: 200px;\r\n}\r\n\r\n.pagination_position {\r\n  padding-top: 20px;\r\n}\r\n\r\n.search-wrapper {\r\n  margin: 0px auto 10px;\r\n}\r\n\r\n.chart-wrapper {\r\n  display: -webkit-flex; /* Safari */\r\n  display: flex;\r\n  display: -ms-flex;\r\n\r\n  /*flex主轴方向和主轴溢出排版方式的简写*/\r\n  -webkit-flex-flow: row wrap;\r\n  flex-flow: row wrap;\r\n  -ms-flex-flow: row wrap;\r\n\r\n  /*内容在主轴上的对齐方式*/\r\n  -webkit-justify-content: space-between;\r\n  justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n\r\n  /*内容项目在交叉轴上的对齐方式*/\r\n  -webkit-align-items: stretch;\r\n  align-items: stretch;\r\n  -ms-align-items: stretch;\r\n\r\n  /*多轴的时候轴线的对齐方式*/\r\n  -webkit-align-content: stretch;\r\n  align-content: stretch;\r\n  -ms-align-content: stretch;\r\n}\r\n\r\n.echarts {\r\n  width: 100%;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n.warning {\r\n  color: #f7ba2a;\r\n}\r\n</style>\r\n\r\n<script>\r\nimport Common from "../../../utils/common";\r\nimport auth from "../../../utils/authenticate";\r\nimport { Notification } from "element-ui";\r\n\r\nimport "echarts/lib/component/grid";\r\nimport "echarts/lib/component/toolbox";\r\nimport "echarts/lib/component/tooltip";\r\nimport "echarts/lib/component/legend";\r\n\r\n// built-in theme\r\nimport "echarts/theme/dark";\r\nimport initChartData from "../../../data/initChart";\r\n\r\nimport $ from "jquery";\r\nimport deepcopy from "deepcopy";\r\n\r\nexport default {\r\n  props: [],\r\n  components: {},\r\n  data() {\r\n    let date = new Date();\r\n    let now = new Date();\r\n\r\n    return {\r\n      closable: false,\r\n      line: deepcopy(initChartData),\r\n      hashes: [1],\r\n      searchParam: {},\r\n      activeName: "first",\r\n      isFullScreen: false,\r\n      clearable: false,\r\n      lineGroup: {},\r\n    };\r\n  },\r\n  computed: {},\r\n  methods: {\r\n    formatDate(date) {\r\n      if (typeof date == "number" || typeof date == "string") {\r\n        date = new Date(date);\r\n      }\r\n      var _year = date.getFullYear();\r\n      var _month = date.getMonth();\r\n      var _day = date.getDate();\r\n      var _hour = date.getHours();\r\n      _day = _day < 10 ? "0" + _day : _day;\r\n      _month = _month < 9 ? "0" + (_month + 1) : _month + 1;\r\n      return `${_year}/${_month}/${_day} ${_hour}`;\r\n    },\r\n\r\n    clearLine() {\r\n      this.line.legend.data = [];\r\n      this.line.xAxis && (this.line.xAxis[0].data = []);\r\n      this.line.series = [];\r\n      this.showPercent = false;\r\n      this.line.yAxis[0].axisLabel = {\r\n        formatter: "{value}",\r\n      };\r\n      //格式化tooltip的坐标轴指示器显示数值\r\n      this.line.tooltip.formatter = null;\r\n      this.line.tooltip.axisPointer.label = { formatter: "{value}" };\r\n    },\r\n    setDataView(categorys, xAxisData) {\r\n      var thead = "",\r\n        trTd = [],\r\n        tbodyTr = "";\r\n      for (var i = 0; i < categorys.length; i++) {\r\n        thead += "<td>" + this.line.series[i].name + "</td>"; //头部\r\n      }\r\n\r\n      for (var j = 0, l = xAxisData.length; j < l; j++) {\r\n        trTd[j] = "";\r\n        for (var i = 0; i < categorys.length; i++) {\r\n          trTd[j] += "<td>" + this.line.series[i].data[j] + "</td>";\r\n        }\r\n\r\n        tbodyTr += "<tr>" + "<td>" + xAxisData[j] + "</td>" + trTd[j] + "</tr>";\r\n      }\r\n      this.line.toolbox.feature.dataView.optionToContent = function() {\r\n        var table =\r\n          \'<table style="width:100%;text-align:center"><tbody><tr>\' +\r\n          "<td>时间</td>" +\r\n          thead +\r\n          "</tr>" +\r\n          tbodyTr +\r\n          "</tbody></table>";\r\n        return table;\r\n      };\r\n    },\r\n    /**\r\n     * 配置chart图表数据\r\n     * @param categorys\r\n     * @param xAxisData\r\n     */\r\n    setOptions(categorys, xAxisData) {\r\n      this.line.dataZoom[0].start = 67;\r\n      let len = xAxisData.length;\r\n      let colors = [\r\n        "rgba(255,144,128,1)",\r\n        "rgba(0,191,183,1)",\r\n        "rgba(252,230,48,1)",\r\n      ];\r\n      this.line.xAxis[0].data = xAxisData.map(item => {\r\n        return this.formatDate(item);\r\n      });\r\n      this.line.legend.data = categorys.map(item => {\r\n        return item.value;\r\n      });\r\n\r\n      for (var i = 0; i < categorys.length; i++) {\r\n        this.lineGroup[categorys[i].value] = i;\r\n        let seriesOptions = {\r\n          name: categorys[i].value,\r\n          type: "line",\r\n          label: {\r\n            normal: {\r\n              show: true,\r\n            },\r\n          },\r\n          barMaxWidth: 30,\r\n          barGap: "80%",\r\n          symbolSize: 5,\r\n          symbol: "circle",\r\n          areaStyle: { normal: {} },\r\n          data: Array(len).fill(0),\r\n          itemStyle: {\r\n            normal: {\r\n              color: colors[i],\r\n              label: {\r\n                show: true,\r\n                position: "insideTop",\r\n                formatter(p) {\r\n                  return p.value > 0 ? p.value : "";\r\n                },\r\n              },\r\n            },\r\n          },\r\n        };\r\n        if (categorys[i].key == "avgVerFk") {\r\n          seriesOptions.itemStyle.normal.label.position = "top";\r\n        }\r\n        this.line.series.push(seriesOptions);\r\n      }\r\n    },\r\n\r\n    search() {\r\n      let queryData = {};\r\n\r\n      this.$refs.line.showLoading({\r\n        text: "正在加载",\r\n        color: "#4ea397",\r\n        maskColor: "rgba(255, 255, 255, 0.4)",\r\n      });\r\n\r\n      Common.ajax({\r\n        url: "/web/v1/audit/getThreeDay",\r\n        type: "post",\r\n        contentType: "application/json",\r\n        data: queryData,\r\n        success: response => {\r\n          this.$refs.line.hideLoading();\r\n          let resData;\r\n          this.clearLine();\r\n          if (response.data && response.data.list) {\r\n            resData = response.data;\r\n            if (!response.status) {\r\n              this.setOptions(resData.categories, resData.dates);\r\n              resData.list.forEach((item, index, arr) => {\r\n                let dataIdx = this.line.xAxis[0].data.indexOf(\r\n                  this.formatDate(item.startTime * 1000),\r\n                );\r\n                if (dataIdx >= 0) {\r\n                  this.line.series[this.lineGroup["进件到提交"]].data[dataIdx] =\r\n                    Math.ceil(item.avgJjSub / 60) +\r\n                    "." +\r\n                    (Math.abs(item.avgJjSub) % 60);\r\n                  this.line.series[this.lineGroup["提交到审核"]].data[dataIdx] =\r\n                    Math.ceil(item.avgSubVer / 60) +\r\n                    "." +\r\n                    (Math.abs(item.avgSubVer) % 60);\r\n                  this.line.series[this.lineGroup["审核到放款"]].data[dataIdx] =\r\n                    Math.ceil(item.avgVerFk / 60) +\r\n                    "." +\r\n                    (Math.abs(item.avgVerFk) % 60);\r\n                }\r\n                //                                    else {\r\n                //                                        this.line.series[this.lineGroup["进件到提交"]].data[dataIdx] = 0;\r\n                //                                        this.line.series[this.lineGroup["提交到审核"]].data[dataIdx] = 0;\r\n                //                                        this.line.series[this.lineGroup["审核到放款"]].data[dataIdx] = 0;\r\n                //                                    }\r\n              });\r\n              this.setDataView(resData.categories, resData.dates);\r\n            }\r\n          }\r\n        },\r\n        error: err => {\r\n          this.$refs.line.hideLoading();\r\n          let error = err.message || err;\r\n          Notification.error({\r\n            title: "错误",\r\n            message: error,\r\n          });\r\n        },\r\n      });\r\n    },\r\n    handleClick(tab, event) {\r\n      let index = tab.index;\r\n      if (index == 0) {\r\n        this.activeName = "first";\r\n      }\r\n    },\r\n  },\r\n  created() {},\r\n  mounted() {\r\n    let cvHeight = $(".contents").height() - 200;\r\n    $(".chartClass").css("height", cvHeight);\r\n    //调用echarts实例resize函数\r\n    this.$refs.line.resize();\r\n\r\n    this.search();\r\n  },\r\n  beforeDestroy() {\r\n    this.clearLine();\r\n  },\r\n  watch: {},\r\n};\r\n<\/script>\r\n']}])},51:function(t,e,r){t.exports=r(45)(3)},53:function(t,e,r){"use strict";var n,a=r(44),i=r.n(a);e.a=(n={backgroundColor:"#2a3245",title:{text:"放款时效",x:"10",top:10,textStyle:{color:"#fff",fontSize:"18"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff",fontSize:"14"}}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#fff",fontSize:"14"}},legend:{x:"25%",top:"7%",axisTick:{alignWithLabel:"true"},textStyle:{color:"#fff"},data:[]},toolbox:i()({right:20,feature:{dataView:{show:!0,readOnly:!1,optionToContent:function(t){for(var e=t.xAxis[0].data,r=t.series,n='<table style="width:100%;text-align:center"><tbody><tr><td>时间</td><td>'+r[0].name+"</td><td>"+r[1].name+"</td><td>"+r[2].name+"</td></tr>",a=0,i=e.length;a<i;a++)n+="<tr><td>"+e[a]+"</td><td>"+r[0].data[a]+"</td><td>"+r[1].data[a]+"</td><td>"+r[2].data[a]+"</td></tr>";return n+="</tbody></table>"},textareaBorderColor:"#fff"},magicType:{type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{pixelRatio:2}},iconStyle:{normal:{borderColor:"#fff"}},top:"10"},"right","40")},i()(n,"grid",{left:"2%",right:"100",bottom:"50",top:"85",containLabel:!0}),i()(n,"calculable",!0),i()(n,"xAxis",[{type:"category",name:"进件时间/h",boundaryGap:!1,axisLine:{lineStyle:{color:"#fff"}},data:[]}]),i()(n,"yAxis",[{type:"value",name:"耗时/m",splitLine:{show:!0},axisLine:{lineStyle:{color:"#fff"}}}]),i()(n,"dataZoom",[{show:!0,height:30,xAxisIndex:[0],bottom:5,start:0,end:100,handleSize:"110%",textStyle:{color:"#fff"}},{type:"inside",show:!0,height:15,start:1,end:35},{type:"slider",show:!0,yAxisIndex:0,filterMode:"empty",textStyle:{color:"#fff"},width:15,handleSize:10,showDataShadow:!1,right:"70",bottom:"70"}]),i()(n,"series",[]),n)}}]);
//# sourceMappingURL=8.f641f83cef47d1327ea1.js.map