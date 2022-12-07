import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cities from "../screens/Cities";
import ItinerariesCity from "../screens/ItinerariesCity";
import Navigator from "./MainNavBottom"
import navigationStrings from '../navigationStrings'
import SingUp from "../screens/SingUp";

const Drawer = createDrawerNavigator()
export function DrawerNavigation() {
    return (
        <Drawer.Navigator>
        
            <Drawer.Screen  name={navigationStrings.CITIES} options={{headerShown: false}} component={Cities  }/>
            <Drawer.Screen name={navigationStrings.HOME} options={{headerShown: false}} component={ItinerariesCity }/>
            <Drawer.Screen name={navigationStrings.ITINERARIES} options={{headerShown: false}} component={ItinerariesCity }/>
            <Drawer.Screen name="SingUp"  component={SingUp  }/>
        </Drawer.Navigator>
    )
}