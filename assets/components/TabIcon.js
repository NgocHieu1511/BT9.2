import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

const TabIcon = ({ icon, active }) => {
  return (
    <TouchableOpacity>
      <View style={styles.icon_wrapper}>
        <Image
          source={icon}
          style={[styles.icon, { tintColor: active ? "#4da6ff" : "#aaa" }]}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  icon_wrapper: {
    padding: 13,
    borderRadius: 11,
    marginBottom: 47,
    marginTop: 24,
  },
});
export default TabIcon;
