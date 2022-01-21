import { Provider } from '../interfaces/provider.interface';
import { ProviderService } from './provider.service';

describe('ProviderService', () => {
  let service: ProviderService;

  beforeEach(() => {
    service = new ProviderService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getting all providers', () => {
    it('should return an array of all providers', () => {
      const providers: Provider[] = service.getProviders();
      expect(providers.length).toEqual(4);
    });
  });

});
