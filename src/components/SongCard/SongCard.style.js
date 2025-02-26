import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: 27,
  },
  infoContainer: { flexDirection: "row", flex: 1, alignItems: "center" },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: "gray",
  },

  content_container: { flexDirection: "row" },

  soldoutContainer: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  soldoutTitle: {
    color: "red",
  },
});
