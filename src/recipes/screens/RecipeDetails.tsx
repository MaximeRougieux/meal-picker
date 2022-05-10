import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { RecipeDetailsProps } from 'utils/navigation/types';
import { Meal } from 'recipes/types/APIMealsResponseData';

interface RecipeInstructionProps {
  item: string;
  index: number;
}

interface InstructionsProps {
  meal: Meal;
}

const RecipeInstruction = ({ item, index }: RecipeInstructionProps) => {
  return (
    <View style={styles.instructionContainer}>
      <Text style={styles.stepNumber}>{`${index + 1}.`}</Text>
      <Text style={styles.instructionDetails}>{item}</Text>
    </View>
  );
};

const Instructions = ({ meal }: InstructionsProps) => {
  const textInstructions = meal.strInstructions
    .split('\r\n')
    .filter(instruction => instruction);

  return (
    <>
      {textInstructions.map((item, index) => (
        <RecipeInstruction item={item} index={index} key={index} />
      ))}
    </>
  );
};
export const RecipeDetails = ({ route }: RecipeDetailsProps) => {
  const { meal } = route.params;
  return (
    <ScrollView>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.category}>{meal.strCategory}</Text>
        <Instructions meal={meal} />
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
  stepNumber: {
    justifyContent: 'flex-end',
    width: 32,
  },
  instructionDetails: {
    flex: 1,
  },
});
