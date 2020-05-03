(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"8xc4":function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n"},LQxX:function(n,s,a){"use strict";a.r(s),s.default='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span> [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span> [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n'},NUZY:function(n,s,a){"use strict";a.r(s),s.default='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},XVEN:function(n,s,a){"use strict";a.r(s),a.d(s,"sources",(function(){return e}));var e=[{filename:"component.ts",contents:{raw:a("qwen"),highlighted:a("hy1s")}},{filename:"template.html",contents:{raw:a("gmAl"),highlighted:a("LQxX")}},{filename:"module.ts",contents:{raw:a("8xc4"),highlighted:a("NUZY")}}]},gmAl:function(n,s,a){"use strict";a.r(s),s.default='<mwl-calendar-day-view [viewDate]="viewDate" [events]="events">\n</mwl-calendar-day-view>\n'},hy1s:function(n,s,a){"use strict";a.r(s),s.default='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class="hljs-string">\'An all day event\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      allDay: <span class="hljs-literal">true</span>,\n    },\n    {\n      title: <span class="hljs-string">\'A non all day event\'</span>,\n      color: colors.blue,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n    },\n  ];\n}\n'},qwen:function(n,s,a){"use strict";a.r(s),s.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'An all day event',\n      color: colors.yellow,\n      start: new Date(),\n      allDay: true,\n    },\n    {\n      title: 'A non all day event',\n      color: colors.blue,\n      start: new Date(),\n    },\n  ];\n}\n"}}]);