import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';
  headerText: string = 'Dashboard';
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public themeService: ThemeService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.headerText = this.activatedRoute.root.firstChild?.snapshot.data['headerText'] || 'Dashboard';
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}