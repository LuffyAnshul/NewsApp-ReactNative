import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import SettingsScreen from './src/pages/SettingsScreen';
import SearchScreen from './src/pages/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const materialTab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
	  	<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				// headerStyle: { backgroundColor: '#009387' },
				// headerTintColor: '#fff',
				// headerTitleStyle: { fontWeight: 'bold' },
				headerShown: false
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: 'Home Page' }}/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={{ title: 'Details Page' }} 
			/>
	  </Stack.Navigator>
  );
}

function SearchStack() {
	return (
			<Stack.Navigator
				initialRouteName="Search"
				screenOptions={{
					// headerStyle: { backgroundColor: '#1f65ff' },
					// headerTintColor: '#fff',
					// headerTitleStyle: { fontWeight: 'bold' },
					headerShown: false
		  		}}
		  	>
			  <Stack.Screen
				  name="Search"
				  component={SearchScreen}
				  options={{ title: 'Search Page' }}/>
			  <Stack.Screen
				  name="Details"
				  component={DetailsScreen}
				  options={{ title: 'Details Page' }} />
		</Stack.Navigator>
	);
}

function SettingsStack() {
	return (
		<Stack.Navigator
			initialRouteName="Settings"
			screenOptions={{
				headerTitleStyle: { fontWeight: 'bold'},
				headerTitleAlign: 'center',
				headerTransparent: true
		}}>
			<Stack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{ title: 'Settings' }}/>
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{ title: 'Profile Page' }}/>
		</Stack.Navigator>
	);
}

function App() {
  	return (
		<NavigationContainer>
			<materialTab.Navigator 
				shifting={true}
				sceneAnimationEnabled={false}
			>
				<materialTab.Screen
					name="HomeStack"
					component={HomeStack}
					options={{
						tabBarLabel: 'Home',
						tabBarColor: '#009387',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="home"
								color={color}
								size={26}
							/>
						),
					}}  
				/>
				<materialTab.Screen
					name="SearchStack"
					component={SearchStack}
					options={{
						tabBarLabel: 'Search',
						tabBarColor: '#1f65ff',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="alpha-s-box"
								color={color}
								size={26}
							/>
						),
					}}  
				/>
				<materialTab.Screen
					name="SettingsStack"
					component={SettingsStack}
					active
					options={{
						tabBarLabel: 'Settings',
						tabBarColor: '#d02860',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name="settings"
								color={color}
								size={26}
							/>
						),
					}} 
				/>
			</materialTab.Navigator>
		</NavigationContainer>
	);
}
export default App;