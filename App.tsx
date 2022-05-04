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
import {SafeAreaView, StyleProp, useColorScheme, ViewStyle} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Carre} from './src/playground/components/Carre';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Carre />
    </SafeAreaView>
  );
};

export default App;
