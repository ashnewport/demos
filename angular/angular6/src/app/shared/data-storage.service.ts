import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://udemy-ng-http-d080f.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://udemy-ng-http-d080f.firebaseio.com/recipes.json').pipe(
      map(
        (recipes: Recipe[]) => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              console.log(recipe);
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      )
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
