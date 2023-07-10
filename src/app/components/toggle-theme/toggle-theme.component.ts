import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
})
export class ToggleThemeComponent {
  darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.documentElement.setAttribute(
      'data-theme',
      this.darkTheme ? 'dark' : 'light'
    );
  }
}
