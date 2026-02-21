import { Component } from '@angular/core';
import { DUMMY_USERS } from '../mocks/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  public users = DUMMY_USERS;
  public selectedUser = DUMMY_USERS[randomIndex];

  public selectUser(user: (typeof DUMMY_USERS)[number]) {
    this.selectedUser = user;
  }
}
