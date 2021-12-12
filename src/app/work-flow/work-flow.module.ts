import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkFlowService } from './work-flow.service';

import { GanttComponent } from './components/gantt/gantt.component';
import { UserSelectorComponent } from './components/user-selector/user-selector.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WorkFlowComponent } from './components/work-flow/work-flow.component';
import { AverageTimeTableComponent } from './components/average-time-table/average-time-table.component';

@NgModule({
  declarations: [
    GanttComponent,
    UserSelectorComponent,
    SummaryComponent,
    WorkFlowComponent,
    AverageTimeTableComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [WorkFlowComponent],
  providers: [WorkFlowService],
})
export class WorkFlowModule {}
