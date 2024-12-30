import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
              <div *ngIf="applyForm.get('fullName')?.invalid && applyForm.get('fullName')?.touched" class="error-message">
                Full Name is required.
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" class="form-input" />
              <div *ngIf="applyForm.get('email')?.invalid && applyForm.get('email')?.touched" class="error-message">
                <span *ngIf="applyForm.get('email')?.errors?.['required']">Email is required.</span>
                <span *ngIf="applyForm.get('email')?.errors?.['email']">Please enter a valid email.</span>
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" formControlName="message" class="form-input form-input-textarea"></textarea>
              <div *ngIf="applyForm.get('message')?.invalid && applyForm.get('message')?.touched" class="error-message">
                Message is required.
              </div>
            </div>

            <div class="form-group">
              <label for="terms" class="terms-label">
                <input id="terms" type="checkbox" formControlName="terms" class="terms-checkbox" />
                <span class="agreement"> I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">terms </a> and <a href="/conditions" target="_blank" rel="noopener noreferrer">conditions</a></span>
              </label>
              <div *ngIf="applyForm.get('terms')?.invalid && applyForm.get('terms')?.touched" class="error-message">
                You must agree to the terms and conditions.
              </div>
            </div>

            <button class="submit-button" type="submit" [disabled]="applyForm.invalid">Submit Application</button>
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
  router: Router = inject(Router); // Inject Router
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  // Form with Validators
  applyForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    terms: new FormControl(false, Validators.requiredTrue)
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    if (this.applyForm.valid) {
      // Store the application data in localStorage
      this.housingService.submitApplication(
        this.applyForm.value.fullName ?? '',
        this.applyForm.value.email ?? '',
        this.applyForm.value.message ?? '',
        this.applyForm.value.terms ?? false
      );

      // Navigate to the application confirmation page
      this.router.navigate(['/application-confirmation']);
    } else {
      alert('Please fill out all required fields before submitting.');
    }
  }
}
