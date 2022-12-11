"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[8556],{18556:(e,s,n)=>{n.r(s),n.d(s,{sources:()=>a});const a=[{filename:"component.ts",contents:{raw:n(31748),highlighted:n(29786)}},{filename:"template.html",contents:{raw:n(93966),highlighted:n(7515)}},{filename:"module.ts",contents:{raw:n(11088),highlighted:n(87078)}}]},29786:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const a='<span class="hljs-keyword">import</span> {\n  ChangeDetectionStrategy,\n  Component,\n  ViewEncapsulation,\n} from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarView } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { addDays, addHours, startOfDay } from <span class="hljs-string">\'date-fns\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'./template.html\'</span>,\n  encapsulation: ViewEncapsulation.None,\n  styles: [\n    `\n      .cal-week-view .cal-time-events .cal-day-column {\n        margin-right: <span class="hljs-number">10</span>px;\n      }\n\n      .cal-week-view .cal-hour {\n        width: calc(<span class="hljs-number">100</span>% + <span class="hljs-number">10</span>px);\n      }\n    `,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      start: startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()),\n      title: <span class="hljs-string">\'An event\'</span>,\n      color: colors.yellow,\n    },\n    {\n      start: addHours(startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()), <span class="hljs-number">2</span>),\n      end: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      title: <span class="hljs-string">\'Another event\'</span>,\n      color: colors.blue,\n    },\n    {\n      start: addDays(addHours(startOfDay(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()), <span class="hljs-number">2</span>), <span class="hljs-number">2</span>),\n      end: addDays(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(), <span class="hljs-number">2</span>),\n      title: <span class="hljs-string">\'And another\'</span>,\n      color: colors.red,\n    },\n  ];\n}\n'},87078:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const a='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},7515:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const a='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span> [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span> [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'},31748:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const a="import {\n  ChangeDetectionStrategy,\n  Component,\n  ViewEncapsulation,\n} from '@angular/core';\nimport { CalendarEvent, CalendarView } from 'angular-calendar';\nimport { addDays, addHours, startOfDay } from 'date-fns';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './template.html',\n  encapsulation: ViewEncapsulation.None,\n  styles: [\n    `\n      .cal-week-view .cal-time-events .cal-day-column {\n        margin-right: 10px;\n      }\n\n      .cal-week-view .cal-hour {\n        width: calc(100% + 10px);\n      }\n    `,\n  ],\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      start: startOfDay(new Date()),\n      title: 'An event',\n      color: colors.yellow,\n    },\n    {\n      start: addHours(startOfDay(new Date()), 2),\n      end: new Date(),\n      title: 'Another event',\n      color: colors.blue,\n    },\n    {\n      start: addDays(addHours(startOfDay(new Date()), 2), 2),\n      end: addDays(new Date(), 2),\n      title: 'And another',\n      color: colors.red,\n    },\n  ];\n}\n"},11088:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const a="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n"},93966:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const a='<mwl-demo-utils-calendar-header [(view)]="view" [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-day-view>\n</div>\n'}}]);