# Sprint 9 Module 2 Project

## Introduction

Welcome to Module 2 Project! In this project, you will work with the advanced hooks `useRef` and `useMemo`.

## Instructions

The app is comprised of three screens or widgets: **Canvas**, **Stopwatch** and **Grid**.

Each widget is currently either not working (Canvas, Stopwatch) or working poorly due to performance problems (Grid).

You will put your skills with the Ref and Memo hooks to work, by implementing or improving these widgets

### 💾 Setup

**Here are the steps to set up this project:**

1. Clone this repository to your computer.

2. Within your terminal, navigate to the project folder and execute `npm install`.

3. After successful installation execute `npm run dev`.

4. You will load the app in Chrome by navigating the browser to `http://localhost:3003`.

**❗ Note:** In the event of NPM errors during setup, delete the `node_modules` folder and the `package-lock.json` file, and retry `npm i` and `npm run dev`.

### 🥷 Tasks

**Here are the files of interest in this project:**

1. Inside [Canvas](./frontend/components/Canvas.js) you will find the Canvas component.
2. Inside [Stopwatch](./frontend/components/Stopwatch.js) you will find the Stopwatch component.
3. Inside [Grid](./frontend/components/Grid.js) you will find the Grid component.

There is no need to install any NPM dependencies nor work outside of these files.

You can navigate to each widget in Chrome by using the provided anchor tags.

Keep in mind that there are many ways to solve a given programming problem.

Check out the **Solution Video** of this project if you need help getting unstuck. Have fun!

#### 👉 TASK 1 - Implement a Drawing Board in Canvas.js

1. Visit the example drawing board [HERE](https://bloominstituteoftechnology.github.io/W_S9M2_Project/) and interact with it.

2. Using the Sources tab in Chrome Dev Tools, find the `index.js` source file of the example drawing board.

3. "Steal" the JavaScript code of the example and "reactify" it so it works inside **Canvas.js**.

4. You will need the Ref hook to work with the `<canvas>` HTML element.

5. By the end of this task, your Drawing Board should work just like the one in the example.

#### 👉 TASK 2 - Implement a Stopwatch in Stopwatch.js

1. The **Stopwatch.js** is expected to count seconds using a `setInterval` every 1000 milliseconds.

2. We DON'T want to re-render the component every second: the stopwatch will run in the background without updating component state.

3. In order to get the running time, the **Split** button will be used. Each press should cause the "Total running time" message to update.

4. In order to mark a lap, the **Lap** button will be used. Each press should add a new lap `<li>` to the `<ul>` element.

5. You will need the Ref hook to store -and retrieve from- the total running time.

6. You will need two slices of component state: (1) to store the "Total running time" message and (2) to store the laps.

7. Remember that the "Total running time" message does NOT update in real time, but only when Split is pressed!

#### 👉 TASK 3 - Improve the Performance of Grid.js

1. You will notice two undesirable effects when typing in the input box in **Grid.js**:
    - The input responds very slowly to typing.
    - The grid pattern regenerates itself with each input change.

2. Memoize the calculation responsible for rebuilding the grid, so that the grid is only re-computed if its size changes.

3. If the Memo hook is used correctly, typing should be performant, and the grid should NOT reconstruct itself at each input change.

**Important:**

- ❗ Please check the relevant chapter of the Solution Video if you get stuck.

👋 Have fun!

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Sometimes Node can be installed but misconfigured. Try deleting `node_modules` and running `npm install`. If that fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Can I edit the HTML or the CSS?</summary>

That's probably not a great idea. Why do you want to do that?

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Remember to use console.logs and breakpoints to troubleshoot your code. Do not panic if you see errors in the console, just read them carefully looking for clues.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

There are no automatic tests in this project. Feel free to write some, though! All necessary libraries are installed in the project.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. Make a commit after each test. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well. Research how to reset --hard to a specific commit.

</details>
<br/>

**Project created with [@bloomtools/react@0.1.24](https://github.com/bloominstituteoftechnology/npm-tools-react)**
