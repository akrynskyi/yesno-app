import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/theme.service';
import { Title } from '@angular/platform-browser';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle: boolean;
  docTitle = this.titleService.getTitle();

  constructor(
    private themeService: ThemeService,
    private titleService: Title,
    private capitalizePipe: CapitalizePipe
  ) { }

  ngOnInit(): void {
    this.toggle = this.themeService.theme.value === 'light' ? false : true;
  }

  themeToggle() {
    this.toggle = !this.toggle;

    if (this.toggle) {
      this.themeService.changeTheme('dark');
      this.titleService
        .setTitle(`${this.docTitle} | ${this.capitalizePipe.transform(this.themeService.theme.value)} mode`);
    } else {
      this.themeService.changeTheme('light');
      this.titleService
        .setTitle(`${this.docTitle} | ${this.capitalizePipe.transform(this.themeService.theme.value)} mode`);
    }
  }

}
