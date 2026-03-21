import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "./assets/components/Card";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView } from "react-native";
import TabIcon from "./assets/components/TabIcon";

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
      {/* BOTTOM TAB */}
      <View style={styles.tabBar}>
        <TabIcon icon={require("./assets/img/tabicon1.png")} active />
        <TabIcon icon={require("./assets/img/tabicon2.png")} />
        <TabIcon icon={require("./assets/img/tabicon3.png")} />
        <TabIcon icon={require("./assets/img/tabicon4.png")} />
        <TabIcon icon={require("./assets/img/tabicon5.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 80,
    position: "relative",
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
    fontFamily: "HelveticaNowBold",
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
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 105,
    backgroundColor: "#fff",
    borderRadius: 40,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    // 👇 quan trọng để nổi lên
    elevation: 20, // Android
    zIndex: 999, // iOS

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
