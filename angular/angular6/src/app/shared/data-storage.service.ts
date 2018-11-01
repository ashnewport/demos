import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://udemy-ng-http-d080f.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://udemy-ng-http-d080f.firebaseio.com/recipes.json').subscribe(
      (response: Recipe[]) => {
        const recipes = response;
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
