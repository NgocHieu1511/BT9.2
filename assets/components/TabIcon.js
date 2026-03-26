import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

const TabIcon = ({ icon, active = false, onPress }) => {
  const isActive = active === true || active === "true";

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.icon_wrapper,
          { backgroundColor: isActive ? "#D0EDFBCC" : "#fff" },
        ]}
      >
        <Image source={icon} style={styles.icon} />
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
