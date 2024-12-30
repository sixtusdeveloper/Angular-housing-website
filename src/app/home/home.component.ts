import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="home">
      <div class="hero">
        <h1>Welcome to the Home Page</h1>
      </div>

      <div class="search">
        <form>
          <input type="search" placeholder="Search by City or title" #filter />
          <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        </form>
      </div>

      <section class="results">
        <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
      </section>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    const lowercasedText = text.toLowerCase();
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation =>
        housingLocation?.city.toLowerCase().includes(lowercasedText) || 
        housingLocation?.name.toLowerCase().includes(lowercasedText)
    );
  }
}
