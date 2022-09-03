import React from "react";
import { StyleSheet, View } from "react-native";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";
import { colors } from "../config/constants";
import Cell from "../components/Cell";

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
        icon="chevron-forward-outline"
        tintColor={colors.red}
        onPress={() => {
          alert("dont touch again");
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
