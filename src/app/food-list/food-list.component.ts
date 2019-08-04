import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  template: `
    <h2>Food List</h2>
    <ul *ngFor="let food of foods">
      <li>{{food.name}}</li>
    </ul>
  `,
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foods = [];

  constructor(private _foodService: FoodService) { }

  ngOnInit() {
    this._foodService.getFoods()
        .subscribe(data => this.foods = data);
  }

}
