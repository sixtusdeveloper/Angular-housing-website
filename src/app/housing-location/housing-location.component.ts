import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation} from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" alt="Exterior photo of {{housingLocation.name}}" [src]="housingLocation.photo"/>
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-description">
        {{ housingLocation.description | slice:0:80 }}{{ housingLocation.description.length > 100 ? '...' : '' }}
      </p>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <a [routerLink]="['/detail', housingLocation.id]">View Details</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
