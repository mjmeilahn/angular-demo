import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { 
    EventEmitter, 
    Injectable 
} from '@angular/core';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe(
            'Salsa Picante', 
            'Mmmmm that\'s good salsa!', 
            'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg',
            [
                new Ingredient('Tomatoes', 3),
                new Ingredient('Garlic', 1)
            ]
        ),
        new Recipe(
            'Chilli Burger', 
            'Howdy there, sloppy Joe!', 
            'https://www.honestburgers.co.uk/wp-content/uploads/2017/09/Chilli.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Lettuce', 2)
            ]
        )
    ];

    constructor(private shoppingListService : ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}