import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useCallback } from 'react';

export default function TabLayout() {
  const renderBarIcon = useCallback(
    (name: keyof typeof FontAwesome.glyphMap) => {
      return ({ color }: { color: string }) => (
        <FontAwesome size={28} name={name} color={color} />
      );
    },
    []
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shimmers',
          tabBarIcon: renderBarIcon('home'),
        }}
      />
    </Tabs>
  );
}
