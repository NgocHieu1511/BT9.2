import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabIcon from "./TabIcon";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const CartItem = ({ image, title, price, qty, author }) => {
  const navigation = useNavigation();
  const [loaded, error] = useFonts({
    HelveticaNowDisplay: require("../fonts/HelveticaNowDisplay.otf"),
  });
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.itemImage} />

      <View style={{ flex: 1 }}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.price}>₹ {price}</Text>
      </View>

      <View style={styles.qtyBox}>
        <Ionicons name="remove" size={18} color="#F08F5F" />
        <Text style={styles.qtyText}>{qty}</Text>
        <Ionicons name="add" size={18} color="#F08F5F" />
      </View>
    </View>
  );
};

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Ionicons name="chevron-back" size={22} color="#F08F5F" />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>Your Cart 👍🏻</Text>
      {/* Items */}
      <CartItem
        image={require("../img/pd1.png")}
        title="Orange Juice"
        price="149"
        qty="2"
        author="Lauren’s"
      />

      <CartItem
        image={require("../img/pd2.png")}
        title="Skimmed Milk"
        price="129"
        qty="2"
        author="Baskin’s"
      />

      <CartItem
        image={require("../img/pd3.png")}
        title="Aloe Vera Lotion"
        price="1249"
        qty="2"
        author="Marley’s"
      />

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ 1,527</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
      <View style={styles.tabBar}>
        <TabIcon
          onPress={() => navigation.navigate("Home")}
          icon={require("../img/home.png")}
        />
        <TabIcon icon={require("../img/tabicon2.png")} />

        <TabIcon
          onPress={() => navigation.navigate("Scan")}
          icon={require("../img/tabicon3.png")}
        />

        <TabIcon icon={require("../img/tabicon4.png")} />

        <TabIcon icon={require("../img/tabicon5.png")} isActive={true} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  author: {
    color: "#B1B1B1",
    fontFamily: "HelveticaNowDisplay", // lưu ý tên font
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.3,
  },

  backBtn: {
    padding: 20,
    backgroundColor: "#F8F8FB",
    borderRadius: 9,
    marginTop: 50,
    alignSelf: "flex-start",
    marginBottom: 34,
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 34,
    color: "#494949",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F8F8FB",
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: "center",
  },

  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 11,
  },

  itemTitle: {
    fontSize: 12,
    color: "#777",
    fontWeight: 400,
    color: "#494949",
  },

  price: {
    color: "#ff7f50",
    fontWeight: "bold",
    marginTop: 4,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  qtyBtn: {
    fontSize: 16,
    paddingHorizontal: 6,
  },

  qtyText: {
    marginHorizontal: 6,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  totalPrice: {
    fontSize: 16,
    color: "#ff7f50",
    fontWeight: "bold",
  },

  checkoutBtn: {
    backgroundColor: "#ff8c5a",
    padding: 16,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
  },

  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  cartActive: {
    backgroundColor: "#F6E3DB",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 11,
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

export default CartScreen;
