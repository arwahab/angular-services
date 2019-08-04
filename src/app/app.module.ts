import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodService } from './food.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
