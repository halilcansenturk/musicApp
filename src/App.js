import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, FlatList, View } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";

export default function App() {
  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={music_data}
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
