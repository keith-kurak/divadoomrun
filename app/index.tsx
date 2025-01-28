import React, { useEffect, useRef, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import PicoEight, { type PicoEightHandle } from "@/components/PicoEight";

export default function Index() {
  const picoEightRef = useRef<PicoEightHandle>(null);

  const [buttons, setButtons] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
    x: false,
    o: false,
  });

  useEffect(() => {
    if (picoEightRef.current?.updatePress) {
      picoEightRef.current?.updatePress(buttons);
    }
  }, [buttons]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <PicoEight ref={picoEightRef} dom={{ matchContents: true }} />
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
              marginLeft: 12,
            }}
          >
            <MyPressable
              style={$getGamePadButtonStyle({})}
              onPressIn={() => {
                setButtons({ ...buttons, up: true });
              }}
              onPressOut={() => {
                setButtons({ ...buttons, up: false });
              }}
            >
              <AntDesign name="caretup" size={60} color="gray" />
            </MyPressable>
            <View style={{ flexDirection: "row" }}>
              <MyPressable
                style={$getGamePadButtonStyle({})}
                onPressIn={() => {
                  setButtons({ ...buttons, left: true });
                }}
                onPressOut={() => {
                  setButtons({ ...buttons, left: false });
                }}
              >
                <AntDesign name="caretleft" size={60} color="gray" />
              </MyPressable>
              <View style={{ width: 40 }} />
              <MyPressable
                style={$getGamePadButtonStyle({})}
                onPressIn={() => {
                  setButtons({ ...buttons, right: true });
                }}
                onPressOut={() => {
                  setButtons({ ...buttons, right: false });
                }}
              >
                <AntDesign name="caretright" size={60} color="gray" />
              </MyPressable>
            </View>
            <MyPressable
              style={$getGamePadButtonStyle({})}
              onPressIn={() => {
                setButtons({ ...buttons, down: true });
              }}
              onPressOut={() => {
                setButtons({ ...buttons, down: false });
              }}
            >
              <AntDesign name="caretdown" size={60} color="gray" />
            </MyPressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 100,
              marginRight: 12,
            }}
          >
            <MyPressable
              onPressIn={() => {
                setButtons({ ...buttons, x: true });
              }}
              onPressOut={() => {
                setButtons({ ...buttons, x: false });
              }}
              style={$getGamePadButtonStyle({
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
              })}
            >
              <Text style={{ color: "white", fontSize: 40 }}>X</Text>
            </MyPressable>
            <View style={{ width: 10 }} />
            <MyPressable
              onPressIn={() => {
                setButtons({ ...buttons, o: true });
              }}
              onPressOut={() => {
                setButtons({ ...buttons, o: false });
              }}
              style={$getGamePadButtonStyle({
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <Text style={{ color: "white", fontSize: 40 }}>O</Text>
            </MyPressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const MyPressable = (props: {
  onPressIn: () => void;
  onPressOut: () => void;
  style: any;
  children: any;
}) => {
  return (
    <View
      onTouchStart={props.onPressIn}
      onTouchEnd={props.onPressOut}
      style={props.style(false)}
    >
      {props.children}
    </View>
  );
};

const $getGamePadButtonStyle = (style: any) => {
  return ({ pressed }: { pressed: boolean }) => [
    style,
    {
      opacity: pressed ? 0.5 : 1,
    },
  ];
};
