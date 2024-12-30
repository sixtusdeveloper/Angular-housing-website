import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  standalone: true,
  template: `
    <div class="privacy-container">
      <section class="privacy-hero">
        <div class="privacy-hero-overlay">
          <h1>Privacy Policy</h1>
          <p class="subheading">We value your privacy. Here’s how we protect your personal information.</p>
        </div>
      </section>

      <section class="privacy-content">
        <div class="privacy-section">
          <h2>1. Introduction</h2>
          <p>This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
        </div>

        <div class="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>We collect personal information such as your name, email address, phone number, and payment information when you register for our services or make a purchase.</p>
        </div>

        <div class="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to process transactions, improve our services, and communicate with you regarding your account or promotional offers.</p>
        </div>

        <div class="privacy-section">
          <h2>4. Data Protection</h2>
          <p>We use industry-standard encryption and security measures to protect your personal data from unauthorized access or disclosure.</p>
        </div>

        <div class="privacy-section">
          <h2>5. Sharing Your Information</h2>
          <p>We do not sell, rent, or share your personal information with third parties except as necessary to provide our services or comply with the law.</p>
        </div>

        <div class="privacy-section">
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>We use cookies to enhance your experience on our website and to collect usage data for analytics purposes.</p>
        </div>

        <div class="privacy-section">
          <h2>7. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal data. You can also opt out of promotional emails at any time.</p>
        </div>

        <div class="privacy-section">
          <h2>8. Changes to This Policy</h2>
          <p>We may update this privacy policy periodically. Any changes will be posted on this page, and we will notify you if necessary.</p>
        </div>

        <div class="privacy-section">
          <h2>9. Contact Us</h2>
          <p>If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:privacy@yahut.net">privacy@yahut.net</a>.</p>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {}
