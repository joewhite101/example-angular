import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { User } from '../domain/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit, OnDestroy {


  user: User;
  isAlive = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    const id = 1;
    this.usersService.getById(id)
    .pipe(takeWhile(x => this.isAlive))
    .subscribe(results => {
      this.user = results.payload;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  onGo() {
    this.router.navigate(['streamserve']);
  }
}
