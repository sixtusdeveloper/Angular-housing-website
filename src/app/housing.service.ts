import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import data from '../data/db.json'; // Import the JSON file directly

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocations: HousingLocation[] = data.locations; // Access the locations array directly

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    return this.housingLocations; // Return the data directly
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    return this.housingLocations.find(location => location.id === id); // Find by ID
  }

  submitApplication(fullName: string, email: string, message: string, terms: boolean) {
    console.log(`Application submitted for ${fullName} with email ${email}, message: "${message}", and terms: ${terms}`);

    const applicationData = {
      fullName,
      email,
      message,
      terms
    };

    localStorage.setItem('applicationData', JSON.stringify(applicationData)); // Store application data in localStorage
  }
}









// import { Injectable } from '@angular/core';
// import { HousingLocation } from './housing-location';

// @Injectable({
//   providedIn: 'root'
// })
// export class HousingService {
//   url = 'http://localhost:3000/locations';

//   constructor() { }

//   async getAllHousingLocations() : Promise<HousingLocation[]> {
//     const data = await fetch(this.url);
//     return await data.json() ?? [];
//   }

//  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined> {
//     const data = await fetch(`${this.url}/${id}`);
//     return await data.json() ?? {};
//   }

//   submitApplication(fullName: string, email: string, message: string, terms: boolean) {
//     console.log(`Application submitted for ${fullName} with email ${email} and message ${message} and terms ${terms}`);

//      // Store the application data in localStorage
//     const applicationData = {
//       fullName,
//       email,
//       message,
//       terms
//     };

//     // Save the application data in localStorage
//     localStorage.setItem('applicationData', JSON.stringify(applicationData));
//   }
// } 
