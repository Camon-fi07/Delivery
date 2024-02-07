import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from 'core/services/user.service';
import { TextComponent } from 'shared/UI/text/text.component';
import { TextType } from 'shared/UI/text/text.types';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule, TextComponent, RouterLink],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss',
})
export class BottomBarComponent {
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
