import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;

  constructor(private overlayContainer: OverlayContainer) {
    this.setTheme(this.isDarkTheme);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.setTheme(this.isDarkTheme);
  }

  private setTheme(isDarkTheme: boolean): void {
    const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

    const overlayContainerClasses =
      this.overlayContainer.getContainerElement().classList;
    overlayContainerClasses.remove('dark-theme', 'light-theme');
    overlayContainerClasses.add(themeClass);
  }
}
