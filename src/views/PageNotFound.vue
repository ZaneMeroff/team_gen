<template>
  <div class="page-not-found-container">

    <p class="err-txt">sorry, this page was not found :(</p>

    <router-link class="router-link" to="/">
      <button>home</button>
    </router-link>

  </div>
</template>

<script>

  export default {
    name: "PageNotFound",
  }
</script>

<style scoped>

  button {
    background: linear-gradient(135deg,
      rgba(138, 43, 226, 0.8) 0%,
      rgba(255, 20, 147, 0.8) 50%,
      rgba(0, 206, 209, 0.8) 100%
    );
    border: 2px solid rgba(0, 255, 255, 0.6);
    border-radius: 20px;
    height: 45px;
    margin: 30px 0px;
    width: 100px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    box-shadow:
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(255, 20, 147, 0.3),
      inset 0 0 20px rgba(138, 43, 226, 0.3);
    transition: all 0.3s ease;
  }

  button:hover {
    cursor: pointer;
    box-shadow:
      0 0 30px rgba(0, 255, 255, 0.8),
      0 0 60px rgba(255, 20, 147, 0.5),
      inset 0 0 30px rgba(138, 43, 226, 0.5);
    border-color: rgba(255, 20, 147, 0.8);
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(0px);
  }

  .err-txt {
    font-size: 1.2rem;
    margin-top: 50px;
    color: #FF1493;
    text-shadow:
      0 0 10px rgba(255, 20, 147, 0.8),
      0 0 20px rgba(255, 20, 147, 0.6);
    font-weight: 700;
  }

  .page-not-found-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
