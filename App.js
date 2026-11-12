<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import the Context Provider
import { LibraryProvider } from './LibraryContext';

// Import the two screens
import BrowseTab from './BrowseTab';
import MyLibraryTab from './MyLibraryTab';

// Create bottom tab navigation
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Share library data with all screens
    <LibraryProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            // Selected tab text color
            tabBarActiveTintColor: '#FFFFFF',

            // Unselected tab text color
            tabBarInactiveTintColor: '#6B5B73',

            // Tab bar design
            tabBarStyle: {
              backgroundColor: '#F5F1E8',
              height: 70,
              paddingBottom: 8,
              paddingTop: 8,
            },

            // Purple background for selected tab
            tabBarActiveBackgroundColor: '#8054A6',

            // Tab spacing and shape
            tabBarItemStyle: {
              marginHorizontal: 8,
              borderRadius: 10,
            },

            // Header design
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },

            headerTintColor: '#333333',
          }}
        >
          {/* First tab */}
          <Tab.Screen
            name="Browse Books"
            component={BrowseTab}
          />

          {/* Second tab */}
          <Tab.Screen
            name="My Library"
            component={MyLibraryTab}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </LibraryProvider>
  );
}
=======
export { default } from './Activity 5/App';
>>>>>>> fa58fc8b563a86c8bb06aca7f74243d5a9f4d5b7
