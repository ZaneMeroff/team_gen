<template>
  <div class="team-card-perimeter-container">

    <p>team #{{ teamId }}</p>

    <ul>
      <li v-for="(member, index) in members" :key="index">{{ member }}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "TeamCard",
    props: {
      members:  { type: Array, default: () => [] },
      teamId:   { type: Number, default: 0 },
    },
  }
</script>

<style scoped>

  .team-card-perimeter-container {
    background: linear-gradient(135deg,
      rgba(138, 43, 226, 0.2) 0%,
      rgba(75, 0, 130, 0.3) 50%,
      rgba(0, 206, 209, 0.2) 100%
    );
    border: 2px solid rgba(0, 255, 255, 0.6);
    border-radius: 12px;
    box-shadow:
      0 0 20px rgba(0, 255, 255, 0.4),
      0 0 40px rgba(255, 20, 147, 0.2),
      inset 0 0 30px rgba(138, 43, 226, 0.3);
    height: auto;
    margin: 0px auto 25px auto;
    padding: 15px 20px;
    width: 220px;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }

  .team-card-perimeter-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg,
      rgba(0, 255, 255, 0.3),
      rgba(255, 20, 147, 0.3),
      rgba(138, 43, 226, 0.3)
    );
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .team-card-perimeter-container:hover::before {
    opacity: 1;
  }

  .team-card-perimeter-container:hover {
    box-shadow:
      0 0 30px rgba(0, 255, 255, 0.6),
      0 0 60px rgba(255, 20, 147, 0.4),
      inset 0 0 40px rgba(138, 43, 226, 0.4);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }

  .team-card-perimeter-container p {
    color: #00FFFF;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1rem;
    text-shadow:
      0 0 10px rgba(0, 255, 255, 0.8),
      0 0 20px rgba(0, 255, 255, 0.4);
    margin-bottom: 8px;
  }

  ul {
    margin: 8px 0px 4px 20px;
  }

  li {
    color: #FF1493;
    text-shadow: 0 0 5px rgba(255, 20, 147, 0.6);
    margin: 4px 0;
    font-weight: 600;
  }
</style>
