import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './shared/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ng-learn';
  theme: BehaviorSubject<string>;

  constructor(
    private titleService: Title,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.getThemeMode();
    this.theme = this.themeService.theme;
    this.titleService.setTitle(`${this.title} | ${this.theme.value} mode`);
  }
}
