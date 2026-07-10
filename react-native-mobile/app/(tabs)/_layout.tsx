import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { COLORS } from "../../src/styles/constants";
import { Platform } from "react-native";

export default function TabLayout() {
  const isWeb = Platform.OS === "web";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.inactive,

        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.primary,
          borderTopWidth: 1,
          height: isWeb ? 60 : 120,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Szolgáltatások",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="galleries"
        options={{
          title: "Galéria",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="infos"
        options={{
          title: "Információk",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
