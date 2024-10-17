import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}