import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { RecipeItem } from '../components/RecipeItem';
import useGetChickenMeals from '../usecases/useGetChickenMeals';

interface RecipeListProps {
  keyword: string;
}

export const RecipeList = ({ keyword }: RecipeListProps) => {
  const [loading, error, items] = useGetChickenMeals(keyword);

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator accessibilityHint="loading" />
      ) : error !== null ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : items.length === 0 ? (
        <Text style={styles.errorText}>No meal available</Text>
      ) : (
        items.map(meal => (
          <RecipeItem
            name={meal.strMeal}
            category={meal.strCategory}
            imageUrl={meal.strMealThumb}
            key={meal.idMeal}
          />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    alignSelf: 'center',
  },
});
