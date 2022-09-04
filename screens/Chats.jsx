import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";
import PropTypes from "prop-types";

const Chats = ({ navigation, route }) => {
  // navigation.navigate("SignUp");
  console.log(route);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // do something
      if (!route.params?.isLoggedIn) {
        navigation.navigate("SignUp");
      }
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView>
      <ContactRow
        name="Erhan Ersoy"
        subtitle="React Course"
        onPress={() => {
          alert("Hi Erhan");
        }}
      />
      <Seperator />
      <ContactRow
        name="Someone Else"
        subtitle="someoneelses subtitle"
        onPress={() => {
          alert("Hi someoneelse");
        }}
      />
      <Seperator />
    </SafeAreaView>
  );
};
const { func, shape, bool: boolean } = PropTypes;
Chats.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  route: shape({
    params: shape({ isLoggedIn: boolean }),
  }),
};
export default Chats;
