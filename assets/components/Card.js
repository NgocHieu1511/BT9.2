import { StyleSheet, Text, View, Image } from "react-native";

const Card = ({ icon, title, subtitle, badge }) => {
  return (
    <View style={styles.card}>
      {/* ICON */}
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={icon} />
      </View>

      {/* TITLE + BADGE */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>

        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>

      {/* SUBTITLE */}
      <Text style={styles.sub}>{subtitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#F3F4F8",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    alignItems: "center",
  },

  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  icon: {
    width: 55,
    height: 55,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#363636",
  },

  badge: {
    backgroundColor: "#FF3B30",
    borderRadius: 6,
    paddingHorizontal: 6,
    marginLeft: 6,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },

  sub: {
    fontSize: 12,
    color: "#9A9A9A",
    marginTop: 4,
  },
});
export default Card;
