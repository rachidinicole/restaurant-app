import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "./Screens/Restaurant/Cart";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import LoginScreen from "./Screens/Restaurant/LoginScreen";

import RegisterScreen from "./Screens/Restaurant/RegisterScreen";

const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Login" screenOptions={{headerShown:false  }}>
 <HomeStack.Screen name="Login" component={LoginScreen} />
  <HomeStack.Screen name="Register" component={RegisterScreen} />
    <HomeStack.Screen  name="welcomeScreen" component={WelcomeScreen} /> 
        <HomeStack.Screen name="Home" component={HomeScreen} /> 
        <HomeStack.Screen name="Cart" component={CartScreen} />
        <HomeStack.Screen
          name="ProductDetails"
          component={RecipeDetailScreen}
        />
        {/* Define other screens here if needed */}
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
