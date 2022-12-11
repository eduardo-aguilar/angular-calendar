"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[8941],{73772:(H,c,t)=>{t.d(c,{$:()=>u});var e=t(72612),f=t(1885),p=t(60845),D=t(45831),m=t(97172),T=t(9665);class u{constructor(){this.locale="en",this.viewChange=new e.vpe,this.viewDateChange=new e.vpe,this.CalendarView=f.w}}u.\u0275fac=function(g){return new(g||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(g,i){1&g&&(e._uU(0,"\n    "),e.TgZ(1,"div",0),e._uU(2,"\n      "),e.TgZ(3,"div",1),e._uU(4,"\n        "),e.TgZ(5,"div",2),e._uU(6,"\n          "),e.TgZ(7,"div",3),e.NdJ("viewDateChange",function(_){return i.viewDate=_})("viewDateChange",function(){return i.viewDateChange.next(i.viewDate)}),e._uU(8,"\n            Previous\n          "),e.qZA(),e._uU(9,"\n          "),e.TgZ(10,"div",4),e.NdJ("viewDateChange",function(_){return i.viewDate=_})("viewDateChange",function(){return i.viewDateChange.next(i.viewDate)}),e._uU(11,"\n            Today\n          "),e.qZA(),e._uU(12,"\n          "),e.TgZ(13,"div",5),e.NdJ("viewDateChange",function(_){return i.viewDate=_})("viewDateChange",function(){return i.viewDateChange.next(i.viewDate)}),e._uU(14,"\n            Next\n          "),e.qZA(),e._uU(15,"\n        "),e.qZA(),e._uU(16,"\n      "),e.qZA(),e._uU(17,"\n      "),e.TgZ(18,"div",1),e._uU(19,"\n        "),e.TgZ(20,"h3"),e._uU(21),e.ALo(22,"calendarDate"),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n      "),e.TgZ(25,"div",1),e._uU(26,"\n        "),e.TgZ(27,"div",2),e._uU(28,"\n          "),e.TgZ(29,"div",6),e.NdJ("click",function(){return i.viewChange.emit(i.CalendarView.Month)}),e._uU(30,"\n            Month\n          "),e.qZA(),e._uU(31,"\n          "),e.TgZ(32,"div",6),e.NdJ("click",function(){return i.viewChange.emit(i.CalendarView.Week)}),e._uU(33,"\n            Week\n          "),e.qZA(),e._uU(34,"\n          "),e.TgZ(35,"div",6),e.NdJ("click",function(){return i.viewChange.emit(i.CalendarView.Day)}),e._uU(36,"\n            Day\n          "),e.qZA(),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n      "),e.qZA(),e._uU(39,"\n    "),e.qZA(),e._uU(40,"\n    "),e._UZ(41,"br"),e._uU(42,"\n  ")),2&g&&(e.xp6(7),e.Q6J("view",i.view)("viewDate",i.viewDate),e.xp6(3),e.Q6J("viewDate",i.viewDate),e.xp6(3),e.Q6J("view",i.view)("viewDate",i.viewDate),e.xp6(8),e.Oqu(e.Dn7(22,12,i.viewDate,i.view+"ViewTitle",i.locale)),e.xp6(8),e.ekj("active",i.view===i.CalendarView.Month),e.xp6(3),e.ekj("active",i.view===i.CalendarView.Week),e.xp6(3),e.ekj("active",i.view===i.CalendarView.Day))},dependencies:[p.O,D.T,m.i,T.J],encapsulation:2})},14219:(H,c,t)=>{t.d(c,{S:()=>m});var e=t(64061),f=t(48052),p=t(60341),D=t(72612);class m{}m.\u0275fac=function(u){return new(u||m)},m.\u0275mod=D.oAB({type:m}),m.\u0275inj=D.cJS({imports:[e.ez,f.u5,p._8]})},28941:(H,c,t)=>{t.r(c),t.d(c,{DemoModule:()=>h});var e=t(64061),f=t(43850),p=t(60341),D=t(72887),m=t(14219),T=t(47679),u=t(1885),C=t(26898),g=t(9025),i=t(57450),v=t(62927),_=t(16705),R=t(49513),A=t(95830),I=t(27943),L=t(82630);function U(r,l,a){var d,o,s,y,E,w,M,J;(0,I.Z)(2,arguments);var W=(0,L.j)(),S=(0,A.Z)(null!==(d=null!==(o=null!==(s=null!==(y=a?.weekStartsOn)&&void 0!==y?y:null==a||null===(E=a.locale)||void 0===E||null===(w=E.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==s?s:W.weekStartsOn)&&void 0!==o?o:null===(M=W.locale)||void 0===M||null===(J=M.options)||void 0===J?void 0:J.weekStartsOn)&&void 0!==d?d:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var B=(0,R.Z)(r),O=(0,A.Z)(l),K=B.getDay(),k=O%7,b=(k+7)%7,P=7-S,q=O<0||O>6?O-(K+P)%7:(b+P)%7-(K+P)%7;return(0,v.Z)(B,q)}var Q=t(732);function N(r,l){(0,I.Z)(2,arguments);var a=(0,A.Z)(l);return(0,Q.Z)(r,-a)}var V=t(70656),n=t(72612),F=t(97286),$=t(65148),j=t(4238),z=t(73772);function x(r,l){if(1&r){const a=n.EpF();n.TgZ(0,"mwl-calendar-month-view",4),n.NdJ("eventTimesChanged",function(o){n.CHM(a);const s=n.oxw();return n.KtG(s.eventTimesChanged(o))}),n._uU(1,"\n  "),n.qZA()}if(2&r){const a=n.oxw();n.Q6J("viewDate",a.viewDate)("events",a.events)("activeDayIsOpen",!0)("refresh",a.refresh)}}function G(r,l){if(1&r){const a=n.EpF();n.TgZ(0,"mwl-calendar-week-view",5),n.NdJ("eventTimesChanged",function(o){n.CHM(a);const s=n.oxw();return n.KtG(s.eventTimesChanged(o))}),n._uU(1,"\n  "),n.qZA()}if(2&r){const a=n.oxw();n.Q6J("viewDate",a.viewDate)("events",a.events)("refresh",a.refresh)("validateEventTimesChanged",a.validateEventTimesChanged)}}function Y(r,l){if(1&r){const a=n.EpF();n.TgZ(0,"mwl-calendar-day-view",5),n.NdJ("eventTimesChanged",function(o){n.CHM(a);const s=n.oxw();return n.KtG(s.eventTimesChanged(o))}),n._uU(1,"\n  "),n.qZA()}if(2&r){const a=n.oxw();n.Q6J("viewDate",a.viewDate)("events",a.events)("refresh",a.refresh)("validateEventTimesChanged",a.validateEventTimesChanged)}}class Z{constructor(){this.view=u.w.Week,this.viewDate=new Date,this.events=[{start:(0,g.Z)((0,i.Z)(new Date),1),end:(0,v.Z)(new Date,1),title:"A 3 day event",color:C.O.blue,allDay:!0,resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{start:(0,_.Z)((0,i.Z)(U(new Date,3)),2),end:N((0,_.Z)((0,i.Z)(U(new Date,3)),3),1),title:"An short event",color:C.O.yellow,resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{start:(0,_.Z)((0,i.Z)(U(new Date,3)),5),end:N((0,_.Z)((0,i.Z)(U(new Date,3)),10),1),title:"A draggable and resizable event",color:C.O.yellow,resizable:{beforeStart:!0,afterEnd:!0},draggable:!0}],this.refresh=new T.x,this.validateEventTimesChanged=({event:l,newStart:a,newEnd:d,allDay:o},s=!0)=>{if(l.allDay)return!0;if(delete l.cssClass,!(0,V.Z)(a,d))return!1;if(this.events.find(w=>w!==l&&!w.allDay&&(w.start<a&&a<w.end||w.start<d&&a<w.end))){if(!s)return!1;l.cssClass="invalid-position"}return!0}}eventTimesChanged(l){if(delete l.event.cssClass,this.validateEventTimesChanged(l,!1)){const{event:a,newStart:d,newEnd:o}=l;a.start=d,a.end=o,this.refresh.next()}}}Z.\u0275fac=function(l){return new(l||Z)},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["mwl-demo-component"]],decls:12,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[3,"ngSwitch"],[3,"viewDate","events","activeDayIsOpen","refresh","eventTimesChanged",4,"ngSwitchCase"],[3,"viewDate","events","refresh","validateEventTimesChanged","eventTimesChanged",4,"ngSwitchCase"],[3,"viewDate","events","activeDayIsOpen","refresh","eventTimesChanged"],[3,"viewDate","events","refresh","validateEventTimesChanged","eventTimesChanged"]],template:function(l,a){1&l&&(n.TgZ(0,"mwl-demo-utils-calendar-header",0),n.NdJ("viewChange",function(o){return a.view=o})("viewDateChange",function(o){return a.viewDate=o}),n._uU(1,"\n"),n.qZA(),n._uU(2,"\n\n"),n.TgZ(3,"div",1),n._uU(4,"\n  "),n.YNc(5,x,2,4,"mwl-calendar-month-view",2),n._uU(6,"\n  "),n.YNc(7,G,2,4,"mwl-calendar-week-view",3),n._uU(8,"\n  "),n.YNc(9,Y,2,4,"mwl-calendar-day-view",3),n._uU(10,"\n"),n.qZA(),n._uU(11,"\n")),2&l&&(n.Q6J("view",a.view)("viewDate",a.viewDate),n.xp6(3),n.Q6J("ngSwitch",a.view),n.xp6(2),n.Q6J("ngSwitchCase","month"),n.xp6(2),n.Q6J("ngSwitchCase","week"),n.xp6(2),n.Q6J("ngSwitchCase","day"))},dependencies:[e.RF,e.n9,F.G,$.T,j.S,z.$],styles:[".invalid-position .cal-event{background-color:#ad2121!important;color:#fff}\n"],encapsulation:2,changeDetection:0});var X=t(57585);class h{}h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[e.ez,p._8.forRoot({provide:D._,useFactory:X.x}),m.S,f.Bz.forChild([{path:"",component:Z}])]})}}]);