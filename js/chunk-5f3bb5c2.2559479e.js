(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f3bb5c2"],{2131:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"armor"},["{}"!=JSON.stringify(a.armor)?t("div",{staticClass:"armorPanel",style:{"box-shadow":" 0 0 5px 5px "+a.armor.quality.color+"b8"}},[t("div",{staticClass:"title"},[t("div",{staticClass:"icon",class:{unique:"独特"==a.armor.quality.name},style:{"box-shadow":"inset 0 0 7px 2px "+a.armor.quality.color}},[t("img",{attrs:{src:a.armor.type.iconSrc,alt:""}})]),t("div",{staticClass:"name",style:{color:a.armor.quality.color}},[a._v(a._s(a.armor.type.name)+" "+a._s(a.armor.enchantlvl?"(+"+a.armor.enchantlvl+")":""))])]),t("div",{staticClass:"type"},[t("div",{style:{color:a.armor.quality.color}},[a._v(a._s(a.armor.quality.name))]),t("div",[a._v("防具")])]),t("div",{staticClass:"lv"},[t("div",[a._v("lv"+a._s(a.armor.lv))])]),t("div",{staticClass:"entry"},a._l(a.armor.type.entry,(function(e){return t("div",{key:e.id},[t("div",[a._v(a._s(e.name)+" : "+a._s(e.showVal)+" "),a.armor.enchantlvl?t("span",{staticStyle:{color:"#68d5ed"}},[a._v("(+"+a._s(Math.round(e.value*Math.pow(1.05,Math.pow(a.armor.enchantlvl,1.1))-e.value))+")")]):a._e()])])})),0),t("div",{staticClass:"extraEntry"},a._l(a.armor.extraEntry,(function(e){return t("div",{key:e.id},[t("div",[a._v(a._s(e.name)+" : "+a._s(e.showVal))])])})),0),t("div",{staticClass:"des"},[t("div",[a._v("\n        "+a._s(a.armor.type.des)+"\n      ")])])]):a._e()])},i=[],o=(t("7f7f"),{name:"armorPanel",data:function(){return{armor:{},qualityProbability:[.25,.55,.15,.05],quality:[{name:"破旧",qualityCoefficient:.7,probability:"0.25",color:"#a1a1a1",extraEntryNum:1},{name:"普通",qualityCoefficient:1,probability:"0.55",color:"#fff",extraEntryNum:2},{name:"神器",qualityCoefficient:1.5,probability:"0.15",color:"#ff00ff",extraEntryNum:3},{name:"史诗",qualityCoefficient:2,probability:"0.05",color:"#f78918",extraEntryNum:4},{name:"独特",qualityCoefficient:2.2,probability:"0",color:"#ff0000",extraEntryNum:5}],uniqueCategory:[{name:"红月的夜行衣",des:"",iconSrc:"./icons/U_Armor06.png",entry:[{valCoefficient:1.1,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:1.2,value:"8",showVal:"8",name:"生命值"},{valCoefficient:.8,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]},{name:"肃清者戎衣",des:"相传看到这一袭黑衣的人都死了。",iconSrc:"./icons/U_Armor05.png",entry:[{type:"HP",valCoefficient:1.8,value:"8",showVal:"8",name:"生命值"},{valCoefficient:2.8,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]},{name:"争执连身衣",des:"",iconSrc:"./icons/U_Armor01.png",entry:[{valCoefficient:1,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:1.1,value:"8",showVal:"8",name:"生命值"},{valCoefficient:1.2,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]},{name:"剑豪盔甲",des:"",iconSrc:"./icons/U_Armor02.png",entry:[{valCoefficient:2.1,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:2.3,value:"8",showVal:"8",name:"生命值"}]},{name:"隐武士铠甲",des:"",iconSrc:"./icons/U_Armor03.png",entry:[{valCoefficient:1.3,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:1,value:"8",showVal:"8",name:"生命值"},{valCoefficient:.9,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]},{name:"芬撒里尔追踪者",des:"",iconSrc:"./icons/U_Armor04.png",entry:[{valCoefficient:.9,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{valCoefficient:1.7,value:"11",showVal:"+11",type:"CRITDMG",name:"暴击伤害"},{valCoefficient:1,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]}],category:[{name:"紫金守护胸甲",des:"够肉才能输出",iconSrc:"./icons/A_A2.png",entry:[{valCoefficient:2,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:.6,value:"8",showVal:"8",name:"生命值"}]},{name:"战士重铠",des:"六级战士使用的重型铠甲",iconSrc:"./icons/A_A5.png",entry:[{valCoefficient:1.1,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:.7,value:"8",showVal:"8",name:"生命值"}]},{name:"天权轻甲",des:"舍弃了防御性能的轻甲，因为更加轻便，攻击性能更加突出",iconSrc:"./icons/A_A7.png",entry:[{valCoefficient:.7,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:.5,value:"8",showVal:"8",name:"生命值"},{valCoefficient:.5,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]},{name:"赤柳血铠",des:"似乎会给使用者提供生命气息",iconSrc:"./icons/A_A3.png",entry:[{valCoefficient:.9,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:1.2,value:"8",showVal:"8",name:"生命值"}]},{name:"哈皮毛毛连身衣",des:"哈皮毛毛",iconSrc:"./icons/A_A9.png",entry:[{valCoefficient:.8,value:"11",showVal:"+11",type:"DEF",name:"防御力"},{type:"HP",valCoefficient:.8,value:"8",showVal:"8",name:"生命值"},{valCoefficient:.4,value:"11",showVal:"+11",type:"ATK",name:"攻击力"}]}],extraEntry:[{value:"11",showVal:"+11",type:"ATK",name:"攻击力"},{type:"HP",value:"20",showVal:"+20",name:"生命值"},{type:"DEF",value:"8",showVal:"+8%",name:"防御力"},{value:"11%",showVal:"+11%",type:"DEFPERCENT",name:"防御力"},{value:"11%",showVal:"+11%",type:"HPPERCENT",name:"生命值"}]}},props:["item"],mounted:function(){},watch:{item:function(){this.armor=this.$deepCopy(this.item)}},methods:{createNewItem:function(a,e){var t={itemType:"armor"};return t.quality=a>-1?this.quality[a]:this.createQua(),t.lv=e||this.createLv(),t.type=this.createType(t),t.extraEntry=this.createExtraEntry(t),JSON.stringify(t)},createLv:function(a){return parseInt(Math.random()*(a||39))+1},createType:function(a){if("独特"==a.quality.name)var e=Math.floor(Math.random()*this.uniqueCategory.length),t=this.uniqueCategory[e],n=a.lv;else e=Math.floor(Math.random()*this.category.length),t=this.category[e],n=a.lv;return t.entry.map((function(e){switch(e.type){case"ATK":var t=parseInt(n*e.valCoefficient+(Math.random()*n/2+1));t=parseInt(t*a.quality.qualityCoefficient),t=t||1,e.value=t,e.showVal="+"+t;break;case"DEF":t=parseInt(n*e.valCoefficient+(Math.random()*n/2+1));t=parseInt(t*a.quality.qualityCoefficient),t=t||1,e.value=t,e.showVal="+"+t;break;case"HP":t=parseInt(n*e.valCoefficient*10+(Math.random()*n/2+1));t=parseInt(t*a.quality.qualityCoefficient),t=t||1,e.value=t,e.showVal="+"+t;break;case"CRIT":t=parseInt(5*Math.random()+5);t=parseInt(t*a.quality.qualityCoefficient),e.value=t,e.showVal="+"+t+"%";break;case"CRITDMG":t=parseInt(20*Math.random()+20);t=parseInt(t*a.quality.qualityCoefficient),e.value=t,e.showVal="+"+t+"%";break;default:break}})),t},createQua:function(){var a,e=Math.floor(Math.random()*this.qualityProbability.length),t=this.qualityProbability[e],n=this.qualityProbability;switch(t){case n[0]:a=this.quality[0];break;case n[1]:a=this.quality[1];break;case n[2]:a=this.quality[2];break;case n[3]:a=this.quality[3];break;default:break}return a},createExtraEntry:function(a){for(var e=a.quality.extraEntryNum,t=[],n=a.lv,i=0;i<e;i++){var o=Math.floor(Math.random()*this.extraEntry.length);t.push(this.extraEntry[o])}var r=this.$deepCopy(t);return r.map((function(e){switch(e.type){case"ATK":var t=parseInt(.3*n+(Math.random()*n/2+1));t=parseInt(t*a.quality.qualityCoefficient),t=t||1,e.value=t,e.showVal="+"+t;break;case"DEF":t=parseInt(.2*n+(Math.random()*n/2+1));t=parseInt(t*a.quality.qualityCoefficient),t=t||1,e.value=t,e.showVal="+"+t;break;case"HP":t=parseInt(.2*n*10+(Math.random()*n/2+1));t=parseInt(t*a.quality.qualityCoefficient),t=t||1,e.value=t,e.showVal="+"+t;break;case"CRIT":t=parseInt(5*Math.random()+5);t=parseInt(t*a.quality.qualityCoefficient),e.value=t,e.showVal="+"+t+"%";break;case"CRITDMG":t=parseInt(12*Math.random()+20);t=parseInt(t*a.quality.qualityCoefficient),e.value=t,e.showVal="+"+t+"%";break;case"DEFPERCENT":t=parseFloat(.12*n+(Math.random()*n/8+1)).toFixed(2);t=parseFloat(t*a.quality.qualityCoefficient).toFixed(2),t=t||1,e.value=t,e.showVal="+"+t+"%";break;case"HPPERCENT":t=parseFloat(.11*n+(Math.random()*n/8+1)).toFixed(2);t=parseFloat(t*a.quality.qualityCoefficient).toFixed(2),t=t||1,e.value=t,e.showVal="+"+t+"%";break;default:break}})),t=r,t}}}),r=o,l=(t("6e5f"),t("2877")),s=Object(l["a"])(r,n,i,!1,null,"1f92ed75",null);e["default"]=s.exports},"6e5f":function(a,e,t){"use strict";t("a50f")},"7f7f":function(a,e,t){var n=t("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in i||t("9e1e")&&n(i,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(a){return""}}})},a50f:function(a,e,t){}}]);