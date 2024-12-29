import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      detail works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
      
    
}
}
