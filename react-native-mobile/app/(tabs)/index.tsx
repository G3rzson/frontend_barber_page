import { COLORS, FS, ICON_SIZE } from "@/src/styles/constants";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/img/hero-img.jpg")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover" // cover, contain, stretch, repeat, center
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 40,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontSize: FS.xxxl,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            BARBERS & HAIR CUTTING
          </Text>

          <Text
            style={{
              color: COLORS.primary,
              fontSize: FS.xl,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Látogass el hozzánk, profi borbélyaink állnak szolgálatodra!
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <FontAwesome
              name="phone"
              size={ICON_SIZE.md}
              color={COLORS.primary}
            />
            <Text
              style={{
                color: COLORS.primary,
                fontSize: FS.md,
                textAlign: "center",
              }}
            >
              Hívj minket: +36 12 123 4567
            </Text>
          </View>

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
      </ImageBackground>
    </SafeAreaView>
  );
}
