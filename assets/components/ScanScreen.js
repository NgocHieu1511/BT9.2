import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Bottle */}
      <View style={styles.scanArea}>
        <Image
          source={require("../img/scan-bg.png")}
          style={styles.bottle}
          resizeMode="contain"
        />

        {/* Scan corners */}
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />

        {/* Overlay */}
        <View style={styles.overlay} />
      </View>

      {/* Bottom Card */}
      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren’s</Text>
          <Text style={styles.name}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9CBB8",
    paddingTop: 50,
  },

  header: {
    paddingHorizontal: 20,
  },

  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  scanArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bottle: {
    width: 220,
    height: 400,
  },

  overlay: {
    position: "absolute",
    width: "80%",
    height: "35%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 12,
  },

  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "#fff",
  },

  topLeft: {
    top: "25%",
    left: "10%",
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 12,
  },

  topRight: {
    top: "25%",
    right: "10%",
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 12,
  },

  bottomLeft: {
    bottom: "25%",
    left: "10%",
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 12,
  },

  bottomRight: {
    bottom: "25%",
    right: "10%",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    padding: 15,
    borderRadius: 20,
  },

  thumb: {
    width: 40,
    height: 60,
    borderRadius: 6,
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
    backgroundColor: "#5B6CFF",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ScanScreen;
