import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./config/constants";

const { Navigator, Screen } = createBottomTabNavigator();

const TabsScreen = () => (
  <Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Chats") {
          iconName = focused ? "chatbubbles" : "chatbubbles-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "settings-outline";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },

      tabBarActiveTintColor: colors.primary,
    })}
  >
    <Screen name="Chats" component={Chats} />
    <Screen name="Settings" component={Settings} />
  </Navigator>
);

const MainStack = createStackNavigator();

const SettingsStack = createStackNavigator();

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen title="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const ChatScreen = () => {
  return <ChatStack.Screen name="Chats" component={Chats} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Tabs" component={TabsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
