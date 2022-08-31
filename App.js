import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
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

const App = () => {
  return <NavigationContainer></NavigationContainer>;
};

export default App;
