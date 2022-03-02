"use strict";(self.webpackChunkproject_user=self.webpackChunkproject_user||[]).push([[585],{9585:(y,g,s)=>{s.r(g),s.d(g,{LayoutAuthModule:()=>A});var m=s(2533),d=s(4655),a=s(8583),o=s(3679),t=s(7716),u=s(2785),p=s(2290);function c(n,r){1&n&&(t.TgZ(0,"small",31),t._uU(1,"This field is required."),t.qZA())}function Z(n,r){1&n&&(t.TgZ(0,"small",31),t._uU(1,"Email format is incorrect."),t.qZA())}function f(n,r){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,c,2,0,"small",30),t.YNc(2,Z,2,0,"small",30),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.signin.controls.email.errors?null:e.signin.controls.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.signin.controls.email.errors?null:e.signin.controls.email.errors.email)}}function T(n,r){1&n&&(t.TgZ(0,"div",29),t.TgZ(1,"span"),t.TgZ(2,"small",31),t._uU(3,"This field is required."),t.qZA(),t.qZA(),t.qZA())}const v=function(n,r){return{"fa-eye-slash":n,"fa-eye":r}},x=[{path:"login",component:(()=>{class n{constructor(e,i,l){this.userService=e,this.routes=i,this.toastr=l,this.fieldTextType=!1,this.signin=new o.cw({email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",[o.kI.required])})}ngOnInit(){let e=document.createElement("script");e.src="../../assets/js/main.js",e.type="text/javascript",e.async=!0,e.charset="utf-8",document.getElementsByTagName("head")[0].appendChild(e)}submitlogin(){this.signin.valid?this.userService.login(this.signin.value).subscribe(e=>{console.log(e),localStorage.setItem("auth-token",e.token),this.routes.navigate(["/dashboard"])},e=>{var i;console.log(e),this.toastr.error((null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.msg)||"Some Error Occured")}):(console.log("Invalid Form"),this.toastr.error("Please enter Valid credentials","Error"))}userlogin(){console.log(this.signin.value)}passwordview(){console.log("button clicked"),this.fieldTextType=!this.fieldTextType}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.K),t.Y36(d.F0),t.Y36(p._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-in"]],decls:39,vars:8,consts:[[1,"page-header","align-items-start","min-vh-100",2,"background-image","url('../../assets/img/office-dark.jpg')"],[1,"mask","bg-gradient-dark","opacity-6"],[1,"container","my-auto"],[1,"row"],[1,"col-lg-4","col-md-8","col-12","mx-auto"],[1,"card","z-index-0","fadeIn3","fadeInBottom"],[1,"card-header","p-0","position-relative","mt-n4","mx-3","z-index-2"],[1,"bg-gradient-primary","shadow-primary","border-radius-lg","py-3","pe-1"],[1,"row",2,"margin","auto"],[1,"col-md-4"],["src","../../assets/img/logo-black.png","alt","","srcset","","width","100px",2,"background","white","border-radius","0.5rem","margin","3px","padding","5px","box-shadow","0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(233 30 99 / 40%) !important"],[1,"col-md-8","text-white","text-center",2,"font-weight","100","font-weight","300","align-self","center"],[1,"card-body"],[1,"text-dark","font-weight-bolder","mt-2","mb-0"],[1,"text-start",3,"formGroup","ngSubmit"],[1,"input-group","input-group-outline","mt-3"],[1,"form-label"],["type","email","formControlName","email",1,"form-control"],[1,"input-group-append"],[1,"input-group-text",2,"right","10px"],[1,"fa","fa-user",2,"cursor","pointer"],["class","row mb-3",4,"ngIf"],["formControlName","password",1,"form-control",3,"type"],[1,"input-group-append",2,"z-index","99999"],[1,"fa",2,"cursor","pointer",3,"ngClass","click"],[1,"text-center"],["type","submit",1,"btn","bg-gradient-primary","w-100","my-4","mb-2"],[1,"mt-2","text-sm","text-center"],[1,"text-primary","text-gradient","font-weight-bold",2,"cursor","pointer"],[1,"row","mb-3"],["id","emailHelp","class","text-primary form-text",4,"ngIf"],["id","emailHelp",1,"text-primary","form-text"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.TgZ(9,"div",9),t._UZ(10,"img",10),t.qZA(),t.TgZ(11,"h3",11),t._uU(12,"Welcome Back!"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",12),t.TgZ(14,"h4",13),t._uU(15,"Sign in to continue"),t.qZA(),t.TgZ(16,"form",14),t.NdJ("ngSubmit",function(){return i.submitlogin()}),t.TgZ(17,"div",15),t.TgZ(18,"label",16),t._uU(19,"Email"),t.qZA(),t._UZ(20,"input",17),t.TgZ(21,"div",18),t.TgZ(22,"span",19),t._UZ(23,"i",20),t.qZA(),t.qZA(),t.qZA(),t.YNc(24,f,3,2,"div",21),t.TgZ(25,"div",15),t.TgZ(26,"label",16),t._uU(27,"Password"),t.qZA(),t._UZ(28,"input",22),t.TgZ(29,"div",23),t.TgZ(30,"span",19),t.TgZ(31,"i",24),t.NdJ("click",function(){return i.passwordview()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(32,T,4,0,"div",21),t.TgZ(33,"div",25),t.TgZ(34,"button",26),t._uU(35,"Sign in"),t.qZA(),t.qZA(),t.TgZ(36,"p",27),t.TgZ(37,"a",28),t._uU(38,"Forget Password?"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(16),t.Q6J("formGroup",i.signin),t.xp6(8),t.Q6J("ngIf",i.signin.controls.email.touched&&i.signin.controls.email.invalid),t.xp6(4),t.Q6J("type",i.fieldTextType?"text":"password"),t.xp6(3),t.Q6J("ngClass",t.WLB(5,v,!i.fieldTextType,i.fieldTextType)),t.xp6(1),t.Q6J("ngIf",i.signin.controls.password.touched&&i.signin.controls.password.invalid))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,a.O5,a.mk],styles:[""]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,o.u5,o.UX,m.JX,d.Bz.forChild(x)]]}),n})()}}]);