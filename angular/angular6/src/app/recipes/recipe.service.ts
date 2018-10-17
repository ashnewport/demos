import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://picsum.photos/g/300'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://picsum.photos/g/300')
  ];

  getRecipes() {
    return this.recipes.slice(); // return new array instead of reference to existing
  }
}
