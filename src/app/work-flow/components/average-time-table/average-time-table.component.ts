import { Component, Input, OnInit } from '@angular/core';
import { ICommit } from '../../data';

@Component({
  selector: 'app-average-time-table',
  templateUrl: './average-time-table.component.html',
  styleUrls: ['./average-time-table.component.scss'],
})
export class AverageTimeTableComponent implements OnInit {
  @Input('data') data: ICommit[] = [];

  constructor() {}

  ngOnInit(): void {}
}
