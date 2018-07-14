import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Recipe1', 'a description', 'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
    new Recipe('Recipe2', 'a description', 'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
