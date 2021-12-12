import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input('totalCommits') totalCommits: Number = 0;
  @Input('totalCommitsPass') totalCommitsPass: Number = 0;
  @Input('totalCommitsRate') totalCommitsRate: Number = 0;

  constructor() {}

  ngOnInit(): void {}
}
