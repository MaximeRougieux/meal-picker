/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
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
    margin: 8,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Text style={styles.title}>Welcome to Meal Picker</Text>
        <RecipeList />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 16,
    fontSize: 36,
  },
});

export default App;
