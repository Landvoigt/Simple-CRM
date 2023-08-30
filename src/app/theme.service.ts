import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private darkMode = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const themeName = this.darkMode ? 'dark' : 'light';
    const existingThemeClass = document.body.getAttribute('theme');
    if (existingThemeClass) {
      this.renderer.removeClass(document.body, existingThemeClass);
    }
    this.renderer.addClass(document.body, themeName);
  }

  get isDarkMode() {
    return this.darkMode;
  }
}
