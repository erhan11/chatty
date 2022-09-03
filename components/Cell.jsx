import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../config/constants";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Cell = ({ title, icon, tintColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <View
        style={{
          ...styles.iconContainer,
          ...(tintColor ? { backgroundColor: tintColor } : {}),
        }}
      >
        <Ionicons name={icon} size={24} color={"white"} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const { string, func } = PropTypes;
Cell.propTypes = {
  icon: string,
  onPress: func,
  tintColor: string,
  title: string,
};

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  title: {
    fontSize: 16,
    marginstart: 16,
    flex: 1,
  },

  iconContainer: {
    width: 32,
    height: 22,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});

export default Cell;
