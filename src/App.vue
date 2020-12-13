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
    font-family: "Bangers";
    letter-spacing: 2px;
  }

  .app-perimeter-container {
    height: 100vh;
    width: 100%;
    background-color: #313131;
    display: flex;
    justify-content: center;
  }

  .app-inner-container {
    width: 400px;
    height: 100vh;
    background-image: linear-gradient(-180deg, #2196F3 0%, #ff2ed3 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-title {
    margin: 20px;
    font-size: 2.5rem;
    text-shadow: 1px 1px #FFF;
  }

  .copywrite-text {
    text-transform: uppercase;
    margin: 20px;
  }

  .nav-btn-container {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  .err-msg {
    height: 30px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0px;
    text-align: center;
    font-size: .8rem;
    color: #FFF;
    text-decoration: underline;
  }

  .router-link {
    text-decoration: none;
  }

  @media only screen and (max-width: 400px) {

    .app-inner-container {
      width: 100%;
    }

  }

</style>
