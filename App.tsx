/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  ViewStyle,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RecipeList } from './src/recipes/screens/RecipeList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={styles.title}>Welcome to Meal Picker</Text>
      <RecipeList keyword="Chicken" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 8,
    fontSize: 36,
  },
});

export default App;
