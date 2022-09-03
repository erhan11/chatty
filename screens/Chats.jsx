import React from "react";
import { SafeAreaView } from "react-native";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";

const Chats = () => {
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

export default Chats;
