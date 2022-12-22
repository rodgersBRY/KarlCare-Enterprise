<template>
  <div class="services">
    <div class="title-section">
      <h2>WHAT WE DO</h2>
      <h3>OUR SERVICES</h3>
    </div>

    <div class="cards">
      <div class="card" v-for="(service, i) in services" :key="i">
        <h3>0{{ i + 1 }}</h3>
        <div class="divider"></div>
        <h2>{{ service.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: "Door to Door Delivery", desc: "" },
        { title: "Running of Errands", desc: "" },
        { title: "Client Pickup and Dropoff", desc: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title-section {
  position: relative;
  text-align: center;
  h2 {
    font-size: 100px;
    color: var(--accent-color);
  }
  h3 {
    color: grey;
    font-size: 26px;
    position: absolute;
    top: 40%;
    left: 45%;
  }
}
.cards {
  display: flex;
  justify-content: space-between;
  .card {
    background: var(--faded-select-color);
    width: 350px;
    padding: 3rem 3rem;
    margin: 2rem;
    .divider {
      background: var(--secondary-color);
      height: 3px;
      width: 80px;
      margin: 20px 0;
    }
    h2 {
      font-size: 36px;
      margin-bottom: 2rem;
      color: grey;
    }
    h3 {
      color: grey;
      font-size: 20px;
      margin-bottom: 3rem;
    }
  }
}
</style>
