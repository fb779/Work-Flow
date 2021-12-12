export interface ICommit {
  event: String;
  user: String;
  commit_id: String;
  start: String;
  end: String;
  status?: String;
  reviewer?: String[];
  averageTime?: String;
}

export enum EnumCommitStatus {
  success = 'success',
  approved = 'approved',
  failed = 'failed',
}

export enum EnumTypeCommit {
  pull = 'pull',
  patch = 'patch',
  build = 'build',
  sanity = 'sanity',
  review = 'review',
  merge = 'merge',
}

export const Data: ICommit[] = [
  {
    event: 'pull',
    user: 'user1',
    commit_id: '1',
    status: 'success',
    start: '2021-12-01 10:11:11',
    end: '2021-12-01 10:20:11',
  },
  {
    event: 'patch',
    user: 'user1',
    commit_id: '1',
    status: 'success',
    start: '2021-12-01 10:20:11',
    end: '2021-12-01 10:30:11',
  },
  {
    event: 'build',
    user: 'user1',
    commit_id: '1',
    status: 'success',
    start: '2021-12-01 10:30:11',
    end: '2021-12-01 10:35:11',
  },
  {
    event: 'sanity',
    user: 'user1',
    commit_id: '1',
    status: 'success',
    start: '2021-12-01 10:35:12',
    end: '2021-12-01 11:11:11',
  },
  {
    event: 'review',
    user: 'user1',
    reviewer: ['user2', 'user3'],
    commit_id: '1',
    status: 'approved',
    start: '2021-12-01 11:35:12',
    end: '2021-12-01 11:40:11',
  },
  {
    event: 'merge',
    user: 'user1',
    commit_id: '1',
    start: '2021-12-01 11:41:00',
    end: '2021-12-01 11:42:11',
  },
  {
    event: 'pull',
    user: 'user2',
    commit_id: '2',
    status: 'success',
    start: '2021-12-01 13:14:11',
    end: '2021-12-01 13:15:11',
  },
  {
    event: 'patch',
    user: 'user2',
    commit_id: '2',
    status: 'success',
    start: '2021-12-01 13:20:11',
    end: '2021-12-01 13:30:11',
  },
  {
    event: 'build',
    user: 'user2',
    commit_id: '2',
    status: 'success',
    start: '2021-12-01 13:35:11',
    end: '2021-12-01 13:40:11',
  },
  {
    event: 'sanity',
    user: 'user2',
    commit_id: '2',
    status: 'success',
    start: '2021-12-01 13:55:12',
    end: '2021-12-01 14:25:11',
  },
  {
    event: 'review',
    user: 'user2',
    reviewer: ['user3', 'user4'],
    commit_id: '2',
    status: 'approved',
    start: '2021-12-01 14:35:12',
    end: '2021-12-01 14:45:11',
  },
  {
    event: 'merge',
    user: 'user2',
    commit_id: '2',
    start: '2021-12-01 14:46:00',
    end: '2021-12-01 14:47:08',
  },
  {
    event: 'pull',
    user: 'user3',
    commit_id: '3',
    status: 'success',
    start: '2021-12-01 15:14:11',
    end: '2021-12-01 15:16:11',
  },
  {
    event: 'patch',
    user: 'user3',
    commit_id: '3',
    status: 'success',
    start: '2021-12-01 15:21:11',
    end: '2021-12-01 15:22:11',
  },
  {
    event: 'build',
    user: 'user3',
    commit_id: '3',
    status: 'success',
    start: '2021-12-01 15:24:11',
    end: '2021-12-01 15:55:11',
  },
  {
    event: 'sanity',
    user: 'user3',
    commit_id: '3',
    status: 'failed',
    start: '2021-12-01 16:13:12',
    end: '2021-12-01 16:25:11',
  },
];