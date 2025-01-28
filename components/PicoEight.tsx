"use dom";

import React, {
  forwardRef,
  useRef,
  useEffect,
} from "react";
import { useDOMImperativeHandle, type DOMImperativeFactory } from "expo/dom";
import { Pico8 } from "./react-pico-8-src";
// import Pico8 from "react-pico-8";
import {
  Controls,
  Reset,
  Pause,
  Sound,
  Carts,
  Fullscreen,
} from "react-pico-8/buttons";
import "react-pico-8/styles.css";
import { JSONValue } from "expo/build/dom/dom.types";

export interface PicoEightHandle extends DOMImperativeFactory {
  updatePress: (arg: JSONValue) => void;
};

export type PicoEightProps = {
  dom?: import("expo/dom").DOMProps;
};

const PicoEight = forwardRef<PicoEightHandle, PicoEightProps>(function (
  props,
  ref
) {
  useDOMImperativeHandle(ref, () => ({
    updatePress(args: JSONValue) {
      // @ts-ignore
      const { up, down, left, right, x, o } = args;
      console.log(args);

      // @ts-ignore
      pico8_buttons[0] = 0;

      let buttons = 0;

      if (up) {
        buttons |= 0x4;
      }
      if (down) {
        buttons |= 0x8;
      }
      if (left) {
        buttons |= 0x1;
      }
      if (right) {
        buttons |= 0x2;
      }
      if (x) {
        buttons |= 0x20;
      }
      if (o) {
        buttons |= 0x10;
      }

      // @ts-ignore
      window.pico8_buttons[0] |= buttons;
    },
  }));
  /*useEffect(() => {
    setTimeout(() => {
      console.log("Injecting button press");
      window.pico8_buttons[0] |= 0x10
      window.pico8_buttons[0] |= 0x2
    }, 5000);
  }, []);*/

  return (
    <Pico8
      src={`${process.env.EXPO_BASE_URL}divadoomrun.js`}
      autoPlay={true}
      legacyButtons={false}
      hideCursor={true}
      center={true}
      blockKeys={false}
      usePointer={false}
      unpauseOnReset={true}
      placeholder={`${process.env.EXPO_BASE_URL}divadoomrun.png`}
    >
      <Pause />
      <Sound />
    </Pico8>
  );
});

export default PicoEight;
