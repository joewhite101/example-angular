import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { UserShowComponent } from './user-show/user-show.component';
import { StreamServeComponent } from './stream-serve/stream-serve.component';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: UserShowComponent},
    { path: 'streamserve', component: StreamServeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
