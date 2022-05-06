import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Meal } from 'recipes/types/APIMealsResponseData';

export type RootStackParamsList = {
  Home: undefined;
  Details: { meal: Meal };
};

export type RecipeListProps = NativeStackScreenProps<
  RootStackParamsList,
  'Home'
>;

export type RecipeDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'Details'
>;
