import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoods(){
    return [
      {"id": 1, "name": "Cheeseburger", "spicy": "yes"},
      {"id": 2, "name": "Beeryaani", "spicy": "yes"},
      {"id": 3, "name": "Kabob Salad", "spicy": "yes"},
      {"id": 4, "name": "Lamb Shank Gyro", "spicy": "yes"}
    ];

  }
}
