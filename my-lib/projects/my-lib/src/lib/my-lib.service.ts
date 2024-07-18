import { Injectable, Inject } from '@angular/core';
import { BaseUrlService } from './services/base-url.service';

@Injectable({providedIn: 'root'})
export class MyLibService {

  constructor(@Inject(BaseUrlService) private baseUrlService: BaseUrlService) { 
    
  }

  getBaseUrl(): string{
    return this.baseUrlService.getBaseUrl();
  }
}
