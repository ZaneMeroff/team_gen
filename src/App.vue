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
    font-family: "Orbitron", sans-serif;
    letter-spacing: 3px;
  }

  .app-perimeter-container {
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #0a0015 0%, #1a0033 50%, #0a0015 100%);
    background-image:
      repeating-linear-gradient(
        0deg,
        rgba(255, 0, 255, 0.05) 0px,
        transparent 1px,
        transparent 40px,
        rgba(255, 0, 255, 0.05) 41px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0, 255, 255, 0.05) 0px,
        transparent 1px,
        transparent 40px,
        rgba(0, 255, 255, 0.05) 41px
      ),
      linear-gradient(180deg, #0a0015 0%, #1a0033 50%, #0a0015 100%);
    display: flex;
    justify-content: center;
    overflow-y: scroll;
  }

  .app-inner-container {
    width: 400px;
    height: 100vh;
    background: linear-gradient(180deg,
      rgba(138, 43, 226, 0.3) 0%,
      rgba(75, 0, 130, 0.4) 25%,
      rgba(0, 206, 209, 0.3) 50%,
      rgba(255, 20, 147, 0.4) 75%,
      rgba(138, 43, 226, 0.3) 100%
    );
    box-shadow:
      0 0 30px rgba(138, 43, 226, 0.6),
      0 0 60px rgba(0, 206, 209, 0.4),
      inset 0 0 60px rgba(138, 43, 226, 0.1);
    border-left: 2px solid rgba(0, 255, 255, 0.4);
    border-right: 2px solid rgba(255, 20, 147, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
  }

  .app-title {
    margin: 30px 20px 40px 20px;
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    text-shadow:
      0 0 10px rgba(0, 255, 255, 0.8),
      0 0 20px rgba(255, 20, 147, 0.8),
      0 0 30px rgba(138, 43, 226, 0.6),
      2px 2px 4px rgba(0, 0, 0, 0.8);
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow:
        0 0 10px rgba(0, 255, 255, 0.8),
        0 0 20px rgba(255, 20, 147, 0.8),
        0 0 30px rgba(138, 43, 226, 0.6),
        2px 2px 4px rgba(0, 0, 0, 0.8);
    }
    to {
      text-shadow:
        0 0 20px rgba(0, 255, 255, 1),
        0 0 30px rgba(255, 20, 147, 1),
        0 0 40px rgba(138, 43, 226, 0.8),
        2px 2px 4px rgba(0, 0, 0, 0.8);
    }
  }

  .copywrite-text {
    text-transform: uppercase;
    margin: 20px;
    color: rgba(0, 255, 255, 0.7);
    font-size: 0.7rem;
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  }

  .nav-btn-container {
    display: flex;
    justify-content: space-between;
    width: 270px;
  }

  .err-msg {
    height: 30px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    text-align: center;
    font-size: .6rem;
    color: #FF1493;
    text-shadow:
      0 0 5px rgba(255, 20, 147, 0.8),
      0 0 10px rgba(255, 20, 147, 0.6);
    text-decoration: none;
    font-weight: 700;
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
