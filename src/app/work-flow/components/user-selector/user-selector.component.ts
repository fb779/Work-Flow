import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent implements OnInit {
  @Input('UserList') userList = [];
  @Input('userValue') userValue = '';
  @Output() selectUser = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
