
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserShowComponent } from './user-show/user-show.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './utility/auth-interceptor.utility';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UserShowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
