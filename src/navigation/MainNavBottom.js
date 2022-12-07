import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import Cities from "../screens/Cities";
import { Ionicons } from "@expo/vector-icons";
import Hotels from "../screens/Hotels";
import SingUp from "../screens/SingUp";
import Home from "../screens/Home";

const Bottom = createBottomTabNavigator();
const Navigator2 = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cities") {
            iconName = focused ? "globe" : "globe";
          } else if (route.name === "Login") {
            iconName = focused ? "enter" : "enter";
          } else if (route.name === "Signup") {
            iconName = focused ? "person-add" : "person-add";
          } else if (route.name === "Logout") {
            iconName = focused ? "exit" : "exit";
          } else if (route.name === "Hotels") {
            iconName = focused ? "globe" : "globe";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1c7cafe6',
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
       <Bottom.Screen
        name="Cities"
        component={Cities}
        options={{ headerShown: false }}
      />
       <Bottom.Screen
        name="Hotels"
        component={Hotels}
        options={{ headerShown: false }}
      />
     
     
       <Bottom.Screen
        name="Signup"
        component={SingUp}
     
      />

    </Bottom.Navigator>
  );
};

export default Navigator2;
