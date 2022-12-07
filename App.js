import Home from "./src/screens/Home";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Hotels from "./src/screens/Hotels";
import Shows from "./src/screens/Shows";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <Provider  store={store}>
    <View>
        {/*  <Hotels></Hotels> */}  
       {/* <Home></Home> */} 
        {/* <Shows></Shows> */}  
         <Login></Login> 
    </View>
    </Provider>
    
  );
}


