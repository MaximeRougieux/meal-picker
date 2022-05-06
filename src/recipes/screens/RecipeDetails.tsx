import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { RecipeDetailsProps } from 'utils/navigation/types';
import { Meal } from 'recipes/types/APIMealsResponseData';

interface RecipeInstructionProps {
  item: string;
  index: number;
}

const RecipeInstruction = ({ item, index }: RecipeInstructionProps) => {
  return (
    <View style={styles.instructionContainer}>
      <Text>{`${index + 1}.   `}</Text>
      <Text>{item}</Text>
    </View>
  );
};

const getInstructionsComponents = (meal: Meal) =>
  meal.strInstructions
    .split('\r\n')
    .filter(instruction => instruction)
    .map((item, index) => (
      <RecipeInstruction item={item} index={index} key={index} />
    ));

export const RecipeDetails = ({ route }: RecipeDetailsProps) => {
  const { meal } = route.params;
  return (
    <ScrollView>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.category}>{meal.strCategory}</Text>
        {getInstructionsComponents(meal)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  category: {
    alignSelf: 'flex-end',
    fontSize: 20,
    fontStyle: 'italic',
  },
  container: {
    marginHorizontal: 12,
    marginTop: 16,
  },
  title: {
    color: 'black',
    fontSize: 36,
    fontFamily: 'Helvetica',
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 24,
  },
  instructionContainer: {
    flexDirection: 'row',
    margin: 8,
  },
});
