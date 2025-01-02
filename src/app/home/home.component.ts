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
        <div class="hero-content">
          <h1>Your Dream Home Awaits</h1>
          <p>
            Discover the best housing options tailored to your needs. Browse our extensive collection of homes across various cities and find the one that fits your lifestyle and budget.
          </p>
          <a href="/about" class="primary-link">
             <button class="primary-button">Learn More</button>
          </a>
        </div>
      </div>

      <div class="search">
        <form>
          <input type="search" placeholder="Search by City or title" #filter />
          <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        </form>
      </div>

      <section class="results">
        <app-housing-location
          *ngFor="let housingLocation of paginatedLocations"
          [housingLocation]="housingLocation">
        </app-housing-location>
      </section>

      <div class="pagination">
        <button 
          class="primary"
          [disabled]="currentPage === 1"
          (click)="changePage(currentPage - 1)">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button 
          class="primary"
          [disabled]="currentPage === totalPages"
          (click)="changePage(currentPage + 1)">Next</button>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  paginatedLocations: HousingLocation[] = [];
  itemsPerPage = 6; // Number of cards per page
  currentPage = 1;
  totalPages = 1;
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      this.updatePagination();
    });
  }
  

  // constructor() {
  //   this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
  //     this.housingLocationList = housingLocationList;
  //     this.filteredLocationList = housingLocationList;
  //     this.updatePagination();
  //   });
  // }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      const lowercasedText = text.toLowerCase();
      this.filteredLocationList = this.housingLocationList.filter(
        location =>
          location.city.toLowerCase().includes(lowercasedText) ||
          location.name.toLowerCase().includes(lowercasedText)
      );
    }
    this.currentPage = 1; // Reset to the first page
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredLocationList.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedLocations = this.filteredLocationList.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }
}






