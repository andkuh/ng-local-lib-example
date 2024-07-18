import { Injectable } from '@angular/core';

export abstract class BaseUrlService {

  constructor() { }

  public abstract getBaseUrl():string;
}