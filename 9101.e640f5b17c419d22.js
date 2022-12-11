"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[9101],{49101:(T,m,t)=>{t.r(m),t.d(m,{DemoModule:()=>u});var e=t(64061),C=t(43850),D=t(60341),c=t(72887),l=t(14219),h=t(1885),n=t(72612),f=t(97286),s=t(65148),a=t(4238),v=t(73772);function w(_,r){if(1&_){const i=n.EpF();n.TgZ(0,"mwl-calendar-month-view",4),n.NdJ("beforeViewRender",function(o){n.CHM(i);const g=n.oxw();return n.KtG(g.beforeMonthViewRender(o))}),n._uU(1,"\n  "),n.qZA()}if(2&_){const i=n.oxw();n.Q6J("viewDate",i.viewDate)("events",i.events)}}function U(_,r){if(1&_){const i=n.EpF();n.TgZ(0,"mwl-calendar-week-view",4),n.NdJ("beforeViewRender",function(o){n.CHM(i);const g=n.oxw();return n.KtG(g.beforeWeekViewRender(o))}),n._uU(1,"\n  "),n.qZA()}if(2&_){const i=n.oxw();n.Q6J("viewDate",i.viewDate)("events",i.events)}}function E(_,r){if(1&_){const i=n.EpF();n.TgZ(0,"mwl-calendar-day-view",4),n.NdJ("beforeViewRender",function(o){n.CHM(i);const g=n.oxw();return n.KtG(g.beforeDayViewRender(o))}),n._uU(1,"\n  "),n.qZA()}if(2&_){const i=n.oxw();n.Q6J("viewDate",i.viewDate)("events",i.events)}}class p{constructor(){this.view=h.w.Month,this.viewDate=new Date,this.events=[]}beforeMonthViewRender(r){r.body.forEach(i=>{const d=i.date.getDate();d>5&&d<10&&i.inMonth&&(i.cssClass="bg-pink")})}beforeWeekViewRender(r){r.hourColumns.forEach(i=>{i.hours.forEach(d=>{d.segments.forEach(o=>{o.date.getHours()>=2&&o.date.getHours()<=5&&2===o.date.getDay()&&(o.cssClass="bg-pink")})})})}beforeDayViewRender(r){r.hourColumns.forEach(i=>{i.hours.forEach(d=>{d.segments.forEach(o=>{o.date.getHours()>=2&&o.date.getHours()<=5&&(o.cssClass="bg-pink")})})})}}p.\u0275fac=function(r){return new(r||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["mwl-demo-component"]],decls:15,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[1,"alert","alert-info"],[3,"ngSwitch"],[3,"viewDate","events","beforeViewRender",4,"ngSwitchCase"],[3,"viewDate","events","beforeViewRender"]],template:function(r,i){1&r&&(n.TgZ(0,"mwl-demo-utils-calendar-header",0),n.NdJ("viewChange",function(o){return i.view=o})("viewDateChange",function(o){return i.viewDate=o}),n._uU(1,"\n"),n.qZA(),n._uU(2,"\n\n"),n.TgZ(3,"div",1),n._uU(4,"\n  You can use each views beforeViewRender output to add a custom cssClass to\n  different cells to add styling for disabled time slots\n"),n.qZA(),n._uU(5,"\n\n"),n.TgZ(6,"div",2),n._uU(7,"\n  "),n.YNc(8,w,2,2,"mwl-calendar-month-view",3),n._uU(9,"\n  "),n.YNc(10,U,2,2,"mwl-calendar-week-view",3),n._uU(11,"\n  "),n.YNc(12,E,2,2,"mwl-calendar-day-view",3),n._uU(13,"\n"),n.qZA(),n._uU(14,"\n")),2&r&&(n.Q6J("view",i.view)("viewDate",i.viewDate),n.xp6(6),n.Q6J("ngSwitch",i.view),n.xp6(2),n.Q6J("ngSwitchCase","month"),n.xp6(2),n.Q6J("ngSwitchCase","week"),n.xp6(2),n.Q6J("ngSwitchCase","day"))},dependencies:[e.RF,e.n9,f.G,s.T,a.S,v.$],styles:[".cal-month-view .bg-pink,.cal-week-view .cal-day-columns .bg-pink,.cal-day-view .bg-pink{background-color:#ff69b4!important}\n"],encapsulation:2,changeDetection:0});var Z=t(57585);class u{}u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[e.ez,D._8.forRoot({provide:c._,useFactory:Z.x}),l.S,C.Bz.forChild([{path:"",component:p}])]})},73772:(T,m,t)=>{t.d(m,{$:()=>n});var e=t(72612),C=t(1885),D=t(60845),c=t(45831),l=t(97172),h=t(9665);class n{constructor(){this.locale="en",this.viewChange=new e.vpe,this.viewDateChange=new e.vpe,this.CalendarView=C.w}}n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(s,a){1&s&&(e._uU(0,"\n    "),e.TgZ(1,"div",0),e._uU(2,"\n      "),e.TgZ(3,"div",1),e._uU(4,"\n        "),e.TgZ(5,"div",2),e._uU(6,"\n          "),e.TgZ(7,"div",3),e.NdJ("viewDateChange",function(w){return a.viewDate=w})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),e._uU(8,"\n            Previous\n          "),e.qZA(),e._uU(9,"\n          "),e.TgZ(10,"div",4),e.NdJ("viewDateChange",function(w){return a.viewDate=w})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),e._uU(11,"\n            Today\n          "),e.qZA(),e._uU(12,"\n          "),e.TgZ(13,"div",5),e.NdJ("viewDateChange",function(w){return a.viewDate=w})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),e._uU(14,"\n            Next\n          "),e.qZA(),e._uU(15,"\n        "),e.qZA(),e._uU(16,"\n      "),e.qZA(),e._uU(17,"\n      "),e.TgZ(18,"div",1),e._uU(19,"\n        "),e.TgZ(20,"h3"),e._uU(21),e.ALo(22,"calendarDate"),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n      "),e.TgZ(25,"div",1),e._uU(26,"\n        "),e.TgZ(27,"div",2),e._uU(28,"\n          "),e.TgZ(29,"div",6),e.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Month)}),e._uU(30,"\n            Month\n          "),e.qZA(),e._uU(31,"\n          "),e.TgZ(32,"div",6),e.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Week)}),e._uU(33,"\n            Week\n          "),e.qZA(),e._uU(34,"\n          "),e.TgZ(35,"div",6),e.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Day)}),e._uU(36,"\n            Day\n          "),e.qZA(),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n      "),e.qZA(),e._uU(39,"\n    "),e.qZA(),e._uU(40,"\n    "),e._UZ(41,"br"),e._uU(42,"\n  ")),2&s&&(e.xp6(7),e.Q6J("view",a.view)("viewDate",a.viewDate),e.xp6(3),e.Q6J("viewDate",a.viewDate),e.xp6(3),e.Q6J("view",a.view)("viewDate",a.viewDate),e.xp6(8),e.Oqu(e.Dn7(22,12,a.viewDate,a.view+"ViewTitle",a.locale)),e.xp6(8),e.ekj("active",a.view===a.CalendarView.Month),e.xp6(3),e.ekj("active",a.view===a.CalendarView.Week),e.xp6(3),e.ekj("active",a.view===a.CalendarView.Day))},dependencies:[D.O,c.T,l.i,h.J],encapsulation:2})},14219:(T,m,t)=>{t.d(m,{S:()=>l});var e=t(64061),C=t(48052),D=t(60341),c=t(72612);class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=c.oAB({type:l}),l.\u0275inj=c.cJS({imports:[e.ez,C.u5,D._8]})}}]);