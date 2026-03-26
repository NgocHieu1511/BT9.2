import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import Card from "./Card";

import TabIcon from "./TabIcon";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loaded, error] = useFonts({
    HelveticaNowDisplay: require("../fonts/HelveticaNowDisplay.otf"),
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
          source={require("../img/avatar.png")}
        ></Image>
      </View>
      {/* Insight */}
      <Text style={styles.insight}>Your Insights</Text>
      <View style={styles.grid}>
        <Card
          icon={require("../img/icon1.png")}
          title="Scan new"
          subtitle="Scanned 483"
        />
        <Card
          icon={require("../img/icon2.png")}
          title="Counterfeits"
          subtitle="Counterfeited 32"
        />
        <Card
          icon={require("../img/icon3.png")}
          title="Success"
          subtitle="Checkouts 8"
        />
        <Card
          icon={require("../img/icon4.png")}
          title="Directory"
          subtitle="History 26"
        />
      </View>
      {/* Eplore */}
      <View style={styles.explore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Image source={require("../img/Arrow.png")}></Image>
      </View>

      <View style={styles.product}>
        <Image source={require("../img/pd1.png")}></Image>
        <Image source={require("../img/pd2.png")}></Image>
        <Image source={require("../img/pd3.png")}></Image>
      </View>

      <View style={styles.tabBar}>
        <TabIcon icon={require("../img/home.png")} isActive1={true} />
        <TabIcon icon={require("../img/tabicon2.png")} />

        <TabIcon
          onPress={() => navigation.navigate("Scan")}
          icon={require("../img/tabicon3.png")}
        />

        <TabIcon icon={require("../img/tabicon4.png")} />

        <TabIcon
          onPress={() => navigation.navigate("Cart")}
          icon={require("../img/tabicon5.png")}
        />
      </View>
    </View>
  );
};
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
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: 0.48,
  },

  name: {
    color: "#363636",

    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.42,
    fontWeight: 400,
  },
  avatar: { borderRadius: 66.909 },
  insight: {
    color: "#363636",
    fontFamily: "HelveticaNowBold",
    fontSize: 18,
    fontWeight: 400,
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
    fontWeight: 400,
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

    elevation: 20,
    zIndex: 999,

    shadowColor: "#000",

    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
export default HomeScreen;
