"use dom";

import React, { forwardRef, useRef, useEffect } from "react";
import { useDOMImperativeHandle, type DOMImperativeFactory } from 'expo/dom';
import { Pico8 } from "./react-pico-8-src";
import {
  Controls,
  Reset,
  Pause,
  Sound,
  Carts,
  Fullscreen,
} from "react-pico-8/buttons";
import "react-pico-8/styles.css";

/*export interface PicoEightRef extends DOMImperativeFactory {
  injectJavaScript: (js: string) => void;
}*/

export default function DOMComponent(props: {
  name: string;
  dom?: import("expo/dom").DOMProps;
}) {

  useEffect(() => {
    setTimeout(() => {
      console.log("Injecting button press");
      //window.pico8_buttons[0] |= 0x10
      //window.pico8_buttons[0] |= 0x2
      //window.pico8_buttons[0] |= 0x20
    }, 5000);
  }, []);

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
}
