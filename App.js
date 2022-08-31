import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaView, Text } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>hello, homescreen</Text>
    </SafeAreaView>
  );
};

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>hi settings page</Text>
    </SafeAreaView>
  );
};

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Settings" component={Settings} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
