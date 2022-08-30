import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Chats = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.avatarLabel}>UN</Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.name}>Hi this is the chats screen</Text>
          <Text style={styles.subtitle}>Hi Waiting for dinner</Text>
        </View>
        <Ionicons name="chevron-forward-outline" />
      </TouchableOpacity>
      <View style={styles.serprator} />

      <TouchableOpacity style={styles.row}>
        <View style={styles.textsContainer}>
          <Text style={styles.name}>Hi this is the chats screen</Text>
          <Text style={styles.subtitle}>Hi Waiting for dinner</Text>
        </View>
        <Ionicons name="chevron-forward-outline" />
      </TouchableOpacity>
      <View style={styles.serprator} />

      <TouchableOpacity style={styles.row}>
        <View style={styles.textsContainer}>
          <Text style={styles.name}>Hi this is the chats screen</Text>
          <Text style={styles.subtitle}>Hi Waiting for dinner</Text>
        </View>
        <Ionicons name="chevron-forward-outline" />
      </TouchableOpacity>
      <View style={styles.serprator} />

      <TouchableOpacity style={styles.row}>
        <View style={styles.textsContainer}>
          <Text style={styles.name}>Hi this is the chats screen</Text>
          <Text style={styles.subtitle}>Hi Waiting for dinner</Text>
        </View>
        <Ionicons name="chevron-forward-outline" />
      </TouchableOpacity>
      <View style={styles.serprator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  textsContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: "red",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLabel: {},

  name: {
    fontSize: 16,
  },
  subtitle: {
    marginTop: 2,
    color: "#565656",
  },
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
    marginStart: 16,
  },
});

export default Chats;
