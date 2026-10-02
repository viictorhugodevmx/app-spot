import { Stack } from 'expo-router';

import { FavoritesProvider } from '../context/FavoritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0D1117',
          },
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#0D1117',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="places/index"
          options={{
            title: 'Places',
          }}
        />

        <Stack.Screen
          name="places/[id]"
          options={{
            title: 'Place',
          }}
        />

        <Stack.Screen
          name="favorites"
          options={{
            title: 'Favorites',
          }}
        />
      </Stack>
    </FavoritesProvider>
  );
}
