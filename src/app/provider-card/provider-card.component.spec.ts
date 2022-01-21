import { Provider } from '../interfaces/provider.interface';
import { ProviderCardComponent } from './provider-card.component';

describe('ProviderCardComponent', () => {
  let component: ProviderCardComponent;
  const selectedProvider: Provider = {
    id: '1',
    name: 'John',
    address: '123 Greenway Blvd',
    phone: '8991234321',
    specialty: 'Pediatrician',
    imagePath: '/assets/doctor2.png'
  };

  beforeEach(() => {
    component = new ProviderCardComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selecting a provider', () => {
    it('should emit selectedProvider when a provider is selected and selectedList is false', () => {
      const selectedProviderSpy = spyOn(component.selectedProvider, 'emit');
      component.selectedList = false;
      component.selectProvider(selectedProvider);
      expect(selectedProviderSpy).toHaveBeenCalled();
    });

    it('should not emit selectedProvider when a provider is selected and selectedList is true', () => {
      const selectedProviderSpy = spyOn(component.selectedProvider, 'emit');
      component.selectedList = true;
      component.selectProvider(selectedProvider);
      expect(selectedProviderSpy).not.toHaveBeenCalled();
    });
  });

  describe('unselecting a provider', () => {
    it('should emit unselectedProvider when a provider is unselected', () => {
      const unselectedProviderSpy = spyOn(component.unselectedProvider, 'emit');
      component.removeProvider(selectedProvider);
      expect(unselectedProviderSpy).toHaveBeenCalled();
    });
  });

});
