import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import Cities from "../screens/Cities"
import SingUp from "../screens/SingUp"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Hotels from "../screens/Hotels"
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile";
import MyReactions from "../screens/MyReactions";
import Shows from "../screens/Shows";
import ItinerariesCity from "../screens/ItinerariesCity";
import CardComponent from "../components/CardComponent";
import DetailsCity from "../screens/DetailsCity";
import DetailsHotel from "../screens/DetailsHotel";
import EditProfile from "../screens/EditProfile"
const Bottom = createBottomTabNavigator()

const Navigator = () => {
  
	return(

		<Bottom.Navigator options={{headerShown: false}}
		 screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cities") {
            iconName = focused ? "globe" : "globe";
          } else if (route.name === "Login") {
            iconName = focused ? "enter" : "enter";
          } else if (route.name === "SignUp") {
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

			<Bottom.Screen name="Home" options={{headerShown: false}}  component={Home}/>
      <Bottom.Screen name="Hotels" options={{headerShown: false}}  component={Hotels}/>
      <Bottom.Screen name="Cities" options={{headerShown: false}}  component={Cities}/>
			<Bottom.Screen name="My Profile" options={{headerShown: false}}  component={ProfileScreen}/>
			<Bottom.Screen name="Login" options={{headerShown: false}} component={Login}/>
			<Bottom.Screen name="SignUp" options={{headerShown: false}} component={SingUp}/>
      <Bottom.Screen name="MyReactions" options={{headerShown: false,tabBarItemStyle: { display: 'none'}}} component={MyReactions}/>
      <Bottom.Screen name="Shows" options={{tabBarItemStyle: { display: 'none'}}} component={Shows}/>
      <Bottom.Screen name="Itineraries" options={{tabBarItemStyle: { display: 'none'}}} component={ItinerariesCity}/>
      <Bottom.Screen name="Comments" options={{tabBarItemStyle: { display: 'none'}}} component={CardComponent}/>
      <Bottom.Screen name="DetailsHotel" options={{headerShown: false,tabBarItemStyle: { display: 'none'}}} component={DetailsHotel}/>
      <Bottom.Screen name="DetailsCity" options={{headerShown: false,tabBarItemStyle: { display: 'none'}}} component={DetailsCity}/>
      <Bottom.Screen name="EditProfile" options={{tabBarItemStyle: { display: 'none'}}} component={EditProfile}/>
		</Bottom.Navigator>

	)
}

export default Navigator