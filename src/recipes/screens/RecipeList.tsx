import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { RecipeItem } from '../components/RecipeItem';
import SearchBar from '../components/SearchBar';
import useGetMeals from '../usecases/useGetMeals';

export const RecipeList = () => {
  const [keyword, setKeyword] = useState('');
  const { loading, error, items } = useGetMeals(keyword);

  return (
    <>
      <SearchBar setKeyword={setKeyword} />
      <ScrollView>
        {loading ? (
          <ActivityIndicator testID="loading" />
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
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    alignSelf: 'center',
  },
});
