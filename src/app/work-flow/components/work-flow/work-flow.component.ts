import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkFlowService } from '../../work-flow.service';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss'],
})
export class WorkFlowComponent implements OnInit {
  userList$: Observable<any>;
  totalCommits$: Observable<any> = this._workflow.totalCommits$;
  totalCommitsPass$: Observable<any> = this._workflow.commitsSuccess$;
  totalCommitsRate$: Observable<any> = this._workflow.commitsRate$;
  averageTimes$: Observable<any> = this._workflow.averageTimes$;

  constructor(private _workflow: WorkFlowService) {
    this.userList$ = this._workflow.getUserList();
  }

  ngOnInit(): void {}

  userSelect(value: String) {
    this._workflow.setUser(value);
  }
}
