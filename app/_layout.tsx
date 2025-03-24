import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? '#000' : '#fff',
        },
        headerTintColor: isDark ? '#fff' : '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="screens/auth/Login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screens/auth/CreateAccount"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
