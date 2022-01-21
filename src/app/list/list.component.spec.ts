import { ProviderService } from '../services/provider.service';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  const providerService: ProviderService = new ProviderService();

  beforeEach(() => {
    component = new ListComponent(providerService);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 4', () => {
      expect(component.unselectedProviders.length).toEqual(4);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });

    it('should update the selected providers list when a provider is selected', () => {
      const selectedProvider = component.unselectedProviders[2];
      component.selectProvider(selectedProvider);
      expect(component.selectedProviders.length).toEqual(1);
    });

    it('should store the selected provider in localStorage', () => {
      const selectedProvider = component.selectedProviders[0];
      const savedProviderIds = JSON.parse(localStorage.getItem('savedProviderIds'));
      expect(savedProviderIds[0]).toEqual(selectedProvider.id);
    });

    it('should remove the selected provider from the unselected providers list', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });
  });

  describe('unselected providers', () => {
    it('should remove the unselected provider from the selected providers list', () => {
      const unselectedProvider = component.selectedProviders[0];
      component.removeProvider(unselectedProvider);
      expect(component.selectedProviders.length).toEqual(0);
    });

    it('should remove the unselected provider id from localStorage', () => {
      const savedProviderIds = JSON.parse(localStorage.getItem('savedProviderIds'));
      expect(savedProviderIds.length).toEqual(0);
    });

    it('should add the unselected provider back to the unselected providers list', () => {
      expect(component.unselectedProviders.length).toEqual(4);
    });
  });

});
