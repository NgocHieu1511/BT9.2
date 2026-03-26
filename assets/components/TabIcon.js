import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

const TabIcon = ({ icon, onPress, isActive, isActive1 }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.icon_wrapper,
          isActive && styles.active_wrapper,
          isActive1 && styles.active_wrapper1,
        ]}
      >
        <Image
          source={icon}
          style={[
            styles.icon,
            isActive && styles.active_icon,
            isActive1 && styles.active_icon1,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: "#999",
  },

  active_icon: {
    tintColor: "#F08F5F",
  },
  active_icon1: {
    tintColor: "#2DC0FF",
  },

  icon_wrapper: {
    padding: 12,
    borderRadius: 11,
  },

  active_wrapper: {
    backgroundColor: "#F6E3DB", // 👈 giống hình bạn gửi
  },
  active_wrapper1: {
    backgroundColor: "#D0EDFBCC", // 👈 giống hình bạn gửi
  },
});

export default TabIcon;
