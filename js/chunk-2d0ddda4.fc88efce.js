(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddda4"],{"82c7":function(e,n,t){"use strict";t.r(n);t("b0c0");var l=t("7a23"),i=Object(l["g"])("br",null,null,-1),o=Object(l["h"])("Loading..."),c=Object(l["g"])("br",null,null,-1),r=[o,c],u={key:0},s=Object(l["g"])("br",null,null,-1),b=["src"],d=Object(l["g"])("br",null,null,-1),f=Object(l["g"])("br",null,null,-1),j=Object(l["g"])("br",null,null,-1),O=Object(l["g"])("br",null,null,-1),a={class:"my-2 bg-light"},g={key:0},v={key:0},p={key:1},h={key:1},w=Object(l["g"])("h3",null,"Active events",-1),F=Object(l["g"])("br",null,null,-1),k=Object(l["g"])("h3",null,"Expired events",-1);function I(e,n,t,o,c,I){var m=Object(l["x"])("event-list");return Object(l["s"])(),Object(l["f"])(l["a"],null,[i,Object(l["H"])(Object(l["g"])("span",null,r,512),[[l["E"],c.loading]]),c.userInfo?(Object(l["s"])(),Object(l["f"])("div",u,[s,Object(l["g"])("img",{src:c.userInfo.profile.photo,width:"50"},null,8,b),d,Object(l["h"])(" "+Object(l["z"])(c.userInfo.profile.username)+" ",1),f,Object(l["h"])(" "+Object(l["z"])(c.userInfo.profile.name)+" ",1),j,Object(l["h"])(" "+Object(l["z"])(c.userInfo.profile.date_of_birth)+" ",1),O,Object(l["g"])("div",a,[c.isFriend?(Object(l["s"])(),Object(l["f"])("div",g,[c.isApproved?(Object(l["s"])(),Object(l["f"])("div",v,[Object(l["g"])("button",{onClick:n[0]||(n[0]=function(e){return I.unfollow()})},"Unfollow")])):(Object(l["s"])(),Object(l["f"])("div",p,[Object(l["g"])("button",{onClick:n[1]||(n[1]=function(e){return I.cancelFollow()})},"Cancel following request")]))])):(Object(l["s"])(),Object(l["f"])("div",h,[Object(l["g"])("button",{onClick:n[2]||(n[2]=function(e){return I.follow()})},"Follow")]))])])):Object(l["e"])("",!0),Object(l["g"])("div",null,[w,Object(l["i"])(m,{events:e.events.active},null,8,["events"])]),F,Object(l["g"])("div",null,[k,Object(l["i"])(m,{events:e.events.expired},null,8,["events"])])],64)}var m=t("5530"),y=t("5502"),A=t("2ade"),C=t("794b"),x={components:{EventList:A["a"]},data:function(){return{loading:!1,userInfo:"",isFriendInfo:"",isFriend:!1,isApproved:!1}},props:{id:{type:String}},computed:Object(m["a"])({},Object(y["c"])("event",["events"])),created:function(){var e=this;this.loading=!0,C["a"].get(this.id).then((function(n){e.userInfo=n.data,e.isFriendInfo=n.friend,e.isFriend=e.isFriendInfo.isFriend,e.isApproved=e.isFriendInfo.isApproved,console.log(n)})).then((function(){return e.loading=!1}))},methods:{follow:function(){var e=this;this.loading=!0,C["a"].follow(this.id).then((function(){e.isFriend=!0,e.isApproved=!1})).then((function(){return e.loading=!1}))},unfollow:function(){this.cancelFollow()},cancelFollow:function(){var e=this;this.loading=!0,C["a"].followCancel(this.id).then((function(){e.isFriend=!1,e.isApproved=!1})).then((function(){return e.loading=!1}))}}};x.render=I;n["default"]=x}}]);
//# sourceMappingURL=chunk-2d0ddda4.fc88efce.js.map