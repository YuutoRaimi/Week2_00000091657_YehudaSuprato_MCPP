import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/images/foto.png")}
        style={styles.image}
      />
      <Text style={styles.name}>Yehuda Suprato</Text>
      <Text style={styles.nim}>00000091657</Text>
      <Image
        source={require("../assets/images/Cute.jpeg")}
        style={styles.image}
      />
      <Text style={styles.name}>Reine Kyoko</Text>
      <Text style={styles.nim}>I Like Purple Color</Text>
      <Image
        source={require("../assets/images/black white.jpeg")}
        style={styles.image}
      />
      <Text style={styles.name}>Ms. Shiro Kyoko</Text>
      <Text style={styles.nim}>My Favorite Food is Ramen</Text>
      <Image
        source={require("../assets/images/miko.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>Sakura Miko</Text>
      <Text style={styles.nim}>Hololive Gen 0</Text>
      <Image
        source={require("../assets/images/Gigi.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>Gigi Murin</Text>
      <Text style={styles.nim}>Hololive Advent</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 50,
  },
  name: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  nim: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#ff00d4",
  },
});
