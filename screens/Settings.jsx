import React from "react";
import { StyleSheet, View } from "react-native";
import Cell from "../components/Cell";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";
import { colors } from "../config/constants";

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Erhan"
        subtitle="erhan@erhan.com"
        style={styles.ContactRow}
      />
      <Seperator />
      <Cell
        title="Logout"
        icon="log-out-outline"
        tintColor={colors.red}
        onPress={() => {
          console.log("touched logout");
          console.error("suff broke loose");
          console.warn({ haha: "lol" });
        }}
      />
      <Seperator />
      <Cell
        title="Tell a Friend"
        icon="heart-outline"
        tintColor={colors.pink}
        onPress={() => {
          console.log("touched logout");
          console.error("suff broke loose");
          console.warn({ haha: "lol" });
        }}
      />
      <Seperator />
      <Cell
        title="info"
        icon="information-outline"
        tintColor={colors.red}
        onPress={() => {
          console.log("touched logout");
          console.error("suff broke loose");
          console.warn({ haha: "lol" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContactRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "row",
  },
  title: {
    fontSize: 16,
    marginstart: 16,
    flex: 1,
  },

  iconContainer: {
    width: 32,
    height: 22,
    backgroundColor: "red",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
