"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[6944],{73772:(U,s,t)=>{t.d(s,{$:()=>d});var e=t(72612),u=t(1885),C=t(60845),w=t(45831),l=t(97172),D=t(9665);class d{constructor(){this.locale="en",this.viewChange=new e.vpe,this.viewDateChange=new e.vpe,this.CalendarView=u.w}}d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(m,a){1&m&&(e._uU(0,"\n    "),e.TgZ(1,"div",0),e._uU(2,"\n      "),e.TgZ(3,"div",1),e._uU(4,"\n        "),e.TgZ(5,"div",2),e._uU(6,"\n          "),e.TgZ(7,"div",3),e.NdJ("viewDateChange",function(v){return a.viewDate=v})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),e._uU(8,"\n            Previous\n          "),e.qZA(),e._uU(9,"\n          "),e.TgZ(10,"div",4),e.NdJ("viewDateChange",function(v){return a.viewDate=v})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),e._uU(11,"\n            Today\n          "),e.qZA(),e._uU(12,"\n          "),e.TgZ(13,"div",5),e.NdJ("viewDateChange",function(v){return a.viewDate=v})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),e._uU(14,"\n            Next\n          "),e.qZA(),e._uU(15,"\n        "),e.qZA(),e._uU(16,"\n      "),e.qZA(),e._uU(17,"\n      "),e.TgZ(18,"div",1),e._uU(19,"\n        "),e.TgZ(20,"h3"),e._uU(21),e.ALo(22,"calendarDate"),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n      "),e.TgZ(25,"div",1),e._uU(26,"\n        "),e.TgZ(27,"div",2),e._uU(28,"\n          "),e.TgZ(29,"div",6),e.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Month)}),e._uU(30,"\n            Month\n          "),e.qZA(),e._uU(31,"\n          "),e.TgZ(32,"div",6),e.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Week)}),e._uU(33,"\n            Week\n          "),e.qZA(),e._uU(34,"\n          "),e.TgZ(35,"div",6),e.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Day)}),e._uU(36,"\n            Day\n          "),e.qZA(),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n      "),e.qZA(),e._uU(39,"\n    "),e.qZA(),e._uU(40,"\n    "),e._UZ(41,"br"),e._uU(42,"\n  ")),2&m&&(e.xp6(7),e.Q6J("view",a.view)("viewDate",a.viewDate),e.xp6(3),e.Q6J("viewDate",a.viewDate),e.xp6(3),e.Q6J("view",a.view)("viewDate",a.viewDate),e.xp6(8),e.Oqu(e.Dn7(22,12,a.viewDate,a.view+"ViewTitle",a.locale)),e.xp6(8),e.ekj("active",a.view===a.CalendarView.Month),e.xp6(3),e.ekj("active",a.view===a.CalendarView.Week),e.xp6(3),e.ekj("active",a.view===a.CalendarView.Day))},dependencies:[C.O,w.T,l.i,D.J],encapsulation:2})},14219:(U,s,t)=>{t.d(s,{S:()=>l});var e=t(64061),u=t(48052),C=t(60341),w=t(72612);class l{}l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=w.oAB({type:l}),l.\u0275inj=w.cJS({imports:[e.ez,u.u5,C._8]})},86944:(U,s,t)=>{t.r(s),t.d(s,{DemoModule:()=>c});var e=t(64061),u=t(43850),C=t(60341),w=t(72887),l=t(14219),D=t(1885),d=t(47679),n=t(72612),m=t(97286),a=t(65148),_=t(4238),v=t(73772);function T(o,r){if(1&o){const i=n.EpF();n.TgZ(0,"mwl-calendar-month-view",6),n.NdJ("beforeViewRender",function(g){n.CHM(i);const y=n.oxw();return n.KtG(y.beforeMonthViewRender(g))}),n._uU(1,"\n  "),n.qZA()}if(2&o){const i=n.oxw();n.Q6J("viewDate",i.viewDate)("events",i.events)("refresh",i.refresh)}}function Z(o,r){if(1&o&&(n.TgZ(0,"mwl-calendar-week-view",7),n._uU(1,"\n  "),n.qZA()),2&o){const i=n.oxw();n.Q6J("viewDate",i.viewDate)("events",i.events)("refresh",i.refresh)}}function E(o,r){if(1&o&&(n.TgZ(0,"mwl-calendar-day-view",7),n._uU(1,"\n  "),n.qZA()),2&o){const i=n.oxw();n.Q6J("viewDate",i.viewDate)("events",i.events)("refresh",i.refresh)}}const p="red-cell";class h{constructor(){this.view=D.w.Month,this.viewDate=new Date,this.events=[],this.refresh=new d.x,this.cssClass=p}refreshView(){this.cssClass=this.cssClass===p?"blue-cell":p,this.refresh.next()}beforeMonthViewRender({body:r}){r.forEach(i=>{i.date.getDate()%2==1&&(i.cssClass=this.cssClass)})}}h.\u0275fac=function(r){return new(r||h)},h.\u0275cmp=n.Xpm({type:h,selectors:[["mwl-demo-component"]],decls:18,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[1,"text-center"],[1,"btn","btn-primary",3,"click"],[3,"ngSwitch"],[3,"viewDate","events","refresh","beforeViewRender",4,"ngSwitchCase"],[3,"viewDate","events","refresh",4,"ngSwitchCase"],[3,"viewDate","events","refresh","beforeViewRender"],[3,"viewDate","events","refresh"]],template:function(r,i){1&r&&(n.TgZ(0,"mwl-demo-utils-calendar-header",0),n.NdJ("viewChange",function(g){return i.view=g})("viewDateChange",function(g){return i.viewDate=g}),n._uU(1,"\n"),n.qZA(),n._uU(2,"\n\n"),n.TgZ(3,"div",1),n._uU(4,"\n  "),n.TgZ(5,"button",2),n.NdJ("click",function(){return i.refreshView()}),n._uU(6,"\n    Refresh + re-render the current view\n  "),n.qZA(),n._uU(7,"\n"),n.qZA(),n._uU(8,"\n\n"),n.TgZ(9,"div",3),n._uU(10,"\n  "),n.YNc(11,T,2,3,"mwl-calendar-month-view",4),n._uU(12,"\n  "),n.YNc(13,Z,2,3,"mwl-calendar-week-view",5),n._uU(14,"\n  "),n.YNc(15,E,2,3,"mwl-calendar-day-view",5),n._uU(16,"\n"),n.qZA(),n._uU(17,"\n")),2&r&&(n.Q6J("view",i.view)("viewDate",i.viewDate),n.xp6(9),n.Q6J("ngSwitch",i.view),n.xp6(2),n.Q6J("ngSwitchCase","month"),n.xp6(2),n.Q6J("ngSwitchCase","week"),n.xp6(2),n.Q6J("ngSwitchCase","day"))},dependencies:[e.RF,e.n9,m.G,a.T,_.S,v.$],styles:[".red-cell{background-color:red!important}.blue-cell{background-color:#00f!important}\n"],encapsulation:2,changeDetection:0});var M=t(57585);class c{}c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[e.ez,C._8.forRoot({provide:w._,useFactory:M.x}),l.S,u.Bz.forChild([{path:"",component:h}])]})}}]);