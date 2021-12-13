import { Component, OnInit } from '@angular/core';

import { WorkFlowService } from '../../work-flow.service';
import { ICommit } from '../../data';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
})
export class GanttComponent implements OnInit {
  data: ICommit[] = [];

  plantingDays = '2021-11-30 00:00:00.000';

  dataChart: any;
  options: any;

  type: string = 'horizontalBar';

  constructor(private _workflow: WorkFlowService) {}

  ngOnInit(): void {
    this._workflow.data$.subscribe((res) => {
      this.data = res;
      this.createChart();
    });
  }

  createChart() {
    const that = this;
    this.dataChart = {
      labels: this.data.map((commit) => commit.event),
      datasets: [
        {
          data: this.data.map((commit: ICommit) => {
            return this.getDiffTime(this.plantingDays, commit.start);
          }),
          datalabels: {
            color: '#025ced',
            formatter: function (value: any, context: any) {
              return '';
            },
          },
          backgroundColor: 'rgba(63,103,126,0)',
          hoverBackgroundColor: 'rgba(50,90,100,0)',
        },
        {
          data: this.data.map((commit) => {
            return this.getDiffTime(commit.start, commit.end);
          }),
          datalabels: {
            color: '#dba123',
            formatter: function (value: any, context: any) {
              return value;
            },
          },
          backgroundColor: 'rgba(63,103,126,1)',
          hoverBackgroundColor: 'rgba(50,90,100,1)',
        },
      ],
    };

    this.options = {
      maintainAspectRatio: true,
      title: {
        display: true,
        text: 'Gantt',
      },
      legend: { display: false },
      tooltips: {
        mode: 'index',
        callbacks: {
          label: function (tooltipItem: any, d: any) {
            let label = d.datasets[tooltipItem.datasetIndex].label || '';
            const date = new Date(that.plantingDays);
            if (tooltipItem.datasetIndex === 0) {
              const diff = that.getDiffTime(
                date.toString(),
                that.data[tooltipItem.index].start
              );
              date.setDate(diff + 1);
              label += 'Start Date: ' + that.getDate(date);
            } else if (tooltipItem.datasetIndex === 1) {
              const diff = that.getDiffTime(
                date.toString(),
                that.data[tooltipItem.index].end
              );
              date.setDate(diff + 1);
              label += 'End Date: ' + that.getDate(date);
            }

            return label;
          },
        },
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            ticks: {
              callback: function (value: any, index: any, values: any) {
                const date = new Date(that.plantingDays);
                date.setDate(value);
                // return that.getDate(date);
                return date.getDate();
              },
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };
  }

  getDate(date: Date) {
    return (
      date.getFullYear() +
      '-' +
      date.getMonth().toString().substring(-2) +
      '-' +
      date.getDate().toString().substring(-2)
    );
  }

  getDiffTime(start: String, end: String) {
    const startDay = dayjs(start.toString());
    const endDay = dayjs(end.toString());

    const vl = endDay.diff(startDay);

    return vl;
  }
}
