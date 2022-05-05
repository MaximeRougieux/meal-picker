import React from 'react';
import { TextInput } from 'react-native';
import debounce from 'lodash/debounce';
interface SearchBarProps {
  setKeyword: (text: string) => void;
}
const SearchBar = ({ setKeyword }: SearchBarProps) => {
  return (
    <TextInput onChangeText={debounce(setKeyword, 300)} testID="searchbar" />
  );
};

export default SearchBar;
