import { StyleSheet, Text, View, Image } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text>Cart</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EADFCF",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  bottle: {
    width: 220,
    height: 400,
  },

  scanFrame: {
    position: "absolute",
    width: 260,
    height: 360,
  },

  corner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "#fff",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 10,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 10,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 10,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 10,
  },

  card: {
    position: "absolute",
    bottom: 40,
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  thumb: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },

  brand: {
    fontSize: 12,
    color: "#999",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#4C6EF5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartScreen;
