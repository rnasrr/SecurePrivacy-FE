import { Component } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [UserService],
})
export class CreateUserComponent {
  public user: User = { id: '', name: '', email: '', consentToDataCollection: false };

  constructor(private userService: UserService) {}

  onSubmit() {
    if (!this.user.consentToDataCollection) {
      console.log('User must agree');
      return;
    }

    this.userService.createUser(this.user).subscribe(response => {
      console.log('User created:', response);
    });
  }
}