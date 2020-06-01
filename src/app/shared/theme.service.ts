import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = new BehaviorSubject('light');

  constructor() { }

  changeTheme(value = 'light') {
    this.theme.next(value);
    localStorage.setItem('mode', value);
  }

  getThemeMode() {
    const mode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;
    this.theme.next(mode);
  }
}
