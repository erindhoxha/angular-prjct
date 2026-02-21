import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users = [{ name: 'John Doe' }, { name: 'Jane Doe' }, { name: 'Jack Doe' }];
}
