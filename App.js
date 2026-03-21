import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "./assets/components/Card";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const [fontsLoaded] = useFonts({
    HelveticaNow: require("./assets/fonts/HelveticaNowDisplay-Regular.ttf"),
    HelveticaNowBold: require("./assets/fonts/HelveticaNowDisplay-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.Hello}>Hello 👋🏻</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          style={styles.avatar}
          source={require("./assets/img/avatar.png")}
        ></Image>
      </View>
      {/* Insight */}
      <Text style={styles.insight}>Your Insights</Text>
      <View style={styles.grid}>
        <Card
          icon={require("./assets/img/icon1.png")}
          title="Scan new"
          subtitle="Scanned 483"
          color="#6C63FF"
        />
        <Card
          icon={require("./assets/img/icon2.png")}
          title="Counterfeits"
          subtitle="Counterfeited 32"
          color="#FF8A65"
        />
        <Card
          icon={require("./assets/img/icon3.png")}
          title="Success"
          subtitle="Checkouts 8"
          color="#4DB6AC"
        />
        <Card
          icon={require("./assets/img/icon4.png")}
          title="Directory"
          subtitle="History 26"
          color="#64B5F6"
        />
      </View>
      {/* Eplore */}
      <View style={styles.explore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Image source={require("./assets/img/Arrow.png")}></Image>
      </View>
      {/* Explore item */}
      <View style={styles.product}>
        <Image source={require("./assets/img/pd1.png")}></Image>
        <Image source={require("./assets/img/pd2.png")}></Image>
        <Image source={require("./assets/img/pd3.png")}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 63,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Hello: {
    color: "#363636",
    fontFamily: "HelveticaNowBold",
    fontWeight: "700",
    fontSize: 22,
    letterSpacing: 0.48,
  },

  name: {
    color: "#363636",
    fontFamily: "HelveticaNow",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.42,
    fontWeight: "400",
  },
  avatar: { borderRadius: 66.909 },
  insight: {
    color: "#363636",
    fontFamily: "HelveticaNowBold", // tên bạn load bằng expo-font
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0.54,
    marginTop: 33,
  },
  grid: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  explore: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 31,
  },
  exploreText: {
    fontFamily: "HelveticaNowBold",
    fontWeight: "400",
    fontSize: 18,
  },
  product: {
    marginTop: 31,
    flexDirection: "row",
    gap: 25,
  },
});
