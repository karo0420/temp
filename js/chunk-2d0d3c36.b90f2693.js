(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3c36"],{"5dc4":function(n,e,t){"use strict";t.r(e);var o=t("7a23"),c=Object(o["g"])("br",null,null,-1),r=Object(o["h"])(" Confirm code "),i=["disabled"],u=Object(o["g"])("br",null,null,-1),s=Object(o["h"])(" havent received code? "),d={key:0};function a(n,e,t,a,f,h){return Object(o["s"])(),Object(o["f"])("div",null,[Object(o["h"])(" Enter code that sent to : "+Object(o["z"])(t.phone)+" ",1),c,r,Object(o["H"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(n){return f.confirmCode=n})},null,512),[[o["D"],f.confirmCode]]),Object(o["g"])("button",{onClick:e[1]||(e[1]=function(){return h.confirm&&h.confirm.apply(h,arguments)}),disabled:f.loading},"confirm",8,i),u,s,f.counter>0?(Object(o["s"])(),Object(o["f"])("span",d,"wait "+Object(o["z"])(f.counter)+" second",1)):(Object(o["s"])(),Object(o["f"])("span",{key:1,onClick:e[2]||(e[2]=function(n){return h.resend()})},"Resend code"))])}var f=t("9962"),h={data:function(){return{confirmCode:"",loading:!1,counter:3}},props:{phone:{type:String}},created:function(){this.timer()},methods:{confirm:function(){var n=this;this.loading=!0,this.$store.dispatch("auth/confirm",{phone:this.phone,confirmCode:this.confirmCode}).then((function(){n.$router.push({name:"Home"})})).catch((function(n){return console.log(n.response)})).then((function(){n.loading=!1}))},resend:function(){var n=this;f["a"].resend(this.phone).then((function(){n.timer()})).catch((function(n){return console.log(n.response)}))},timer:function(){var n=this;this.counter=3;var e=setInterval((function(){--n.counter<=0&&clearInterval(e)}),1e3)}},computed:{}};h.render=a;e["default"]=h}}]);
//# sourceMappingURL=chunk-2d0d3c36.b90f2693.js.map