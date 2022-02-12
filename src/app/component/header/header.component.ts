import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sortingStrata: 'ascending' | 'descending' = 'ascending';
  searchTerm = '';
  constructor(private userServices: UsersService) {}

  ngOnInit(): void {}
  search() {
    this.userServices.users = this.userServices.filterUsers(this.searchTerm);
  }
  sort() {
    this.userServices.sortUsers(this.sortingStrata);
  }
}
