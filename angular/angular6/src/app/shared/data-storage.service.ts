import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put(`https://udemy-ng-http-d080f.firebaseio.com/recipes.json?auth=${token}`, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get(`https://udemy-ng-http-d080f.firebaseio.com/recipes.json?auth=${token}`).pipe(
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
