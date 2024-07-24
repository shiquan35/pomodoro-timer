# Pomodoro Timer
Deployed here:
<a href="https://pomodoro-timer-beige-alpha.vercel.app/" target="_blank">https://pomodoro-timer-beige-alpha.vercel.app/</a> <br /><br />
Run `npm i` and `npm run dev` to run in your local machine.

## Features
-  TimerDisplay: Clearly show the remaining time in minutes and seconds.
-  Start/Pause Button: Allow the user to start or pause the timer. When the
 timer is running, the button text should change to "Pause", and vice versa.
- ResetButton: Enable the user to stop the timer (if running) and reset it to
 the initial state.
- Automatic Break: After the 25-minute work timer completes, a 5-minute
 break timer should automatically start. Indicate to the user whether the
 timer is in work or break mode.
- CycleCounter: Display the number of complete work/break cycles

## Wireframe
 ![image](https://github.com/user-attachments/assets/450ba853-c94e-4211-8b6a-bc3921cbbf6d)
<br />*Note that the colours in this wireframe are not representative of the actual app.

## Folder structure
I followed this folder structure in Angsana Technology and VentureBlick: <br />
Page > Container > Component 
```markdown
app/
├── page.tsx
└── container/            
    └── components/
        ├── Controls.jsx
        ├── DisplayCycle.tsx
        ├── DisplayStatus.tsx
        └── DisplayTimer.tsx
```
## Leveraging Generative AI for Code Writing
I used Gemni to help me out with the logic of the Pomodoro Timer.
I was looking for 3 things:
  1. Logic to countdown from 25 minutes
  2. The ability to pause and reset the timer
  3. To display the timer in mm:ss format

<a href="https://gemini.google.com/share/82c069675afc" target="_blank">This is my prompt and results</a>
