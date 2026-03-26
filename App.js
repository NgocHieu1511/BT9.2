import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

import HomeScreen from "./assets/components/HomeScreen";
import ScanScreen from "./assets/components/ScanScreen";
import CartScreen from "./assets/components/CartScreen";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Cart: CartScreen,
    Scan: ScanScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
