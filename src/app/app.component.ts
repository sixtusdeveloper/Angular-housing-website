import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="navbar">
        <a routerLink="/" class="brand">
          <img class="brand-logo" width="20" height="20" src="/assets/logo.png" alt="logo" arial-hidden="true" />
          <span class="brand-name">yahut</span>
        </a>
        
        <nav class="nav">
          <ul>
            <li><a routerLink="/" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          </ul>
        </nav>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
