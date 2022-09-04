import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Modal } from "react-native";
import { colors } from "../config/constants";
import PropTypes from "prop-types";

const SignUp = () => {
  return (
    <Modal isVisible={true} style={styles.modal}>
      <View style={styles.container}>
        <SafeAreaView>
          <Text>hi, sign up</Text>
        </SafeAreaView>
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

    margin: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
  },
});

export default SignUp;
