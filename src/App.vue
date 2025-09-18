<script setup>
import Nav from './components/Nav.vue'

localStorage["tasks"] = JSON.stringify([]);
</script>

<template>
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <header>
    <Nav />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
:root {
  /* Colors */
  --color-primary: #0d6efd;
  --color-secundary: #4691ff;
  --dark-green: #008347;
  --light-green: #58cd97;
  --dark-yellow: #d5a30c;
  --light-yellow: #ffcd36;
  --dark-red: #a61c29;
  --light-red: #dc3545;
  --lighter-red: #f63447;
  --dark-gray: #787878;
  --light-gray: #cbcbcb;
  --suavized-white: #eaeaea;
  /* Font Size */
  --font-size-large: 28px;
  --font-size-medium: 18px;
  --font-size-normal: 16px;
}

* {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
}

header {
  width: fit-content;
}

main {
  width: 100%;
  height: 100vh;
}

section {
  padding: 3rem 5rem;
}

.title {
  font-size: var(--font-size-large);
  font-weight: bolder;
  margin-bottom: 2rem;
}

.subtitle {
  font-weight: 500;
}

.text {
  font-size: var(--font-size-normal);
}

button {
            background-color: none;
            border-radius: 0.5rem;
            border: none;
            width: fit-content;
            padding: 0.8rem 1.2rem;
            font-size: medium;
            transition: transform 0.1s ease;
        }

        button.selected {
            background-color: var(--color-secundary);
        }
        
        button:hover,
        button:active {
            background-color: var(--color-secundary);
            transform: scale(0.9);
        }

label,
.subtitle {
  font-size: var(--font-size-medium);
}

ul {
  list-style-type: none;
  padding: 0;
}

.task {
    width: 80%;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -3px -1px 19px -4px rgba(0, 0, 0, 0.33);
    -webkit-box-shadow: -3px -1px 19px -4px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: -3px -1px 19px -4px rgba(0, 0, 0, 0.33);
}

.task-title,
.task-description,
.task-actions {
    padding: 1rem 1rem 0.5rem;
}

.task-title {
    background-color: var(--light-gray);
    border-bottom: 1.5px solid var(--dark-gray);
}
ul li {
    margin-bottom: 1.5rem;
}

.empty {
  width: 100%;
  height: 100vh;
  text-align: center;
  align-content: center;
}
</style>
