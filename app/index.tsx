import React, { useRef } from "react";
import { Text, View, Pressable } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import PicoEight from "@/components/PicoEight";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <PicoEight dom={{ matchContents: true }} name="Hello, DOM component" />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 24,
            }}
          >
            <Pressable onPress={() => {}}>
              <AntDesign name="caretup" size={60} color="gray" />
            </Pressable>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => {}}>
                <AntDesign name="caretleft" size={60} color="gray" />
              </Pressable>
              <View style={{ width: 60 }} />
              <Pressable onPress={() => {}}>
                <AntDesign name="caretright" size={60} color="gray" />
              </Pressable>
            </View>
            <Pressable onPress={() => {}}>
              <AntDesign name="caretdown" size={60} color="gray" />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 100,
              marginRight: 24,
            }}
          >
            <Pressable
              onPress={() => {}}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <Text style={{ color: "white", fontSize: 40 }}>X</Text>
            </Pressable>
            <View style={{ width: 10 }} />
            <Pressable
              onPress={() => {}}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 40 }}>O</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
