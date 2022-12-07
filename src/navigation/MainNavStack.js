import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from "react"
import Cities from "../screens/Cities"
import SingUp from "../screens/SingUp"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Hotels from "../screens/Hotels"


const Stack = createNativeStackNavigator()

const Navigator = () => {
	return(
		<Stack.Navigator options={{headerShown: false}}>
			<Stack.Screen name="home" options={{headerShown: false}}  component={Home}/>
			<Stack.Screen name="hotels" options={{headerShown: false}}  component={Hotels}/>
			<Stack.Screen name="cities" options={{headerShown: false}}  component={Cities}/>
			<Stack.Screen name="login" options={{headerShown: false}} component={Login}/>
			<Stack.Screen name="signup" options={{headerShown: false}} component={SingUp}/>
		</Stack.Navigator>
	)
}

export default Navigator