import { BaseUrlService } from 'my-lib';

export class LinerUrlService extends BaseUrlService{
  getBaseUrl(): string{
    return 'https://localhost:4201';
  }
}
