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

  .page-not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .err-txt {
    font-size: 1rem;
    margin-top: 50px;
  }

  button {
    height: 40px;
    width: 80px;
    border-radius: 20px;
    border: 2px solid #000;
    margin: 30px 0px;
  }

  button:hover {
    cursor: pointer;
  }

</style>
