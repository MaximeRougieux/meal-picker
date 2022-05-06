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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { RecipeDetails } from 'recipes/screens/RecipeDetails';
import { RecipeList } from 'recipes/screens/RecipeList';
import { RootStackParamsList } from 'utils/navigation/types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#EAEAEA',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen
            name="Home"
            component={RecipeList}
            options={{ headerShown: false }}
          />
          <Screen
            name="Details"
            component={RecipeDetails}
            options={{
              headerTitle: '',
              headerStyle: { backgroundColor: '#EAEAEA' },
            }}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
