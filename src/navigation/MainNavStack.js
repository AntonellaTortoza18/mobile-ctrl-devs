import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from "react"
import Cities from "../screens/Cities"
import SingUp from "../screens/SingUp"
import ItinerariesCity from "../screens/ItinerariesCity"

const Stack = createNativeStackNavigator()

const Navigator = () => {
	return(
		<Stack.Navigator options={{headerShown: false}}>
			{/* <Stack.Screen name="homeStack"  options={{headerShown: false}} /> */}
			<Stack.Screen name="itineraries" options={{headerShown: false}}  component={ItinerariesCity}/>
			<Stack.Screen name="cities" options={{headerShown: false}}  component={Cities}/>
		
			{/* <Stack.Screen name="loginStack" /> */}
			<Stack.Screen name="signup" options={{headerShown: false}} component={SingUp}/>
		</Stack.Navigator>
	)
}

export default Navigator