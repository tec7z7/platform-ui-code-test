import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Provider } from '../interfaces/provider.interface';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css']
})
export class ProviderCardComponent {
  @Input() providerList: Provider[];
  @Input() selectedList: boolean;
  @Output() selectedProvider = new EventEmitter<Provider>();
  @Output() unselectedProvider = new EventEmitter<Provider>();

  constructor() { }

  public trackByFunction(index: number, provider: Provider): string {
    return provider.id;
  }

  public selectProvider(provider: Provider): void {
    if (!this.selectedList) {
      this.selectedProvider.emit(provider);
    }
  }

  public removeProvider(provider: Provider): void {
      this.unselectedProvider.emit(provider);
  }

}
