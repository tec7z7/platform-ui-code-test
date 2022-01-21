import { Injectable } from '@angular/core';
import { Provider } from '../interfaces/provider.interface';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  constructor() { }

  private providers: Provider[] = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321',
      specialty: 'Pediatrician',
      imagePath: '/assets/doctor2.png'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903',
      specialty: 'Neurologist',
      imagePath: '/assets/doctor1.png'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384',
      specialty: 'Psychiatrist',
      imagePath: '/assets/doctor2.png'
    },
    {
      id: '4',
      name: 'Dawn',
      address: '20 E 5th St',
      phone: '1112223334',
      specialty: 'Dermatologist',
      imagePath: '/assets/doctor1.png'
    }
  ];

  public getProviders(): Provider[] {
    return this.providers;
  }

}
