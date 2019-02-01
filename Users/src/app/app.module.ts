import { FormsModule } from '@angular/forms';
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
import { StreamServeComponent } from './stream-serve/stream-serve.component';
import { CommonModule } from '@angular/common';
import { StreamServeService } from './services/stream-serve.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UserShowComponent,
    StreamServeComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    UsersService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    StreamServeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
