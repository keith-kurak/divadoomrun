# DOM Components ❤️ PICO-8

A hastily-made demo of embedding the PICO-8 web player in an Expo DOM Component.

## How to run
1. `bun install`
2. `npx expo start`
(Expo Go-compatible)

## What the heck is this weird game?

[Head over here to learn the "backstory" to Diva Doom Run and to play it in its original habitat.](https://www.lexaloffle.com/bbs/?tid=50252)

## What I did / what to look at
99% of the action is in:
- **app/index.tsx** (main/only screen that uses the DOM component)
- **components/PicoEight.tsx** (the DOM component)
- **components/react-pico-8-src** (an inline fork of most of [react-pico-8](https://github.com/woofers/react-pico-8), with a smattering of hacks to get it workable inside of the DOM Component)

`react-pico-8` is optimized on mobile phones to present a fullscreen view, which totally makes sense on its own, but breaks the inside-the-DOM-component version. So, most hacking was to workaround that, and also to remove the various pause/sound/etc. buttons that would automatically show up around the screen.

Also, the library doesn't include the onscreen controls inside the default PICO-8 web export, so native buttons in **index.tsx** are wired to updates in `window.pico8_buttons` inside the DOM component. Now that those updates are outside the React render cycle, they seem fairly performant, despite the buttons being outside the DOM component.

## How to load your own PICO-8 game
1. Export from PICO-8 (e.g., `export mygame.html`).
2. Copy the **.js** file to the **public** folder in this project.
3. Run it.

## Other ideas
- Use peek (e.g, `Module.getValue()`) or GPIO integration inside the web VM to read in-game values in native code, perhaps extracting the in-game HUD or doing other interesting things on the native side.
- Controller support, ideally optimized by using native controller support instead of the web version.
- ???

----

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
