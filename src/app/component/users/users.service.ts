import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users: User[] = [];
  private _filteredUsers: User[] = [];

  set orgUsers(users: User[]) {
    this._users = users;
  }
  get users() {
    return this._filteredUsers;
  }
  set users(users) {
    this._filteredUsers = users;
  }

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  sortUsers(order: 'ascending' | 'descending') {
    const orderMaker = order === 'ascending' ? -1 : 1;
    this.users.sort(({ name }, { name: privName }) => {
      const nameA = name.toUpperCase();
      const nameB = privName.toUpperCase();
      if (nameA < nameB) {
        return orderMaker;
      }
      if (nameA > nameB) {
        return -orderMaker;
      }
      return 0;
    });
  }

  filterUsers(filterTerm: string) {
    return this._users.filter(({ name }) => name.includes(filterTerm));
  }
}
