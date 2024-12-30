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
      <img class="listing-photo" [src]="housingLocation?.photo"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>

      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>

      <section class="listing-full-description">
        <p>{{ housingLocation?.description }}</p>
      </section>
       
      <section class="listing-apply">
        <h2 class="section-heading">Apply to leave here</h2>

        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <h3>Application Form</h3>

          <div class="error-message"></div>
          <div class="success-message"></div>

          <div class="form-group form-group-inline">
            <label for="full-name">Full name</label>
            <input id="full-name" type="text" formControlName="fullName" />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" formControlName="message"></textarea>
          </div>
    
          <div class="form-group">
            <label for="terms">I agree to the terms and conditions</label>
            <input id="terms" type="checkbox" />
          </div>

          <button class="primary" type="submit">Submit Application</button>
        </form>
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
