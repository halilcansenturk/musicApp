import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBar.styles";

const SearchBar = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={onSearch} />
    </View>
  );
};
export default SearchBar;
