import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import credentials from '../../assets/firebase-credentials';

@Injectable()
export class DataStorageService {
   private node = '/recipes.json';

   constructor(
      private http: HttpClient,
      private recipeService: RecipeService,
      private authService: AuthService
   ) { }

   storeRecipes() {
      const token = this.authService.getToken();
      const httpParams = new HttpParams().append('auth', token);
      this.http.put(
         credentials.databaseURL + this.node,
         this.recipeService.getRecipes(), { 'params': httpParams }
      ).subscribe(
         (response: Response) => {
            // TODO: if error...
         }
      );

   }

   getRecipes() {
      const token = this.authService.getToken();
      const httpParams = new HttpParams().append('auth', token);
      this.http.get<Recipe[]>(credentials.databaseURL + this.node, { params: httpParams })
         .pipe(map(
            (recipes) => {
               for (const recipe of recipes) {
                  if (!recipe['ingredients']) {
                     recipe['ingredients'] = [];
                  }
               }
               return recipes;
            }
         ))
         .subscribe(
            (recipes: Recipe[]) => {
               this.recipeService.saveRecipes(recipes);
            }
         );
   }
}
