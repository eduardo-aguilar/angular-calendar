"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[9717],{39717:(M,c,n)=>{n.r(c),n.d(c,{DemoModule:()=>i});var s=n(64061),w=n(43850),h=n(60341),u=n(72887),D=n(14219),g=n(1885),p=n(49513),v=n(27943);var d=n(95830),C=n(28126);function y(a,o){(0,v.Z)(2,arguments);var t=(0,d.Z)(o);return(0,C.Z)(a,12*t)}var e=n(72612),r=n(51385),Y=n(97286),T=n(65148),U=n(4238),J=n(73772);function S(a,o){if(1&a&&(e.TgZ(0,"mwl-calendar-month-view",3),e._uU(1,"\n  "),e.qZA()),2&a){const t=e.oxw();e.Q6J("viewDate",t.viewDate)("events",t.events)}}function x(a,o){if(1&a&&(e.TgZ(0,"mwl-calendar-week-view",3),e._uU(1,"\n  "),e.qZA()),2&a){const t=e.oxw();e.Q6J("viewDate",t.viewDate)("events",t.events)}}function A(a,o){if(1&a&&(e.TgZ(0,"mwl-calendar-day-view",3),e._uU(1,"\n  "),e.qZA()),2&a){const t=e.oxw();e.Q6J("viewDate",t.viewDate)("events",t.events)}}class m{constructor(o,t){this.http=o,this.cdr=t,this.view=g.w.Month,this.viewDate=function f(a){(0,v.Z)(1,arguments);var o=(0,p.Z)(a),t=new Date(0);return t.setFullYear(o.getFullYear(),0,1),t.setHours(0,0,0,0),t}(function Z(a,o){(0,v.Z)(2,arguments);var t=(0,d.Z)(o);return y(a,-t)}(new Date,1)),this.events=[]}ngOnInit(){this.fetchHolidays()}fetchHolidays(){this.http.get("https://holidayapi.com/v1/holidays",{params:{country:"US",year:String((new Date).getFullYear()-1),key:"8eb2582d-3a4c-4fc5-94c8-3e21487d4e23"}}).subscribe(({holidays:o})=>{this.events=o.map(t=>({start:new Date(t.date),title:t.name,allDay:!0,meta:{type:"holiday",holiday:t}})),this.cdr.markForCheck()})}}m.\u0275fac=function(o){return new(o||m)(e.Y36(r.eN),e.Y36(e.sBO))},m.\u0275cmp=e.Xpm({type:m,selectors:[["mwl-demo-component"]],decls:12,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[3,"ngSwitch"],[3,"viewDate","events",4,"ngSwitchCase"],[3,"viewDate","events"]],template:function(o,t){1&o&&(e.TgZ(0,"mwl-demo-utils-calendar-header",0),e.NdJ("viewChange",function(l){return t.view=l})("viewDateChange",function(l){return t.viewDate=l}),e._uU(1,"\n"),e.qZA(),e._uU(2,"\n\n"),e.TgZ(3,"div",1),e._uU(4,"\n  "),e.YNc(5,S,2,2,"mwl-calendar-month-view",2),e._uU(6,"\n  "),e.YNc(7,x,2,2,"mwl-calendar-week-view",2),e._uU(8,"\n  "),e.YNc(9,A,2,2,"mwl-calendar-day-view",2),e._uU(10,"\n"),e.qZA(),e._uU(11,"\n")),2&o&&(e.Q6J("view",t.view)("viewDate",t.viewDate),e.xp6(3),e.Q6J("ngSwitch",t.view),e.xp6(2),e.Q6J("ngSwitchCase","month"),e.xp6(2),e.Q6J("ngSwitchCase","week"),e.xp6(2),e.Q6J("ngSwitchCase","day"))},dependencies:[s.RF,s.n9,Y.G,T.T,U.S,J.$],encapsulation:2,changeDetection:0});var N=n(57585);class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.ez,h._8.forRoot({provide:u._,useFactory:N.x}),r.JF,D.S,w.Bz.forChild([{path:"",component:m}])]})}}]);