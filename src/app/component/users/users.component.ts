import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(public usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.usersService.users = users;
        this.usersService.orgUsers = users;
      },
    });
  }
}
