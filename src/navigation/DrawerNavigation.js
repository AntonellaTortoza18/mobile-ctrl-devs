import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cities from "../screens/Cities";
import ItinerariesCity from "../screens/ItinerariesCity";
import SingUp from "../screens/SingUp";
import Hotels from "../screens/Hotels";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Shows from "../screens/Shows";
import CardComponent from "../components/CardComponent";
import DetailsHotel from "../screens/DetailsHotel";
import DetailsCity from "../screens/DetailsCity";
import ProfileScreen from "../screens/Profile";
import MyReactions from "../screens/MyReactions";
import InputEdit from "../components/InputEdit";



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
        name="My Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="My Reactions"
        options={{ headerShown: false }}
        component={MyReactions}
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
        name="Cities"
        options={{ headerShown: false }}
        component={Cities}
      />
      <Drawer.Screen
        name="Itineraries"
        options={{ headerShown: false }}
        component={ItinerariesCity}
      />
      <Drawer.Screen name="SignUp" component={SingUp} />
      <Drawer.Screen
        name="Login"
        component={Login}
      />
       <Drawer.Screen
        name="Comments"
        options={{ headerShown: false }}
        component={CardComponent}
      />
        <Drawer.Screen
        name="DetailsHotel"
        options={{ headerShown: false }}
        component={DetailsHotel}
      />
        <Drawer.Screen
        name="DetailsCity"
        options={{ headerShown: false }}
        component={DetailsCity}
      />
       <Drawer.Screen
        name="InputEdit"
        options={{ headerShown: false }}
        component={InputEdit}
      />
      
    </Drawer.Navigator>
  );
}
