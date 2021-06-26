import React from "react";
import Icon from "react-native-dynamic-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/**
 * ? Local Imports
 */
import { APP_ROUTE, SCREENS } from "@shared-constants";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import SearchScreen from "@screens/search/SearchScreen";
import GamesScreen from "@screens/games/GamesScreen";
import SettingsScreen from '@screens/settings/SettingsScreen';
import BasicGame from '@screens/basicGame/BasicGame';
import PuzzleGame from '@screens/puzzleGame/PuzzleGame';

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";
            if (route.name === SCREENS.HOME) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === SCREENS.SEARCH) {
              iconName = focused ? "ios-search" : "ios-search";
            }
            // You can return any component that you like here!
            return (
              <Icon name={iconName} type="Ionicons" size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#5931ff",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={APP_ROUTE.HOME} component={HomeScreen} />
        <Stack.Screen name={APP_ROUTE.SETTINGS} component={SettingsScreen} />
        <Stack.Screen name={APP_ROUTE.GAMES} component={GamesScreen} />
        <Stack.Screen name={APP_ROUTE.BASIC_GAME} component={BasicGame} />
        <Stack.Screen name={APP_ROUTE.PUZZLE_GAME} component={PuzzleGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
