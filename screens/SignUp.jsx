import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  TextInput,
} from "react-native";
import { colors } from "../config/constants";
import PropTypes from "prop-types";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <Modal isVisible={true} style={styles.modal}>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Create new account</Text>
            <TextInput style={styles.input} placeholder="Enter your name" />
            <TextInput style={styles.input} placeholder="Enter your email" />
            <TextInput style={styles.input} placeholder="Enter your password" />
          </View>
        </SafeAreaView>
        <View style={styles.buttonsContainer}>
          <Button title="Sign In" varient="secondary" />
          <Button title="Sign Up" varient="primary" />
        </View>
      </View>
    </Modal>
  );
};

const { object } = PropTypes;
SignUp.propTypes = {
  style: object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "800",
  },
  contentContainer: { padding: 16 },

  input: {
    backgroundColor: "white",
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    paddingHorizontal: 16,
  },

  buttonLabel: {
    color: "white",
    fontSize: 18,
  },
});

export default SignUp;
