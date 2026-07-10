import { COLORS, FS } from "@/src/styles/constants";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { INFOS, OPENING_HOURS } from "@/src/data/data";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Infos() {
  const [openInfoId, setOpenInfoId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleInfo = (infoId: number) => {
    setOpenInfoId((prev) => (prev === infoId ? null : infoId));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 16,
      }}
    >
      <ScrollView>
        <Text
          style={{
            fontSize: FS.xl,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.primary,
            paddingVertical: 20,
          }}
        >
          Nyitvatartás
        </Text>

        <View
          style={{
            paddingHorizontal: 16,
            gap: 8,
            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 8,
            paddingVertical: 6,
          }}
        >
          {OPENING_HOURS.map((item, index) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: index !== OPENING_HOURS.length - 1 ? 1 : 0,
                borderBottomColor: COLORS.primary,
                paddingVertical: 8,
              }}
            >
              <Text style={{ color: COLORS.primary }}>{item.day}</Text>
              <Text style={{ color: COLORS.primary }}>{item.hours}</Text>
            </View>
          ))}
        </View>

        <Text
          style={{
            fontSize: FS.xl,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.primary,
            paddingTop: 20,
          }}
        >
          Gyakori kérdések
        </Text>

        <View
          style={{
            paddingVertical: 16,
            gap: 8,
          }}
        >
          {INFOS.map((info) => (
            <View
              key={info.id}
              style={{
                padding: 16,
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: 8,
              }}
            >
              <TouchableOpacity
                onPress={() => toggleInfo(info.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    flex: 1,
                  }}
                >
                  {info.question}
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={20}
                  color={COLORS.primary}
                  style={{
                    transform: [
                      { rotate: openInfoId === info.id ? "180deg" : "0deg" },
                    ],
                  }}
                />
              </TouchableOpacity>

              {openInfoId === info.id && (
                <Text
                  style={{
                    color: COLORS.success,
                    marginTop: 8,
                  }}
                >
                  {info.answer}
                </Text>
              )}
            </View>
          ))}
        </View>

        <Text
          style={{
            fontSize: FS.xl,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.primary,
            paddingTop: 20,
            paddingBottom: 12,
          }}
        >
          Vedd fel velünk a kapcsolatot!
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 8,
            padding: 12,
            gap: 10,
            marginBottom: 24,
          }}
        >
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Név"
            placeholderTextColor={COLORS.inactive}
            style={{
              borderWidth: 1,
              borderColor: COLORS.primary,
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              color: COLORS.primary,
            }}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={COLORS.inactive}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: COLORS.primary,
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              color: COLORS.primary,
            }}
          />

          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Üzenet"
            placeholderTextColor={COLORS.inactive}
            multiline
            textAlignVertical="top"
            style={{
              borderWidth: 1,
              borderColor: COLORS.primary,
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              minHeight: 120,
              color: COLORS.primary,
            }}
          />

          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 8,
              paddingVertical: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.background,
                fontWeight: "bold",
              }}
            >
              Küldés
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          transparent
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              justifyContent: "center",
              paddingHorizontal: 24,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.background,
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: 10,
                padding: 16,
                gap: 12,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <Ionicons name="close" size={24} color={COLORS.primary} />
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: FS.md,
                  textAlign: "center",
                  lineHeight: 22,
                }}
              >
                A megadott adatok nem kerültek feldolgozásra! Ez a funkció még
                nincs implementálva.
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
