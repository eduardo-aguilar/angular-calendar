"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[3153],{73772:(U,p,a)=>{a.d(p,{$:()=>v});var n=a(72612),g=a(1885),D=a(60845),u=a(45831),m=a(97172),C=a(9665);class v{constructor(){this.locale="en",this.viewChange=new n.vpe,this.viewDateChange=new n.vpe,this.CalendarView=g.w}}v.\u0275fac=function(s){return new(s||v)},v.\u0275cmp=n.Xpm({type:v,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(s,i){1&s&&(n._uU(0,"\n    "),n.TgZ(1,"div",0),n._uU(2,"\n      "),n.TgZ(3,"div",1),n._uU(4,"\n        "),n.TgZ(5,"div",2),n._uU(6,"\n          "),n.TgZ(7,"div",3),n.NdJ("viewDateChange",function(e){return i.viewDate=e})("viewDateChange",function(){return i.viewDateChange.next(i.viewDate)}),n._uU(8,"\n            Previous\n          "),n.qZA(),n._uU(9,"\n          "),n.TgZ(10,"div",4),n.NdJ("viewDateChange",function(e){return i.viewDate=e})("viewDateChange",function(){return i.viewDateChange.next(i.viewDate)}),n._uU(11,"\n            Today\n          "),n.qZA(),n._uU(12,"\n          "),n.TgZ(13,"div",5),n.NdJ("viewDateChange",function(e){return i.viewDate=e})("viewDateChange",function(){return i.viewDateChange.next(i.viewDate)}),n._uU(14,"\n            Next\n          "),n.qZA(),n._uU(15,"\n        "),n.qZA(),n._uU(16,"\n      "),n.qZA(),n._uU(17,"\n      "),n.TgZ(18,"div",1),n._uU(19,"\n        "),n.TgZ(20,"h3"),n._uU(21),n.ALo(22,"calendarDate"),n.qZA(),n._uU(23,"\n      "),n.qZA(),n._uU(24,"\n      "),n.TgZ(25,"div",1),n._uU(26,"\n        "),n.TgZ(27,"div",2),n._uU(28,"\n          "),n.TgZ(29,"div",6),n.NdJ("click",function(){return i.viewChange.emit(i.CalendarView.Month)}),n._uU(30,"\n            Month\n          "),n.qZA(),n._uU(31,"\n          "),n.TgZ(32,"div",6),n.NdJ("click",function(){return i.viewChange.emit(i.CalendarView.Week)}),n._uU(33,"\n            Week\n          "),n.qZA(),n._uU(34,"\n          "),n.TgZ(35,"div",6),n.NdJ("click",function(){return i.viewChange.emit(i.CalendarView.Day)}),n._uU(36,"\n            Day\n          "),n.qZA(),n._uU(37,"\n        "),n.qZA(),n._uU(38,"\n      "),n.qZA(),n._uU(39,"\n    "),n.qZA(),n._uU(40,"\n    "),n._UZ(41,"br"),n._uU(42,"\n  ")),2&s&&(n.xp6(7),n.Q6J("view",i.view)("viewDate",i.viewDate),n.xp6(3),n.Q6J("viewDate",i.viewDate),n.xp6(3),n.Q6J("view",i.view)("viewDate",i.viewDate),n.xp6(8),n.Oqu(n.Dn7(22,12,i.viewDate,i.view+"ViewTitle",i.locale)),n.xp6(8),n.ekj("active",i.view===i.CalendarView.Month),n.xp6(3),n.ekj("active",i.view===i.CalendarView.Week),n.xp6(3),n.ekj("active",i.view===i.CalendarView.Day))},dependencies:[D.O,u.T,m.i,C.J],encapsulation:2})},14219:(U,p,a)=>{a.d(p,{S:()=>m});var n=a(64061),g=a(48052),D=a(60341),u=a(72612);class m{}m.\u0275fac=function(v){return new(v||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({imports:[n.ez,g.u5,D._8]})},3153:(U,p,a)=>{a.r(p),a.d(p,{DemoModule:()=>w});var n=a(64061),g=a(43850),D=a(60341),u=a(72887),m=a(14219),C=a(1885),v=a(26898),c=a(57450),s=a(34866),i=a(27943);function _(o,l){(0,i.Z)(2,arguments);var t=(0,s.Z)(o),r=(0,s.Z)(l);return t.getTime()===r.getTime()}var e=a(72612),Z=a(42666),y=a(39292),E=a(55456),A=a(43920),O=a(97286),M=a(65148),P=a(4238),f=a(50175),J=a(73772),S=a(9665),N=a(88300);function Q(o,l){if(1&o&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&o){const t=e.oxw().day;e.xp6(1),e.Oqu(t.badgeTotal)}}function x(o,l){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Gre("badge text-bg-",t[0],""),e.xp6(1),e.hij("\n      ",t[1].length,"\n    ")}}function B(o,l){if(1&o&&(e._uU(0,"\n  "),e.TgZ(1,"div",6),e._uU(2,"\n    "),e.YNc(3,Q,2,1,"span",7),e._uU(4,"\n    "),e.TgZ(5,"span",8),e._uU(6),e.ALo(7,"calendarDate"),e.qZA(),e._uU(8,"\n  "),e.qZA(),e._uU(9,"\n  "),e.TgZ(10,"div",9),e._uU(11,"\n    "),e.YNc(12,x,2,4,"span",10),e._uU(13,"\n  "),e.qZA(),e._uU(14,"\n")),2&o){const t=l.day,r=l.locale;e.xp6(3),e.Q6J("ngIf",t.badgeTotal>0),e.xp6(3),e.Oqu(e.Dn7(7,3,t.date,"monthViewDayNumber",r)),e.xp6(6),e.Q6J("ngForOf",t.eventGroups)}}function R(o,l){if(1&o&&(e.TgZ(0,"div"),e._uU(1,"\n        "),e.TgZ(2,"mwl-calendar-event-actions",18),e._uU(3,"\n        "),e.qZA(),e._uU(4,"\n         \n        "),e.TgZ(5,"mwl-calendar-event-title",15),e._uU(6,"\n        "),e.qZA(),e._uU(7,"\n      "),e.qZA()),2&o){const t=l.$implicit;e.xp6(2),e.Q6J("event",t),e.xp6(3),e.Q6J("event",t)}}function I(o,l){if(1&o&&(e._uU(0,"\n    "),e.TgZ(1,"div",16),e._uU(2,"\n      "),e.YNc(3,R,8,2,"div",17),e._uU(4,"\n    "),e.qZA(),e._uU(5,"\n  ")),2&o){const t=e.oxw().weekEvent;e.xp6(3),e.Q6J("ngForOf",t.event.meta.groupedEvents)}}function V(o,l){if(1&o&&(e.ynx(0),e._uU(1,"\n      "),e.TgZ(2,"mwl-calendar-event-actions",18),e._uU(3,"\n      "),e.qZA(),e._uU(4,"\n       \n    "),e.BQk()),2&o){const t=e.oxw().weekEvent;e.xp6(2),e.Q6J("event",t.event)}}const W=function(o,l,t){return{color:o,backgroundColor:l,borderColor:t}};function F(o,l){if(1&o){const t=e.EpF();e._uU(0,"\n  "),e.YNc(1,I,6,1,"ng-template",null,12,e.W1O),e._uU(3,"\n\n  "),e.TgZ(4,"div",13),e.NdJ("mwlClick",function(){const h=e.CHM(t).eventClicked;return e.KtG(h.emit())}),e.ALo(5,"calendarEventTitle"),e._uU(6,"\n    "),e.YNc(7,V,5,1,"ng-container",14),e._uU(8,"\n    "),e.TgZ(9,"mwl-calendar-event-title",15),e._uU(10,"\n    "),e.qZA(),e._uU(11,"\n  "),e.qZA(),e._uU(12,"\n")}if(2&o){const t=l.weekEvent,r=l.tooltipPlacement,d=l.tooltipTemplate,h=l.tooltipAppendToBody,b=l.tooltipDisabled,j=l.tooltipDelay,k=e.MAs(2);e.xp6(4),e.Q6J("ngbPopover",k)("disablePopover",!t.event.meta.groupedEvents)("ngStyle",e.kEZ(15,W,null==t.event.color?null:t.event.color.secondaryText,null==t.event.color?null:t.event.color.secondary,null==t.event.color?null:t.event.color.primary))("mwlCalendarTooltip",b||t.event.meta.groupedEvents?"":e.Dn7(5,11,t.event.title,"weekTooltip",t.event))("tooltipPlacement",r)("tooltipEvent",t.event)("tooltipTemplate",d)("tooltipAppendToBody",h)("tooltipDelay",j),e.xp6(3),e.Q6J("ngIf",!t.event.meta.groupedEvents),e.xp6(2),e.Q6J("event",t.event)}}function H(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"mwl-calendar-month-view",19),e.NdJ("beforeViewRender",function(d){e.CHM(t);const h=e.oxw();return e.KtG(h.beforeMonthViewRender(d))}),e._uU(1,"\n  "),e.qZA()}if(2&o){const t=e.oxw(),r=e.MAs(4);e.Q6J("viewDate",t.viewDate)("events",t.events)("cellTemplate",r)("activeDayIsOpen",!0)}}function L(o,l){if(1&o&&(e.TgZ(0,"mwl-calendar-week-view",20),e._uU(1,"\n  "),e.qZA()),2&o){const t=e.oxw(),r=e.MAs(7);e.Q6J("viewDate",t.viewDate)("events",t.groupedSimilarEvents)("eventTemplate",r)}}function K(o,l){if(1&o&&(e.TgZ(0,"mwl-calendar-day-view",20),e._uU(1,"\n  "),e.qZA()),2&o){const t=e.oxw(),r=e.MAs(7);e.Q6J("viewDate",t.viewDate)("events",t.groupedSimilarEvents)("eventTemplate",r)}}class T{constructor(){this.view=C.w.Month,this.viewDate=new Date,this.events=[{title:"Event 1",color:v.O.yellow,start:(0,c.Z)(new Date),meta:{type:"warning"}},{title:"Event 2",color:v.O.yellow,start:(0,c.Z)(new Date),meta:{type:"warning"}},{title:"Event 3",color:v.O.blue,start:(0,c.Z)(new Date),meta:{type:"info"}},{title:"Event 4",color:v.O.red,start:(0,c.Z)(new Date),meta:{type:"danger"}},{title:"Event 5",color:v.O.red,start:(0,c.Z)(new Date),meta:{type:"danger"}}],this.groupedSimilarEvents=[]}ngOnInit(){this.groupedSimilarEvents=[];const l=new Set;this.events.forEach(t=>{if(l.has(t))return;const r=this.events.filter(d=>d!==t&&!l.has(d)&&_(d.start,t.start)&&(_(d.end,t.end)||!d.end&&!t.end)&&d.color.primary===t.color.primary&&d.color.secondary===t.color.secondary);l.add(t),r.forEach(d=>{l.add(d)}),r.length>0?this.groupedSimilarEvents.push({title:`${r.length+1} events`,color:t.color,start:t.start,end:t.end,meta:{groupedEvents:[t,...r]}}):this.groupedSimilarEvents.push(t)})}beforeMonthViewRender({body:l}){l.forEach(t=>{const r={};t.events.forEach(d=>{r[d.meta.type]=r[d.meta.type]||[],r[d.meta.type].push(d)}),t.eventGroups=Object.entries(r)})}}T.\u0275fac=function(l){return new(l||T)},T.\u0275cmp=e.Xpm({type:T,selectors:[["mwl-demo-component"]],decls:18,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],["customCellTemplate",""],["customEventTemplate",""],[3,"ngSwitch"],[3,"viewDate","events","cellTemplate","activeDayIsOpen","beforeViewRender",4,"ngSwitchCase"],[3,"viewDate","events","eventTemplate",4,"ngSwitchCase"],[1,"cal-cell-top"],["class","cal-day-badge",4,"ngIf"],[1,"cal-day-number"],[1,"cell-totals"],[3,"class",4,"ngFor","ngForOf"],[1,"cal-day-badge"],["groupedEventsTemplate",""],[1,"cal-event",3,"ngbPopover","disablePopover","ngStyle","mwlCalendarTooltip","tooltipPlacement","tooltipEvent","tooltipTemplate","tooltipAppendToBody","tooltipDelay","mwlClick"],[4,"ngIf"],["view","week",3,"event"],[2,"min-width","150px"],[4,"ngFor","ngForOf"],[3,"event"],[3,"viewDate","events","cellTemplate","activeDayIsOpen","beforeViewRender"],[3,"viewDate","events","eventTemplate"]],template:function(l,t){1&l&&(e.TgZ(0,"mwl-demo-utils-calendar-header",0),e.NdJ("viewChange",function(d){return t.view=d})("viewDateChange",function(d){return t.viewDate=d}),e._uU(1,"\n"),e.qZA(),e._uU(2,"\n\n"),e.YNc(3,B,15,7,"ng-template",null,1,e.W1O),e._uU(5,"\n\n"),e.YNc(6,F,13,19,"ng-template",null,2,e.W1O),e._uU(8,"\n\n"),e.TgZ(9,"div",3),e._uU(10,"\n  "),e.YNc(11,H,2,4,"mwl-calendar-month-view",4),e._uU(12,"\n  "),e.YNc(13,L,2,3,"mwl-calendar-week-view",5),e._uU(14,"\n  "),e.YNc(15,K,2,3,"mwl-calendar-day-view",5),e._uU(16,"\n"),e.qZA(),e._uU(17,"\n")),2&l&&(e.Q6J("view",t.view)("viewDate",t.viewDate),e.xp6(9),e.Q6J("ngSwitch",t.view),e.xp6(2),e.Q6J("ngSwitchCase","month"),e.xp6(2),e.Q6J("ngSwitchCase","week"),e.xp6(2),e.Q6J("ngSwitchCase","day"))},dependencies:[n.sg,n.O5,n.PC,n.RF,n.n9,Z.n,y.b,E.n,A.P,O.G,M.T,P.S,f.o8,J.$,S.J,N.B],styles:[".cell-totals[_ngcontent-%COMP%]{margin:5px;text-align:center}.badge[_ngcontent-%COMP%]{margin-right:5px}"],changeDetection:0});var Y=a(57585);class w{}w.\u0275fac=function(l){return new(l||w)},w.\u0275mod=e.oAB({type:w}),w.\u0275inj=e.cJS({imports:[n.ez,D._8.forRoot({provide:u._,useFactory:Y.x}),f.dT,m.S,g.Bz.forChild([{path:"",component:T}])]})}}]);