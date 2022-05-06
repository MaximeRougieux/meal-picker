import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import debounce from 'lodash/debounce';
interface SearchBarProps {
  setKeyword: (text: string) => void;
}
const SearchBar = ({ setKeyword }: SearchBarProps) => {
  return (
    <TextInput
      onChangeText={debounce(setKeyword, 300)}
      testID="searchbar"
      placeholder="Search"
      style={styles.main}
    />
  );
};

const styles = StyleSheet.create({ main: { fontSize: 18, margin: 6 } });

export default SearchBar;
