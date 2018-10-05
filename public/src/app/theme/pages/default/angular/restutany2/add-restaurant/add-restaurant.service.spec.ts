import { TestBed, inject } from '@angular/core/testing';

import { AddRestaurantService } from './add-restaurant.service';

describe('AddRestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRestaurantService]
    });
  });

  it('should be created', inject([AddRestaurantService], (service: AddRestaurantService) => {
    expect(service).toBeTruthy();
  }));
});
