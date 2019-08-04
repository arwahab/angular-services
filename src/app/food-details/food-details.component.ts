import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  template: `
  <h2>Food Details</h2>
  <ul *ngFor="let food of foods">
    <li>{{food.id}}. {{food.name}} - {{food.spicy}}</li>
  </ul>
`,
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  public foods = [];

  constructor(private _foodService: FoodService) { }

  ngOnInit() {
    this.foods = this._foodService.getFoods();
  }

}
