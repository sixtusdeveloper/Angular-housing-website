import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-application-confirmation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="confirmation-container">
      <div class="confirmation-box">
        <div class="confirmation-header">
          <h1>Application Submitted</h1>
          <p class="subheading">Thank you for applying. Here are the details you submitted:</p>
        </div>

        <div class="confirmation-content">
          <div class="confirmation-row">
            <strong>Full Name:</strong>
            <span>{{ applicationData?.fullName }}</span>
          </div>
          <div class="confirmation-row">
            <strong>Email:</strong>
            <span>{{ applicationData?.email }}</span>
          </div>
          <div class="confirmation-row">
            <strong>Message:</strong>
            <p class="message-text">{{ applicationData?.message }}</p>
          </div>
          <div class="confirmation-row">
            <strong>Terms Agreed:</strong>
            <span>{{ applicationData?.terms ? 'Yes' : 'No' }}</span>
          </div>
        </div>

        <div class="confirmation-footer">
          <button (click)="goBack()" class="back-button">Back to Homepage</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./application-confirmation.component.css']
})
export class ApplicationConfirmationComponent implements OnInit {
  applicationData: any;

  constructor(private router: Router) {}  // Inject the Router

  ngOnInit() {
    // Retrieve the application data from localStorage
    const data = localStorage.getItem('applicationData');
    
    // Parse the data and assign to applicationData
    if (data) {
      this.applicationData = JSON.parse(data);
    }
  }

  goBack() {
    this.router.navigate(['/']);  // Navigate to the homepage
  }
}
