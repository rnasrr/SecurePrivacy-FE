import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: 'create-user', component: CreateUserComponent },
    { path: 'user-list', component: UserListComponent },
    { path: '', redirectTo: '/user-list', pathMatch: 'full' }
];
