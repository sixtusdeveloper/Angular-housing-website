import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  
  <article>
    <section class="housing-hero">
      <img class="housing-hero-image" [src]="housingLocation?.photo" alt="Image of {{ housingLocation?.name }}" />
      <div class="housing-hero-overlay">
        <h1 class="housing-title">{{ housingLocation?.name }}</h1>
        <p class="housing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </div>
    </section>

    <section class="listing-features">
      <h2 class="section-heading">About this Housing Location</h2>
      <div class="features-list">
        <div class="feature-item">
          <h3 class="feature-title">Units Available:</h3>
          <p class="feature-value">{{ housingLocation?.availableUnits }}</p>
        </div>
        <div class="feature-item">
          <h3 class="feature-title">Wifi Availability:</h3>
          <p class="feature-value">{{ housingLocation?.wifi }}</p>
        </div>
        <div class="feature-item">
          <h3 class="feature-title">Laundry Availability:</h3>
          <p class="feature-value">{{ housingLocation?.laundry }}</p>
        </div>
        <div class="feature-item">
          <h3 class="feature-title">Price:</h3>
          <p class="feature-value">{{ housingLocation?.price | currency:'USD':true }}</p>
        </div>
      </div>
    </section>

    <section class="listing-full-description">
      <h2 class="section-heading">Full Description</h2>
      <p>{{ housingLocation?.description }}</p>
    </section>

    <section class="apply-container">
      <h2 class="apply-heading">Apply to Live Here</h2>

      <div class="listing-apply">
        <div class="apply-image">
          <img src="/assets/travel.avif" alt="Apply Image" /> 
        </div>

        <div class="apply-form">
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <h3 class="form-heading">Application Form</h3>

            <div class="form-group">
              <label for="full-name">Full Name</label>
              <input id="full-name" type="text" formControlName="fullName" class="form-input" />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" class="form-input" />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" formControlName="message" class="form-input form-input-textarea"></textarea>
            </div>

            <div class="form-group">
              <label for="terms" class="terms-label">
                <input id="terms" type="checkbox" class="terms-checkbox" />
                <span class="agreement"> I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">terms </a> and <a href="/conditions" target="_blank" rel="noopener noreferrer">conditions</a></span>
              </label>
            </div>

            <button class="submit-button" type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </section>

  </article>

  `,
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    terms: new FormControl('')
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.fullName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.message ?? '',
      this.applyForm.value.terms === 'false' ? false : true
    );
  }
}
