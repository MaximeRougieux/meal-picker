import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface RecipeProps {
  name: string;
  imageUrl: string;
  category: string;
}

export const RecipeItem = ({ name, imageUrl, category }: RecipeProps) => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    height: 200,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    height: '100%',
  },
  title: {
    fontSize: 24,
  },
  categoryText: {
    fontSize: 12,
  },
});
