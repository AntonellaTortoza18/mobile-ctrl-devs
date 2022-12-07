import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screens/Cities";
import ItinerariesCity from "../screens/ItinerariesCity";
import Navigator from "./MainNavBottom";
import navigationStrings from "../navigationStrings";
import SingUp from "../screens/SingUp";
import Hotels from "../screens/Hotels";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Shows from "../screens/Shows";
const Drawer = createDrawerNavigator();
export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Drawer.Screen
        name="Shows"
        options={{ headerShown: false }}
        component={Shows}
      />
   
      <Drawer.Screen
        name="Hotels"
        options={{ headerShown: false }}
        component={Hotels}
      />
      <Drawer.Screen
        name={navigationStrings.CITIES}
        options={{ headerShown: false }}
        component={Cities}
      />
      <Drawer.Screen
        name={navigationStrings.ITINERARIES}
        options={{ headerShown: false }}
        component={ItinerariesCity}
      />
      <Drawer.Screen name="SignUp" component={SingUp} />
      <Drawer.Screen
        name="Login"
       
        component={Login}
      />
    </Drawer.Navigator>
  );
}
