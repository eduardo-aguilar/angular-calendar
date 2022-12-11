(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[6716],{10833:(Y,C,s)=>{"use strict";function e(i){return{addDays:function f(n,t){return i(n).add(t,"days").toDate()},addHours:function l(n,t){return i(n).add(t,"hours").toDate()},addMinutes:function p(n,t){return i(n).add(t,"minutes").toDate()},addSeconds:function _(n,t){return i(n).add(t,"seconds").toDate()},differenceInDays:function h(n,t){return i(n).diff(i(t),"days")},differenceInMinutes:function U(n,t){return i(n).diff(i(t),"minutes")},differenceInSeconds:function d(n,t){return i(n).diff(i(t),"seconds")},endOfDay:function M(n){return i(n).endOf("day").toDate()},endOfMonth:function O(n){return i(n).endOf("month").toDate()},endOfWeek:function J(n){return i(n).endOf("week").toDate()},getDay:function u(n){return i(n).day()},getMonth:function V(n){return i(n).month()},isSameDay:function E(n,t){return i(n).isSame(i(t),"day")},isSameMonth:function B(n,t){return i(n).isSame(i(t),"month")},isSameSecond:function H(n,t){return i(n).isSame(i(t),"second")},max:function A(n){return i.max(n.map(function(t){return i(t)})).toDate()},setHours:function N(n,t){return i(n).set("hours",t).toDate()},setMinutes:function L(n,t){return i(n).set("minutes",t).toDate()},startOfDay:function w(n){return i(n).startOf("day").toDate()},startOfMinute:function D(n){return i(n).startOf("minute").toDate()},startOfMonth:function W(n){return i(n).startOf("month").toDate()},startOfWeek:function Z(n){return i(n).startOf("week").toDate()},getHours:function o(n){return i(n).get("hours")},getMinutes:function r(n){return i(n).get("minutes")},getTimezoneOffset:function a(n){return-1*i(n).utcOffset()}}}function S(i){return{...e(i),addWeeks:(f,l)=>i(f).add(l,"weeks").toDate(),addMonths:(f,l)=>i(f).add(l,"months").toDate(),subDays:(f,l)=>i(f).subtract(l,"days").toDate(),subWeeks:(f,l)=>i(f).subtract(l,"weeks").toDate(),subMonths:(f,l)=>i(f).subtract(l,"months").toDate(),getISOWeek:f=>i(f).isoWeek(),setDate:(f,l)=>i(f).date(l).toDate(),setMonth:(f,l)=>i(f).month(l).toDate(),setYear:(f,l)=>i(f).year(l).toDate(),getDate:f=>i(f).date(),getYear:f=>i(f).year()}}s.d(C,{x:()=>S})},65946:(Y,C,s)=>{"use strict";s.d(C,{G:()=>l,n:()=>f});var e=s(72612),S=s(18696),i=s(72887);const f=new e.OlP("Moment");class l{constructor(_,h){this.moment=_,this.dateAdapter=h}monthViewColumnHeader({date:_,locale:h}){return this.moment(_).locale(h).format("dddd")}monthViewDayNumber({date:_,locale:h}){return this.moment(_).locale(h).format("D")}monthViewTitle({date:_,locale:h}){return this.moment(_).locale(h).format("MMMM YYYY")}weekViewColumnHeader({date:_,locale:h}){return this.moment(_).locale(h).format("dddd")}weekViewColumnSubHeader({date:_,locale:h}){return this.moment(_).locale(h).format("MMM D")}weekViewTitle({date:_,locale:h,weekStartsOn:U,excludeDays:d,daysInWeek:M}){const{viewStart:O,viewEnd:J}=(0,S.rK)(this.dateAdapter,_,U,d,M),u=(V,E)=>this.moment(V).locale(h).format("MMM D"+(E?", YYYY":""));return`${u(O,O.getUTCFullYear()!==J.getUTCFullYear())} - ${u(J,!0)}`}weekViewHour({date:_,locale:h}){return this.moment(_).locale(h).format("ha")}dayViewHour({date:_,locale:h}){return this.moment(_).locale(h).format("ha")}dayViewTitle({date:_,locale:h}){return this.moment(_).locale(h).format("dddd, LL")}}l.\u0275fac=function(_){return new(_||l)(e.LFG(f),e.LFG(i._))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac})},36716:(Y,C,s)=>{"use strict";s.r(C),s.d(C,{DemoModule:()=>Z,dayjsAdapterFactory:()=>W});var e=s(64061),S=s(43850),i=s(65946),f=s(60341),l=s(72887),p=s(84910),_=s(93852),h=s.n(_),U=s(14219),d=s(11058),M=s(1885),O=s(20696),J=s.n(O),u=s(72612),V=s(97286),E=s(65148),B=s(4238),H=s(73772);function A(o,r){if(1&o&&(u.TgZ(0,"mwl-calendar-month-view",4),u._uU(1,"\n  "),u.qZA()),2&o){const a=u.oxw();u.Q6J("viewDate",a.viewDate)("events",a.events)}}function N(o,r){if(1&o&&(u.TgZ(0,"mwl-calendar-week-view",4),u._uU(1,"\n  "),u.qZA()),2&o){const a=u.oxw();u.Q6J("viewDate",a.viewDate)("events",a.events)}}function L(o,r){if(1&o&&(u.TgZ(0,"mwl-calendar-day-view",4),u._uU(1,"\n  "),u.qZA()),2&o){const a=u.oxw();u.Q6J("viewDate",a.viewDate)("events",a.events)}}h().locale({...J(),weekStart:d.sb.MONDAY});class w{constructor(){this.view=M.w.Month,this.viewDate=new Date,this.events=[]}}w.\u0275fac=function(r){return new(r||w)},w.\u0275cmp=u.Xpm({type:w,selectors:[["mwl-demo-component"]],decls:15,vars:6,consts:[[1,"alert","alert-info"],[3,"view","viewDate","viewChange","viewDateChange"],[3,"ngSwitch"],[3,"viewDate","events",4,"ngSwitchCase"],[3,"viewDate","events"]],template:function(r,a){1&r&&(u.TgZ(0,"div",0),u._uU(1,"\n  Use this if you're already using dayjs heavily in your app and don't want to\n  include date-fns in your bundle, or you need to be able to adjust dates to be\n  in a different timezone than the users browser via dayjs-locale\n"),u.qZA(),u._uU(2,"\n\n"),u.TgZ(3,"mwl-demo-utils-calendar-header",1),u.NdJ("viewChange",function(t){return a.view=t})("viewDateChange",function(t){return a.viewDate=t}),u._uU(4,"\n"),u.qZA(),u._uU(5,"\n\n"),u.TgZ(6,"div",2),u._uU(7,"\n  "),u.YNc(8,A,2,2,"mwl-calendar-month-view",3),u._uU(9,"\n  "),u.YNc(10,N,2,2,"mwl-calendar-week-view",3),u._uU(11,"\n  "),u.YNc(12,L,2,2,"mwl-calendar-day-view",3),u._uU(13,"\n"),u.qZA(),u._uU(14,"\n")),2&r&&(u.xp6(3),u.Q6J("view",a.view)("viewDate",a.viewDate),u.xp6(3),u.Q6J("ngSwitch",a.view),u.xp6(2),u.Q6J("ngSwitchCase","month"),u.xp6(2),u.Q6J("ngSwitchCase","week"),u.xp6(2),u.Q6J("ngSwitchCase","day"))},dependencies:[e.RF,e.n9,V.G,E.T,B.S,H.$],encapsulation:2,changeDetection:0});var D=s(10833);function W(){return(0,D.x)(h())}class Z{}Z.\u0275fac=function(r){return new(r||Z)},Z.\u0275mod=u.oAB({type:Z}),Z.\u0275inj=u.cJS({providers:[{provide:i.n,useValue:h()}],imports:[e.ez,f._8.forRoot({provide:l._,useFactory:W},{dateFormatter:{provide:p.m,useClass:i.G}}),U.S,S.Bz.forChild([{path:"",component:w}])]})},73772:(Y,C,s)=>{"use strict";s.d(C,{$:()=>_});var e=s(72612),S=s(1885),i=s(60845),f=s(45831),l=s(97172),p=s(9665);class _{constructor(){this.locale="en",this.viewChange=new e.vpe,this.viewDateChange=new e.vpe,this.CalendarView=S.w}}_.\u0275fac=function(U){return new(U||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(U,d){1&U&&(e._uU(0,"\n    "),e.TgZ(1,"div",0),e._uU(2,"\n      "),e.TgZ(3,"div",1),e._uU(4,"\n        "),e.TgZ(5,"div",2),e._uU(6,"\n          "),e.TgZ(7,"div",3),e.NdJ("viewDateChange",function(O){return d.viewDate=O})("viewDateChange",function(){return d.viewDateChange.next(d.viewDate)}),e._uU(8,"\n            Previous\n          "),e.qZA(),e._uU(9,"\n          "),e.TgZ(10,"div",4),e.NdJ("viewDateChange",function(O){return d.viewDate=O})("viewDateChange",function(){return d.viewDateChange.next(d.viewDate)}),e._uU(11,"\n            Today\n          "),e.qZA(),e._uU(12,"\n          "),e.TgZ(13,"div",5),e.NdJ("viewDateChange",function(O){return d.viewDate=O})("viewDateChange",function(){return d.viewDateChange.next(d.viewDate)}),e._uU(14,"\n            Next\n          "),e.qZA(),e._uU(15,"\n        "),e.qZA(),e._uU(16,"\n      "),e.qZA(),e._uU(17,"\n      "),e.TgZ(18,"div",1),e._uU(19,"\n        "),e.TgZ(20,"h3"),e._uU(21),e.ALo(22,"calendarDate"),e.qZA(),e._uU(23,"\n      "),e.qZA(),e._uU(24,"\n      "),e.TgZ(25,"div",1),e._uU(26,"\n        "),e.TgZ(27,"div",2),e._uU(28,"\n          "),e.TgZ(29,"div",6),e.NdJ("click",function(){return d.viewChange.emit(d.CalendarView.Month)}),e._uU(30,"\n            Month\n          "),e.qZA(),e._uU(31,"\n          "),e.TgZ(32,"div",6),e.NdJ("click",function(){return d.viewChange.emit(d.CalendarView.Week)}),e._uU(33,"\n            Week\n          "),e.qZA(),e._uU(34,"\n          "),e.TgZ(35,"div",6),e.NdJ("click",function(){return d.viewChange.emit(d.CalendarView.Day)}),e._uU(36,"\n            Day\n          "),e.qZA(),e._uU(37,"\n        "),e.qZA(),e._uU(38,"\n      "),e.qZA(),e._uU(39,"\n    "),e.qZA(),e._uU(40,"\n    "),e._UZ(41,"br"),e._uU(42,"\n  ")),2&U&&(e.xp6(7),e.Q6J("view",d.view)("viewDate",d.viewDate),e.xp6(3),e.Q6J("viewDate",d.viewDate),e.xp6(3),e.Q6J("view",d.view)("viewDate",d.viewDate),e.xp6(8),e.Oqu(e.Dn7(22,12,d.viewDate,d.view+"ViewTitle",d.locale)),e.xp6(8),e.ekj("active",d.view===d.CalendarView.Month),e.xp6(3),e.ekj("active",d.view===d.CalendarView.Week),e.xp6(3),e.ekj("active",d.view===d.CalendarView.Day))},dependencies:[i.O,f.T,l.i,p.J],encapsulation:2})},14219:(Y,C,s)=>{"use strict";s.d(C,{S:()=>l});var e=s(64061),S=s(48052),i=s(60341),f=s(72612);class l{}l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=f.oAB({type:l}),l.\u0275inj=f.cJS({imports:[e.ez,S.u5,i._8]})},93852:function(Y){Y.exports=function(){"use strict";var C=1e3,s=6e4,e=36e5,S="millisecond",i="second",f="minute",l="hour",p="day",_="week",h="month",U="quarter",d="year",M="date",O="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var r=["th","st","nd","rd"],a=o%100;return"["+o+(r[(a-20)%10]||r[a]||r[0])+"]"}},E=function(o,r,a){var n=String(o);return!n||n.length>=r?o:""+Array(r+1-n.length).join(a)+o},B={s:E,z:function(o){var r=-o.utcOffset(),a=Math.abs(r),n=Math.floor(a/60),t=a%60;return(r<=0?"+":"-")+E(n,2,"0")+":"+E(t,2,"0")},m:function o(r,a){if(r.date()<a.date())return-o(a,r);var n=12*(a.year()-r.year())+(a.month()-r.month()),t=r.clone().add(n,h),v=a-t<0,c=r.clone().add(n+(v?-1:1),h);return+(-(n+(a-t)/(v?t-c:c-t))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:h,y:d,w:_,d:p,D:M,h:l,m:f,s:i,ms:S,Q:U}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return void 0===o}},H="en",A={};A[H]=V;var N=function(o){return o instanceof W},L=function o(r,a,n){var t;if(!r)return H;if("string"==typeof r){var v=r.toLowerCase();A[v]&&(t=v),a&&(A[v]=a,t=v);var c=r.split("-");if(!t&&c.length>1)return o(c[0])}else{var m=r.name;A[m]=r,t=m}return!n&&t&&(H=t),t||!n&&H},w=function(o,r){if(N(o))return o.clone();var a="object"==typeof r?r:{};return a.date=o,a.args=arguments,new W(a)},D=B;D.l=L,D.i=N,D.w=function(o,r){return w(o,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var W=function(){function o(a){this.$L=L(a.locale,null,!0),this.parse(a)}var r=o.prototype;return r.parse=function(a){this.$d=function(n){var t=n.date,v=n.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var c=t.match(J);if(c){var m=c[2]-1||0,y=(c[7]||"0").substring(0,3);return v?new Date(Date.UTC(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,y)):new Date(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,y)}}return new Date(t)}(a),this.$x=a.x||{},this.init()},r.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},r.$utils=function(){return D},r.isValid=function(){return this.$d.toString()!==O},r.isSame=function(a,n){var t=w(a);return this.startOf(n)<=t&&t<=this.endOf(n)},r.isAfter=function(a,n){return w(a)<this.startOf(n)},r.isBefore=function(a,n){return this.endOf(n)<w(a)},r.$g=function(a,n,t){return D.u(a)?this[n]:this.set(t,a)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(a,n){var t=this,v=!!D.u(n)||n,c=D.p(a),m=function(k,T){var F=D.w(t.$u?Date.UTC(t.$y,T,k):new Date(t.$y,T,k),t);return v?F:F.endOf(p)},y=function(k,T){return D.w(t.toDate()[k].apply(t.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(T)),t)},g=this.$W,$=this.$M,I=this.$D,P="set"+(this.$u?"UTC":"");switch(c){case d:return v?m(1,0):m(31,11);case h:return v?m(1,$):m(0,$+1);case _:var j=this.$locale().weekStart||0,R=(g<j?g+7:g)-j;return m(v?I-R:I+(6-R),$);case p:case M:return y(P+"Hours",0);case l:return y(P+"Minutes",1);case f:return y(P+"Seconds",2);case i:return y(P+"Milliseconds",3);default:return this.clone()}},r.endOf=function(a){return this.startOf(a,!1)},r.$set=function(a,n){var t,v=D.p(a),c="set"+(this.$u?"UTC":""),m=(t={},t[p]=c+"Date",t[M]=c+"Date",t[h]=c+"Month",t[d]=c+"FullYear",t[l]=c+"Hours",t[f]=c+"Minutes",t[i]=c+"Seconds",t[S]=c+"Milliseconds",t)[v],y=v===p?this.$D+(n-this.$W):n;if(v===h||v===d){var g=this.clone().set(M,1);g.$d[m](y),g.init(),this.$d=g.set(M,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](y);return this.init(),this},r.set=function(a,n){return this.clone().$set(a,n)},r.get=function(a){return this[D.p(a)]()},r.add=function(a,n){var t,v=this;a=Number(a);var c=D.p(n),m=function($){var I=w(v);return D.w(I.date(I.date()+Math.round($*a)),v)};if(c===h)return this.set(h,this.$M+a);if(c===d)return this.set(d,this.$y+a);if(c===p)return m(1);if(c===_)return m(7);var y=(t={},t[f]=s,t[l]=e,t[i]=C,t)[c]||1,g=this.$d.getTime()+a*y;return D.w(g,this)},r.subtract=function(a,n){return this.add(-1*a,n)},r.format=function(a){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||O;var v=a||"YYYY-MM-DDTHH:mm:ssZ",c=D.z(this),m=this.$H,y=this.$m,g=this.$M,$=t.weekdays,I=t.months,P=function(T,F,b,K){return T&&(T[F]||T(n,v))||b[F].slice(0,K)},j=function(T){return D.s(m%12||12,T,"0")},R=t.meridiem||function(T,F,b){var K=T<12?"AM":"PM";return b?K.toLowerCase():K},k={YY:String(this.$y).slice(-2),YYYY:this.$y,M:g+1,MM:D.s(g+1,2,"0"),MMM:P(t.monthsShort,g,I,3),MMMM:P(I,g),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:P(t.weekdaysMin,this.$W,$,2),ddd:P(t.weekdaysShort,this.$W,$,3),dddd:$[this.$W],H:String(m),HH:D.s(m,2,"0"),h:j(1),hh:j(2),a:R(m,y,!0),A:R(m,y,!1),m:String(y),mm:D.s(y,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:c};return v.replace(u,function(T,F){return F||k[T]||c.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(a,n,t){var v,c=D.p(n),m=w(a),y=(m.utcOffset()-this.utcOffset())*s,g=this-m,$=D.m(this,m);return $=(v={},v[d]=$/12,v[h]=$,v[U]=$/3,v[_]=(g-y)/6048e5,v[p]=(g-y)/864e5,v[l]=g/e,v[f]=g/s,v[i]=g/C,v)[c]||g,t?$:D.a($)},r.daysInMonth=function(){return this.endOf(h).$D},r.$locale=function(){return A[this.$L]},r.locale=function(a,n){if(!a)return this.$L;var t=this.clone(),v=L(a,n,!0);return v&&(t.$L=v),t},r.clone=function(){return D.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},o}(),Z=W.prototype;return w.prototype=Z,[["$ms",S],["$s",i],["$m",f],["$H",l],["$W",p],["$M",h],["$y",d],["$D",M]].forEach(function(o){Z[o[1]]=function(r){return this.$g(r,o[0],o[1])}}),w.extend=function(o,r){return o.$i||(o(r,W,w),o.$i=!0),w},w.locale=L,w.isDayjs=N,w.unix=function(o){return w(1e3*o)},w.en=A[H],w.Ls=A,w.p={},w}()},20696:function(Y){Y.exports=function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var s=["th","st","nd","rd"],e=C%100;return"["+C+(s[(e-20)%10]||s[e]||s[0])+"]"}}}()}}]);