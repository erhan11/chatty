import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const Button = ({ title, varient }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: varient === "primary" ? "black" : "transparent",
          //          paddingHorizontal: varient === "primary" ? 16 : 0,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonLabel,
          { color: varient === "primary" ? "white" : "black" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const { string } = PropTypes;
Button.propTypes = {
  title: string,
  varient: string,
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 6,
  },

  buttonLabel: {
    fontSize: 18,
  },
});

export default Button;
