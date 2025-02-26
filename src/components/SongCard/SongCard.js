import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SongCard.style";

const SongCard = ({ song }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imageUrl }} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.infoContainer}>
            <Text>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>

          {/* kısa yollu koşullu ifade */}
          {song.isSoldOut && (
            <View style={styles.soldoutContainer}>
              <Text style={styles.soldoutTitle}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
