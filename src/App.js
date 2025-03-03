import { StyleSheet, FlatList, View } from "react-native";
import { useState } from "react";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  //arama kısım
  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });

    setList(filteredList);
  };
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator} //yukarıda ve aşağıda çizgiyok
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  seperator: {
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
});
