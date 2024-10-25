# MF Piano Studio

## Roadmap

- [ ] The app should allow users to learn how to play the piano.
- [ ] The project already has everything installed from the following core list: Next.js, React, TypeScript, TailwindCSS, Konva, Tone.js.
- [ ] The website should have a virtual piano. This piano should produce sounds when the user presses a key on the virtual piano or a key on their PC keyboard (we should make sure this works on both Windows and MacOS).
- [ ] The piano should be very close to a real one.
- [ ] There should be a 2D canvas where everything is displayed, and everything should have its respective XY coordinates. For debug purposes implement the debug UI where display current XY where is current user's mouse position is.
- [ ] When pressing the keys, a "falling" "bar" should appear above the key, and when it touches the key, there should be an "absorption" effect of this "bar" into the virtual piano key on the screen, and this "bar" should disappear into the piano keyboard.
- [ ] We should make sure the piano keys can be pressed, held, and prolonged using the three pedals. Keys should be pressable with a mouse, PC keyboard, or by touching the screen.
- [ ] We should make sure many keys can be pressed simultaneously, so notes will be mixed as in the real life.
- [ ] We should Make sure there are as many keys as on a real piano.
- [ ] The piano keys should display their corresponding note names and the PC keyboard key that "activates" the corresponding piano key. The note names to be switchable in the settings, so there is a mode for both do-re-mi and abc. The note names and keyboard instructions should be toggleable (on/off).
- [ ] Ensure the canvas design is responsive across different device sizes. Use Tailwind breakpoints (-sm, -md, -lg, -xl, -2xl) where necessary. On mobile devices, We don’t want everything to be too small, so The ability to scroll the canvas horizontally.
- [ ] The page with this virtual piano to have a settings button, where a popup will allow configuring the absorption effects and piano sounds.
- [ ] The piano page to have an "Upload" button that allows uploading a .mid file, which the piano will play using a "Play" button. We also want a list of uploaded songs to choose from for playback.
- [ ] Use Next.js Server Components, Server Actions, and "use client" where necessary.
- [ ] When appropriate we should divide the components into different files, so We will have a good developer experience.
- [ ] Add all samples
- [ ] Add all key mappings
- [ ] Add all piano keys
- [ ] Add all piano pedals
