import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import RideDetailScreen from '../screens/RideDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PublishRideScreen from '../screens/PublishRideScreen';
import BookingScreen from '../screens/BookingScreen';
import BookingSuccessScreen from '../screens/BookingSuccessScreen';
import InboxScreen from '../screens/InboxScreen';
import ChatScreen from '../screens/ChatScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import ManageRideScreen from '../screens/ManageRideScreen';
import SplashScreen from '../screens/SplashScreen';
import RideListingScreen from '../screens/RideListingScreen';
import { COLORS } from '../theme/theme';

import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const palette = {
  primary: '#0058bb',
  onSurfaceVariant: '#595c5d',
  surface: '#f5f6f7',
  errorContainer: '#fb5151'
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName = '';
        let label = '';
        let badge = false;

        if (route.name === 'Home') {
          iconName = 'home';
          label = 'Home';
        } else if (route.name === 'My Ride') {
          iconName = 'event-note';
          label = 'My Ride';
        } else if (route.name === 'Publish') {
          iconName = 'add-circle';
          label = 'Publish';
        } else if (route.name === 'Inbox') {
          iconName = 'chat-bubble';
          label = 'Inbox';
          badge = true;
        } else if (route.name === 'Account') {
          iconName = 'person';
          label = 'Account';
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.tabButtonActive]}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons 
                name={iconName} 
                size={24} 
                color={isFocused ? '#ffffff' : palette.onSurfaceVariant} 
              />
              {badge && (
                <View style={styles.badgeIndicator} />
              )}
            </View>
            <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const ExploreStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="RideListing" component={RideListingScreen} />
    <Stack.Screen name="RideDetail" component={RideDetailScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen name="ManageRide" component={ManageRideScreen} />
    <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
  </Stack.Navigator>
);

const MyRideStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MyRideMain" component={BookingScreen} />
    <Stack.Screen name="ManageRide" component={ManageRideScreen} />
  </Stack.Navigator>
);

const InboxStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="InboxHome" component={InboxScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={ExploreStack} />
      <Tab.Screen name="My Ride" component={MyRideStack} />
      <Tab.Screen name="Publish" component={PublishRideScreen} />
      <Tab.Screen name="Inbox" component={InboxStack} />
      <Tab.Screen name="Account" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(245, 246, 247, 0.95)',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: palette.onSurfaceVariant,
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  tabButtonActive: {
    backgroundColor: palette.primary,
  },
  iconContainer: {
    position: 'relative',
  },
  badgeIndicator: {
    position: 'absolute',
    top: -2,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: palette.errorContainer,
    borderWidth: 1,
    borderColor: palette.surface,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: palette.onSurfaceVariant,
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#ffffff',
    fontWeight: '700',
  }
});

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
