import { Image, Text, FlatList, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GALLERY_IMAGES } from "@/src/data/data";
import { COLORS, FS } from "@/src/styles/constants";
import { useState } from "react";

export default function Galleries() {
  const { width } = Dimensions.get("window");
  const sidePadding = 8;
  const itemGap = 12;
  const peekWidth = 30;
  const itemWidth = width - sidePadding * 2 - peekWidth;
  const snapInterval = itemWidth + itemGap;

  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (offsetX: number) => {
    const nextIndex = Math.round(offsetX / snapInterval);
    const clampedIndex = Math.max(
      0,
      Math.min(nextIndex, GALLERY_IMAGES.length - 1),
    );
    setActiveIndex(clampedIndex);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
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
        Galéria
      </Text>

      <FlatList
        data={GALLERY_IMAGES}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={{ flexGrow: 0 }}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={snapInterval}
        snapToAlignment="start"
        disableIntervalMomentum
        contentContainerStyle={{ paddingHorizontal: sidePadding }}
        scrollEventThrottle={16}
        onScroll={(event) => {
          updateActiveIndex(event.nativeEvent.contentOffset.x);
        }}
        onMomentumScrollEnd={(event) => {
          updateActiveIndex(event.nativeEvent.contentOffset.x);
        }}
        onScrollEndDrag={(event) => {
          updateActiveIndex(event.nativeEvent.contentOffset.x);
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: itemWidth,
              marginRight: index === GALLERY_IMAGES.length - 1 ? 0 : itemGap,
            }}
          >
            <Image
              source={item.imageUrl}
              style={{
                width: "100%",
                height: 300,
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
          </View>
        )}
      />

      {/* Pagination pontok */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          marginTop: 20,
        }}
      >
        {GALLERY_IMAGES.map((_, index) => (
          <View
            key={index}
            style={{
              width: activeIndex === index ? 12 : 8,
              height: activeIndex === index ? 12 : 8,
              borderRadius: 10,
              backgroundColor: activeIndex === index ? COLORS.primary : "#ccc",
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
