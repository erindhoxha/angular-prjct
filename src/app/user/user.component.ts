import { Component } from '@angular/core';
import { DUMMY_USERS } from '../mocks/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users = DUMMY_USERS;
  selectedUser: (typeof DUMMY_USERS)[number] = DUMMY_USERS[0];

  selectUser(user: (typeof DUMMY_USERS)[number]) {
    this.selectedUser = user;
  }
}
