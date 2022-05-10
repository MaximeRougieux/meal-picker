export interface APIMealResponseData {
  meals: Meal[];
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
}
