import React from "react";
import { View, StyleSheet } from "react-native";

const Seperator = () => {
  return <View style={styles.serprator} />;
};

const styles = StyleSheet.create({
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
    marginStart: 88,
  },
});

export default Seperator;
