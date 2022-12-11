"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[3739],{43739:(a,e,n)=>{n.r(e),n.d(e,{sources:()=>s});const s=[{filename:"component.ts",contents:{raw:n(49198),highlighted:n(84905)}},{filename:"template.html",contents:{raw:n(61194),highlighted:n(17473)}},{filename:"module.ts",contents:{raw:n(78041),highlighted:n(16717)}}]},84905:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s='<span class="hljs-keyword">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n} from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarEvent,\n  CalendarViewPeriod,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarWeekViewBeforeRenderEvent,\n  CalendarDayViewBeforeRenderEvent,\n  CalendarView,\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class="hljs-string">\'Event 1\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n    },\n  ];\n\n  period: CalendarViewPeriod;\n\n  <span class="hljs-constructor"><span class="hljs-keyword">constructor</span>(private cdr: ChangeDetectorRef) </span>{}\n\n  beforeViewRender(\n    event:\n      | CalendarMonthViewBeforeRenderEvent\n      | CalendarWeekViewBeforeRenderEvent\n      | CalendarDayViewBeforeRenderEvent\n  ) {\n    <span class="hljs-keyword">this</span>.period = event.period;\n    <span class="hljs-keyword">this</span>.cdr.detectChanges();\n  }\n}\n'},16717:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},17473:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span> [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span> [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"alert alert-warning"</span> *<span class="hljs-attribute">ngIf</span>=<span class="hljs-value">"period?.events.length === 0"</span>&gt;</span>\n  There are no events on this {{ view }}\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeViewRender($event)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeViewRender($event)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeViewRender($event)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'},49198:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s="import {\n  Component,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n} from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarViewPeriod,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarWeekViewBeforeRenderEvent,\n  CalendarDayViewBeforeRenderEvent,\n  CalendarView,\n} from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date(),\n    },\n  ];\n\n  period: CalendarViewPeriod;\n\n  constructor(private cdr: ChangeDetectorRef) {}\n\n  beforeViewRender(\n    event:\n      | CalendarMonthViewBeforeRenderEvent\n      | CalendarWeekViewBeforeRenderEvent\n      | CalendarDayViewBeforeRenderEvent\n  ) {\n    this.period = event.period;\n    this.cdr.detectChanges();\n  }\n}\n"},78041:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n"},61194:(a,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s='<mwl-demo-utils-calendar-header [(view)]="view" [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div class="alert alert-warning" *ngIf="period?.events.length === 0">\n  There are no events on this {{ view }}\n</div>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [activeDayIsOpen]="true"\n    (beforeViewRender)="beforeViewRender($event)"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    (beforeViewRender)="beforeViewRender($event)"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    (beforeViewRender)="beforeViewRender($event)"\n  >\n  </mwl-calendar-day-view>\n</div>\n'}}]);