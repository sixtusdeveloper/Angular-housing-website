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
          <img class="brand-logo" width="30" height="30" src="/assets/logo.png" alt="logo" aria-hidden="true" />
          <span class="brand-name">yahut</span>
        </a>
        
        <nav class="nav">
          <ul>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact us</a></li>
          </ul>
        </nav>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer class="footer">
        <div class="footer-content">
          <div class="brand">
            <img src="/assets/logo.png" alt="Yahut Logo" class="brand-logo" width="30" height="30">
            <span class="brand-name-dark">yahut</span>
          </div>
          <nav class="footer-nav">
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/conditions">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </nav>
          <div class="social-media">
            <a href="https://x.com/sixtusdev" target="_blank" aria-label="Twitter">
              <img src="/assets/twitter.webp" alt="Twitter" width="20" height="20" class="social-icon"> 
            </a>
            <a href="https://linkedin.com/in/sixtusushrey" target="_blank" aria-label="LinkedIn" >
              <img src="/assets/linkedin.webp" alt="LinkedIn" width="20" height="20"class="social-icon" >
            </a>
            <a href="https://github.com/sixtusdeveloper" target="_blank" aria-label="Github" >
              <img src="/assets/github.webp" alt="Github" width="20" height="20" class="social-icon">
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Yahut. All rights reserved.</p>
        </div>
      </footer>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  currentYear: number = new Date().getFullYear(); // Define the current year
}






// import { Component } from '@angular/core';
// import { HomeComponent } from './home/home.component';
// import { RouterModule } from '@angular/router';

// @Component({
//   standalone: true,
//   selector: 'app-root',
//   template: `
//     <main>
//       <header class="navbar">
//         <a routerLink="/" class="brand">
//           <img class="brand-logo" width="20" height="20" src="/assets/logo.png" alt="logo" arial-hidden="true" />
//           <span class="brand-name">yahut</span>
//         </a>
        
//         <nav class="nav">
//           <ul>
//             <li><a routerLink="/" routerLinkActive="active">Home</a></li>
//             <li><a routerLink="/about" routerLinkActive="active">About</a></li>
//           </ul>
//         </nav>
//       </header>
//       <section class="content">
//         <router-outlet></router-outlet>
//       </section>

//       <footer class="footer">
//         <div class="footer-content">
//           <div class="brand">
//             <img src="/assets/logo.png" alt="Yahut Logo" class="brand-logo">
//             <span class="brand-name">Yahut</span>
//           </div>
//           <nav class="footer-nav">
//             <ul>
//               <li><a href="/about">About Us</a></li>
//               <li><a href="/contact">Contact</a></li>
//               <li><a href="/privacy-policy">Privacy Policy</a></li>
//               <li><a href="/terms-of-service">Terms of Service</a></li>
//             </ul>
//           </nav>
//           <div class="social-media">
//             <a href="https://twitter.com" target="_blank" aria-label="Twitter">
//               <img src="/assets/twitter-icon.svg" alt="Twitter">
//             </a>
//             <a href="https://facebook.com" target="_blank" aria-label="Facebook">
//               <img src="/assets/facebook-icon.svg" alt="Facebook">
//             </a>
//             <a href="https://instagram.com" target="_blank" aria-label="Instagram">
//               <img src="/assets/instagram-icon.svg" alt="Instagram">
//             </a>
//           </div>
//         </div>
//         <div class="footer-bottom">
//           <p>&copy; {{ new Date().getFullYear() }} Yahut. All rights reserved.</p>
//         </div>
//       </footer>
//     </main>
  
//   `,
//   styleUrls: ['./app.component.css'],
//   imports: [HomeComponent, RouterModule]
// })
// export class AppComponent {
//   title = 'homes';
// }
