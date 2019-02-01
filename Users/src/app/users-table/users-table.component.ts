
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../domain/user';
import { takeWhile, delay } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit, OnDestroy {

  users: Array<User>;
  isAlive = true;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAll()
    .pipe(takeWhile(x => this.isAlive))
    .subscribe(results => {
      this.users = results.payload;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
