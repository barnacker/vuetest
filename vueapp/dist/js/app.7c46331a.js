(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)n=o[u],i[n]&&v.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00ca":function(t,e,a){"use strict";var r=a("a7e6"),i=a.n(r);i.a},"04ec":function(t,e,a){t.exports=a.p+"img/error.025ebce7.gif"},1:function(t,e){},4707:function(t,e,a){t.exports=a.p+"img/feathersjs.2fc1b2de.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),i=a("e06a"),s=a.n(i),n=a("bb71");a("da64");r["default"].use(n["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[t.activities.length>0?a("v-navigation-drawer",{ref:"nav",attrs:{clipped:t.$vuetify.breakpoint.smAndUp,fixed:"",app:"",right:"",width:"300"},model:{value:t.drawerState,callback:function(e){t.drawerState=e},expression:"drawerState"}},[a("v-list",{attrs:{"two-line":"",subheader:""}},[a("v-subheader",[t._v("Activities")]),t._l(t.activities,function(e){return a("v-list-tile",{key:e._id,attrs:{avatar:""}},[a("v-list-tile-action",["created"==e.action?a("v-icon",{attrs:{large:""}},[t._v("note_add")]):"modified"==e.action?a("v-icon",{attrs:{large:""}},[t._v("create")]):"moved"==e.action?a("v-icon",{attrs:{large:""}},[t._v("swap_horiz")]):"reordered"==e.action?a("v-icon",{attrs:{large:""}},[t._v("swap_vert")]):"removed"==e.action?a("v-icon",{attrs:{large:""}},[t._v("delete_sweep")]):t._e()],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n            "+t._s(t._f("capitalize")(e.action))+"\n            "+t._s(e.entityType)+"\n            "+t._s(e.entityName)+"\n          ")]),a("v-list-tile-sub-title",[t._v("\n            "+t._s(e.user.displayname)+"\n            "+t._s(t._f("moment")(e.updatedAt,"from"))+"\n          ")])],1),a("v-list-tile-avatar",[a("v-gravatar",{attrs:{email:e.user.email?e.user.email:""}})],1)],1)})],2)],1):t._e(),a("v-toolbar",{attrs:{"clipped-right":t.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[t.backArrow?a("v-toolbar-side-icon",{on:{click:function(e){t.back()}}},[a("v-icon",[t._v("arrow_back")])],1):t._e(),a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[a("span",[t._v("Reactive Demo")])]),a("v-spacer"),t.loadingActivities||t.activities.length>0?a("v-btn",{attrs:{slot:"activator",icon:""},on:{click:function(e){e.stopPropagation(),t.drawerState=!t.drawerState}},slot:"activator"},[t.loadingActivities?a("v-progress-circular",{attrs:{indeterminate:"",size:"24",color:"white"}}):a("v-badge",{attrs:{left:"",overlap:"",color:"red"},model:{value:t.blindState,callback:function(e){t.blindState=e},expression:"blindState"}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.blindActivities))]),a("v-icon",[t._v("notifications")])],1)],1):t._e(),t.connected?a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{attrs:{slot:"activator",icon:"",large:""},slot:"activator"},[t.connected?a("v-avatar",{attrs:{size:32}},[a("v-gravatar",{attrs:{email:t.connected.email}})],1):t._e()],1),a("v-list",[a("v-list-tile",{on:{click:t.disconnect}},[a("v-list-tile-title",[t._v("Logout")])],1)],1)],1):a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",to:{name:"login"}}},[t._v("Login")]),a("v-btn",{attrs:{flat:"",to:{name:"signup"}}},[t._v("Sign up")])],1)],1),a("v-content",[a("router-view")],1)],1)},l=[],c=(a("6b54"),a("a481"),a("ac6a"),a("be94")),d=a("2f62"),u={name:"App",data:()=>({localDrawer:!1,firstScanActivities:!1}),watch:{activities(t,e){0!==e.length&&this.addBlindActivities(t.length-e.length)}},computed:Object(c["a"])({},Object(d["e"])(["blindActivities","drawer"]),Object(d["e"])("auth",{disconnecting:"isLogoutPending",connected:"user"}),Object(d["e"])("activities",{loadingActivities:"isFindPending",creatingActivity:"isCreatePending"}),Object(d["c"])("activities",{findActivitiesInStore:"find"}),{navActive(){return!!this.$refs.nav&&this.$refs.nav.isActive},activities(){const t=this.findActivitiesInStore({query:{$sort:{updatedAt:-1}}}).data;return t},backArrow(){return 0!==Object.keys(this.$route.params).length},drawerState:{get(){return this.drawer},set(t){this.$store.dispatch("setDrawer",t)}},blindState:{get(){return this.blindActivities},set(){}}}),methods:Object(c["a"])({},Object(d["d"])("users",{clearUsers:"clearAll"}),Object(d["d"])("boards",{clearBoards:"clearAll"}),Object(d["d"])("lists",{clearLists:"clearAll"}),Object(d["d"])("cards",{clearCards:"clearAll"}),Object(d["d"])("activities",{clearActivities:"clearAll"}),Object(d["b"])(["setDrawer","addBlindActivities"]),Object(d["b"])("auth",["logout"]),{async flushStore(){await this.clearActivities(),await this.clearCards(),await this.clearLists(),await this.clearBoards(),await this.clearUsers()},async disconnect(){await this.flushStore(),await this.logout(),this.$router.push("/")},back(){window.history.length>2?this.$router.go(-1):this.$router.replace("/boards")}}),filters:{capitalize(t){if(!t)return"";let e=t;return e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)}}},v=u,p=a("2877"),f=a("6544"),b=a.n(f),m=a("7496"),g=a("8212"),h=a("4ca6"),y=a("8336"),x=a("549c"),C=a("132d"),V=a("8860"),k=a("ba95"),w=a("40fe"),O=a("c954"),A=a("5d23"),j=a("e449"),L=a("f774"),$=a("490a"),E=a("9910"),T=a("e0c7"),S=a("71d9"),I=a("2a7f"),B=a("706c"),F=Object(p["a"])(v,o,l,!1,null,null,null);F.options.__file="App.vue";var D=F.exports;b()(F,{VApp:m["a"],VAvatar:g["a"],VBadge:h["a"],VBtn:y["a"],VContent:x["a"],VIcon:C["a"],VList:V["a"],VListTile:k["a"],VListTileAction:w["a"],VListTileAvatar:O["a"],VListTileContent:A["a"],VListTileSubTitle:A["b"],VListTileTitle:A["c"],VMenu:j["a"],VNavigationDrawer:L["a"],VProgressCircular:$["a"],VSpacer:E["a"],VSubheader:T["a"],VToolbar:S["a"],VToolbarItems:I["a"],VToolbarSideIcon:B["a"],VToolbarTitle:I["b"]});var P=a("8c4f"),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",[r("v-img",{staticClass:"my-3",attrs:{src:a("ae5f"),contain:"",height:"200"}}),r("h1",{staticClass:"text-xs-center"},[t.$vuetify.breakpoint.xsOnly?t._e():r("br"),t._v('Vous présente un prototype de "Real Time Application" avec WebSockets\n          '),t.$vuetify.breakpoint.xsOnly?t._e():r("br"),t.$vuetify.breakpoint.xsOnly?t._e():r("br"),t.$vuetify.breakpoint.xsOnly?t._e():r("br")]),r("v-layout",{attrs:{"align-center":"","justify-center":"",column:t.$vuetify.breakpoint.xsOnly}},[r("v-flex"),r("v-flex",[r("v-img",{attrs:{src:a("9b19"),contain:"",height:"200"}}),r("h1",{staticClass:"text-xs-center"},[t._v("Vuetify")])],1),r("v-flex",[r("h1",{staticClass:"text-xs-center"},[t._v("+")])]),r("v-flex",[r("v-img",{attrs:{src:a("4707"),contain:"",height:"200"}}),r("h1",{staticClass:"text-xs-center"},[t._v("FeathersJS")])],1),r("v-flex",[r("h1",{staticClass:"text-xs-center"},[t._v("+")])]),r("v-flex",[r("v-img",{attrs:{src:a("99e0"),contain:"",width:"200"}})],1),r("v-flex")],1)],1)],1)],1)],1)},R=[],U=a("a523"),q=a("0e8f"),H=a("adda"),z=a("a722"),N=a("0789"),W={},Y=Object(p["a"])(W,M,R,!1,null,null,null);Y.options.__file="Home.vue";var J=Y.exports;b()(Y,{VContainer:U["a"],VFlex:q["a"],VImg:H["a"],VLayout:z["a"],VSlideYTransition:N["d"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"",md4:""}},[a("v-icon",{attrs:{"x-large":""}},[t._v("face")]),a("v-form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:[t.notEmptyRules],label:"User",required:"",disabled:t.loading},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),a("v-text-field",{attrs:{rules:[t.notEmptyRules],label:"Display Name",required:"",disabled:t.loading},model:{value:t.user.displayname,callback:function(e){t.$set(t.user,"displayname",e)},expression:"user.displayname"}}),a("v-text-field",{attrs:{rules:[t.notEmptyRules,t.validEmail],label:"Email",required:"",disabled:t.loading},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{rules:[t.notEmptyRules],type:"password",label:"Password",required:"",disabled:t.loading},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-text-field",{attrs:{rules:[t.notEmptyRules,t.confirmPasswordRules],type:"password",label:"Confirm Password",required:"",disabled:t.loading},model:{value:t.user.confirm_password,callback:function(e){t.$set(t.user,"confirm_password",e)},expression:"user.confirm_password"}}),a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{type:"submit",loading:t.loading,disabled:!t.valid||t.loading}},[t._v("Sign up")])],1)],1)],1)],1)],1),a("error-pop",{attrs:{errTitle:"Authentication Error",errText:t.signUpErr},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},Z=[];const K=t=>!!t||"Cannot be empty",Q=t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."};var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("v-icon",{attrs:{large:""}},[t._v("error")]),t._v("\n      "+t._s(t.errTitle)+"\n    ")],1),a("v-card-text",[t._v(t._s(t.errText))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.$emit("input",!1)}}},[t._v("OK")])],1)],1)],1)},tt=[],et={name:"error-pop",props:{value:Boolean,errTitle:String,errText:String},data:()=>({})},at=et,rt=a("b0af"),it=a("99d9"),st=a("12b2"),nt=a("169a"),ot=Object(p["a"])(at,X,tt,!1,null,null,null);ot.options.__file="ErrorPop.vue";var lt=ot.exports;b()(ot,{VBtn:y["a"],VCard:rt["a"],VCardActions:it["a"],VCardText:it["b"],VCardTitle:st["a"],VDialog:nt["a"],VIcon:C["a"],VSpacer:E["a"]});var ct={name:"signup",components:{ErrorPop:lt},data:t=>({valid:!1,dialog:!1,signUpErr:"",user:{username:"",email:"",password:"",confirm_password:"",displayname:""},notEmptyRules:K,validEmail:Q,confirmPasswordRules:e=>e===t.user.password||"Password must match"}),computed:Object(c["a"])({},Object(d["e"])("users",{loading:"isCreatePending"})),methods:{signup(){if(this.valid){const t=this.$FeathersVuex.User,e=new t(this.user);e.save().then(()=>{this.$router.push("/login")}).catch(t=>{this.signUpErr=t.message,this.dialog=!0})}}}},dt=ct,ut=a("4bd4"),vt=a("2677"),pt=Object(p["a"])(dt,G,Z,!1,null,null,null);pt.options.__file="Signup.vue";var ft=pt.exports;b()(pt,{VBtn:y["a"],VContainer:U["a"],VFlex:q["a"],VForm:ut["a"],VIcon:C["a"],VLayout:z["a"],VSlideYTransition:N["d"],VTextField:vt["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"",md4:""}},[a("v-icon",{attrs:{"x-large":""}},[t._v("assignment_ind")]),a("v-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:[t.notEmptyRules],label:"User",required:"",disabled:t.authenticating,autofocus:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),a("v-text-field",{attrs:{rules:[t.notEmptyRules],type:"password",label:"Password",required:"",disabled:t.authenticating},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-btn",{attrs:{type:"submit",loading:t.authenticating,disabled:!t.valid||t.authenticating}},[t._v("Login")])],1)],1)],1)],1),a("error-pop",{attrs:{errTitle:"Authentication Error",errText:t.authErr},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},mt=[],gt={name:"login",components:{ErrorPop:lt},data:()=>({valid:!1,dialog:!1,authErr:"",user:{username:"",password:""},notEmptyRules:K}),computed:Object(c["a"])({},Object(d["e"])("auth",{authenticating:"isAuthenticatePending"})),methods:Object(c["a"])({},Object(d["b"])("security",{secLogin:"login"}),{login(){this.valid&&this.secLogin({user:this.user}).catch(t=>{this.authErr=t.message,this.dialog=!0})}})},ht=gt,yt=Object(p["a"])(ht,bt,mt,!1,null,null,null);yt.options.__file="Login.vue";var xt=yt.exports;b()(yt,{VBtn:y["a"],VContainer:U["a"],VFlex:q["a"],VForm:ut["a"],VIcon:C["a"],VLayout:z["a"],VSlideYTransition:N["d"],VTextField:vt["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","pa-0":""},on:{click:function(e){t.createMode=!1}}},[t.loading?a("wait-bar",{attrs:{text:"Loading Boards..."}}):t._e(),t.loading?t._e():a("v-layout",{attrs:{column:"","pa-0":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-md":"",fluid:""}},[a("v-layout",{attrs:{"align-start":"","justify-start":"",row:"",wrap:""}},[t._l(t.boards,function(e){return a("v-flex",{key:e._id,attrs:{xs12:"",sm6:"",md4:"",lg2:"",xl1:""}},[a("board-card",{attrs:{board:e,currentUser:t.user}})],1)}),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg2:"",xl1:""}},[a("board-create",{attrs:{createMode:t.createMode},on:{activateCreateMode:function(e){t.createMode=!0}}})],1)],2)],1)],1)],1)],1)},Ct=[],Vt=a("2ef0"),kt=a.n(Vt),wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{cursor:"pointer"},on:{click:t.open}},[a("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.board.background}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline"},[t._v(t._s(t.board.name))])])],1)],1)],1),a("v-card-actions",[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[a("v-flex",{attrs:{xs12:""}},[t.loadingUser?a("v-progress-circular",{attrs:{size:20,width:2,color:"primary",indeterminate:""}}):t._e(),t.loadingUser?t._e():a("span",{staticClass:"body-1"},[a("v-avatar",{attrs:{size:20}},[a("v-gravatar",{attrs:{email:t.ownerUser.email}})],1),t._v("\n            "+t._s(t.owner)+" - "+t._s(t._f("moment")(t.board.updatedAt,"from"))+"\n          ")],1)],1),a("v-flex",{attrs:{xs2:"","pa-0":""}},[a("v-btn",{attrs:{fab:"",flat:"",small:"",color:"red"},on:{click:function(e){e.stopPropagation(),t.removeBoard(t.board._id)}}},[a("v-icon",[t._v("delete_forever")])],1)],1)],1)],1)],1)],1)},Ot=[],At={name:"board-card",props:["board","currentUser"],data:()=>({ownerUser:""}),computed:Object(c["a"])({},Object(d["e"])("users",{loadingUser:"isGetPending"}),{owner(){return this.ownerUser===this.currentUser?"You":this.ownerUser.displayname}}),methods:Object(c["a"])({},Object(d["b"])("users",{getUser:"get"}),Object(d["b"])("boards",{removeBoard:"remove"}),{open(){this.$router.push({name:"board",params:{id:this.board._id}})},getOwner(){this.getUser(this.board.ownerId).then(t=>{this.ownerUser=t})}}),beforeMount(){this.getOwner()}},jt=At,Lt=Object(p["a"])(jt,wt,Ot,!1,null,null,null);Lt.options.__file="BoardCard.vue";var $t=Lt.exports;b()(Lt,{VAvatar:g["a"],VBtn:y["a"],VCard:rt["a"],VCardActions:it["a"],VContainer:U["a"],VFlex:q["a"],VIcon:C["a"],VImg:H["a"],VLayout:z["a"],VProgressCircular:$["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.createMode?a("v-card",{on:{click:function(e){e.stopPropagation(),t.$emit("activateCreateMode")}}},[a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.createBoard(e)},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",{staticStyle:{height:"200px"}},[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-text-field",{attrs:{single:"",rules:[t.notEmptyRules],label:"Name",required:""},model:{value:t.board.name,callback:function(e){t.$set(t.board,"name",e)},expression:"board.name"}})],1),a("v-flex",[a("v-text-field",{attrs:{rules:[t.notEmptyRules],label:"Background",required:""},model:{value:t.board.background,callback:function(e){t.$set(t.board,"background",e)},expression:"board.background"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"success",type:"submit",loading:t.creating,disabled:!t.valid||t.creating}},[t._v("Create")])],1)],1)],1):a("v-card",{style:"text-decoration: "+(t.cardHover?"underline":"none")+";cursor: pointer;color: "+(t.cardHover?"black":"grey")+";",attrs:{flat:"",ripple:"",color:t.cardHover?"grey lighten-1":"grey lighten-2"},on:{click:function(e){e.stopPropagation(),t.$emit("activateCreateMode"),t.cardHover=!1},mouseenter:function(e){t.cardHover=!0},mouseleave:function(e){t.cardHover=!1}}},[a("v-container",{attrs:{"pa-1":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("span",{staticClass:"caption ma-0"},[t._v("Add a board...")])])],1)],1)],1)},Tt=[],St={name:"board-create",props:["createMode"],data:()=>({cardHover:!1,valid:!1,board:{name:"",background:"https://images.unsplash.com/photo-1544604860-206456f08229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},notEmptyRules:K}),computed:Object(c["a"])({},Object(d["e"])("boards",{creating:"isCreatePending"})),methods:{createBoard(){if(this.valid){const t=this.$FeathersVuex.Board,e=new t(this.board);e.save().then(()=>{this.$refs.form.reset()})}}}},It=St,Bt=Object(p["a"])(It,Et,Tt,!1,null,null,null);Bt.options.__file="BoardCreate.vue";var Ft=Bt.exports;b()(Bt,{VBtn:y["a"],VCard:rt["a"],VCardActions:it["a"],VCardTitle:st["a"],VContainer:U["a"],VFlex:q["a"],VForm:ut["a"],VLayout:z["a"],VTextField:vt["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"",fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":"","text-xs-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"px-0"},[a("span",{staticClass:"headline"},[t._v(t._s(t.text))])]),a("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1)],1)},Pt=[],Mt={name:"wait-bar",props:{text:String},data:()=>({})},Rt=Mt,Ut=a("8e36"),qt=Object(p["a"])(Rt,Dt,Pt,!1,null,null,null);qt.options.__file="WaitBar.vue";var Ht=qt.exports;b()(qt,{VCard:rt["a"],VCardText:it["b"],VContainer:U["a"],VFlex:q["a"],VLayout:z["a"],VProgressLinear:Ut["a"]});var zt={name:"Boards",components:{BoardCard:$t,BoardCreate:Ft,WaitBar:Ht},data:()=>({valid:!1,createMode:!1,notEmptyRules:t=>!!t||"Cannot be empty"}),mounted(){this.findBoards({query:{ownerId:this.user._id}})},watch:{boards:kt.a.debounce(function(){this.clearActivities()},100)},computed:Object(c["a"])({},Object(d["e"])("auth",{user:"user"}),Object(d["e"])("boards",{creating:"isCreatePending"}),Object(d["e"])("boards",{loading:"isFindPending"}),Object(d["c"])("boards",{findBoardsInStore:"find"}),{boards(){return this.user?this.findBoardsInStore({query:{ownerId:this.user._id}}).data:[]}}),methods:Object(c["a"])({},Object(d["d"])("activities",{clearActivities:"clearAll"}),Object(d["b"])("boards",{findBoards:"find"}),Object(d["b"])("boards",{removeBoard:"remove"}),{async createBoard(){if(this.valid){const t=this.$FeathersVuex.Board,e=new t(this.board);await e.save(),this.$refs.form.reset()}}})},Nt=zt,Wt=Object(p["a"])(Nt,_t,Ct,!1,null,null,null);Wt.options.__file="Boards.vue";var Yt=Wt.exports;b()(Wt,{VContainer:U["a"],VFlex:q["a"],VLayout:z["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{style:"background-image: url("+t.board.background+"); background-size:cover;",attrs:{"fill-height":"",fluid:"","pa-0":""}},[t.boardsError?a("error-alert",{attrs:{message:t.boardsError.message}}):t.listsError?a("error-alert",{attrs:{message:t.listsError.message}}):a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{on:{submit:function(t){t.preventDefault()},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{staticClass:"headline mb-0",attrs:{dark:"","solo-inverted":"",rules:[t.notEmptyRules],label:"Name",required:"",loading:t.loadingBoard,color:"orange"},on:{change:function(e){t.myPatch()}},model:{value:t.board.name,callback:function(e){t.$set(t.board,"name",e)},expression:"board.name"}},[a("v-progress-linear",{attrs:{slot:"progress",height:"2",indeterminate:"",color:"primary"},slot:"progress"})],1)],1),t.loadingBoard?t._e():a("v-flex",{attrs:{xs12:"","pa-0":""}}),a("list-list",{attrs:{board:t.board},on:{refreshActivities:t.debouncedLoadActivities}})],1)],1)],1)},Gt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{class:{"grid-list-xl":t.$vuetify.breakpoint.xsOnly,"grid-list-md":t.$vuetify.breakpoint.smAndUp},attrs:{"pt-0":"",fluid:""},on:{click:function(e){t.createMode=!1,t.setActiveListCreateCard("")}}},[a("v-layout",{attrs:{"align-start":"","justify-start":"",row:"",wrap:""}},[t._l(t.lists,function(e){return a("v-flex",{key:e._id,attrs:{xs12:"",sm3:"",md2:"",xl1:""}},[a("list-card",{attrs:{list:e,dragOrigin:t.dragOrigin,dragTarget:t.dragTarget},on:{deactivateCreateMode:function(e){t.createMode=!1},startDraggingCard:t.startDraggingCard,dropDraggedCard:t.dropDraggedCard,dragOverList:t.dragOverList,saveList:function(a){t.saveList(e)},removeList:function(a){t.removeListTree(e)},refreshActivities:function(e){t.$emit("refreshActivities")}}})],1)}),a("v-flex",{attrs:{xs12:"",sm3:"",md2:"",xl1:""}},[a("list-create",{attrs:{board:t.board,createMode:t.createMode},on:{activateCreateMode:function(e){t.createMode=!0,t.setActiveListCreateCard("")}}})],1)],2)],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:t.backColor},on:{dragover:function(e){t.$emit("dragOverList",e,t.list)}}},[a("v-container",{class:{"pa-3":t.$vuetify.breakpoint.xsOnly,"pa-2":t.$vuetify.breakpoint.smAndUp}},[a("v-layout",{attrs:{"justify-space-between":"",row:""}},[a("v-flex",{class:{"pt-1":t.$vuetify.breakpoint.xsOnly,"pt-0":t.$vuetify.breakpoint.smAndUp},attrs:{xs12:"","pl-1":""}},[a("header",{style:"background-color: "+t.backColor},[a("span",{staticClass:"auto-invert",style:"font-size:"+(t.$vuetify.breakpoint.xsOnly?"1.8rem":"1rem")},[t._v(t._s(t.list.name))])])]),a("v-flex",{class:{"pt-1":t.$vuetify.breakpoint.xsOnly,"pt-0":t.$vuetify.breakpoint.smAndUp,"pr-0":t.$vuetify.breakpoint.smAndUp}},[a("v-menu",{style:"background-color: "+t.backColor,attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-x":""}},[a("v-icon",{staticClass:"auto-invert",attrs:{slot:"activator",large:t.$vuetify.breakpoint.xsOnly},slot:"activator"},[t._v("more_horiz")]),a("v-card",[a("v-list",[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-avatar",[a("v-gravatar",{attrs:{email:"habib.tremblay@gmail.com"}})],1)],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Owner")]),a("v-list-tile-sub-title",[t._v(t._s(t._f("moment")(t.list.updatedAt,"from")))])],1)],1),a("v-card",{attrs:{color:t.backColor}},[a("v-menu",{attrs:{"close-on-content-click":!1,"offset-x":"","offset-y":"","pa-0":""}},[a("v-btn",{attrs:{slot:"activator",block:"",flat:""},slot:"activator"},[a("span",{staticClass:"auto-invert",style:"background-color: "+t.backColor},[t._v("Background Color")]),a("v-icon",{attrs:{right:""}},[t._v("format_color_fill")])],1),a("sketch-picker",{on:{input:function(e){t.updateValue({saveList:t.saveList,list:t.list})}},model:{value:t.list.color,callback:function(e){t.$set(t.list,"color",e)},expression:"list.color"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"error"},on:{click:function(e){t.menu=!1,t.$emit("removeList")}}},[a("v-icon",{attrs:{dark:"",right:""}},[t._v("remove_circle")]),t._v("Delete Card\n              ")],1)],1)],1)],1)],1)],1)],1),a("v-container",{attrs:{"pa-0":""}},[t.loadingCard?a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{"pb-4":""}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1):t._e(),t.loadingCard?t._e():a("v-layout",{attrs:{column:""}},[t._l(t.cards,function(e){return a("v-flex",{key:e._id,attrs:{"ml-2":"","mr-2":"","pb-0":"","pt-1":""}},[a("v-card",{attrs:{draggable:""},on:{dragstart:function(a){t.$emit("startDraggingCard",e)},dragend:function(a){t.$emit("dropDraggedCard",e)}}},[t.$vuetify.breakpoint.xsOnly?a("v-flex",{staticClass:"subheadings",attrs:{"pa-2":""}},[t._v(t._s(e.content))]):a("v-flex",{staticClass:"caption",attrs:{"pa-1":""}},[t._v(t._s(e.content))])],1)],1)}),a("v-flex",{attrs:{"ml-0":"","mr-0":"","pb-0":""}},[a("card-create",{attrs:{list:t.list},on:{deactivateCreateMode:function(e){t.$emit("deactivateCreateMode")}}})],1)],2)],1)],1)},Xt=[],te=a("c345"),ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$store.state.activeListCreateCard!==this.list._id?a("v-card",{style:"text-decoration: "+(t.cardHover?"underline":"none")+"; cursor: pointer; color: "+(t.cardHover?"black":"grey")+";",attrs:{flat:"",ripple:"",color:t.cardHover?"grey lighten-1":"grey lighten-2"},on:{click:function(e){return e.stopPropagation(),t.activateCardMode(e)},mouseenter:function(e){t.cardHover=!0},mouseleave:function(e){t.cardHover=!1}}},[a("v-container",{attrs:{"pa-2":""}},[a("v-layout",[t.$vuetify.breakpoint.xsOnly?a("v-flex",{attrs:{xs12:"","pl-3":""}},[a("span",{staticClass:"headline"},[t._v("Add a card...")])]):a("v-flex",{attrs:{"pt-0":"","pb-0":""}},[a("span",{staticClass:"pa-0 caption"},[t._v("Add a card...")])])],1)],1)],1):a("v-card",{attrs:{flat:"",color:"grey lighten-2"},on:{click:function(t){t.stopPropagation()}}},[a("v-container",{attrs:{"pt-1":"","pl-0":"","pr-0":"","pb-1":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"","pt-1":""}},[a("v-form",{ref:"form",on:{submit:function(e){e.preventDefault(),t.createCard()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{ref:"newCardContent",staticClass:"caption",attrs:{rules:[t.notEmptyRules],required:"",autofocus:"",solo:"",color:"secondary","append-icon":"save"},on:{"click:append":function(e){t.createCard()}},model:{value:t.card.content,callback:function(e){t.$set(t.card,"content",e)},expression:"card.content"}})],1)],1)],1)],1)],1)},ae=[],re={name:"card-create",props:["list"],data:()=>({valid:!1,cardHover:!1,card:{content:""},notEmptyRules:K}),computed:Object(c["a"])({},Object(d["e"])("cards",{creatingCard:"isCreatePending"})),methods:Object(c["a"])({},Object(d["b"])(["setActiveListCreateCard"]),{activateCardMode(){this.setActiveListCreateCard(this.list._id),this.$emit("deactivateCreateMode"),this.cardHover=!1},createCard(){if(this.valid){const t=this.$FeathersVuex.Card,e=new t(this.card);e.listId=this.list._id,e.boardId=this.list.boardId,e.save().then(()=>{this.$refs.form.reset(),this.$refs.newCardContent.focus()})}}})},ie=re,se=Object(p["a"])(ie,ee,ae,!1,null,null,null);se.options.__file="CardCreate.vue";var ne=se.exports;b()(se,{VCard:rt["a"],VContainer:U["a"],VFlex:q["a"],VForm:ut["a"],VLayout:z["a"],VTextField:vt["a"]});var oe={name:"list-card",props:["list","dragOrigin","dragTarget"],components:{CardCreate:ne,"sketch-picker":te["Chrome"]},data:()=>({pickedColor:""}),mounted(){this.findCards({query:{listId:this.list._id}})},computed:Object(c["a"])({},Object(d["e"])("cards",{loadingCard:"isFindPending"}),Object(d["c"])("cards",{findCardsInStore:"find"}),{cards(){const t=this.findCardsInStore({query:{listId:this.list._id}}).data;return t},backColor(){const t=this.list.color.hex8?this.list.color.hex8:this.list.color;return this.dragOrigin!==this.dragTarget&&this.dragTarget===this.list._id?"green lighten-2":t}}),methods:Object(c["a"])({},Object(d["b"])(["addBlindActivities"]),Object(d["b"])("cards",{findCards:"find"}),{saveList(){this.$emit("saveList")},updateValue:kt.a.debounce(t=>{let e=t.saveList,a=t.list;const r=a;r.color=a.color.hex8?a.color.hex8:a.color,e()},500)})},le=oe,ce=(a("00ca"),Object(p["a"])(le,Qt,Xt,!1,null,null,null));ce.options.__file="ListCard.vue";var de=ce.exports;b()(ce,{VAvatar:g["a"],VBtn:y["a"],VCard:rt["a"],VCardActions:it["a"],VContainer:U["a"],VFlex:q["a"],VIcon:C["a"],VLayout:z["a"],VList:V["a"],VListTile:k["a"],VListTileAvatar:O["a"],VListTileContent:A["a"],VListTileSubTitle:A["b"],VListTileTitle:A["c"],VMenu:j["a"],VProgressCircular:$["a"],VSpacer:E["a"]});var ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.createMode?a("v-card",{on:{click:function(e){e.stopPropagation(),t.$emit("activateCreateMode")}}},[a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.createList(e)},keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-text-field",{ref:"listname",attrs:{rules:[t.notEmptyRules],label:"Name",required:"",autofocus:""},model:{value:t.list.name,callback:function(e){t.$set(t.list,"name",e)},expression:"list.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",type:"submit",loading:t.creating,disabled:!t.valid||t.creating}},[t._v("Create")])],1)],1)],1):a("v-card",{style:"opacity: "+(t.cardHover?"1":"0.7")+"; cursor: pointer; color: white;",attrs:{flat:"",ripple:"","pa-0":"",color:"grey darken-2"},on:{click:function(e){e.stopPropagation(),t.$emit("activateCreateMode")},mouseenter:function(e){t.cardHover=!0},mouseleave:function(e){t.cardHover=!1}}},[a("v-container",{attrs:{"pa-1":""}},[a("v-layout",{attrs:{column:""}},[t.$vuetify.breakpoint.xsOnly?a("v-flex",{attrs:{xs12:"","pl-3":"","pb-3":"","pt-3":""}},[a("span",{staticClass:"headline"},[t._v("Add a list...")])]):a("v-flex",[a("span",{staticClass:"pa-0 caption"},[t._v("Add a list...")])])],1)],1)],1)},ve=[],pe={name:"list-create",props:["createMode","board"],data:()=>({cardHover:!1,valid:!1,list:{},notEmptyRules:K}),computed:Object(c["a"])({},Object(d["e"])("lists",{creating:"isCreatePending"})),methods:{createList(){if(this.valid){const t=this.$FeathersVuex.List,e=new t(this.list);e.boardId=this.board._id,e.save().then(()=>{this.$refs.form.reset()})}}}},fe=pe,be=Object(p["a"])(fe,ue,ve,!1,null,null,null);be.options.__file="ListCreate.vue";var me=be.exports;b()(be,{VBtn:y["a"],VCard:rt["a"],VCardActions:it["a"],VCardTitle:st["a"],VContainer:U["a"],VFlex:q["a"],VForm:ut["a"],VLayout:z["a"],VSpacer:E["a"],VTextField:vt["a"]});var ge={name:"list-list",props:["board"],components:{ListCard:de,ListCreate:me},data:()=>({dragOrigin:"",dragTarget:"",draggingCard:null,validList:!1,createMode:!1,cardMode:!1,list:{},notEmptyRules:K}),mounted(){this.loadLists()},watch:{lists(){this.$emit("refreshActivities")}},computed:Object(c["a"])({},Object(d["c"])("lists",{findListsInStore:"find"}),Object(d["c"])("lists",{getListInStore:"get"}),{lists(){return this.findListsInStore({query:{boardId:this.$route.params.id}}).data}}),methods:Object(c["a"])({},Object(d["b"])(["setActiveListCreateCard"]),Object(d["b"])("lists",{findLists:"find"}),Object(d["b"])("cards",{findCards:"find"}),{async loadLists(){await this.findLists({query:{boardId:this.$route.params.id}})},async createList(){if(this.validList){const t=this.$FeathersVuex.List,e=new t(this.list);e.boardId=this.$route.params.id,e.save().then(()=>{this.$refs.form.reset()})}},async saveList(t){t.save()},async removeListTree(t){const e=t._id;t.remove(),this.findCards({query:{listId:e}}).then(t=>{Object.entries(t.data).forEach(t=>{t[1].remove()})})},startDraggingCard(t){this.dragOrigin=t.listId,this.draggingCard=t},async dropDraggedCard(t){const e=t;e.listId=this.dragTarget,e.boardId=this.board._id,e.move=!0,await e.save(),this.dragOrigin="",this.dragTarget="",this.draggingCard=null},dragOverList(t,e){this.dragTarget=e._id,this.dragTarget!==this.dragOrigin&&t.preventDefault()}})},he=ge,ye=Object(p["a"])(he,Zt,Kt,!1,null,null,null);ye.options.__file="ListList.vue";var xe=ye.exports;b()(ye,{VContainer:U["a"],VFlex:q["a"],VLayout:z["a"]});var _e=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"grey darken-3",attrs:{"fill-height":"",column:""}},[r("v-flex",{attrs:{xs12:"","pa-0":""}},[r("v-alert",{attrs:{value:!0,type:"error"}},[t._v(t._s(t.message))])],1),r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:a("04ec"),contain:"",height:"100"}})],1)],1)},Ce=[],Ve={name:"error-alert",props:{message:String},data:()=>({})},ke=Ve,we=a("0798"),Oe=Object(p["a"])(ke,_e,Ce,!1,null,null,null);Oe.options.__file="ErrorAlert.vue";var Ae=Oe.exports;b()(Oe,{VAlert:we["a"],VFlex:q["a"],VImg:H["a"],VLayout:z["a"]});var je={name:"board",components:{ListList:xe,ErrorAlert:Ae},data:()=>({dragOrigin:"",dragTarget:"",draggingCard:null,valid:!1,validList:!1,createMode:!1,cardMode:!1,board:{},list:{},notEmptyRules:K}),mounted(){this.loadBoard(),this.resetBlindActivities()},watch:{board(){this.debouncedLoadActivities()}},computed:Object(c["a"])({},Object(d["e"])("boards",{loadingBoard:"isGetPending",boardsError:"errorOnGet"}),Object(d["e"])("lists",{listsError:"errorOnFind"}),Object(d["e"])("activities",{creatingActivities:"isCreatePending"})),methods:Object(c["a"])({},Object(d["b"])(["setActiveListCreateCard","addBlindActivities","resetBlindActivities"]),Object(d["b"])("boards",{getBoard:"get"}),Object(d["b"])("activities",{findActivities:"find"}),{loadBoard(){this.getBoard(this.$route.params.id).then(t=>{this.board=t.data||t})},loadActivities(){this.findActivities({query:{boardId:this.$route.params.id,$sort:{updatedAt:-1}}})},debouncedLoadActivities:_.debounce(function(){this.loadActivities()},100),async myPatch(){this.board._id&&(await this.board.patch(),this.debouncedLoadActivities())}})},Le=je,$e=Object(p["a"])(Le,Jt,Gt,!1,null,null,null);$e.options.__file="Board.vue";var Ee=$e.exports;b()($e,{VContainer:U["a"],VFlex:q["a"],VForm:ut["a"],VLayout:z["a"],VProgressLinear:Ut["a"],VTextField:vt["a"]});var Te=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"grey darken-3",staticStyle:{color:"#FFFFFF"},attrs:{"fill-height":"",column:"","text-xs-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[r("h1",{staticClass:"display-4"},[t._v("404")]),r("h1",{staticClass:"display-2"},[t._v("Your adventure ends here.")])])],1),r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:a("04ec"),contain:"",height:"100"}})],1)],1)},Se=[],Ie={name:"not-found",props:{message:String},data:()=>({})},Be=Ie,Fe=Object(p["a"])(Be,Te,Se,!1,null,null,null);Fe.options.__file="NotFound.vue";var De=Fe.exports;b()(Fe,{VFlex:q["a"],VImg:H["a"],VLayout:z["a"]});var Pe=a("41ef"),Me=a.n(Pe),Re=a("b462"),Ue=a.n(Re),qe=a("4059"),He=a.n(qe),ze=a("8af1"),Ne=a.n(ze),We=a("8055"),Ye=a.n(We);const Je=Ye()("https://vue.bewave.io:3030/",{transports:["websocket"]}),Ge=Ue()().configure(He()(Je)).configure(Ne()({storage:window.localStorage}));var Ze=Ge;const Ke={async login(t,e){let a=t.dispatch,r=e.user;await a("auth/authenticate",Object(c["a"])({strategy:"local"},r),{root:!0}),sa.push("/boards")},logout(){}};var Qe={namespaced:!0,actions:Ke};const Xe=Me()(Ze,{idField:"_id"}),ta=Xe.service,ea=Xe.auth,aa=Xe.FeathersVuex;r["default"].use(d["a"]),r["default"].use(aa);var ra=new d["a"].Store({modules:{security:Qe},plugins:[ta("users",{instanceDefaults:{username:"",password:"",displayname:""}}),ta("boards",{instanceDefaults:{name:"",background:""}}),ta("lists",{instanceDefaults:{name:"",order:0,boardId:"",archived:!1,color:"#E0E0E0FF"}}),ta("cards",{instanceDefaults:{content:"",order:0,listId:"",done:!1}}),ta("activities",{instanceDefaults:{text:"",boardId:""},debug:!0}),ea({userService:"users"})],state:{activeListCreateCard:"",blindActivities:0,drawer:!1},mutations:{SET_ACTIVE_LIST_CREATE_CARD(t,e){const a=t;a.activeListCreateCard=e},SET_DRAWER(t,e){const a=t;a.drawer=e},ADD_BLIND_ACTIVITIES(t,e){const a=t;a.blindActivities+=e},RESET_BLIND_ACTIVITIES(t){const e=t;e.blindActivities=0}},actions:{setActiveListCreateCard(t,e){t.commit("SET_ACTIVE_LIST_CREATE_CARD",e)},setDrawer(t,e){e&&t.commit("RESET_BLIND_ACTIVITIES"),t.commit("SET_DRAWER",e)},addBlindActivities(t,e){t.state.drawer||t.commit("ADD_BLIND_ACTIVITIES",e)},resetBlindActivities(t){t.commit("RESET_BLIND_ACTIVITIES")}}});r["default"].use(P["a"]);const ia=new P["a"]({mode:"history",base:"/",routes:[{path:"*",name:"404",component:De},{path:"/",name:"home",component:J},{path:"/signup",name:"signup",component:ft},{path:"/login",name:"login",component:xt},{path:"/boards",name:"boards",component:Yt},{path:"/boards/:id",name:"board",component:Ee}]});ia.beforeEach((t,e,a)=>{ra.dispatch("auth/authenticate").then(()=>{["/","/signup","/login"].includes(t.path)?a("/boards"):a()}).catch(()=>{["/","/signup","/login"].includes(t.path)?a():a("/login")})});var sa=ia;r["default"].config.productionTip=!1,new r["default"]({router:sa,store:ra,render:t=>t(D)}).$mount("#app"),r["default"].component("v-gravatar",s.a),r["default"].use(a("2ead"))},"99e0":function(t,e,a){t.exports=a.p+"img/mongodb.2985235d.svg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},a7e6:function(t,e,a){},ae5f:function(t,e,a){t.exports=a.p+"img/blue-labs-plain.9892403f.svg"}});
//# sourceMappingURL=app.7c46331a.js.map