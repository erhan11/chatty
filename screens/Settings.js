import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContactRow from "../components/ContactRow";

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Erhan"
        subtitle="erhan@erhan.com"
        style={styles.ContactRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContactRow: {
    backgroundColor: "white",
  },
});

export default Settings;
