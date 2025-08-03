import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // ini untuk semua tab
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="information-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
