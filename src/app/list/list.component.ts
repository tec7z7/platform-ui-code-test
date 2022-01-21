import { Component, OnInit } from '@angular/core';
import { Provider } from '../interfaces/provider.interface';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders: Provider[] = [];
  public unselectedProviders: Provider[] = [];

  constructor(
    private providerService: ProviderService
  ) { }

  ngOnInit() {
    const allProviders = this.providerService.getProviders();
    const savedProviderIds: string[] = JSON.parse(localStorage.getItem('savedProviderIds')) || [];
    if (savedProviderIds.length > 0) {
      allProviders.forEach((provider: Provider) => {
        savedProviderIds.includes(provider.id) ? this.selectedProviders.push(provider) : this.unselectedProviders.push(provider);
      });
    } else {
      this.unselectedProviders = allProviders;
    }
  }

  public selectProvider(provider: Provider): void {
    this.saveProvider(provider.id);
    this.selectedProviders.push(provider);
    this.unselectedProviders = this.unselectedProviders.filter((unselectedProvider: Provider) => unselectedProvider.id !== provider.id);
  }

  public removeProvider(provider: Provider): void {
    this.removeSavedProvider(provider.id);
    this.unselectedProviders.push(provider);
    this.selectedProviders = this.selectedProviders.filter((selectedProvider: Provider) => selectedProvider.id !== provider.id);
  }

  private saveProvider(providerId: string): void {
    const savedProviders = JSON.parse(localStorage.getItem('savedProviderIds')) || [];
    savedProviders.push(providerId);
    localStorage.setItem('savedProviderIds', JSON.stringify(savedProviders));
  }

  private removeSavedProvider(providerId: string): void {
    let savedProviders = JSON.parse(localStorage.getItem('savedProviderIds')) || [];
    savedProviders = savedProviders.filter((id: string) => id !== providerId);
    localStorage.setItem('savedProviderIds', JSON.stringify(savedProviders));
  }
}
