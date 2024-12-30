import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

 async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(fullName: string, email: string, message: string, terms: boolean) {
    console.log(`Application submitted for ${fullName} with email ${email} and message ${message} and terms ${terms}`);

     // Store the application data in localStorage
    const applicationData = {
      fullName,
      email,
      message,
      terms
    };

    // Save the application data in localStorage
    localStorage.setItem('applicationData', JSON.stringify(applicationData));
  }
} 
