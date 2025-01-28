import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { View } from "react-native";

export type PicoEightHandle = {
  updatePress: ({
    up,
    down,
    left,
    right,
    x,
    o,
  }: {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    x: boolean;
    o: boolean;
  }) => void;
};

export type PicoEightProps = {};

const PicoEight = forwardRef<PicoEightHandle, PicoEightProps>(function (
  props,
  ref
) {
  useImperativeHandle(ref, () => ({
    updatePress({ up, down, left, right, x, o }) {
      let buttons = 0;
      if (up) {
        buttons |= 0x10;
      }
      if (down) {
        buttons |= 0x20;
      }
      if (left) {
        buttons |= 0x40;
      }
      if (right) {
        buttons |= 0x10;
      }
      if (x) {
        buttons |= 0x1;
      }
      if (o) {
        buttons |= 0x2;
      }

      console.log(buttons);
    },
  }));
  /*useEffect(() => {
    setTimeout(() => {
      console.log("Injecting button press");
      window.pico8_buttons[0] |= 0x10
      window.pico8_buttons[0] |= 0x2
      //window.pico8_buttons[0] |= 0x20
    }, 5000);
  }, []);*/

  return <View />;
});

export default PicoEight;
