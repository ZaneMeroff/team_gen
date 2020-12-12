<template>
  <div class="app-perimeter-container">
    <div class="app-inner-container">
      <h1 class="app-title">Team Generator</h1>
      <router-view />
      <p class="copywrite-text">&#xa9 2021 zachary nemeroff</p>
    </div>
  </div>
</template>

<style>

  * {
    margin: 0px;
    padding: 0px;
  }

  .app-perimeter-container {
    height: 100vh;
    background-color: #313131;
    display: flex;
    justify-content: center;
  }

  .app-inner-container {
    width: 350px;
    height: 100vh;
    background-color: #A777EB;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-title {
    margin: 20px;
  }

  .copywrite-text {
    text-transform: uppercase;
    margin: 20px;
  }

  .nav-btn-container {
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  .err-msg {
    height: 30px;
    width: 300px;
    border: 2px solid yellow;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .router-link {
    text-decoration: none;
  }

</style>
