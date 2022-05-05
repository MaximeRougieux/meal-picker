import React from 'react';
import { ScrollView } from 'react-native';
import { RecipeItem } from '../components/RecipeItem';
import recipes from '../mock.json';
export const RecipeList = () => {
  return (
    <ScrollView>
      {recipes.meals.map(meal => (
        <RecipeItem
          name={meal.strMeal}
          category={meal.strCategory}
          imageUrl={meal.strMealThumb}
          key={meal.idMeal}
        />
      ))}
    </ScrollView>
  );
};
