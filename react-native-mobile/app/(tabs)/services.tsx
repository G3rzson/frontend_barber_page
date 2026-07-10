import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { COLORS, FS } from "@/src/styles/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { BARBERS, SERVICES } from "@/src/data/data";

export default function Services() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          paddingHorizontal: 16,
        }}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 24,
        }}
      >
        <Text
          style={{
            fontSize: FS.xl,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.primary,
            paddingVertical: 20,
          }}
        >
          Szolgáltatások
        </Text>

        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          snapToInterval={320} // ha a kártya 300 px széles + 20 px távolság
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 20,
          }}
        >
          {SERVICES.map((service) => (
            <View
              key={service.id}
              style={{
                padding: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.primary,
                width: 300,
                gap: 16,
              }}
            >
              <Text
                style={{
                  fontSize: FS.lg,
                  fontWeight: "bold",
                  color: COLORS.primary,
                  textAlign: "center",
                }}
              >
                {service.title}
              </Text>
              <Text
                style={{
                  fontSize: FS.md,
                  color: COLORS.primary,
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.primary,
                  paddingBottom: 14,
                  borderTopWidth: 1,
                  borderTopColor: COLORS.primary,
                  paddingTop: 14,
                  textAlign: "center",
                }}
              >
                Ár: {service.price} Ft
              </Text>
              <Text
                style={{
                  fontSize: FS.md,
                  color: COLORS.primary,
                  textAlign: "center",
                }}
              >
                Időtartam: {service.time}
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={() => {
                  // Handle button press
                  console.log("Foglalj időpontot button pressed");
                }}
              >
                <Text
                  style={{
                    color: COLORS.background,
                    fontSize: FS.md,
                    textAlign: "center",
                  }}
                >
                  Foglalj időpontot
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <Text
          style={{
            fontSize: FS.xl,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.primary,
            paddingVertical: 20,
          }}
        >
          Borbélyaink
        </Text>

        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          snapToInterval={320} // ha a kártya 300 px széles + 20 px távolság
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 20,
          }}
        >
          {BARBERS.map((barber) => (
            <View
              key={barber.id}
              style={{
                width: 300,
                borderRadius: 10,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}
            >
              <Image
                source={barber.imageUrl}
                style={{
                  width: "100%",
                  height: 220,
                }}
                resizeMode="cover"
              />

              <Text
                style={{
                  paddingVertical: 12,
                  fontSize: FS.lg,
                  textAlign: "center",
                  color: COLORS.primary,
                }}
              >
                {barber.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
