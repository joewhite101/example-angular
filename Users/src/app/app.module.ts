import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserShowComponent } from './user-show/user-show.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UserShowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
