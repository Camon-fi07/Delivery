import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from 'core/services/user.service';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TextComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAuth!: boolean;
  TextType = TextType;

  constructor(private userService: UserService) {
    userService.getIsAuth().subscribe({
      next: (res) => {
        this.isAuth = res;
      },
    });
  }

  handleLogOut() {
    this.userService.logOut();
  }
}
