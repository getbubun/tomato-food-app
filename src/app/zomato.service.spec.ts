/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZomatoService } from './zomato.service';

describe('Service: Zomato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZomatoService]
    });
  });

  it('should ...', inject([ZomatoService], (service: ZomatoService) => {
    expect(service).toBeTruthy();
  }));
});
