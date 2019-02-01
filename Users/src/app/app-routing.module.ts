import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { UserShowComponent } from './user-show/user-show.component';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: UserShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
