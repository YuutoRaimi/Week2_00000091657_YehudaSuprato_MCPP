import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Profile App",
          headerStyle: { backgroundColor: "#000000" },
          headerTitleStyle: { color: "#FFFFFF" },
        }}
      />
    </Stack>
  );
}
