import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-hero">
      <div class="about-hero-content">
        <h1>Your Dream Home Awaits</h1>
        <p>Discover the best housing options tailored to your needs. Browse through our extensive collection of homes across multiple cities, and find the one that suits your lifestyle and budget.</p>
      </div>
    </section>

    <section class="about-details">
      <div class="about-section">
        <h2>About Us</h2>
        <p>At Yahut, we believe that everyone deserves to find their perfect home. Our platform is designed to make the home buying, renting, and investing process as easy and efficient as possible. With a vast database of listings and tools to help you make informed decisions, we are your trusted partner in your home journey.</p>
      </div>

      <div class="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to simplify the property search and provide our clients with the tools they need to make the best decisions for themselves and their families. We are committed to offering an extensive range of properties for rent and sale, from cozy apartments to luxurious homes, to suit all budgets and preferences.</p>
      </div>

      <div class="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Extensive Property Listings:</strong> Access a wide range of properties from across the country, updated daily.</li>
          <li><strong>Easy Search Filters:</strong> Narrow down your search to find the home that meets your needs in terms of location, price, and features.</li>
          <li><strong>Professional Support:</strong> Our team of real estate experts is here to guide you through the buying, renting, or investing process.</li>
          <li><strong>Transparent Transactions:</strong> We ensure all your property dealings are handled smoothly, with full transparency and no hidden fees.</li>
        </ul>
      </div>

      <div class="about-section">
        <h2>Our Vision</h2>
        <p>Our vision is to become the most trusted platform for housing solutions, providing our users with an easy-to-navigate experience and the resources they need to make their next big move. Whether you’re buying, renting, or investing, we’re here to help you every step of the way.</p>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
