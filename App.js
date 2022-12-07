
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import {NavigationContainer} from "@react-navigation/native"
import Navigator from "./src/navigation/MainNavBottom"
import 'react-native-gesture-handler';
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";




export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Navigator/> */}
       <DrawerNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

