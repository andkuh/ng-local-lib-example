import { BaseUrlService } from 'ng-primer-web-core';

export class LinerUrlService extends BaseUrlService{
  getBaseUrl(): string{
    return 'https://localhost:4201';
  }
}
