import React, { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RecipeListProps } from '../../utils/navigation/types';
import { RecipeItem } from '../components/RecipeItem';
import SearchBar from '../components/SearchBar';
import useGetMeals from '../usecases/useGetMeals';

export const RecipeList = ({ navigation }: RecipeListProps) => {
  const [keyword, setKeyword] = useState('');
  const { loading, error, items } = useGetMeals(keyword);

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Welcome to Meal Picker</Text>
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
            <TouchableOpacity
              key={meal.idMeal}
              onPress={() => navigation.navigate('Details', { meal: meal })}>
              <RecipeItem
                name={meal.strMeal}
                category={meal.strCategory}
                imageUrl={meal.strMealThumb}
              />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 8,
  },
  errorText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  title: {
    marginVertical: 16,
    fontSize: 36,
  },
});
