import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="terms-container">
      <section class="terms-hero">
        <div class="terms-hero-overlay">
          <h1>Terms and Conditions</h1>
          <p class="subheading">Please read these terms and conditions carefully before using our services.</p>
        </div>
      </section>

      <section class="terms-content">
        <div class="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Yahut. These terms and conditions outline the rules and regulations for the use of our services and website.</p>
        </div>

        <div class="terms-section">
          <h2>2. Use of Our Services</h2>
          <p>By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our services.</p>
        </div>

        <div class="terms-section">
          <h2>3. Intellectual Property</h2>
          <p>All content and materials on our website, including text, images, logos, and software, are the property of Yahut and are protected by copyright and intellectual property laws.</p>
        </div>

        <div class="terms-section">
          <h2>4. User Responsibilities</h2>
          <p>You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair the website or interfere with any other party’s use of our services.</p>
        </div>

        <div class="terms-section">
          <h2>5. Privacy Policy</h2>
          <p>Our privacy policy governs how we collect, use, and protect your personal information. Please refer to our <a class="link" href="/conditions">Privacy Policy</a> for more details.</p>
        </div>

        <div class="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>We are not liable for any damages arising from the use of our services, including direct, indirect, incidental, or consequential damages.</p>
        </div>

        <div class="terms-section">
          <h2>7. Amendments</h2>
          <p>We reserve the right to modify or update these terms at any time. We will notify users of significant changes via email or website updates.</p>
        </div>

        <div class="terms-section">
          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of Yahut. Any disputes will be resolved in the courts of United States of America.</p>
        </div>

        <div class="terms-section">
          <h2>9. Contact Us</h2>
          <p>If you have any questions or concerns about these terms, please contact us at <a href="mailto:terms@yahut.net">terms@yahut.net</a>.</p>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./terms.component.css']
    
})
export class TermsComponent {}
