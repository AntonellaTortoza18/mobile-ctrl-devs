import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import Cities from "../screens/Cities";
import { Ionicons } from "@expo/vector-icons";
import ItinerariesCity from "../screens/ItinerariesCity";
import MainStack from "./MainNavStack";
import SingUp from "../screens/SingUp";

const Bottom = createBottomTabNavigator();
const Navigator2 = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "cities") {
            iconName = focused ? "globe" : "globe";
          } else if (route.name === "login") {
            iconName = focused ? "enter" : "enter";
          } else if (route.name === "signup") {
            iconName = focused ? "person-add" : "person-add";
          } else if (route.name === "logout") {
            iconName = focused ? "exit" : "exit";
          } else if (route.name === "itineraries") {
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
        name="home"
        component={MainStack}
        options={{ headerShown: false }}
      />
       <Bottom.Screen
        name="cities"
        component={Cities}
        options={{ headerShown: false }}
      />
       <Bottom.Screen
        name="itineraries"
        component={ItinerariesCity}
        options={{ headerShown: false }}
      />
     
     
       <Bottom.Screen
        name="signup"
        component={SingUp}
        options={{ headerShown: false }}
      />

    </Bottom.Navigator>
  );
};

export default Navigator2;
