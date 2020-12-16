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
    border: 2px solid #000;
    border-radius: 20px;
    height: 40px;
    margin: 30px 0px;
    width: 80px;
  }

  button:hover {
    cursor: pointer;
  }

  .err-txt {
    font-size: 1rem;
    margin-top: 50px;
  }

  .page-not-found-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
