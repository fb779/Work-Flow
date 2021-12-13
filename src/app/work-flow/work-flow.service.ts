import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Data, ICommit, EnumCommitStatus } from './data';

import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

@Injectable({
  providedIn: 'root',
})
export class WorkFlowService {
  private userBS = new BehaviorSubject('');
  private dataBS = new BehaviorSubject([]);

  data$: Observable<ICommit[]> = this.dataBS.asObservable();

  user$ = this.userBS.asObservable();

  private userData$ = combineLatest([this.user$]).pipe(
    switchMap(([user]) => {
      return this.getDataByUser(user);
    })
  );

  totalCommits$ = this.userData$.pipe(map((commits) => commits.length));

  commitsSuccess$ = this.userData$.pipe(
    map(
      (commits: ICommit[]) =>
        commits.filter((commit) => commit.status !== EnumCommitStatus.failed)
          .length
    )
  );

  commitsFailed$ = this.userData$.pipe(
    map(
      (commits: ICommit[]) =>
        commits.filter((commit) => commit.status === EnumCommitStatus.failed)
          .length
    )
  );

  commitsRate$ = combineLatest([this.totalCommits$, this.commitsSuccess$]).pipe(
    switchMap(([total, success]) => {
      if (total < 1) {
        return of(0);
      }
      const ratePass = (success * 100) / total;
      return of(ratePass + '%');
    })
  );

  averageTimes$ = this.userData$.pipe(
    map((commits: ICommit[]) => {
      return commits.map((commit) => {
        const startDay = dayjs(commit.start.toString());
        const endDay = dayjs(commit.end.toString());

        const diffence = dayjs.duration(endDay.diff(startDay));

        const years =
          diffence.years() > 0
            ? diffence.years() == 1
              ? diffence.years() + ' year '
              : diffence.years() + ' years '
            : '';
        const months =
          diffence.months() > 0
            ? diffence.months() == 1
              ? diffence.months() + ' month '
              : diffence.months() + ' months '
            : '';
        const days =
          diffence.days() > 0
            ? diffence.days() == 1
              ? diffence.days() + ' day '
              : diffence.days() + ' day '
            : '';
        const hours =
          diffence.hours() > 0
            ? diffence.hours() == 1
              ? diffence.hours() + ' hour '
              : diffence.hours() + ' hour '
            : '';
        const minutes =
          diffence.minutes() > 0
            ? diffence.minutes() == 1
              ? diffence.minutes() + ' minute '
              : diffence.minutes() + ' minute '
            : '';
        const seconds =
          diffence.seconds() > 0
            ? diffence.seconds() == 1
              ? diffence.seconds() + ' second'
              : diffence.seconds() + ' seconds'
            : '';

        return Object.assign({}, commit, {
          averageTime: String(
            years + months + days + hours + minutes + seconds
          ).trim(),
        });
      });
    }),
    tap((data: any) => this.dataBS.next(data))
  );

  constructor() {}

  private getDataByUser(user: String | null) {
    if (!user) {
      return of([]);
    }

    return of(Data.filter((item) => item.user === user));
  }

  getUserList() {
    return of(
      Data.reduce((acc: String[], cur: ICommit) => {
        const { user } = cur;
        if (acc.indexOf(user) === -1) {
          acc.push(user);
        }

        return acc;
      }, [])
    );
  }

  setUser(user: String) {
    this.userBS.next(user.toString());
  }
}
