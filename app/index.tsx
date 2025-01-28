import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";

import PicoEight, { type PicoEightHandle } from "@/components/PicoEight";

export default function Index() {
  const picoEightRef = useRef<PicoEightHandle>(null);

  const buttonUpTrue = () => {
    picoEightRef.current?.updatePress({ button: "up", state: true });
  }

  const buttonUpFalse = () => {
    picoEightRef.current?.updatePress({ button: "up", state: false });
  }

  const buttonDownTrue = () => {
    picoEightRef.current?.updatePress({ button: "down", state: true });
  }

  const buttonDownFalse = () => {
    picoEightRef.current?.updatePress({ button: "down", state: false });
  }

  const buttonLeftTrue = () => {
    picoEightRef.current?.updatePress({ button: "left", state: true });
  }

  const buttonLeftFalse = () => {
    picoEightRef.current?.updatePress({ button: "left", state: false });
  }

  const buttonRightTrue = () => {
    picoEightRef.current?.updatePress({ button: "right", state: true });
  }

  const buttonRightFalse = () => {
    picoEightRef.current?.updatePress({ button: "right", state: false });
  }

  const buttonXTrue = () => {
    picoEightRef.current?.updatePress({ button: "x", state: true });
  }

  const buttonXFalse = () => {
    picoEightRef.current?.updatePress({ button: "x", state: false });
  }

  const buttonOTrue = () => {
    picoEightRef.current?.updatePress({ button: "o", state: true });
  }

  const buttonOFalse = () => {
    picoEightRef.current?.updatePress({ button: "o", state: false });
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <PicoEight
          ref={picoEightRef}
          dom={{ matchContents: true, allowsInlineMediaPlayback: true }}
        />
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
              onPressIn={buttonUpTrue}
              onPressOut={buttonUpFalse}
            >
              <AntDesign name="caretup" size={60} color="gray" />
            </MyPressable>
            <View style={{ flexDirection: "row" }}>
              <MyPressable
                style={$getGamePadButtonStyle({})}
                onPressIn={buttonLeftTrue}
                onPressOut={buttonLeftFalse}
              >
                <AntDesign name="caretleft" size={60} color="gray" />
              </MyPressable>
              <View style={{ width: 40 }} />
              <MyPressable
                style={$getGamePadButtonStyle({})}
                onPressIn={buttonRightTrue}
                onPressOut={buttonRightFalse}
              >
                <AntDesign name="caretright" size={60} color="gray" />
              </MyPressable>
            </View>
            <MyPressable
              style={$getGamePadButtonStyle({})}
              onPressIn={buttonDownTrue}
              onPressOut={buttonDownFalse}
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
              onPressIn={buttonXTrue}
              onPressOut={buttonXFalse}
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
              onPressIn={buttonOTrue}
              onPressOut={buttonOFalse}
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
    <CustomPressable
      onBegin={props.onPressIn}
      onEnd={props.onPressOut}
      style={props.style(false)}
    >
      {props.children}
    </CustomPressable>
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

function CustomPressable({
  children,
  onBegin,
  onEnd,
  style,
  maxDuration = 100000,
}) {
  const [isPressed, setPressed] = useState(false);
  const tapGesture = Gesture.Tap()
    .maxDuration(1000000) // max time button can be held down
    .onBegin(() => {
      setPressed(true);
      onBegin();
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    })
    .onEnd(() => {
      setPressed(false);
      onEnd();
    })
    .onTouchesCancelled(() => {
      setPressed(false);
      onEnd();
    })
    .runOnJS(true);

  return (
    <GestureDetector gesture={tapGesture}>
      <View style={[style, isPressed && { opacity: 0.5 }]}>{children}</View>
    </GestureDetector>
  );
}
