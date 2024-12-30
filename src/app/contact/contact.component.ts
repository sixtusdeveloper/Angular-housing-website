import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-hero">
      <div class="contact-hero-content">
        <h1>Get in Touch with Us</h1>
        <p>Have questions? We’re here to help you with all your housing needs. Whether you’re buying, renting, or investing, feel free to reach out to us.</p>
      </div>
    </section>

    <section class="contact-details">
      <div class="contact-section">
        <h2>Our Contact Information</h2>
        <p>If you would like to speak with a representative or need assistance with finding your next home, here’s how you can get in touch:</p>

        <div class="contact-info">
          <div class="info-item">
            <h3>Email Us</h3>
            <p><a href="mailto:contact@yahut.net">contact@yahut.net</a></p>
          </div>
          <div class="info-item">
            <h3>Call Us</h3>
            <p><a href="tel:+1234567890">+1 (234) 902 2048</a></p>
          </div>
          <div class="info-item">
            <h3>Visit Our Office</h3>
            <p>123 Housing St, Suite 400<br>Cityville, State, 12345</p>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2>Our Location</h2>
        <div class="location-map">
          <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {}
